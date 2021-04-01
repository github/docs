---
title: Managing encrypted secrets for Dependabot
intro: You can store sensitive information, like passwords and access tokens, as encrypted secrets and then reference these in the {% data variables.product.prodname_dependabot %} configuration file.
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
versions:
  free-pro-team: '*'
---

### About encrypted secrets for {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} secrets are encrypted credentials that you create at either the organization level or the repository level.
When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow {% data variables.product.prodname_dependabot %} to update dependencies located in private package registries. When you add a secret it's encrypted before it reaches {% data variables.product.prodname_dotcom %} and it remains encrypted until it's used by {% data variables.product.prodname_dependabot %} to access a private package registry.

After you add a {% data variables.product.prodname_dependabot %} secret, you can reference it in the _dependabot.yml_ configuration file like this: {% raw %}`${{secrets.NAME}}`{% endraw %}, where "NAME" is the name you chose for the secret. 例:

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) 」を参照してください。

#### シークレットに名前を付ける

The name of a {% data variables.product.prodname_dependabot %} secret:
* Can only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). スペースは使用できません。 If you enter lowercase letters these are changed to uppercase.
* Must not start with the `GITHUB_` prefix.
* Must not start with a number.

### Adding a repository secret for {% data variables.product.prodname_dependabot %}

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. **New repository secret（新しいリポジトリのシークレット）**をクリックしてください。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの値を入力します。
1. [**Add secret（シークレットの追加）**] をクリックします。

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value. You can click **Remove** to delete the secret.

   ![Update or remove a repository secret](/assets/images/help/dependabot/update-remove-repo-secret.png)

### Adding an organization secret for {% data variables.product.prodname_dependabot %}

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
1. If you chose **Selected repositories**:

   * {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
   * Choose the repositories that can access this secret. ![Select repositories for this secret](/assets/images/help/dependabot/secret-repository-access.png)
   * Click **Update selection**.

1. [**Add secret（シークレットの追加）**] をクリックします。

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value or its access policy. You can click **Remove** to delete the secret.

   ![Update or remove an organization secret](/assets/images/help/dependabot/update-remove-repo-secret.png)
