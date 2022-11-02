---
title: Sobre a autenticação com logon único de SAML
intro: 'Você pode acessar {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}uma organização que usa SSO (logon único) SAML{% endif %} autenticando {% ifversion ghae %}com SSO (logon único) de SAML {% endif %}por meio de um IdP (provedor de identidade).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111510'
---
## Sobre autenticação com SSO do SAML

{% ifversion ghae %}

O SAML SSO permite que um proprietário corporativo realize o controle central e proteja o acesso para {% data variables.product.product_name %} a partir de um IdP do SAML. Ao acessar {% data variables.location.product_location %} em um navegador, {% data variables.product.product_name %} irá redirecioná-lo para seu IdP para efetuar a autenticação. Depois de concluir a autenticação com sucesso com uma conta no IdP, este irá redirecionar você de volta para {% data variables.location.product_location %}. {% data variables.product.product_name %} valida a resposta do seu IpD e, em seguida, concede acesso.

{% data reusables.saml.you-must-periodically-authenticate %}

Se você não puder acessar {% data variables.product.product_name %}, entre em contato com o proprietário da empresa local ou administrador para {% data variables.product.product_name %}. Talvez você possa localizar as informações de contato da sua empresa clicando em **Suporte** na parte inferior de qualquer página no {% data variables.product.product_name %}. {% data variables.product.company_short %} e {% data variables.contact.github_support %} não têm acesso ao seu IdP e não podem solucionar problemas de autenticação. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Os proprietários da organização podem convidar sua conta pessoal no {% data variables.product.prodname_dotcom %} para ingressar na organização deles que usa o SSO do SAML, o que permitirá a você colaborar com a organização e manter sua identidade e colaborações existentes no {% data variables.product.prodname_dotcom %}.

Se você for integrante de um {% data variables.enterprise.prodname_emu_enterprise %}, você usará uma nova conta que lhe será fornecida e controlada pela sua empresa. {% data reusables.enterprise-accounts.emu-more-info-account %}

Ao tentar acessar a maioria dos recursos em uma organização que usa SSO de SAML, {% data variables.product.prodname_dotcom %} vai redirecionar você para o SAML IdP da organização para que efetue a\ autenticação. Depois de efetuar a autenticação com sucesso com sua conta no IdP, este irá redirecionar você de volta para {% data variables.product.prodname_dotcom %}, onde você poderá acessar os recursos da organização.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Se você efetuou a autenticação recentemente com o IdP SAML da sua organização no navegador, você estará automaticamente autorizado ao acessar uma organização do {% data variables.product.prodname_dotcom %} que usa SAML SSO. Se não tiver efetuado a autenticação recentemente com o IdP SAML da sua organização no navegador, você deverá efetuar a autenticação no SAML IdP antes de acessar a organização.

{% data reusables.saml.you-must-periodically-authenticate %}

## Identidades SAML vinculadas

Quando você se autenticar com sua conta IdP e retornar para {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} registrará um link na organização ou empresa entre sua conta pessoal do {% data variables.product.prodname_dotcom %} e a identidade SAML na qual você se conectou.  Essa identidade vinculada é usada para validar sua associação nessa organização e, dependendo de sua organização ou configuração empresarial, também é usada para determinar de quais organizações e equipes você também é membro. Cada conta do {% data variables.product.prodname_dotcom %} pode ser vinculada a exatamente uma identidade SAML por organização. Da mesma forma, cada identidade SAML pode ser vinculada a exatamente uma conta do {% data variables.product.prodname_dotcom %} em uma organização. 

Se você entrar com uma identidade SAML que já esteja vinculada a outra conta do {% data variables.product.prodname_dotcom %}, receberá uma mensagem de erro indicando que você não pode entrar com essa identidade SAML. Essa situação poderá ocorrer se você estiver tentando usar uma nova conta do {% data variables.product.prodname_dotcom %} para trabalhar dentro da sua organização. Se você não pretende usar essa identidade SAML com essa conta do {% data variables.product.prodname_dotcom %}, precisará sair dessa identidade SAML e repetir o logon SAML. Se você quiser usar essa identidade SAML com sua conta do {% data variables.product.prodname_dotcom %}, precisará pedir ao administrador para desvincular sua identidade SAML de sua conta antiga, para que possa vinculá-la à sua nova conta.  Dependendo da configuração da sua organização ou empresa, o administrador também pode precisar reatribuir sua identidade em seu provedor SAML.  Para obter mais informações, confira "[Como exibir e gerenciar o acesso SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

Se a identidade SAML com a qual você se conecta não corresponder à identidade SAML que está vinculada atualmente à sua conta do {% data variables.product.prodname_dotcom %}, você receberá um aviso de que está prestes a vincular novamente sua conta. Como sua identidade SAML é usada para controlar o acesso e a associação de equipe, continuar com a nova identidade SAML poderá fazer com que você perca o acesso a equipes e organizações dentro de {% data variables.product.prodname_dotcom %}. Continue apenas se souber que deve usar essa nova identidade SAML para autenticação no futuro. 

## Como autorizar {% data variables.product.pat_generic %}s e chaves SSH com SSO de SAML

Para usar a API ou Git na linha de comando de modo a acessar conteúdo protegido em uma organização que usa SSO de SAML, você precisará usar um {% data variables.product.pat_generic %} autorizado por HTTPS ou uma chave SSH autorizada.

Se você não tem uma chave {% data variables.product.pat_generic %} ou SSH, pode criar uma {% data variables.product.pat_generic %} para a linha de comando ou gerar uma nova chave SSH. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" ou "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para usar um {% data variables.product.pat_generic %} novo ou existente ou chave SSH com uma organização que usa ou impõe o SSO de SAML, você precisará autorizar o token ou autorizar a chave SSH para uso com uma organização de SSO de SAML. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para uso com o logon único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" ou "[Como autorizar uma chave SSH para uso com o logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".

## Sobre o {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} e SSO do SAML

Você deverá ter uma sessão do SAML ativa sempre que autorizar um {% data variables.product.prodname_oauth_app %} ou {% data variables.product.prodname_github_app %} a acessar uma organização que use ou aplique o SSO do SAML. Você pode criar uma sessão do SAML ativa ao acessar `https://github.com/orgs/ORGANIZATION-NAME/sso` no navegador.

Depois que um proprietário da empresa ou organização habilitar ou impuser o SSO do SAML a uma organização e, depois que se autenticar via SAML pela primeira vez, você deverá reautorizar todos os {% data variables.product.prodname_oauth_apps %} ou {% data variables.product.prodname_github_apps %} autorizados anteriormente para acessar a organização. 

Para ver os {% data variables.product.prodname_oauth_apps %} que você autorizou, visite sua [página dos {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Para ver os {% data variables.product.prodname_github_apps %} que você autorizou, visite sua [página dos {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Leitura adicional

{% ifversion ghec %}– "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %} {% ifversion ghae %}– "[Sobre o gerenciamento de identidades e acesso para sua empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
