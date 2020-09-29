---
title: 直線状のコミット履歴をリクエストする
intro: 保護されたブランチからのすべてのマージコミットをブロックするには、直線状のコミット履歴をリクエストできます。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

リポジトリに対する管理者権限を持つ人は誰でも、直線状のコミット履歴が必要になる可能性があります。

### 直線状のコミット履歴の適用について

直線状のコミット履歴を適用すると、マージコミットが保護されたブランチにプッシュされなくなります。 つまり、保護されたブランチにマージされたプルリクエストは、squash マージまたはリベースマージを使用する必要があります。 厳格な直線状のコミット履歴は、Team が変更をより効率的にバックトラックするのに役立ちます。 マージ方法に関する詳しい情報については「[プルリクエストマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)」を参照してください。

{% data reusables.repositories.protected-branches-options %}

直線状のコミット履歴をリクエストする前に、リポジトリで squash マージまたはリベースマージを許可する必要があります。 詳しい情報については、「[プルリクエストマージを設定する](/github/administering-a-repository/configuring-pull-request-merges)」を参照してください。


### 直線状のコミット履歴を適用する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. [Protect matching branches] で、[**Require linear history**] を選択します。 ![必須の直線状の履歴オプション](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. ** Create（作成）**をクリックしてください。
