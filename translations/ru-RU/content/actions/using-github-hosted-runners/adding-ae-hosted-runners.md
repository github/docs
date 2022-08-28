---
title: Adding AE hosted runners
intro: 'You can add an {% data variables.actions.hosted_runner %} to an organization or an enterprise.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% note %}

**Note:** To add {% data variables.actions.hosted_runner %}s to {% data variables.product.prodname_ghe_managed %}, you will need to contact {% data variables.product.prodname_dotcom %} support. This article describes the information that support will need in order to complete this process.

{% endnote %}

{% data variables.actions.hosted_runner %}s can use the base Azure operating system images, or you can create your own custom images.

### Adding an {% data variables.actions.hosted_runner %} from the base Azure image

You can add {% data variables.actions.hosted_runner %}s that use the base Azure operating system images. To add {% data variables.actions.hosted_runner %}s to your organization or enterprise, contact {% data variables.product.prodname_dotcom %} support and have the following information ready:
 - Required operating system: Available options are listed at ["Software specifications](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)."
 - Choose a name for each pool of {% data variables.actions.hosted_runner %}s. These names are created as labels, allowing you to route your workflows to these runners. For more information, see ["Using {% data variables.actions.hosted_runner %}s in a workflow](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)."
 - Where to add the {% data variables.actions.hosted_runner %}: Identify the names of the organizations and enterprises that will receive the runners.

### Adding an {% data variables.actions.hosted_runner %} with a custom image

To create a custom operating system image, see the steps at ["Creating custom images"](/actions/using-github-hosted-runners/creating-custom-images).

Once you've created a custom image using the above steps, contact {% data variables.product.prodname_dotcom %} support and provide the following details:

  - The SAS URI you generated when following the custom image creation steps.
  - Type of operating system used by the image: This can be Linux or Windows.
  - Image name.
  - Версия.
  - VM SKU for the new pool.
  - Choose a name for each pool of {% data variables.actions.hosted_runner %}s. These names are created as labels, allowing you to route your workflows to these runners. For more information, see ["Using {% data variables.actions.hosted_runner %}s in a workflow](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)."
  - Where to add the {% data variables.actions.hosted_runner %}: Identify the names of the organizations and enterprises that will receive the runners.

### Reviewing your {% data variables.actions.hosted_runner %}s

Once your runners have been added by {% data variables.product.prodname_dotcom %} support, you'll be able to find them in your list of runners:

{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
