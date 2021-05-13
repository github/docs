---
title: Organization からメンバーを削除する
intro: Organization のメンバーが、Organization が所有するリポジトリへのアクセスを必要としなくなった場合、そのメンバーを Organization から削除することができます。
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Organization からメンバーを削除できるのは、Organization のオーナーだけです。

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告:** Organization からメンバーを削除する際は次の点にご注意ください:
- 有料ライセンスのカウントは自動的にはダウングレードされません。 Organization からユーザを削除したあとに有料シートの数を減らすには、「[Organization の有料ライセンスをダウングレードする](/articles/downgrading-your-organization-s-paid-seats)」の手順に従ってください。
- 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 そのプライベートフォークは、そのユーザが Organization から削除されてから 3 か月以内に [Organization メンバーとして復帰した](/articles/reinstating-a-former-member-of-your-organization)場合、リストアできます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
- 削除されたメンバーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなりすま。

{% endwarning %}

{% else %}

{% warning %}

**警告:** Organization からメンバーを削除する際は次の点にご注意ください:
 - 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 そのプライベートフォークは、そのユーザが Organization から削除されてから 3 か月以内に [Organization メンバーとして復帰した](/articles/reinstating-a-former-member-of-your-organization)場合、リストアできます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
 - 削除されたユーザーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなりすま。

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Organization から削除する個人の移行と、その個人による機密情報や知的財産の削除ができるようにするため、Organization から離脱する際のベストプラクティスのチェックリストを共有するよう推奨します。 例については、「[退職のためのベストプラクティス](/articles/best-practices-for-leaving-your-company/)」を参照してください。

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### ユーザのメンバーシップを削除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Organization から削除するメンバーを選択します。 ![2 人のメンバーを選択した状態のメンバーリスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. メンバーのリストの上のドロップダウンメニューで、[**Remove from organization**] をクリックします。 ![メンバーを削除するオプションのあるドロップダウンメニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. Organization から削除されるメンバーをレビューしてから、[**Remove members**] をクリックします。 ![削除されるメンバーのリストおよび [Remove members] ボタン](/assets/images/help/teams/confirm-remove-members-bulk.png)

### 参考リンク

- 「[チームから Organization メンバーを削除する](/articles/removing-organization-members-from-a-team)」
