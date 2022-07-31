---
title: Organization での SAML シングルサインオンの強制を準備する
intro: Organization で SAML シングルサインオンを強制する前に、Organization のメンバーシップを検証し、アイデンティティプロバイダへの接続文字列を設定する必要があります。
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SAML SSOの強制の準備
---

{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} OrganizationでSAML SSOを施行する前に、Organizationのメンバーシップをレビューし、SAML SSOを有効化子、OrganizationメンバーのSAMLアクセスをレビューすべきです。 詳しい情報については、以下を参照してください。

| タスク                                     | 詳細情報                      |
|:--------------------------------------- |:------------------------- |
| Organizationでのメンバーの追加や削除                | <ul><li>「[ユーザをOrganizationに参加するよう招待](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」</li><li>「[Organizationからのメンバーの削除](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)」</li></ul> |
| SAML SSOの有効化によるIdPのOrganizationへの接続     | <ul><li>「[Organizationへのアイデンティティプロバイダの接続](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」</li><li>「[OrganizationでのSAMLシングルサインオンの有効化とテスト](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)」</li></ul> |
| OrganizatonメンバーのサインインとアカウントのIdPとのリンクの確認 | <ul><li>「[OrganizationへのメンバーのSAMLアクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」</li></ul> |

これらのタスクを完了すれば、OrganizationでSAML SSOを施行できます。 詳細は「[Organization で SAML シングルサインオンを施行する](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.outside-collaborators-exemption %}
