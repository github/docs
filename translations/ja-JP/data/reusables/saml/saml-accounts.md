---
ms.openlocfilehash: 41c1afacc9dbebc6722e5b60cbd5a52b5786df5d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526821"
---
SAML SSO を構成する場合、組織のメンバーは引き続き {% data variables.product.prodname_dotcom_the_website %} で個人アカウントにサインインします。 組織内の非パブリックのリソースにメンバーがアクセスすると、{% data variables.product.prodname_dotcom %} により、認証のためにメンバーが IdP にリダイレクトされます。 認証に成功すると、IdP はメンバーを {% data variables.product.prodname_dotcom %} にリダイレクトして戻します。 詳細については、「[SAML のシングル サインオンでの認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」を参照してください。

{% note %}

**注:** SAML SSO は、{% data variables.product.prodname_dotcom %} の通常のサインイン プロセスに代わるものではありません。 {% data variables.product.prodname_emus %} を使用する場合を除き、メンバーは {% data variables.product.prodname_dotcom_the_website %} で引き続き個人アカウントにサインインし、各個人アカウントは IdP で外部 ID にリンクされます。

{% endnote %}