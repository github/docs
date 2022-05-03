---
title: 依存関係のレビュー
intro: 'The Dependency review API allows you to understand dependency changes, and the security impact of these changes, before you add them to your environment.'
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

## About the Dependency review API

{% data reusables.dependency-review.dependency-review-api-beta-note %}

Dependency Review APIを使うと、依存関係の変更や、それらの変更のセキュリティへの影響を理解することが、依存関係を環境に追加する前に行えます。 リポジトリの2つのコミット間の依存関係のdiffをを、既知の脆弱性を伴うバージョンアップデートに対する脆弱性のデータを含めて見ることができます。 依存関係レビューに関する詳しい情報については「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。
