---
title: Impedir acesso não autorizado
intro: 'Você pode receber alertas sobre incidentes de segurança na mídia, como a descoberta do [bug Heartbleed](http://heartbleed.com/), ou seu computador pode ser roubado enquanto você está conectado ao {% data variables.product.product_location %}. Em casos assim, alterar a sua senha previne acessos futuros indesejados em sua conta e projetos.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083629'
---
O {% data variables.product.product_name %} solicita uma senha para executar ações confidenciais, como adicionar novas chaves SSH, autorizar aplicativos ou modificar os integrantes da equipe.

Depois de alterar sua senha, você deve executar estas ações para confirmar que sua conta está segura:

- [Habilite a autenticação de dois fatores](/articles/about-two-factor-authentication) na sua conta para que o acesso exija mais do que apenas uma senha.
- [Revise suas chaves SSH](/articles/reviewing-your-ssh-keys), [chaves de implantação](/articles/reviewing-your-deploy-keys) e [integrações autorizadas](/articles/reviewing-your-authorized-integrations) e revogue o acesso não autorizado ou desconhecido nas configurações de SSH e Aplicativos.
{% ifversion fpt or ghec %}
- [Verifique todos os seus endereços de email](/articles/verifying-your-email-address). Se um invasor adicionou o endereço de e-mail dele à sua conta, isso pode permitir que ele force uma reinicialização de senha indesejada.
{% endif %}
- [Revise o log de segurança da sua conta](/github/authenticating-to-github/reviewing-your-security-log). O histórico apresenta uma uma visão geral sobre várias configurações feitas em seus repositórios. Por exemplo, você pode confirmar que nenhum repositório privado se tornou público ou foi transferido.
- [Revise os webhooks](/articles/creating-webhooks) nos seus repositórios. Os webhooks podem permitir que um invasor intercepte pushes feitos em seu repositório.
- [Garanta que nenhuma nova chave de implantação](/guides/managing-deploy-keys/#deploy-keys) seja criada. Isso poderia habilitar o acesso de servidores externos em seus projetos.
- Revise os commits recentes feitos em seus repositórios.
- Revise a lista de colaboradores de cada repositório.
