---
title: 关于代码空间的计费
intro: '当 {% data variables.product.prodname_codespaces %} 公开发布时，将按存储和计算使用情况计费。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.about-billing-for-codespaces %}

只有在代码空间处于活动状态时，才产生计算费用。 使用代码空间时，代码空间即处于活动状态。 处于非活动状态 30 分钟后，代码空间将自动挂起。

计算使用按小时计费，其费率取决于代码空间的实例类型。 在测试期间， {% data variables.product.prodname_codespaces %} 提供单一的 Linux 实例类型。 在公开发布后，我们将提供三种 Linux 实例类型。

| 实例类型 (Linux)                | 每小时费率    |
| --------------------------- | -------- |
| 基础（2 内核，4GB RAM，32 GB SSD）  | 0.085 美元 |
| 标准（4 内核，8GB RAM，32 GB SSD）  | 0.169 美元 |
| 高级（8 内核，16GB RAM，32 GB SSD） | 0.339 美元 |

对于将来支持的其他实例类型和操作系统，计算定价可能会有所不同。

每个代码空间还会产生每月存储费用，直到您删除该代码空间。 所有实例类型的存储费用为 0.10 美元/GB-月。

我们将在公开发布时分享有关每个计划中计算和存储使用情况的更多信息，
