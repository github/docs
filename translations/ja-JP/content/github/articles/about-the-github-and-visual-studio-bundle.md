---
title: GitHub と Visual Studio のバンドルについて
hidden: true
redirect_from:
  - /articles/about-the-github-and-visual-studio-bundle
versions:
  free-pro-team: '*'
---

{% tip %}

**ヒント**：
- Organization に参加するようユーザを招待できるのは、Organization オーナーだけです。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

{% endtip %}


### ここには以下の内容があります:
- [{% data variables.product.prodname_enterprise %} と Visual Studio のバンドルライセンスについて](#about-github-enterprise-and-visual-studio-bundle-licenses)
- [{% data variables.product.prodname_enterprise %} ユーザライセンスを割り当てる](#assigning-a-github-enterprise-user-license)
- [ユーザライセンスの過剰割り当て](#overallocation-of-user-licenses)


### {% data variables.product.prodname_enterprise %} と Visual Studio のバンドルライセンスについて

{% data variables.product.prodname_dotcom %}-Visual Studio バンドルを購入したお客様は、{% data variables.product.prodname_enterprise %} ユーザライセンスを入手できます。 これらのライセンスは {% data variables.product.prodname_dotcom %} Enterprise アカウントでプロビジョニングされます。Enterprise アカウントは Microsoft Enterprise Agreement にリンクされ、Organization メンバーに割り当てることができます。

Enterprise 内の Organization のオーナーが新しいユーザを Organization に参加するよう招待した場合、新しいユーザにライセンスを {% data variables.product.prodname_enterprise %} あるいは {% data variables.product.prodname_enterprise %} with Visual Studio プランのどちらから割り当てるかを選択できます。

### {% data variables.product.prodname_enterprise %} ユーザライセンスを割り当てる

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

### ユーザライセンスの過剰割り当て

{% data variables.product.prodname_enterprise %} および {% data variables.product.prodname_enterprise %} with Visual Studio プランで使用しているライセンスの総数は、Enterprise アカウントの支払い設定から見ることができます。

Organization および Enterprise のオーナーが、利用中のプランに含まれているライセンス数よりも多くの {% data variables.product.prodname_enterprise %} (Visual Studio) プランのライセンスをユーザに割り当てた場合、次回の調整請求書にはプランに含まれている分を超えたユーザ数の支払いが含まれます。

詳細は「[Enterprise アカウントのプランおよび利用状況を見る示](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

### 参考リンク
- [Team へのOrganization メンバーの追加](/articles/adding-organization-members-to-a-team)
- Organization が[メンバーに 2 要素認証を使うことを要求](/articles/requiring-two-factor-authentication-in-your-organization)している場合、招待するユーザは招待を受ける前に[ 2 要素認証を有効化](/articles/securing-your-account-with-two-factor-authentication-2fa)する必要があります。
