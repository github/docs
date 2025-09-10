---
title: Profile contributions reference
intro: 'Find information on what is visible on your contributions graph.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Profile
---

## What counts as a contribution

Contributions are only counted if they meet certain criteria. In some cases, we may need to rebuild your graph in order for contributions to appear.

On your profile page, the following actions **always** count as contributions:

* Creating a new repository
* Forking an existing repository

The following actions **sometimes** count as contributions:
* Opening an issue
* Proposing a pull request
* Submitting a pull request review
* Opening a discussion
* Answering a discussion
* Making a commit

For more information, see [Contribution criteria for issues, pull requests and discussions](#contribution-criteria-for-issues-pull-requests-and-discussions) and [Contribution criteria for commits](#contribution-criteria-for-commits).

### Contribution criteria for issues, pull requests and discussions

Issues, pull requests, and discussions will appear on your contribution graph if they were opened in a standalone repository, not a fork.

Additionally, {% data variables.product.company_short %} limits the number of these items when displaying the contribution graph. If you've reached the limit, the contribution graph may not display all of your contributions.

### Contribution criteria for commits

Commits will appear on your contributions graph if they meet **all** of the following conditions:
* The email address used to make {% ifversion ghes %}or co-author {% endif %} the commits is associated with your account on {% data variables.product.prodname_dotcom %}.
* The commits were made in a standalone repository, not a fork.
* The commits were made in one of two branches:
  * The repository's default branch
  * The `gh-pages` branch (for repositories with project sites). For more information on project sites, see [AUTOTITLE](/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites)

In addition, **at least one** of the following must be true:
* You are a collaborator on the repository or are a member of the organization that owns the repository.
* You have forked the repository.
* You have opened a pull request or issue in the repository.

## Who receives contribution credit

{% ifversion ghes %}

To appear on your profile contributions graph, co-authored commits must meet the same criteria as commits with one author.

{% endif %}

When rebasing commits, the original authors of the commit and the person who rebased the commits, whether on the command line or on {% data variables.location.product_location %}, receive contribution credit.

{% ifversion ghec or fpt %}

If you merged multiple personal accounts, issues, pull requests, and discussions will not be attributed to the new account and will not appear on your contribution graph.

{% endif %}

## How contribution event times are calculated

Timestamps are calculated differently for commits and pull requests:
* **Commits** use the time zone information in the commit timestamp. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/troubleshooting-commits-on-your-timeline).
* **Pull requests** and **issues** opened on {% data variables.product.github %} use your browser's time zone. Those opened via the API use the timestamp or time zone [specified in the API call](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).
