---
# **What it does**: When a PR merges that closes a docs-content issue with a
#   parent issue, uses an AI agent to draft a changelog entry, opens a PR in
#   github/docs-content, and DMs the author in Slack for review.
# **Why we have it**: Automates the changelog drafting process so authors
#   don't have to remember to write a changelog entry manually.
# **Who does it impact**: docs-content team members.

on:
  # TODO: Re-enable after testing via workflow_dispatch
  # pull_request:
  #   types: [closed]
  workflow_dispatch:
    inputs:
      pr_number:
        description: "PR number to test with (must be a merged PR)"
        required: true
        type: number
      dry_run:
        description: "Dry run — log actions but do not create PR or send Slack DM"
        required: false
        type: boolean
        default: true
  permissions:
    contents: read
    pull-requests: read
    issues: read
  steps:
    - id: gather_context
      uses: actions/github-script@v8
      env:
        DOCS_BOT_PAT: ${{ secrets.DOCS_BOT_PAT_BASE }}
      with:
        script: |
          // Default octokit uses github.token for in-repo (docs-internal) calls
          const octokit = github;
          // Cross-repo octokit uses DOCS_BOT_PAT for docs-content and GraphQL calls
          const crossRepoOctokit = github.getOctokit(process.env.DOCS_BOT_PAT);

          // 1. Resolve the PR
          let pr;
          if (context.eventName === 'workflow_dispatch') {
            const prNumber = parseInt(process.env.INPUT_PR_NUMBER || '${{ github.event.inputs.pr_number }}', 10);
            const { data } = await octokit.rest.pulls.get({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: prNumber,
            });
            pr = data;
            if (!pr.merged) {
              core.setOutput('should_run', 'false');
              core.info(`PR #${prNumber} has not been merged. Skipping.`);
              return;
            }
          } else {
            pr = context.payload.pull_request;
            if (!pr.merged || pr.base.ref !== 'main') {
              core.setOutput('should_run', 'false');
              return;
            }
          }

          // 2. Check if PR author is in the team (via github-to-slack.json)
          let mapping = {};
          try {
            const { data } = await crossRepoOctokit.rest.repos.getContent({
              owner: 'github',
              repo: 'docs-content',
              path: '.github/github-to-slack.json',
            });
            const content = Buffer.from(data.content, 'base64').toString('utf-8');
            mapping = JSON.parse(content);
          } catch (err) {
            core.setFailed(`Could not fetch github-to-slack.json: ${err.message}`);
            return;
          }

          const teamMembers = Object.keys(mapping).filter(k => !k.startsWith('_'));
          if (!teamMembers.includes(pr.user.login)) {
            core.setOutput('should_run', 'false');
            core.info(`PR author @${pr.user.login} is not in the team mapping. Skipping.`);
            return;
          }

          // 3. Extract linked docs-content issue from PR body
          const body = pr.body || '';
          const patterns = [
            /(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?):?\s+github\/docs-content#(\d+)/gi,
            /(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?):?\s+https:\/\/github\.com\/github\/docs-content\/issues\/(\d+)/gi,
          ];

          let issueNumber = null;
          for (const pattern of patterns) {
            const match = pattern.exec(body);
            if (match) {
              issueNumber = parseInt(match[1], 10);
              break;
            }
          }

          if (!issueNumber) {
            core.setOutput('should_run', 'false');
            core.info('No linked docs-content issue found. Skipping.');
            return;
          }

          // 4. Fetch the docs-content issue and check for parent
          let issue;
          try {
            const { data } = await crossRepoOctokit.rest.issues.get({
              owner: 'github',
              repo: 'docs-content',
              issue_number: issueNumber,
            });
            issue = data;
          } catch (err) {
            core.setOutput('should_run', 'false');
            core.info(`Could not fetch docs-content issue #${issueNumber}. Skipping.`);
            return;
          }

          // Query for parent issue via GraphQL
          const query = `
            query($nodeId: ID!) {
              node(id: $nodeId) {
                ... on Issue {
                  parent {
                    number
                    title
                    body
                    url
                    author { login }
                    assignees(first: 10) {
                      nodes { login }
                    }
                    repository {
                      nameWithOwner
                    }
                  }
                }
              }
            }
          `;

          let parentResult;
          try {
            parentResult = await crossRepoOctokit.graphql(query, { nodeId: issue.node_id });
          } catch (err) {
            core.setOutput('should_run', 'false');
            core.info(`GraphQL parent query failed. Skipping.`);
            return;
          }

          const parent = parentResult.node?.parent;
          if (!parent) {
            core.setOutput('should_run', 'false');
            core.info('docs-content issue has no parent issue. Skipping.');
            return;
          }

          // 5. Check for existing open changelog PRs (label is set by safe-outputs config, not agent-controlled)
          const { data: openPRs } = await crossRepoOctokit.rest.pulls.list({
            owner: 'github',
            repo: 'docs-content',
            state: 'open',
            per_page: 5,
          });
          const changelogPRs = openPRs.filter(p => p.labels.some(l => l.name === 'changelog-agent'));

          if (changelogPRs.length > 0) {
            core.setOutput('should_run', 'false');
            core.info(`Open changelog PR already exists: ${changelogPRs[0].html_url}`);
            return;
          }

          // 6. Gather reviewers and changed files
          const { data: reviews } = await octokit.rest.pulls.listReviews({
            owner: context.repo.owner,
            repo: context.repo.repo,
            pull_number: pr.number,
          });

          const approvedReviewers = [...new Set(
            reviews
              .filter(r => r.state === 'APPROVED' && r.user.type !== 'Bot' && r.user.login !== pr.user.login)
              .map(r => r.user.login)
          )];

          const { data: files } = await octokit.rest.pulls.listFiles({
            owner: context.repo.owner,
            repo: context.repo.repo,
            pull_number: pr.number,
            per_page: 100,
          });

          const changedFiles = files.map(f => f.filename);

          // 7. Read existing changelog examples
          let changelogExamples = '';
          try {
            const { data: changelogData } = await crossRepoOctokit.rest.repos.getContent({
              owner: 'github',
              repo: 'docs-content',
              path: 'docs-content-docs/docs-content-workflows/changelog-internal.md',
            });
            const changelog = Buffer.from(changelogData.content, 'base64').toString('utf-8');
            const lines = changelog.split('\n');
            let count = 0;
            let examples = [];
            let capturing = false;
            for (const line of lines) {
              if (/^\*\*\d/.test(line)) {
                count++;
                if (count > 3) break;
                capturing = true;
              }
              if (capturing) examples.push(line);
            }
            changelogExamples = examples.join('\n');
          } catch (err) {
            core.warning(`Could not read changelog examples: ${err.message}`);
          }

          // 8. Build context JSON for the agent
          const context_data = {
            pr: {
              number: pr.number,
              title: pr.title,
              body: pr.body || '',
              author: pr.user.login,
              url: pr.html_url,
              changed_files: changedFiles,
              approved_reviewers: approvedReviewers,
            },
            docs_content_issue: {
              number: issueNumber,
              title: issue.title,
              body: issue.body || '',
            },
            parent_issue: {
              number: parent.number,
              title: parent.title,
              body: parent.body || '',
              url: parent.url,
              author: parent.author?.login || '',
              assignees: (parent.assignees?.nodes || []).map(a => a.login),
              repo: parent.repository.nameWithOwner,
            },
            changelog_examples: changelogExamples,
            dry_run: context.eventName === 'workflow_dispatch' && '${{ github.event.inputs.dry_run }}' === 'true',
          };

          // Write context to the agent data directory
          const fs = require('fs');
          fs.mkdirSync('/tmp/gh-aw/agent', { recursive: true });
          fs.writeFileSync('/tmp/gh-aw/agent/context.json', JSON.stringify(context_data, null, 2));

          core.setOutput('should_run', 'true');
          core.setOutput('pr_number', pr.number.toString());
          core.setOutput('dry_run', context_data.dry_run ? 'true' : 'false');

if: |
  github.repository == 'github/docs-internal' &&
  needs.pre_activation.outputs.gather_context_result == 'success' &&
  needs.pre_activation.outputs.should_run == 'true'

jobs:
  pre-activation:
    outputs:
      should_run: ${{ steps.gather_context.outputs.should_run }}
      pr_number: ${{ steps.gather_context.outputs.pr_number }}
      dry_run: ${{ steps.gather_context.outputs.dry_run }}

concurrency:
  group: changelog-agent-${{ github.event.pull_request.number || github.event.inputs.pr_number }}
  cancel-in-progress: true

engine: copilot

permissions:
  contents: read
  issues: read
  pull-requests: read

tools:
  github:
    toolsets: [repos, issues, pull_requests]
    github-token: ${{ secrets.DOCS_BOT_PAT_BASE }}
  bash:
    - "cat *"
    - "ls *"
    - "jq *"

safe-outputs:
  github-token: ${{ secrets.DOCS_BOT_PAT_BASE }}
  failure-issue-repo: github/docs-content
  create-pull-request:
    target-repo: "github/docs-content"
    title-prefix: "Changelog draft for docs-internal PR #"
    labels: [ready-for-doc-review, skip FR board, llm-generated]
    preserve-branch-name: true
    draft: true
    protected-files: fallback-to-issue
  add-comment:
    target-repo: "github/docs-internal"
    max: 2
  noop:
  jobs:
    slack-notify:
      description: "Send a Slack DM to the PR author with the changelog PR link"
      runs-on: ubuntu-latest
      output: "Slack notification sent"
      permissions:
        contents: none
      inputs:
        github_username:
          description: "GitHub username of the PR author"
          required: true
          type: string
        changelog_pr_url:
          description: "URL of the created changelog PR"
          required: true
          type: string
        source_pr_url:
          description: "URL of the source docs-internal PR"
          required: true
          type: string
        parent_title:
          description: "Title of the parent initiative issue"
          required: true
          type: string
        reviewers:
          description: "Comma-separated list of reviewer usernames"
          required: false
          type: string
        stakeholders:
          description: "Comma-separated list of stakeholder usernames"
          required: false
          type: string
      steps:
        - name: Read slack mapping and send DM
          env:
            SLACK_TOKEN: ${{ secrets.SLACK_DOCS_BOT_TOKEN }}
            GH_TOKEN: ${{ secrets.DOCS_BOT_PAT_BASE }}
          run: |
            set -e

            # Fetch the github-to-slack mapping
            MAPPING=$(gh api repos/github/docs-content/contents/.github/github-to-slack.json \
              --jq '.content' | base64 -d)

            USERNAME=$(jq -r '.items[] | select(.type == "slack_notify") | .github_username' "$GH_AW_AGENT_OUTPUT")
            CHANGELOG_PR_URL=$(jq -r '.items[] | select(.type == "slack_notify") | .changelog_pr_url' "$GH_AW_AGENT_OUTPUT")
            SOURCE_PR_URL=$(jq -r '.items[] | select(.type == "slack_notify") | .source_pr_url' "$GH_AW_AGENT_OUTPUT")
            PARENT_TITLE=$(jq -r '.items[] | select(.type == "slack_notify") | .parent_title' "$GH_AW_AGENT_OUTPUT")
            REVIEWERS=$(jq -r '.items[] | select(.type == "slack_notify") | .reviewers // ""' "$GH_AW_AGENT_OUTPUT")
            STAKEHOLDERS=$(jq -r '.items[] | select(.type == "slack_notify") | .stakeholders // ""' "$GH_AW_AGENT_OUTPUT")

            SLACK_USER_ID=$(echo "$MAPPING" | jq -r --arg user "$USERNAME" '.[$user] // empty')

            if [[ -z "$SLACK_USER_ID" ]]; then
              echo "No Slack mapping for $USERNAME. Skipping DM."
              exit 0
            fi

            MESSAGE=$(cat <<EOF
            👋 Hi! A changelog draft has been created for your merged PR:

            📝 *Changelog PR:* ${CHANGELOG_PR_URL}
            🔗 *Source PR:* ${SOURCE_PR_URL}
            🎯 *Parent initiative:* ${PARENT_TITLE}

            *Reviewers to thank:* ${REVIEWERS:-none}
            *Stakeholders to thank:* ${STAKEHOLDERS:-none}

            Please review the draft changelog entry and merge or close the PR. The entry is AI-generated, so double-check accuracy and tone.
            EOF
            )

            curl -sS -X POST https://slack.com/api/chat.postMessage \
              -H "Authorization: Bearer ${SLACK_TOKEN}" \
              -H "Content-Type: application/json" \
              --data "$(jq -n --arg channel "$SLACK_USER_ID" --arg text "$MESSAGE" \
                '{channel: $channel, text: $text}')"
    failure-alert:
      description: "Send Slack alert on workflow failure"
      runs-on: ubuntu-latest
      output: "Failure alert sent"
      permissions:
        contents: none
      inputs:
        error_message:
          description: "Error details"
          required: false
          type: string
      steps:
        - name: Alert on failure
          env:
            SLACK_TOKEN: ${{ secrets.SLACK_DOCS_BOT_TOKEN }}
            SLACK_CHANNEL_ID: ${{ secrets.DOCS_ALERTS_SLACK_CHANNEL_ID }}
          run: |
            curl -sS -X POST https://slack.com/api/chat.postMessage \
              -H "Authorization: Bearer ${SLACK_TOKEN}" \
              -H "Content-Type: application/json" \
              --data "$(jq -n \
                --arg channel "$SLACK_CHANNEL_ID" \
                --arg text ":warning: *Changelog agent* failed in *${{ github.repository }}*\n<${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}|View workflow run>" \
                '{channel: $channel, text: $text}')"

timeout-minutes: 15
---

# Changelog Entry Drafter

You are a technical writer for GitHub Docs. Your job is to draft a changelog entry for an internal docs changelog based on a PR that just merged.

## Context

Read the context file at `/tmp/gh-aw/agent/context.json`. It contains:

- PR details (title, body, author, changed files, approved reviewers)
- The linked docs-content issue (title, body)
- The parent issue representing the broader feature/initiative (title, body, author, assignees)
- Example entries from the existing changelog (match this style)
- Whether this is a dry run

## Dry Run Mode

If `dry_run` is `true` in the context, do NOT call any safe-outputs. Instead, output a summary of what you would do:

- The generated changelog entry text
- The PR title and labels you would apply
- The Slack notification you would send

Then call the `noop` safe-output and stop.

## Changelog Entry Rules

Write a changelog entry following these rules:

- Write in plain, clear language suitable for an internal audience of docs team members
- Focus on what shipped and its impact on users of docs.github.com
- Use present tense or past tense consistently
- Include links to relevant docs pages when appropriate. Derive URLs from the
  `changed_files` list in the context — a file at `content/{path}.md` maps to
  `https://docs.github.com/en/{path}` (strip the `content/` prefix and `.md` suffix).
- The entry MUST include these parts in order:
  1. A description paragraph (or short paragraphs/list) explaining what shipped
  2. A line starting with `Anticipated impact:` followed by one or two sentences about who is affected and how
  3. A line: `Authored by @{username}`
  4. A line: `Thanks to @reviewer1, @reviewer2, ... for their reviews and contributions!`
- Do NOT bold or add markdown formatting to the Anticipated impact / Authored by / Thanks to lines — they should be plain text
- Do NOT include any internal issue numbers, PR numbers, or repo references in the description
- Do NOT disclose sensitive information
- Match the tone and structure of the example entries provided
- Output ONLY the changelog entry text in the draft step (no date header, no `<hr>` tag — you will add those when composing the full block for insertion)

## Steps

1. Read `/tmp/gh-aw/agent/context.json`
2. Analyze the PR details, docs-content issue, and parent issue to understand what shipped
3. Look at the `changelog_examples` field to understand the style
4. Draft the changelog entry following the rules above
5. Determine today's date (you will use it for the date header when inserting)

### Creating the PR

6. Read the current changelog file from github/docs-content at path
   `docs-content-docs/docs-content-workflows/changelog-internal.md`
7. Insert the new entry after the first `# ` heading. Format:
   ```
   **{date in "1 January 2025" format}**

   {your drafted entry text}

   <hr>
   ```
8. Create a pull request in github/docs-content with:
   - The updated changelog file as the change
   - Title: `Changelog draft for docs-internal PR #{pr_number}`
   - Body in this exact format:
     ```
     ### Automated docs changelog draft

     _Generated by the changelog-agent workflow from [docs-internal PR #{number}]({url})._

     **⚠️ This is an AI-generated draft. Please review carefully before merging.**

     **Source PR:** [docs-internal#{number}]({url})
     **Parent initiative:** [{parent_title}]({parent_url})

     #### Credits
     - **Author:** @{pr_author}
     - **Reviewers:** @reviewer1, @reviewer2
     - **Parent issue author:** @{parent_author}
     - **Parent issue assignees:** @{assignee1}, @{assignee2}

     #### Review checklist
     - [ ] Entry is accurate and covers what shipped
     - [ ] Content is appropriate for the internal audience
     - [ ] Format is consistent with other changelog entries
     - [ ] No sensitive information disclosed
     ```
### Notifications

9. Post a comment on the source PR in github/docs-internal:
   ```
   <!-- changelog-agent-handled -->
   🤖 A changelog draft PR has been automatically created in docs-content: {changelog_pr_url}
   ```

10. Call the `slack_notify` safe-output with:
    - `github_username`: the PR author's GitHub username
    - `changelog_pr_url`: the URL of the changelog PR you just created
    - `source_pr_url`: the source PR URL from context
    - `parent_title`: the parent issue title
    - `reviewers`: comma-separated list of approved reviewer usernames
    - `stakeholders`: comma-separated list of parent issue author + assignees

## Important

- If any step fails (e.g., cannot read the changelog file, or the PR creation fails),
  report the error clearly and stop.
- Do NOT fabricate information. Use only what is in the context file.
- Keep the changelog entry concise — typically 3-6 sentences for the description.
