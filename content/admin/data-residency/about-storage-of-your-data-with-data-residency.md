---
title: About storage of your data with data residency
shortTitle: How is data stored?
intro: "Learn how your data is stored when you use {% data variables.enterprise.data_residency %}."
versions:
  ghec: '*'
redirect_from:
  - /early-access/admin/using-a-data-resident-enterprise-on-github/about-data-locality
  - /early-access/admin/using-a-data-resident-enterprise-on-github/about-data-residency
  - /early-access/admin/preview-of-data-residency-for-github-enterprise/about-data-residency-in-the-european-union
  - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/about-data-residency-in-the-european-union
  - /early-access/admin/data-residency-for-github-enterprise-cloud/about-data-residency-in-the-european-union
---

{% data reusables.data-residency.when-you-adopt-data-residency %}

Although your code and user data are stored within your chosen region, {% data variables.product.company_short %} may store certain types of data outside your region, and may need to transfer some data outside your region.

If you are in doubt about any aspect of {% data variables.enterprise.data_residency_short %}, contact your account manager.

## Data stored in your region

{% data variables.product.company_short %} stores the following data for your enterprise within your chosen region.

| Description of data | Examples |
| :- | :- |
| Customer content, including text, data, software, images, and other data available on the service | <ul><li>Repositories, including repository name and source code</li><li>User-generated content or URLs from the service, such as a pull request, comment, file path, raw URL, or filename</li><li>Structured or blob storage</li></ul> |
| Data or logs that identify your company | <ul><li>Data and logs for GitHub Actions</li><li>Data for business continuity and disaster recovery (BCDR)</li></ul> |
| Data or logs that identify a person | <ul><li>Email address</li><li>Username</li><li>First or last name</li><li>IP address</li></ul> |

## Data stored outside your region

For the purposes outlined in our [Data Protection Agreement](https://github.com/customer-terms/github-data-protection-agreement), {% data variables.product.company_short %} may store the following data for your enterprise outside your chosen region.

| Description of data | Examples |
| :- | :- |
| Telemetry or logs containing consistent identifiers tied to a person, that by themselves do not identify the person without additional information | <ul><li>User ID or GUID as integer value in a database</li><li>Unsalted hash of other data that could identify a person</li><ul><li>Email address</li><li>Username</li><li>First or last name</li><li>IP address</li></ul> |
| Information that GitHub needs to administer a paid plan | <ul><li>Contact information</li><li>Billing, purchase, payment, or license information</li></ul> |
| Support and feedback data | <ul><li>Support requests or case notes</li><li>Phone conversations</li><li>Online chat sessions</li><li>Remote assistance sessions</li></ul> |
| {% data variables.product.prodname_copilot %} data | Data and logs for {% data variables.product.prodname_copilot %} |

## Data transfers

{% data variables.product.company_short %} will document reasons for the transfer of data out of your enterprise's region, but does not notify you when transfers occur.

Additionally, {% data variables.product.company_short %} sends information about the TLS certificate for your enterprise's subdomain on {% data variables.enterprise.data_residency_site %} to certificate authorities (CAs) and the certificate transparency (CT) ecosystem. Some entities may be outside of your enterprise's region.

## Data subject requests

If you need to comply with a data subject request (DSR), contact {% data variables.contact.contact_support_page %}.

If {% data variables.product.company_short %} receives a request from one of your data subjects pertaining to {% data variables.enterprise.data_residency_short %} for {% data variables.product.prodname_ghe_cloud %}, where {% data variables.product.company_short %} functions as your processor or subprocessor, {% data variables.product.company_short %} will redirect the data subject to you. Consistent with the functionality of the services and {% data variables.product.company_short %}'s role, we will cooperate with you and provide you the necessary means to respond.
