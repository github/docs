---
title: Roles for an enterprise account
intro: 'To control access to your enterprise account''s settings and data, you can give different roles to people in the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

For more information about adding people to your enterprise account, see "[Inviting people to manage your enterprise account](/articles/inviting-people-to-manage-your-enterprise-account)."

### About roles for an enterprise account

Enterprise accounts come with a set of administrator roles that you can assign to users of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise account.

{% data reusables.enterprise-accounts.enterprise-administrators %}

### Enterprise owner

Enterprise owners have complete control over the enterprise account and can take every action, including:
- Managing administrators
- Adding and removing organizations to and from the enterprise
- Managing enterprise settings
- Enforcing policy across organizations
- Managing billing settings

Enterprise owners cannot access organization settings or content unless they are made an organization owner or given direct access to an organization-owned repository. Similarly, owners of organizations in your enterprise account do not have access to the enterprise account itself unless you make them enterprise owners.

You can add as many enterprise owners as you'd like to your enterprise account. Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}. As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

### Enterprise members

Members of organizations owned by your enterprise account are also automatically members of the enterprise account. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise account settings, including billing settings.

People in your enterprise account may have different levels of access to the various organizations owned by your enterprise account and to repositories within those organizations. You can view the resources that each person has access to. For more information, see "[Viewing people in your enterprise account](/articles/viewing-people-in-your-enterprise-account)."

For more information about organization-level permissions, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization)."

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise account's People tab, but are not enterprise members and do not have any access to the enterprise account. For more information about outside collaborators, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization#outside-collaborators)."

### Billing manager

Billing managers only have access to your enterprise account's billing settings. Billing managers for your enterprise account can:
- View and manage user licenses, {% data variables.large_files.product_name_short %} packs and other billing settings
- View a list of billing managers
- Add or remove other billing managers

Billing managers do not have access to organizations or repositories in your enterprise account, and cannot add or remove enterprise owners. Billing managers must have a personal account on {% data variables.product.prodname_dotcom %}.

### Further reading

- "[About enterprise accounts](/articles/about-enterprise-accounts)"
