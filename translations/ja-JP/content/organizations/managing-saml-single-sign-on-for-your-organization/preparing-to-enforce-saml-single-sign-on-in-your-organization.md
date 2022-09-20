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
shortTitle: Prepare to enforce SAML SSO
ms.openlocfilehash: 6457b44f5a5debd005b8878b2f31f81c4341ab15
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125606'
---
{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} OrganizationでSAML SSOを施行する前に、Organizationのメンバーシップをレビューし、SAML SSOを有効化子、OrganizationメンバーのSAMLアクセスをレビューすべきです。 詳細については、次を参照してください。

| タスク | 詳細情報 |
| :- | :- |
| Organizationでのメンバーの追加や削除 | <ul><li>「[Organization に参加するようユーザを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」</li><li>「[Organization からメンバーを削除する](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)」</li></ul> |
| SAML SSOの有効化によるIdPのOrganizationへの接続 | <ul><li>「[ID プロバイダーを Organization に接続する](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」</li><li>「[Organization 向けの SAML シングル サインオンを有効化してテストする](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)」</li></ul> |
| OrganizatonメンバーのサインインとアカウントのIdPとのリンクの確認 | <ul><li>「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」</li></ul> |

これらのタスクを完了すれば、OrganizationでSAML SSOを施行できます。 詳細については、「[Organization に SAML シングル サインオンを適用する](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.outside-collaborators-exemption %}
