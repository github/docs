---
title: Comparing commits
intro: 'You can compare the state of your repository across branches, tags, commits, forks, and dates.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
To compare different versions of your repository, append `/compare` to your repository's path.

We'll demonstrate the power of Compare by looking at the compare page for [a fork of the Linguist repo](https://github.com/octocat/linguist), which is at [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Every repository's Compare view contains two drop down menus: `base` and `compare`.

`base` should be considered the starting point of your comparison, and `compare` is the endpoint. During a comparison, you can always change your `base` and `compare` points by clicking on **Edit**.

## Comparing branches

The most common use of Compare is to compare branches, such as when you're starting a new pull request. You'll always be taken to the branch comparison view when starting [a new pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

To compare branches, you can select a branch name from the `compare` drop down menu at the top of the page.

Here's an example of a [comparison between two branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparing tags

Comparing release tags will show you changes to your repository since the last release.
For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/comparing-releases)."

To compare tags, you can select a tag name from the `compare` drop-down menu at the top of the page.

Here's an example of a [comparison between two tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

{% note %}

**Note:** If a branch and a tag have the same name, the branch will be used when comparing commits. You can compare the tag specifically by adding `tags/` to the tag name.

{% endnote %}

## Comparing commits

You can also compare two arbitrary commits in your repository or its forks on {% data variables.product.prodname_dotcom %} in a two-dot diff comparison.

To quickly compare two commits or Git Object IDs (OIDs) directly with each other in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, edit the URL of your repository's "Comparing changes" page.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

To learn more about other comparison options, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)."

## Comparing across forks

You can compare your base repository and any forked repository. This is the view that's presented when a user performs a Pull Request to a project.

To compare branches on different repositories, preface the branch names with user names. For example, by specifying `octocat:main` for `base` and `octo-org:main` for `compare`, you can compare the `main` branch of the repositories respectively owned by `octocat` and `octo-org`.

Here's an example of a [comparison between two repositories](https://github.com/github-linguist/linguist/compare/master...octocat:master).

## Comparisons across commits

You can compare a single commit in Git to the commit's predecessors using two types of notation.

| Notation | Meaning | Example | Comparison |
| :-: | :- | :- | :- |
| `^` | One commit prior. Repeat the `^` character to indicate one more commit further back in the history. | `96d29b7^^^^^`<br/><br/>Represents the commit five commits prior to `96d29b7`. | [View comparison](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7) |
| `~N` | N commit(s) prior. | `96d29b7~5`<br/><br/>Represents the commit five commits prior to `96d29b7`. | [View comparison](https://github.com/octocat/linguist/compare/octocat:96d29b7%7E5...octocat:96d29b7) |

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
