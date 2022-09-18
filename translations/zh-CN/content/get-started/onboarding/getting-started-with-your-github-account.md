---
title: 开始使用 GitHub 帐户
intro: '使用 {% data variables.product.prodname_dotcom %} 上的个人帐户，你可以导入或创建存储库、与他人协作以及与 {% data variables.product.prodname_dotcom %} 社区联系。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 38d23c1a1b5021a681aedff8813daad751905d8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408920'
---
本指南将引导您完成 {% data variables.product.company_short %} 帐户的设置，并开始使用 {% data variables.product.product_name %} 协作和社区功能。

## 第 1 部分：配置 {% data variables.product.prodname_dotcom %} 帐户

{% ifversion fpt or ghec %} 开始使用 {% data variables.product.product_name %} 的第一步是创建一个帐户，选择最适合你需求的产品，验证你的电子邮件，设置双重身份验证以及查看你的配置文件。
{% elsif ghes %} 开始使用 {% data variables.product.product_name %} 的第一步是访问你的帐户，设置双重身份验证并查看你的配置文件。
{% elsif ghae %} 开始使用 {% data variables.product.product_name %} 的第一步是访问你的帐户并查看你的配置文件。
{% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} 上有几种类型的帐户。 {% endif %} 使用 {% data variables.product.product_name %} 的每个人都有自己的个人帐户，该帐户可以是多个组织和团队的一部分。 你的个人帐户是你在 {% data variables.product.product_location %} 上的身份，代表你个人。

{% ifversion fpt or ghec %}
### 1. 创建帐户
要在 {% data variables.product.product_location %} 上注册帐户，请导航到 https://github.com/ 并按照提示操作。

为了保证 {% data variables.product.prodname_dotcom %} 帐户的安全，您应该使用强大且唯一的密码。 有关详细信息，请参阅“[创建强密码](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)”。

### 2. 选择 {% data variables.product.prodname_dotcom %} 产品
您可以选择 {% data variables.product.prodname_free_user %} 或 {% data variables.product.prodname_pro %} 来访问个人帐户的不同功能。 如果您一开始不确定需要哪种产品，可以随时升级。

有关所有 {% data variables.product.prodname_dotcom %} 计划的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/get-started/learning-about-github/githubs-products)”。

### 3. 验证电子邮件地址
为确保您可以使用 {% data variables.product.product_name %} 计划中的所有功能，请在注册新帐户后验证您的电子邮件地址。 有关详细信息，请参阅“[验证电子邮件地址](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)”。
{% endif %}

{% ifversion ghes %}
### 1. 访问你的帐户
{% data variables.product.product_name %} 实例的管理员将通知您如何验证和访问您的帐户。 该过程因他们为实例配置的身份验证模式而异。
{% endif %}

{% ifversion ghae %}
### 1. 访问你的帐户
在 {% data variables.product.product_name %} 的企业所有者设置您的帐户后，您将收到一封电子邮件通知，允许您使用 SAML 单点登录 (SSO) 进行身份验证并访问您的帐户。
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} 配置双重身份验证
双因素身份验证 (2FA) 是登录网站或应用时采用的额外安全保障。 我们强烈建议您配置 2FA 以确保帐户安全。 有关详细信息，请参阅[关于双因素身份验证](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)。
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} 查看您的 {% data variables.product.prodname_dotcom %} 个人资料和贡献图
您的 {% data variables.product.prodname_dotcom %} 个人资料通过您固定的存储库和 gist、您选择公开的组织成员资格、您所做的贡献以及您创建的项目，向人们讲述您的工作故事。 有关详细信息，请参阅“[关于你的配置文件](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)”和“[查看你的配置文件上的贡献](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)”。

## 第 2 部分：使用 {% data variables.product.product_name %} 的工具和流程
为了最好地使用 {% data variables.product.product_name %}，您需要设置 Git。 Git 负责在你计算机上本地发生的、与 {% data variables.product.prodname_dotcom %} 有关的所有内容。 为了在 {% data variables.product.product_name %} 上有效地进行协作，您需要使用 {% data variables.product.prodname_dotcom %} Flavored Markdown 编写议题和拉取请求。

### 1. 了解 Git
{% data variables.product.prodname_dotcom %} 的协作开发方法取决于从您的本地仓库发布提交到 {% data variables.product.product_name %}，以供其他人使用 Git 查看、提取和更新。 有关 Git 的详细信息，请参阅“[Git 手册](https://guides.github.com/introduction/git-handbook/)”指南。 有关如何在 {% data variables.product.product_name %} 上使用 Git 的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 流](/get-started/quickstart/github-flow)”。
### 2. 设置 Git
如果您计划在计算机上本地使用 Git，无论是通过命令行、IDE 还是文本编辑器，您都需要安装和设置 Git。 有关详细信息，请参阅“[设置 Git](/get-started/quickstart/set-up-git)”。

如果您更喜欢使用可视化界面，可以下载并使用 {% data variables.product.prodname_desktop %}。 {% data variables.product.prodname_desktop %} 与 Git 一起打包，因此无需单独安装 Git。 有关详细信息，请参阅“[{% data variables.product.prodname_desktop %} 入门指南](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)”。

安装 Git 后，您可以从本地计算机连接到 {% data variables.product.product_name %} 存储库，无论是您自己的存储库还是其他用户的复刻。 当您从 Git 连接到 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库时，您需要使用 HTTPS 或 SSH 向 {% data variables.product.product_name %} 进行身份验证。 有关详细信息，请参阅“[关于远程存储库](/get-started/getting-started-with-git/about-remote-repositories)”。

### 3. 选择如何与 {% data variables.product.product_name %} 互动
每个人都有自己独特的工作流程，用于与 {% data variables.product.prodname_dotcom %} 互动；您使用的接口和方法取决于您的偏好和需求。

有关如何使用这些方法向 {% data variables.product.product_name %} 进行身份验证的详细信息，请参阅“[关于向 {% data variables.product.prodname_dotcom %} 进行身份验证](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)”。

| **方法**  | **说明** | **用例** |
| ------------- | ------------- | ------------- |
| 浏览到 {% data variables.product.prodname_dotcom_the_website %} | 如果您不需要在本地处理文件，{% data variables.product.product_name %} 可让您直接在浏览器中完成大多数与 Git 相关的操作，从创建和复刻存储库到编辑文件和打开拉取请求。| 如果您想要一个可视化界面，并且需要执行不需要在本地工作的快速、简单更改，则此方法非常有用。 |
| {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %} 可扩展并简化您的 {% data variables.product.prodname_dotcom_the_website %} 工作流程，它使用可视界面，而不是在命令行上使用命令文本。 有关 {% data variables.product.prodname_desktop %} 入门的详细信息，请参阅“[{% data variables.product.prodname_desktop %} 入门指南](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)”。 | 如果您需要或想要在本地处理文件，但更喜欢使用可视化界面来使用 Git 并与 {% data variables.product.product_name %} 交互，则此方法最佳。 |
| IDE 或文本编辑器  | 可以设置默认文本编辑器（如 [Atom](https://atom.io/) 或 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)）以使用 Git 打开和编辑文件、使用扩展和查看项目结构。 有关详细信息，请参阅“[将文本编辑器与 Git 关联](/github/using-git/associating-text-editors-with-git)”。 | 如果您正在处理更复杂的文件和项目，并且希望所有内容都在一个地方，这将很方便，因为文本编辑器或 IDE 通常允许您直接访问编辑器中的命令行。 |
| 命令行，带或不带 {% data variables.product.prodname_cli %} | 要最精细地控制和自定义如何使用 Git 以及与 {% data variables.product.product_name %} 交互的方式，可以使用命令行。 有关使用 Git 命令的详细信息，请参阅“[Git 速查表](/github/getting-started-with-github/quickstart/git-cheatsheet)”。<br/><br/> {% data variables.product.prodname_cli %} 是一个可以安装的命令行工具，可将拉取请求、问题、{% data variables.product.prodname_actions %} 和其他 {% data variables.product.prodname_dotcom %} 功能引入终端，让你可以在一个地方完成所有工作。 有关详细信息，请参阅“[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)”。 | 如果您已经使用命令行，或者您更习惯于使用命令行，这样最方便，可以避免切换上下文。 |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} 有 REST API 和 GraphQL API，您可以使用它们与 {% data variables.product.product_name %} 进行交互。 有关详细信息，请参阅“[API 入门指南](/github/extending-github/getting-started-with-the-api)”。 | 如果要自动执行常见任务、备份数据或创建扩展 {% data variables.product.prodname_dotcom %} 的集成，则 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 将非常有用。 |
### 4. 在 {% data variables.product.product_name %} 上编写
为了使您的通信清晰明了，在议题和拉取请求中井井有条，您可以使用 {% data variables.product.prodname_dotcom %} Flavored Markdown 进行格式化，结合易读、易写语法与一些自定义功能。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/about-writing-and-formatting-on-github)”。

可以通过 {% data variables.product.prodname_learning %} 上的“[使用 Markdown 进行通信](https://github.com/skills/communicate-using-markdown)”课程了解 {% data variables.product.prodname_dotcom %} 风格的 Markdown。

### 5. 在 {% data variables.product.product_name %} 上搜索
我们的集成搜索可让您在 {% data variables.product.product_name %} 上的众多存储库、用户和代码行中查找所要的内容。 您可以全局搜索所有 {% data variables.product.product_name %}，或将搜索限于特定仓库或组织。 有关可在 {% data variables.product.product_name %} 上执行的搜索类型的详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)”。

我们的搜索语法允许您使用限定符构建查询，以指定要搜索的内容。 有关在搜索中使用的搜索语法的详细信息，请参阅“[在 {% data variables.product.prodname_dotcom %} 上搜索](/github/searching-for-information-on-github/searching-on-github)”。

### 6. 管理 {% data variables.product.product_name %} 上的文件
使用 {% data variables.product.product_name %}，您可以在存储库或您具有写入权限的任何存储库中创建、编辑、移动和删除文件。 您还可以逐行跟踪文件中更改的历史记录。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_dotcom %} 上的文件](/github/managing-files-in-a-repository/managing-files-on-github)”。

## 第 3 部分：在 {% data variables.product.product_name %} 上进行协作
任意数量的人都可以在 {% data variables.product.product_name %} 的存储库中一起工作。 您可以配置设置、创建项目板和管理通知，以鼓励有效的协作。

### 1. 使用存储库

#### 创建仓库
仓库就像项目的文件夹。 你的个人帐户中可以有任意数量的公共和私有存储库。 存储库可以包含文件夹和文件、图像、视频、电子表格和数据集，以及存储库中所有文件的修订历史记录。 有关详细信息，请参阅[关于存储库](/github/creating-cloning-and-archiving-repositories/about-repositories)。

创建新存储库时，应使用 README 文件初始化存储库，以便让人们了解您的项目。 有关详细信息，请参阅“[创建新存储库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)”。

#### 克隆仓库
您可以将现有存储库从 {% data variables.product.product_name %} 克隆到本地计算机，从而更轻松地添加或删除文件、修复合并冲突或进行复杂提交。 克隆存储库将提取 {% data variables.product.prodname_dotcom %} 在当时拥有的所有存储库数据的完整副本，包括项目每个文件和文件夹的所有版本。 有关详细信息，请参阅“[克隆存储库](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)”。

#### 复刻仓库
复刻是您管理的存储库的副本，除非您向项目所有者提交拉取请求，否则您所做的任何更改都不会影响原始存储库。 复刻最常见的用法是对其他人的项目提出更改或将其他人的项目用作自己创意的起点。 有关详细信息，请参阅“[使用分支](/github/collaborating-with-pull-requests/working-with-forks)”。
### 2. 导入项目
如果您有要移动到 {% data variables.product.product_name %} 的现有项目，则可以使用 {% data variables.product.prodname_dotcom %} 导入程序、命令行或外部迁移工具导入项目。 有关详细信息，请参阅“[将源代码导入到 {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)”。

### 3. 管理协作者和权限
您可以使用仓库议题、拉取请求及项目板与其他人协作处理您的项目。 可以从存储库设置中的“协作者”选项卡中邀请其他人作为协作者加入你的存储库。 有关详细信息，请参阅“[邀请协作者访问个人存储库](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)”。

你是在个人帐户中创建的任何存储库的所有者，并拥有对存储库的完全控制。 协作者对您的存储库具有写入权限，他们的操作权限有限。 有关详细信息，请参阅“[个人帐户存储库的权限级别](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)”。

### 4. 管理存储库设置
作为存储库的所有者，您可以配置多个设置，包括存储库的可见性、主题和社交媒体预览。 有关详细信息，请参阅“[管理存储库设置](/github/administering-a-repository/managing-repository-settings)”。

### 5. 设置项目以获得正常的贡献
{% ifversion fpt or ghec %} 为了鼓励存储库中的协作者，你需要一个鼓励人们使用、参与和宣传你的项目的社区。 有关详细信息，请参阅开源指南中的“[构建友好社区](https://opensource.guide/building-community/)”。

通过向存储库添加贡献指南、行为准则和许可证等文件，您可以营造一个环境，让协作者更容易做出有意义、有用的贡献。 有关详细信息，请参阅“[设置项目的健康贡献](/communities/setting-up-your-project-for-healthy-contributions)”。
{% endif %} {% ifversion ghes or ghae %} 通过向存储库添加贡献指南、行为准则和支持资源等文件，你可以营造一个环境，让协作者更容易做出有意义、有用的贡献。 有关详细信息，请参阅“[设置项目的健康贡献](/communities/setting-up-your-project-for-healthy-contributions)”。
{% endif %}

### 6. 使用 GitHub 问题和项目板
您可以使用 GitHub Issues 来组织工作议题和拉取请求，并使用项目板管理工作流程。 有关详细信息，请参阅“[关于问题](/issues/tracking-your-work-with-issues/about-issues)”和“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。

### 7. 管理通知
通知会提供有关您订阅或参与的 {% data variables.product.prodname_dotcom %} 活动的更新。 如果您的某项对话不再感兴趣，您可以取消订阅、取消关注或自定义以后接收的通知类型。 有关详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。

### 8. 使用 {% data variables.product.prodname_pages %}
您可以使用 {% data variables.product.prodname_pages %} 直接从 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库创建和托管网站。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)”。

{% ifversion discussions %}
### 9. 使用 {% data variables.product.prodname_discussions %}
您可以为存储库启用 {% data variables.product.prodname_discussions %}，以帮助围绕项目构建社区。 维护者、贡献者和访客可以使用讨论来共享公告、提出和回答问题，以及参与关于目标的对话。 有关详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。
{% endif %}
## 第 4 部分：自定义和自动化 {% data variables.product.product_name %} 上的工作

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. 使用 {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} 构建 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} 发布和管理 {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## 第 5 部分：在 {% data variables.product.product_name %} 上安全地构建
{% data variables.product.product_name %} 具有各种安全功能，有助于确保存储库中代码和机密的安全。 某些功能适用于所有存储库，而另一些功能仅适用于公共存储库和具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的存储库。 有关 {% data variables.product.product_name %} 安全功能的概述，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

### 1. 保护存储库
作为存储库管理员，您可以通过配置存储库安全设置来保护您的存储库。 其中包括管理对存储库的访问、设置安全策略和管理依赖项。 对于公共存储库以及启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的私有存储库，您还可以配置代码和机密扫描以自动识别漏洞并确保令牌和密钥不会公开。 

有关保护存储库的步骤的详细信息，请参阅“[保护存储库](/code-security/getting-started/securing-your-repository)”。

{% ifversion fpt or ghec %}
### 2. 管理依赖项
安全构建的很大一部分是维护项目的依赖项，以确保所依赖的所有包和应用程序都已更新且安全。 通过浏览存储库的依赖关系图，使用 Dependabot 自动引发拉取请求以使依赖项保持最新，以及接收依赖项的警报和易受攻击依赖项的安全更新，您可以管理上 {% data variables.product.product_name %} 存储库的依赖关系。 

有关详细信息，请参阅“[保护软件供应链](/code-security/supply-chain-security)”。
{% endif %}

## 第 6 部分：参与 {% data variables.product.prodname_dotcom %} 的社区

{% data reusables.getting-started.participating-in-community %}

### 1. 参与开源项目
{% data reusables.getting-started.open-source-projects %}

### 2. 与 {% data variables.product.prodname_gcf %} 互动
{% data reusables.support.ask-and-answer-forum %}

### 3. 在 {% data variables.product.prodname_docs %} 上阅读 {% data variables.product.product_name %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. 通过 {% data variables.product.prodname_learning %} 学习
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. 支持开源社区
{% data reusables.getting-started.sponsors %}

### 6. 联系 {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## 延伸阅读
- “[{% data variables.product.prodname_team %} 入门指南](/get-started/onboarding/getting-started-with-github-team)”{% endif %} {% endif %}
