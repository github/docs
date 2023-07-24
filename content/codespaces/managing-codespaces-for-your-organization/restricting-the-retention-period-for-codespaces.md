---
title: Restricting the retention period for codespaces
shortTitle: Restrict the retention period
intro: You can set a maximum retention period for any codespaces owned by your organization.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces-org %}'
---

## Overview

{% data reusables.codespaces.automatic-deletion %}

{% data variables.product.prodname_dotcom %} users can set a personal retention period of less than 30 days for codespaces they create. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)."

As an organization owner, you may want to configure constraints on the maximum retention period for codespaces created for the repositories owned by your organization. This can help you to limit the storage costs associated with codespaces that are stopped and then left unused until they are automatically deleted. For more information about storage charges, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)." You can set a maximum retention period for all, or for specific, repositories owned by your organization.

{% note %}

**Note**: Setting a maximum retention policy for a repository prevents people from exempting a codespace from automatic deletion. The "Keep codespace" option will be unavailable for codespaces created for that repository. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces?tool=webui#avoiding-automatic-deletion-of-codespaces)."

{% endnote %}

### Setting organization-wide and repository-specific policies

When you create a policy, you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a codespace retention constraint, then the retention constraints in any policies that are targeted at specific repositories should be shorter than the restriction configured for the entire organization, or they will have no effect. The shortest retention period - in an organization-wide policy, a policy targeted at specified repositories, or the default retention period in someone's personal settings - is applied.

If you add an organization-wide policy with a retention constraint, you should set the retention period to the longest acceptable period. You can then add separate policies that set the maximum retention to a shorter period for specific repositories in your organization.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adding a policy to set a maximum codespace retention period

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Retention period**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. Enter the maximum number of days codespaces can remain stopped before they are automatically deleted, then click **Save**.

   ![Screenshot of a dropdown with a field labeled "Maximum value" set to 8 days. Below this are "Cancel" and "Save" buttons.](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Notes**
   - A day, in this context, is a 24-hour period, beginning at the time of day when the codespace was stopped.
   - The valid range is 0-30 days.
   - Setting the period to `0` will result in codespaces being immediately deleted when they are stopped, or when they timeout due to inactivity.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"

1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are billable to your organization. The retention period constraint is only applied on codespace creation.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

The retention period constraint is only applied to codespaces when they are created. Editing a policy has no effect on existing codespaces.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period)."
1. Click the name of the policy you want to edit.
1. Beside the "Retention period" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Make the required changes then click **Save**.

## Deleting a policy

You can delete a policy at any time. Deleting a policy has no effect on existing codespaces.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period)."
1. Click the delete button to the right of the policy you want to delete.
{% data reusables.codespaces.delete-codespace-policy %}
