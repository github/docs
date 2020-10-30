---
title: Organization メンバーを外部コラボレーターに変換する
intro: 'Organization の現在のメンバーが、コンサルタントや一時的な雇用者などで、特定のリポジトリへのアクセスのみが必要な場合は、そのメンバーを「外部コラボレーター」に変換できます。'
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.owners-and-admins-can %}Organization メンバーを外部コラボレーターに変換できます。

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Organization のメンバーが外部コラボレーターに変換された後は、現在の Team メンバーシップによって許可されるリポジトリにしかアクセスできません。 Organization の明示的なメンバーではなくなり、以下のことができなくなります:

- Team の作成
- Organization の全メンバーおよび Team の表示
- 参照可能なチームへの @メンション
- チームメンテナになる

詳しい情報については、「[Organization の権限レベル](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)」を参照してください。

アクセスが期待通りであることを確実にするために、Organization メンバーの、リポジトリへのアクセスを確認することをおすすめします。 詳細は、「[Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)」を参照してください。

Organization のメンバーを外部コラボレーターに変換する際、Organization メンバーとしての権限は 3 か月保存されるので、この期間内に、そのユーザを Organization に{% if currentVersion == "free-pro-team@latest" %}再参加するよう招待{% else %}再追加{% endif %}すれば、メンバーとしての権限を回復できます。 詳しい情報については、「[Organization の以前のメンバーを回復する](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. 外部コラボレーターに変換したい人を選択します。 ![2 人のメンバーを選択した状態のメンバーリスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. メンバーのリストの上のドロップダウンメニューで、[**Convert to outside collaborator**] をクリックします。 ![メンバーを外部コラボレーターに変換するオプションのあるドロップダウンメニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. メンバーの外部コラボレーターへの変換に関する情報を読み、[**Convert to outside collaborator**] をクリックします。 ![外部コラボレーターの権限に関する情報および [Convert to outside collaborator] ボタン](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### 参考リンク

- [外部コラボレーターを Organization のリポジトリに追加する](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [外部のコラボレータを Organization のリポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository)
- [外部コラボレーターを Organization のメンバーに変換する](/articles/converting-an-outside-collaborator-to-an-organization-member)
