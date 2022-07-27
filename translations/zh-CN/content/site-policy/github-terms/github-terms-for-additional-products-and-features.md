---
title: GitHub 其他产品和功能条款
redirect_from:
  - /github/site-policy/github-additional-product-terms
  - /github/site-policy/github-terms-for-additional-products-and-features
  - /github/site-policy-deprecated/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-com-connection-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /github/site-policy/github-connect-addendum-to-the-github-enterprise-license-agreement
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

版本生效日期：2021 年 8 月 10 日

当您使用 GitHub 时，您可以访问大量额外的产品和功能（“附加产品和功能”）。 由于许多附加产品和特性提供不同的功能，该产品或特性的具体条款可能适用于您与我们的主要协议 - GitHub 服务条款、GitHub 企业服务条款、GitHub 通用条款或 Microsoft 批量许可协议（每个条款均称为“协议”）。 下面，我们列出了这些产品和特性，以及适用于您使用它们的相应附加条款。

通过使用附加产品和特性，您也同意下面列出的适用的 GitHub 条款。 违反 GitHub 关于附加产品和特性的条款便是违反协议。 在本文未定义的任何大写术语采用“协议”中的含义。

**对于企业用户**
- **GitHub Enterprise Cloud** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、Codespaces、Dependabot Preview、GitHub Enterprise Importer、Learning Lab、Packages 和 Pages。

- **GitHub Enterprise Server** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、Connect、Dependabot Preview、GitHub Enterprise Importer、Learning Lab、Packages、Pages 和 SQL Server Images。

- **GitHub AE** 用户可以访问以下附加产品和特性：Actions、Advanced Security、Advisory Database、Connect、Dependabot Preview、GitHub Enterprise Importer、Packages 和 Pages。

## Actions
GitHub Actions 使您能够直接在您的 GitHub 仓库中创建自定义软件开发生命周期工作流程。 Actions 按使用情况计费。 [Actions 文档](/actions)包含详细信息，包括计算和存储量（取决于您的帐户计划）以及如何监控您的 Actions 分钟使用和设置使用限制。

对 Actions 和任何 Action 产品或服务元素的使用，不得违反协议、[GitHub 可接受使用政策](/github/site-policy/github-acceptable-use-policies)或 [Actions 文档](/actions/reference/usage-limits-billing-and-administration)规定的 GitHub Actions 服务限制。 此外，无论操作是否使用自托管运行器，操作都不应用于：
- 密码破解;
- 破坏、获取或试图未经授权而访问任何服务、设备、数据、帐户或网络（ [GitHub Bug 赏金计划](https://bounty.github.com)授权的除外）;
- 为商业目的提供独立或集成的应用程序或服务，提供 Actions 产品或服务，或者 Actions 产品或服务的任何元素；
- 任何给我们的服务器带来负担的活动，如果这种负担与提供给用户的收益不成比例（例如，不要将 Action 用作内容交付网络或作为无服务器应用程序的一部分，但收益低负担也低的 Action 可能没问题）；或
- 如果使用 GitHub 托管的运行器，与使用 GitHub Actions 的仓库相关的软件项目创建、测试、部署或发布无关的任何其他活动。

为防止违反这些限制和滥用 GitHub Actions，GitHub 可能会监视您对 GitHub Actions 的使用。 滥用 GitHub 操作可能会导致作业终止、限制您使用 GitHub 操作的能力、禁用为以违反这些条款的方式运行操作而创建的存储库，或者在某些情况下，暂停或终止您的 GitHub 帐户。

*用于开发和测试*

您只能访问和使用 GitHub Actions 来开发和测试您的应用程序。 任何时候都只能有一个许可用户访问 Actions 提供的虚拟机。

*授权的开发者*

您指定 GitHub 作为您的授权开发者，负责 Actions 中包含的 Apple 软件。 GitHub 负责遵守 Actions 中包含的任何此类软件的条款，并对作为 Actions 一部分访问的任何 Apple 机密信息保密。

*第三方存储库服务访问*

如果您授予 GitHub 访问您的第三方存储库服务帐户的权限，则表示您授权 GitHub 扫描这些帐户，包括您的公共和私有存储库的内容，以便提供 GitHub Actions。

*GitHub Actions 上的自托管运行器*

如果您使用自托管运行器，则可以关闭自动更新，但 GitHub 保留覆盖您选择的关键安全更新的权利。

## Advanced Security
GitHub 根据高级安全许可证向客户提供额外的安全功能。 这些功能包括代码扫描、秘密扫描和依赖项审查。 [Advanced Security 文档](/github/getting-started-with-github/about-github-advanced-security)提供更多详细信息。

Advanced Security 按“唯一提交者”许可。 “唯一提交者”是 GitHub Enterprise、GitHub Enterprise Cloud、GitHub Enterprise Server 或 GitHub AE 的许可用户，他们在过去 90 天内向激活了 GitHub Advanced Security 功能的任意仓库提交过。 您必须为每个唯一提交者获取 GitHub Advanced Security 用户许可。 您只能在由您开发或为您开发的代码库上使用 GitHub Advanced Security。 对于 GitHub Enterprise Cloud 用户，一些高级安全功能也需要使用 GitHub Actions。

## Advisory Database
GitHub 咨询数据库允许您浏览或搜索影响 GitHub 上开源项目的漏洞。

_向我们授予许可_

我们需要适当的法律权利，才能将您对 GitHub Advisory Database 的贡献提交到公共域数据集，例如[国家漏洞数据库](https://nvd.nist.gov/)，并在开放的条款下许可 GitHub Advisory Database，以供安全研究人员、开源社区、行业和公众使用。 您需要同意根据[知识共享零许可](https://creativecommons.org/publicdomain/zero/1.0/)原则发布您对 GitHub Advisory Database 的贡献。

_GitHub Advisory Database 的许可_

GitHub Advisory Database 的许可采用[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)原则。 有关署名条款，请参阅 <https://github.com/advisories> 上的 GitHub Advisory Database，或者所使用的单独 GitHub Advisory Database 记录（以 <https://github.com/advisories> 为前缀）。

## Codespaces
_注意：github.dev 服务通过在存储库上按下 `.` 或直接浏览到 github.dev 可用，受 [GitHub 试用版服务条款](/github/site-policy/github-terms-of-service#j-beta-previews)约束。_

GitHub Codespaces 允许您直接从浏览器中使用 GitHub 仓库中的代码开发代码。 不得违反《协议》或可接受使用政策使用 Codespaces 和 Codespaces 服务的任何元素。 此外，Codespaces 不得用于：
- 密码破解;
- 使用我们的服务器破坏、非授权访问或尝试非授权访问任何服务、设备、数据、帐户或网络（GitHub 漏洞赏金计划授权的活动除外）；
- 出于商业目的，提供兜售 Codespaces 或任何 Codespaces 元素的独立或集成应用程序或服务；
- 任何给我们的服务器带来负担的活动，如果这些负担与提供给用户的好处不成比例（例如，不要将Codespaces 用作内容交付网络，作为无服务器应用程序的一部分，或托管任何类型的面向生产的应用程序）; 或
- 与启动 GitHub Codespaces 的存储库关联的软件项目的开发或测试无关的任何其他活动。

为防止违反这些限制和滥用 GitHub Codespaces，GitHub 可能会监视您对 GitHub Codespaces 的使用。 滥用 GitHub Codespaces 可能导致对 Codespaces 的访问终止、使用 GitHub Codespaces 的权限受到限制，或者禁用以违反这些条款的方式运行 Codespaces 的仓库。

Codespaces 允许您从 Microsoft Visual Studio Marketplace 加载扩展（“Marketplace Extensions”），以便在开发环境中使用，例如，处理编写代码时所使用的编程语言。 Marketplace Extensions 根据其自己的单独使用条款（如 Visual Studio Marketplace 中所述）以及位于 https://aka.ms/vsmarketplace-ToU 中的使用条款进行许可。 GitHub 对 Marketplace Extensions 不作任何形式的保证，也不负责被授予访问您的内容权限的 Marketplace Extensions 的第三方作者之行为。 Codespaces 还允许您通过 devcontainer 功能将软件加载到您的环境中。 此类软件根据其随附的单独使用条款提供。 您使用任何第三方应用程序均应自担风险。

Codespaces 的一般版本目前不适用于美国。 政府客户。 美国 政府客户可以在单独的条款下继续使用 Codespaces 测试预览版。 请参阅[测试版预览版条款](/github/site-policy/github-terms-of-service#j-beta-previews)。

## Connect
使用 GitHub Connect，您可以在 GitHub Enterprise Server 或 GitHub AE 实例与您的GitHub Enterprise Cloud 组织或 GitHub.com 上的企业帐户之间分享某些功能和数据。 要启用 GitHub Connect，您必须在 GitHub Enterprise Cloud 或 GitHub.com 上至少有一 (1) 个帐户，以及一 (1) 个许可的 GitHub Enterprise Server 或 GitHub AE 实例。 您通过 Connect 使用 GitHub Enterprise Cloud 或 GitHub.com 是由您许可 GitHub Enterprise Cloud 或 GitHub.com的条款管理的。 个人数据的使用受 [GitHub 隐私声明](/github/site-policy/github-privacy-statement)管制。

## GitHub Copilot
要使用 GitHub Copilot，您需要安装到集成开发环境 (IDE) 或编辑器的扩展。 您在 IDE 或编辑器中使用 GitHub Copilot 扩展编写的代码（“**您的代码**”），在上传到 GitHub.com 之前不是本协议下的“内容”。

GitHub Copilot 返回给您的代码、函数和其他输出称为“**建议**”。 GitHub 不对“建议”主张任何权利，并且您保留对您的代码（包括包含在“代码”中的建议）的所有权和责任。

_可接受使用_

您的代码受 GitHub [可接受使用政策](/site-policy/acceptable-use-policies/github-acceptable-use-policies)的约束。 例如，您不得向 GitHub Copilot 提示包含非法内容或 GitHub.com 上的 GitHub 可接受使用政策禁止的内容。

_数据_

GitHub Copilot (i) 可能会根据您的首选遥测设置收集您的代码片段，并且 (ii) 将通过与您的帐户关联的 IDE 或编辑器收集其他使用信息。 这可能包括[GitHub 隐私声明](/site-policy/privacy-policies/github-privacy-statement)中引用的个人数据。 有关 GitHub Copilot 数据的收集和使用的更多信息，请参阅 [GitHub Copilot 常见问题](https://github.com/features/copilot#faq-privacy)。

## GitHub Enterprise Importer
Importer 是一个从其他来源导出数据到 GitHub 平台的框架。 Importer“按原样”提供。

## Learning Lab
GitHub Learning Lab 提供已编入GitHub 的免费交互式课程，并提供即时自动反馈和帮助。

*课程材料。*GitHub 拥有其提供的任何课程材料，并授予您全球、非独占、有限期、不可转让、免版税的许可，允许您出于与 Learning Lab 使用相关的内部业务目的而复制、维护、使用和运行这些材料。

开源许可证条款可能适用于课程材料中提供的源代码部分。

您创建的课程材料归您所有，但是您授予 GitHub 全球、非独占、永久、不可转让、免版税的许可，允许 GitHub 复制、维护、使用、托管以及在服务上运行这些课程材料。

您对 GitHub 课程材料的使用以及对自己课程材料的创建和存储并不构成对任一方各自知识产权的共同所有权。

个人数据的使用受 [GitHub 隐私声明](/github/site-policy/github-privacy-statement)管制。

## npm
npm 是一种软件包托管服务，允许您私下或公开托管软件包，并将包用作项目中的依赖项。 npm 是 JavaScript 生态系统的记录注册表。 npm 公共注册表可以免费使用，但客户如果想要发布私有包或使用团队管理私有包，则需收取费用。 [npm 文档](https://docs.npmjs.com/) 包含帐户类型限制以及如何管理[私有包](https://docs.npmjs.com/about-private-packages)和[组织](https://docs.npmjs.com/organizations)的详细信息。 [开放源码条款](https://www.npmjs.com/policies/open-source-terms)概述了可接受的 npm 注册表的使用。 npm [solo](https://www.npmjs.com/policies/solo-plan) 和 [org](https://www.npmjs.com/policies/orgs-plan) 计划都有补充条款。 npm [使用条款](https://www.npmjs.com/policies/terms) 适用于您的 npm 使用。

## Packages
GitHub Packages 是一种软件包托管服务，允许您私下或公开托管软件包，并将包用作项目中的依赖项。 GitHub Packages 按用量计费。 [Packages 文档](/packages/learn-github-packages/introduction-to-github-packages)包含详细信息，包括带宽和存储量（取决于您的帐户计划）以及如何监控您的 Packages 使用和设置使用限制。 Packages 带宽使用受 [GitHub 可接受使用政策](/github/site-policy/github-acceptable-use-policies)限制。

## 页面

每个帐户都可以访问 [GitHub Pages 静态托管服务](/github/working-with-github-pages/about-github-pages)。 GitHub Pages 旨在托管静态网页，但主要用作个人和组织项目的展示。

GitHub Pages 并非旨在用于或允许用作免费的 Web 托管服务来运行您的在线业务、电子商务站点或主要针对促进商业交易或提供商业软件即服务 (SaaS) 的任何其他网站。 页面上允许一些货币化工作，如捐款按钮和筹款链接。

_带宽和使用限制_

GitHub Pages 受某些特定带宽和使用限制的约束，可能不适用于某些高带宽用途。 请参阅我们的 [GitHub Pages 限制](/github/working-with-github-pages/about-github-pages)了解更多信息。

_禁止使用_

GitHub Pages 的使用不得违反本协议、GitHub [可接受使用政策](/github/site-policy/github-acceptable-use-policies)或 [Pages 文档](/pages/getting-started-with-github-pages/about-github-pages#guidelines-for-using-github-pages)中规定的 GitHub Pages 服务限制。

如果您对用途或预期用途是否归入这些类别有疑问，请联系 [GitHub 支持](https://support.github.com/contact?tags=docs-policy)。 GitHub 保留随时收回任何 GitHub 子域而不承担任何责任的权利。

## 预览版

预览版是指为预览、评估、演示或试用目的而提供的软件、在线服务和其他产品和功能，或这些功能的预发布版本，如 Alpha 版、测试版或抢先体验版。 如果协议不包含涉及预览版的条款和条件，则以下条款适用。 GitHub 授予使用预览版非生产实例的有限权限。 预览按“原样”、“包含所有故障”和“可用”提供。 GitHub 可能随时更改或终止预览版，恕不另行通知。 我们提供的有关个人预览版的任何信息都将被视为 GitHub 的机密信息。 如果您选择提供有关预览版的评论或建议，我们可能会出于任何目的使用该反馈，而无需承担任何义务。 GitHub 的最高赔偿责任仅限于直接损害赔偿，最高 5,000 美元。 对于因您使用预览版而由第三方提出的索赔，GitHub 没有义务为您辩护、赔偿或使您免受损害。

## 赞助计划

GitHub Sponsors 允许开发者社区直接在 GitHub 上为他们设计、构建和维护所需开源项目的人员及组织提供经济支持。 要成为被赞助的开发者，必须同意 [GitHub 赞助计划附加条款](/github/site-policy/github-sponsors-additional-terms)。

## SQL Server 映像

您可以下载用于 Linux 文件的 Microsoft SQL Server 标准版容器映像（“SQL Server 映像”）。 当您使用本软件的权利结束时，您必须卸载 SQL Server 映像。 Microsoft Corporation 可随时禁用 SQL Server 映像。
