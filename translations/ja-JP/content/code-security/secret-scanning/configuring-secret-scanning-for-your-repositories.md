---
title: リポジトリのシークレットスキャンを設定する
intro: '高度なセキュリティパターンにマッチするシークレットを探して{% data variables.product.prodname_dotcom %}がどのようにリポジトリをスキャンするかを設定できます。'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: シークレットスキャンの設定
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## {% data variables.product.prodname_secret_scanning_GHAS %} の有効化

{% data variables.product.prodname_secret_scanning_GHAS %}は、Organizationが所有する任意のリポジトリで有効化できます。 有効化されると、{% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. If {% data variables.product.prodname_advanced_security %}がまだリポジトリで有効化されていなければ、"{% data variables.product.prodname_GH_advanced_security %}" の右で**Enable（有効化）**をクリックしてください。
   {% ifversion fpt or ghec %}![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効化する](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif ghes or ghae %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. {% data variables.product.prodname_advanced_security %}の有効化の影響をレビューしてから、**Enable {% data variables.product.prodname_GH_advanced_security %} for this repository（このリポジトリで有効化）**をクリックしてください。
6. {% data variables.product.prodname_advanced_security %}を有効化すると、Organizationの設定によってはリポジトリで{% data variables.product.prodname_secret_scanning %}が自動的に有効化されることがあります。 [{% data variables.product.prodname_secret_scanning_caps %}] と [**Enable**] ボタンが表示されている場合でも、[**Enable**] をクリックして {% data variables.product.prodname_secret_scanning %} を有効化する必要があります。 [**Disable**] ボタンが表示されている場合、{% data variables.product.prodname_secret_scanning %} はすでに有効化されています。 ![リポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効化する](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
{% ifversion secret-scanning-push-protection %}
7. あるいは、プッシュ保護を有効化したい場合は、"Push protection（プッシュ保護）"の右にある**Enable（有効化）**をクリックしてください。 {% data reusables.secret-scanning.push-protection-overview %} 詳しい情報については「[{% data variables.product.prodname_secret_scanning %}でのプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。 ![リポジトリでのプッシュ保護の有効化](/assets/images/help/repository/secret-scanning-enable-push-protection.png)
{% endif %}
{% ifversion ghae %}
1. {% data variables.product.prodname_secret_scanning %} を有効化する前に、まず {% data variables.product.prodname_GH_advanced_security %} を有効化する必要があります。 その場合、[{% data variables.product.prodname_GH_advanced_security %}] の右にある [**Enable**] をクリックします。 ![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効化する](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. [**Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**] をクリックして、処理を確認します。 ![リポジトリに対する {% data variables.product.prodname_GH_advanced_security %} の有効化を確認する](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. その場合、[{% data variables.product.prodname_secret_scanning_caps %}] の右にある [**Enable**] をクリックします。 ![リポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効化する](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

## {% data variables.product.prodname_secret_scanning_GHAS %}からのディレクトリの除外

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

## 参考リンク

- 「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」
- "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"
