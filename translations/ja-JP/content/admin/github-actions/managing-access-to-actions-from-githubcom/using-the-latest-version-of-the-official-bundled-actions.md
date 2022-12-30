---
title: 公式のバンドルされたアクションの最新バージョンを使用する
intro: 'エンタープライズにバンドルされているアクションを更新することも、{% data variables.product.prodname_dotcom_the_website %} から直接アクションを使用することもできます。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107030'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Enterprise インスタンスには、ワークフローで使用できる組み込みアクションが多数含まれています。 バンドルされたアクションについて詳しくは、「[Enterprise インスタンスにバンドルされている公式アクション](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)」をご覧ください。

これらのバンドルされたアクションは、 https://github.com/actions で見つかる公式のアクションの特定時点におけるスナップショットであるため、これらのアクションの新しいバージョンを使用できる可能性があります。 `actions-sync` ツールを使ってこれらのアクションを更新するか、{% data variables.product.prodname_dotcom_the_website %} 上の最新アクションにアクセスできるように {% data variables.product.prodname_github_connect %} を構成することができます。 以降のセクションでは、これらのオプションについて説明します。

## `actions-sync` を使ってバンドルされたアクションを更新する

バンドルされたアクションを更新するには、`actions-sync` ツールを使ってスナップショットを更新できます。 `actions-sync` の使用について詳しくは、「[{% data variables.product.prodname_dotcom_the_website %} からアクションを手動で同期する](/admin/github-actions/manually-syncing-actions-from-githubcom)」をご覧ください。

## {% data variables.product.prodname_github_connect %} を使って最新のアクションにアクセスする

{% data variables.product.prodname_github_connect %} を使うと、{% data variables.product.product_name %} で {% data variables.product.prodname_dotcom_the_website %} のアクションを使用できます。 詳細については、「[{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にする](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

{% data variables.product.prodname_github_connect %} を構成したら、インスタンス上の `actions` Organization 内のローカル リポジトリを削除することで、アクションの最新バージョンを使用できます。 たとえば、Enterprise インスタンスで `actions/checkout` アクションの `v1` を使っていて、Enterprise インスタンスで使用できない `{% data reusables.actions.action-checkout %}` を使う必要がある場合は、次の手順のようにして、{% data variables.product.prodname_dotcom_the_website %} から最新の `checkout` アクションを使用できるようにします。

1. {% data variables.product.product_name %} の Enterprise 所有者アカウントから、*actions* Organization から削除するリポジトリに移動します (この例では `checkout`)。
1. 既定では、サイト管理者はバンドルされた *actions* Organization の所有者ではありません。 `checkout` リポジトリを削除するために必要なアクセス権を得るには、サイト管理ツールを使う必要があります。 そのリポジトリのページの右上隅にある {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
  ![サイト管理者の設定にアクセスするための宇宙船アイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. **[{% octicon "shield-lock" %} セキュリティ]** をクリックして、リポジトリのセキュリティの概要を表示します。
  ![リポジトリのセキュリティ ヘッダー](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. [特権アクセス] で、 **[ロック解除]** をクリックします。
  ![ロック解除ボタン](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. **[理由]** にリポジトリのロックを解除する理由を入力して、 **[ロック解除]** をクリックします。
  ![確認のダイアログ](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. リポジトリがロック解除されたので、サイト管理者ページから移動して、`actions` Organization 内のリポジトリを削除できます。 ページの上部にあるリポジトリ名 (この例では **checkout**) をクリックして、概要ページに戻ります。
  ![リポジトリ名のリンク](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. [リポジトリ情報] で、 **[コードの表示]** をクリックしてサイト管理者ページから移動し、`checkout` リポジトリを表示します。
1. `actions` Organization 内の `checkout` リポジトリを削除します。 リポジトリを削除する方法については、「[リポジトリの削除](/github/administering-a-repository/deleting-a-repository)」をご覧ください。
  ![[コードの表示] リンク](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. `{% data reusables.actions.action-checkout %}` を使うようにワークフローの YAML を構成します。
1. ワークフローが実行するたびに、ランナーは {% data variables.product.prodname_dotcom_the_website %} から指定されたバージョンの `actions/checkout` を使います。

   {% note %}

   **注:** `checkout` アクションが {% data variables.product.prodname_dotcom_the_website %} から初めて使われるとき、{% data variables.location.product_location %}で `actions/checkout` 名前空間が自動的に廃止されます。 アクションのローカル コピーを使うように戻したい場合は、最初に名前空間を廃止から削除する必要があります。 詳細については、「[{% data variables.product.prodname_dotcom_the_website%} でアクセスされたアクションの名前空間の自動廃止](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)」を参照してください。

   {% endnote %}
