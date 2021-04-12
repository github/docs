---
title: ブランチ制限の有効化
intro: 'You can enforce branch restrictions so that only certain users, teams, or apps can push to a protected branch in repositories owned by your organization.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Organization 所有のリポジトリに対する管理者権限があるユーザは、ブランチ制限を有効化できます。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. [Protect matching branches] で、[**Restrict who can push to matching branches**] を選択します。 ![ブランチ制限のチェックボックス](/assets/images/help/repository/restrict-branch.png)
8. Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![ブランチ制限の検索](/assets/images/help/repository/restrict-branch-search.png)
9. ** Create（作成）**をクリックしてください。

### 参考リンク

- [保護されたブランチについて](/github/administering-a-repository/about-protected-branches)
- [保護されたブランチの設定](/github/administering-a-repository/configuring-protected-branches)
- [ステータスチェック必須について](/github/administering-a-repository/about-required-status-checks)
- [ステータスチェック必須の有効化](/github/administering-a-repository/enabling-required-status-checks)
