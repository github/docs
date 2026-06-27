---
title: GitHub Copilot policies for enterprises and organizations
shortTitle: Policies
allowTitleToDifferFromFilename: true
intro: 'Control the availability of {% data variables.product.prodname_copilot %} features and models for your users.'
versions:
  feature: copilot
contentType: concepts
category:
  - Manage Copilot for a team
---

## How do policies work?

You will find policies for {% data variables.product.prodname_copilot %} on your enterprise's **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls** tab or in your organization's settings. Policies control which {% data variables.product.prodname_copilot %} features, agents, and models your users can access, and how they can use those features. For example, a policy controls whether users can use {% data variables.copilot.copilot_cli_short %}.

In an enterprise, policies are set at the enterprise level first. For most policies, enterprise administrators can either explicitly enable or disable a policy, or let organizations decide. As an exception, for {% data variables.copilot.copilot_cloud_agent %}, enterprises can select exactly which organizations receive access.

Users who receive access to {% data variables.product.prodname_copilot_short %} directly from the enterprise, rather than through an organization, are not covered by the "Let organizations decide" option. A separate **Policies for enterprise-assigned users** setting determines whether "Let organizations decide" policies default to enabled or disabled for these users.

## Who do policies apply to?

Generally, policies only apply to users on your {% data variables.product.prodname_copilot_short %} plan. A user is governed by the policies of the enterprise or organization where they receive a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} license.

A small number of policies work differently and govern a setting for everyone. For example, you can block {% data variables.copilot.copilot_cloud_agent %} for all users in your enterprise's repositories. If this is the case, you will see this highlighted in the policy description.

## What about users with multiple licenses?

A user can receive access to {% data variables.product.prodname_copilot_short %} from multiple organizations in the same enterprise. If these organizations have configured the same policy differently, the **least restrictive** policy usually applies, but there are some exceptions.

More rarely, if a user receives a license from multiple different enterprises, the **most restrictive** policy across enterprises almost always applies. For example, if any enterprise disables {% data variables.copilot.copilot_chat_dotcom_short %}, that feature is disabled for the user.

A user's individual plan is cancelled when they are added to a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, so a user's personal policies cannot conflict with an enterprise's or organization's.

To see details for each policy, see [AUTOTITLE](/copilot/reference/policy-conflicts).

## Where do policies apply?

Policies can apply to any surface where users authenticate to {% data variables.product.prodname_copilot_short %}, including IDEs, the {% data variables.product.github %} website, and {% data variables.copilot.copilot_cli_short %}.

However, not all policies apply to every surface. See [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies).

## How can I prevent policy drift?

If too many people have access to policy settings and your enterprise's governance posture isn't clearly communicated, policy settings can drift over time. This is a risk for enterprises with strict compliance requirements.

* Regularly review the people with access to policies:

   * In enterprises, enterprise owners or users with the "Manage enterprise AI controls" custom role permission
   * In organizations, organization owners or users with various granular custom permissions

* Use your audit log to monitor changes to policy settings or organization enablement.

## Setting policies

To set policies, see:

* [AUTOTITLE](/copilot/how-tos/administer/enterprises/managing-policies-and-features-for-copilot-in-your-enterprise)
* [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization)
