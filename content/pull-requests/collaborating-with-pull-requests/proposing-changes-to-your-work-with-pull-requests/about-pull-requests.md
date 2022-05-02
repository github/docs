---
title: About pull requests
intro: 'Pull requests let you tell others about changes you''ve pushed to a branch in a repository on {% data variables.product.product_name %}. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## About pull requests

{% note %}

**Note:** When working with pull requests, keep the following in mind:
* If you're working in the [shared repository model](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
* Be very careful when force pushing commits to a pull request. Force pushing changes the repository history and can corrupt your pull request. If other collaborators branch the project before a force push, the force push may overwrite commits that collaborators based their work on.

{% endnote %}

You can create pull requests on {% data variables.product.prodname_dotcom_the_website %}, with {% data variables.product.prodname_desktop %}, in {% data variables.product.prodname_codespaces %}, on {% data variables.product.prodname_mobile %}, and when using GitHub CLI.

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](/articles/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request. {% if pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)."
{% endif %}

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](/articles/merging-a-pull-request)."

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About pull request merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% endtip %}

You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

## Draft pull requests

{% data reusables.gated-features.draft-prs %}

When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a pull request](/articles/creating-a-pull-request)" and "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)."

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. For more information, see "[Changing the stage of a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

## Further reading

- "[Pull request](/articles/github-glossary/#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Commenting on a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Closing a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
name: Bug Report
description: File a bug report
title: "[Bug]: "
labels: ["bug", "triage"]
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true
  - type: dropdown
    id: version
    attributes:
      label: Version
      description: What version of our software are you running?
      options:
        - 1.0.2 (Default)
        - 1.0.3 (Edge)
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://example.com)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
