---
title: 关于集群节点
intro: '*节点* 是在集群里运行的 {% data variables.product.prodname_ghe_server %} 实例。 每个节点都运行一组服务，这些服务将提供给集群，最终提供给用户。'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### 最低硬件建议
每个节点都必须具有根卷以及单独的数据卷。 这些是最低限度的建议。 根据您的使用情况（例如用户活动和选定的集成），可能需要更多资源。

|                                               服务                                               | 需要的最小内存 | 需要的最小数据卷可用空间 |
|:----------------------------------------------------------------------------------------------:|:-------:|:------------:|
|               `job-server`,<br/>`memcache-server`,<br/>`web-server`                |  14 GB  |     1 GB     |
|              `consul-server`,<br/>`mysql-server`,<br/>`redis-server`               |  14 GB  |    10 GB     |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` |  7 GB   |    10 GB     |
|                                     `elasticsearch-server`                                     |  14 GB  |    10 GB     |

### 集群需要的服务
为获得足够的冗余，请使用下面列出的最少节点来运行每个服务。

{% tip %}

**注：**组织对可扩展性的需求取决于多种因素，包括仓库的大小和数量、用户数量以及总体利用率。

{% endtip %}

|                                              服务                                               | 需要的最少节点 |
|:---------------------------------------------------------------------------------------------:|:-------:|
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` |    2    |
|                           `mysql-server`,<br/>`redis-server`                            |    2    |
|                                        `consul-server`                                        |    3    |
|              `git-server`,<br/>`pages-server`,<br/>`storage-server`               |    3    |
|                                    `elasticsearch-server`                                     |    3    |

### 集群设计建议

集群允许组成 {% data variables.product.prodname_ghe_server %} 的服务彼此独立地进行扩展。 这种灵活性可用于设计和实现适合具有不同可扩展性要求的组织的集群。 例如，某些组织可能需要更多的存储吞吐量来进行大量或频繁的获取，但 Web 服务器的利用率可能相对较低。 其他组织可能具有较高的性能和较少的存储资源，但需要许多节点来运行 `pages-server` 或 `elasticsearch-server`。 可以实现许多不同的组合。 与您的客户代表合作，确定满足您特定需求的最佳集群配置。

- 在独立硬件上扩展冗余节点。 如果共享 CPU、内存或存储设备，则会降低性能并引发单点故障。 此外，共享网络组件还会降低吞吐量并增加在发生中断时丢失连接的风险。
- 使用快速存储。 通常经过优化存储区域网络 (SAN)，可实现最大的空间利用率、可用性和容错能力，而不是绝对的吞吐量。 {% data variables.product.prodname_ghe_server %} 集群提供冗余和可用性，可在最快的可用存储上发挥最佳性能。 建议使用本地 SSD 存储。
- 建立对您的组织有意义的节点层。 配置示例：
  - 具有两个节点和以下服务的前端层：
    - `web-server`
    - `jobs-server`
    - `memcache-server`
  - 具有三个节点和以下服务的数据库层：
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - 具有三个节点和以下服务的搜索层：
    - `elasticsearch-server`
  - 具有三个节点和以下服务的存储层：
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

#### 示例集群图
{% note %}

**注：这只是一个示例。**您组织的最佳集群设计将取决于您的独特需求。 与您的专业代表或 {% data variables.contact.contact_enterprise_sales %} 探讨，以便我们能帮您确定最佳集群配置。

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="示例集群" style="width: 800px;border:0" />
