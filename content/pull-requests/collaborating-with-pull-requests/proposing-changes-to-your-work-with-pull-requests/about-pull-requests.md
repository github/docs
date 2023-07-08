
### Title: About Pull Requests

## Introduction: "Pull requests allow you to notify others about the changes you have pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators, and add follow-up commits before merging your changes into the base branch."

## Redirects:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
    
## Versions:
  - fpt: '*'
  - ghes: '*'
  - ghae: '*'
  - ghec: '*'
  
## Topics:
  - Pull Requests


## About pull requests


**Note:** When working with pull requests, keep the following in mind:
- If you're working in the [shared repository model](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
- Be very careful when force pushing commits to a pull request. Force pushing changes the repository history and can corrupt your pull request. If other collaborators branch the project before a force push, the force push may overwrite commits that collaborators based their work on.



After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request

You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing Deployment Activity](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)."


After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a Pull Request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."


**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard Shortcuts](/get-started/using-github/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About Pull Request Merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."


You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About Personal Dashboard](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard)."

## Draft pull requests


When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)" and "[Creating a Pull Request from Fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)."

You can convert a pull request to a draft at any time. For more information, see "[Changing the Stage of a Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

## Further reading

- "[Get Startrd](/get-started/quickstart/github-glossary#pull-request)" in the glossary.
- "[About Branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Commenting on a Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Closing a Pull Request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
