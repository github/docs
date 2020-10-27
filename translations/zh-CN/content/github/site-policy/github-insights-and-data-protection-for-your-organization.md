---
title: 组织的 GitHub Insights 和数据保护
intro: '{% data variables.product.prodname_insights %} 会分析您的 {% data variables.product.prodname_ghe_server %} 数据。 这些数据可能包括贵组织中有权了解如何使用个人数据之人的个人数据。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

有关 {% data variables.product.prodname_insights %} 管制条款的更多信息，请参阅您的 {% data variables.product.prodname_ghe_one %} 订阅协议。

为了避免产生疑问，上述任何信息都不应被视为 {% data variables.product.prodname_dotcom %} 提供的法律建议。 您有责任对这里提供的信息进行法律分析，并遵守隐私和数据保护法律。 是否使用 {% data variables.product.prodname_insights %} 来处理您的员工和用户的数据，完全由您决定，如果您选择处理，则要自行负责按照适用的法律进行处理。

### 组织的角色和责任

使用 {% data variables.product.prodname_insights %} 时，您的组织是数据控制方，因为您的组织决定是否、如何以及为什么 {% data variables.product.prodname_insights %} 会处理任何个人的个人数据。 您的组织完全负责确保您在使用 {% data variables.product.prodname_insights %} 处理数据时遵守所有适用的法律。

### 数据隐私建议

在开始使用 {% data variables.product.prodname_insights %} 之前，您可以完全控制要包含哪些指标、报告、仓库和贡献者。 您通过 {% data variables.product.prodname_insights %} 处理的数据只能从您安装的 {% data variables.product.prodname_ghe_server %} 中拉取。 考虑平衡分析个人数据的风险与优点。

- **制定一个清晰的分析计划**：您必须清楚地了解您想要分析的内容和分析的原因，然后考虑 {% data variables.product.prodname_insights %} 如何帮助您找到这些答案。

- **考虑数据保护影响评估**：如果您对 {% data variables.product.prodname_insights %} 的使用涉及处理个人数据，请考虑完成数据保护影响评估，或以其他方式完成对预期使用方式的正式法律分析。

### 决定要使用的数据

- **决定要包含的仓库**：在开始分析 {% data variables.product.prodname_insights %} 之前，请考虑要包含哪些仓库。 管理员可以在添加组织时包含仓库，并且可以随时启用和禁用仓库。 有关将组织添加到 {% data variables.product.prodname_insights %} 的更多信息，请参阅“[管理组织](/insights/installing-and-configuring-github-insights/managing-organizations)。 有关启用和禁用仓库的更多信息，请参阅“[管理仓库](/insights/installing-and-configuring-github-insights/managing-repositories)”。

- **决定要包含的指标和报告**：管理员可以随时对所有用户启用和禁用指标和报告。 管理员控制用户可在您的 {% data variables.product.prodname_ghe_server %} 安装中访问的 {% data variables.product.prodname_insights %} 数据。 更多信息请参阅“[管理可用的指标和报告](/insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports)”。

- **决定要包含的贡献者**：管理员可以禁止在指标和报告中处理特定贡献者的数据。 有关管理贡献者数据的更多信息，请参阅“[管理贡献者和团队](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)”。

### 用户权限

根据各种数据保护条例，例如通用数据保护条例 (GDPR)， 用户可能有权要求被排除在处理、访问和更正之外，或要求删除其个人数据。 作为数据控制方，您的组织应该评估特定用户请求是否有效，并在适当时采取行动满足该请求。

- **排除处理**：用户可能有权将其个人数据排除在处理之外。 管理员可以删除贡献者的数据而不在 {% data variables.product.prodname_insights %} 中处理，由此产生的报告和指标也会相应地排除该贡献者的数据。 更多信息请参阅“[管理贡献者和团队](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)”。

- **访问**：用户可能有权要求查看处理的个人数据。 每个指标和报告都详细说明了所处理的个人数据。 更多信息请参阅“[可用于 {% data variables.product.prodname_insights %} 的指标](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)”。 原始数据通过 {% data variables.product.prodname_enterprise %} API 提供。 您的组织负责作出处理个人数据的任何决定以及执行此类任何请求。

- **更正和删除**：用户可能有权更正或删除他们的个人数据。 {% data variables.product.prodname_insights %} 中使用的数据来自您在 {% data variables.product.prodname_ghe_server %} 安装中添加或生成的现有数据。 在更正和删除时，应遵循您的组织的现有流程更正和删除来自 {% data variables.product.prodname_ghe_server %} 的数据。

- **处理的透明度**：每个指标和报告都详细描述了所处理的个人数据。 更多信息请参阅“[可用于 {% data variables.product.prodname_insights %} 的指标](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)”。
