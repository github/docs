---
title: 关于 GitHub Copilot 遥测
intro: '{% data variables.product.prodname_copilot %} 收集并依赖超出其他 {% data variables.product.company_short %} 产品和服务收集的额外遥测数据。'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## 哪些数据会被收集？

收集的数据在“[{% data variables.product.prodname_copilot %} 遥测术语](/github/copilot/github-copilot-telemetry-terms)”中进行了描述。 此外，{% data variables.product.prodname_copilot %} 扩展/插件从用户的集成开发环境 (IDE) 收集活动（绑定到时间戳）以及扩展/插件遥测包收集的元数据。 当与 {% data variables.product.prodname_vscode %}、IntelliJ、NeoVIM 或其他 IDE 一起使用时，{% data variables.product.prodname_copilot %} 会收集这些 IDE 提供的标准元数据。

## {% data variables.product.company_short %} 如何使用数据

{% data variables.product.company_short %} 会将这些数据用于：

- 直接改进产品，包括评估处理中的不同策略，并预测用户可能认为有用的建议
- 评估产品，例如通过衡量其对用户的积极影响
- 改进基础代码生成模型，例如通过提供正面和负面示例（但始终不会将您的私有代码用作输入来为 {% data variables.product.prodname_copilot %} 的其他用户建议代码）
- 引导密切相关的 {% data variables.product.company_short %} 产品
- 调查和发现可能滥用 {% data variables.product.prodname_copilot %} 服务的情况
- 与改进 {% data variables.product.prodname_copilot %} 服务相关的其他目的，包括下一节中所述的共享

## 如何共享数据

遥测数据安全地存储在 {% data variables.product.company_short %} 系统上，并进行了适当的加密。 我们知道用户编辑操作、源代码片段以及存储库和文件路径的 URL 都是敏感数据。 因此，访问受到严格控制。 数据访问仅限于 (1) {% data variables.product.company_short %} 团队或 {% data variables.product.prodname_copilot %} 平台健康团队中指定的 {% data variables.product.company_short %} 人员（员工和承包商），(2) 在 Azure 和/或 {% data variables.product.prodname_copilot %} 团队工作或与之合作的 Microsoft 人员（员工和承包商），以及 (3) 在 {% data variables.product.prodname_copilot %} 上工作的 OpenAI 员工。

