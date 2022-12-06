---
title: Okta でのエンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成
shortTitle: Set up provisioning with Okta
intro: ID プロバイダーとして Okta を使って、新しいユーザーをプロビジョニングし、エンタープライズとチームのメンバーシップを管理することができます。
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: b8c086d1d91c1248fa5a0349bb6f8ef32c3bbdf0
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160713'
---
## Okta でのプロビジョニングについて

ID プロバイダーとして Okta と共に {% data variables.product.prodname_emus %} を使用して、新しいアカウントのプロビジョニング、エンタープライズ メンバーシップの管理、エンタープライズ内の組織のチーム メンバーシップの管理を行うことができます。 {% data variables.product.prodname_emus %} のプロビジョニングの詳細については、「[エンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)」を参照してください。

Okta でプロビジョニングを構成する前に、SAML シングル サインオンを構成する必要があります。 詳細については、「[エンタープライズ マネージド ユーザーの SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

Okta でプロビジョニングを構成するには、{% data variables.product.prodname_emu_idp_application %} アプリケーションで Enterprise の名前を設定し、セットアップ ユーザーの{% data variables.product.pat_generic %}を入力する必要があります。 その後、Okta でユーザーのプロビジョニングを開始できます。

## サポートされている機能

{% data variables.product.prodname_emus %} では、Okta の多くのプロビジョニング機能をサポートしています。

| 機能 | 説明 |
| --- | --- |
| 新しいユーザのプッシュ | Okta の {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられているユーザーは、{% data variables.product.product_name %} 上のエンタープライズで自動的に作成されます。 |
| プロファイルの更新をプッシュする | Okta でユーザーのプロファイルに対して行われた更新は、{% data variables.product.product_name %} にプッシュされます。 |
| プッシュ グループ | プッシュ グループとして {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てられている Okta のグループは、{% data variables.product.product_name %} 上のエンタープライズで自動的に作成されます。 |
| ユーザ無効化のプッシュ | Okta の {% data variables.product.prodname_emu_idp_application %} アプリケーションからユーザーの割り当てを解除すると、{% data variables.product.product_name %} のユーザーが無効になります。 ユーザーはサインインできませんが、ユーザーの情報は保持されます。 |
| ユーザの再アクティブ化 | Okta アカウントが再アクティブ化され、{% data variables.product.prodname_emu_idp_application %} アプリケーションに再度割り当てられた Okta のユーザーが有効になります。 |

{% note %}

**注:** {% data variables.product.prodname_emus %} は、ユーザー名の変更をサポートしていません。

{% endnote %}

## エンタープライズ名の設定

{% data variables.enterprise.prodname_emu_enterprise %} が作成されたら、Okta で Enterprise 名を設定してプロビジョニングの構成を開始できます。

1. Okta の {% data variables.product.prodname_emu_idp_application %} アプリケーションに移動します。
1. **[サインオン]** タブをクリックします。
1. 変更するには、 **[編集]** をクリックします。
1. [Advanced Sign-on Settings]\(詳細なサインオン設定\) の [エンタープライズ名] テキスト ボックスに、エンタープライズ名を入力します。 たとえば、`https://github.com/enterprises/octoinc` でエンタープライズにアクセスする場合、エンタープライズ名は "octoinc" になります。
![Okta の [エンタープライズ名] フィールドのスクリーンショット](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. エンタープライズ名を保存するには、 **[保存]** をクリックします。

## プロビジョニングの構成

エンタープライズ名を設定したら、プロビジョニング設定の構成に進むことができます。

プロビジョニングを構成するには、 **@<em>SHORT-CODE</em>_admin** ユーザー名を持つセットアップ ユーザーは、**admin:enterprise** スコープで{% data variables.product.pat_v1 %}を指定する必要があります。 新しいトークンの作成について詳しくは、「[{% data variables.product.pat_generic %}の作成](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)」を参照してください。

1. Okta の {% data variables.product.prodname_emu_idp_application %} アプリケーションに移動します。
1. [プロビジョニング] タブをクリックします。
1. [設定] メニューで、 **[統合]** をクリックします。
1. 変更するには、 **[編集]** をクリックします。
1. **[Enable API integration]\(API 統合を有効にする\)** を選択します。
1. [API トークン] フィールドに、セットアップ ユーザーに属する **admin:enterprise** スコープを使って、{% data variables.product.pat_v1 %} を入力します。
![Okta の [API トークン] フィールドを示すスクリーンショット](/assets/images/help/enterprises/okta-emu-token.png)
1. **[Test API Credentials]\(API 資格情報のテスト\)** をクリックします。 テストが成功すると、確認メッセージが画面の上部に表示されます。
1. トークンを保存するには、 **[保存]** をクリックします。
1. [設定] メニューで **[To App]\(アプリへ\)** をクリックします。
![Okta の [To App]\(アプリへ\) メニュー項目を示すスクリーンショット](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. [Provisioning to App]\(アプリへのプロビジョニング\) の右側で、変更を許可するには、 **[編集]** をクリックします。
1. **[ユーザーの作成]** 、 **[Update User Attributes]\(ユーザー属性の更新\)** 、および **[ユーザーの非アクティブ化]** の **[有効化]** を選択します。
![Okta のプロビジョニング オプションを示すスクリーンショット](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. プロビジョニングの構成を完了するには、 **[保存]** をクリックします。

## ユーザーとグループの割り当て

SAML SSO とプロビジョニングを構成したら、{% data variables.product.prodname_emu_idp_application %} アプリケーションにユーザーまたはグループを割り当てることで、{% data variables.product.prodname_dotcom_the_website %} に新しいユーザーをプロビジョニングできるようになります。 

{% data reusables.scim.emu-scim-rate-limit %}

また、Okta の [プッシュ グループ] タブにグループを追加することで、Organization のメンバーシップを自動的に管理することもできます。 グループが正常にプロビジョニングされると、エンタープライズの組織のチームに接続できるようになります。 チームの管理の詳細については、「[ID プロバイダー グループを使用したチーム メンバーシップの管理](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)」を参照してください。

ユーザーを割り当てるときは、{% data variables.product.prodname_emu_idp_application %} アプリケーションの [ロール] 属性を使用して、エンタープライズのユーザーのロールを {% data variables.product.product_name %} で設定できます。 ロールの詳細については、「[エンタープライズでのロール](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

![Okta でプロビジョニングされたユーザーのロール オプションを示すスクリーンショット](/assets/images/help/enterprises/okta-emu-user-role.png)

## ユーザーとグループのプロビジョニング解除

{% data variables.product.product_name %} からユーザーまたはグループを削除するには、Okta の [割り当て] タブと [プッシュ グループ] タブの両方からユーザーまたはグループを削除します。 ユーザーの場合は、[プッシュ グループ] タブのすべてのグループからユーザーが削除されていることを確認してください。


