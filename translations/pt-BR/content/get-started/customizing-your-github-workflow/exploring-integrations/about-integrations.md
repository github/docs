---
title: Sobre integrações
intro: 'As integrações são ferramentas e serviços que se conectam ao {% data variables.product.product_name %} para complementar e estender o fluxo de trabalho.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095672'
---
Você pode instalar integrações em sua conta pessoal ou em organizações que possui. Você também pode instalar {% data variables.product.prodname_github_apps %} a partir de um repositório específico em um repositório específico em que você tem permissões de administrador ou que pertencem à sua organização.

## Diferenças entre {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}

As integrações podem ser {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, ou qualquer coisa que utilize {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs ou webhooks.

{% data variables.product.prodname_github_apps %} oferecem permissões granulares e solicitam acesso apenas ao que o aplicativo precisa. {% data variables.product.prodname_github_apps %} também oferece permissões específicas no nível de usuário que cada um deve autorizar individualmente quando um aplicativo está instalado ou quando o integrador altera as permissões solicitadas pelo aplicativo.

Para obter mais informações, consulte:
- "[Diferenças entre o {% data variables.product.prodname_github_apps %} e o {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- "[Sobre os aplicativos](/apps/about-apps/)"
- "[Permissões no nível do usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Como autorizar {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
- "[Como autorizar {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Como revisar suas integrações autorizadas](/articles/reviewing-your-authorized-integrations/)"

Será possível instalar um {% data variables.product.prodname_github_app %} pré-configurado se os integradores ou criadores de app tiverem criado o respectivo app com o fluxo de manifesto do {% data variables.product.prodname_github_app %}. Para obter informações sobre como executar o {% data variables.product.prodname_github_app %} com configuração automatizada, entre em contato com o integrador ou criador do app.

Você poderá criar um {% data variables.product.prodname_github_app %} com configuração simplificada se usar o Probot. Para obter mais informações, confira o site da [documentação do Probot](https://probot.github.io/docs/).

## Descobrir integrações no {% data variables.product.prodname_marketplace %}

É possível encontrar uma integração para instalar ou publicar a sua própria integração no {% data variables.product.prodname_marketplace %}.

O [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contém {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}. Para obter mais informações sobre como encontrar uma integração ou criar sua integração, confira "[Sobre o {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)".

## Integrações compradas diretamente de integradores

Você também pode comprar algumas integrações diretamente de integradores. Como um integrante da organização, ao encontrar um {% data variables.product.prodname_github_app %} que queira usar, você poderá solicitar que uma organização aprove e instale o app para a organização.

Se você tiver permissões de administrador para todos os repositórios de organizações em que o app está instalado, você poderá instalar {% data variables.product.prodname_github_apps %} com permissões de nível de repositório sem ter que solicitar que o proprietário da organização aprove o aplicativo. Quando um integrador altera as permissões do app, se as permissões forem apenas para um repositório, os proprietários da organização e as pessoas com permissões de administrador para um repositório com esse app instalado poderão revisar e aceitar as novas permissões.
