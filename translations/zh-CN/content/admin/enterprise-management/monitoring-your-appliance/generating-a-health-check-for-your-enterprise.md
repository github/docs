---
title: 为您的企业生成运行状况检查
intro: '您可以通过生成运行状况检查来深入了解 {% data variables.product.product_location %} 的常规运行状况以及 Git 和 API 请求。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
---

{% note %}

**注意：** 生成运行状况检查目前正测试用于 {% data variables.product.prodname_ghe_server %}，可能会有所变化。

{% endnote %}

## 关于生成的运行状况检查

您可以为包含大量数据（如诊断和日志文件）的 {% data variables.product.product_location %} 创建支持包。 为了帮助分析和解释此数据，您可以生成运行状况检查。 有关支持包的详细信息，请参阅“[向 {% data variables.contact.github_support %} 提供数据](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”。

运行状况检查提供有关 {% data variables.product.product_location %} 的以下信息。
- 深入了解 {% data variables.product.product_location %} 的一般运行状况，例如升级状态、存储和许可证席位消耗
- 安全部分，重点介绍子域隔离和用户身份验证
- Git 请求分析，以及有关最繁忙的存储库和 Git 用户的详细信息
- API 请求分析，包括最繁忙的时间、最常请求的终端节点和最活跃的调用方

## 生成运行状况检查

在生成运行状况检查之前，您必须创建支持包。 更多信息请参阅“[将数据提供给 {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”。

1. 导航到 [{% data variables.contact.support_portal %}](https://support.github.com/)。
2. 在页面的右上角，单击 **Premium（高级）**。

   ![GitHub 支持门户标头中"高级"链接的屏幕截图。](/assets/images/enterprise/support/support-portal-header-premium.png)

3. 在 **Health Checks（运行状况检查）**右侧，单击 **Request Health Check（请求运行状况检查）**。

   !["请求运行状况检查" 按钮的屏幕截图。](/assets/images/enterprise/support/support-portal-request-health-check.png)

4. 在“Select an enterprise account（选择企业帐户）”下，选择下拉菜单，然后单击企业帐户。

   !["企业帐户" 下拉菜单的屏幕截图。](/assets/images/enterprise/support/health-check-dialog-ea.png)

5. 在“Upload a support bundle（上传支持包）”下，点击 **Chose File（选择文件）** ，然后选择要上传的文件。 然后，单击 **Request Health Check（请求运行状况检查）**。

   !["选择文件" 和 "请求运行状况检查" 按钮的屏幕截图。](/assets/images/enterprise/support/health-check-dialog-choose-file.png)


请求运行状况检查后，将安排一个作业来生成运行状况检查。 几个小时到一天后，生成的运行状况检查将显示在 {% data variables.contact.support_portal %}的“运行状况检查”部分中。

![{% data variables.contact.support_portal %}的“运行状况检查”部分的屏幕截图。](/assets/images/enterprise/support/support-portal-health-checks-section.png)
