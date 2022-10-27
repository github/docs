---
ms.openlocfilehash: b5ea320db35c6a770853644bcdb50117d3da578d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108790"
---
SAML SSO を構成する場合、組織のメンバーは引き続き {% data variables.product.prodname_dotcom_the_website %} で個人アカウントにサインインします。 組織内の非パブリックのリソースにメンバーがアクセスすると、{% data variables.product.prodname_dotcom %} により、認証のためにメンバーが IdP にリダイレクトされます。 認証に成功すると、IdP はメンバーを {% data variables.product.prodname_dotcom %} にリダイレクトして戻します。 詳細については、「[SAML のシングル サインオンでの認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」を参照してください。

{% note %}

**注:** SAML SSO は、{% data variables.product.prodname_dotcom %} の通常のサインイン プロセスに代わるものではありません。 {% data variables.product.prodname_emus %} を使用する場合を除き、メンバーは {% data variables.product.prodname_dotcom_the_website %} で引き続き個人アカウントにサインインし、各個人アカウントは IdP で外部 ID にリンクされます。

{% endnote %}
