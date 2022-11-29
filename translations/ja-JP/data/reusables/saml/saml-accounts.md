---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111522"
---
SAML SSO を構成する場合、組織のメンバーは引き続き {% data variables.product.prodname_dotcom_the_website %} で個人アカウントにサインインします。 組織内のほとんどのリソースは、メンバーがアクセスすると、{% data variables.product.prodname_dotcom %} によってメンバーは IdP にリダイレクトされ、認証を受けます。 認証に成功すると、IdP はメンバーを {% data variables.product.prodname_dotcom %} にリダイレクトして戻します。 詳細については、「[SAML のシングル サインオンでの認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」を参照してください。

{% note %}

**注:** SAML SSO は、{% data variables.product.prodname_dotcom %} の通常のサインイン プロセスに代わるものではありません。 {% data variables.product.prodname_emus %} を使用する場合を除き、メンバーは {% data variables.product.prodname_dotcom_the_website %} で引き続き個人アカウントにサインインし、各個人アカウントは IdP で外部 ID にリンクされます。

{% endnote %}
