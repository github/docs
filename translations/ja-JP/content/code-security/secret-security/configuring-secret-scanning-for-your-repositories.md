---
title: リポジトリのシークレットスキャンを設定する
intro: '{% data variables.product.prodname_dotcom %} がリポジトリでシークレットをスキャンする方法を設定できます。'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注釈:** パブリックリポジトリについては、{% data variables.product.prodname_secret_scanning_caps %} はデフォルトで有効であり、これを無効にすることはできません。 {% data variables.product.prodname_secret_scanning %} はプライベートリポジトリに対してのみ設定できます。

{% endnote %}
{% endif %}

### {% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリへの {% data variables.product.prodname_secret_scanning %} を有効化する

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
You can enable {% data variables.product.prodname_secret_scanning %} for any repository that is owned by an organization.
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next"%}
4. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
   {% if currentVersion == "free-pro-team@latest" %}![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効化する](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
6. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. [{% data variables.product.prodname_secret_scanning_caps %}] と [**Enable**] ボタンが表示されている場合でも、[**Enable**] をクリックして {% data variables.product.prodname_secret_scanning %} を有効化する必要があります。 [**Disable**] ボタンが表示されている場合、{% data variables.product.prodname_secret_scanning %} はすでに有効化されています。 ![リポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効化する](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
   {% elsif currentVersion == "enterprise-server@3.0" %}
7. その場合、[{% data variables.product.prodname_secret_scanning_caps %}] の右にある [**Enable**] をクリックします。 ![リポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効化する](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}
{% if currentVersion == "github-ae@latest" %}
1. {% data variables.product.prodname_secret_scanning %} を有効化する前に、まず {% data variables.product.prodname_GH_advanced_security %} を有効化する必要があります。 その場合、[{% data variables.product.prodname_GH_advanced_security %}] の右にある [**Enable**] をクリックします。 ![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効化する](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. [**Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**] をクリックして、処理を確認します。 ![リポジトリに対する {% data variables.product.prodname_GH_advanced_security %} の有効化を確認する](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. その場合、[{% data variables.product.prodname_secret_scanning_caps %}] の右にある [**Enable**] をクリックします。 ![リポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効化する](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

### {% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリで {% data variables.product.prodname_secret_scanning %} からのアラートを除外する

*secret_scanning.yml* ファイルを使用して、{% data variables.product.prodname_secret_scanning %} からディレクトリを除外できます。 たとえば、テストまたはランダムに生成されたコンテンツを含むディレクトリを除外できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドに、*.github/secret_scanning.yml* と入力します。
4. [**Edit new file**] に `paths-ignore:` と入力してから、{% data variables.product.prodname_secret_scanning %} から除外するパスを入力します。
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    `*` などの特殊文字を使用して、パスをフィルタできます。 フィルタパターンに関する詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

    {% note %}

    **ノート:**
    - `paths-ignore` に 1,000 以上のエントリがある場合、{% data variables.product.prodname_secret_scanning %} は最初の 1,000 ディレクトリのみをスキャン対象から除外します。
    - *secret_scanning.yml* が 1MB 以上ある場合、{% data variables.product.prodname_secret_scanning %} はファイル全体を無視します。

    {% endnote %}

{% data variables.product.prodname_secret_scanning %} からの個々のアラートを無視することもできます。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)」を参照してください。

### 参考リンク

- 「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」
