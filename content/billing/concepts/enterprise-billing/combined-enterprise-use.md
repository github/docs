---
title: Combined GitHub Enterprise cloud and server use
intro: 'Your enterprise account enables you to set up {% data variables.product.prodname_ghe_server %} with no additional cost.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Combined enterprise use
redirect_from:
  - /billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise
contentType: concepts
---

## About licensing for {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To use a {% data variables.product.prodname_ghe_server %} instance, you must upload a license file that {% data variables.product.company_short %} provides. See [AUTOTITLE](/billing/concepts/enterprise-billing/ghes-license-files).

## Syncing licenses

{% data reusables.enterprise-licensing.about-license-sync %}

## Usage-based and volume licensing

There are two types of {% data variables.product.prodname_enterprise %} (GHE) licensing models, with different processes for enabling combined use of {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}.

* **GHE (Usage-based, also called metered)**: A cloud-first license where users must first be assigned to a {% data variables.product.prodname_ghe_cloud %} organization.
    * All Cloud users automatically receive a use right for {% data variables.product.prodname_ghe_server %}.
    * Billing is based on the number of active users each month.
    * Users can generate their own Server license, which covers the number of assigned Cloud seats at the time of generation and is valid for one year.
    * Server-only users will be added to GHE (Metered) billing. These users are de-duplicated with email matching to avoid double billing.

* **GHE (Volume/Subscription, also called GHE Unified)**: A bundled license for both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}.
    * One license covers both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, allowing users to work in either or both.
    * Users can access both services via {% data variables.product.prodname_github_connect %}.
    * This license requires manual setup and is provided by {% data variables.product.github %} Sales.

{% data reusables.billing.usage-based-billing %}

### Detailed comparison

{% rowheaders %}

| License model                          | Usage-based                        | Volume or subscription                                                                     |
|----------------------------------|-------------------------------------|-----------------------------------------------------------------------------------------------|
| **Cloud vs. Server**             | Cloud-first, with a Server use right for Cloud users | 1 user license covers both Cloud and Server (hybrid, Cloud-only, or Server-only)              |
| **Setup**            | Self-service | Manual setup via {% data variables.product.github %} Sales                                    |
| **Server license generation**    | Users generate their own {% data variables.product.prodname_ghe_server %} license | Enterprise owners download their own {% data variables.product.prodname_ghe_server %} license |
| **License file scope**        | Covers Cloud-assigned users at time of generation | Covers all purchased users for both Cloud and Server                                          |
| **License expiration**           | Expires in 12 months | Aligned with volume license term                                                              |
| **License key usage**            | Limits max Server users | Covers all users in the volume subscription                                                   |
| **Required {% data variables.product.prodname_enterprise %} version**        | {% data variables.product.prodname_enterprise %} 3.13+, with {% data variables.product.prodname_github_connect %} | No specific version required                                                                  |
| **Billing model**                | Invoiced for users not assigned on Cloud via {% data variables.product.prodname_github_connect %} | Fixed cost based on purchased volume                                                          |

{% endrowheaders %}

## Further reading

* [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)
* [Pricing](https://github.com/pricing)
* [AUTOTITLE](/billing/managing-your-billing/about-billing-for-your-enterprise)
* [AUTOTITLE]({% ifversion fpt or ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)
* The [{% data variables.product.prodname_enterprise %} Releases](https://enterprise.github.com/releases/) website
