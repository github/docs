---
title: GitHub の他のユーザに Issue およびプルリクエストをアサインする
intro: アサインされた人によって、誰が特定の Issue やプルリクエストで作業しているかが明確になります。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

リポジトリへの書き込み権限があるユーザなら誰でもIssue およびプルリクエストをアサインできます。

### Issue およびプルリクエストをアサインされた人について

自身、該当する Issue またはプルリクエストにコメントした任意の人、リポジトリへの書き込み権限がある任意の人、およびリポジトリの読み取り権限がある Organization メンバーを含めて、最大 10 人まで各 Issue またはプルリクエストにアサインできます。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

### 個別の Issue またはプルリクエストを割り当てる

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. ユーザに割り当てる Issue またはプルリクエストを開きます。
4. Issue またはプルリクエストに誰も割り当てられていない場合は、[**assign yourself**] をクリックして自分を割り当てます。 ![自分にアイテムを割り当てる](/assets/images/help/issues/assign_yourself.png)
5. 右メニューで、[**Assignees**] をクリックします。 ![アサインされた人のメニュー項目](/assets/images/help/issues/assignee_menu.png)
6. Issue またはプルリクエストをユーザに割り当てるには、ユーザ名を入力し、表示された名前をクリックします。 Issue またはプルリクエストには、最大で 10 人を選択してアサインできます。 ![Issue のアサインのドロップダウンメニュー](/assets/images/help/issues/issues_assigning_dropdown.png)

### 複数の Issue またはプルリクエストを割り当てる

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 誰かにアサインしたいアイテムの隣のチェックボックスを選択してください。 ![Issue のメタデータチェックボックス](/assets/images/help/issues/issues_assign_checkbox.png)
4. 右上隅にある [**Assign**] をクリックします。
5. アイテムをユーザにアサインするには、その人のユーザ名を入力し始め、その名前が表示されたらクリックします。 Issue またはプルリクエストには、最大で 10 人を選択してアサインできます。 ![Issue のアサインのドロップダウンメニュー](/assets/images/help/issues/issues_assigning_dropdown.png)

### 参考リンク

* [アサインされた人による Issue およびプルリクエストのフィルタリング](/articles/filtering-issues-and-pull-requests-by-assignees)
