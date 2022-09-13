---
title: パッケージのインストール
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
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '145140523'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## パッケージのインストールについて

自分自身のプロジェクトにインストールできる{% data variables.product.prodname_registry %}内のパッケージを見つけるには、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}で検索できます。 詳細については、[{% data variables.product.prodname_registry %} のパッケージの検索](/search-github/searching-on-github/searching-for-packages)に関するページを参照してください。

パッケージを見つけたなら、そのパッケージの説明と、パッケージのページにあるインストールと利用方法の指示を読むことができます。

## パッケージのインストール

以下の同じ一般的なガイドラインに従って、{% ifversion fpt or ghae or ghec %}サポートされているいずれかのパッケージのクライアント{% else %}インスタンスで有効化しているパッケージのタイプ{% endif %}を使い、{% data variables.product.prodname_registry %} からパッケージをインストールできます。

1. 使用するパッケージクライアントについての指示に従って、{% data variables.product.prodname_registry %}の認証をしてください。 詳細については、「[GitHub Packages に対する認証](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)」を参照してください。
2. 使用するパッケージクライアントに関する指示に従って、パッケージをインストールしてください。

使用するパッケージ クライアントに特有の指示については、「[{% data variables.product.prodname_registry %} レジストリの利用](/packages/working-with-a-github-packages-registry)」を参照してください。
