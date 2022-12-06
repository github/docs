---
ms.openlocfilehash: c1da48d511a07b94da622dbb617ffe37cac10e34
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088496"
---
2FA を構成した後、時間ベースのワンタイム パスワード (TOTP) モバイル アプリ {% ifversion fpt or ghec %} を使用するか、テキスト メッセージ{% endif %}を使用して、指紋リーダーや Windows Hello などのセキュリティ キーを追加できます。 セキュリティキーを使用した認証を可能にする技術は、WebAuthnと呼ばれます。 WebAuthnはU2Fの後継であり、現代的なすべてのブラウザーで動作します。 詳細については、「[WebAuthn](https://webauthn.guide/)」と[使用できるか](https://caniuse.com/#search=webauthn)に関するページを参照してください。
