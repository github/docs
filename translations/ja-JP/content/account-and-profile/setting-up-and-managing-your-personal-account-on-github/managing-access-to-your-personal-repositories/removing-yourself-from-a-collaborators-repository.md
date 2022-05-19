---
title: コラボレーターのリポジトリから自分を削除する
intro: 他の人の個人リポジトリのコラボレーターを続けたくなくなった場合は、自分を削除できます。
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
---

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "repo" aria-label="The repo icon" %} Repositories**.
{% else %}
2. 左のサイドバーで [**Repositories**] をクリックします。 ![[Repositories] タブ](/assets/images/help/settings/settings-sidebar-repositories.png)
{% endif %}
3. 離脱するリポジトリの横にある [**Leave**] をクリックします。 ![[Leave] ボタン](/assets/images/help/repository/repo-leave.png)
4. 警告をよく読んでから [I understand, leave this repository.] をクリックします。 ![本当に離脱してよいか確認を促すダイアログボックス](/assets/images/help/repository/repo-leave-confirmation.png)
