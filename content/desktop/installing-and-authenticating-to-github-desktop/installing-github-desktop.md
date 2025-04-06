---
title: Installing GitHub Desktop
shortTitle: Installation
intro: You can install GitHub Desktop on supported Windows or macOS operating systems.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop
versions:
  feature: desktop
---

<a href="https://desktop.github.com?ref_cta=download+desktop&ref_loc=installing+github+desktop&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.product.prodname_desktop %}</span> {% octicon "link-external" height:16 %}</a>

## About {% data variables.product.prodname_desktop %} installation

You can install {% data variables.product.prodname_desktop %} on supported operating systems, which currently include {% data variables.desktop.mac-osx-versions %} and {% data variables.desktop.windows-versions %}. If you have an account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you can connect your account to {% data variables.product.prodname_desktop %}.{% ifversion fpt or ghec %} For more information about creating an account, see "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)."{% endif %}{% ifversion ghec %} If you're part of an organization that uses {% data variables.product.prodname_emus %} and you do not have an account, contact your enterprise administrator.{% elsif ghes %} If you're a member of an organization that uses {% data variables.product.product_name %} and you do not have an account, contact your {% data variables.product.prodname_enterprise %} site administrator.{% endif %}

{% windows %}

If you are a network administrator, you can deploy {% data variables.product.prodname_desktop %} to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install {% data variables.product.prodname_desktop %} the next time a user signs in to their workstation. Users must have permissions to install {% data variables.product.prodname_desktop %} in their user directory.

If a user runs the Windows Installer package for {% data variables.product.prodname_desktop %} directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

## Downloading and installing {% data variables.product.prodname_desktop %}

{% mac %}

You can install {% data variables.product.prodname_desktop %} on {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
1. Click **Download for macOS**.
1. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** zip file.
1. After the file has been unzipped, double-click the **{% data variables.product.prodname_desktop %}** application file.
1. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endmac %}

{% windows %}

You can install {% data variables.product.prodname_desktop %} on {% data variables.desktop.windows-versions %}.

{% warning %}

**Warning**: You must have a 64-bit operating system to run {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
1. Click **Download for Windows**.
1. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** setup file.
1. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endwindows %}

{% linux %}

Linux is not yet supported

{% endlinux %}
