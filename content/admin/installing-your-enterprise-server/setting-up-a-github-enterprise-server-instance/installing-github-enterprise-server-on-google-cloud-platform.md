---
title: Installing GitHub Enterprise Server on Google Cloud Platform
intro: 'To install {% data variables.product.prodname_ghe_server %} on Google Cloud Platform, you must deploy onto a supported machine type and use a persistent standard disk or a persistent SSD.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
---
## Prerequisites

* {% data reusables.enterprise_installation.software-license %}
* You must have a Google Cloud Platform account capable of launching Google Compute Engine (GCE) virtual machine (VM) instances. For more information, see the [Google Cloud Platform website](https://cloud.google.com/) and the [Google Cloud Platform documentation](https://cloud.google.com/docs/).
* Most actions needed to launch your instance may also be performed using the [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console). However, we recommend installing the gcloud compute command-line tool for initial setup. Examples using the gcloud compute command-line tool are included below. For more information, see the [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) installation and setup guide in the Google documentation.

## Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determining the machine type

Before launching {% data variables.location.product_location %} on Google Cloud Platform, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum recommended requirements for {% data variables.product.product_name %}, see [Minimum recommended requirements](#minimum-recommended-requirements).

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} recommends a general-purpose, high-memory machine for {% data variables.product.prodname_ghe_server %}. For more information, see [Machine types](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types) in the Google Compute Engine documentation.

## Selecting the {% data variables.product.prodname_ghe_server %} image

1. Using the [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) command-line tool, list the public {% data variables.product.prodname_ghe_server %} images:

   ```shell
   gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

1. Take note of the image name for the latest GCE image of {% data variables.product.prodname_ghe_server %}.

## Configuring the firewall

GCE virtual machines are created as a member of a network, which has a firewall. For the network associated with the {% data variables.product.prodname_ghe_server %} VM, you'll need to configure the firewall to allow the required ports listed in the table below. We recommend opening network ports selectively based on the network services you need to expose for administrative and user purposes. For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/network-ports#administrative-ports), and [Firewall Rules Overview](https://cloud.google.com/vpc/docs/firewalls) in the Google Cloud Platform documentation.

1. Using the gcloud compute command-line tool, create the network. For more information, see [gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create) in the Google documentation.

   ```shell
   gcloud compute networks create NETWORK-NAME --subnet-mode auto
   ```

1. Create a firewall rule for each of the ports in the table below. For more information, see [gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/) in the Google documentation.

   ```shell
   $ gcloud compute firewall-rules create RULE-NAME \
   --network NETWORK-NAME \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```

   This table identifies the required ports and what each port is used for.

   {% data reusables.enterprise_installation.necessary_ports %}

## Allocating a static IP and assigning it to the VM

If this is a production appliance, we strongly recommend reserving a static external IP address and assigning it to the {% data variables.product.prodname_ghe_server %} VM. Otherwise, the public IP address of the VM will not be retained after restarts. For more information, see the Google guide [Reserving a Static External IP Address](https://cloud.google.com/compute/docs/configure-instance-ip-addresses).

In production High Availability configurations, both primary and replica appliances should be assigned separate static IP addresses.

## Creating the {% data variables.product.prodname_ghe_server %} instance

To create the {% data variables.product.prodname_ghe_server %} instance, you'll need to create a GCE instance with your {% data variables.product.prodname_ghe_server %} image and attach an additional storage volume for your instance data. For more information, see [Hardware considerations](#hardware-considerations).

1. Using the gcloud compute command-line tool, create a data disk to use as an attached storage volume for your instance data, and configure the size based on your user license count. For more information, see [gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create) in the Google documentation.

   ```shell
   gcloud compute disks create DATA-DISK-NAME --size DATA-DISK-SIZE --type DATA-DISK-TYPE --zone ZONE
   ```

1. Then create an instance using the name of the {% data variables.product.prodname_ghe_server %} image you selected, and attach the data disk. For more information, see [gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create) in the Google documentation.

   ```shell
   $ gcloud compute instances create INSTANCE-NAME \
   --machine-type n1-standard-8 \
   --image GITHUB-ENTERPRISE-IMAGE-NAME \
   --disk name=DATA-DISK-NAME \
   --metadata serial-port-enable=1 \
   --zone ZONE \
   --network NETWORK-NAME \
   --image-project github-enterprise-public
   ```

## Configuring the instance

{% data reusables.enterprise_installation.new-instance-config-summary %}

{% data reusables.enterprise_installation.new-instance-attack-vector-warning %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise).
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

## Further reading

* [AUTOTITLE](/admin/overview/system-overview){% ifversion ghes %}
* [AUTOTITLE](/admin/overview/about-upgrades-to-new-releases){% endif %}
