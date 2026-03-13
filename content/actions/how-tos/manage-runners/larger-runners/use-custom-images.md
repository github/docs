---
title: Using custom images
shortTitle: Use custom images
intro: 'Create, manage, and use custom images for {% data variables.actions.github_hosted_larger_runners %} in your organization or enterprise.'
versions:
  feature: actions-hosted-runners
product: '{% data variables.actions.github_hosted_larger_runners %} are only available for organizations and enterprises using the {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plans. <br><a href="https://github.com/pricing?ref_product=ghec&ref_type=trial&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_actions %}</span> {% octicon "link-external" height:16 %}</a>'

---

{% data reusables.actions.custom-images-public-preview-note %}

## Custom images

You can create a custom image to define the exact environment that your {% data variables.actions.github_hosted_larger_runners %} use. Custom images let you preinstall tools, dependencies, and configurations to speed up workflows and improve consistency across jobs.

When your runner uses a custom image, it acts as a “pre-warmed” environment, allowing workflows to complete quicker, by downloading packages and binaries once during image creation instead of every time a workflow is run. For more information about custom images, see [Runner images](/actions/concepts/runners/github-hosted-runners#runner-images).

The process of using a custom image involves three main steps:
1. [Setting up an image-generation runner](#setting-up-an-image-generation-runner): Create a {% data variables.actions.hosted_runner %} to build and store your custom image.
1. [Generating a custom image](#generating-a-custom-image): Generate your custom image by running a workflow using the image-generation runner.
1. [Installing custom images](#installing-custom-images): Create a runner that uses your custom image.

## Prerequisites

Before you can create custom images, make sure the following requirements are met.

* **Policy**: Custom images must be enabled for your organization or enterprise. Enterprise owners can manage access to custom images and set retention policies in the Actions policy settings. For more information, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#custom-images).
* **Permissions**: To create and manage custom images, you must be an organization or enterprise owner, or have the `CI/CD Admin` role, or have a role with the following fine-grained permissions.  
  * View organization hosted runner custom images  
  * Manage organization hosted runner custom images
  * Manage organization runners and runner groups

  For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

## Setting up an image-generation runner

To create a custom image, you must first set up an image-generation runner. When you create the runner, the platform that you select for your runner must match the platform of the image you want to build. The platform of the runner can be Linux x64, Linux ARM64, or Windows x64.

1. Create a {% data variables.actions.hosted_runner %}:
   * For organizations, see [Adding a larger runner to an organization](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-organization).
   * For enterprises, see [Adding a larger runner to an enterprise](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-enterprise).
1. When configuring the runner, select the following configurations for your image-generation runner:
   * **Platform**: Select a supported platform that matches the platform of the image you plan to create (Linux x64, Linux ARM64, or Windows x64).
   * **Image**: Select an image to build on, then enable the checkbox **Enable this runner to generate custom images**.
     * You can start from a {% data variables.product.github %}-owned image or choose a base image to start from a clean OS.
     * For ARM64 platforms, you can also select an ARM-maintained image with preinstalled tooling.
   * **Runner group**: Select the group for your runner to be a member of. Once the custom image is created, only runners in this runner group can generate new versions of that image.

## Generating a custom image

After you create an image-generation runner, run a workflow that includes the `snapshot` keyword to generate a custom image.

To configure a workflow for image generation:
* Set the `runs-on` value to the name of the image-generation runner that you created.
* Add the `snapshot` keyword to the job, using either the string syntax or mapping syntax shown below.
  * Each job that includes the `snapshot` keyword creates a separate image. To generate only one image or image version, include all workflow steps in a single job.
  * Each successful run of a job that includes the `snapshot` keyword creates a new version of that image.

 > [!NOTE]
 > {% data variables.product.company_short %} recommends configuring image generation as a scheduled workflow on a weekly basis. This approach ensures dependencies remain up-to-date and have the latest security patches. For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#schedule).

It can take some time for your image to be fully generated and ready to use after the workflow completes. Provisioning time varies based on runner size and configuration, and may take several hours for larger runners.

The image is generated only when the job completes successfully. This prevents new image versions from being created when a workflow fails or ends in an incomplete state.

Once the image is generated, it is available for use in your workflows. For more information about managing custom images, see [Managing custom images](#managing-custom-images).

### String syntax

You can use the string syntax with `snapshot` to define the image name. This method creates a new image or adds a new version to an existing image with the same name. You cannot specify a version number using this syntax.

```yaml
jobs: 
  build:
    runs-on: my-image-generation-runner
    snapshot: my-custom-image
    steps:
      # Add any steps to download and setup any dependencies here
```

### Mapping syntax

You can use the mapping syntax with `snapshot` to define both the `image-name` and the optional `version`. When you specify a major version, the minor versioning automatically increments if that major version already exists. Patch versions are not supported.

```yaml
jobs: 
  build:
    runs-on: my-image-generation-runner
    snapshot: 
        image-name: my-custom-image
        version: 2.*
    steps:
      # Add any steps to download and setup any dependencies here
```

## Versioning

When you generate custom images, {% data variables.product.github %} automatically assigns version numbers to help you manage updates and track image history.

### Default behavior

If an image with the specified name does not exist in your organization or enterprise, {% data variables.product.github %} creates it with an initial version number of 1.0.0.
If an image with the same name already exists, {% data variables.product.github %} creates a new version by incrementing the minor version number (for example, 1.1.0, 1.2.0, etc.).

If you do not specify a version in your YAML file, image generation uses this default behavior.

### Specifying a version in your workflow

If you include a version in the YAML mapping, {% data variables.product.github %} checks the major version number first.
* If the specified major version already exists, the new image uses the next minor version (for example, 1.0 becomes 1.1).
* If the major version does not exist, {% data variables.product.github %} creates a new major version (for example, 2.0).

Patch versions are not supported.

### Latest tag

The most recent workflow run for an image is always tagged as latest.
If you specify an older major version in the YAML (for example, version: 1.* when a 2.0 version exists), {% data variables.product.github %} generates a new minor version under the older major version and marks it as latest.

> [!NOTE]
> {% data variables.actions.github_hosted_larger_runner %} creation does not support wildcards in image version selection.

## Managing custom images

You can view detailed information about each image, delete unused images or specific versions, and track image versions over time.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-custom-images %}
1. On the "Custom images" page, you can view all custom images that have been created in your organization or enterprise.
1. To view details about a specific image, click the image name.

## Installing custom images

Once your custom image is ready, you can install it on a new {% data variables.actions.github_hosted_larger_runner %}.

1. Follow the steps for creating a {% data variables.actions.hosted_runner %}:
   * For organizations, see [Adding a larger runner to an organization](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-organization).
   * For enterprises, see [Adding a larger runner to an enterprise](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-enterprise).
1. When configuring the runner:
   * **Platform**: Select the same platform that you used to generate the image (Linux x64, Linux ARM64, or Windows x64).
   * **Image**: Select the **Custom** tab, then choose your custom image from the list.
     * If you don’t see your image, make sure you’ve selected the correct platform and that you’re creating the runner at the same level (organization or enterprise) where the image was generated.
   * **Image version**: Choose **Latest** to automatically use the most recent version, or select a specific version number to pin the runner to that version.
     * If you select **Latest**, your runner automatically updates when a new version of the image becomes available. If you pin the runner to a specific version, you’ll need to edit the runner manually to upgrade later.
   * **Size**: Choose a runner size with storage equal to or larger than your image’s size. For example, if the image was generated on an 8-core runner, select an 8-core or larger to run this image.
   * **Runner group**: Assign the runner to a runner group that is shared with the repositories that need to use this image.
1. In your {% data variables.product.prodname_actions %} workflow job, set the `runs-on` key to the name of your runner.  

    ```yaml
    jobs: 
      build:
        runs-on: my-custom-runner
        steps:
        # Add any steps for your workflow here
    ```

1. Run your workflow to verify that it completes successfully. The job logs will show the image name and version in the "Set up job" section.
