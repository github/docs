---
title: 保护生成系统的最佳做法
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: 关于如何保护供应链末端（用于构建和分发工件的系统）的指南。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518854'
---
## 关于本指南

本指南介绍为提高生成系统的安全性而做出的影响最大的更改。 每个部分都概述了可以对流程进行的更改，以提高安全性。 影响最大的更改列在前面。

## 风险是什么？

对软件供应链的一些攻击直接面向生成系统。 如果攻击者可以修改生成过程，则他们可以利用你的系统，而无需破坏个人帐户或代码。 请务必确保不要忘记保护生成系统以及个人帐户和代码。

## 保护生成系统

生成系统应具有以下几种安全功能：

1. 生成步骤应清晰且可重复。

2. 应确切地知道在生成过程中运行的内容。

3. 每个生成都应在新的环境中启动，因此泄露的生成不会持久影响将来的生成。

{% data variables.product.prodname_actions %} 可以帮助你满足这些功能。 生成说明与代码一起存储在存储库中。 选择生成在哪些环境中运行，包括 Windows、Mac、Linux 或自己托管的运行程序。 每次生成都从一个新的运行器映像开始，这使得攻击很难在生成环境中持续存在。

除了安全优势之外，{% data variables.product.prodname_actions %} 还允许你手动、定期或针对存储库中的 git 事件触发生成，以实现频繁快速的生成。

{% data variables.product.prodname_actions %} 是一个很大的主题，但一个很好的起点是“[了解 GitHub Actions](/actions/learn-github-actions/understanding-github-actions)”，以及“[选择 GitHub 托管的运行器](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)”和“[触发工作流](/actions/using-workflows/triggering-a-workflow)”。

## 对生成进行签名

生成过程安全后，需要防止有人篡改生成过程的最终结果。 一种很好的方法是对生成进行签名。 公开分发软件时，这通常是使用加密公钥/私钥对完成的。 使用私钥对生成进行签名，并发布公钥，以便软件用户在使用生成之前验证其签名。 如果修改生成的字节，则不会验证签名。

具体如何签名取决于所编写的代码类型以及用户是谁。 通常很难知道如何安全地存储私钥。 此处的一个基本选项是使用 {% data variables.product.prodname_actions %} 加密的机密，但需要谨慎限制谁有权访问这些 {% data variables.product.prodname_actions %} 工作流。 {% ifversion fpt or ghec %}如果私钥存储在另一个可以通过公共 Internet 访问的系统中（例如 Microsoft Azure 或 HashiCorp Vault），则更高级的选项是使用 OpenID Connect 进行身份验证，因此无需跨系统共享机密。{% endif %} 如果私钥只能通过专用网络访问，另一个选项是为 {% data variables.product.prodname_actions %} 使用自托管运行程序。

有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets)”{% ifversion fpt or ghec %}、“[关于使用 OpenID Connect 进行安全强化](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”{% endif %}和“[关于自托管运行程序](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

## 强化 {% data variables.product.prodname_actions %} 的安全性

可以采取许多进一步的步骤来确保 {% data variables.product.prodname_actions %} 的安全。 具体而言，请谨慎评估第三方工作流，并考虑使用 `CODEOWNERS` 限制谁可以对工作流进行更改。

有关详细信息，请参阅“[GitHub Actions 的安全强化](/actions/security-guides/security-hardening-for-github-actions)”，特别是“[使用第三方操作](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)”和“[使用 `CODEOWNERS` 监视更改](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)”。

## 后续步骤

- [保护端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)

- [确保帐户安全的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)

- [保护供应链中的代码的最佳做法](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)
