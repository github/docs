---
title: 暗号化されたアサーションの有効化
shortTitle: Enable encrypted assertions
intro: 'SAML ID プロバイダー (IdP) から送信されるメッセージを暗号化することにより、SAML シングル サインオン (SSO) を使って {% data variables.product.product_location %} のセキュリティを向上させることができます。'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063779'
---
## 暗号化されたアサーションについて

IdP でアサーションの暗号化がサポートされている場合は、認証プロセス中にセキュリティを強化するため、{% data variables.product.product_name %} で暗号化されたアサーションを構成できます。

## 前提条件

暗号化されたアサーションを {% data variables.product.product_name %} の認証に対して有効にするには、SAML 認証を構成する必要があり、IdP は暗号化されたアサーションをサポートする必要があります。

## 暗号化されたアサーションの有効化

暗号化されたアサーションを有効にするには、{% data variables.product.product_location %} の公開証明書を IdP に提供し、IdP に一致する暗号化設定を構成する必要があります。

{% note %}

**注**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. 必要に応じて、SAML デバッグを有効にします。 SAML デバッグでは、{% data variables.product.product_name %} の認証ログに詳細エントリが記録され、失敗した認証試行のトラブルシューティングに役立つ場合があります。 詳しくは、[SAML 認証のトラブルシューティング](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)に関する記事をご覧ください。
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. **[Require encrypted assertions]\(暗号化されたアサーションを要求する\)** を選択します。

   ![管理コンソールの [認証] セクション内の [暗号化アサーションを有効にする] チェックボックスのスクリーンショット](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. [暗号化証明書] の右側にある **[ダウンロード]** をクリックして、{% data variables.product.product_location %} の公開証明書のコピーをローカル コンピューターに保存します。

   ![暗号化されたアサーションのパブリック証明書の [ダウンロード] ボタンのスクリーンショット](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. SAML IdP に管理者としてサインインします。
1. {% data variables.product.product_location %} のアプリケーションで、暗号化されたアサーションを有効にします。
   - 暗号化方法とキー トランスポート方法に注意してください。
   - 手順 7 でダウンロードした公開証明書を指定します。
1. {% data variables.product.product_location %} の管理コンソールに戻ります。
1. [暗号化方法] の右側で、手順 9 の IdP の暗号化方法を選択します。

   ![暗号化されたアサーションの [暗号化方法] のスクリーンショット](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. [Key Transport Method]\(キー トランスポート方法\) の右側で、手順 9 の IdP のキー トランスポート方法を選択します。

   ![暗号化されたアサーションの [Key Transport Method]\(キー トランスポート方法\) のスクリーンショット](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. **[Save settings](設定の保存)** をクリックします。
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

暗号化されたアサーションを使用して認証をテストするために SAML デバッグを有効にした場合は、テストが完了したときに SAML デバッグを無効にします。 詳しくは、[SAML 認証のトラブルシューティング](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)に関する記事をご覧ください。
