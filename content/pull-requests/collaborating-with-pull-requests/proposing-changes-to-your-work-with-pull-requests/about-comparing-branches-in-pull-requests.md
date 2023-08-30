---
title: About comparing branches in pull requests
intro: Pull requests display diffs to compare the changes you made in your topic branch against the base branch that you want to merge your changes into.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
---
{% note %}

**Note:** When creating your pull request, you can change the base branch that you're comparing your changes against. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository)."

{% endnote %}

You can view proposed changes in a pull request in the Files changed tab.
![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Rather than viewing the commits themselves, you can view the proposed changes as they'll appear in the files once the pull request is merged. The files appear in alphabetical order within the Files changed tab. Additions to the files appear in green and are prefaced by a `+` sign while content that has been removed appears in red and is prefaced by a `-` sign.

## Diff view options

{% tip %}

**Tip:** If you're having a hard time understanding the context of a change, you can click **View** in the Files changed tab to view the whole file with the proposed changes.

{% endtip %}

You have several options for viewing a diff:
- The unified view shows updated and existing content together in a linear view.
- The split view shows old content on one side and new content on the other side.
- The rich diff view shows a preview of how the changes will look once the pull request is merged.
- The source view shows the changes in source without the formatting of the rich diff view.

You can also choose to ignore whitespace changes to get a more accurate view of the substantial changes in a pull request.

![Screenshot of the "Files changed" tab for a pull request. The "Diff view" menu is outlined in dark orange.](/assets/images/help/pull_requests/diff-settings-menu.png)

To simplify reviewing changes in a large pull request, you can filter the diff to only show selected file types, show files you are a CODEOWNER of, hide files you have already viewed, or hide deleted files. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)."

![Screenshot of the file filter dropdown menu. The menu is expanded and outlined in dark orange.](/assets/images/help/pull_requests/file-filter-menu.png)

## Reasons diffs will not display

- You've exceeded the total limit of files or certain file types. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)."
- Your file matches a rule in the repository's _.gitattributes_ file to block that file from displaying by default. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)."

## Three-dot and two-dot Git diff comparisons

There are two comparison methods for the `git diff` command; two-dot (`git diff A..B`) and three-dot (`git diff A...B`). By default, pull requests on {% data variables.product.prodname_dotcom %} show a three-dot diff.

### Three-dot Git diff comparison

The three-dot comparison shows the difference between the latest common commit of both branches (merge base) and the most recent version of the topic branch.

### Two-dot Git diff comparison

The two-dot comparison shows the difference between the latest state of the base branch (for example, `main`) and the most recent version of the topic branch.

To see two committish references in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, you can edit the URL of your repository's "Comparing changes" page. For more information, see the  [Git Glossary for "committish"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) from the _Pro Git_ book site.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

A two-dot diff compares two Git committish references, such as SHAs or OIDs (Object IDs), directly with each other. On {% data variables.product.prodname_dotcom %}, the Git committish references in a two-dot diff comparison must be pushed to the same repository or its forks.

If you want to simulate a two-dot diff in a pull request and see a comparison between the most recent versions of each branch, you can merge the base branch into your topic branch, which updates the last common ancestor between your branches.

For more information about Git commands to compare changes, see "[Git diff options](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" from the _Pro Git_ book site.

## About three-dot comparison on {% data variables.product.prodname_dotcom %}

Since the three-dot comparison compares with the merge base, it is focusing on "what a pull request introduces".

When you use a two-dot comparison, the diff changes when the base branch is updated, even if you haven't made any changes to the topic branch. Additionally, a two-dot comparison focuses on the base branch. This means that anything you add is displayed as missing from the base branch, as if it was a deletion, and vice versa. As a result, the changes the topic branch introduces become ambiguous.

In contrast, by comparing the branches using the three-dot comparison, changes in the topic branch are always in the diff if the base branch is updated, because the diff shows all of the changes since the branches diverged.

### Merging often

To avoid getting confused, merge the base branch (for example, `main`) into your topic branch frequently. By merging the base branch, the diffs shown by two-dot and three-dot comparisons are the same. We recommend merging a pull request as soon as possible. This encourages contributors to make pull requests smaller, which is recommended in general.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
