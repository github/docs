---
title: Types of GitHub accounts
intro: 'Accounts on {% data variables.product.product_name %} allow you to organize and control access to code.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

## About accounts on {% data variables.product.product_name %}

With {% data variables.product.product_name %}, you can store and collaborate on code. Accounts allow you to organize and control access to that code. There are three types of accounts on {% data variables.product.product_name %}.
- Personal accounts
- Organization accounts
- Enterprise accounts

Every person who uses {% data variables.product.product_name %} signs into a personal account. An organization account enhances collaboration between multiple personal accounts, and {% ifversion fpt or ghec %}an enterprise account{% else %}the enterprise account for {% data variables.location.product_location %}{% endif %} allows central management of multiple organizations.

## Personal accounts

Every person who uses {% data variables.location.product_location %} signs into a personal account. Your personal account is your identity on {% data variables.location.product_location %} and has a username and profile. For example, see [@octocat's profile](https://github.com/octocat).

Your personal account can own resources such as repositories, packages, and projects. Any time you take any action on {% data variables.location.product_location %}, such as creating an issue or reviewing a pull request, the action is attributed to your personal account.

{% ifversion fpt or ghec %}Each personal account uses either {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %}. All personal accounts can own an unlimited number of public and private repositories, with an unlimited number of collaborators on those repositories. If you use {% data variables.product.prodname_free_user %}, private repositories owned by your personal account have a limited feature set. You can upgrade to {% data variables.product.prodname_pro %} to get a full feature set for private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)." {% else %}You can create an unlimited number of repositories owned by your personal account, with an unlimited number of collaborators on those repositories.{% endif %}

{% tip %}

**Tip**: Personal accounts are intended for humans, but you can create accounts to automate activity on {% data variables.product.product_name %}. This type of account is called a machine user. For example, you can create a machine user account to automate continuous integration (CI) workflows.

{% endtip %}

{% ifversion fpt or ghec %}
Most people will use one personal account for all their work on {% data variables.product.prodname_dotcom_the_website %}, including both open source projects and paid employment. If you're currently using more than one personal account that you created for yourself, we suggest combining the accounts. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/merging-multiple-personal-accounts)."
{% endif %}

## Organization accounts

Organizations are shared accounts where an unlimited number of people can collaborate across many projects at once.

Like personal accounts, organizations can own resources such as repositories, packages, and projects. However, you cannot sign into an organization. Instead, each person signs into their own personal account, and any actions the person takes on organization resources are attributed to their personal account. Each personal account can be a member of multiple organizations.

The personal accounts within an organization can be given different roles in the organization, which grant different levels of access to the organization and its data. All members can collaborate with each other in repositories and projects, but only organization owners and security managers can manage the settings for the organization and control access to the organization's data with sophisticated security and administrative features. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure)."

{% ifversion fpt or ghec %}
Even if you're a member of an organization that uses SAML single sign-on, you will still sign into your own personal account on {% data variables.product.prodname_dotcom_the_website %}, and that personal account will be linked to your identity in your organization's identity provider (IdP). For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation{% else %}."{% endif %}

However, if you're a member of an enterprise that uses {% data variables.product.prodname_emus %}, instead of using a personal account that you created, a new account will be provisioned for you by the enterprise's IdP. To access any organizations owned by that enterprise, you must authenticate using their IdP instead of a {% data variables.product.prodname_dotcom_the_website %} username and password. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
{% endif %}

You can also create nested sub-groups of organization members called teams, to reflect your group's structure and simplify access management. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% data reusables.organizations.organization-plans %}

For more information about all the features of organizations, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

## Enterprise accounts

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %} include enterprise accounts, which allow administrators to centrally manage policy and billing for multiple organizations and enable innersourcing between the organizations. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec %}
Enterprise accounts allow central policy management and billing for multiple organizations. You can use your enterprise account to centrally manage policy and billing. Unlike organizations, enterprise accounts cannot directly own resources like repositories, packages, or projects. These resources are owned by organizations within the enterprise account instead. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."
{% elsif ghes or ghae %}
Your enterprise account is a collection of all the organizations {% ifversion ghae %}owned by{% elsif ghes %}on{% endif %} {% data variables.location.product_location %}. You can use your enterprise account to centrally manage policy and billing. Unlike organizations, enterprise accounts cannot directly own resources like repositories, packages, or projects. These resources are owned by organizations within the enterprise account instead. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."
{% endif %}

## Further reading

{% ifversion fpt or ghec %}
- "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)"{% endif %}
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)"
- [Organizing people for successful collaboration](https://vimeo.com/333786093) video in {% data variables.product.company_short %} Resources
