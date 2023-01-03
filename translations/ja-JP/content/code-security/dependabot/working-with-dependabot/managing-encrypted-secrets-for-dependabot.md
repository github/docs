---
title: Dependabot に対する暗号化されたシークレットを管理する
intro: 'パスワードアクセストークンなどの機密情報を、暗号化されたシークレットとして保存し、{% data variables.product.prodname_dependabot %} 設定ファイルで参照することができます。'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106374'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## {% data variables.product.prodname_dependabot %} に対する暗号化されたシークレットについて

{% data variables.product.prodname_dependabot %} シークレットとは、Organization レベルまたはリポジトリレベルで作成する、暗号化された資格情報のことです。
シークレットを Organization レベルで追加した場合、そのシークレットにどのリポジトリがアクセスできるかを指定できます。 シークレットを使用して、プライベートパッケージレジストリにある依存関係を {% data variables.product.prodname_dependabot %} が更新できるようにすることができます。 シークレットを追加すると、それが {% data variables.product.prodname_dotcom %} に届く前に暗号化され、それを {% data variables.product.prodname_dependabot %} がプライベートパッケージレジストリにアクセスするために使用するまで暗号化されたままとなります。

{% data variables.product.prodname_dependabot %} シークレットを追加後は、_dependabot.yml_ 設定ファイルで {% raw %}`${{secrets.NAME}}`{% endraw %} のように参照できます。「NAME」は、シークレットに付けた名前としてください。 たとえば次のような点です。 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)」を参照してください。

### シークレットに名前を付ける

{% data variables.product.prodname_dependabot %} シークレットの名前には、以下の制限があります。
* 英数字 (`[A-Z]`、`[0-9]`) またはアンダースコア (`_`) のみを含めることができます。 スペースは使用できません。 小文字を入力すると、大文字に変換されます。
* `GITHUB_` プレフィックスで始めることはできません。
* 最初を数字にすることはできません。

## {% data variables.product.prodname_dependabot %} にリポジトリシークレットを追加する

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. **[新しいリポジトリ シークレット]** をクリックします。
1. **[名前]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. **[シークレットの追加]** をクリックします。

   シークレットの名前が、Dependabot シークレットのページに一覧表示されます。 **[更新]** をクリックしてシークレットの値を変更できます。 **[削除]** をクリックしてシークレットを削除できます。

   ![リポジトリシークレットの更新または削除](/assets/images/help/dependabot/update-remove-repo-secret.png)

## {% data variables.product.prodname_dependabot %} に Organization シークレットを追加する

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. **[新しい組織シークレット]** をクリックします。
1. **[名前]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **[値]** を入力します。
1. **[リポジトリアクセス]** ドロップダウンリストから、アクセスポリシーを選びます。
1. **[選択したリポジトリ]** を選択した場合は、次のようにします。

   * {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
   * このシークレットにアクセスできるリポジトリを選択します。 
     ![シークレットに対するリポジトリの選択](/assets/images/help/dependabot/secret-repository-access.png)
   * **[選択の更新]** をクリックします。

1. **[シークレットの追加]** をクリックします。

   シークレットの名前が、Dependabot シークレットのページに一覧表示されます。 **[更新]** をクリックしてシークレット値またはそのアクセスポリシーを変更できます。 **[削除]** をクリックしてシークレットを削除できます。

   ![Organization シークレットの更新または削除](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## レジストリのIP許可リストへの{% data variables.product.prodname_dependabot %}の追加

プライベートレジストリが IP 許可リストとともに設定されているなら、{% data variables.product.prodname_dependabot %}がレジストリへのアクセスに使う IP アドレスは、メタ API エンドポイントで `dependabot` の下にあります。 詳細については、「[メタ](/rest/reference/meta)」を参照してください。
