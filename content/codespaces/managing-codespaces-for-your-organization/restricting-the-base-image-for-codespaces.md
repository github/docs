---
title: Restricting the base image for codespaces
shortTitle: Restrict base image
intro: You can specify which base images can be used for new codespaces created within your organization.
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces-org %}'
---

## Overview

When you create a codespace, a Docker container is automatically created on a remote virtual machine. The Docker container is created from a Docker image. The image is effectively a template for Docker containers and it determines many aspects of the resulting environment provided by the codespace.

You can choose which image you want to use for your codespaces by specifying it in the dev container configuration for a repository. You can do this, for example, by using the `image` property in the `devcontainer.json` file.

```json copy
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

For more information, see the [dev containers specification](https://containers.dev/implementors/json_reference/) on the Development Containers website.

If you don't specify an image in the dev container configuration for a repository, the default image is used. The default image contains a number of runtime versions for popular languages and commonly used tools. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)."

As an organization owner, you can add a policy to restrict which images can be used for codespaces created within your organization.

If the image specified in the dev container configuration does not match one of the allowed images, the following message is displayed when someone tries to create a codespace for the repository:

> Codespace could not be created: Base image 'DETAILS FROM DEV CONTAINER CONFIGURATION' is not allowed based on an organization policy set by your organization owner.

{% note %}

**Notes**:
- The base image policy is only applied when a codespace is created. It is currently not applied when you rebuild a container. This will change in a future release. For more information, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace)."
- The base image policy does not apply to the default image, or the image that's used to recover a codespace if an error is introduced into a dev container configuration which prevents the container from being rebuilt.

{% endnote %}

### Setting organization-wide and repository-specific policies

When you create a policy you choose whether it applies to all repositories in your organization, or only to specified repositories. If you set an organization-wide policy then any policies you set for individual repositories must fall within the restriction set at the organization level. Adding policies makes the choice of image more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the base image to any of ten specified images. You can then set a policy for Repository A that restricts the image to a subset of just two of the images specified at the organization level. Specifying additional images for Repository A will have no effect because these images are not specified in the organization-level policy. If you add an organization-wide policy, you should set it to the largest choice of images that will be available for any repository in your organization. You can then add repository-specific policies to further restrict the choice.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adding a policy to define the allowed images

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Base images**.
1. Click {% octicon "pencil" aria-label="Edit policy" %} to edit the constraint.
1. In the "Allowed values" field, enter the complete URL of an image you want to allow.

   ![Screenshot of the URL "mcr.microsoft.com/vscode/devcontainers/java" entered in the "Allowed values" field.](/assets/images/help/codespaces/image-allowed-values.png)

   {% note %}

   **Note**: You must specify an image URL that exactly matches the value specified in a dev container configuration.

   {% endnote %}

1. Click {% octicon "plus" aria-label="Add button" %} to add the value.
1. If required, repeat the previous two steps to add more image URLs.
1. Click outside of the dialog box to close it.
{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see:
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   - "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"

1. After you've finished adding constraints to your policy, click **Save**.

The policy is applied when anyone attempts to create a new codespace that is billable to your organization. The base image constraint does not affect existing codespaces, either active or stopped.

## Editing a policy

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to define the allowed images](#adding-a-policy-to-define-the-allowed-images)."
1. Click the name of the policy you want to edit.
1. Beside the "Base images" constraint, click {% octicon "pencil" aria-label="Edit policy" %}.
1. Add or remove image URLs.
1. Click **Save**.

## Deleting a policy

1. Display the "Codespace policies" page. For more information, see "[Adding a policy to define the allowed images](#adding-a-policy-to-define-the-allowed-images)."
{% data reusables.codespaces.delete-codespace-policy %}
