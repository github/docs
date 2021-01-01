---
title: Why are my contributions not showing up on my profile?
intro: 'Your profile contributions graph is a record of contributions you''ve made to {% data variables.product.product_name %} repositories. Contributions are timestamped according to Coordinated Universal Time (UTC) rather than your local time zone. Contributions are only counted if they meet certain criteria. In some cases, we may need to rebuild your graph in order for contributions to appear.'
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Contributions that are counted

#### Issues and pull requests

Issues and pull requests will appear on your contribution graph if they were opened in a standalone repository, not a fork.

#### Commits
Commits will appear on your contributions graph if they meet **all** of the following conditions:
- The email address used for the commits is associated with your {% data variables.product.product_name %} account.
- The commits were made in a standalone repository, not a fork.
- The commits were made:
  - In the repository's default branch
  - In the `gh-pages` branch (for repositories with project sites)

For more information on project sites, see "[About {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)."

In addition, **at least one** of the following must be true:
- You are a collaborator on the repository or are a member of the organization that owns the repository.
- You have forked the repository.
- You have opened a pull request or issue in the repository.
- You have starred the repository.

### Common reasons that contributions are not counted

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

#### Commit was made less than 24 hours ago

After making a commit that meets the requirements to count as a contribution, you may need to wait for up to 24 hours to see the contribution appear on your contributions graph.

#### Your local Git commit email isn't connected to your account

Commits must be made with an email address that is connected to your account on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}, or the {% data variables.product.product_name %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% if currentVersion == "free-pro-team@latest" %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

You can check the email address used for a commit by adding `.patch` to the end of a commit URL, e.g. <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

The email address in the `From:` field is the address that was set in the [local git config settings](/articles/set-up-git). In this example, the email address used for the commit is `octocat@nowhere.com`.

If the email address used for the commit is not connected to your account on {% data variables.product.product_name %}, {% if currentVersion == "github-ae@latest" %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your {% data variables.product.product_name %} account. Your contributions graph will be rebuilt automatically when you add the new address.{% endif %}

{% warning %}

Generic email addresses--such as `jane@computer.local`--cannot be added to {% data variables.product.product_name %} accounts. If you use such an email for your commits, the commits will not be linked to your {% data variables.product.product_name %} profile and will not show up in your contributions graph.

{% endwarning %}

#### Commit was not made in the default or `gh-pages` branch

Commits are only counted if they are made in the default branch or the `gh-pages` branch (for repositories with project sites). For more information, see "[About {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)."

If your commits are in a non-default or non-`gh-pages` branch and you'd like them to count toward your contributions, you will need to do one of the following:
- [Open a pull request](/articles/creating-a-pull-request) to have your changes merged into the default branch or the `gh-pages` branch.
- [Change the default branch](/github/administering-a-repository/changing-the-default-branch) of the repository.

{% warning %}

Changing the default branch of the repository will change it for all repository collaborators. Only do this if you want the new branch to become the base against which all future pull requests and commits will be made.

{% endwarning %}

#### Commit was made in a fork

Commits made in a fork will not count toward your contributions. To make them count, you must do one of the following:
- [Open a pull request](/articles/creating-a-pull-request) to have your changes merged into the parent repository.
- To detach the fork and turn it into a standalone repository on {% data variables.product.product_name %}, contact {% data variables.contact.contact_support %}. If the fork has forks of its own, let {% data variables.contact.github_support %} know if the forks should move with your repository into a new network or remain in the current network. For more information, see "[About forks](/articles/about-forks/)."

### Further reading

- "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)"
