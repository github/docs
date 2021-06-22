---
title: Comparing commits
intro: You can compare the state of your repository across branches, tags, commits, forks, and dates.
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
To compare different versions of your repository, append `/compare` to your repository's path.

We'll demonstrate the power of Compare by looking at the compare page for [a fork of the Linguist repo](https://github.com/octocat/linguist), which is at [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Every repository's Compare view contains two drop down menus: `base` and `compare`.

`base` should be considered the starting point of your comparison, and `compare` is the endpoint. During a comparison, you can always change your `base` and `compare` points by clicking on **Edit**.

## Comparing branches

The most common use of Compare is to compare branches, such as when you're starting a new pull request. You'll always be taken to the branch comparison view when starting [a new pull request](/articles/creating-a-pull-request).

To compare branches, you can select a branch name from the `compare` drop down menu at the top of the page.

Here's an example of a [comparison between two branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparing tags

Comparing release tags will show you changes to your repository since the last release. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
For more information, see "[Comparing releases](/github/administering-a-repository/comparing-releases)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}To compare tags, you can select a tag name from the `compare` drop-down menu at the top of the page.{% else %} Instead of typing a branch name, type the name of your tag in the `compare` drop down menu.{% endif %}

Here's an example of a [comparison between two tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Comparing commits

You can also compare two arbitrary commits in your repository or its forks on {% data variables.product.prodname_dotcom %} in a two-dot diff comparison.

To quickly compare two commits or Git Object IDs (OIDs) directly with each other in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, edit the URL of your repository's "Comparing changes" page.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

To learn more about other comparison options, see "[Three-dot and two-dot diff comparisons](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)."

## Comparing across forks

You can compare your base repository and any forked repository. This is the view that's presented when a user performs a Pull Request to a project.

To compare branches on different repositories, preface the branch names with user names. For example, by specifying `octocat:main` for `base` and `octo-org:main` for `compare`, you can compare the `main` branch of the repositories respectively owned by `octocat` and `octo-org`.

Here's an example of a [comparison between two repositories](https://github.com/octocat/linguist/compare/master...octo-org:master).

## Comparisons across commits

As a shortcut, Git uses the `^` notation to mean "one commit prior."

You can use this notation to compare a single commit or branch against its immediate predecessors. For example, `96d29b7^^^^^` indicates five commits prior to `96d29b7`, because there are five `^` marks. Typing `96d29b7^^^^^` in the `base` branch and `96d29b7` in the `compare` branch compares the five commits made before `96d29b7` with the `96d29b7` commit.

Here's an example of a [comparison using the `^` notation](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Further reading

- "[Changing the base branch of a pull request](/articles/changing-the-base-branch-of-a-pull-request)"
