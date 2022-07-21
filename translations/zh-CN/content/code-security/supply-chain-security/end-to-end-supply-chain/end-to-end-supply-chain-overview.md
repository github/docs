---
title: 保护您的端到端供应链
shortTitle: 概览
allowTitleToDifferFromFilename: true
intro: 介绍有关完整端到端供应链安全性（包括个人帐户、代码和构建流程）的最佳实践指南。
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
---

## 什么是端到端供应链？

端到端软件供应链安全的核心是确保您分发的代码未被篡改。 以前，攻击者专注于针对您使用的依赖项，例如库和框架。 攻击者现在已经扩大了他们的关注点，包括针对用户帐户和构建过程，因此这些系统也必须得到保护。

有关 {% data variables.product.prodname_dotcom %} 中可帮助您保护依赖关系的功能的信息，请参阅“[关于供应链安全](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”。

## 关于这些指南

本系列指南介绍了如何考虑保护端到端供应链：个人帐户、代码和构建流程。 每本指南都解释了该领域的风险，并介绍可帮助您解决该风险的 {% data variables.product.product_name %} 功能。

每个人的需求都是不同的，因此每本指南都从影响最大的变化开始，然后从那里继续进行您应该考虑的其他改进。 您应该自由跳过，注重于您认为会带来最大好处的改进。 目标不是一次完成所有操作，而是随着时间的推移不断提高系统的安全性。

- “[保护帐户的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[保护供应链中代码的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)”

- “[保护构建系统的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)”

## 延伸阅读

- [保护任何软件供应链中的构件完整性](https://slsa.dev/)
- [Microsoft 供应链诚信模型](https://github.com/microsoft/scim)
- [软件供应链安全白皮书 - CNCF 安全技术咨询小组](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
