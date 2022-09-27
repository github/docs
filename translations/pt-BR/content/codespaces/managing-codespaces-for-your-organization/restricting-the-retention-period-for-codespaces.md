---
title: Restricting the retention period for codespaces
shortTitle: Restrict the retention period
intro: You can set a maximum retention period for any codespaces owned by your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Overview

{% data variables.product.prodname_github_codespaces %} are automatically deleted after they have been stopped and have remained inactive for a defined number of days. The retention period for each codespace is set when the codespace is created and does not change. 

Everyone who has access to {% data variables.product.prodname_github_codespaces %} can configure a retention period for the codespaces they create. The initial setting for this default retention period is 30 days. Individual users can set this period within the range 0-30 days. For more information, see "[Configuring automatic deletion of your codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)." 

As an organization owner, you may want to configure constraints on the maximum retention period for codespaces created for the repositories owned by your organization. This can help you to limit the storage costs associated with codespaces that are stopped and then left unused until they are automatically deleted. For more information about storage charges, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)." You can set a maximum retention period for all, or for specific, repositories owned by your organization. 

### Setting organization-wide and repository-specific policies

When you create a policy, you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a codespace retention constraint, then the retention constraints in any policies that are targeted at specific repositories should be shorter than the restriction configured for the entire organization, or they will have no effect. The shortest retention period - in an organization-wide policy, a policy targeted at specified repositories, or the default retention period in someone's personal settings - is applied.

If you add an organization-wide policy with a retention constraint, you should set the retention period to the longest acceptable period. You can then add separate policies that set the maximum retention to a shorter period for specific repositories in your organization.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adding a policy to set a maximum codespace retention period

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Retention period**.

   ![Add a constraint for retention periods](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint.

   ![Edit the timeout constraint](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Enter the maximum number of days codespaces can remain stopped before they are automatically deleted, then click **Save**.

   ![Set the retention period in days](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Notes**: 
   * A day, in this context, is a 24-hour period, beginning at the time of day when the codespace was stopped.
   * The valid range is 0-30 days.
   * Setting the period to `0` will result in codespaces being immediately deleted when they are stopped, or when they timeout due to inactivity.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)," "[Restricting the visibility of forwarded ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)," and "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."
1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are created.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

The retention period constraint is only applied to codespaces when they are created. Editing a policy has no effect on existing codespaces.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period)."
1. Click the name of the policy you want to edit.
1. Make the required changes then click **Save**.

## Deleting a policy 

You can delete a policy at any time. Deleting a policy has no effect on existing codespaces.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum codespace retention period](#adding-a-policy-to-set-a-maximum-codespace-retention-period)."
1. Click the delete button to the right of the policy you want to delete.

   ![The delete button for a policy](/assets/images/help/codespaces/policy-delete.png)
