---
title: 保护构建系统的最佳做法
shortTitle: 保护构建
allowTitleToDifferFromFilename: true
intro: 有关如何保护供应链末端（用于构建和分发构件的系统）的指南。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
---

## 关于本指南

本指南介绍为提高构建系统的安全性而可以进行的影响最大的更改。 每个部分都概述了为提高安全性而可以对流程进行的更改。 影响最大的更改列在最前面。

## 风险是什么？

对软件供应链的一些攻击直接针对构建系统。 如果攻击者可以修改构建过程，他们就可以利用您的系统，而无需攻击个人帐户或代码。 请务必确保不要忘记保护构建系统以及个人帐户和代码。

## 保护构建系统

构建系统应具有以下几种安全功能：

1. 构建步骤应清晰且可重复。

2. 您应该确切地知道在构建过程中运行的内容。

3. 每个构建都应在新的环境中启动，这样受损的构建不会持续影响将来的构建。

{% data variables.product.prodname_actions %} 可以帮助您满足这些功能。 构建说明与代码一起存储在存储库中。 您可以选择在哪个环境中运行构建，包括 Windows、Mac、Linux 或您自己托管的运行器。 每个构建都从一个新的虚拟环境开始，这使得攻击很难在构建环境中持续存在。

除了安全优势之外， {% data variables.product.prodname_actions %} 还允许您手动、定期或在存储库中的 git 事件上触发构建，以实现频繁、快速的构建。

{% data variables.product.prodname_actions %} 是一个很大的话题，但良好的开始是“[了解 GitHub Actions](/actions/learn-github-actions/understanding-github-actions)”以及“[选择 GitHub 托管的运行器](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)”和“[触发工作流程](/actions/using-workflows/triggering-a-workflow)”。

## 对构建签名

在构建过程安全之后，你希望防止有人篡改构建过程的最终结果。 执行此操作的好方法是对内部版本签名。 公开分发软件时，通常使用公共/私有加密密钥对来完成此操作。 使用私钥对构建签名，并发布公钥，以便软件用户可以在使用构建之前验证上面的签名。 如果修改了构建的字节，则不会验证签名。

如何对构建签名取决于您编写的代码类型以及用户是谁。 通常很难知道如何安全地存储私钥。 此处的一个基本选项是使用 {% data variables.product.prodname_actions %} 加密机密，但您需要小心地限制谁有权访问这些 {% data variables.product.prodname_actions %} 工作流程。 {% ifversion fpt or ghec %}如果您的私钥存储在可通过公共互联网访问的另一个系统中（如 Microsoft Azure 或 HashiCorp Vault），则更高级的选择是使用 OpenID Connect 进行身份验证，因此您不必在系统之间共享机密。{% endif %} 如果您的私钥只能从专用网络访问，则另一种选择是对 {% data variables.product.prodname_actions %} 使用自托管运行器。

更多信息请参阅“[加密机密](/actions/security-guides/encrypted-secrets){% ifversion fpt or ghec %}”、“[关于使用 OpenID Connect 进行安全强化](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”、{% endif %} 和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

## 强化 {% data variables.product.prodname_actions %} 的安全性

您可以采取许多其他步骤来进一步保护 {% data variables.product.prodname_actions %}。 特别是，在评估第三方工作流程时要小心，并考虑使用 `CODEOWNERS` 来限制谁可以对您的工作流进行更改。

更多信息请参阅“[GitHub 操作的安全性强化](/actions/security-guides/security-hardening-for-github-actions)”，特别是“[使用第三方操作](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)”和“[使用 `CODEOWNERS` 监控更改](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)”。

## 后续步骤

- “[保护您的端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- “[保护帐户的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[保护供应链中代码的最佳实践](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)”
