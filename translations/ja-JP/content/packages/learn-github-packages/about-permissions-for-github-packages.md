---
title: GitHub Packagesの権限について
intro: パッケージの権限の管理方法を学んでください。
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 1663fa3bfc8fd6149e43fd9cf09a8362739c7341
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147704940'
---
{% ifversion fpt or ghec %} パッケージの権限は、リポジトリ スコープかユーザー/組織スコープです。
{% endif %}

## リポジトリスコープのパッケージの権限

リポジトリスコープのパッケージは、パッケージを所有するリポジトリの権限と可視性を継承します。 リポジトリをスコープとするパッケージは、リポジトリのメインページにアクセスし、ページ右にある **パッケージ** リンクをクリックすれば見つかります。 {% ifversion fpt or ghec %}詳細については、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。{% endif %}

以下の {% data variables.product.prodname_registry %} レジストリでは、リポジトリ スコープのアクセス許可 **のみ** を使います。

  {% ifversion not fpt or ghec %}- Docker レジストリ (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm レジストリ{% endif %}
  - RubyGemsレジストリ
  - Apache Mavenレジストリ
  - NuGetレジストリ

{% ifversion packages-npm-v2 %}{% data variables.product.prodname_ghcr_and_npm_registry %}の場合、パッケージのスコープをユーザー、組織に設定、またはリポジトリにリンクすることを許可できます。{% endif %}

{% ifversion fpt or ghec %}
## ユーザ/Organizationスコープのパッケージの詳細な権限

詳細な権限を持つパッケージは、個人ユーザもしくはOrganizationアカウントをスコープとします。 パッケージのアクセス制御と可視性は、パッケージに接続された（あるいはリンクされた）リポジトリは別個に変更できます。

現在のところ、{% data variables.product.prodname_ghcr_and_npm_registry %}でコンテナ イメージ パッケージに関する細かいアクセス許可を提供しています。

## コンテナイメージの可視性とアクセス権限

{% data reusables.package_registry.visibility-and-access-permissions %}

詳細については、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% endif %}

## パッケージの管理

パッケージ レジストリでホストされているパッケージを使用もしくは管理するためには、適切なスコープを持つトークンを使わなければならず、個人用アカウントが適切な権限を持っていなければなりません。

次に例を示します。
-  リポジトリからパッケージをダウンロードしてインストールするには、トークンに `read:packages` スコープが設定されていなければならず、ユーザー アカウントには読み取り権限が設定されていなければなりません。
- {% ifversion fpt or ghes or ghec %}{% data variables.product.product_name %} 上のパッケージを削除するには、ご利用のトークンに少なくとも `delete:packages` および `read:packages` スコープが設定されている必要があります。 リポジトリをスコープとするパッケージには、`repo` スコープも必要です。 詳細については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% elsif ghae %}{% data variables.product.product_name %} で指定したバージョンのパッケージを削除するには、ご利用のトークンに `delete:packages` および `repo` スコープが設定されている必要があります。 詳細については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% endif %}

| Scope | 説明 | 必要な権限 |
| --- | --- | --- |
|`read:packages`| {% data variables.product.prodname_registry %}からのパッケージのダウンロードとインストール | 読み取り |
|`write:packages`| {% data variables.product.prodname_registry %}へのパッケージのアップロードと公開 | 書き込み |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} {% data variables.product.prodname_registry %}からのパッケージの削除{% elsif ghae %}{% data variables.product.prodname_registry %}からの指定したバージョンのパッケージの削除{% endif %} | admin |
| `repo` | パッケージをアップロードおよび削除する (`write:packages` または `delete:packages` と一緒に) | 書き込みもしくは読み取り |

{% data variables.product.prodname_actions %} ワークフローを作成する際には、`GITHUB_TOKEN` を使って {% data variables.product.prodname_registry %} にパッケージを公開してインストールでき、個人用アクセス トークンを保存して管理する必要はありません。

詳細については、以下を参照してください: {% ifversion fpt or ghec %}
- "[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[{% data variables.product.prodname_actions %} を使用したパッケージの発行とインストール](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- 「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)」
- "[利用できるスコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## {% data variables.product.prodname_actions %}ワークフローでのパッケージへのアクセスのメンテナンス

ワークフローがパッケージへのアクセスを確実に維持するためには、確実にワークフローで正しいアクセストークンを使用し、パッケージへの{% data variables.product.prodname_actions %}アクセスを有効化してください。

{% data variables.product.prodname_actions %} の概念的背景や、ワークフローでパッケージを使用する例については、「[GitHub Actions ワークフローを利用した GitHub Packages の管理](/packages/managing-github-packages-using-github-actions-workflows)」を参照してください。

### アクセス トークン  

- ワークフロー リポジトリに関連付けられているパッケージを発行するには、`GITHUB_TOKEN` を使用します。
- `GITHUB_TOKEN`がアクセスできない他のプライベート リポジトリに関連するパッケージをインストールするには、個人用アクセス トークンを使用してください。

{% data variables.product.prodname_actions %} ワークフローで使用される `GITHUB_TOKEN` の詳細については、「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

{% ifversion fpt or ghec %}
### コンテナイメージに対する{% data variables.product.prodname_actions %}アクセス

ワークフローがコンテナイメージに確実にアクセスできるようにするには、ワークフローが実行されるリポジトリへの{% data variables.product.prodname_actions %}アクセスを有効化しなければなりません。 この設定は、パッケージの設定ページにあります。 詳細については、「[パッケージへのワークフローのアクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」を参照してください。

{% endif %}
