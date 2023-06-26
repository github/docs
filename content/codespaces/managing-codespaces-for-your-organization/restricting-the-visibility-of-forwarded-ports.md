---
title: Restricting the visibility of forwarded ports
shortTitle: Restrict port visibility
intro: You can set constraints on the visibility options users can choose when they forward ports from codespaces in your organization.
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces-org %}'
---

## Overview

Typically, within a codespace you are able to forward ports privately (only to yourself), to members of your organization, or publicly (to anyone with the URL). For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

As an organization owner, you may want to configure constraints on the visibility options users can set when forwarding ports. For example, for security reasons, you may want to disallow public port forwarding. You do this by defining one or more policies in the {% data variables.product.prodname_github_codespaces %} settings for your organization.

### Behavior when you set a port visibility constraint

If there are existing codespaces that no longer conform to a policy you have defined, these codespaces will continue to operate until they are stopped or time out. When the user resumes the codespace, it will be subject to the policy constraints.

{% note %}

**Note**: You can't disable private port forwarding, as private port forwarding is required by {% data variables.product.prodname_github_codespaces %} to continue working as designed, for example to forward SSH on port 22.

{% endnote %}

### Setting organization-wide and repository-specific policies

When you create a policy you choose whether it applies to all repositories in your organization, or only to specified repositories. If you set an organization-wide policy then any policies you set for individual repositories must fall within the restriction set at the organization level. Adding policies makes the choice of visibility options more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the visibility options to organization only. You can then set a policy for Repository A that disallows both public and organization visibility, which would result in only private port forwarding being available for this repository. Setting a policy for Repository A that allowed both public and organization would result in only organization visibility, because the organization-wide policy does not allow public visibility.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. You can then add repository-specific policies to further restrict the choice.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Port visibility**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Screenshot of the "Allowed values" dropdown, with two checkboxes. "Org" is selected and "Public" is cleared.](/assets/images/help/codespaces/choose-port-visibility-options.png)

1. Click outside of the dialog box to close it.
{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"

1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are billable to your organization. The port visibility constraint is also applied to existing codespaces the next time they are started.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Click the name of the policy you want to edit.
1. Beside the "Port visibility" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Make the required changes then click **Save**.

## Deleting a policy

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
{% data reusables.codespaces.delete-codespace-policy %}
