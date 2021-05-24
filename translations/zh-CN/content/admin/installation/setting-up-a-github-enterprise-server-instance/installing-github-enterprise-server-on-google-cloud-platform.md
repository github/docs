---
title: 在 Google Cloud Platform 上安装 GitHub Enterprise Server
intro: '要在 Google Cloud Platform 上安装 {% data variables.product.prodname_ghe_server %}，您必须部署到受支持的机器类型上，并使用持久标准磁盘或持久 SSD。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---
### 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须具有能够启动 Google Compute Engine (GCE) 虚拟机 (VM) 实例的 Google Cloud Platform 帐户。 更多信息请参阅 [Google Cloud Platform 网站](https://cloud.google.com/)和 [Google Cloud Platform 文档](https://cloud.google.com/docs/)。
- 启动实例所需的大部分操作也可以使用 [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console) 执行。 不过，我们建议安装 gcloud compute 命令行工具进行初始设置。 下文介绍了使用 gcloud compute 命令行工具的示例。 更多信息请参阅 Google 文档中的“[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)”安装和设置指南。

### 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 确定机器类型

在 Google Cloud Platform 上启动 {% data variables.product.product_location %} 之前，您需要确定最符合您的组织需求的机器类型。 要查看 {% data variables.product.product_name %} 的最低要求，请参阅“[最低要求](#minimum-requirements)”。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} 建议对 {% data variables.product.prodname_ghe_server %} 使用通用高内存设备。 更多信息请参阅 Google Compute Engine 文档中的“[设备类型](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)”。

### 选择 {% data variables.product.prodname_ghe_server %} 映像

1. 使用 [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) 命令行工具列出公共 {% data variables.product.prodname_ghe_server %} 映像：
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. 记下 {% data variables.product.prodname_ghe_server %} 最新 GCE 映像的映像名称。

### 配置防火墙

GCE 虚拟机作为具有防火墙的网络的成员创建。 对于与 {% data variables.product.prodname_ghe_server %} VM 关联的网络，您需要将防火墙配置为允许下表中列出的必需端口。 更多关于 Google Cloud Platform 上防火墙规则的信息，请参阅 Google 指南“[防火墙规则概述](https://cloud.google.com/vpc/docs/firewalls)”。

1. 使用 gcloud compute 命令行工具创建网络。 更多信息请参阅 Google 文档中的“[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)”。
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. 为下表中的各个端口创建防火墙规则。 更多信息请参阅 Google 文档中的“[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)”。
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   此表列出了必需端口以及各端口的用途。

   {% data reusables.enterprise_installation.necessary_ports %}

### 分配静态 IP 并将其分配给 VM

如果此设备为生产设备，强烈建议保留静态外部 IP 地址并将其分配给 {% data variables.product.prodname_ghe_server %} VM。 否则，重新启动后将不会保留 VM 的公共 IP 地址。 更多信息请参阅 Google 指南“[保留静态外部 IP 地址](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)”。

在生产高可用性配置中，主设备和副本设备均应获得单独的静态 IP 地址。

### 创建 {% data variables.product.prodname_ghe_server %} 实例

要创建 {% data variables.product.prodname_ghe_server %} 实例，您需要使用 {% data variables.product.prodname_ghe_server %} 映像创建 GCE 实例并连接额外的存储卷来存储实例数据。 更多信息请参阅“[硬件考量因素](#hardware-considerations)”。

1. 使用 gcloud compute 命令行工具，创建数据磁盘，将其用作您的实例数据的附加存储卷，并根据用户许可数配置大小。 更多信息请参阅 Google 文档中的“[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)”。
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. 然后，使用所选 {% data variables.product.prodname_ghe_server %} 映像的名称创建实例，并连接数据磁盘。 更多信息请参阅 Google 文档中的“[gcloud compute ](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)”。
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

### 配置实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 延伸阅读

- "[系统概述](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
