---
title: Roles in an enterprise
intro: 'Everyone in an enterprise is a member of the enterprise. To control access to your enterprise''s settings and data, you can assign different roles to members of your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### About roles in an enterprise

Everyone in an enterprise is a member of the enterprise. You can also assign administrative roles to members of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

For more information about adding people to your enterprise, see "{% if currentVersion == "free-pro-team@latest" %}[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[Authentication](/admin/authentication){% endif %}".

### Enterprise owner

Enterprise owners have complete control over the enterprise and can take every action, including:
- Managing administrators
- {% if currentVersion == "free-pro-team@latest" %}Adding and removing {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Managing{% endif %} organizations {% if currentVersion == "free-pro-team@latest" %}to and from {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} in{% endif %} the enterprise
- Managing enterprise settings
- Enforcing policy across organizations
{% if currentVersion == "free-pro-team@latest" %}- Managing billing settings{% endif %}

Enterprise owners cannot access organization settings or content unless they are made an organization owner or given direct access to an organization-owned repository. Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.

An enterprise owner will only consume a license if they are an owner or member of at least one organization within the enterprise. {% if currentVersion == "free-pro-team@latest" %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

### Enterprise members

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% if currentVersion == "free-pro-team@latest" %}, including billing settings{% endif %}.

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. You can view the resources that each person has access to. For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)."

For more information about organization-level permissions, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization)."

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's People tab, but are not enterprise members and do not have any access to the enterprise. For more information about outside collaborators, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization#outside-collaborators)."

{% if currentVersion == "free-pro-team@latest" %}

### Billing manager

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- View and manage user licenses, {% data variables.large_files.product_name_short %} packs and other billing settings
- View a list of billing managers
- Add or remove other billing managers

Billing managers will only consume a license if they are an owner or member of at least one organization within the enterprise. Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. Billing managers must have a personal account on {% data variables.product.prodname_dotcom %}.

### About support entitlements

{% data reusables.enterprise-accounts.support-entitlements %}

### Дополнительная литература

- "[About enterprise accounts](/articles/about-enterprise-accounts)"

{% endif %}
