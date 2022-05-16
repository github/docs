---
title: 依赖项审查
intro: 通过依赖项审查 API，您可以在将这些更改添加到环境之前了解依赖项更改以及这些更改的安全影响。
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: issue-6396
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## 关于依赖项审查 API

{% data reusables.dependency-review.dependency-review-api-beta-note %}

通过依赖项审查 API，您可以在将这些更改添加到环境之前了解依赖项更改以及这些更改的安全影响。 您可以查看存储库的两次提交之间的依赖项差异，包括具有已知漏洞的任何版本更新的漏洞数据。 有关依赖项审查的详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。
