---
title: Team をアイデンティティプロバイダグループと同期する
intro: '{% data variables.product.prodname_dotcom %} Team をアイデンティティプロバイダ (IdP) グループと同期して、Team メンバーを自動的に追加あるいは削除することができます。'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organization のオーナーとチームメンテナは、{% data variables.product.prodname_dotcom %} Team を IdP グループと同期することができます。'
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### Team の同期について

{% data reusables.identity-and-permissions.about-team-sync %}

1 つの {% data variables.product.prodname_dotcom %} Team には、最大 5 つまでの IdP グループを接続できます。。 1 つのIdP グループは制限なく複数の {% data variables.product.prodname_dotcom %} Team に割り当てることができます。

いったん {% data variables.product.prodname_dotcom %} Team が IdP グループに接続されたら、IdP 管理者はアイデンティティプロバイダを通して Team メンバーシップを変更する必要があります。 Team のメンバーシップを {% data variables.product.product_name %} で、または API を使用して管理することはできません。

IdP を通じた Team メンバーシップ変更はすべて、Team 同期ボットによる変更として {% data variables.product.product_name %} の Audit log に記載されます。 IdP は、Team メンバーシップのデータを 1 時間に 1 回 {% data variables.product.prodname_dotcom %} に送信します。 Team を IdP グループに接続すると、Team メンバーが削除される場合があります。 詳細は「[同期される Team のメンバーに関する要件](#requirements-for-members-of-synchronized-teams)」を参照してください。

親チームは IdP グループと同期できません。 IdP グループに接続したい Team が親チームの場合、新しい Team を作るか、Team と親チームのネスト関係を削除することをお勧めします。 詳細は、「[Team について](/articles/about-teams#nested-teams)」、「[Team の作成](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)」、「[Organization 階層内で Team を移動する](/articles/moving-a-team-in-your-organizations-hierarchy)」を参照してください。

IdP グループに接続された Team を含めて {% data variables.product.prodname_dotcom %} Team のリポジトリに対するアクセスを管理するには、{% data variables.product.product_name %} で変更を行う必要があります。 詳細は「[Team について](/articles/about-teams)」および「[Organization リポジトリへの Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)」を参照してください。

Team 同期を API で管理することもできます。 詳しい情報については「[Team の同期](/v3/teams/team_sync/)」を参照してください。

### 同期される Team のメンバーに関する要件

Team の同期を有効化した後、ユーザが {% data variables.product.prodname_dotcom %} で引き続き同じ SSO アイデンティティの SAML SSO を使用して認証し続け、接続先の IdP グループのメンバーであり続ける場合、各 Team メンバーのメンバーシップデータが同期されます。

既存の Team またはグループのメンバーは、{% data variables.product.prodname_dotcom %} でその Team から自動的に削除されます。 SSO を使用して Organization または Enterprise アカウントに認証されていない既存の Team またはグループのメンバーは、リポジトリにアクセスできなくなります。 接続先の IdP グループにいない既存の Team またはグループのメンバーも、リポジトリにアクセスできなくなる可能性があります。

削除された Team メンバーは、SSO を使って Organization または Enterprise アカウントに認証され、接続先の IdP グループに移動すれば、再び Team に自動的に追加できます。

意図しない Team メンバーの削除を避けるために、Organization または Enterprise アカウントで SAML SSO を施行し、メンバーシップデータを同期するため新しい Team を作成し、IdP グループのメンバーシップを確認してから既存の Team を同期することをおすすめします。 詳細は「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

Organization が Enterprise アカウントによって所有されている場合、その Enterprise アカウントに Team の同期を有効化すると、Organization レベルの Team の同期はオーバーライドされます。 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)」を参照してください。

### 必要な環境

Team をアイデンティティプロバイダグループに接続するには、Organization または Enterprise オーナーが自分の Organization または Enterprise のアカウントについて Team 同期を有効にする必要があります。 詳細は、「[Organization の Team 同期を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)」と「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)」を参照してください。

Team メンバーを誤って削除しないように、お使いの IdP の管理ポータルにアクセスし、現在の各 Team メンバーが、接続しようとしている IdP グループにも属していることを確認してください。 アイデンティティプロバイダにこうしたアクセスができない場合は、IdP 管理者にお問い合わせください。

SAML SSO を使って認証する必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

### IdP グループをTeam に接続する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. [Identity Provider Groups] で、ドロップダウンメニューを使用して最大 5 つまでアイデンティティプロバイダグループを選択します。 ![アイデンティティプロバイダグループを選択するドロップダウンメニュー](/assets/images/help/teams/choose-an-idp-group.png)
6. [**Save changes**] をクリックします。

### IdP グループをTeam から切断する

{% data variables.product.prodname_dotcom %} Team から IdP グループを切断すると、その IdP グループを介して {% data variables.product.prodname_dotcom %} Team に割り当てられている Team メンバーは Team から削除されます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. [Identity Provider Groups] で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 ![接続した IdP グループを GitHub team から選択解除する](/assets/images/help/teams/unselect-idp-group.png)
7. [**Save changes**] をクリックします。
