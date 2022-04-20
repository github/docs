---
title: コラボレーターを個人リポジトリに招待する
intro: '個人リポジトリにコラボレーターとして{% ifversion fpt or ghec %}ユーザを招待{% else %}ユーザを追加{% endif %}することができます。'
redirect_from:
  - /articles/how-do-i-add-a-collaborator
  - /articles/adding-collaborators-to-a-personal-repository
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Invite collaborators
---

Organization が所有するリポジトリは、細やかなアクセスを許可できます。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you can only invite other members of your enterprise to collaborate with you. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**メモ:** {% data variables.product.company_short %} では、24 時間以内にリポジトリに招待できる人数に上限があります。 この上限を超える場合は、24 時間待つか、コラボレーションする人数の多い Organization を作成してください。

{% endnote %}

{% endif %}

1. コラボレーターとして招待する人のユーザ名を確認してください。{% ifversion fpt or ghec %}まだユーザ名がない場合は、{% data variables.product.prodname_dotcom %}にサインアップできます。詳細は「[新しい {% data variables.product.prodname_dotcom %}アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account)」を参照してください。{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%}
{% data reusables.repositories.click-collaborators-teams %}
1. [**Invite a collaborator**] をクリックします。 ![[Invite a collaborator] ボタン](/assets/images/help/repository/invite-a-collaborator-button.png)
2. 検索フィールドで、招待する人の名前を入力し、一致するリストの名前をクリックします。 ![リポジトリに招待する人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. [**Add NAME to REPOSITORY**] をクリックします。 ![コラボレーターを追加するボタン](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. 左サイドバーで [**Collaborators**] をクリックします。 ![リポジトリの [Settings] サイドバーで [Collaborators] を選択](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. [Collaborators] で、コラボレーターのユーザ名の入力を始めます。
7. ドロップダウンメニューからコラボレーターのユーザ名を選択します。 ![コラボレーター リストのドロップダウン メニュー](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. [**Add collaborator**] をクリックします。 !["Add collaborator" button](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% ifversion fpt or ghec %}
9. リポジトリへの招待メールがユーザに届きます。 ユーザが招待を受諾すると、そのユーザはコラボレーターとしてリポジトリにアクセスできるようになります。
{% endif %}

## 参考リンク

- "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)"
- [個人リポジトリからコラボレーターを削除する](/articles/removing-a-collaborator-from-a-personal-repository)
- [コラボレーターのリポジトリから自分を削除する](/articles/removing-yourself-from-a-collaborator-s-repository)
- [メンバーを Team に編成する](/organizations/organizing-members-into-teams)
