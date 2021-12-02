---
title: パッケージをインストールする
intro: '{% data variables.product.prodname_registry %}からパッケージをインストールし、そのパッケージを自分のプロジェクトの依存関係として使うことができます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## パッケージのインストールについて

You can search on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to find packages in {% data variables.product.prodname_registry %} that you can install in your own project. 詳しい情報については「[パッケージを{% data variables.product.prodname_registry %}で検索する](/search-github/searching-on-github/searching-for-packages)」を参照してください。

パッケージを見つけたなら、そのパッケージの説明と、パッケージのページにあるインストールと利用方法の指示を読むことができます。

## パッケージをインストールする

以下の同じ一般的なガイドラインに従って、{% ifversion fpt or ghae or ghec %}サポートされているいずれかのパッケージのクライアント{% else %}インスタンスで有効化しているパッケージのタイプ{% endif %}を使い、{% data variables.product.prodname_registry %} からパッケージをインストールできます。

1. 使用するパッケージクライアントについての指示に従って、{% data variables.product.prodname_registry %}の認証をしてください。 詳しい情報については「[GitHub Packagesでの認証](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)」を参照してください。
2. 使用するパッケージクライアントに関する指示に従って、パッケージをインストールしてください。

使用するパッケージクライアントに特有の指示については、「[{% data variables.product.prodname_registry %}の利用](/packages/working-with-a-github-packages-registry)」を参照してください。
