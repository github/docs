---
title: Why are my contributions not showing up on my profile?
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
---

## About your contribution graph

Your profile contributions graph is a record of contributions you've made to repositories on {% data variables.product.prodname_dotcom %}. Contributions are timestamped according to Coordinated Universal Time (UTC) rather than your local time zone. Contributions are only counted if they meet certain criteria. In some cases, we may need to rebuild your graph in order for contributions to appear.

If you are part of an organization that uses SAML single sign-on (SSO), you won’t be able to see contribution activity from the organization on your profile if you do not have an active SSO session. People viewing your profile from outside your organization will see anonymized contribution activity of your contribution activity for your organization.

## Contributions that are counted

### Issues, pull requests and discussions

Issues, pull requests, and discussions will appear on your contribution graph if they were opened in a standalone repository, not a fork.

{% data variables.product.company_short %} limits the number of these items when displaying the contribution graph. If you've reached the limit, the contribution graph may not display all of your contributions.

### Commits

Commits will appear on your contributions graph if they meet **all** of the following conditions:
* The email address used for the commits is associated with your account on {% data variables.product.prodname_dotcom %}.
* The commits were made in a standalone repository, not a fork.
* The commits were made:
  * In the repository's default branch
  * In the `gh-pages` branch (for repositories with project sites)

For more information on project sites, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

In addition, **at least one** of the following must be true:
* You are a collaborator on the repository or are a member of the organization that owns the repository.
* You have forked the repository.
* You have opened a pull request or issue in the repository.

## Common reasons that contributions are not counted

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Commit was made less than 24 hours ago

After making a commit that meets the requirements to count as a contribution, you may need to wait for up to 24 hours to see the contribution appear on your contributions graph.

### Your local Git commit email isn't connected to your account

Commits must be made with an email address that is connected to your account on {% data variables.product.prodname_dotcom %}{% ifversion fpt or ghec %}, or the {% data variables.product.prodname_dotcom %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% ifversion fpt or ghec %} For more information about `noreply` email addresses, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

You can check the email address used for a commit by adding `.patch` to the end of a commit URL. For example, the following commit URL includes `.patch`.

[https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch](https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch)

```text
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

The email address in the `From:` field is the address that was set in the [local git config settings](/get-started/getting-started-with-git/set-up-git). In this example, the email address used for the commit is `octocat@nowhere.com`.

If the email address used for the commit is not connected to your account on {% data variables.product.prodname_dotcom %}, you must [add the email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to your account on {% data variables.product.prodname_dotcom %}. Your contributions graph will be rebuilt automatically when you add the new address.

{% ifversion fpt or ghec %}
{% note %}

**Note**: If you use a {% data variables.enterprise.prodname_managed_user %}, you cannot add additional email addresses to the account, even if multiple email addresses are registered with your identity provider (IdP). Therefore, only commits that are authored by the primary email address registered with your IdP can be associated with your {% data variables.enterprise.prodname_managed_user %}.

{% endnote %}
{% endif %}

Generic email addresses, such as `jane@computer.local`, cannot be added to {% data variables.product.prodname_dotcom %} accounts and linked to commits. If you've authored any commits using a generic email address, the commits will not be linked to your {% data variables.product.prodname_dotcom %} profile and will not show up in your contribution graph.

### Commit was not made in the default or `gh-pages` branch

Commits are only counted if they are made in the default branch or the `gh-pages` branch (for repositories with project sites). For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

If your commits are in a non-default or non-`gh-pages` branch and you'd like them to count toward your contributions, you will need to do one of the following:
* [Open a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to have your changes merged into the default branch or the `gh-pages` branch.
* [Change the default branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) of the repository.

{% warning %}

**Warning**: Changing the default branch of the repository will change it for all repository collaborators. Only do this if you want the new branch to become the base against which all future pull requests and commits will be made.

{% endwarning %}

### Commit was made in a fork

Commits made in a fork will not count toward your contributions. To make them count, you must open a pull request to have your changes merged into the parent repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."

## Further reading

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)"
