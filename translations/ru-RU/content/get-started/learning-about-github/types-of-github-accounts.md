---
title: Types of GitHub accounts
intro: 'Your user account is your identity on {% data variables.product.product_location %}. Your user account can be a member of any number of organizations.{% ifversion fpt %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% ifversion fpt %}
For a full list of features for each {% data variables.product.product_name %} product, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)."
{% endif %}

## Personal user accounts

Every person who uses {% data variables.product.product_location %} has their own user account, which includes:

{% ifversion fpt %}

- Unlimited public and private repositories with {% data variables.product.prodname_free_user %}
- Unlimited collaborators with {% data variables.product.prodname_free_user %}
- Additional features for private repositories with {% data variables.product.prodname_pro %}
- Ability to [invite repository collaborators](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Unlimited repositories and [collaborators](/articles/permission-levels-for-a-user-account-repository)
- Ability to [add unlimited repository collaborators](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% ifversion fpt %}

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

{% ifversion fpt %}
### {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, instead of using your personal account, members of an {% data variables.product.prodname_emu_enterprise %} are provisioned accounts using the enterprise's identity provider (IdP). {% data variables.product.prodname_managed_users_caps %} authenticate using their IdP instead of a {% data variables.product.prodname_dotcom_the_website %} username and password.

{% data variables.product.prodname_managed_users_caps %} can only interact with users, repositories, and organizations that are part of their enterprise. {% data variables.product.prodname_managed_users_caps %} have read-only access to the rest of {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}

## Organization accounts

Organizations are shared accounts where groups of people can collaborate across many projects at once. Owners and administrators can manage member access to the organization's data and projects with sophisticated security and administrative features.

{% data reusables.organizations.organizations_include %}

{% ifversion fpt %}

## Enterprise accounts

With enterprise accounts, you can centrally manage policy and billing for multiple {% data variables.product.prodname_dotcom_the_website %} organizations. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Дополнительная литература

{% ifversion fpt %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- "[{% data variables.product.prodname_dotcom %}'s products](/articles/githubs-products)"{% endif %}
- "[Creating a new organization account](/articles/creating-a-new-organization-account)"
