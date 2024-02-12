---
title: Restricting the number of organization-billed codespaces a user can create
shortTitle: Restrict codespace creation
intro: You can specify the maximum number of codespaces that any member of your organization, or collaborator, can create for the repositories in your organization.
permissions: 'To manage this constraint for an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces-org %}'
---

## Overview

By default, if organization members, or collaborators, are permitted to create codespaces that are billable to your organization, they can create multiple such codespaces. The number of organization-billed codespaces someone can create is governed by a limit to the total number of codespaces that they can create across all repositories they can access. This limit is set by {% data variables.product.company_short %}.

As an organization owner, you can restrict the number of codespaces that each user can create, where the costs of the codespace are billable to the organization. This can help to reduce the overall cost of {% data variables.product.prodname_github_codespaces %} to the organization, as there is a charge for codespace storage. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-storage-usage)."

To restrict the maximum number of organization-billed codespaces that users can create, you create a policy in the {% data variables.product.prodname_codespaces %} settings for your organization. For example, if you set the maximum to 2, users who already have 2 active or stopped codespaces that are billed to your organization will have to delete one of these before they can create a new codespace that's billed to the organization.

This setting does not restrict users from creating codespaces that are not billed to your organization. For example, they can create additional codespaces for public repositories, using their personal {% data variables.product.prodname_codespaces %} usage allowance. However, users who are permitted to create organization-billed codespaces, but have reached the limit for such codespaces, cannot choose to create a codespace for an organization-owned repository using their personal included allowance.

For information about the free use of {% data variables.product.prodname_github_codespaces %} for personal accounts, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#monthly-included-storage-and-core-hours-for-personal-accounts)." For information on how to choose who can create codespaces that are billed to your organization, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)."

Policies with the "Maximum codespaces per user" constraint are applied to every repository in your organization. You can't, therefore, add this constraint to an existing policy that is configured to apply only to selected repositories.

## Adding a policy to define the maximum codespaces per user

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Maximum codespaces per user**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. In the "Maximum value" field, enter the maximum number of organization-billed codespaces that each user can create.

   ![Screenshot of the 'Maximum value' dialog with the value '2' being entered, and 'Cancel' and 'Save' buttons.](/assets/images/help/codespaces/maximum-value-policy-setting.png)

1. Click **Save**.
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"

   {% note %}

   **Note**: When you add a constraint to a policy that already contains the "Maximum codespaces per user" constraint, you won't be able to restrict the additional constraint to specific repositories, as the "Maximum codespaces per user" constraint applies to all repositories in the organization.

   {% endnote %}

1. After you've finished adding constraints to your policy, click **Save**.

The policy is applied when anyone attempts to create a new codespace that is billable to your organization.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to define the maximum codespaces per user](#adding-a-policy-to-define-the-maximum-codespaces-per-user)."
1. Click the name of the policy you want to edit.
1. Beside the "Maximum codespaces per user" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Edit the maximum number of codespaces.
1. Click **Save**.

## Deleting a policy

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to define the maximum codespaces per user](#adding-a-policy-to-define-the-maximum-codespaces-per-user)."
1. Click {% octicon "trash" aria-label="The trash can icon" %} to the right of the policy you want to delete.
