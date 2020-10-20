---
title: Organization の所有権を移譲する
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else/
  - /articles/transferring-organization-ownership
intro: 'To make someone else the owner of an organization account, you must add a new owner{% if currentVersion == "free-pro-team@latest" %}, ensure that the billing information is updated,{% endif %} and then remove yourself from the account.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

1. もしあなたが *owner* の権限を持つ唯一のメンバーである場合、他の Organization メンバーにオーナーロールを付与します。 詳細は「[Organizationのオーナーの指名](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)」を参照してください。
2. 新しいオーナーに連絡し、そのオーナーが [Organization の設定にアクセス](/articles/accessing-your-organization-s-settings)できることを確認します。
{% if currentVersion == "free-pro-team@latest" %}
3. Organization で GitHub への支払いを現在担当している場合、新しいオーナーまたは[支払いマネージャー](/articles/adding-a-billing-manager-to-your-organization/)に Organization の支払い情報を更新してもらう必要があります。 詳細は「[支払い方法を追加または編集する](/articles/adding-or-editing-a-payment-method)」を参照してください。

  {% warning %}

  **警告**: Organization から自身を削除しても、Organization アカウントのファイル上の支払い情報は**更新されません**。 新しいコードオーナーまたは支払いマネージャーは、あなたのクレジットカードまたは Paypal の情報を削除するためにファイル上の支払い情報を更新しなければなりません。

  {% endwarning %}

{% endif %}
4. Organization から[自分を削除する](/articles/removing-yourself-from-an-organization)
