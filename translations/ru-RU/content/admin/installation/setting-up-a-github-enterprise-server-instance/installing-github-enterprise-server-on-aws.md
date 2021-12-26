---
title: Installing GitHub Enterprise Server on AWS
intro: 'To install {% data variables.product.prodname_ghe_server %} on Amazon Web Services (AWS), you must launch an Amazon Elastic Compute Cloud (EC2) instance and create and attach a separate Amazon Elastic Block Store (EBS) data volume.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
  - /admin/installation/installing-github-enterprise-server-on-aws
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Требования

- {% data reusables.enterprise_installation.software-license %}
- You must have an AWS account capable of launching EC2 instances and creating EBS volumes. For more information, see the [Amazon Web Services website](https://aws.amazon.com/).
- Most actions needed to launch {% data variables.product.product_location %} may also be performed using the AWS management console. However, we recommend installing the AWS command line interface (CLI) for initial setup. Examples using the AWS CLI are included below. For more information, see Amazon's guides "[Working with the AWS Management Console](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)" and "[What is the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)."

This guide assumes you are familiar with the following AWS concepts:

 - [Launching EC2 Instances](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Managing EBS Volumes](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Using Security Groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (For managing network access to your instance)
 - [Elastic IP Addresses (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (Strongly recommended for production environments)
 - [EC2 and Virtual Private Cloud](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (If you plan to launch into a Virtual Private Cloud)
 - [AWS Pricing](https://aws.amazon.com/pricing/) (For calculating and managing costs)

 This guide recommends the principle of least privilege when setting up {% data variables.product.product_location %} on AWS. For more information, refer to the [AWS Identity and Access Management (IAM) documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determining the instance type

Before launching {% data variables.product.product_location %} on AWS, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum requirements for {% data variables.product.product_name %}, see "[Minimum requirements](#minimum-requirements)."

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Selecting the {% data variables.product.prodname_ghe_server %} AMI

You can select an Amazon Machine Image (AMI) for {% data variables.product.prodname_ghe_server %} using the {% data variables.product.prodname_ghe_server %} portal or the AWS CLI.

AMIs for {% data variables.product.prodname_ghe_server %} are available in the AWS GovCloud (US-East and US-West) region. This allows US customers with specific regulatory requirements to run {% data variables.product.prodname_ghe_server %} in a federally compliant cloud environment. For more information on AWS's compliance with federal and other standards, see [AWS's GovCloud (US) page](http://aws.amazon.com/govcloud-us/) and [AWS's compliance page](https://aws.amazon.com/compliance/).

#### Using the {% data variables.product.prodname_ghe_server %} portal to select an AMI

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-appliance %}
3. In the Select your platform drop-down menu, click **Amazon Web Services**.
4. In the Select your AWS region drop-down menu, choose your desired region.
5. Take note of the AMI ID that is displayed.

#### Using the AWS CLI to select an AMI

1. Using the AWS CLI, get a list of {% data variables.product.prodname_ghe_server %} images published by {% data variables.product.prodname_dotcom %}'s AWS owner IDs (`025577942450` for GovCloud, and `895557238572` for other regions). For more information, see "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)" in the AWS documentation.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Take note of the AMI ID for the latest {% data variables.product.prodname_ghe_server %} image.

### Creating a security group

If you're setting up your AMI for the first time, you will need to create a security group and add a new security group rule for each port in the table below. For more information, see the AWS guide "[Using Security Groups](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)."

1. Using the AWS CLI, create a new security group. For more information, see "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)" in the AWS documentation.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Take note of the security group ID (`sg-xxxxxxxx`) of your newly created security group.

3. Create a security group rule for each of the ports in the table below. For more information, see "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)" in the AWS documentation.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  This table identifies what each port is used for.

  {% data reusables.enterprise_installation.necessary_ports %}

### Creating the {% data variables.product.prodname_ghe_server %} instance

To create the instance, you'll need to launch an EC2 instance with your {% data variables.product.prodname_ghe_server %} AMI and attach an additional storage volume for your instance data. For more information, see "[Hardware considerations](#hardware-considerations)."

{% note %}

**Note:** You can encrypt the data disk to gain an extra level of security and ensure that any data you write to your instance is protected. There is a slight performance impact when using encrypted disks. If you decide to encrypt your volume, we strongly recommend doing so **before** starting your instance for the first time. For more information, see the [Amazon guide on EBS encryption](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Warning:** If you decide to enable encryption after you've configured your instance, you will need to migrate your data to the encrypted volume, which will incur some downtime for your users.

{% endwarning %}

#### Launching an EC2 instance

In the AWS CLI, launch an EC2 instance using your AMI and the security group you created. Attach a new block device to use as a storage volume for your instance data, and configure the size based on your user license count. For more information, see "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)" in the AWS documentation.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

#### Allocating an Elastic IP and associating it with the instance

If this is a production instance, we strongly recommend allocating an Elastic IP (EIP) and associating it with the instance before proceeding to {% data variables.product.prodname_ghe_server %} configuration. Otherwise, the public IP address of the instance will not be retained after instance restarts. For more information, see "[Allocating an Elastic IP Address](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)" and "[Associating an Elastic IP Address with a Running Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)" in the Amazon documentation.

Both primary and replica instances should be assigned separate EIPs in production High Availability configurations. For more information, see "[Configuring {% data variables.product.prodname_ghe_server %} for High Availability](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

### Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Дополнительная литература

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
