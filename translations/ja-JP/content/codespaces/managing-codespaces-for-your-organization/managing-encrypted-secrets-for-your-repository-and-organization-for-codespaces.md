---
title: リポジトリの暗号化されたシークレットと Codespaces の Organization を管理する
shortTitle: Encrypted secrets
intro: 暗号化されたシークレットを使用すると、機密情報を Organization、リポジトリ、または {% data variables.product.prodname_codespaces %} に保存できます。
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Secret store
- Security
ms.openlocfilehash: 062b73c8559b700bdbd37a6b31da44403c2092f5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119894"
---
## <a name="about-secrets"></a>シークレットについて

シークレットは、Organization またはリポジトリで作成する暗号化された環境変数です。 作成したシークレットは、{% data variables.product.prodname_codespaces %} で使用できます。 GitHub では、[libsodium シール ボックス](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)を使用して、シークレットが GitHub に到達する前に暗号化し、codespace で使用する場合にのみ復号化します。

Organization レベルのシークレットを使用すると、複数のリポジトリ間でシークレットを共有できるため、重複するシークレットを作成する必要が軽減されます。 アクセスポリシーを使用して、Organization のシークレットを使用できるリポジトリを制御できます。 

{% data reusables.codespaces.secrets-on-start %}

### <a name="naming-secrets"></a>シークレットに名前を付ける

{% data reusables.codespaces.secrets-naming %} たとえば、リポジトリレベルで作成されたシークレットは、そのリポジトリ内で一意の名前である必要があり、Organization レベルで作成されたシークレットは、そのレベルで一意の名前である必要があります。

  {% data reusables.codespaces.secret-precedence %}

### <a name="limits-for-secrets"></a>シークレットの制限

Organization ごとに最大 100 個のシークレット、リポジトリごとに最大 100 個のシークレットを保存できます。

シークレットの容量は最大64 KBです。

## <a name="adding-secrets-for-a-repository"></a>リポジトリにシークレットを追加する

Organization リポジトリのシークレットを作成するには、管理者アクセス権が必要です。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. サイドバーの [セキュリティ] セクションで、 **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} [シークレット]** を選択し、 **{% data variables.product.prodname_codespaces %}** をクリックします。
2. ページの上部にある **[新しいリポジトリ シークレット]** をクリックします。
3. **[名前]** 入力ボックスにシークレットの名前を入力します。
4. シークレットの値を入力します。
5. **[シークレットの追加]** をクリックします。

## <a name="adding-secrets-for-an-organization"></a>Organization にシークレットを追加する

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
1. サイドバーの [セキュリティ] セクションで、 **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} [シークレット]** を選択し、 **{% data variables.product.prodname_codespaces %}** をクリックします。
2. ページの上部にある **[新しい Organization のシークレット]** をクリックします。
3. **[名前]** 入力ボックスにシークレットの名前を入力します。
4. シークレットの **[値]** を入力します。
5. **[リポジトリ アクセス]** ドロップダウン リストから、アクセス ポリシーを選択します。
    ![プライベート リポジトリが選択された [リポジトリ アクセス] リスト](/assets/images/help/codespaces/secret-repository-access.png)
6. **[シークレットの追加]** をクリックします。

## <a name="reviewing-access-to-organization-level-secrets"></a>Organizationレベルのシークレットへのアクセスの確認

Organization 内のシークレットに適用されているアクセスポリシーを確認できます。

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. シークレットのリストには、設定済みのアクセス許可とポリシーが含まれます。 次に例を示します。 ![シークレットの一覧](/assets/images/help/settings/actions-org-secrets-list.png)
1. 各シークレットに構成されているアクセス許可の詳細については、 **[更新]** をクリックします。

## <a name="further-reading"></a>参考資料

- 「[codespace の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」
