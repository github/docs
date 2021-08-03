---
title: About billing for GitHub Advanced Security
intro: 'If you want to use {% data variables.product.prodname_GH_advanced_security %} features{% ifversion fpt %} in a private or internal repository{% endif %}, you need a license.{% ifversion fpt %} These features are available free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '>=3.1'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
---

## About billing for {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a license. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% elsif ghes %}

You can make extra features for code security available to users by buying and uploading a license for {% data variables.product.prodname_GH_advanced_security %}. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% endif %}

{% ifversion fpt or ghes %}

{% data reusables.advanced-security.license-overview %}

{% endif %}

To discuss licensing {% data variables.product.prodname_GH_advanced_security %} for your enterprise, contact {% data variables.contact.contact_enterprise_sales %}.

## About committer numbers for {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "{% ifversion ghes %}[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% elsif fpt or ghae %}[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account){% endif %}."

{% ifversion fpt or ghes %}

For more information on viewing license usage, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% endif %}

## Calculating committer spending

The following example timeline demonstrates the events during a month that affect billing for {% data variables.product.prodname_GH_advanced_security %} in an enterprise. For each month, you will find events, the total committer count, and the total number of committers that {% data variables.product.company_short %} would bill for.

| Date | Events during the month | Total committer count | Committers billed for the month |
| :- | :- | -: | -: |
| <nobr>August 1</nobr> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | **50** |
| <nobr>September 5</nobr> | Developer **A** leaves the team working on repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | **50** |
| <nobr>September 8</nobr> | Developer **B** pushes a commit to repository **X** for the first time. Developer **B**'s usage is pro-rated, because the developer began contributing to repository **X** partway through the month. | <sub>_50 + 1_</sub></br>**51** | <sub>_50 + 0.8_</sub><br/>**50.8** |
| October and November | Developer **A**'s contributions to repository **X** continue to count because the contributions were within the past 90 days. {% data variables.product.company_short %} now bills for developer **B** for the entire month because developer **B** now has contributions within the past 90 days. | **51** | **51** |
| <nobr>December 4</nobr> | 90 days have passed since developer **A**'s last contribution to repository _X. The 90 days lapsed after December started, so {% data variables.product.company_short %} bills for developer **A** for the entire month. | <sub>_51 - 1_</sub><br/>**50** | <sub></sub><br/>**51** |
| <nobr>December 11</nobr> | Developer **C** joins the company and pushes a commit to repository **X** for the first time. Developer **C**'s usage is pro-rated at 70% for 21 out of 30 days. | <sub>_50 + 1_</sub><br/>**51** | <sub>_51 + .07_</sub><br/>**51.7** |
| <nobr>January</nobr> | {% data variables.product.company_short %} no longer bills for developer **A**. {% data variables.product.company_short %} bills for developer **C** for the entire month. | **51** | **51** |
| <nobr>February 15</nobr> | A member of your enterprise disables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. The 51 contributors to repository **X** do not work in any other repositories with {% data variables.product.prodname_GH_advanced_security %}. {% data variables.product.company_short %} bills for the developers' usage in repository **X** for February. | <sub>_51 - 51_</sub><br/>**0** | <sub></sub><br/>**51** |
| <nobr>March</nobr> | No repository owned by your enterprise has {% data variables.product.prodname_GH_advanced_security %} enabled. | **0** | **0** |

## Getting the most out of {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}
