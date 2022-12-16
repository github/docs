---
title: Sobre restrições de acesso do aplicativo OAuth
intro: As organizações podem escolher quais {% data variables.product.prodname_oauth_apps %} têm acesso aos seus repositórios e outros recursos, habilitando as restrições de acesso de {% data variables.product.prodname_oauth_app %}.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 43e12066ec9381a94fe45187d066300479aa495e
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145128298"
---
## Sobre restrições de acesso do aplicativo OAuth

Quando as restrições de acesso do {% data variables.product.prodname_oauth_app %} são habilitadas, os integrantes da organização não podem autorizar o acesso do {% data variables.product.prodname_oauth_app %} aos recursos da organização. Os integrantes da organização podem solicitar a aprovação do proprietário para {% data variables.product.prodname_oauth_apps %} que gostariam de usar, e os proprietários da organização receberão uma notificação de solicitações pendentes.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Dica**: quando uma organização não tiver configurado as restrições de acesso ao {% data variables.product.prodname_oauth_app %}, qualquer {% data variables.product.prodname_oauth_app %} autorizado por um membro da organização também poderá acessar os recursos privados da organização.

{% endtip %}

{% ifversion fpt %} Para proteger ainda mais os recursos da sua organização, você pode fazer upgrade para o {% data variables.product.prodname_ghe_cloud %}, que inclui recursos de segurança, como o logon único do SAML. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## Configurar as restrições de acesso do {% data variables.product.prodname_oauth_app %}

Quando um proprietário da organização configura as restrições de acesso do {% data variables.product.prodname_oauth_app %} pela primeira vez:

- Os **aplicativos que pertencem à organização** recebem automaticamente acesso aos recursos da organização.
- Os **{% data variables.product.prodname_oauth_apps %}** perdem imediatamente o acesso aos recursos da organização.
- As **chaves SSH criadas antes de fevereiro de 2014** perdem imediatamente o acesso aos recursos da organização (isso inclui as chaves de usuário e de implantação).
- As **chaves SSH criadas pelos {% data variables.product.prodname_oauth_apps %} durante ou após fevereiro de 2014** perdem imediatamente o acesso aos recursos da organização.
- As **entregas de gancho de repositórios privados da organização** não serão mais enviadas para {% data variables.product.prodname_oauth_apps %} não aprovados.
- O **acesso à API** aos recursos privados da organização não fica disponível para {% data variables.product.prodname_oauth_apps %} não aprovados. Além disso, não há ações de criação, atualização ou exclusão com privilégios em recursos de organização pública.
- Os **ganchos criados por usuários e os ganchos criados antes de maio de 2014** não serão afetados.
- Os **forks privados dos repositórios pertencentes à organização** estão sujeitos às restrições de acesso da organização.

## Resolver falhas de acesso de SSH

Quando uma chave SSH criada antes de fevereiro de 2014 perde acesso a uma organização com restrições de acesso do {% data variables.product.prodname_oauth_app %} habilitadas, as tentativas de acesso subsequentes do SSH falharão. Os usuários encontrarão uma mensagem de erro direcionando-as a uma URL onde podem aprovar a chave ou fazer upload de uma chave confiável.

## Webhooks

Quando um {% data variables.product.prodname_oauth_app %} receber acesso à organização depois que as restrições forem habilitadas, os webhooks preexistentes criados por esse {% data variables.product.prodname_oauth_app %} retomarão o envio.

Quando uma organização remover o acesso de um {% data variables.product.prodname_oauth_app %} anteriormente aprovado, todos os webhooks preexistentes criados por esse aplicativo não serão mais enviados (esses hooks serão desabilitados, mas não excluídos).

## Reabilitando restrições de acesso

Se uma organização desabilitar as restrições de acesso do {% data variables.product.prodname_oauth_app %} e, posteriormente, reabilitá-las, os {% data variables.product.prodname_oauth_app %}s anteriormente aprovados receberão acesso automaticamente aos recursos da organização.

## Leitura adicional

- "[Como habilitar as restrições de acesso ao {% data variables.product.prodname_oauth_app %} para sua organização](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Como aprovar {% data variables.product.prodname_oauth_apps %} para sua organização](/articles/approving-oauth-apps-for-your-organization)"
- "[Como revisar as integrações instaladas da organização](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Como negar o acesso a um {% data variables.product.prodname_oauth_app %} já aprovado para sua organização](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Como desabilitar as restrições de acesso ao {% data variables.product.prodname_oauth_app %} para sua organização](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Como solicitar aprovação da organização para {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Como autorizar {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
