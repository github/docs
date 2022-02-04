---
title: 建议的警报阈值
intro: '您可以配置警报来提前通知系统资源问题，以免它们影响您的 {% data variables.product.prodname_ghe_server %} 设备的性能。'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: 建议的警报阈值
---

## 监视存储

建议您同时对根存储设备和用户存储设备进行监视，并为警报配置合适的值，在可用磁盘空间不足时提供足够长的响应时间。

| 严重程度   | 阈值               |
| ------ | ---------------- |
| **警告** | 已用磁盘空间超出总大小的 70% |
| **关键** | 已用磁盘空间超出总大小的 85% |

您可以根据分配的总存储空间、历史增长模式和预期响应时间调整这些值。 我们建议多分配一些存储资源，以便考虑增长情况并避免因分配额外存储空间而需要停机。

## 监视 CPU 和平均负载使用情况

虽然 CPU 利用率随资源密集型 Git 操作上下波动属于正常情况，但我们建议配置警报来监视异常增高的 CPU 利用率，因为 CPU 利用率长时间处于高水平可能说明实例配置不足。 建议监视 15 分钟系统平均负载，以获取接近或超过分配给虚拟机的 CPU 核心数的值。

| 严重程度   | 阈值                     |
| ------ | ---------------------- |
| **警告** | 十五分钟平均负载超出 1 倍的 CPU 核心 |
| **关键** | 十五分钟平均负载超出 2 倍的 CPU 核心 |

我们还建议监视虚拟化“盗取”时间，以确保在同一主机系统上运行的虚拟机不会用掉所有实例资源。

## 监视内存使用情况

分配给 {% data variables.product.product_location %} 的物理内存大小对整体性能和应用程序响应能力有着极大的影响。 系统设计为通过大量使用内核磁盘缓存来加快 Git 操作速度。 建议将正常 RSS 工作使用量设置在最高使用量时总可用 RAM 的 50% 之内。

| 严重程度   | 阈值                       |
| ------ | ------------------------ |
| **警告** | 持续 RSS 使用量超出总可用内存大小的 50% |
| **关键** | 持续 RSS 使用量超出总可用内存大小的 70% |

如果内存已耗尽，内核 OOM 终止程序将尝试终止占用 RAM 较多的应用程序进程以释放内存资源，这样可能导致服务中断。 建议为虚拟机分配的内存大小应大于正常操作过程所需的内存。
