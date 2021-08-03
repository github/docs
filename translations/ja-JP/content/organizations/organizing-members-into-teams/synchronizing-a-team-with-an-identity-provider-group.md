---
title: Team をアイデンティティプロバイダグループと同期する
intro: '{% data variables.product.product_name %} Team をアイデンティティプロバイダ (IdP) グループと同期して、Team メンバーを自動的に追加あるいは削除することができます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.gated-features.okta-team-sync %}

### Team の同期について

{% data reusables.identity-and-permissions.about-team-sync %}

{% if currentVersion == "free-pro-team@latest" %}最大 5 つの IdP グループを {% data variables.product.product_name %} チームに接続できます。{% elsif currentVersion == "github-ae@latest" %}{% data variables.product.product_name %} の Team を 1 つの IdP グループに接続できます。 グループ内のすべてのユーザは自動的にチームに追加され、メンバーとして親 Organization にも追加されます。 グループを Team から切断すると、Team のメンバーシップを介して Organization のメンバーになったユーザは Organization から削除されます。{% endif %} IdP グループを複数の {% data variables.product.product_name %} Team に割り当てることができます。

{% if currentVersion == "free-pro-team@latest" %}Team 同期は、5000 以上のメンバーがいる IdP グループをサポートしていません。{% endif %}

いったん {% data variables.product.prodname_dotcom %} Team が IdP グループに接続されたら、IdP 管理者はアイデンティティプロバイダを通して Team メンバーシップを変更する必要があります。 {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} または API を使用して Team のメンバーシップを管理することはできません{% endif %}。

{% if currentVersion == "free-pro-team@latest" %}
IdP を通じた Team メンバーシップ変更はすべて、Team 同期ボットによる変更として {% data variables.product.product_name %} の Audit log に記載されます。 IdP は、Team メンバーシップのデータを 1 時間に 1 回 {% data variables.product.prodname_dotcom %} に送信します。 Team を IdP グループに接続すると、Team メンバーが削除される場合があります。 詳細は「[同期される Team のメンバーに関する要件](#requirements-for-members-of-synchronized-teams)」を参照してください。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
When group membership changes on your IdP, your IdP sends a SCIM request with the changes to {% data variables.product.product_name %} according to the schedule determined by your IdP. {% data variables.product.prodname_dotcom %} Team または Organization のメンバーシップを変更するリクエストは、ユーザプロビジョニングの設定に使用されたアカウントによって行われた変更として監査ログに登録されます。 このアカウントに関する詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。 SCIM リクエストのスケジュールについて詳しくは、Microsoft Docs の「[ユーザプロビジョニングのステータスの確認](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)」を参照してください。
{% endif %}

親チームは IdP グループと同期できません。 IdP グループに接続したい Team が親チームの場合、新しい Team を作るか、Team と親チームのネスト関係を削除することをお勧めします。 詳細は、「[Team について](/articles/about-teams#nested-teams)」、「[Team の作成](/organizations/organizing-members-into-teams/creating-a-team)」、「[Organization 階層内で Team を移動する](/articles/moving-a-team-in-your-organizations-hierarchy)」を参照してください。

IdP グループに接続された Team を含めて {% data variables.product.prodname_dotcom %} Team のリポジトリに対するアクセスを管理するには、{% data variables.product.product_name %} で変更を行う必要があります。 詳細は「[Team について](/articles/about-teams)」および「[Organization リポジトリへの Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}API を使用して Team の同期を管理することもできます。 詳しい情報については、「[Team 同期](/rest/reference/teams#team-sync)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 同期される Team のメンバーに関する要件

チームを IdP グループに接続した後、Team 同期により、次の場合にのみ IdP グループの各メンバーが {% data variables.product.product_name %} 上の対応するチームに追加されます。
- そのユーザが {% data variables.product.product_name %} の Organization のメンバーの場合。
- そのユーザがすでに {% data variables.product.product_name %} のユーザアカウントでログインしており、少なくとも 1 回は SAML シングルサインオンを介して Organization または Enterprise アカウントに認証されている場合。
- そのユーザの SSO ID が IdP グループのメンバーである場合。

これらの条件を満たしていない既存の Team またはグループメンバーは、{% data variables.product.product_name %} の Team から自動的に削除され、リポジトリにアクセスできなくなります。 ユーザのリンクされた ID を取り消すと、IdP グループにマップされている Team からユーザが削除されます。 For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[Viewing and managing a user's SAML access to your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

削除された Team メンバーは、SSO を使って Organization または Enterprise アカウントに認証され、接続先の IdP グループに移動すれば、再び Team に自動的に追加できます。

意図しない Team メンバーの削除を避けるために、Organization または Enterprise アカウントで SAML SSO を施行し、メンバーシップデータを同期するため新しい Team を作成し、IdP グループのメンバーシップを確認してから既存の Team を同期することをおすすめします。 詳しい情報については、「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」と「[Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)」を参照してください。

Organization が Enterprise アカウントによって所有されている場合、その Enterprise アカウントに Team の同期を有効化すると、Organization レベルの Team の同期はオーバーライドされます。 詳しい情報については、「[Enterprise アカウントで Organization の Team 同期を管理する](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)」参照してください。

{% endif %}

### 必要な環境

{% if currentVersion == "free-pro-team@latest" %}
Before you can connect a {% data variables.product.product_name %} team with an identity provider group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

Team メンバーを誤って削除しないように、お使いの IdP の管理ポータルにアクセスし、現在の各 Team メンバーが、接続しようとしている IdP グループにも属していることを確認してください。 アイデンティティプロバイダにこうしたアクセスができない場合は、IdP 管理者にお問い合わせください。

SAML SSO を使って認証する必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

{% elsif currentVersion == "github-ae@latest" %}
Before you can connect a {% data variables.product.product_name %} team with an IdP group, you must first configure user provisioning for {% data variables.product.product_location %} using a supported System for Cross-domain Identity Management (SCIM). 詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

Once user provisioning for {% data variables.product.product_name %} is configured using SCIM, you can assign the {% data variables.product.product_name %} application to every IdP group that you want to use on {% data variables.product.product_name %}. 詳しい情報については、Microsoft Docs の「[GitHub AE への自動ユーザプロビジョニングを設定する](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae)」を参照してください。
{% endif %}

### IdP グループをTeam に接続する

IdP グループを {% data variables.product.product_name %} Team に接続すると、グループ内のすべてのユーザが自動的に Team に追加されます。 {% if currentVersion == "github-ae@latest" %}親 Organization のメンバーになっていないユーザも Organization に追加されます。{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. [Identity Provider Groups] で、ドロップダウンメニューを使用して最大 5 つまでアイデンティティプロバイダグループを選択します。 ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. [Identity Provider Group] で、ドロップダウンメニューを使用してリストからアイデンティティプロバイダグループを選択します。 ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. [**Save changes**] をクリックします。

### IdP グループをTeam から切断する

{% data variables.product.prodname_dotcom %} Team から IdP グループを切断すると、その IdP グループを介して {% data variables.product.prodname_dotcom %} Team に割り当てられている Team メンバーは Team から削除されます。 {% if currentVersion == "github-ae@latest" %} その Team 接続のためだけに親 Organization のメンバーであったユーザも、Organization から削除されます。{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. [Identity Provider Groups] で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. [Identity Provider Groups] で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. [**Save changes**] をクリックします。
