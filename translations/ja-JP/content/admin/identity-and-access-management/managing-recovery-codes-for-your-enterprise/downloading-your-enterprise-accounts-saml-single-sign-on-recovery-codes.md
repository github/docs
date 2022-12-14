---
title: Enterprise アカウントの SAML シングル サインオンのリカバリ コードをダウンロードする
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116621"
---
IdP が使用できないイベントでは、回復コードを使用してサインインし、{% data variables.product.product_location %} で Enterprise にアクセスできます。 詳細については、「[ID プロバイダーが使用できない場合の Enterprise アカウントへのアクセス](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)」を参照してください。

SAML SSO を設定したときにリカバリ コードを保存しなかった場合でも、Enterprise の設定からコードにアクセスできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. [SAML 認証を必須にする] で、 **[リカバリ コードの保存]** をクリックします。
![適用する前に SAML 構成をテストするボタンのスクリーンショット](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. リカバリ コードを保存するには、 **[ダウンロード]** 、 **[印刷]** 、または **[コピー]** をクリックします。
![リカバリ コードをダウンロード、印刷、またはコピーするボタンのスクリーンショット](/assets/images/help/saml/saml_recovery_code_options.png)
