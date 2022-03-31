---
title: Restricting the visibility of forwarded ports
shortTitle: Restricting port visibility
intro: 'You can set constraints on the visibility options users can choose when they forward ports from codespaces in your organization.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Overview

Typically, within a codespace you are able to forward ports privately (only to yourself), to members of your organization, or publicly (to anyone with the URL). For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

As an organization owner, you may want to configure constraints on the visibility options users can set when forwarding ports. For example, for security reasons, you may want to disallow public port forwarding. You do this by defining one or more policies in the {% data variables.product.prodname_codespaces %} settings for your organization.

### Behavior when you set a port visibility constraint

If there are existing codespaces that no longer conform to a policy you have defined, these codespaces will continue to operate until they are stopped or time out. When the user resumes the codespace, it will be subject to the policy constraints.

{% note %}

**Note**: You can't disable private port forwarding, as private port forwarding is required by {% data variables.product.prodname_codespaces %} to continue working as designed, for example to forward SSH on port 22.

{% endnote %}

### Setting organization-wide and repository-specific policies

When you create a policy you choose whether it applies to all repositories in your organization, or only to specified repositories. If you set an organization-wide policy then any policies you set for individual repositories must fall within the restriction set at the organization level. Adding policies makes the choice of visibility options more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the visibility options to organization only. You can then set a policy for Repository A that disallows both public and organization visibility, which would result in only private port forwarding being available for this repository. Setting a policy for Repository A that allowed both public and organization would result in only organization visibility, because the organization-wide policy does not allow public visibility.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. You can then add repository-specific policies to further restrict the choice.

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "codespaces" aria-label="The codespaces icon" %} {% data variables.product.prodname_codespaces %}** then click **Policies**.
1. On the "Codespace policies" page, click **Create Policy**.
1. Enter a name for your new policy.
1. Click **Add constraint** and choose **Port visibility**.

   ![Add a constraint for port visibility](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint

   ![Edit the port visibility constraint](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Choose the port visibility options](/assets/images/help/codespaces/choose-port-visibility-options.png)

1. In the "Change policy target" area, click the dropdown button.
1. Choose either **All repositories** or **Selected repositories** to determine which repositories this policy will apply to.
1. If you chose **Selected repositories**:
   1. Click {% octicon "gear" aria-label="The settings icon" %}.

      ![Edit the settings for the policy](/assets/images/help/codespaces/policy-edit.png)

   2. Select the repositories you want this policy to apply to.
   3. At the bottom of the repository list, click **Select repositories**.

      ![Select repositories for this policy](/assets/images/help/codespaces/policy-select-repos.png)

1. Click **Save**.

## Editing a policy

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Click the name of the policy you want to edit.
1. Make the required changes then click **Save**.

## Deleting a policy 

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Click the delete button to the right of the policy you want to delete.

   ![The delete button for a policy](/assets/images/help/codespaces/policy-delete.png)
