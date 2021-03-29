---
title: 创建 web 挂钩
intro: '了解如何构建 web 挂钩，选择 web 挂钩将在 {% data variables.product.prodname_dotcom %} 上侦听的事件，以及如何设置服务器以接收和管理 web 挂钩负载。'
redirect_from:
  - /webhooks/creating
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - web 挂钩
---



我们已了解 [web 挂钩的基础知识][webhooks-overview]，现在我们来构建自己的 web 挂钩支持的集成。 在本教程中，我们将创建一个仓库 web 挂钩，它将负责根据仓库每天收到的议题数量列出仓库的受欢迎程度。

创建 web 挂钩是一个两步过程。 首先需要设置 web 挂钩通过 {% data variables.product.product_name %} 实施的行为 - 它应该侦听哪些事件。 之后，您将设置服务器以接收和管理有效负载。


{% data reusables.webhooks.webhooks-rest-api-links %}

### 设置 web 挂钩

您可以在组织或特定仓库上安装 web 挂钩。

要设置 web 挂钩，请转到仓库或组织的设置页面。 在那里，单击 **Webhooks（web 挂钩）**，然后单击 **Add webhook（添加 web 挂钩）**。

或者，您可以选择[通过 web 挂钩 API][webhook-api] 来构建和管理 web 挂钩。

Web 挂钩需要设置几个配置选项才能使用。 我们将在下面介绍所有这些设置。

### 有效负载 URL

{% data reusables.webhooks.payload_url %}

由于在本教程中，我们将在本地开发，因此将其设置为 `http://localhost:4567/payload`。 我们将在[配置服务器](/webhooks/configuring/)文档中解释原因。

### 内容类型

{% data reusables.webhooks.content_type %} 在本教程中，可以使用默认内容类型 `application/json`。

### 密钥

{% data reusables.webhooks.secret %}

### SSL 验证

{% data reusables.webhooks.webhooks_ssl %}

### 已激活

默认情况下，web 挂钩交付为“Active（激活）”。 您可以通过取消选择“Active（激活）”来选择禁用 web 挂钩交付。

### 事件

事件是 web 挂钩的核心。 当仓库上发生特定操作时，就会触发这些 web 挂钩，而服务器的有效负载 URL 会截获它们并采取行动。

有关 web 挂钩事件的完整列表以及它们在什么情况下执行，请参阅 [web 挂钩 API][hooks-api] 参考资料。

由于我们的 web 挂钩与仓库中的议题相关，因此我们单击 **Let me select individual events（让我选择单个事件）**，然后单击 **Issues（议题）**。 确保选择 **Active（激活）**以接收触发 web 挂钩的议题事件。 您还可以使用默认选项选择所有事件。

完成后，单击 **Add webhook（添加 web 挂钩）**。 唷！ 现在您创建了 web 挂钩，是时候设置我们的本地服务器来测试 web 挂钩了。 请参阅[配置服务器](/webhooks/configuring/)了解如何进行测试。

#### 通配符事件

要为所有事件配置 web 挂钩，请使用通配符 (`*`) 来指定 web 挂钩事件。 添加通配符事件时，我们将用通配符事件替换您配置的任何现有事件，并向您发送所有受支持事件的有效负载。 您还会自动获取我们可能在将来添加的任何新事件。

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
