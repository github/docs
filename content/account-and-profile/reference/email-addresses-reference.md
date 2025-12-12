---
title: Email addresses reference
shortTitle: Email addresses
intro: Find information about your email addresses on {% data variables.product.github %}, including verification, privacy, and commit attribution.
topics:
  - Accounts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

## Email verification restrictions

{% data reusables.user-settings.no-verification-disposable-emails %}

{% data reusables.user-settings.verify-org-approved-email-domain %}

## Unverified email address restrictions

If you do not verify your email address, you cannot:

* Create or fork repositories
* Create issues or pull requests
* Comment on issues, pull requests, or commits
* Authorize {% data variables.product.prodname_oauth_app %} applications
* Generate {% data variables.product.pat_generic %}s
* Receive email notifications
* Star repositories
* Create or update projects
* Create or update gists
* Create or use {% data variables.product.prodname_actions %}
* Sponsor developers with {% data variables.product.prodname_sponsors %}
* Accept organization invitations

## Email verification for {% data variables.enterprise.prodname_managed_users %}

If you are a member of an {% data variables.enterprise.prodname_emu_enterprise %} and your account was created after August 1st, 2024, your email address is unverified by default.

{% ifversion fpt or ghec %}

## Your `noreply` email address

Your `noreply` email address format depends on when you created your account and your email privacy settings:

* If you created your account _after_ July 18, 2017, your `noreply` email address is an ID number and your username in the form of <code>ID+USERNAME@users.noreply.github.com</code>.
* If you created your account _prior to_ July 18, 2017, and enabled **Keep my email address private** before that date, your `noreply` email address is <code>USERNAME@users.noreply.github.com</code>.
* To get an ID-based `noreply` email address, select (or deselect and reselect) **Keep my email address private** in your email settings.
If you use your `noreply` email address for {% data variables.product.github %} to make commits and then change your username, those commits will not be associated with your account. This does not apply if you're using the ID-based `noreply` address from {% data variables.product.github %}. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username).{% endif %}
