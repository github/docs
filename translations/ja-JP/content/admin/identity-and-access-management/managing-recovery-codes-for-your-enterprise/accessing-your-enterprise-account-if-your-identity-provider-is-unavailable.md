---
title: ID プロバイダーが使用できない場合の Enterprise アカウントへのアクセス
shortTitle: Access your enterprise account
intro: 'ID プロバイダーが使用できない場合でも、回復用コードを使ってシングル サインオン (SSO) をバイパスすることで {% data variables.product.product_name %} にサインインできます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578805'
---
認証構成エラーまたは ID プロバイダー (IdP) の問題によって SSO を使用できない場合は、回復用コードを使ってエンタープライズ アカウントにアクセスできます。 

この方法で Enterprise アカウントにアクセスするには、Enterprise のリカバリ コードを以前にダウンロードして保存しておく必要があります。 詳細については、「[エンタープライズ アカウントのシングル サインオン回復用コードをダウンロードする](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)」を参照してください。

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**注:** Enterprise が {% data variables.product.prodname_emus %} を使用している場合は、リカバリ コードを使用するには、セットアップ ユーザーとしてサインインする必要があります。

{% endnote %}

{% data reusables.saml.recovery-code-access %}
