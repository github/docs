---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573378"
---
個人用アクセス トークンまたは SSH キーを承認する前に、リンクされた SAML ID が必要です。 SAML SSO が有効になっている組織のメンバーである場合は、IdP を使用して組織に少なくとも 1 回認証することで、リンクされた ID を作成できます。 詳細については、「[SAML のシングル サインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」を参照してください。

個人用アクセス トークンまたは SSH キーを承認した後、トークンまたはキーは、次のいずれかの方法で取り消されるまで承認されたままとなります。
- 組織または企業の所有者が承認を取り消す。
- ユーザーが組織から削除される。
- 個人用アクセス トークン内のスコープが編集されるか、トークンが再生成される。
- 作成時に定義された個人用アクセス トークンの有効期限が切れている。
