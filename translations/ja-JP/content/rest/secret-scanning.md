---
title: Secret scanning
intro: Use the Secret scanning API to retrieve and update secret alerts from a repository.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
---

{% data reusables.secret-scanning.api-beta %}

## About the Secret scanning API

{% data variables.product.prodname_secret_scanning %} APIを使うと{% ifversion fpt or ghec or ghes > 3.1 or ghae %}以下のことができます。

- リポジトリの{% data variables.product.prodname_secret_scanning %}{% if secret-scanning-push-protection %}及びプッシュ保護{% endif %}の有効化あるいは無効化。 詳しい情報については「[リポジトリ](/rest/reference/repos#update-a-repository)」を参照し、REST APIドキュメンテーションの「`security_and_analysis`のプロパティ」セクションを展開してください。
- リポジトリからの{% data variables.product.prodname_secret_scanning_GHAS %}アラートの取得と更新。 詳細については以下のセクションを参照してください。
{%- else %}リポジトリからの{% data variables.product.prodname_secret_scanning %}アラートの取得と更新ができます。{% endif %}

{% data variables.product.prodname_secret_scanning %} の詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」を参照してください。
