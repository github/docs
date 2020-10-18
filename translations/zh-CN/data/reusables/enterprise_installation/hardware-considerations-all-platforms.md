- [最低要求](#minimum-requirements)
- [存储器](#storage)
- [CPU 和内存](#cpu-and-memory)

#### 最低要求

建议根据 {% data variables.product.product_location_enterprise %} 的用户许可数选择不同的硬件配置。 如果预配的资源超过最低要求，您的实例将表现出更好的性能和扩展。

{% data reusables.enterprise_installation.hardware-rec-table %} 有关为现有实例调整资源的更多信息，请参阅“[增加存储容量](/enterprise/admin/installation/increasing-storage-capacity)”和“[增加 CPU 或内存资源](/enterprise/admin/installation/increasing-cpu-or-memory-resources)”。

{% if currentVersion == "enterprise-server@2.22" %}

如果您为实例上的 {% data variables.product.prodname_actions %} 启用测试版，建议您规划额外的容量。

- 您必须为 {% data variables.product.prodname_actions %} 工作流程配置至少一个运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。
- 您必须配置外部 Blob 存储。 更多信息请参阅“[启用 {% data variables.product.prodname_actions %} 和配置存储](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)”。

需要为实例预配的额外 CPU 和内存资源取决于用户同时运行的工作流程数量，以及用户活动、自动化和集成的总体水平。

| 每分钟最大作业数 | vCPU |      内存 |
|:-------- | ----:| -------:|
| 轻型测试     |    4 | 30.5 GB |
| 25       |    8 |   61 GB |
| 35       |   16 |  122 GB |
| 100      |   32 |  244 GB |

{% endif %}

#### 存储器

我们建议为 {% data variables.product.prodname_ghe_server %} 配置具有高每秒输入/输出操作数 (IOPS) 和低延迟的高性能 SSD。 工作负载是 I/O 密集型的。 如果使用裸机管理程序，建议直接连接磁盘或使用存储区域网络 (SAN) 中的磁盘。

您的实例需要一个独立于根磁盘的持久数据磁盘。 更多信息请参阅“[系统概述](/enterprise/admin/guides/installation/system-overview)”。

{% if currentVersion ver_gt "enterprise-server@2.21" %}

如果您在 {% data variables.product.prodname_ghe_server %} 2.22 中启用 {% data variables.product.prodname_actions %} 的测试版，则需要配置外部 blob 存储。 更多信息请参阅“[启用 {% data variables.product.prodname_actions %} 和配置存储](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)”。

{% endif %}

您可以通过构建一个新实例或使用现有实例来调整实例的根磁盘大小。 更多信息请参阅“[增加存储容量](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)”。

#### CPU 和内存

{% data variables.product.prodname_ghe_server %} 需要更多的 CPU 和内存资源，取决于用户活动、自动化和集成的水平。

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**警告：** 我们建议用户配置 web 挂钩事件来通知外部系统有关 {% data variables.product.prodname_ghe_server %} 上的活动。 自动检查更改或 _轮询_将对实例的性能和可扩展性产生不利影响。 更多信息请参阅“[关于 web 挂钩](/github/extending-github/about-webhooks)”。

{% endwarning %}

您可以增加实例的 CPU 或内存资源。 更多信息请参阅“[增加 CPU 或内存资源](/enterprise/admin/installation/increasing-cpu-or-memory-resources)”。
