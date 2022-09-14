---
title: エンタープライズ アカウントのシングル サインオンの回復コードをダウンロードする
shortTitle: Download recovery codes
intro: 'ID プロバイダー (IdP) を使用できない場合に {% data variables.product.product_name %} に確実にアクセスできるようにするには、エンタープライズ アカウントのシングル サインオン (SSO) 回復コードをダウンロードする必要があります。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063595'
---
IdP が使用できないイベントでは、回復コードを使用してサインインし、{% data variables.product.product_location %} で Enterprise にアクセスできます。 詳細については、「[ID プロバイダーが使用できない場合の Enterprise アカウントへのアクセス](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)」を参照してください。

SSO を構成したときに回復コードを保存しなかった場合でも、エンタープライズの設定からコードにアクセスできます。



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. {% ifversion oidc-for-emu %}{% endif %}[Require SAML authentication]\(SAML 認証を必須にする\){% ifversion oidc-for-emu %} または [Require OIDC authentication]\(OIDC 認証を必須にする\){% endif %} の下にある **[Save your recovery codes]\(回復コードの保存\)** をクリックします。{% ifversion oidc-for-emu %} {% note %}
  
  **注:** OIDC SSO は {% data variables.product.prodname_emus %} の場合にのみ使用できます。 詳細については、「[Enterprise Managed Users について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)」を参照してください。
  
  {% endnote %}{% endif %}
  
  ![適用する前に SAML 構成をテストするボタンのスクリーンショット](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. リカバリ コードを保存するには、 **[ダウンロード]** 、 **[印刷]** 、または **[コピー]** をクリックします。
  ![リカバリ コードをダウンロード、印刷、またはコピーするボタンのスクリーンショット](/assets/images/help/saml/saml_recovery_code_options.png)
