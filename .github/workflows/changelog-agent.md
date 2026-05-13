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
      env:
        GH_TOKEN: ${{ secrets.DOCS_BOT_PAT_BASE }}
        EVENT_NAME: ${{ github.event_name }}
        PR_NUMBER_INPUT: ${{ github.event.inputs.pr_number }}
        DRY_RUN_INPUT: ${{ github.event.inputs.dry_run }}
        PR_JSON_PAYLOAD: ${{ toJson(github.event.pull_request) }}
      run: |
        set -e

        skip() { echo "should_run=false" >> "$GITHUB_OUTPUT"; echo "ℹ️  $1"; exit 0; }

        # ── 1. Resolve the PR ──────────────────────────────────────────────
        if [[ "$EVENT_NAME" == "workflow_dispatch" ]]; then
          PR_NUM="$PR_NUMBER_INPUT"
          PR_JSON=$(gh api "repos/$GITHUB_REPOSITORY/pulls/$PR_NUM")
          MERGED=$(echo "$PR_JSON" | jq -r '.merged')
          if [[ "$MERGED" != "true" ]]; then
            skip "PR #$PR_NUM has not been merged. Skipping."
          fi
        else
          PR_JSON="$PR_JSON_PAYLOAD"
          MERGED=$(echo "$PR_JSON" | jq -r '.merged')
          BASE_REF=$(echo "$PR_JSON" | jq -r '.base.ref')
          if [[ "$MERGED" != "true" || "$BASE_REF" != "main" ]]; then
            skip "PR not merged to main. Skipping."
          fi
          PR_NUM=$(echo "$PR_JSON" | jq -r '.number')
        fi

        PR_AUTHOR=$(echo "$PR_JSON" | jq -r '.user.login')
        PR_TITLE=$(echo "$PR_JSON" | jq -r '.title')
        PR_BODY=$(echo "$PR_JSON" | jq -r '.body // ""')
        PR_URL=$(echo "$PR_JSON" | jq -r '.html_url')

        # ── 2. Check if PR author is in the team ──────────────────────────
        CONTENT=$(gh api repos/github/docs-content/contents/.github/github-to-slack.json \
          --jq '.content') || { echo "::error::Could not fetch github-to-slack.json"; exit 1; }
        MAPPING=$(echo "$CONTENT" | base64 -d)

        if ! echo "$MAPPING" | jq -e --arg user "$PR_AUTHOR" 'has($user)' > /dev/null 2>&1; then
          skip "PR author @$PR_AUTHOR is not in the team mapping. Skipping."
        fi

        # ── 3. Extract linked docs-content issue from PR body ─────────────
        ISSUE_NUM=$(echo "$PR_BODY" | grep -oiE '(close[sd]?|fix(e[sd])?|resolve[sd]?):?\s+github/docs-content#[0-9]+' | grep -oE '[0-9]+$' | head -1)
        if [[ -z "$ISSUE_NUM" ]]; then
          ISSUE_NUM=$(echo "$PR_BODY" | grep -oiE '(close[sd]?|fix(e[sd])?|resolve[sd]?):?\s+https://github\.com/github/docs-content/issues/[0-9]+' | grep -oE '[0-9]+$' | head -1)
        fi
        if [[ -z "$ISSUE_NUM" ]]; then
          skip "No linked docs-content issue found. Skipping."
        fi

        # ── 4. Fetch the docs-content issue and check for parent ──────────
        ISSUE_JSON=$(gh api "repos/github/docs-content/issues/$ISSUE_NUM") || skip "Could not fetch docs-content issue #$ISSUE_NUM. Skipping."
        NODE_ID=$(echo "$ISSUE_JSON" | jq -r '.node_id')

        PARENT_JSON=$(gh api graphql -f query='
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
          }' -f nodeId="$NODE_ID" --jq '.data.node.parent') || skip "GraphQL parent query failed. Skipping."

        if [[ "$PARENT_JSON" == "null" || -z "$PARENT_JSON" ]]; then
          skip "docs-content issue has no parent issue. Skipping."
        fi

        # ── 5. Check for existing open changelog PRs ──────────────────────
        EXISTING=$(gh api "search/issues?q=is:pr+is:open+label:changelog-agent+repo:github/docs-content" \
          --jq '.total_count')
        if [[ "$EXISTING" -gt 0 ]]; then
          skip "Open changelog PR already exists. Skipping."
        fi

        # ── 6. Gather reviewers and changed files ─────────────────────────
        APPROVED_REVIEWERS=$(gh api "repos/$GITHUB_REPOSITORY/pulls/$PR_NUM/reviews" \
          --jq "[.[] | select(.state == \"APPROVED\" and .user.type != \"Bot\" and .user.login != \"$PR_AUTHOR\") | .user.login] | unique | join(\",\")")

        CHANGED_FILES=$(gh api "repos/$GITHUB_REPOSITORY/pulls/$PR_NUM/files?per_page=100" \
          --jq '[.[].filename] | join(",")')

        # ── 7. Read existing changelog examples (first 3 entries) ─────────
        CHANGELOG_EXAMPLES=""
        CHANGELOG_RAW=$(gh api repos/github/docs-content/contents/docs-content-docs/docs-content-workflows/changelog-internal.md \
          --jq '.content' | base64 -d 2>/dev/null) || true
        if [[ -n "$CHANGELOG_RAW" ]]; then
          CHANGELOG_EXAMPLES=$(echo "$CHANGELOG_RAW" | awk '
            /^\*\*[0-9]/ { count++; if (count > 3) exit; capturing=1 }
            capturing { print }
          ')
        fi

        # ── 8. Build context JSON for the agent ───────────────────────────
        DRY_RUN="false"
        if [[ "$EVENT_NAME" == "workflow_dispatch" && "$DRY_RUN_INPUT" == "true" ]]; then
          DRY_RUN="true"
        fi

        mkdir -p /tmp/gh-aw/agent
        jq -n \
          --arg pr_number "$PR_NUM" \
          --arg pr_title "$PR_TITLE" \
          --arg pr_body "$PR_BODY" \
          --arg pr_author "$PR_AUTHOR" \
          --arg pr_url "$PR_URL" \
          --arg changed_files "$CHANGED_FILES" \
          --arg approved_reviewers "$APPROVED_REVIEWERS" \
          --arg issue_num "$ISSUE_NUM" \
          --arg issue_title "$(echo "$ISSUE_JSON" | jq -r '.title')" \
          --arg issue_body "$(echo "$ISSUE_JSON" | jq -r '.body // ""')" \
          --arg parent_number "$(echo "$PARENT_JSON" | jq -r '.number')" \
          --arg parent_title "$(echo "$PARENT_JSON" | jq -r '.title')" \
          --arg parent_body "$(echo "$PARENT_JSON" | jq -r '.body // ""')" \
          --arg parent_url "$(echo "$PARENT_JSON" | jq -r '.url')" \
          --arg parent_author "$(echo "$PARENT_JSON" | jq -r '.author.login // ""')" \
          --arg parent_assignees "$(echo "$PARENT_JSON" | jq -r '[.assignees.nodes[].login] | join(",")')" \
          --arg parent_repo "$(echo "$PARENT_JSON" | jq -r '.repository.nameWithOwner')" \
          --arg changelog_examples "$CHANGELOG_EXAMPLES" \
          --arg dry_run "$DRY_RUN" \
          '{
            pr: {
              number: ($pr_number | tonumber),
              title: $pr_title,
              body: $pr_body,
              author: $pr_author,
              url: $pr_url,
              changed_files: ($changed_files | split(",")),
              approved_reviewers: (if $approved_reviewers == "" then [] else ($approved_reviewers | split(",")) end)
            },
            docs_content_issue: {
              number: ($issue_num | tonumber),
              title: $issue_title,
              body: $issue_body
            },
            parent_issue: {
              number: ($parent_number | tonumber),
              title: $parent_title,
              body: $parent_body,
              url: $parent_url,
              author: $parent_author,
              assignees: (if $parent_assignees == "" then [] else ($parent_assignees | split(",")) end),
              repo: $parent_repo
            },
            changelog_examples: $changelog_examples,
            dry_run: ($dry_run == "true")
          }' > /tmp/gh-aw/agent/context.json

        # ── Outputs ───────────────────────────────────────────────────────
        echo "should_run=true" >> "$GITHUB_OUTPUT"
        echo "pr_number=$PR_NUM" >> "$GITHUB_OUTPUT"
        echo "dry_run=$DRY_RUN" >> "$GITHUB_OUTPUT"

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
