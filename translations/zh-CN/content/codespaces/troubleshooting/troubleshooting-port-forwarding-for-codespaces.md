---
title: Codespaces 的端口转发疑难解答
intro: 常见端口转发问题的疑难解答步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: 端口转发
---

在代码空间内运行的应用程序向控制台输出端口时，{% data variables.product.prodname_codespaces %} 将检测到 localhost URL 模式并自动转发端口。 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

如果端口未自动转发，则可以手动转发该端口。 更多信息请参阅“[转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)”。

如果设置了端口转发，请检查以下各项：

- 使用通知提示或点击终端中的 URL 打开转发的端口。 如果通过浏览器连接到代码空间，则在本地计算机中键入 `localhost:8000`（作为示例）将不起作用。
- 确保检查应用程序是否仍在代码空间中运行。 如果代码空间在一段时间不活动后停止，则需要确保在代码空间重新启动后重新启动应用程序。

通常，您可以使转发的端口可公开访问，也可以在拥有存储库的组织内访问。 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。 如果公共或组织可见性选项中的一个或两个选项不可用，则表示已配置组织级策略。 更多信息请参阅“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”。
