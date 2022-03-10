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

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a {% data variables.product.prodname_GH_advanced_security %} license, available with {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% elsif ghec %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a {% data variables.product.prodname_GH_advanced_security %} license. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% elsif ghes %}

You can make extra features for code security available to users by buying and uploading a license for {% data variables.product.prodname_GH_advanced_security %}. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

{% endif %}

To discuss licensing {% data variables.product.prodname_GH_advanced_security %} for your enterprise, contact {% data variables.contact.contact_enterprise_sales %}.

## About committer numbers for {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% ifversion fpt or ghes or ghec %}

For more information on viewing license usage, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% endif %}

## Understanding active committer usage

The following example timeline demonstrates how active committer count for {% data variables.product.prodname_GH_advanced_security %} could change over time in an enterprise. For each month, you will find events, along with the resulting committer count.

| Date | Events during the month | Total committers | 
| :- | :- | -: | 
| <nobr>April 15</nobr> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | 
| <nobr>May 1</nobr> | Developer **A** leaves the team working on repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | **50** |
| <nobr>August 1</nobr> | Developer **A**'s contributions no longer count towards the licences required, because 90 days have passed. | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>August 15</nobr> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>August 16</nobr> | A member of your enterprise disables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

**Note:** A user will be flagged as active when their commits are pushed to any branch of a repository, even if the commits were authored more than 90 days ago.

{% endnote %}

## Getting the most out of {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}
