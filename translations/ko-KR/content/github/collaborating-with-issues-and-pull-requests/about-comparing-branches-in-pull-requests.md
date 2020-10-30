---
title: About comparing branches in pull requests
intro: Pull requests display diffs to compare the changes you made in your topic branch against the base branch that you want to merge your changes into.
redirect_from:
  - /articles/about-comparing-branches-in-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note:** When creating your pull request, you can change the base branch that you're comparing your changes against. For more information, see "[Creating a pull request](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)."

{% endnote %}

You can view proposed changes in a pull request in the Files changed tab.

![Pull Request Files changed tab](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Rather than viewing the commits themselves, you can view the proposed changes as they'll appear in the files once the pull request is merged. The files appear in alphabetical order within the Files changed tab. Additions to the files appear in green and are prefaced by a `+` sign while content that has been removed appears in red and is prefaced by a `-` sign.

### Diff view options

{% tip %}

**Tip:** If you're having a hard time understanding the context of a change, you can click **View** in the Files changed tab to view the whole file with the proposed changes.

{% endtip %}

You have several options for viewing a diff:
- The unified view shows updated and existing content together in a linear view.
- The split view shows old content on one side and new content on the other side.
- The rich diff view shows a preview of how the changes will look once the pull request is merged.
- The source view shows the changes in source without the formatting of the rich diff view.

You can also choose to ignore whitespace changes to get a more accurate view of the substantial changes in a pull request.

![Diff viewing options menu](/assets/images/help/pull_requests/diff-settings-menu.png)

To simplify reviewing changes in a large pull request, you can filter the diff to only show selected file types{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}, show files you are a CODEOWNER of, hide files you have already viewed,{% endif %} or hide deleted files. For more information, see "[Filtering files in a pull request by file type](/articles/filtering-files-in-a-pull-request)."

  ![File filter drop-down menu](/assets/images/help/pull_requests/file-filter-menu.png)

### Three-dot and two-dot Git diff comparisons

By default, pull requests on {% data variables.product.prodname_dotcom %} show a three-dot diff, or a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.

To see two committish references in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, you can edit the URL of your repository's "Comparing changes" page. For more information, see the  [Git Glossary for "committish"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) from the _Pro Git_ book site.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

A two-dot diff compares two Git committish references, such as SHAs or OIDs (Object IDs), directly with each other. On {% data variables.product.prodname_dotcom %}, the Git committish references in a two-dot diff comparison must be pushed to the same repository or its forks.

If you want to simulate a two-dot diff in a pull request and see a comparison between the most recent versions of each branch, you can merge the base branch into your topic branch, which updates the last common ancestor between your branches.

For more information about Git commands to compare changes, see "[Git diff options ](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" from the _Pro Git_ book site.

### Reasons diffs will not display
- You've exceeded the total limit of files or certain file types. For more information, see "[Limits for viewing content and diffs in a repository](/articles/limits-for-viewing-content-and-diffs-in-a-repository/#diff-limits)."
- Your file matches a rule in the repository's *.gitattributes* file to block that file from displaying by default. For more information, see "[Customizing how changed files appear on GitHub](/articles/customizing-how-changed-files-appear-on-github)."

### 더 읽을거리

- "[About pull requests](/articles/about-pull-requests)"
- "[About forks](/articles/about-forks)"
