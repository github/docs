---
title: Types of GitHub accounts
intro: 'Your user account is your identity on {% data variables.product.product_location %}. Your user account can be a member of any number of organizations.{% if currentVersion == "free-pro-team@latest" %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - accounts
  - cli
  - mobile
  - desktop
  - security
---

{% if currentVersion == "free-pro-team@latest" %}
For a full list of features for each {% data variables.product.product_name %} product, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)."
{% endif %}

### Personal user accounts

Every person who uses {% data variables.product.product_location %} has their own user account, which includes:

{% if currentVersion == "free-pro-team@latest" %}

- Unlimited public and private repositories with {% data variables.product.prodname_free_user %}
- Unlimited collaborators with {% data variables.product.prodname_free_user %}
- Additional features for private repositories with {% data variables.product.prodname_pro %}
- Ability to [invite repository collaborators](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Unlimited repositories and [collaborators](/articles/permission-levels-for-a-user-account-repository)
- Ability to [add unlimited repository collaborators](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tips**:

- You can use one account for multiple purposes, such as for personal use and business use. We do not recommend creating more than one account. For more information, see "[Merging multiple user accounts](/articles/merging-multiple-user-accounts)."
- User accounts are intended for humans, but you can give one to a robot, such as a continuous integration bot, if necessary.

{% endtip %}

{% else %}

{% tip %}

**Tip**: User accounts are intended for humans, but you can give one to a robot, such as a continuous integration bot, if necessary.

{% endtip %}

{% endif %}

### Organization accounts

Organizations are shared accounts where groups of people can collaborate across many projects at once. Owners and administrators can manage member access to the organization's data and projects with sophisticated security and administrative features.

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise accounts

With enterprise accounts, you can centrally manage policy and billing for multiple {% data variables.product.prodname_dotcom_the_website %} organizations. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Further reading

{% if currentVersion == "free-pro-team@latest" %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- "[{% data variables.product.prodname_dotcom %}'s products](/articles/githubs-products)"{% endif %}
- "[Creating a new organization account](/articles/creating-a-new-organization-account)"
