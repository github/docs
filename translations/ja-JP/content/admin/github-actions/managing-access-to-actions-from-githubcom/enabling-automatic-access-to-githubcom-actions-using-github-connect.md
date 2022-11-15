---
title: GitHub Connect を使用して GitHub.com アクションへの自動アクセスを可能にする
intro: 'Enterprise 内の {% data variables.product.prodname_actions %} が {% data variables.product.prodname_dotcom_the_website %} のアクションを使用できるようにするには、Enterprise インスタンスを {% data variables.product.prodname_ghe_cloud %} に接続します。'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107262'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスについて

既定では、{% data variables.product.product_name %} の {% data variables.product.prodname_actions %} ワークフローでは、{% data variables.product.prodname_dotcom_the_website %} または [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) から直接アクションを使用することはできません。 {% data variables.product.prodname_dotcom_the_website %} のすべてのアクションをエンタープライズ インスタンスで使用できるようにするには、{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.product_name %} と {% data variables.product.prodname_ghe_cloud %} を統合できます。 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

または、エンタープライズで許可されるアクションをより厳密に制御する場合は、`actions-sync` ツールを使用してアクションを手動でダウンロードしてエンタープライズ インスタンスに同期できます。 詳細については、「[{% data variables.product.prodname_dotcom_the_website %} からアクションを手動で同期する](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)」を参照してください。

## {% data variables.product.prodname_github_connect %} を使用したアクションの解決について

{% data reusables.actions.github-connect-resolution %}

ユーザーが {% data variables.product.prodname_dotcom_the_website %} の組織とリポジトリ名に一致する組織とリポジトリを既にエンタープライズに作成している場合は、{% data variables.product.prodname_dotcom_the_website %} リポジトリの代わりに、エンタープライズ上のリポジトリが使用されます。 {% ifversion ghae %}悪意のあるユーザーがこの動作を利用して、ワークフローの一部としてコードを実行する可能性があります。{% else %}詳しくは、「[{% data variables.product.prodname_dotcom_the_website%} にアクセスされたアクションの名前空間の自動廃止](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)」をご覧ください。
{% endif %}

## すべての {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する

エンタープライズの {% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへのアクセスを有効にする前に、次を実行する必要があります。{% ifversion ghes %}
- {% data variables.location.product_location %}を構成して、{% data variables.product.prodname_actions %} を使います。 詳細については、「[GitHub Enterprise Server の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。
- {% data variables.product.prodname_github_connect %} を有効にする必要があります{% else %} を有効にする必要があります{% endif %}。 詳細については、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. [ユーザーはワークフローの実行で GitHub.com のアクションを利用できます] で、ドロップダウン メニューを使用して **[有効]** を選択します。
  ![ワークフロー実行内の GitHub.com からアクションへのドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## {% data variables.product.prodname_dotcom_the_website %} でアクセスされたアクションの名前空間の自動廃止

{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.product.prodname_actions %} は各アクションの {% data variables.location.product_location %}を検索してから {% data variables.product.prodname_dotcom_the_website%} にフォールバックするため、ユーザーから見た既存のワークフローの動作は変わりません。 これにより、エンタープライズが作成したアクションのカスタム バージョンが、{% data variables.product.prodname_dotcom_the_website%} の対応するアクションに優先して使用されるようになります。

{% data variables.product.prodname_dotcom_the_website %} でアクセスされるアクションの名前空間が自動的に廃止されると、{% data variables.location.product_location %}にアクセスできる悪意のあるユーザーによる中間者攻撃の可能性がブロックされます。 {% data variables.product.prodname_dotcom_the_website %} に対するアクションが初めて使用されると、その名前空間は {% data variables.location.product_location %}で廃止されます。 これにより、{% data variables.product.prodname_dotcom_the_website %} の組織とリポジトリ名に一致する組織とリポジトリをエンタープライズ内に作成しているすべてのユーザーがブロックされます。 これにより、ワークフローの実行時に、意図したアクションが常に実行されるようになります。

{% data variables.product.prodname_dotcom_the_website %} からのアクションを使用した後、同じ名前の {% data variables.location.product_location %}にアクションを作成する場合は、まず、その組織とリポジトリの名前空間を使用できるようにする必要があります。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左側のサイドバーの **[サイト管理者]** で、 **[廃止された名前空間]** をクリックします。
3. {% data variables.location.product_location %}で使用する名前空間を見つけて、 **[廃止の取り消し]** をクリックします。
   ![名前空間の廃止を取り消す](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. 関連する組織に移動し、新しいリポジトリを作成します。

   {% tip %}

   **ヒント:** 名前空間の廃止を取り消す場合は、できるだけ早くその名前の新しいリポジトリを必ず作成してください。 ローカル リポジトリを作成する前に、ワークフローが {% data variables.product.prodname_dotcom_the_website %} に関連付けられたアクションを呼び出した場合、名前空間は再び廃止されます。 頻繁に実行されるワークフローで使用されるアクションの場合、ローカル リポジトリを作成する前に名前空間が再び廃止される場合があります。 この場合、新しいリポジトリを作成するまで、関連するワークフローを一時的に無効にすることができます。

   {% endtip %}
