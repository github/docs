---
title: プライベートリポジトリのシークレットスキャンの設定
intro: '{% data variables.product.product_name %} のプライベートリポジトリでのシークレットのスキャン方法を設定できます。'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'プライベートリポジトリの管理者権限を持つユーザは、リポジトリの {% data variables.product.prodname_secret_scanning %} を有効にできます。'
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} を有効化する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [シークレットスキャンニング] の右側にある [**有効化**] をクリックします。 ![リポジトリのシークレットスキャンを有効化する](/assets/images/help/repository/enable-secret-scanning.png)

### プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} からアラートを除外する

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

{% data variables.product.prodname_secret_scanning %} からの個々のアラートを無視することもできます。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)」を参照してください。

### 参考リンク

- 「[Organization の {% data variables.product.prodname_secret_scanning %} を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)」
