---
title: Secret scanning
intro: Secret scanning APIを使うと、リポジトリからシークレットアラートの取得と更新ができます。
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

## Secret scanning APIについて

{% data variables.product.prodname_secret_scanning %} APIを使うと以下のことができます。

- リポジトリの{% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %}及びプッシュ保護{% endif %}の有効化あるいは無効化。 詳しい情報については「[リポジトリ](/rest/repos/repos#update-a-repository)」を参照し、REST APIドキュメンテーションの「`security_and_analysis`のプロパティ」セクションを展開してください。
- リポジトリからの{% data variables.product.prodname_secret_scanning_GHAS %}アラートの取得と更新。 詳細については以下のセクションを参照してください。

{% data variables.product.prodname_secret_scanning %} の詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」を参照してください。
