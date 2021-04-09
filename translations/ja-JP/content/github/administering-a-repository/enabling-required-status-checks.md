---
title: ステータスチェック必須の有効化
intro: リポジトリ管理者は、ブランチがプルリクエストでマージされる前、あるいはローカルブランチへのコミットが保護されたリモートブランチへプッシュされる前に、ステータスチェック必須を強制することができます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.protected-branches-options %}

ステータスチェック必須を有効にする前に、ステータス API を使用するようにリポジトリを設定する必要があります。 詳しい情報については、「[CI サーバーを構築する](/guides/building-a-ci-server/)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. [Protect matching branches] で、[**Require status checks to pass before merging**] を選択します。 ![必須ステータスチェックのオプション](/assets/images/help/repository/required-status-checks.png)
7. 必要に応じて、[**Require branches to be up to date before merging**] を選択します。 選択すると、ベースブランチ上でブランチが最新のコードでテストされるようにできます。 ![必須ステータスのチェックボックス、ゆるい、または厳格な](/assets/images/help/repository/protecting-branch-loose-status.png)
7. 使用可能なステータスチェックのリストから、必須とするものを選択します。 ![利用可能なステータスチェックの一覧](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. ** Create（作成）**をクリックしてください。

{% data reusables.repositories.required-status-merge-tip %}
