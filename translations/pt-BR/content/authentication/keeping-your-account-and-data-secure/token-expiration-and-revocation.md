---
title: Vencimento e revogação de token
intro: 'Seus tokens podem vencer e também podem ser revogados por você, pelos aplicativos que você autorizou e pelo próprio {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106994'
---
Quando um token vencer ou for revogado, ele não poderá mais ser usado para autenticar solicitações do Git e da API. Não é possível restaurar um token vencido ou revogado, você ou o aplicativo deverá criar um novo token.

Este artigo explica os possíveis motivos pelos quais seu token {% data variables.product.product_name %} pode ser revogado ou vencido.

{% note %}

**Observação:** quando um {% data variables.product.pat_generic %} ou um token OAuth vence ou é revogado, pode aparecer uma ação `oauth_authorization.destroy` no log de segurança. Para obter mais informações, confira "[Como revisar o log de segurança](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% endnote %}

## Token revogado após atingir sua data de validade

Ao criar um {% data variables.product.pat_generic %}, recomendamos que você defina um vencimento para o token. Ao alcançar a data de vencimento do seu token, este será automaticamente revogado. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% ifversion fpt or ghec %}
## Token revogado quando enviado por push para um repositório público ou gist público

Se um token OAuth válido, um token do {% data variables.product.prodname_github_app %} ou um {% data variables.product.pat_generic %} for enviado por push a um repositório ou gist público, o token será revogado automaticamente. 

{% endif %}

{% ifversion fpt or ghec %}
## Token vencido devido à falta de uso

O {% data variables.product.product_name %} vai revogar automaticamente um token OAuth ou um {% data variables.product.pat_generic %} quando o token não for usado em um ano.
{% endif %}

## Token revogado pelo usuário

Você pode revogar a sua autorização de um {% data variables.product.prodname_github_app %} ou {% data variables.product.prodname_oauth_app %} a partir das configurações da sua conta que irão revogar todos tokens associados ao aplicativo. Para obter mais informações, confira "[Como revisar suas integrações autorizadas](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)" e "[Como revisar seus aplicativos autorizados (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)".

Depois que uma autorização for revogada, todos os tokens associados à autorização também serão revogados. Para autorizar novamente um aplicativo, siga as instruções do aplicativo ou do site de terceiros para conectar a conta {% ifversion ghae %}no {% data variables.product.product_name %}{% else %}em {% data variables.location.product_location %}{% endif %} novamente.

## Token revogado por {% data variables.product.prodname_oauth_app %}

O proprietário de um {% data variables.product.prodname_oauth_app %} pode revogar a autorização de uma conta do seu aplicativo. Isso também irá revogar todos os tokens associados à autorização. Para obter mais informações sobre como revogar autorizações do seu aplicativo OAuth, confira "[Excluir uma autorização de aplicativo](/rest/reference/apps#delete-an-app-authorization)".

Proprietários de {% data variables.product.prodname_oauth_app %} também podem revogar tokens individuais associados a uma autorização. Para obter mais informações sobre como revogar tokens individuais para seu aplicativo OAuth, veja "[Excluir um token de aplicativo](/rest/apps/oauth-applications#delete-an-app-token)".

## Token revogado devido ao excesso de tokens para um {% data variables.product.prodname_oauth_app %} com o mesmo escopo

{% data reusables.apps.oauth-token-limit %}

## Token de usuário revogado devido à configuração de {% data variables.product.prodname_github_app %}

Por padrão, os tokens de usuário para servidor criados por um {% data variables.product.prodname_github_app %} vencerão após oito horas. Os proprietários de {% data variables.product.prodname_github_apps %} podem configurar seus aplicativos para que os tokens de usuário para servidor não vençam. Para obter mais informações sobre como o comportamento dos tokens de usuário para servidor do Aplicativo do {% data variables.product.prodname_dotcom %}, confira "[Como ativar recursos opcionais para aplicativos](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)".
