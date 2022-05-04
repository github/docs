---
title: コミットのステータス
intro: 'The Commit status API allows external services to mark commits with a status, which is then reflected in pull requests involving those commits.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Commit statuses API

The Commit status API allows external services to mark commits with an `error`, `failure`, `pending`, or `success` state, which is then reflected in pull requests involving those commits. ステータスには、オプションとして `description` と `target_url` を含めることもできます。これにより GitHub UI でステータスをより有用なものにできるので、強くおすすめします。

たとえば、継続的インテグレーションサービスの典型的な使用方法の一つが、ステータスを使用してコミットに成功もしくは失敗のビルドとマークすることです。  `target_url` でビルドの出力先の完全な URL、`description` でビルドで発生したことの概要を示すといったようにします。

ステータスには、どのサービスがそのステータスを提供しているかを示す `context` を含めることができます。 たとえば、継続的インテグレーションサービスのプッシュステータスに `ci` のコンテキストを、セキュリティ監査ツールのプッシュステータスに `security` のコンテキストを含めることができます。  その後、[特定リファレンスの複合的なステータス](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)を使用して、コミットの全体のステータスを取得できます。

`repo` スコープはコードにもステータスにもアクセス権を付与するのに対し、`repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) はステータスのみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

GitHub App を開発していて、外部サービスについて詳細な情報を提供したい場合は、[Checks API](/rest/reference/checks) を使用できます。
