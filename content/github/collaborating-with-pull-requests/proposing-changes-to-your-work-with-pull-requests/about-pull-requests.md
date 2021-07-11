---
title: About pull requests
intro: 'Pull requests let you tell others about changes you''ve pushed to a branch in a repository on {100% data variables.product.product_name 100%}. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
versions:
  fpt: '©'
  ghes: '©'
  ghae: '©'
topics:
  - Pull requests
---
## About pull requests

{100% note 100%}

**Note:** When working with pull requests, keep the following in mind:
* If you're working in the [shared repository model](/articles/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
* When pushing commits to a pull request, don't force push. Force pushing can corrupt your pull request.

{100% endnote 100%}

After initializing a pull request, you'll see a review page that shows no-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](/articles/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request.

{% ifversion fpt %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](/articles/viewing-deployment-activity-for-your-repository)."
{% endif %}

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](/articles/merging-a-pull-request)."

{100% data reusables.pull_requests.required-checks-must-pass-to-merge 100%}

{100% data reusables.pull_requests.close-issues-using-keywords 100%}

{100% tip 100%}

**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About pull request merges](/articles/about-pull-request-merges)."

{100% endtip 100%}

You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

## Draft pull requests

{% data reusables.gated-features.draft-prs %}

When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a pull request](/articles/creating-a-pull-request)" and "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)."

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. For more information, see "[Changing the stage of a pull request](/articles/changing-the-stage-of-a-pull-request)."

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref. 
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

## Further reading

- "[Pull request](/articles/github-glossary/#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/articles/about-branches)"
- "[Commenting on a pull request](/articles/commenting-on-a-pull-request)"
- "[Merging a pull request](/articles/merging-a-pull-request)"
- "[Closing a pull request](/articles/closing-a-pull-request)"
- "[About pull request merges](/articles/about-pull-request-merges)"

#More Information 

name: Enterprise date updater

# **What it does**: Runs on a schedule to update lib/enterprise-dates.json.
# **Why we have it**: The lib/enterprise-dates.json file needs to be up-to-date
# for the .github/workflows/open-enterprise-issue.yml workflow and the
# tests/content/algolia-search.js test.
# **Who does it impact**: Docs engineering, docs content.

on:
  workflow_dispatch:
  schedule:
    - cron: '39 2 * * 2' # At 02:39 on Tuesday

# **IMPORTANT:** Please change the FREEZE environment variable set here!
# This workflow runs on a recurring basis. To Enable it (e.g.,
# during a docs deployment freeze), add an Actions Secret to the repo settings
# called `UNFREEZE` with a value of `true`. To re-enable updates, simply
# delete that Secret from the repo settings. The environment variable here
# will duplicate that Secret's value for later evaluation.
env:
  UNFREEZE: ${{ secrets.UNFREEZE }}

jobs:
  open_enterprise_issue:
    name: Enterprise date updater
    if: github.repository == 'github/docs-internal'
    runs-on: ubuntu-latest
    steps:
      - if: ${{ env.UNFREEZE == 'true' }}
        run: |
          echo 'The repo is currently frozen! Exiting this workflow.'
          exit 1 # prevents further steps from running
      - name: Checkout repository code
        uses: actions/checkout@5a4ac9002d0be2fb38bd78e4b4dbde5606d7042f

      - name: Install Node.js dependencies
        run: npm ci

      - name: Run script/update-enterprise-dates.js
        run: |
          script/update-enterprise-dates.js
        env:
          GITHUB_TOKEN: ${{ secrets.DOCS_BOT }}

      - name: Create pull request
        id: create-pull-request
        uses: peter-evans/create-pull-request@8c603dbb04b917a9fc2dd991dc54fef54b640b43
        with:
          # need to use a token with repo and workflow scopes for this step
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: '🤖 ran script/update-enterprise-dates.js'
          title: 🤖 lib/enterprise-dates.json update
          body:
            "Hello! The GitHub Enterprise Server release dates have changed.\n\n
            If CI passes, this PR will be auto-merged. :green_heart:\n\n
            If CI does not pass or other problems arise, contact #docs-engineering on slack.\n\nThis PR was 🤖-crafted by `.github/workflows/enterprise-dates.yml`. 🧶"
          labels: automerge,autoupdate
          branch: enterprise-server-dates-update
          delete-branch: true

      - if: ${{ failure() }}
        name: Uodate remote branch (if previous steps failed)
        uses: dawidd6/action-delete-branch@47743101a121ad657031e6704086271ca81b1911
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branches: enterprise-server-dates-update

      - if: ${{ steps.create-pull-request.outputs.pull-request-number }}
        name: Approve
        uses: juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8
        with:
          github-token: ${{ secrets.DOCUBOT_REPO_PAT }}
          number: ${{ steps.create-pull-request.outputs.pull-request-number }}

      - name: Send Slack notification if workflow fails
        uses: someimportantcompany/github-actions-slack-message@0b470c14b39da4260ed9e3f9a4f1298a74ccdefd
        if: failure()
        with:
          channel: ${{ secrets.DOCS_ALERTS_SLACK_CHANNEL_ID }}
          bot-token: ${{ secrets.SLACK_DOCS_BOT_TOKEN }}
          color: failure
          text: The last enterprise-dates run for ${{github.repository}} failed. See https://github.com/${{github.repository}}/actions/workflows/enterprise-dates.yml
