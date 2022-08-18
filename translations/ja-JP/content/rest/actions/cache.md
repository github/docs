---
title: GitHub Actionsキャッシュ
allowTitleToDifferFromFilename: true
shortTitle: キャッシュ
intro: '{% data variables.product.prodname_actions %} Cache APIを使うと、リポジトリの{% data variables.product.prodname_actions %}キャッシュに対するクエリと管理ができます。'
topics:
  - API
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.4'
---

## Cache APIについて

{% data variables.product.prodname_actions %} Cache APIを使うと、リポジトリの{% data variables.product.prodname_actions %}キャッシュに対するクエリと管理ができます。 {% ifversion actions-cache-management %}{% data variables.product.prodname_cli %}機能拡張をインストールして、コマンドラインからキャッシュを管理することもできます。 {% endif %}詳しい情報については「[ワークフローを高速化するための依存関係のキャッシング](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#managing-caches)」を参照してください。
