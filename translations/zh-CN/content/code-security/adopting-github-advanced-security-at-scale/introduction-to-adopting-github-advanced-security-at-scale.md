---
title: 大规模采用 GitHub Advanced Security 简介
intro: '您可以按照行业和 GitHub 最佳实践在公司中大规模采用 {% data variables.product.prodname_GH_advanced_security %}。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 简介
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
---

## 关于这些文章

{% data variables.product.prodname_GH_advanced_security %} (GHAS) 可帮助团队使用集成工具（如机密扫描和使用 CodeQL 的代码扫描）更快地构建更安全的代码。 要了解通过 {% data variables.product.prodname_GH_advanced_security %} 提供的安全功能，请参阅“[关于 GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)”。

GHAS 是一套工具，需要整个企业的开发人员积极参与。 为了实现最佳的投资回报，您必须学习如何使用、应用和维护 GHAS。


我们创建了一种分阶段的 GHAS 部署方法，该方法根据行业和 GitHub 最佳实践开发。 根据我们帮助客户成功部署 {% data variables.product.prodname_GH_advanced_security %} 的经验，我们预计大多数客户都希望遵循这些阶段，但您可能需要修改此方法以满足公司的需求。

在大型组织中启用 GHAS 可以分为六个核心阶段。

1. [**与您的推广策略和目标保持一致**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)：想想成功会是什么样子，并就 GHAS 将在您的公司中实施的方式保持一致。 此阶段可能只需要几天或一周的时间，但它为其余的部署奠定了坚实的基础。

2. [**准备大规模启用**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)：准备开发人员，收集有关存储库的数据，并确保为下一阶段做好准备。

3. [**试点计划**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)：（可选）在一些高影响力的项目和团队试点初始部署。 这将允许贵公司内的初始小组熟悉 GHAS，然后再推广到公司的其余部分。

4. [**创建内部文档**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)：为 GHAS 的消费者创建和传达内部文档。 如果没有向开发人员、安全工程师和其他将使用 GHAS 的人提供适当的文档，价值将在推出中丢失。

5. [**推出和扩展 {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)：利用可用的 API，使用您之前收集的存储库数据，按团队和整个企业的语言自动推出 {% data variables.product.prodname_code_scanning %}。

6. [**推出和扩展 {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)：推出 {% data variables.product.prodname_secret_scanning %}，这涉及的配置更少，因此比 {% data variables.product.prodname_code_scanning %} 更容易采用。 尽管如此，制定处理新旧结果的策略仍然至关重要。

## {% data variables.contact.github_support %} 和 {% data variables.product.prodname_professional_services_team %}

如果您在实施过程中遇到任何问题或有任何疑问，可以搜索我们的文档以获取解决方案或与 {% data variables.contact.github_support %} 互动。 更多信息请参阅“[关于 GitHub 支持](/support/learning-about-github-support/about-github-support)”。

如果您希望在整个推出过程中获得指导，{% data variables.product.prodname_professional_services %} 可以与您合作，成功推出和实施 {% data variables.product.prodname_GH_advanced_security %}。 我们提供各种指导和支持选项。 我们还提供培训和训练营，以帮助您的公司优化 {% data variables.product.prodname_GH_advanced_security %} 的价值。

请与您的销售代表联系，了解有关所有可用专业服务选项的更多信息。 更多信息请联系 {% data variables.contact.contact_enterprise_sales %}。

{% note %}

有关本系列的第一篇文章，请参阅“[第 1 阶段：根据部署策略和目标保持一致](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)”。

{% endnote %}
