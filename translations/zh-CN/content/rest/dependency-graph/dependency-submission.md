---
title: 依赖项提交
intro: 依赖项提交 API 允许您提交项目的依赖项，例如在构建或编译项目时解析的依赖项。
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
---

## 关于依赖项提交 API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

依赖项以快照的形式提交到依赖项提交 API。 快照是一组与提交 SHA 和其他元数据关联的依赖项，它反映了提交存储库的当前状态。  可以选择使用预制操作或创建自己的操作，以便在每次生成项目时以所需的格式将依赖项提交到依赖项提交 API。 有关使用依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。

可以将多组依赖项提交到依赖项提交 API，以包含在依赖关系图中。 该 API 使用 `job.correlator` 属性和快照的 `detector.name` 类别来确保显示每个工作流程的最新提交。 `correlator` 属性本身是将用于使独立提交保持不同的主字段。 示例 `correlator` 可以是操作运行中可用的两个变量的简单组合： `<GITHUB_WORKFLOW> <GITHUB_JOB>`。
