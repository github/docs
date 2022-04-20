---
title: Restricting the idle timeout period
shortTitle: Restrict timeout periods
intro: 'You can set a maximum timeout period for any codespaces owned by your organization.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Overview

The personal settings of a {% data variables.product.prodname_dotcom %} user allow them to define how long a codespace they have created can remain inactive before it times out. When a codespace times out it is stopped and will no longer incur charges for compute usage. For more information, see "[Setting your timeout period for Codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)."

As an organization owner, you may want to configure constraints on the maximum idle timeout period for codespaces owned by your organization. This can help you limit costs associated with codespaces that are left to timeout after long periods of inactivity. You can set a maximum timeout for all codespaces owned by your organization, or for the codespaces of specific repositories. 

{% note %}

**Note**: Maximum idle timeout constraints only apply to codespaces that are owned by your organization. They do not apply to codespaces for which the organization is not the billable owner.

{% endnote %}

For more information about pricing for {% data variables.product.prodname_codespaces %} compute usage, see "[About billing for Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

### Behavior when you set a maximum idle timeout constraint

If someone sets the default idle timeout to 90 minutes in their personal settings and they then start a codespace for a repository with a maximum idle timeout constraint of 60 minutes, the codespace will time out after 60 minutes of inactivity. When codespace creation completes, a message explaining this will be displayed:

> Idle timeout for this codespace is set to 60 minutes in compliance with your organization’s policy.

### Setting organization-wide and repository-specific policies

When you create a policy you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a timeout constraint then the timeout constraints in any repository-specific policies must fall within the restriction set at the organization level. The shortest timeout period, in an organization policy, a repository policy, or in someone's personal settings, is applied.

If you add an organization-wide policy with a timeout constraint, you should set the timeout to the longest acceptable period. You can then add repository-specific policies that set the maximum timeout to a shorter period.

## Adding a policy to set a maximum idle timeout period

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "codespaces" aria-label="The codespaces icon" %} {% data variables.product.prodname_codespaces %}** then click **Policies**.
1. On the "Codespace policies" page, click **Create Policy**.
1. Enter a name for your new policy.
1. Click **Add constraint** and choose **Maximum idle timeout**.

   ![Add a constraint for idle timeout](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint.

   ![Edit the timeout constraint](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Enter the maximum number of minutes codespaces can remain inactive before they time out, then click **Save**.

   ![Choose the port visibility options](/assets/images/help/codespaces/maximum-minutes-timeout.png)

1. In the "Change policy target" area, click the dropdown button.
1. Choose either **All repositories** or **Selected repositories** to determine which repositories this policy will apply to.
1. If you chose **Selected repositories**:
   1. Click {% octicon "gear" aria-label="The settings icon" %}.

      ![Edit the settings for the policy](/assets/images/help/codespaces/policy-edit.png)

   2. Select the repositories you want this policy to apply to.
   3. At the bottom of the repository list, click **Select repositories**.

      ![Select repositories for this policy](/assets/images/help/codespaces/policy-select-repos.png)

1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)" and "[Restricting the visibility of forwarded ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)."
1. After you have finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are created, and to existing codespaces the next time they are started.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Click the name of the policy you want to edit.
1. Make the required changes then click **Save**.

## Deleting a policy 

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Click the delete button to the right of the policy you want to delete.

   ![The delete button for a policy](/assets/images/help/codespaces/policy-delete.png)
