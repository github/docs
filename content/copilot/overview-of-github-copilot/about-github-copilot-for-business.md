---
title: About GitHub Copilot for Business
intro: 'With {% data variables.product.prodname_copilot_for_business %} you can manage access to {% data variables.product.prodname_copilot %} for your organization{% ifversion ghec%} or enterprise{% endif %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot for Business
---

## About {% data variables.product.prodname_copilot_for_business %}

{% data reusables.copilot.about-copilot %}

With {% data variables.product.prodname_copilot_business_short %}, you can manage access to {% data variables.product.prodname_copilot %} for organizations{% ifversion ghec %} within your enterprise{% endif %}. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the administrators of that organization can grant access to individuals and teams. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

{% data reusables.copilot.supported-tools %}

{% data reusables.copilot.telemetry-setting-org %}

### Understanding the differences between {% data variables.product.prodname_copilot_business_short %} and {% data variables.product.prodname_copilot_individuals_short %}

{% data reusables.copilot.differences-cfi-cfb-table %}

## Enabling and setting up {% data variables.product.prodname_copilot_business_short %}

To use {% data variables.product.prodname_copilot_business_short %}, you need to set up a subscription for your organization{% ifversion ghec %} or enterprise{% endif %} account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

After setting up a subscription, you can enable {% data variables.product.prodname_copilot %} for organizations{% ifversion ghec %} within your enterprise{% endif %}. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business)."

## About billing for {% data variables.product.prodname_copilot_business_short %}

{% data variables.product.prodname_copilot_business_short %} subscriptions are billed monthly, based on the number of {% data variables.product.prodname_copilot %} seats assigned to users within your organization{% ifversion ghec %} or enterprise{% endif %}. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)."

## Requesting or granting access to {% data variables.product.prodname_copilot_for_business %}

Organization members can request access to {% data variables.product.prodname_copilot_for_business %} from their organization's owners.

### Submitting a request for {% data variables.product.prodname_copilot_for_business %}

As a member of an organization, you can request access to {% data variables.product.prodname_copilot_for_business %} from your organization's owners. This can be done in a couple of different ways:

- From the [{% data variables.product.prodname_copilot %} settings](https://github.com/settings/copilot) for your personal account

  ![Screenshot of the {% data variables.product.prodname_copilot %} settings page. A button labelled "Ask admin for access" is outlined in dark orange.](/assets/images/help/copilot/request-cfb-access-settings.png)

- From an empty repository in the organization

  ![Screenshot from the top of an empty repository with the option ask admin for access to {% data variables.product.prodname_copilot_for_business %}.](/assets/images/help/copilot/request-cfb-access-empty-repo.png)

### Managing requests for {% data variables.product.prodname_copilot_for_business %}

As an owner of an organization, you can manage requests for {% data variables.product.prodname_copilot_for_business %} from your organization's settings. Additionally, {% data variables.product.prodname_dotcom %} sends you a weekly email with a summary of all pending requests.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org-list %}
1. In the "Access" section of the sidebar, click {% octicon "bell" aria-label="The notifications bell" %} **Requests from members**.
1. To accept the request and grant the member access to {% data variables.product.prodname_copilot_for_business %}, click **Buy {% data variables.product.prodname_copilot_business_short %}**.

All requests for {% data variables.product.prodname_copilot_for_business %} are grouped together under "{% data variables.product.prodname_copilot_business_short %}."

## About privacy for {% data variables.product.prodname_copilot_for_business %}

You have the ability to manage and make choices regarding the collection, retention, and processing of your data, allowing you to maintain control over your privacy while using {% data variables.product.prodname_copilot_for_business %}.

### What data does {% data variables.product.prodname_copilot_for_business %} collect?

{% data variables.product.prodname_copilot_for_business %} utilizes data from file content and additional sources to enhance its functionality. This data collection process is aimed at improving the service and involves the gathering and analysis of certain information.

{% data reusables.copilot.user-engagement-data %}

#### Prompts

{% data reusables.copilot.prompts %} These Prompts are only sent in real time. {% data variables.product.prodname_copilot_for_business %} does not retain Prompts.

#### Suggestions

{% data reusables.copilot.suggestions %} Suggestions are only sent in real-time. {% data variables.product.prodname_copilot_for_business %} does not retain Suggestions.

### How is the data in {% data variables.product.prodname_copilot_for_business %} used and shared?

User Engagement Data is used by {% data variables.product.company_short %} and Microsoft to provide the service and to enable improvements.

- Evaluating {% data variables.product.prodname_copilot %}: The impact of {% data variables.product.prodname_copilot %} on users is assessed by measuring its positive effects and benefits.
- Fine-tuning ranking and sorting algorithms: The data helps in the optimization and improvement of algorithms used for ranking and sorting suggestions, thereby enhancing the overall user experience.
- Detecting abuse and policy violations: The data is examined to investigate and identify any potential misuse or violation of the Acceptable Use Policies associated with {% data variables.product.prodname_copilot %}.
- Conducting experiments and research: The data is used for conducting experiments and research related to developers and their utilization of developer tools and services. This aids in gaining valuable insights into user behavior and preferences.

### How can users of {% data variables.product.prodname_copilot_for_business %} control use of their data?

User Engagement Data, including pseudonymous identifiers and general usage data, is necessary for the use of {% data variables.product.prodname_copilot %} and will continue to be collected, processed, and shared with Microsoft when you use {% data variables.product.prodname_copilot %}.

{% data variables.product.prodname_copilot_for_business %} does not retain any Prompts or Suggestions.

For more information about privacy for {% data variables.product.prodname_copilot_for_business %}, see the "[The {% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/#privacy)."

## Further reading

- "[{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)"
