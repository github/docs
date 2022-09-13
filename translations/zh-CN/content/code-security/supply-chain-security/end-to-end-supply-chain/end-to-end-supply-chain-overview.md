---
title: 保护端到端供应链
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 介绍关于完整的端到端供应链安全性（包括个人帐户、代码和生成过程）的最佳做法指南。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060680'
---
## 什么是端到端供应链？

端到端软件供应链安全的核心是确保分发的代码没有被篡改。 以前，攻击者专注于针对你使用的依赖项，例如库和框架。 攻击者现在已将其重点扩大到包括针对用户帐户和生成流程，因此也必须防护这些系统。

有关 {% data variables.product.prodname_dotcom %} 中可帮助保护依赖项的功能的信息，请参阅“[关于供应链安全性](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”。

## 关于这些指南

本系列指南介绍如何考虑保护端到端供应链：个人帐户、代码和生成流程。 每个指南都介绍了该领域的风险，并引入了可以帮助解决该风险的 {% data variables.product.product_name %} 功能。 

每个人的需求都不同，因此每个指南都从影响最大的更改开始，然后再继续介绍应该考虑的其他改进。 可以随意跳过，并专注于可以带来最大收益的改进。 目标不是一次完成所有工作，而是随着时间的推移不断提高系统的安全性。

- [确保帐户安全的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)

- [保护供应链中的代码的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)

- [保护生成系统的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)

## 延伸阅读

- [保护任何软件供应链中的工件完整性](https://slsa.dev/)
- [Microsoft 供应链完整性模型](https://github.com/microsoft/scim)
- [软件供应链安全白皮书 - CNCF 安全技术咨询组](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
