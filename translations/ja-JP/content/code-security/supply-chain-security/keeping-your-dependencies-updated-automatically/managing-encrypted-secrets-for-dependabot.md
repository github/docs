---
title: Dependabot に対する暗号化されたシークレットを管理する
intro: 'パスワードアクセストークンなどの機密情報を、暗号化されたシークレットとして保存し、{% data variables.product.prodname_dependabot %} 設定ファイルで参照することができます。'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
versions:
  free-pro-team: '*'
---
### {% data variables.product.prodname_dependabot %} に対する暗号化されたシークレットについて

{% data variables.product.prodname_dependabot %} シークレットとは、Organization レベルまたはリポジトリレベルで作成する、暗号化された資格情報のことです。
シークレットを Organization レベルで追加した場合、そのシークレットにどのリポジトリがアクセスできるかを指定できます。 シークレットを使用して、プライベートパッケージレジストリにある依存関係を {% data variables.product.prodname_dependabot %} が更新できるようにすることができます。 シークレットを追加すると、それが {% data variables.product.prodname_dotcom %} に届く前に暗号化され、それを {% data variables.product.prodname_dependabot %} がプライベートパッケージレジストリにアクセスするために使用するまで暗号化されたままとなります。

{% data variables.product.prodname_dependabot %} シークレットを追加後は、_dependabot.yml_ 設定ファイルで {% raw %}`${{secrets.NAME}}`{% endraw %} のように参照できます。「NAME」は、シークレットに付けた名前としてください。 例:

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) 」を参照してください。

#### シークレットに名前を付ける

{% data variables.product.prodname_dependabot %} シークレットの名前には、以下の制限があります。
* 英数字 (`[A-Z]`, `[0-9]`)、(`_`) のみ含めることができます。 スペースは使用できません。 小文字を入力すると、大文字に変換されます。
* 名前の最初を `GITHUB_` プレフィックスにすることはできません。
* 最初を数字にすることはできません。

### {% data variables.product.prodname_dependabot %} にリポジトリシークレットを追加する

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. **New repository secret（新しいリポジトリのシークレット）**をクリックしてください。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. [**Add secret（シークレットの追加）**] をクリックします。

   シークレットの名前が、Dependabot シークレットのページに一覧表示されます。 [**Update**] をクリックすると、シークレットの値を変更できます。 [**Remove**] をクリックすると、シークレットを削除できます。

   ![リポジトリシークレットの更新または削除](/assets/images/help/dependabot/update-remove-repo-secret.png)

### {% data variables.product.prodname_dependabot %} に Organization シークレットを追加する

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. **New organization secret（新しいOrganizationのシークレット）**をクリックしてください。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。
1. [**Selected repositories**] を選択した場合、以下の手順に従います。

   * {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
   * このシークレットにアクセスできるリポジトリを選択します。 ![シークレットに対するリポジトリの選択](/assets/images/help/dependabot/secret-repository-access.png)
   * [**Update selection**] をクリックします。

1. [**Add secret（シークレットの追加）**] をクリックします。

   シークレットの名前が、Dependabot シークレットのページに一覧表示されます。 [**Update**] をクリックすると、シークレットの値やアクセスポリシーを変更できます。 [**Remove**] をクリックすると、シークレットを削除できます。

   ![Organization シークレットの更新または削除](/assets/images/help/dependabot/update-remove-repo-secret.png)
