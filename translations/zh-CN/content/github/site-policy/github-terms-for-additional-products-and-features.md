---
title: GitHub 其他产品和功能条款
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

版本生效日期：2021 年 5 月 26 日

当您使用 GitHub 时，您可以访问大量额外的产品和功能（“附加产品和功能”）。 由于许多附加产品和特性提供不同的功能，该产品或特性的具体条款可能适用于您与我们的主要协议 - GitHub 服务条款、GitHub 企业服务条款、GitHub 通用条款或 Microsoft 批量许可协议（每个条款均称为“协议”）。 下面，我们列出了这些产品和特性，以及适用于您使用它们的相应附加条款。

通过使用附加产品和特性，您也同意下面列出的适用的 GitHub 条款。 违反 GitHub 关于附加产品和特性的条款便是违反协议。 在本文未定义的任何大写术语采用“协议”中的含义。

**对于企业用户**
- **GitHub Enterprise Cloud** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、Codespaces、Dependabot Preview、Learning Lab、Octoshift、Packages 和 Pages。

- **GitHub Enterprise Server** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、Connect、Dependabot Preview、Learning Lab、Octoshift, Packages、Pages 和 SQL Server Images。

- **GitHub AE** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、{% if currentVersion == "github-ae@next" %}Connect、{% endif %}Dependabot Preview、Octoshift、Packages 和 Pages。

### 操作
GitHub Actions 使您能够直接在您的 GitHub 仓库中创建自定义软件开发生命周期工作流程。 Actions 按使用情况计费。 [Actions 文档](/actions)包含详细信息，包括计算和存储量（取决于您的帐户计划）以及如何监控您的 Actions 分钟使用和设置使用限制。

对 Actions 和任何 Action 服务元素的使用，不得违反协议、[GitHub 可接受使用政策](/github/site-policy/github-acceptable-use-policies)或 [Actions 文档](/actions/reference/usage-limits-billing-and-administration)规定的 GitHub Actions 服务限制。 此外，Actions 不得用于：
- 密码破解;
- 使用我们的服务器破坏、非授权访问或尝试非授权访问任何服务、设备、数据、帐户或网络（[GitHub 漏洞赏金计划](https://bounty.github.com)授权的活动除外）；
- 出于商业目的，提供兜售 Actions 或任何 Actions 元素的独立或集成应用程序或服务；
- 任何给我们的服务器带来负担的活动，如果这种负担与提供给用户的收益不成比例（例如，不要将 Action 用作内容交付网络或作为无服务器应用程序的一部分，但收益低负担也低的 Action 可能没问题）；或
- 与使用 GitHub Actions 的仓库相关的软件项目创建、测试、部署或发布无关的任何其他活动。

为防止违反这些限制和滥用 GitHub Actions，GitHub 可能会监视您对 GitHub Actions 的使用。 滥用 GitHub Actions 可能导致作业终止、使用 GitHub Actions 的权限受到限制，或者禁用以违反这些条款的方式运行 Actions 的仓库。


### Advanced Security
GitHub 根据高级安全许可证向客户提供额外的安全功能。 这些功能包括代码扫描、秘密扫描和依赖项审查。 [Advanced Security 文档](/github/getting-started-with-github/about-github-advanced-security)提供更多详细信息。

Advanced Security 按“唯一提交者”许可。 “唯一提交者”是 GitHub Enterprise、GitHub Enterprise Cloud、GitHub Enterprise Server 或 GitHub AE 的许可用户，他们在过去 90 天内向激活了 GitHub Advanced Security 功能的任意仓库提交过代码。 您必须为每个唯一提交者获取 GitHub Advanced Security 用户许可。 您只能在由您开发或为您开发的代码库上使用 GitHub Advanced Security。 对于 GitHub Enterprise Cloud 用户，一些高级安全功能也需要使用 GitHub Actions。

### Advisory Database
GitHub 咨询数据库允许您浏览或搜索影响 GitHub 上开源项目的漏洞。

_向我们授予许可_

我们需要适当的法律权利，才能将您对 GitHub Advisory Database 的贡献提交到公共域数据集，例如[国家漏洞数据库](https://nvd.nist.gov/)，并在开放的条款下许可 GitHub Advisory Database，以供安全研究人员、开源社区、行业和公众使用。 您需要同意根据[知识共享零许可](https://creativecommons.org/publicdomain/zero/1.0/)原则发布您对 GitHub Advisory Database 的贡献。

_GitHub Advisory Database 的许可_

GitHub Advisory Database 的许可采用[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)原则。 有关署名条款，请参阅 <https://github.com/advisories> 上的 GitHub Advisory Database，或者所使用的单独 GitHub Advisory Database 记录（以 <https://github.com/advisories> 为前缀）。

### Connect
使用 GitHub Connect，您可以在 GitHub Enterprise Server {% if currentVersion == "github-ae@next" %}或 GitHub AE {% endif %}实例与您的GitHub Enterprise Cloud 组织或 GitHub.com 上的企业帐户之间分享某些功能和数据。 要启用 GitHub Connect，您必须在 GitHub Enterprise Cloud 或 GitHub.com 上至少有一 (1) 个帐户，以及一 (1) 个许可的 GitHub Enterprise Server{% if currentVersion == "github-ae@next" %} 或 GitHub AE{% endif %} 实例。 您通过 Connect 使用 GitHub Enterprise Cloud 或 GitHub.com 是由您许可 GitHub Enterprise Cloud 或 GitHub.com的条款管理的。 个人数据的使用受 [GitHub 隐私声明](/github/site-policy/github-privacy-statement)管制。

### Dependabot Preview
您可以使用 Dependabot 来确保您使用的包更新到最新版本。 使用 Dependabot Preview 必须遵守单独的[服务条款](https://dependabot.com/terms)和[隐私政策](https://dependabot.com/privacy)。

### Learning Lab
GitHub Learning Lab 提供已编入GitHub 的免费交互式课程，并提供即时自动反馈和帮助。

*课程材料。*GitHub 拥有其提供的任何课程材料，并授予您全球、非独占、有限期、不可转让、免版税的许可，允许您出于与 Learning Lab 使用相关的内部业务目的而复制、维护、使用和运行这些材料。

开源许可证条款可能适用于课程材料中提供的源代码部分。

您创建的课程材料归您所有，但是您授予 GitHub 全球、非独占、永久、不可转让、免版税的许可，允许 GitHub 复制、维护、使用、托管以及在服务上运行这些课程材料。

您对 GitHub 课程材料的使用以及对自己课程材料的创建和存储并不构成对任一方各自知识产权的共同所有权。

个人数据的使用受 [GitHub 隐私声明](/github/site-policy/github-privacy-statement)管制。

### npm
npm 是一种软件包托管服务，允许您私下或公开托管软件包，并将包用作项目中的依赖项。 npm 是 JavaScript 生态系统的记录注册表。 npm 公共注册表可以免费使用，但客户如果想要发布私有包或使用团队管理私有包，则需收取费用。 [npm 文档](https://docs.npmjs.com/) 包含帐户类型限制以及如何管理[私有包](https://docs.npmjs.com/about-private-packages)和[组织](https://docs.npmjs.com/organizations)的详细信息。 [开放源码条款](https://www.npmjs.com/policies/open-source-terms)概述了可接受的 npm 注册表的使用。 npm [solo](https://www.npmjs.com/policies/solo-plan) 和 [org](https://www.npmjs.com/policies/orgs-plan) 计划都有补充条款。 npm [使用条款](https://www.npmjs.com/policies/terms) 适用于您的 npm 使用。

### Octoshift
Octoshift 是一个从其他来源导出数据到 GitHub 平台的框架。 Octoshift“按原样”提供。

### 包
GitHub Packages 是一种软件包托管服务，允许您私下或公开托管软件包，并将包用作项目中的依赖项。 GitHub Packages 按用量计费。 [Packages 文档](/packages/learn-github-packages/introduction-to-github-packages)包含详细信息，包括带宽和存储量（取决于您的帐户计划）以及如何监控您的 Packages 使用和设置使用限制。 Packages 带宽使用受 [GitHub 可接受使用政策](/github/site-policy/github-acceptable-use-policies)限制。

### 页面

每个帐户都可以访问 [GitHub Pages 静态托管服务](/github/working-with-github-pages/about-github-pages)。 GitHub Pages 旨在托管静态网页，但主要用作个人和组织项目的展示。

GitHub Pages 并非旨在用于或允许用作免费的 Web 托管服务来运行您的在线业务、电子商务站点或主要针对促进商业交易或提供商业软件即服务 (SaaS) 的任何其他网站。 页面上允许一些货币化工作，如捐款按钮和筹款链接。

#### a. 带宽和使用限制
GitHub Pages 受某些特定带宽和使用限制的约束，可能不适用于某些高带宽用途。 请参阅我们的 [GitHub Pages 指南](/github/working-with-github-pages/about-github-pages)了解更多信息。

#### b. 禁止使用
GitHub Pages 的禁止用途包括
- 非法或者我们的[服务条款](/github/site-policy/github-terms-of-service)、[可接受使用政策](/github/site-policy/github-acceptable-use-policies)或[社区指导方针](/github/site-policy/github-community-guidelines)禁止的内容或活动
- 暴力或有威胁的内容或活动
- 过多的自动批量活动（例如，垃圾邮件）
- 危害 GitHub 用户或 GitHub 服务的活动
- 快速致富计划
- 性淫秽内容
- 歪曲您的身份或站点目的的内容

如果您对您的使用或预期使用是否属于这些类别有疑问，请联系 [GitHub 支持](https://support.github.com/contact)或 [GitHub 高级支持](https://premium.githubsupport.com/)。 GitHub 保留随时收回任何 GitHub 子域而不承担任何责任的权利。

### 赞助计划

GitHub Sponsors 允许开发者社区直接在 GitHub 上为他们设计、构建和维护所需开源项目的人员及组织提供经济支持。 要成为被赞助的开发者，必须同意 [GitHub 赞助计划附加条款](/github/site-policy/github-sponsors-additional-terms)。

### SQL Server 映像

您可以下载用于 Linux 文件的 Microsoft SQL Server 标准版容器映像（“SQL Server 映像”）。 当您使用本软件的权利结束时，您必须卸载 SQL Server 映像。 Microsoft Corporation 可随时禁用 SQL Server 映像。
