---
title: Choosing the stable or beta host image
shortTitle: Choose the host image
intro: 'You can choose to build codespaces using either the stable or beta version of the host image for the underlying virtual machine.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
---

## About the virtual machine host image

A {% data variables.product.prodname_dotcom %} codespace is a development environment provided by a Docker container that runs on a virtual machine (VM). For more information about the relationship of the development container and the VM, see "[AUTOTITLE](/codespaces/overview#what-is-a-codespace)."

The VM for a codespace is built using a host image that defines the operating system of the VM. The image is periodically upgraded to improve security, functionality, and performance. The upgraded host image is initially made available as a beta release and subsequently becomes the stable release after a period of testing. You can choose, in your personal settings, to use either the stable or beta version of the host image. Any codespace you create or resume after changing this setting will run on a VM built from the specified host image.

The stable image is the default selected setting. Changing the setting to the beta host image gives you early access to improvements and new features on the host VM, but may also introduce incompatibilities with your current dev container configuration. This gives you the opportunity to alter your dev container configuration to avoid problems before the beta image is promoted to the stable image. If you do encounter problems with the beta host image, you can switch back to the stable host image at any time.

{% note %}

**Notes**:

* It's unlikely you will encounter problems using the beta host image unless your dev container configuration has dependencies on components of the VM host kernel.
* The virtual machine host image should not be confused with the dev container image, which provides the environment of your codespace. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces#overview)."

{% endnote %}

If you choose to use the beta host image but no beta image is currently available, your codespaces will be built using the stable host image.

For information about the current host image versions, including the date on which the current stable image will be replaced by the current beta image, see [the `github/codespaces-host-images` repository](https://github.com/github/codespaces-host-images/blob/main/README.md).

## Choosing the host image

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Host image version preference", select either **Stable** or **Beta**.

   ![Screenshot of the "Host image version preference" options, with "Stable" selected.](/assets/images/help/codespaces/host-image-choice.png)

## Further reading

* "[AUTOTITLE](/codespaces/customizing-your-codespace)"
* "[AUTOTITLE](/codespaces/managing-your-codespaces)"
