---
title: コミット
intro: 'The commits API allows you to list, view, and compare commits in a repository. You can also interact with commit comments and commit statuses.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## コミットのコメント

### コミットコメントのカスタムメディアタイプ

以下がコミットコメントでサポートされているメディアタイプです。 API におけるメディアタイプの使用に関する詳細は、[こちら](/rest/overview/media-types)を参照してください。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コミットのステータス

ステータス API を使用すると、外部サービスがコミットに `error`、 `failure`、`pending`、`success` ステータスを付けることができ、このステータスはコミットが含まれるプルリクエストに反映されます。

ステータスには、オプションとして `description` と `target_url` を含めることもできます。これにより GitHub UI でステータスをより有用なものにできるので、非常におすすめです。

たとえば、継続的インテグレーションサービスの典型的な使用方法の一つが、ステータスを使用してコミットに合格と不合格の印を付けることです。  `target_url` でビルドの出力先の完全な URL、`description` でビルドで発生したことの概要を示すといったようにします。

ステータスには、どのサービスがそのステータスを提供しているかを示す `context` を含めることができます。 たとえば、継続的インテグレーションサービスのプッシュステータスに `ci` のコンテキストを、セキュリティ監査ツールのプッシュステータスに `security` のコンテキストを含めることができます。  その後、[特定のリファレンス複合的なステータス](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)を使用して、コミットの全体のステータスを取得できます。

`repo` スコープはコードにもステータスにもアクセス権を付与するのに対し、`repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) はステータスのみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

GitHub App を開発していて、外部サービスについて詳細な情報を提供したい場合は、[Checks API](/rest/reference/checks) を使用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}
