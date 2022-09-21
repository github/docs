---
title: 推荐用于运行 CodeQL 的硬件资源
shortTitle: Hardware resources for CodeQL
intro: '根据代码库的大小，推荐在自托管计算机上运行 {% data variables.product.prodname_codeql %} 分析的规范（RAM、CPU 内核和磁盘）。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099321'
---
可以在 {% data variables.product.prodname_actions %} 或外部 CI 系统上设置 {% data variables.product.prodname_codeql %}。 {% data variables.product.prodname_codeql %} 与 {% data variables.product.prodname_actions %} 上 {% data variables.product.prodname_dotcom %} 托管的运行器完全兼容。

如果您使用的是外部 CI 系统，或者 {% data variables.product.prodname_actions %} 上的自托管运行器用于私有存储库，则您负责配置自己的硬件。 运行 {% data variables.product.prodname_codeql %} 的最佳硬件配置可能因代码库的大小和复杂性、所使用的编程语言和生成系统以及 CI 工作流程设置而异。

下表根据基本代码的大小，提供了推荐用于运行 {% data variables.product.prodname_codeql %} 分析的硬件规格。 可将这些作为确定所选硬件或虚拟机的起点。 具有更多资源的计算机可能会提高分析性能，但维护成本也可能更高。

| 代码库大小 | RAM | CPU |
|--------|--------|--------|
| 小（<100 K 行代码） | 8 GB 或更高 | 2 个核心 |
| 中（100 K 到 1 M 行代码） | 16 GB 或更高 | 4 或 8 核 |
| 大（>1 M 行代码） | 64 GB 或更高 | 8 核 |

对于所有代码库大小，我们建议使用具有 14 GB 或更多磁盘空间的 SSD。 必须有足够的磁盘空间来检出和构建代码，以及用于 {% data variables.product.prodname_codeql %} 产生的数据的额外空间。
