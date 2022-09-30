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
ms.openlocfilehash: 75e3d0a69a06274e803fc59affc959b2cb5abee3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147704996'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## リポジトリのパッケージを表示する

パッケージを見ることができるかどうかは、いくつかの要素に依存します。 デフォルトでは、公開したパッケージはすべて見ることができます。

リポジトリをスコープとするパッケージは、そのパッケージを所有するリポジトリから権限と可視性を継承します。 以下のレジストリでは、この種類のアクセス許可 **のみ** が使用されます。{% ifversion not fpt or ghec %}
- Docker レジストリ (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm レジストリ{% endif %}
- RubyGemsレジストリ
- Apache Mavenレジストリ
- NuGetレジストリ

{% ifversion fpt or ghec %} {% data variables.product.prodname_ghcr_and_npm_registry %}では、個人ユーザーまたは組織アカウントが所有する各パッケージごとにカスタマイズできる、細かいアクセス許可と可視性設定のオプションが提供されます。 詳細な権限を利用することも、パッケージをレジストリに接続してその権限を継承することもできます。 詳細については、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。
{% endif %}

詳細については、「[GitHub Packages の権限について](/packages/learn-github-packages/about-permissions-for-github-packages){% ifversion fpt or ghec %}」および「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility){% endif %}」を参照してください。

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
