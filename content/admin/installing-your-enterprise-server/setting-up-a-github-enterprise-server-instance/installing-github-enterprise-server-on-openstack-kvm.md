---
title: Installing GitHub Enterprise Server on OpenStack KVM
intro: 'To install {% data variables.product.prodname_ghe_server %} on OpenStack KVM, you must have OpenStack access and download the {% data variables.product.prodname_ghe_server %} QCOW2 image.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
---
## Prerequisites

* {% data reusables.enterprise_installation.software-license %}
* You must have access to an installation of OpenStack Horizon, the web-based user interface to OpenStack services. For more information, see the [Horizon documentation](https://docs.openstack.org/horizon/latest/).

## Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Downloading the {% data variables.product.prodname_ghe_server %} image

{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
1. Under "{% data variables.product.prodname_dotcom %} On-premises", select the "Select your hypervisor" dropdown menu and click **OpenStack KVM (QCOW2)**.
1. Click **Download for OpenStack KVM (QCOW2)**.

## Creating the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.create-ghe-instance %}

1. In OpenStack Horizon, upload the {% data variables.product.prodname_ghe_server %} image you downloaded. For instructions, see the "Upload an image" section of the OpenStack guide [Upload and manage images](https://docs.openstack.org/horizon/latest/user/manage-images.html).
{% data reusables.enterprise_installation.create-attached-storage-volume %} For instructions, see the OpenStack guide "[Create and manage volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)."
1. Create a security group, and add a new security group rule for each port in the table below. For instructions, see the OpenStack guide [Configure access and security for instances](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html).

   {% data reusables.enterprise_installation.necessary_ports %}
1. Optionally, associate a floating IP to the instance. Depending on your OpenStack setup, you may need to allocate a floating IP to the project and associate it to the instance. Contact your system administrator to determine if this is the case for you. For more information, see [Allocate a floating IP address to an instance](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance) in the OpenStack documentation.
1. Launch {% data variables.location.product_location %} using the image, data volume, and security group created in the previous steps. For instructions, see the OpenStack guide [Launch and manage instances](https://docs.openstack.org/horizon/latest/user/launch-instances.html).

## Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.new-instance-config-summary %}

{% data reusables.enterprise_installation.new-instance-attack-vector-warning %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

## Further reading

* "[AUTOTITLE](/admin/overview/system-overview)"{% ifversion ghes %}
* "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
