---
title: Installing GitHub Enterprise Server on OpenStack KVM
intro: 'To install {% data variables.product.prodname_ghe_server %} on OpenStack KVM, you must have OpenStack access and download the {% data variables.product.prodname_ghe_server %} QCOW2 image.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 빌드전 요구 사양

- {% data reusables.enterprise_installation.software-license %}
- You must have access to an installation of OpenStack Horizon, the web-based user interface to OpenStack services. For more information, see the [Horizon documentation](https://docs.openstack.org/horizon/latest/).

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Downloading the {% data variables.product.prodname_ghe_server %} image

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Select {% data variables.product.prodname_dotcom %} On-premises, then click **OpenStack KVM (QCOW2)**.
5. Click **Download for OpenStack KVM (QCOW2)**.

### Creating the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.create-ghe-instance %}

1. In OpenStack Horizon, upload the

{% data variables.product.prodname_ghe_server %} image you downloaded. For instructions, see the "Upload an image" section of the OpenStack guide "[Upload and manage images](https://docs.openstack.org/horizon/latest/user/manage-images.html)."
{% data reusables.enterprise_installation.create-attached-storage-volume %} For instructions, see the OpenStack guide "[Create and manage volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)."
3. Create a security group, and add a new security group rule for each port in the table below. For instructions, see the OpenStack guide "[Configure access and security for instances](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)."

  {% data reusables.enterprise_installation.necessary_ports %}
4. Optionally, associate a floating IP to the instance. Depending on your OpenStack setup, you may need to allocate a floating IP to the project and associate it to the instance. Contact your system administrator to determine if this is the case for you. For more information, see "[Allocate a floating IP address to an instance](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)" in the OpenStack documentation.
5. Launch {% data variables.product.product_location %} using the image, data volume, and security group created in the previous steps. For instructions, see the OpenStack guide "[Launch and manage instances](https://docs.openstack.org/horizon/latest/user/launch-instances.html)."

### Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 더 읽을거리

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
