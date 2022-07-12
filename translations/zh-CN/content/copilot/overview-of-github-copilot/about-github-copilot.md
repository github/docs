---
title: 关于 GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} 可以通过提供自动完成样式的建议来帮助您编写代码。 您可以了解使用 {% data variables.product.prodname_copilot %} 时要考虑的事项，以及 {% data variables.product.prodname_copilot %} 的工作原理。'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: 关于 GitHub Copilot
---

## 关于 {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} 是一个 AI 对编程工具，可在您编写代码时提供自动完成样式的建议。 您可以通过开始编写要使用的代码，或编写描述您希望代码执行的操作的自然语言注释，以接收来自 {% data variables.product.prodname_copilot %} 的建议。 {% data variables.product.prodname_copilot %} 分析您正在编辑的文件中的上下文以及相关文件，并从文本编辑器中提供建议。

{% data variables.product.prodname_copilot %} 经过优化，可帮助您编写 Python、JavaScript、TypeScript、Ruby、Go、C# 或 C++。 您还可以使用 {% data variables.product.prodname_copilot %} 以其他语言和各种框架生成建议。 {% data variables.product.prodname_copilot %} 由 OpenAI Codex 提供支持，OpenAI Codex 是由 OpenAI 创建的新 AI 系统。

{% data variables.product.prodname_copilot %} 可作为 IDE 的 Visual Studio Code、Visual Studio、Neovim 和 JetBrains 套件的扩展。 更多信息请参阅“[开始使用 {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot)”。

## 使用 {% data variables.product.prodname_copilot %}

您可以看到实际 {% data variables.product.prodname_copilot %} 运作的示例。 更多信息请参阅 [{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 网站。

GitHub Copilot 从 OpenAI 构建自数十亿行开源代码的模型提供建议。 因此，{% data variables.product.prodname_copilot %} 的训练集可能包含不安全的编码模式、错误或对过时 API 或习语的引用。 当 {% data variables.product.prodname_copilot %} 基于此训练数据生成建议时，这些建议也可能包含不需要的模式。

您有责任确保代码的安全性和质量。 我们建议您在使用由 {% data variables.product.prodname_copilot %} 生成的代码时采取与使用您自己未编写的任何代码时相同的预防措施。 这些预防措施包括严格的测试、IP 扫描和安全漏洞跟踪。 {% data variables.product.company_short %} 提供了许多功能来帮助您监控和提高代码质量，例如 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_dependabot %}、{% data variables.product.prodname_codeql %} 和 {% data variables.product.prodname_code_scanning %}。 所有这些功能都可以在公共存储库中免费使用。 更多信息请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)”和“[{% data variables.product.company_short %} 安全功能](/code-security/getting-started/github-security-features)”。

{% data variables.product.prodname_copilot %} 使用过滤器来阻止提示中的冒犯性单词，并避免在敏感上下文中生成建议。 我们致力于不断改进过滤系统，以更智能地检测和删除由 {% data variables.product.prodname_copilot %} 产生的令人反感的建议，包括有偏见、歧视性或滥用性的输出。 如果您看到 {% data variables.product.prodname_copilot %} 生成的攻击性建议，请直接向 copilot-safety@github.com 报告该建议，以便我们改进保护措施。

## 关于 {% data variables.product.prodname_copilot %} 的计费

{% data variables.product.prodname_copilot %} 是一项付费功能，需要按月或按年订阅。 {% data variables.product.prodname_dotcom %} 上经过验证的常用开源项目的学生和维护者有资格免费使用 {% data variables.product.prodname_copilot %}。 如果您符合免费 {% data variables.product.prodname_copilot %} 订阅的条件，则当您访问 {% data variables.product.prodname_copilot %} 订阅页面时，系统会自动通知您。 如果您不符合免费 {% data variables.product.prodname_copilot %} 订阅的条件，您将获得 60 天免费试用，之后需要付费订阅才能继续使用。 更多信息请参阅“[关于 {% data variables.product.prodname_copilot %} 的计费](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)”。

## 关于 JetBrains IDE 中 {% data variables.product.prodname_copilot %} 插件的许可证

{% data variables.product.prodname_dotcom %}, Inc. 是 JetBrains 插件的许可方。 此插件的最终用户许可协议是[{% data variables.product.prodname_dotcom %} 附加产品和功能条款](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)，使用此插件受这些条款的约束。 JetBrains 对插件或此类协议不承担任何责任或义务。 使用插件即表示您同意上述条款。

## 延伸阅读

- “[{% data variables.product.company_short %} 附加产品和功能条款](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)”
