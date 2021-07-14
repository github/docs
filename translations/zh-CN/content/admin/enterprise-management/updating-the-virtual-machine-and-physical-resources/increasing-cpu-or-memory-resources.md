---
title: 增加 CPU 或内存资源
intro: '如果 {% data variables.product.product_location_enterprise %} 上的操作速度较慢，您可能需要增加 CPU 或内存资源。'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

### 为 AWS 增加 CPU 或内存资源

{% note %}

**注**：要为 AWS 增加 CPU 或内存资源，您必须能够熟练使用 AWS 管理控制台或 `aws ec2` 命令行接口管理 EC2 实例。 有关使用您所选 AWS 工具执行调整的背景和详细信息，请参阅关于[调整 Amazon EBS 支持的实例](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)的 AWS 文档。

{% endnote %}

#### 调整的考量因素

在为 {% data variables.product.product_location %} 增加 CPU 或内存资源之前：

- **使用 CPU 扩展内存**。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- **将 Elastic IP 地址分配给实例**。 如果未分配弹性 IP，则在重启后您必须调整 {% data variables.product.prodname_ghe_server %} 主机的 DNS A 记录，以反映公共 IP 地址的变更。 在实例重新启动后，如果它启动到 VPC 中，会自动保留弹性 IP (EIP)。 如果实例启动到 EC2-Classic 中，则必须手动重新关联弹性 IP。

#### 支持的 AWS 实例类型

您需要根据 CPU/内存规范确定升级的目标实例类型。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

#### 针对 AWS 进行调整

{% note %}

**注**：对于启动到 EC2-Classic 中的实例，请记下与实例关联的弹性 IP 地址以及实例的 ID。 重启实例后，请重新关联弹性 IP 地址。

{% endnote %}

无法将 CPU 或内存资源添加到现有的 AWS/EC2 实例。 相反，您必须执行以下操作：

1. 停止实例。
2. 更改实例类型。
3. 启动实例。
{% data reusables.enterprise_installation.configuration-recognized %}

### 为 OpenStack KVM 增加 CPU 或内存资源

无法将 CPU 或内存资源添加到现有的 OpenStack KVM 实例。 相反，您必须执行以下操作：

1. 生成当前实例的快照。
2. 停止实例。
3. 选择包含所需 CPU 和/或内存资源的新实例。

### 为 VMWare 增加 CPU 或内存资源

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. 使用 vSphere Client 连接到 VMware ESXi 主机。
2. 关闭 {% data variables.product.product_location %}。
3. 选择虚拟机，然后单击 **Edit Settings**。
4. 在“Hardware”下，根据需要调整分配给虚拟机的 CPU 和/或内存资源。 ![VMware 设置资源](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. 要启动虚拟机，请单击 **OK**。
{% data reusables.enterprise_installation.configuration-recognized %}
