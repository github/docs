---
title: 必需状态检查的类型
intro: 您可以将必需状态检查设置为“宽松”或“严格”。 您选择的必需状态检查类型确定合并之前是否需要使用基础分支将您的分支保持最新状态。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/types-of-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

| 必需状态检查的类型 | 设置                                                                              | 合并要求                         | 考虑因素                                                                          |
| --------- | ------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| **严格**    | 选中 **Require branches to be up-to-date before merging（合并前需要分支保持最新状态）**复选框。      | 在合并之前，**必须**使用基础分支使分支保持最新状态。 | 这是必需状态检查的默认行为。 可能需要更多构建，因为在其他协作者将拉取请求合并到受保护基础分支后，您需要使头部分支保持最新状态。              |
| **宽松**    | **不**选中 **Require branches to be up-to-date before merging（合并前需要分支保持最新状态）**复选框。 | 在合并之前，**不**必使用基础分支使分支保持最新状态。 | 您将需要更少的构建，因为在其他协作者合并拉取请求后，您不需要使头部分支保持最新状态。 如果存在与基础分支不兼容的变更，则在合并分支后，状态检查可能会失败。 |
| **已禁用**   | **不**选中 **Require status checks to pass before merging（合并前需要状态检查通过）**复选框。       | 分支没有合并限制。                    | 如果未启用必需状态检查，协作者可以随时合并分支，无论它是否使用基础分支保持最新状态。 这增加了不兼容变更的可能性。                     |

### 延伸阅读

- "[关于必需状态检查](/articles/about-required-status-checks)"
- "[启用必需状态检查](/articles/enabling-required-status-checks)"
