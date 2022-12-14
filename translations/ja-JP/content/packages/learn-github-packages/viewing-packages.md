---
title: パッケージの表示
intro: リポジトリに公開されたパッケージの詳細を表示し、Organization またはユーザごとに結果を絞り込むことができます。
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192842'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## リポジトリのパッケージを表示する

パッケージを見ることができるかどうかは、いくつかの要素に依存します。 デフォルトでは、公開したパッケージはすべて見ることができます。

{% ifversion packages-registries-v2 %} リポジトリを範囲とするパッケージは、そのパッケージを所有するリポジトリから権限と表示の有無を継承します。 リポジトリを範囲とするアクセス許可 **のみ** をサポートするレジストリもあります。 そのようなレジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)」を参照してください。

その他のレジストリは、個人ユーザーもしくは Organization アカウントが所有する各パッケージごとにカスタマイズできる、詳細な権限および表示の有無の設定のオプションを提供します。 細かなアクセス許可を利用することも、パッケージをリポジトリに接続し、そのリポジトリのアクセス許可を継承することもできます。 詳しくは、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」と「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% else %}

パッケージは、それがホストされているリポジトリのアクセス許可と表示の有無を継承します。 詳細については、「[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)」 ({% data variables.product.prodname_registry %} へのアクセス許可) を参照してください。

{% endif %}

{% data reusables.package_registry.package-page-info %}

## リポジトリのパッケージを表示する

特定のリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Organization のパッケージを表示する

自分が所属するOrganizationのリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 組織名の下にある {% octicon "package" aria-label="The package icon" %} **[パッケージ]** をクリックします。
{% data reusables.package_registry.navigate-to-packages %}

## パッケージを表示する

すべてのOrganization及びリポジトリで、自分が公開したパッケージを見つけて表示できます。 

{% data reusables.profile.access_profile %}
2. プロファイル ページの一番上のメイン ナビゲーションにある **[パッケージ]** をクリックします。
  ![[プロジェクト] タブ](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## 参考資料

- 「[パッケージを検索する](/search-github/searching-on-github/searching-for-packages)」
