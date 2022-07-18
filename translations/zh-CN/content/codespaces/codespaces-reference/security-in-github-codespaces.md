---
title: GitHub Codespaces 中的安全性
intro: '{% data variables.product.prodname_github_codespaces %} 安全体系结构概述，包括可帮助您维护安全性并最大限度地降低攻击风险的指导原则。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
type: reference
shortTitle: 代码空间中的安全性
redirect_from:
  - /codespaces/codespaces-reference/security-in-codespaces
---

## 代码空间安全性概述

默认情况下，{% data variables.product.prodname_github_codespaces %} 设计为加强安全性。 因此，您需要确保您的软件开发实践不会降低代码空间的安全状况。

本指南介绍了 Codespaces 保持开发环境安全的方式，并提供了一些有助于在工作时维护安全性的良好做法。 与任何开发工具一样，请记住，您只应在您了解和信任的存储库中打开和工作。

### 环境隔离

{% data variables.product.prodname_github_codespaces %} 旨在使代码空间彼此独立，每个代码空间都使用自己的虚拟机和网络。

#### 隔离的虚拟机

每个代码空间都托管在其自己的新建虚拟机 (VM) 上。 两个代码空间永远不会共存于同一 VM 上。

每次重新启动代码空间时，都会将其部署到具有最新可用安全更新的新 VM。

#### 隔离的网络

每个代码空间都有自己隔离的虚拟网络。 我们使用防火墙来阻止来自互联网的传入连接，并防止代码空间在内部网络上相互通信。 默认情况下，允许代码空间与互联网建立出站连接。

### 身份验证

您可以使用 web 浏览器或从 {% data variables.product.prodname_vscode %} 连接至代码空间。 如果从 {% data variables.product.prodname_vscode_shortname %} 连接，系统将提示您向 {% data variables.product.product_name %} 验证。

每次创建或重新启动代码空间时，都会为其分配一个具有自动到期期的新 {% data variables.product.company_short %} 令牌。 此时间段允许您在代码空间中工作，而无需在典型的工作日内重新进行身份验证，但降低了在停止使用代码空间时使连接保持打开状态的可能性。

令牌的作用域将根据您对创建代码空间的存储库的访问权限而有所不同：

- **如果您具有对存储库的写入访问权限**：令牌的范围将限定为对存储库的读/写访问权限。
- **如果您只对存储库具有读取访问权限**：令牌将仅允许从源存储库克隆代码。 如果尝试推送到只有读取访问权限的私有存储库， {% data variables.product.prodname_codespaces %} 将提示您创建存储库的个人分支。 然后，令牌将被更新为对新的个人复刻具有读/写访问权限。
- **如果已启用代码空间以访问其他存储库**：当代码空间被授予[对其他存储库访问权限](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)时，从该存储库创建的任何代码空间都将具有范围为源存储库的读/写令牌。 此外，令牌还将获得对用户或组织指示的其他存储库的读取访问权限。

组织的管理员指定应将哪些存储库视为受信任。 管理员可以[选择信任](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)全部或部分组织的存储库或不信任任何储存库。 代码空间访问资源的权限不能高于其创建者，即使组织管理员已向所有用户和所有存储库授予访问权限也是如此。

### 代码空间连接

您可以使用 {% data variables.product.prodname_github_codespaces %} 服务提供的 TLS 加密隧道连接到代码空间。 只有代码空间的创建者才能连接到代码空间。 使用 {% data variables.product.product_name %} 对连接进行验证。

如果需要允许对代码空间上运行的服务进行外部访问，可以为专用或公共访问启用端口转发。

### 端口转发

如果需要连接到在代码空间内运行的服务（如开发 Web 服务器），则可以配置端口转发以使该服务在互联网上可用。

组织所有者可以限制公开或在组织内提供转发端口的能力。 更多信息请参阅“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”。

**私密转发端口**：可在互联网上访问，但只有代码空间创建者在向 {% data variables.product.product_name %} 验证后才可访问它们。

**组织内公开转发的端口**：在通过身份验证后，可在互联网上访问，但只能由与代码空间相同的组织的成员访问 {% data variables.product.product_name %}。

**公开转发的端口**：可在互联网上访问，互联网上的任何人都可以访问它们。 访问公共转发的端口不需要身份验证。

默认情况下，所有转发的端口都是私密的，这意味着您需要先进行身份验证，然后才能访问该端口。 对代码空间的私密转发端口的访问由到期时间为 3 小时的身份验证 Cookie 控制。 当 Cookie 过期时，您将需要重新进行身份验证。

当您删除并重新添加端口时，或者重新启动代码空间时，公共转发端口将自动恢复为私密端口。

您可以使用“端口”面板为公共或私密访问配置端口，并且可以在不再需要端口转发时停止端口转发。 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

## 代码空间的良好安全实践

默认情况下，代码空间设计为加强安全性。 为了帮助保持此状态，我们建议您在开发过程中遵循良好的安全实践：

- 与任何开发工具一样，请记住，您只应在您了解和信任的存储库中打开和工作。
- 在将新的依赖项添加到代码空间之前，请检查它们是否维护良好，以及它们是否发布更新以修复其代码中发现的任何安全漏洞。

### 使用机密访问敏感信息

如果要在代码空间中使用敏感信息（如访问令牌），请始终使用加密的机密。 您可以在代码空间中以环境变量的形式访问您的机密，包括从终端访问。 例如，您可以在代码空间中启动终端，并使用 `echo $SECRET_NAME` 查看机密的值。

每当恢复或创建代码空间时，机密值都会复制到环境变量中，并且在更改代码空间时也会同步。

如果您没有对代码空间的存储库的写入权限，则不会将密钥复制到环境中。

有关机密的详细信息，请参阅：
- "[管理代码空间的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
- "[管理用于 {% data variables.product.prodname_github_codespaces %} 的仓库和组织的加密密钥](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"

### 使用其他人的贡献和存储库

从分支的 PR 分支创建代码空间时，代码空间中的令牌将根据存储库是公共的还是私有的而有所不同：
- 对于私有存储库，代码空间被授予对复刻和父级的访问权限。
- 对于公共存储库，代码空间将只能访问父级上的复刻和打开的 PR。

在这些情况下，我们还通过不将任何 [代码空间机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)注入环境来进一步保护您。

### 其他良好做法

使用 {% data variables.product.prodname_codespaces %} 时，还应注意一些其他良好做法和风险。

#### 了解存储库的 devcontainer.json 文件

创建代码空间时，如果找到存储库的 `devcontainer.json` 文件，则会对其进行分析并用于配置代码空间。 `devcontainer.json` 文件可以包含强大的功能，例如安装第三方扩展和运行 `postCreateCommand` 中提供的任意代码。

更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

#### 通过功能授予访问权限

某些开发功能可能会给您的环境增加风险。 例如，提交签名、注入环境变量的机密、经过身份验证的注册表访问和包访问都可能带来潜在的安全问题。 我们建议您仅向需要访问权限的人员授予访问权限，并采用尽可能严格的策略。

#### 使用扩展

您安装的任何其他 {% data variables.product.prodname_vscode_shortname %} 扩展都可能带来更多风险。 为了帮助降低此风险，请确保仅安装受信任的扩展，并使它们始终保持最新。
