---
title: 编写应用程序的上架说明
intro: '要在 {% data variables.product.prodname_marketplace %} 中[上架应用程序](/marketplace/listing-on-github-marketplace/)，您需要根据 GitHub 的指南编写应用程序的说明并提供图像。'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions/
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images/
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

以下是有关您在上架信息草稿的 **Listing description（上架说明）**部分中需要填写字段的指南。

### 命名和链接

#### 上架产品名称

列表的名称将显示在 [{% data variables.product.prodname_marketplace %} 主页](https://github.com/marketplace)上。 名称仅限于 255 个字符，可能与应用名称不同。 您的列表不能与现有 {% data variables.product.product_name %} 帐户同名，除非该名称是您自己的用户或组织名称。

#### 简短说明

在 [{% data variables.product.prodname_marketplace %} 主页](https://github.com/marketplace)上，社区将会看到应用程序名称下面“非常简短”的说明。

![{% data variables.product.prodname_marketplace %} 应用程序简短说明](/assets/images/marketplace/marketplace_short_description.png)

##### 长度

我们建议将简短说明控制在 40-80 个字符。 尽管可以使用更多字符，但简洁的描述使客户更容易快速阅读和理解。

##### 内容

- 介绍应用程序的功能。 不要在此空间使用呼吁用语。 例如：

  **宜：**GitHub 议题的轻量级项目管理

  **不宜：**Manage your projects and issues on GitHub（在 GitHub 上管理项目和议题）

  **提示：**在呼吁用语中动词的末尾加上 "s" 可转变为可接受的说明：_Manages your projects and issues on GitHub_

- 不要在说明中重复应用程序的名称。

  **宜：**容器原生持续集成工具

  **不宜：**Skycap 是一个容器原生持续集成工具

##### 格式

- 始终使用句子大小写规则。 只大写第一个字母和专有名词。

- 在简短说明的末尾不要使用标点符号。 简短说明不应包含完整的句子，并且绝对不能包含一个以上的句子。

- 仅大写专有名词。 例如：

  **宜：**One-click delivery automation for web developers

  **不宜：**One-click delivery automation for Web Developers

- 在列表中始终使用[连续逗号](https://en.wikipedia.org/wiki/Serial_comma)。

- 避免将 GitHub 社区称为“用户”。

  **宜：**为组织中的人员自动创建议题

  **不宜：**为组织的用户自动创建议题

- 避免使用首字母缩写词，除非是约定俗成的缩写（如 API）。 例如：

  **宜：**Agile task boards, estimates, and reports without leaving GitHub

  **不宜：** Agile task boards, estimates, and reports without leaving GitHub’s UI

#### 分类

{% data variables.product.prodname_marketplace %} 中的应用程序可以按类别显示。 在 **Primary category（主要类别）**下拉列表中选择最适合描述应用程序主要功能的类别，（可选）然后选择适合应用程序的 **Secondary category（次要类别）**。

#### 支持的语言

如果您的应用程序仅适用于特定语言，请选择它支持的最多 10 种编程语言。 这些语言显示在应用程序的 {% data variables.product.prodname_marketplace %} 上架信息页面上。 此字段是可选的。

#### 上架信息中的 URL

**必需的 URL**
* **Customer support URL（客户支持 URL）：**客户寻求技术支持、产品或帐户查询时前往的网页 URL。
* **Privacy policy URL（隐私政策 URL）：**显示应用程序隐私政策的网页。
* **Installation URL（安装 URL）：**此字段仅对 OAuth 应用程序显示。 （GitHub 应用程序不使用此 URL，因为它们使用 GitHub 应用程序设置页面中可选的设置 URL。） 当客户购买您的 OAuth 应用程序时，GitHub 将在客户安装应用程序后将其重定向到安装 URL。 您需要将客户重定向到 `https://github.com/login/oauth/authorize` 以开始 OAuth 授权流程。 更多信息请参阅“[新购买 OAuth 应用程序](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)”。 如果您要上架 GitHub 应用程序，请跳过此字段。

**可选的 URL**
* **Company URL（公司 URL）：**指向公司网站的链接。
* **Status URL（状态 URL）：**显示应用程序状态的网页链接。 状态页面可以包括当前和历史事件报告、Web 应用程序正常运行时间状态以及预定维护。
* **Documentation URL（文档 URL）：**指导客户如何使用应用程序的文档链接。

### 徽标和特征卡

{% data variables.product.prodname_marketplace %} 使用圆形徽章内的方形徽标图像显示所有上架产品，以便从视觉上区分应用程序。

![GitHub Marketplace 徽标和徽章图像](/assets/images/marketplace/marketplace-logo-and-badge.png)

特征卡由应用程序的徽标、名称和自定义背景图像组成，可体现您的品牌个性。 如果您的应用程序是[主页](https://github.com/marketplace)顶部的四个随机精选应用程序之一，{% data variables.product.prodname_marketplace %} 将显示此卡。 每个应用程序的简短说明显示在其特征卡的下方。

![特征卡](/assets/images/marketplace/marketplace_feature_card.png)

当您上传图像和选择颜色时，{% data variables.product.prodname_marketplace %} 上架草稿将显示徽标和特征卡的预览。

##### 徽标指南

您必须上传徽标的自定义图像。 对于徽章，请选择背景颜色。

- 上传至少为 200 像素 x 200 像素的徽标图像，这样在发布上架信息时就不必放大徽标。
- 徽标将被裁剪为正方形。 建议上传徽标居中的正方形图像文件。
- 为获得最佳效果，请上传透明背景的徽标图像。
- 要显示无缝徽章的外观，请选择与徽标图像的背景颜色（或透明度）匹配的徽章背景颜色。
- 避免使用带有文字的徽标图像。 带有文字的徽标在小屏幕上缩放效果不佳。

##### 特征卡指南

您必须上传特征卡的自定义背景图像。 对于应用程序的名称，请选择文本颜色。

- 在背景图像中使用图案或纹理赋予卡片视觉特征，使其在 {% data variables.product.prodname_marketplace %} 主页的深色背景下引人注目。 特征卡应体现应用程序的品牌个性。
- 背景图像尺寸为 965 像素 x 482 像素（宽 x 高）。
- 为应用程序的名称选择文本颜色，使其清晰地显示在背景图像上。

### 上架详细信息

要获取应用程序的登录页面，请在 {% data variables.product.prodname_marketplace %} 主页或类别页面上单击应用程序的名称。 登录页面显示应用程序的较长说明，包括两个部分：“Introductory description（简介）”和“Detailed description（详细说明）”。

“Introductory description（简介）”显示在应用程序 {% data variables.product.prodname_marketplace %} 登录页面的顶部。

![{% data variables.product.prodname_marketplace %} 简介](/assets/images/marketplace/marketplace_intro_description.png)

单击 **Read more（阅读更多）...**，显示“Detailed description（详细说明）”。

![{% data variables.product.prodname_marketplace %} 详细说明](/assets/images/marketplace/marketplace_detailed_description.png)

请遵循以下指南编写这些说明。

#### 长度

我们建议您[上架应用程序](/marketplace/listing-on-github-marketplace/)时，在必填字段“Introductory description（简介）”中写 1-2 句高度概述的说明，长度控制在 150-250 个字符。 尽管可以使用更多字符，但简洁的概述使客户更容易快速阅读和理解。

您可以在可选的“Detailed description（详细说明）”字段中添加更多信息。 在应用程序登录页面中“Introductory description（简介）”的下方单击 **Read more（阅读更多）...** 将会看到此说明。 详细说明包括 3-5 个[价值主张](https://en.wikipedia.org/wiki/Value_proposition)，每个价值主张用 1-2 个句子阐明。 此说明最多可以使用 1,000 个字符。

#### 内容

- 始终用应用程序的名称开始简介。

- 始终用主动语态编写说明和价值主张。

#### 格式

- 始终在价值主张标题中使用句子大小写规则。 只大写第一个字母和专有名词。

- 在说明中使用句点。 避免使用感叹号。

- 在价值主张标题的末尾不要使用标点符号。 价值主张标题不应包含完整的句子，并且不能包含一个以上的句子。

- 对于每个价值主张，请在其标题后加上一段说明。 使用 Markdown 将标题格式设置为[三级标题](/articles/basic-writing-and-formatting-syntax/#headings)。 例如：


  ### 学习所需的技能

  GitHub Learning Lab 可以帮助您学习如何使用 GitHub、如何使用 Markdown 更有效地沟通以及如何处理合并冲突等。

- 仅大写专有名词。

- 在列表中始终使用[连续逗号](https://en.wikipedia.org/wiki/Serial_comma)。

- 避免将 GitHub 社区称为“用户”。

  **宜：**为组织中的人员自动创建议题

  **不宜：**为组织的用户自动创建议题

- 避免使用首字母缩写词，除非是约定俗成的缩写（如 API）。

### 产品屏幕截图

您可以上传应用程序的最多五张屏幕截图，以显示在应用程序的登录页面上。 向每个屏幕截图添加可选标题以提供上下文。 上传屏幕截图后，您将其拖动到希望它们在登录页面上显示的位置。

#### 屏幕截图指南

- 图像必须具有高分辨率(至少 1200 像素宽)。
- 所有图像必须具有相同的高度和宽度（宽高比），以避免用户切换图像时出现页面跳跃。
- 显示尽可能多的用户界面，以便用户看到应用程序执行的操作。
- 在浏览器中截取应用程序的屏幕时，仅包括显示窗口中的内容。 避免包括地址栏、标题栏或工具栏图标，它们不能很好地适应较小的屏幕尺寸。
- GitHub 在应用程序登录页面的图框中显示您上传的屏幕截图，因此您无需在屏幕截图周围添加图框或边框。
- 简短明快的字幕效果最好。

![GitHub Marketplace 屏幕截图](/assets/images/marketplace/marketplace-screenshots.png)
