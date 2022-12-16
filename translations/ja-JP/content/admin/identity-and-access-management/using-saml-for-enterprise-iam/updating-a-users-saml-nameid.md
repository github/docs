---
title: ユーザーの SAML NameID の更新
shortTitle: Update SAML NameID
intro: 'ID プロバイダー (IdP) でアカウントの `NameID` が変更され、そのユーザーが {% ifversion ghes or ghae %}{% data variables.product.product_location %} にサインインすることが{% elsif ghec %}Enterprise のリソースにアクセスするために認証を行うことが{% endif %}できなくなった場合は、{% ifversion ghec %}{% data variables.product.company_short %} サポートに問い合わせるか、ユーザーのリンクされた ID を取り消す{% elsif ghes %}{% data variables.product.product_location %} で `NameID` のマッピングを更新する{% elsif ghae %}{% data variables.product.company_short %} サポートに問い合わせる{% endif %}必要があります。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7a151143219fc0885861beedb69a2608983c5588
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717902'
---
## ユーザーの SAML `NameID` の更新について

状況によっては、SAML IdP 上のユーザーのアカウントに関連付けられている値を更新する必要がある場合があります。 その識別子が {% data variables.product.product_name %} 上の認証に使用する `NameID` でもある場合は、インスタンス上の `NameID` マッピングを更新して、ユーザーが正常に認証を続行できるようにする必要があります。 詳しい情報については、「[外部認証のユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。

## ユーザーの SAML `NameID` の更新

Enterprise 所有者は、{% data variables.product.product_name %} インスタンスでユーザーの SAML `NameID` を更新できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左側のサイドバーで、 **[すべてのユーザー]** をクリックします。
  ![サイト管理者設定の [すべてのユーザー] サイドバー項目](/assets/images/enterprise/site-admin-settings/all-users.png)
3. ユーザーの一覧で、`NameID` マッピングを更新するユーザー名をクリックします。
  ![インスタンス ユーザー アカウントの一覧にあるユーザー名](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. [Update SAML NameID]\(SAML NameID の更新\) の右側にある **[編集]** をクリックします。
  ![[SAML 認証] の下と [Update SAML NameID]\(SAML NameID の更新\) の右側にある [編集] ボタン](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. "NameID" フィールドに、ユーザーの新しい `NameID` を入力します。
  ![NameID が入力されたモーダル ダイアログの "NameID" フィールド](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. **[Update NameID]\(NameID の更新\)** をクリックします。
  ![モーダル内の更新された NameID 値の下にある [Update NameID]\(NameID の更新\) ボタン](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
