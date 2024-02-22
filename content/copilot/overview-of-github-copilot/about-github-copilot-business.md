---
title: About GitHub Copilot Business
intro: 'With {% data variables.product.prodname_copilot_for_business %} you can manage access to {% data variables.product.prodname_copilot %} for your organization{% ifversion ghec%} or enterprise{% endif %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
redirect_from:
  - /copilot/overview-of-github-copilot/about-github-copilot-for-business
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot Business
---

<a href="https://github.com/github-copilot/business_signup/choose_business_type/?ref_cta=Copilot+Business+trial&ref_loc=about+github+copilot+business&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get {% data variables.product.prodname_copilot_for_business %}</span> {% octicon "link-external" height:16 %}</a>

## About {% data variables.product.prodname_copilot_for_business %}

{% data reusables.copilot.about-copilot %}

With {% data variables.product.prodname_copilot_business_short %}, you can manage access to {% data variables.product.prodname_copilot %} for organizations{% ifversion ghec %} within your enterprise{% endif %}. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the administrators of that organization can grant access to individuals and teams. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

{% data reusables.copilot.supported-tools %}

{% data reusables.copilot.telemetry-setting-org %}

### Understanding the differences between {% data variables.product.prodname_copilot_business_short %} and {% data variables.product.prodname_copilot_individuals_short %}

{% data reusables.copilot.differences-cfi-cfb-table %}

## Enabling and setting up {% data variables.product.prodname_copilot_business_short %}

To use {% data variables.product.prodname_copilot_business_short %}, you need to set up a subscription for your organization{% ifversion ghec %} or enterprise{% endif %} account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

After setting up a subscription, you can enable {% data variables.product.prodname_copilot %} for organizations{% ifversion ghec %} within your enterprise{% endif %}. For more information, see "[AUTOTITLE](/copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-business)."

## About billing for {% data variables.product.prodname_copilot_business_short %}

{% data variables.product.prodname_copilot_business_short %} subscriptions are billed monthly, based on the number of {% data variables.product.prodname_copilot %} seats assigned to users within your organization{% ifversion ghec %} or enterprise{% endif %}. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-business)."

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

## Further reading

- "[{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)"
