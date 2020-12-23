---
title: リポジトリのデフォルトブランチ名を管理する
intro: 'You can set the default branch name new repositories that you create on {% data variables.product.product_location %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

### デフォルトブランチ名について

When you create a new repository on {% data variables.product.product_location %}, the repository contains one branch, which is the default branch. You can change the name that {% data variables.product.product_name %} uses for the default branch in new repositories you create. デフォルトブランチの詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% data reusables.branches.set-default-branch %}

### デフォルトブランチ 名を設定する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
3. [Repository default branch] で、[**Change default branch name now**] をクリックします。 ![[Override] ボタン](/assets/images/help/settings/repo-default-name-button.png)
4. 新しいブランチに使用したいデフォルト名を入力します。 ![デフォルト名を入力するテキストフィールド](/assets/images/help/settings/repo-default-name-text.png)
5. [**Update**] をクリックします。 ![[Update] ボタン](/assets/images/help/settings/repo-default-name-update.png)

### 参考リンク

- "[Managing the default branch name for repositories in your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)"
