---
title: 外部コラボレーターを Organization リポジトリから削除する
intro: オーナーあるいはリポジトリ管理者は、外部コラボレーターのリポジトリへのアクセスを削除できます。
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告:**
- 外部コラボレーターをプライベートリポジトリから削除しても、有料ライセンスのカウントは自動ではダウングレードしません。 Organization からユーザを削除したあとに有料シートの数を減らすには、「[Organization の有料ライセンスをダウングレードする](/articles/downgrading-your-organization-s-paid-seats)」の手順に従ってください。

- リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。

{% endwarning %}

{% endif %}

コラボレーターが削除される一方でプライベートリポジトリのフォークが削除されると、その個人はリポジトリのローカルクローンをそのまま保持します。

### 外部コラボレーターを Organization のすべてのリポジトリから削除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. Organization から削除する外部コラボレーターを 1 人以上選択します。 ![外部コラボレーターのリストで外部コラボレーターを 2 名選択](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. 外部コラボレーターのリストの上のドロップダウンメニューで [**Remove from all repositories**] をクリックします。 ![外部コラボレーターを削除するオプションのあるドロップダウンメニュー ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Organization から削除される外部コラボレーターをレビューしてから、[**Remove outside collaborators**] をクリックします。 ![削除される外部コラボレーターのリストおよび [Remove outside collaborators] ボタン](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

### 外部コラボレーターを Organization の特定のリポジトリから削除する

外部コラボレーターを Organization の特定のリポジトリからのみ削除する場合、特定のリポジトリごとにアクセスを削除していきます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. 削除する個人のユーザ名の右側にある {% octicon "gear" aria-label="The Settings gear" %}ドロップダウンメニューで、[**Manage**] をクリックします。 ![[Manage access] ボタン](/assets/images/help/organizations/member-manage-access.png)
6. 外部コラボレーターを削除するリポジトリの右側で [**Manage access**] をクリックします。 ![外部コラボレーターがアクセスできるリポジトリの横にある [Manage access] ボタンを選択](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. 外部コラボレーターのリポジトリへのアクセスを完全に削除するため、右上隅の [**Remove access to this repository**] をクリックします。 ![[Remove access to this repository] ボタン](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. 確定するため、[**Remove access**] をクリックします。 ![リポジトリから削除する外部コラボレータの確定](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

### 参考リンク

- [外部コラボレーターを Organization のリポジトリに追加する](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Organizatin のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)
