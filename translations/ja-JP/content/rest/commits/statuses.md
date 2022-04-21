---
title: コミットのステータス
intro: 'The status API allows external services to mark commits with an `error`, `failure`, `pending`, or `success` state, which is then reflected in pull requests involving those commits.'
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

Statuses can also include an optional `description` and `target_url`, and we highly recommend providing them as they make statuses much more useful in the GitHub UI.

As an example, one common use is for continuous integration services to mark commits as passing or failing builds using status.  The `target_url` would be the full URL to the build output, and the `description` would be the high level summary of what happened with the build.

ステータスには、どのサービスがそのステータスを提供しているかを示す `context` を含めることができます。 たとえば、継続的インテグレーションサービスのプッシュステータスに `ci` のコンテキストを、セキュリティ監査ツールのプッシュステータスに `security` のコンテキストを含めることができます。  You can then use the [Get the combined status for a specific reference](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the `repo` scope grants permission to code as well as statuses.

GitHub App を開発していて、外部サービスについて詳細な情報を提供したい場合は、[Checks API](/rest/reference/checks) を使用できます。
