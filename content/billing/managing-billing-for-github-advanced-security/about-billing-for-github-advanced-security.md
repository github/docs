---
title: About billing for GitHub Advanced Security
intro: 'If you want to use {% data variables.product.prodname_GH_advanced_security %} features{% ifversion fpt or ghec %} in a private or internal repository{% endif %}, you need a license{% ifversion fpt %} for your enterprise{% endif %}.{% ifversion fpt or ghec %} These features are available free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
---

## About billing for {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a {% data variables.product.prodname_GH_advanced_security %} license, available with {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}.

For information about billing for {% data variables.product.prodname_GH_advanced_security %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a {% data variables.product.prodname_GH_advanced_security %} license. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

{% elsif ghes %}

You can make extra features for code security available to users by buying and uploading a license for {% data variables.product.prodname_GH_advanced_security %}. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

{% endif %}

{% ifversion ghes or ghec %}

Each license for {% data variables.product.prodname_GH_advanced_security %} specifies a maximum number of accounts that can use these features. Each active committer to at least one repository with the feature enabled uses one {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %}. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

{% note %}

**Note:** Active committers are calculated using both the commit author information and the timestamp for when the code was pushed to {% data variables.product.product_name %}.

- When a user pushes code to {% data variables.product.prodname_dotcom %}, every user who authored code in that push counts towards {% data variables.product.prodname_GH_advanced_security %} {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %}, even if the code is not new to {% data variables.product.prodname_dotcom %}.

- Users should always create branches from a recent base, or rebase them before pushing. This will ensure that users who have not committed in the last 90 days do not take up {% data variables.product.prodname_GH_advanced_security %} {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %}.

{% endnote %}

{% ifversion ghes %}
You can determine how many licenses you'll need for {% data variables.product.prodname_GH_advanced_security %} by generating a count of your instance's active committers in the site admin dashboard. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-committers)."
{% endif %}

{% ifversion ghec %}
If you use {% data variables.product.prodname_ghe_cloud %} with an enterprise account and pay with a credit card, you can purchase a {% data variables.product.prodname_GH_advanced_security %} license or start a free trial from your enterprise account settings. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security)" and "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security)."

You can not purchase {% data variables.product.prodname_GH_advanced_security %} or start a {% data variables.product.prodname_GH_advanced_security %} trial if you are currently on a {% data variables.product.prodname_ghe_cloud %} trial.

If you pay by invoice, contact {% data variables.contact.contact_enterprise_sales %} to discuss licensing {% data variables.product.prodname_GH_advanced_security %} for your enterprise.

For other billing-related questions, contact {% data variables.contact.github_support %}.
{% endif %}

## About committer numbers for {% data variables.product.prodname_GH_advanced_security %}

We record and display two numbers of {% ifversion ghas-billing-UI-update %}active {% endif %}committers for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.location.product_location %}:

- **{% ifversion ghas-billing-UI-update %}Active committers{% else %}Committers{% endif %}** is the number of committers who contributed to at least one {% ifversion fpt or ghec %}private {% endif %}repository in an organization and who use a {% ifversion ghas-billing-UI-update %}license {% else %}seat {% endif %}in your enterprise. That is, they are also an organization member, an external collaborator, or have a pending invitation to join an organization in your enterprise, and they are not a {% data variables.product.prodname_github_app %} bot. For information about differences between bot and machine accounts, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts)."
- **Unique to this repository/organization** is the number of {% ifversion ghas-billing-UI-update %}active {% endif %}committers who contributed only to this repository, or to repositories in this organization. This number shows how many {% ifversion ghas-billing-UI-update %}licenses {% else %}seats {% endif %}you can free up by deactivating {% data variables.product.prodname_GH_advanced_security %} for that repository or organization.

If there are no unique {% ifversion ghas-billing-UI-update %}active {% endif %}committers, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Deactivating the feature for that repository or organization would not free any {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} for {% data variables.product.prodname_GH_advanced_security %}.

When you remove a user from your enterprise account, the user's license is freed within 24 hours.

{% note %}

**Note:** Users can contribute to multiple repositories or organizations. Usage is measured across the whole enterprise account to ensure that each member uses one {% ifversion ghas-billing-UI-update %}license {% else %}seat {% endif %}regardless of how many repositories or organizations the user contributes to.

{% endnote %}

{% ifversion fpt or ghes or ghec %}

When you activate or deactivate {% data variables.product.prodname_advanced_security %} for repositories, {% data variables.product.prodname_dotcom %} displays an overview of changes to the use of your license. If you deactivate access to {% data variables.product.prodname_GH_advanced_security %}, any {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} used by unique active committers are freed up.

If you are over your license limit, {% data variables.product.prodname_GH_advanced_security %} continues to work on all repositories where it is already enabled. However, in organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled for new repositories, repositories will be created with the feature deactivated. In addition, the option to enable {% data variables.product.prodname_GH_advanced_security %} for existing repositories will not be available.{% ifversion fpt or ghec %} If you change the visibility of a public repository to private then {% data variables.product.prodname_GH_advanced_security %} will be disabled for that repository.{% endif %}

As soon as you free up some {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %}, by deactivating {% data variables.product.prodname_GH_advanced_security %} for some repositories or by increasing your license size, the options for activating {% data variables.product.prodname_GH_advanced_security %} will work again as normal.
{% endif %}

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% ifversion fpt or ghes or ghec %}
For more information on viewing license usage, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."
{% endif %}

{% ifversion ghec %}
For more information on managing the number of committers, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing)."
{% endif %}

## Understanding active committer usage

The following example timeline demonstrates how active committer count for {% data variables.product.prodname_GH_advanced_security %} could change over time in an enterprise. For each month, you will find events, along with the resulting committer count.

| Date | Events during the month | Total committers |
| :- | :- | -: |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** leaves the team working on repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | **50** |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** |

{% note %}

**Note:** A user will be flagged as active when their commits are pushed to any branch of a repository, even if the commits were authored more than 90 days ago.

{% endnote %}

## Getting the most out of {% data variables.product.prodname_GH_advanced_security %}

When you decide which repositories and organizations to prioritize for {% data variables.product.prodname_GH_advanced_security %}, you should review them and identify:

- Codebases that are the most critical to your company's success. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or insecure dependencies would have the greatest impact on your company.
- Codebases with the highest commit frequency. These are the most actively developed projects, consequently there is a higher risk that security problems could be introduced.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique {% ifversion ghas-billing-UI-update %}active {% endif %}committers. Finally, review the remaining important and busy codebases. {% ifversion fpt or ghes or ghec %}If you want to increase the number of {% ifversion ghas-billing-UI-update %}licensed active committers, {% else %}seats in your license, {% endif %}contact {% data variables.contact.contact_enterprise_sales %}.{% endif %}

{% endif %}
