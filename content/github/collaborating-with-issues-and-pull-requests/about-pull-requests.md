---
title: About pull requests
intro: 'Pull requests let you tell others about changes you''ve pushed to a branch in a repository on {% data variables.product.product_name %}. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
redirect_from:
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About pull requests

{% note %}

**Note:** When working with pull requests, keep the following in mind:
* If you're working in the [shared repository model](/articles/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
* When pushing commits to a pull request, don't force push. Force pushing can corrupt your pull request.

{% endnote %}

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](/articles/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request.

{% if currentVersion == "free-pro-team@latest" %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](/articles/viewing-deployment-activity-for-your-repository)."
{% endif %}

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](/articles/merging-a-pull-request)."

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About pull request merges](/articles/about-pull-request-merges)."

{% endtip %}

You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

### Draft pull requests

{% data reusables.gated-features.draft-prs %}

When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a pull request](/articles/creating-a-pull-request)" and "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)."

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. For more information, see "[Changing the stage of a pull request](/articles/changing-the-stage-of-a-pull-request)."

### Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref. 
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

### Further reading

- "[Pull request](/articles/github-glossary/#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/articles/about-branches)"
- "[Commenting on a pull request](/articles/commenting-on-a-pull-request)"
- "[Merging a pull request](/articles/merging-a-pull-request)"
- "[Closing a pull request](/articles/closing-a-pull-request)"
- "[Deleting unused branches](/articles/deleting-unused-branches)"
- "[About pull request merges](/articles/about-pull-request-merges)"
