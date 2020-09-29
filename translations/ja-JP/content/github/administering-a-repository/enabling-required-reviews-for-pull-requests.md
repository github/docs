---
title: プルリクエストの必須レビューを有効にする
intro: リポジトリの管理者は、必須レビューを施行し、プルリクエストのマージ前に特定の数の承認レビューが必要になるようにできます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

必須レビューをブランチで有効にする前に、ブランチを「保護されたブランチ」として設定する必要があります。 詳しい情報については[保護されたブランチの設定](/github/administering-a-repository/configuring-protected-branches)を参照してください。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. [**Require pull request reviews before merging**] を選択します。 ![プルリクエストレビューの制限チェックボックス](/assets/images/help/repository/PR-reviews-required.png)
6. [Required approving reviews] ドロップダウンメニューで、ブランチで必須にする承認レビューの数を選択します。 ![必須とするレビュー承認の数を選択するドロップダウンメニュー](/assets/images/help/repository/number-of-required-review-approvals.png)
7. オプションとして、[**Dismiss stale pull request approvals when new commits are pushed**] を選択します。 これにより、コードを修正するコミットがブランチにプッシュされる際に、プルリクエストの承認レビューが却下されます。 ![新たなコミットがチェックボックスにプッシュされた際に古いプルリクエストの承認を却下するチェックボックス](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. オプションとして、[**Require review from Code Owners**] を選択して、プルリクエストが指定されたオーナーがいるコードに影響を与える場合に、コードオーナーによるレビューを義務化します。 詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。 ![コードオーナーのレビューを必要とする](/assets/images/help/repository/PR-review-required-code-owner.png)
9. オプションとして、リポジトリが Organization の一部である場合、[**Restrict who can dismiss pull request reviews**] を選択して、プルリクエストのレビューを却下できるユーザまたはチームを検索して選択します。 詳しい情報については[プルリクエストレビューの却下](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)を参照してください。 このオプションは個人リポジトリでは使用できません。 ![[Restrict who can dismiss pull request reviews] チェックボックス](/assets/images/help/repository/PR-review-required-dismissals.png)
{% data reusables.repositories.include-administrators %}
11. ** Create（作成）**をクリックしてください。

### 参考リンク

- [プルリクエストのための必須レビューについて](/github/administering-a-repository/about-required-reviews-for-pull-requests)
- [保護されたブランチについて](/github/administering-a-repository/about-protected-branches)
- [ステータスチェック必須について](/github/administering-a-repository/about-required-status-checks)
