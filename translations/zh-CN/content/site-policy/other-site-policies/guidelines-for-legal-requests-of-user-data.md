---
title: 用户数据法律请求准则
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Are you a law enforcement officer conducting an investigation that may involve user content hosted on GitHub?
Or maybe you're a privacy-conscious person who would like to know what information we share with law enforcement and under what circumstances.
Either way, you're on the right page.

In these guidelines, we provide a little background about what GitHub is, the types of data we have, and the conditions under which we will disclose private user information.
Before we get into the details, however, here are a few important details you may want to know:

- 如果有任何对于用户帐户信息的请求，我们将[**通知受影响用户**](#we-will-notify-any-affected-account-owners)，除非法律或法庭命令禁止此类通知。
- 如果没有[有效的法庭命令或搜查令](#with-a-court-order-or-a-search-warrant)，我们不会披露**位置跟踪数据**，如 IP 地址日志。
- 如果没有有效的[搜查令](#only-with-a-search-warrant)，我们不会披露任何**私人用户内容**，包括私有存储库内容。

## <a name="about-these-guidelines"></a>关于这些准则

您是否是一名执法官员，所开展的调查可能涉及到 GitHub 上托管的用户内容？

或者您是一位非常注重隐私的人士，希望了解我们在哪些情况下与执法机构分享哪些信息。

无论您是哪种身份，都应参阅本文内容。

## <a name="github-terminology"></a>GitHub 术语

Before asking us to disclose data, it may be useful to understand how our system is implemented.
GitHub hosts millions of data repositories using the <bpt id="p1">[</bpt>Git version control system<ept id="p1">](https://git-scm.com/video/what-is-version-control)</ept>.
Repositories on GitHub—which may be public or private—are most commonly used for software development projects, but are also often used to work on content of all kinds.

- 在这些准则中，我们提供了一些背景信息，包括 GitHub 是什么、我们拥有的数据类型以及我们会在哪些情况下披露私人用户信息。

- [**协作者**](/articles/github-glossary#collaborator) - 协作者是受存储库所有者邀请提供贡献的用户，有权读取和写入存储库。

- 在深入说明之前，您需要了解一些重要的详细信息：

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Repositories<ept id="p2">**</ept><ept id="p1">](/articles/github-glossary#repository)</ept> — A repository is one of the most basic GitHub elements.
They may be easiest to imagine as a project's folder.
A repository contains all of the project files (including documentation), and stores each file's revision history.
Repositories can have multiple collaborators and, at its administrators' discretion, may be publicly viewable or not.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Pages<ept id="p2">**</ept><ept id="p1">](/articles/what-is-github-pages)</ept> — GitHub Pages are public webpages freely hosted by GitHub that users can easily publish through code stored in their repositories.
If a user or organization has a GitHub Page, it can usually be found at a URL such as <ph id="ph1">`https://username.github.io`</ph> or they may have the webpage mapped to their own custom domain name.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Gists<ept id="p2">**</ept><ept id="p1">](/articles/creating-gists)</ept> — Gists are snippets of source code or other text that users can use to store ideas or share with friends.
Like regular GitHub repositories, Gists are created with Git, so they are automatically versioned, forkable and downloadable.
Gists can either be public or secret (accessible only through a known URL). Public Gists cannot be converted into secret Gists.

## <a name="user-data-on-githubcom"></a>GitHub.com 上的用户数据

以下是我们维护的 GitHub 上用户和项目数据类型的非详尽清单。

- <bpt id="p1">&lt;a name="public-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Public account data<ept id="p2">**</ept> — There is a variety of information publicly available on GitHub about users and their repositories.
User profiles can be found at a URL such as <ph id="ph1">`https://github.com/username`</ph>.
User profiles display information about when the user created their account as well their public activity on GitHub.com and social interactions.
Public user profiles can also include additional information that a user may have chosen to share publicly.
All user public profiles display:
  - 用户名
  - 用户已加星标的存储库
  - 用户关注的其他 GitHub 用户
  - 关注他们的用户

  （可选）用户也可以选择公开分享以下信息：
  - 他们的真实姓名
  - 头像
  - 关联公司
  - 他们的位置
  - 公共电子邮件地址
  - 他们的个人网页
  - 用户所属的组织（*取决于组织或用户偏好*）

- <bpt id="p1">&lt;a name="private-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Private account data<ept id="p2">**</ept> — GitHub also collects and maintains certain private information about users as outlined in our <bpt id="p3">[</bpt>Privacy Policy<ept id="p3">](/articles/github-privacy-statement)</ept>.
This may include:
  - 私人电子邮件地址
  - 付款详细信息
  - 安全访问日志
  - 有关与私有存储库的交互的数据

  要了解 GitHub 收集的私人帐户信息类型，可以访问您的 {% data reusables.user-settings.personal_dashboard %} 并浏览左侧菜单栏中的部分。

- 我们的用户信任我们，将他们的软件项目和代码交由我们托管，这些通常是他们最重要的业务或个人资产。
  - 组织名称
  - 所有者已加星标的存储库
  - 身为组织所有者的所有 GitHub 用户

  （可选）管理用户也可以选择公开分享以下信息：
  - 头像
  - 关联公司
  - 他们的位置
  - 直接成员和团队
  - 协作者

- 保持这种信任对我们来说至关重要，因此我们必须确保用户数据的安全、可靠和私密。

  - 代码本身
  - 代码的先前版本
  - 项目的稳定版本
  - 有关协作者、贡献者和存储库成员的信息
  - Git 操作日志，如提交、分支、推送、拉取、复刻和克隆
  - 与 Git 操作相关的对话，例如对拉取请求或提交的评论
  - 项目文档，例如议题和 Wiki 页面
  - 显示对项目的贡献和贡献者网络的统计数据和图表

- <a name="private-repository-data"></a>
**私有存储库数据** - GitHub 对私有存储库收集和维护的数据类型与公共存储库相同，不同的是，只有特别邀请的用户才可访问私有存储库数据。

- <a name="other-data"></a>
**其他数据** - 此外，GitHub 还收集分析数据，如页面访问和用户偶尔自愿提供的信息（例如与我们支持团队的通信、调查信息和/或站点注册）。

## <a name="we-will-notify-any-affected-account-owners"></a>我们将通知任何受影响的帐户所有者

It is our policy to notify users about any pending requests regarding their accounts or repositories, unless we are prohibited by law or court order from doing so. Before disclosing user information, we will make a reasonable effort to notify any affected account owner(s) by sending a message to their verified email address providing them with a copy of the subpoena, court order, or warrant so that they can have an opportunity to challenge the legal process if they wish. In (rare) exigent circumstances, we may delay notification if we determine delay is necessary to prevent death or serious harm or due to an ongoing investigation.

## <a name="disclosure-of-non-public-information"></a>非公开信息的披露

虽然我们绝大多数用户使用 GitHub 服务来建立新业务、构建新技术并总体改善人类生活，但我们也认识到，在我们遍及全球的数百万用户中，难免会有几个害群之马。

- <a name="with-user-consent"></a>
**经用户同意** - GitHub 将应请求直接向用户（若为组织帐户，则为组织所有者）或指定的第三方（GitHub 确信用户已验证第三方身份并得到用户书面同意）提供私人帐户信息。

- <a name="with-a-subpoena"></a>
**有传票** - 如果收到与官方刑事或民事调查相关的有效传票、民事调查要求或类似法律程序，我们可以提供特定的非公开帐户信息，其中可能包括：

  - 与帐户关联的名称
  - 与帐户关联的电子邮件地址
  - 计费信息
  - 注册日期和终止日期
  - 帐户注册时的 IP 地址、日期和时间
  - 用于在指定时间或与调查有关的事件中访问帐户的 IP 地址

在这种情况下，我们希望帮助执法部门履行其保护公众的法定职责。

Please note that the information available will vary from case to case. Some of the information is optional for users to provide. In other cases, we may not have collected or retained the information.

- 通过为执法人员提供准则，我们希望在常有利益冲突的用户隐私与司法之间取得平衡。

  - 显示用户在一段时间内的动态的任何日志
  - 帐户或私有存储库设置（例如，哪些用户拥有特定权限等）
  - 用户或 IP 特定分析数据，如浏览历史记录
  - 帐户创建以外或指定时间和日期的安全访问日志

- 我们希望这些准则有助于明确对双方的期望，并提高 GitHub 内部流程的透明度。

  - 秘密 Gist 的内容
  - 私有存储库中的源代码或其他内容
  - 私有存储库的贡献和协作记录
  - 私有存储库中的通信或文档（例如议题或 Wiki）
  - 任何用于身份验证或加密的安全密钥

- 我们的用户应当知道，我们重视他们的私人信息，并竭尽所能保护这些信息。

## <a name="cost-reimbursement"></a>费用补偿

这至少意味着只有在符合适当法律要求的情况下，我们才会向第三方披露数据。

虽然我们在紧急情况下不收费，但除非法律另有要求，否则我们将根据以下安排要求补偿为满足所有其他法律要求而产生的费用：

- 最多 25 个标识符的初始搜索：免费
- 最多 5 个帐户的订阅者信息/数据制作：免费
- 为 5 个以上帐户制作订阅者信息/数据：每个帐户 20 美元
- 二次搜索：每次搜索 10 美元

## <a name="data-preservation"></a>数据保留

在美国执法部门发出与正式刑事调查相关的正式要求后，以及签发法庭命令或其他程序之前，我们将采取措施将帐户记录保留达 90 天。

## <a name="submitting-requests"></a>提交请求

请将请求发送到：

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

抄送件可通过电子邮件发送至 legal-support@github.com

请尽可能具体描述请求并缩小请求范围，包含以下信息：

- 关于发出信息请求的机构的完整信息
- 负责官员的姓名和证章/ID
- 正式电子邮件地址和联系电话号码
- 相关的用户、组织、存储库名称
- 相关的任何页面、Gist 或文件的 URL
- 您需要的记录类型描述

请给我们至少两周时间审查您的请求。

## <a name="requests-from-foreign-law-enforcement"></a>外国执法部门的请求

同样，我们也希望培养专业执法人员对 GitHub 系统的了解，以便他们更高效地定制他们的数据请求，并且仅针对他们开展调查所需的信息提出请求。

## <a name="questions"></a>问题

Do you have other questions, comments or suggestions? Please contact {% data variables.contact.contact_support %}.
