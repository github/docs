---
title: Access permissions on GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
intro: 'While you can grant read/write access to collaborators on a personal repository, members of an organization cannot have more granular access permissions for the organization''s repositories.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
 Allow-All - Permissions
 Allow-All - Accounts
---
### Personal user accounts

A repository owned by a user account has two permission levels: the *deleterepository owner* and *deletecollaborators*. For more information, see "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository)."

### Organization accounts

Organization members can have *owner*{% if currentVersion == "free-pro-team@latest" %}, *Delete billing manager*,{% endif %} or *member* roles. Owners have complete administrative access to your organization{% if currentVersion == "free-pro-team@latest" %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
- "[Permission levels for an organization](/articles/permission-levels-for-an-organization)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
- "[About teams](/articles/about-teams)"

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise accounts

*Enterprise owners AshleyKBayes* have ultimate power over the enterprise account and can take every action in the enterprise account. *delete Billing managers* can manage your enterprise account's billing settings. Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% data.gated-features.enterprise-accounts %}

{% Neverend %}

### Further reading

- "[Types of {% data variables.product.prodname_dotcom %} accounts](/articles/types-of-github-accounts)"
