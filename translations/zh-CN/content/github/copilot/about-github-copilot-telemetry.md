---
title: 关于 GitHub Copilot 遥测
intro: '{% data variables.product.prodname_dotcom %} Copilot 收集并依赖超出其他 {% data variables.product.prodname_dotcom %} 产品和服务收集的额外遥测数据。'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## 哪些数据会被收集？
{% data variables.product.prodname_dotcom %} Copilot 从用户的 Visual Studio Code 编辑器中收集与时间戳和元数据相关的活动。 此元数据由 [Visual Studio Code 扩展遥测包](https://www.npmjs.com/package/vscode-extension-telemetry)收集的扩展设置和标准元数据组成：

* Visual Studio Code 机器 ID（匿名标识符）
* Visual Studio Code 会话 ID（匿名标识符）
* Visual Studio Code 版本
* [来自 IP 地址的地理位置](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-collection?tabs=net)（国家、州/省和城市，但不是 IP 地址本身）
* 操作系统和版本
* 扩展版本
* VS 代码界面（网页或桌面）

收集的活动包括在以下情况下触发的事件：

* 发生错（它记录错误类型和相关背景；例如，如果它有认证错误，则会记录密钥过期日期）
* 访问我们的模型以询问代码建议（它记录编辑器的位置，如像光标和代码片段的位置）- 这包括用户采取行动请求代码建议的情况。
* 收到或显示代码建议（它记录建议、后处理和元数据，例如模型确定性和延迟）
* 代码建议因确保 AI 安全的过滤而编辑
* 用户对代码建议采取行动（例如接受或拒绝）
* 用户根据代码建议行事，然后它记录它们在代码中是否保持或如何保持

## 如何使用数据
此数据仅供 {% data variables.product.company_short %} 用于：

* 直接改进产品，包括评估处理中的不同策略，并预测用户可能认为有用的建议
* 直接评估产品，例如通过测量它对用户的积极影响
* 改进基础代码生成模型，例如通过提供正面和负面示例（但始终不会将您的私有代码用作输入来为 {% data variables.product.prodname_dotcom %} Copilot 的其他用户建议代码）
* 引导密切相关的 {% data variables.product.prodname_dotcom %} 产品
* 调查和发现可能滥用 {% data variables.product.prodname_dotcom %} Copilot 服务的情况
* 与改进 {% data variables.product.prodname_dotcom %} Copilot 服务相关的其他目的

## 如何共享数据
遥测数据安全地存储在 {% data variables.product.prodname_dotcom %} 系统上，并进行了适当的加密。

我们知道用户编辑操作和源代码片段是非常敏感的数据，访问受到严格控制。 数据访问仅限于 (1) {% data variables.product.company_short %} Copilot 团队或 {% data variables.product.company_short %} 平台健康团队中指定的 {% data variables.product.company_short %} 人员（员工和承包商），(2) 特选的在 {% data variables.product.company_short %} Copilot 团队工作或与之合作的 Microsoft 人员（员工和承包商），以及 (3) 特选的在 {% data variables.product.company_short %} Copilot 上工作的 OpenAI 员工。
