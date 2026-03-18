---
title: Resources for getting approval of GitHub Copilot
shortTitle: Resources for approval
intro: 'Get ready to adopt {% data variables.product.prodname_copilot_short %} by sending resources to legal and security teams in your company.'
versions:
  feature: copilot
contentType: get-started
category:
  - Manage Copilot for a team
---

Before you can roll out a tool like {% data variables.product.prodname_copilot %} in your company, you will likely need signoff from legal, compliance, and cybersecurity teams.

Your company's requirements depend on your industry and location, but common queries include:

* How does {% data variables.product.prodname_copilot_short %} use my company's data?
* Which compliance standards does {% data variables.product.prodname_copilot_short %} meet?
* Will I need to adjust my corporate network for {% data variables.product.prodname_copilot_short %}?

This article collects resources that you can send to teams in your company to accelerate the signoff process. These resources apply to the {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans.

## Legal and privacy teams

These teams need to know the terms that will govern your company's purchase of {% data variables.product.prodname_copilot_short %}.

* If you purchase directly from {% data variables.product.github %}, you'll be governed by the [GitHub Generative AI Services Terms](https://github.com/customer-terms/github-generative-ai-services-terms).
* If you purchase through Microsoft, you'll be governed by [Microsoft's Product Terms](https://www.microsoft.com/licensing/terms). This includes both the [Microsoft Generative AI Service terms](https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all), and terms specifically for [GitHub Offerings](https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/allprograms).
* {% data variables.product.prodname_copilot_short %} also falls under the [GitHub Data Protection Agreement](https://gh.io/dpa). This applies to all generally available (GA) {% data variables.product.prodname_copilot_short %} features and to the preview features listed in [GitHub DPA-Covered Previews](https://gh.io/dpa-previews).

## Compliance teams

These teams need to know that {% data variables.product.prodname_copilot_short %} meets your company's regulatory requirements.

The [GitHub Enterprise Trust Center](https://ghec.github.trust.page) answers common compliance questions in its FAQ, and lists attestations for compliance standards in the "Resources" section.

Compliance teams may also want to know about the administrative features available to govern {% data variables.product.prodname_copilot_short %}, such as:

* Policies for managing access to features and models
* Audit logs for monitoring changes to access and settings
* The ability to exclude sensitive content from {% data variables.product.prodname_copilot_short %}'s view

For an overview of these features, see [AUTOTITLE](/copilot/get-started/features#github-copilot-features-for-administrators).

### For new {% data variables.product.prodname_enterprise %} customers

If your company is not already using {% data variables.product.prodname_enterprise %}, compliance teams may also want an overview of {% data variables.product.github %}'s general governance features for things like protecting branches or preventing leaked secrets. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/establishing-a-governance-framework-for-your-enterprise).

## Cybersecurity and IT teams

These teams need to know how {% data variables.product.prodname_copilot_short %} will work with your company's corporate network, authentication systems, and software distribution processes. They may need to learn about:

* The allowlist required for a firewall or proxy to ensure {% data variables.product.prodname_copilot_short %} works as expected. See [AUTOTITLE](/copilot/reference/copilot-allowlist-reference).
* The network protocol that {% data variables.product.prodname_copilot_short %} operates on by default, and your company's options for routing traffic through a proxy server and intercepting traffic. See [AUTOTITLE](/copilot/concepts/network-settings).
* The clients where users will be using {% data variables.product.prodname_copilot_short %}.
  * Your enterprise can enable or disable {% data variables.product.prodname_copilot_short %} in IDEs, on {% data variables.product.prodname_mobile %}, in the CLI, and on the {% data variables.product.github %} website.
  * If your company distributes approved software for users, IT teams may need to approve the supported versions of IDEs. See [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

### For new {% data variables.product.prodname_enterprise %} customers

If your company is not already using {% data variables.product.prodname_enterprise %}, cybersecurity teams may also need to learn about networking and authentication options on {% data variables.product.github %} as a whole:

* The full list of IP addresses that will need to be allowed by your network. You can get a list of these from a public API. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).
* Options for integrating with an identity provider and enforcing single sign-on for users. See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).
* Enterprise network features. Enterprises can enforce IP allow lists and, for {% data variables.product.prodname_emus %}, prevent developers from using their personal account on your corporate network. See [AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) and [AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-access-to-githubcom-using-a-corporate-proxy).

Even if you're only using {% data variables.product.github %} to grant access to {% data variables.product.prodname_copilot_short %}, developers will need to authenticate to {% data variables.product.github %} to use their {% data variables.product.prodname_copilot_short %} license.

## Further questions

If teams have questions that aren't addressed by these resources, contact your account manager or {% data variables.contact.contact_enterprise_sales %}.

## Next steps

Once teams have signed off on {% data variables.product.prodname_copilot_short %}, you can choose a plan for your enterprise. See [AUTOTITLE](/copilot/get-started/choose-enterprise-plan).
