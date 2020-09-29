---
title: Installing GitHub Enterprise Server on Google Cloud Platform
intro: 'To install {% data variables.product.prodname_ghe_server %} on Google Cloud Platform, you must deploy onto a supported machine type and use a persistent standard disk or a persistent SSD.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
---

### Требования

- {% data reusables.enterprise_installation.software-license %}
- You must have a Google Cloud Platform account capable of launching Google Compute Engine (GCE) virtual machine (VM) instances. For more information, see the [Google Cloud Platform website](https://cloud.google.com/) and the [Google Cloud Platform Documentation](https://cloud.google.com/docs/).
- Most actions needed to launch your instance may also be performed using the [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console). However, we recommend installing the gcloud compute command-line tool for initial setup. Examples using the gcloud compute command-line tool are included below. For more information, see the "[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)" installation and setup guide in the Google documentation.

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determining the machine type

Before launching {% data variables.product.product_location_enterprise %} on Google Cloud Platform, you'll need to determine the machine type that best fits the needs of your organization.

#### Supported machine types

{% data variables.product.prodname_ghe_server %} is supported on the following Google Compute Engine (GCE) machine types. For more information, see [the Google Cloud Platform machine types article](https://cloud.google.com/compute/docs/machine-types). |
{% if currentVersion != "free-pro-team@latest" %}
|  | High-memory   |
|  | ------------- |
|  | n1-highmem-4  |
|  | n1-highmem-8  |
|  | n1-highmem-16 |
|  | n1-highmem-32 |
|  | n1-highmem-64 |
|  | n1-highmem-96 |
{% endif %}

#### Recommended machine types

Based on your user license count, we recommend these machine types.

|             Seats              | Recommended type |
|:------------------------------:|:----------------:|
| Trial, demo, or 10 light users |  n1-standard-4   |
|           10 - 3000            |  n1-standard-8   |
|          3000 - 5000           |   n1-highmem-8   |
|          5000 - 8000           |  n1-highmem-16   |
|         8000 - 10000+          |  n1-highmem-32   |

{% data reusables.enterprise_installation.warning-on-scaling %}

### Selecting the {% data variables.product.prodname_ghe_server %} image

1. Using the [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) command-line tool, list the public {% data variables.product.prodname_ghe_server %} images:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
  ```

2. Take note of the image name for the latest GCE image of  {% data variables.product.prodname_ghe_server %}.

### Configuring the firewall

GCE virtual machines are created as a member of a network, which has a firewall. For the network associated with the {% data variables.product.prodname_ghe_server %} VM, you'll need to configure the firewall to allow the required ports listed in the table below. For more information about firewall rules on Google Cloud Platform, see the Google guide "[Firewall Rules Overview](https://cloud.google.com/vpc/docs/firewalls)."

1. Using the gcloud compute command-line tool, create the network. For more information, see "[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)" in the Google documentation.
  ```shell
  $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
  ```
2. Create a firewall rule for each of the ports in the table below. For more information, see "[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)" in the Google documentation.
  ```shell
  $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
  --network <em>NETWORK-NAME</em> \
  --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
  ```
  This table identifies the required ports and what each port is used for.

  {% data reusables.enterprise_installation.necessary_ports %}

### Allocating a static IP and assigning it to the VM

If this is a production appliance, we strongly recommend reserving a static external IP address and assigning it to the {% data variables.product.prodname_ghe_server %} VM. Otherwise, the public IP address of the VM will not be retained after restarts. For more information, see the Google guide "[Reserving a Static External IP Address](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)."

In production High Availability configurations, both primary and replica appliances should be assigned separate static IP addresses.

### Creating the {% data variables.product.prodname_ghe_server %} instance

To create the {% data variables.product.prodname_ghe_server %} instance, you'll need to create a GCE instance with your {% data variables.product.prodname_ghe_server %} image and attach an additional storage volume for your instance data. For more information, see "[Hardware considerations](#hardware-considerations)."

1. Using the gcloud compute command-line tool, create a data disk to use as an attached storage volume for your instance data, and configure the size based on your user license count. For more information, see "[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)" in the Google documentation.
  ```shell
  $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
  ```

2. Then create an instance using the name of the {% data variables.product.prodname_ghe_server %} image you selected, and attach the data disk. For more information, see "[gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)" in the Google documentation.
  ```shell
  $ gcloud compute instances create <em>INSTANCE-NAME</em> \
  --machine-type n1-standard-8 \
  --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
  --disk name=<em>DATA-DISK-NAME</em> \
  --metadata serial-port-enable=1 \
  --zone <em>ZONE</em> \
  --network <em>NETWORK-NAME</em> \
  --image-project github-enterprise-public
  ```

### Configuring the instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Дополнительная литература

- "[System overview](/enterprise/admin/guides/installation/system-overview)"
