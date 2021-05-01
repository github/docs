---
title: Installing GitHub Enterprise Server on VMware
intro: 'To install {% data variables.product.prodname_ghe_server %} on VMware, you must download the VMware vSphere client, and then download and deploy the {% data variables.product.prodname_ghe_server %} software.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware/
  - /enterprise/admin/articles/installing-vmware-tools/
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums/
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Prerequisites

- {% data reusables.enterprise_installation.software-license %}
- You must have a VMware vSphere ESXi Hypervisor, applied to a bare metal machine that will run {% data variables.product.product_location %}s. We support versions 5.5 through 6.7. The ESXi Hypervisor is free and does not include the (optional) vCenter Server. For more information, see [the VMware ESXi documentation](https://www.vmware.com/products/esxi-and-esx.html).
- You will need access to a vSphere Client. If you have vCenter Server you can use the vSphere Web Client. For more information, see the VMware guide "[Log in to vCenter Server by Using the vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)."

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Downloading the {% data variables.product.prodname_ghe_server %} image

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Select {% data variables.product.prodname_dotcom %} On-premises, then click **VMware ESXi/vSphere (OVA)**.
5. Click **Download for VMware ESXi/vSphere (OVA)**.

### Creating the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Using the vSphere Windows Client or the vCenter Web Client, import the {% data variables.product.prodname_ghe_server %} image you downloaded. For instructions, see the VMware guide "[Deploy an OVF or OVA Template](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)."
    - When selecting a datastore, choose one with sufficient space to host the VM's disks. For the minimum hardware specifications recommended for your instance size, see "[Hardware considerations](#hardware-considerations)." We recommend thick provisioning with lazy zeroing.
    - Leave the **Power on after deployment** box unchecked, as you will need to add an attached storage volume for your repository data after provisioning the VM.
{% data reusables.enterprise_installation.create-attached-storage-volume %} For instructions, see the VMware guide "[Add a New Hard Disk to a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)."

### Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Further reading

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
