---
title: 必須コミット署名を有効にする
intro: リポジトリ管理者は、ブランチでコミット署名を必須として、署名および検証されていないすべてのコミットをブロックできます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

必須コミット署名をブランチで有効にする前に、まずブランチを保護されたブランチとして設定する必要があります。 詳しい情報については[保護されたブランチの設定](/github/administering-a-repository/configuring-protected-branches)を参照してください。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. [**Require signed commits**] を選択します。 ![[Require signed commits] オプション](/assets/images/help/repository/require-signed-commits.png)
6. オプションとして、[**Include administrators**] を選択します。 これにより、署名コミットがリポジトリの管理者に義務化されます。 ![[Include administrators] チェックボックス](/assets/images/help/repository/include-admins-protected-branches.png)
7. ** Create（作成）**をクリックしてください。
