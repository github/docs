---
title: GitHub Copilot policies to control availability of features and models
shortTitle: Policies
allowTitleToDifferFromFilename: true
intro: 'Learn about the policies that control the availability of {% data variables.product.prodname_copilot %} features and models for users granted a license through your organization or an organization in your enterprise.'
versions:
  feature: copilot
topics:
  - Copilot
  - Policy
  - Access management
  - Organizations
  - Enterprise
contentType: concepts
category: 
  - Manage Copilot for a team
---

## About policies for {% data variables.product.prodname_copilot_short %}

When you assign a {% data variables.product.prodname_copilot_short %} license to a member of your organization or enterprise, you can control the features they can use under that license with {% data variables.product.prodname_copilot_short %} policies.

Policies are grouped into different types.

* **Feature policy:** Defines the availability of a {% data variables.product.prodname_copilot_short %} feature. Shown on the "Policies" page.
* **Privacy policy:** Defines whether a potentially sensitive action is allowed or not. Shown at the end of the "Policies" page.
* **Models policy:** Defines the availability of models beyond the basic models provided with {% data variables.product.prodname_copilot_short %}, which may incur additional costs. Shown on the "Models" page.

Each policy controls availability for members who receive a {% data variables.product.prodname_copilot_short %} license from your enterprise or organization.

## Organization-level control of policies

Organization owners set policies to control the availability of features and models for users granted a {% data variables.product.prodname_copilot_short %} license by the organization. For example, an organization owner can enable or disable using {% data variables.product.prodname_copilot_short %} in the IDE (unless an enterprise owner has defined availability for the feature at the enterprise level).

The enforcement options for feature and model policies in an organization are:

* **Unconfigured** - A placeholder, which is removed once you have defined a setting. The policy is treated as disabled for this organization until you select an option.
* **Enabled** - The feature is **available** to all members who are assigned {% data variables.product.prodname_copilot_short %} by the organization.
* **Disabled** - The feature is **blocked** for all members who are assigned {% data variables.product.prodname_copilot_short %} by the organization.

For privacy policies, the options are called "Allowed" and "Blocked" in preference to enabled and disabled. This provides a clearer message of the impact of a privacy policy.

## Enterprise-level control of policies

Enterprise owners can choose to set policies for {% data variables.product.prodname_copilot_short %} at the enterprise level or to delegate the decision to organization owners.

### Policy defined

If a policy is defined at the enterprise level, the policy applies to all users and control of the policy is disabled at the organization level.

### No policy

If an enterprise owner selects **No policy**, the impact depends on whether a user has access to {% data variables.product.prodname_copilot_short %} through an organization or directly from the enterprise.

For members who receive a {% data variables.product.prodname_copilot_short %} license from the organization, organization owners can choose their policy. If a member receives access to {% data variables.product.prodname_copilot_short %} through multiple organizations with conflicting policies, either the least or most permissive policy may apply, depending on the policy. For more information, see [AUTOTITLE](/copilot/reference/feature-availability-enterprise).

For users who receive access to {% data variables.product.prodname_copilot_short %} directly from the enterprise rather than from an organization, the **Policies for enterprise-assigned users** setting determines whether "No policy" defaults to enabled or disabled.

## Next steps

* [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization)
* [AUTOTITLE](/copilot/how-tos/administer/enterprises/managing-policies-and-features-for-copilot-in-your-enterprise)
