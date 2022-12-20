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
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193082'
---
{% ifversion packages-registries-v2 %} パッケージに対する権限のスコープは、ユーザーまたは Organization に、あるいはリポジトリに設定できます。

## ユーザ/Organizationスコープのパッケージの詳細な権限

詳細な権限を持つパッケージは、個人ユーザもしくはOrganizationアカウントをスコープとします。 パッケージのアクセス制御と可視性は、パッケージに接続された（あるいはリンクされた）リポジトリは別個に変更できます。

次の {% data variables.product.prodname_registry %} レジストリでは、細かな権限がサポートされています。

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- npm レジストリ{% endif %} {% ifversion packages-nuget-v2 %}- NuGet レジストリ{% endif %}

{% endif %}

## {% ifversion packages-registries-v2 %}リポジトリスコープの{% endif %}パッケージに対する権限

{% ifversion packages-registries-v2 %}リポジトリスコープの{% endif %}パッケージでは、そのパッケージを所有するリポジトリの権限と可視性を継承します。 リポジトリをスコープとするパッケージは、リポジトリのメインページにアクセスし、ページ右にある **パッケージ** リンクをクリックすれば見つかります。 {% ifversion fpt or ghec %}詳細については、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。{% endif %}

{% ifversion packages-registries-v2 %} 次の {% data variables.product.prodname_registry %} レジストリでは、リポジトリ スコープの権限 **のみ** がサポートされています。

{% ifversion not fpt or ghec %}- Docker レジストリ (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm レジストリ{% endif %}
- RubyGemsレジストリ
- Apache Mavenレジストリ
- Gradle レジストリ {% ifversion packages-nuget-v2 %}{% else %}- NuGet レジストリ{% endif %}

{% ifversion ghes %}{% data variables.product.prodname_container_registry %}{% else %}他のレジストリ{% endif %}の場合、パッケージのスコープをユーザーまたは Organization に限定することも、パッケージをリポジトリにリンクさせることも選べます。 {% ifversion docker-ghcr-enterprise-migration %}{% data variables.product.prodname_container_registry %} への移行については、「[Docker レジストリからの {% data variables.product.prodname_container_registry %} への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)」をご覧ください。{% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## コンテナイメージの可視性とアクセス権限

{% data reusables.package_registry.visibility-and-access-permissions %}

詳細については、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% endif %}

## パッケージの管理

{% data reusables.package_registry.packages-classic-pat-only %}

パッケージ レジストリでホストされているパッケージを使用もしくは管理するためには、適切なスコープを持つ{% data variables.product.pat_v1 %}を使わなければならず、個人用アカウントが適切な権限を持っていなければなりません。

たとえば、次のように入力します。
-  リポジトリからパッケージをダウンロードしてインストールするには、{% data variables.product.pat_v1 %}に `read:packages` スコープが設定されていなければならず、ユーザー アカウントには読み取り権限が設定されていなければなりません。
- {% ifversion fpt or ghes or ghec %}{% data variables.product.product_name %} 上のパッケージを削除するには、ご利用の{% data variables.product.pat_v1 %}に少なくとも `delete:packages` および `read:packages` スコープが設定されている必要があります。 リポジトリをスコープとするパッケージには、`repo` スコープも必要です。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% elsif ghae %}{% data variables.product.product_name %} で指定したバージョンのパッケージを削除するには、ご利用の{% data variables.product.pat_v1 %}に `delete:packages` および `repo` スコープが設定されている必要があります。 詳細については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% endif %}

| Scope | 説明 | 必要な権限 |
| --- | --- | --- |
|`read:packages`| {% data variables.product.prodname_registry %}からのパッケージのダウンロードとインストール | 読み取り |
|`write:packages`| {% data variables.product.prodname_registry %}へのパッケージのアップロードと公開 | 書き込み |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} {% data variables.product.prodname_registry %}からのパッケージの削除{% elsif ghae %}{% data variables.product.prodname_registry %}からの指定したバージョンのパッケージの削除{% endif %} | admin |
| `repo` | パッケージをアップロードおよび削除する (`write:packages` または `delete:packages` と一緒に) | 書き込みもしくは読み取り |

{% data variables.product.prodname_actions %} ワークフローを作成する際には、`GITHUB_TOKEN` を使って {% data variables.product.prodname_registry %} にパッケージを公開してインストールでき、{% data variables.product.pat_generic %}を保存して管理する必要はありません。

詳細については、以下を参照してください: {% ifversion fpt or ghec %}
- "[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[{% data variables.product.prodname_actions %} を使用したパッケージの発行とインストール](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- [{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token/)
- "[利用できるスコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## {% data variables.product.prodname_actions %}ワークフローでのパッケージへのアクセスのメンテナンス

ワークフローがパッケージへのアクセスを確実に維持するためには、確実にワークフローで正しいアクセストークンを使用し、パッケージへの{% data variables.product.prodname_actions %}アクセスを有効化してください。

{% data variables.product.prodname_actions %} の概念的背景や、ワークフローでパッケージを使用する例については、「[GitHub Actions ワークフローを利用した GitHub Packages の管理](/packages/managing-github-packages-using-github-actions-workflows)」を参照してください。

### アクセス トークン  

- ワークフロー リポジトリに関連付けられているパッケージを発行するには、`GITHUB_TOKEN` を使用します。
- `GITHUB_TOKEN`がアクセスできない他のプライベート リポジトリに関連するパッケージをインストールするには、{% data variables.product.pat_v1 %}を使用してください

{% data variables.product.prodname_actions %} ワークフローで使用される `GITHUB_TOKEN` の詳細については、「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

{% ifversion fpt or ghec %}
### コンテナイメージに対する{% data variables.product.prodname_actions %}アクセス

ワークフローがコンテナイメージに確実にアクセスできるようにするには、ワークフローが実行されるリポジトリへの{% data variables.product.prodname_actions %}アクセスを有効化しなければなりません。 この設定は、パッケージの設定ページにあります。 詳細については、「[パッケージへのワークフローのアクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」を参照してください。

{% endif %}
