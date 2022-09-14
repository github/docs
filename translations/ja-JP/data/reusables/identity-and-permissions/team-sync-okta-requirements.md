---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878748"
---
Okta で Team 同期を有効にする前に、あなたもしくは IdP の管理者は以下を実行しなければなりません。

- Okta を利用する Organization で SAML SSO と SCIM を有効化する。 詳細については、「[Okta を使う SAML シングルサインオンおよび SCIM を設定する](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)」を参照してください。
- Okta インスタンスのテナント URL を指定する。
- サービス ユーザーとして、Okta のインストールに対する読み取り専用の管理者アクセス許可を持つ有効な SSWS トークンを生成する。 詳細については、Okta での[トークンの作成](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/)と[サービス ユーザー](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm)に関する説明を参照してください。
