1. Click **New runner**, then click **{% octicon "mark-github" aria-hidden="true" aria-label="mark-github" %} New {% data variables.product.prodname_dotcom %}-hosted runner**.
1. Complete the required details to configure your new runner:

    * **Name:** Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `ubuntu-20.04-16core`.
    * **Platform:** Choose a platform from the available options. Once you've selected a platform, you will be able to choose a specific image.

        If you are building a custom image, the platform that you select for your runner must match the platform of the image you want to build. The platform of the runner can be one of the following:
      * Linux x64
      * Linux ARM64
      * Windows x64
    * **Image:** Choose an image from the available options. Once you've selected an image, you will be able to choose a specific size.
      * **GitHub-owned:** For images managed by GitHub, select an image under this tab.
      * **Partner:** For images managed by a partner, select an image under this tab. ex: Base Windows 11 desktop, GPU-optimized, and arm64 images are located under this tab.
      * **Custom:** For images that are created by your organization or enterprise, select an image under this tab. Custom images are created by running a workflow on an image-building runner that you, your organization, or your enterprise have set up. For more information, see [Installing custom images](/actions/how-tos/manage-runners/larger-runners/use-custom-images#installing-custom-images).
    * **Size:** Choose a hardware configuration from the list of available options. The available sizes depend on the image that you selected in a previous step. For GPU runners, select a size under the **GPU-powered** tab.
    * **Maximum concurrency:** Choose the maximum number of jobs that can be active at any time.
    * **Runner group:** Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand. {% ifversion ghec %}
    * **Networking:** Choose whether static IP address ranges will be assigned to instances of the {% data variables.actions.hosted_runner %}. You can use up to 10 {% data variables.actions.hosted_runner %}s with static IP addresses in total. {% endif %}

    {% data reusables.actions.larger-runner-name-note %}

1. Click **Create runner**.
