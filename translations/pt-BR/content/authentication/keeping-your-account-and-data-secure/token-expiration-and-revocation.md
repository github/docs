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
shortTitle: Vencimento do token
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
---

Se um token {% ifversion fpt or ghae-issue-4374 or ghes > 3.2 or ghec %}venceu ou {% endif %} foi revogado, ele não poderá mais ser usado para autenticar o Git e solicitações de API. Não é possível restaurar um token vencido ou revogado, você ou o aplicativo deverá criar um novo token.

Este artigo explica os possíveis motivos pelos quais seu token {% data variables.product.product_name %} pode ser revogado ou vencido.

{% note %}

**Observação:** Quando um token de acesso pessoal ou token OAuth vence ou é revogado, você pode ver uma ação de `oauth_authorization.destroy` no seu log de segurança. Para obter mais informações, consulte "[Revisar o log de segurança](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)."

{% endnote %}

{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 or ghec %}
## Token revogado após atingir sua data de validade

Ao criar um token de acesso pessoal, recomendamos que você defina uma data de vencimento para o seu token. Ao alcançar a data de vencimento do seu token, este será automaticamente revogado. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
{% endif %}

{% ifversion fpt or ghec %}
## Token revogado quando enviado por push para um repositório público ou gist público

Se um token do OAuth válido, um token de {% data variables.product.prodname_github_app %} ou o token de acesso pessoal é receber push para um repositório público ou gist, o token será revogado automaticamente.

Os tokens OAuth e os tokens de acesso pessoal enviados para repositórios públicos e gists públicos só serão revogados se o token tiver escopos.
{% endif %}

{% ifversion fpt or ghec %}
## Token vencido devido à falta de uso

{% data variables.product.product_name %} irá revogar automaticamente um token OAuth ou um token de acesso pessoal quando o token não for usado em um ano.
{% endif %}

## Token revogado pelo usuário

Você pode revogar a sua autorização de um {% data variables.product.prodname_github_app %} ou {% data variables.product.prodname_oauth_app %} a partir das configurações da sua conta que irão revogar todos tokens associados ao aplicativo. Para obter mais informações, consulte "[Revendo suas integrações autorizadas](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)" e "[Revendo seus aplicativos autorizados (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)".

Depois que uma autorização for revogada, todos os tokens associados à autorização também serão revogados. Para autorizar novamente um aplicativo, siga as instruções do aplicativo de terceiros ou do site para conectar sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} novamente.

## Token revogado por {% data variables.product.prodname_oauth_app %}

O proprietário de um {% data variables.product.prodname_oauth_app %} pode revogar a autorização de uma conta do seu aplicativo. Isso também irá revogar todos os tokens associados à autorização. Para obter mais informações sobre a revogação de autorizações do seu aplicativo OAuth, consulte[Excluir uma autorização de aplicativo](/rest/reference/apps#delete-an-app-authorization). "

## Token revogado devido ao excesso de tokens para um {% data variables.product.prodname_oauth_app %} com o mesmo escopo

{% data reusables.apps.oauth-token-limit %}

## Token de usuário revogado devido à configuração de {% data variables.product.prodname_github_app %}

Por padrão, os tokens de usuário para servidor criados por um {% data variables.product.prodname_github_app %} vencerão após oito horas. Os proprietários de {% data variables.product.prodname_github_apps %} podem configurar seus aplicativos para que os tokens de usuário para servidor não vençam. Para obter mais informações sobre como se comportam os tokens de usuário para servidor do seu aplicativo de {% data variables.product.prodname_dotcom %}, consulte "[Habilitando as funcionalidaes opcionais para os aplicativos](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps). "
