---
title: 依赖项审查
intro: 'The Dependency Review API allows you to understand dependency changes, and the security impact of these changes, before you add them to your environment.'
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

## 依赖项审查

{% data reusables.dependency-review.dependency-review-api-beta-note %}

The Dependency Review API allows you to understand dependency changes, and the security impact of these changes, before you add them to your environment. You can view the diff of dependencies between two commits of a repository, including vulnerability data for any version updates with known vulnerabilities. 有关依赖项审查的详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。
