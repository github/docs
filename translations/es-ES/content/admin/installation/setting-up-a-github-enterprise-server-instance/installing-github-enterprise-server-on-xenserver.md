---
title: Installing GitHub Enterprise Server on XenServer
intro: 'To install {% data variables.product.prodname_ghe_server %} on XenServer, you must deploy the {% data variables.product.prodname_ghe_server %} disk image to a XenServer host.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
  - /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on XenServer
---

{% note %}

  **Note:** Support for {% data variables.product.prodname_ghe_server %} on XenServer will be discontinued in {% data variables.product.prodname_ghe_server %} 3.3. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.1 release notes](/admin/release-notes#3.1.0)

{% endnote %}

## Prerequisites

- {% data reusables.enterprise_installation.software-license %}
- You must install the XenServer Hypervisor on the machine that will run your {% data variables.product.prodname_ghe_server %} virtual machine (VM). We support versions 6.0 through 7.0.
- We recommend using the XenCenter Windows Management Console for initial setup. Instructions using the XenCenter Windows Management Console are included below. For more information, see the Citrix guide "[How to Download and Install a New Version of XenCenter](https://support.citrix.com/article/CTX118531)."

## Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Downloading the {% data variables.product.prodname_ghe_server %} image

{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Under "{% data variables.product.prodname_dotcom %} On-premises", select the "Select your hypervisor" dropdown menu and click **XenServer (VHD)**.
5. To download your license file, click **Download license**.

## Creating the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.create-ghe-instance %}

1. In XenCenter, import the {% data variables.product.prodname_ghe_server %} image you downloaded. For instructions, see the XenCenter guide "[Import Disk Images](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)."
    - For the "Enable Operating System Fixup" step, select **Don't use Operating System Fixup**.
    - Leave the VM powered off when you're finished.
{% data reusables.enterprise_installation.create-attached-storage-volume %} For instructions, see the XenCenter guide "[Add Virtual Disks](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)."

## Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

## Further reading

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
