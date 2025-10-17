---
title: Username reference
shortTitle: Username reference
intro: Find information about changing your {% data variables.product.github %} username.
topics:
  - Accounts
  - Usernames
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

## Changing your username

The following list contains limitations and considerations when changing your {% data variables.product.github %} username.{% ifversion fpt or ghec %} For the {% data variables.product.github %} username policy, see [AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-username-policy){% endif %}.

### Limitations of username changes

{% ifversion ghec or ghes %}

{% ifversion ghec %}

Members of an {% data variables.enterprise.prodname_emu_enterprise %} cannot change usernames. Your enterprise's IdP administrator controls your {% data variables.product.github %} username. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

{% elsif ghes %}

If you sign into {% data variables.location.product_location %} with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for {% data variables.product.prodname_ghe_server %}, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise).

{% endif %}

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.accounts.rename-account-repo-namespace-retirement %} If you try to create a repository using a retired owner name and repository name combination, you will see the error: "The repository `<REPOSITORY_NAME>` has been retired and cannot be reused."

{% endif %}

{% data reusables.package_registry.rename-account-namespace-retirement %}

### Repository redirects after username change

After you change your username, web links to your existing repositories will continue to work. This can take a few minutes to complete after you make the change.

Command line pushes from your local repository clones to the old remote tracking URLs will continue to work.

### Redirects for changed usernames

{% data variables.product.github %} cannot set up redirects for:
* [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) using your old username
* Links to [gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) that include your old username

### Git commits after a username change

After a username change, verified commits signed using the previous {% data variables.product.github %}-provided `noreply` email address will lose their "Verified" status.

When verifying a signature, {% data variables.product.github %} checks that the email address of the committer or tagger exactly matches one of the email addresses associated with the GPG key's identities. Additionally, {% data variables.product.github %} confirms that the email address is verified and linked to the user's account. This ensures that the key belongs to you and that you created the commit or tag. Because the username of the `noreply` email address changes, these commits can no longer be verified.

{% ifversion fpt or ghec %}If you've been using a {% data variables.product.github %}-provided private commit email address, whether or not your commit history will be retained after an account rename depends on the format of the email address. Git commits that are associated with your {% data variables.product.github %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph, unless your `noreply` email address is in the form of `ID+USERNAME@users.noreply.github.com`. Older versions of the `noreply` email address that do not contain a numeric ID will not be associated with your {% data variables.product.github %} account after changing your username.{% endif %}
