---
title: Team をアイデンティティプロバイダグループと同期する
intro: '{% data variables.product.product_name %} Team をアイデンティティプロバイダ (IdP) グループと同期して、Team メンバーを自動的に追加あるいは削除することができます。'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organization のオーナーとチームメンテナは、{% data variables.product.prodname_dotcom %} Team を IdP グループと同期することができます。'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
---
{% data reusables.gated-features.okta-team-sync %}

### Team の同期について

{% data reusables.identity-and-permissions.about-team-sync %}

{% if currentVersion == "free-pro-team@latest" %}You can connect up to five IdP groups to a {% data variables.product.product_name %} team.{% elsif currentVersion == "github-ae@latest" %}You can connect a team on {% data variables.product.product_name %} to one IdP group. All users in the group are automatically added to the team and also added to the parent organization as members. When you disconnect a group from a team, users who became members of the organization via team membership are removed from the organization.{% endif %} You can assign an IdP group to multiple {% data variables.product.product_name %} teams.

{% if currentVersion == "free-pro-team@latest" %}Team synchronization does not support IdP groups with more than 5000 members.{% endif %}

いったん {% data variables.product.prodname_dotcom %} Team が IdP グループに接続されたら、IdP 管理者はアイデンティティプロバイダを通して Team メンバーシップを変更する必要があります。 You cannot manage team membership on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} or using the API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
All team membership changes made through your IdP will appear in the audit log on
{% data variables.product.product_name %} as changes made by the team synchronization bot. IdP は、Team メンバーシップのデータを 1 時間に 1 回 {% data variables.product.prodname_dotcom %} に送信します。
Team を IdP グループに接続すると、Team メンバーが削除される場合があります。 詳細は「[同期される Team のメンバーに関する要件](#requirements-for-members-of-synchronized-teams)」を参照してください。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
When group membership changes on your IdP, your IdP sends a SCIM request with the changes to
{% data variables.product.product_name %} according to the schedule determined by your IdP. Any requests that change {% data variables.product.prodname_dotcom %} team or organization membership will register in the audit log as changes made by the account used to configure user provisioning. For more information about this account, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)." For more information about SCIM request schedules, see "[Check the status of user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" in the Microsoft Docs.
{% endif %}

親チームは IdP グループと同期できません。 IdP グループに接続したい Team が親チームの場合、新しい Team を作るか、Team と親チームのネスト関係を削除することをお勧めします。 詳細は、「[Team について](/articles/about-teams#nested-teams)」、「[Team の作成](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)」、「[Organization 階層内で Team を移動する](/articles/moving-a-team-in-your-organizations-hierarchy)」を参照してください。

IdP グループに接続された Team を含めて {% data variables.product.prodname_dotcom %} Team のリポジトリに対するアクセスを管理するには、{% data variables.product.product_name %} で変更を行う必要があります。 詳細は「[Team について](/articles/about-teams)」および「[Organization リポジトリへの Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}You can also manage team synchronization with the API. For more information, see "[Team synchronization](/rest/reference/teams#team-sync)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 同期される Team のメンバーに関する要件

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on {% data variables.product.product_name %} only if:
- The person is a member of the organization on {% data variables.product.product_name %}.
- The person has already logged in with their user account on {% data variables.product.product_name %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- The person's SSO identity is a member of the IdP group.

Existing teams or group members who do not meet these criteria will be automatically removed from the team on {% data variables.product.product_name %} and lose access to repositories. Revoking a user's linked identity will also remove the user from from any teams mapped to IdP groups. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[Viewing and managing a user's SAML access to your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

削除された Team メンバーは、SSO を使って Organization または Enterprise アカウントに認証され、接続先の IdP グループに移動すれば、再び Team に自動的に追加できます。

意図しない Team メンバーの削除を避けるために、Organization または Enterprise アカウントで SAML SSO を施行し、メンバーシップデータを同期するため新しい Team を作成し、IdP グループのメンバーシップを確認してから既存の Team を同期することをおすすめします。 For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)" and "[Enabling SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

Organization が Enterprise アカウントによって所有されている場合、その Enterprise アカウントに Team の同期を有効化すると、Organization レベルの Team の同期はオーバーライドされます。 For more information, see "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

{% endif %}

### 必要な環境

{% if currentVersion == "free-pro-team@latest" %}
Before you can connect a
{% data variables.product.product_name %} team with an identity provider group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

Team メンバーを誤って削除しないように、お使いの IdP の管理ポータルにアクセスし、現在の各 Team メンバーが、接続しようとしている IdP グループにも属していることを確認してください。 アイデンティティプロバイダにこうしたアクセスができない場合は、IdP 管理者にお問い合わせください。

SAML SSO を使って認証する必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

{% elsif currentVersion == "github-ae@latest" %}
Before you can connect a
{% data variables.product.product_name %} team with an IdP group, you must first configure user provisioning for {% data variables.product.product_location %} using a supported System for Cross-domain Identity Management (SCIM). 詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。
Once user provisioning for

{% data variables.product.product_name %} is configured using SCIM, you can assign the {% data variables.product.product_name %} application to every IdP group that you want to use on {% data variables.product.product_name %}. For more information, see [Configure automatic user provisioning to GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) in the Microsoft Docs.
{% endif %}

### IdP グループをTeam に接続する

When you connect an IdP group to a {% data variables.product.product_name %} team, all users in the group are automatically added to the team. {% if currentVersion == "github-ae@latest" %}Any users who were not already members of the parent organization members are also added to the organization.{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Under "Identity Provider Groups", use the drop-down menu, and select up to 5 identity provider groups. ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Under "Identity Provider Group", use the drop-down menu, and select an identity provider group from the list. ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. [**Save changes**] をクリックします。

### IdP グループをTeam から切断する

{% data variables.product.prodname_dotcom %} Team から IdP グループを切断すると、その IdP グループを介して {% data variables.product.prodname_dotcom %} Team に割り当てられている Team メンバーは Team から削除されます。 {% if currentVersion == "github-ae@latest" %} Any users who were members of the parent organization only because of that team connection are also removed from the organization.{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Under "Identity Provider Groups", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Under "Identity Provider Group", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. [**Save changes**] をクリックします。
