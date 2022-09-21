---
title: Substituir os GitHub Services
intro: 'Se você ainda depende dos serviços obsoletos do {% data variables.product.prodname_dotcom %}, aprenda como migrar seus hooks de serviço para webhooks.'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093904'
---
Nós tornamos o GitHub Services obsoletos em favor da integração com webhooks. Este guia ajuda você a fazer a transição para webhooks dos serviços do GitHub. Para obter mais informações sobre esse comunicado, confira a [postagem no blog](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Como uma alternativa ao serviço de e-mail, agora você pode começar a usar notificações por e-mail para push no repositório. Confira "[Sobre as notificações por email para pushes no seu repositório](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para saber como configurar as notificações de email de commit.

{% endnote %}

## Linha do tempo da depreciação

- **1º de outubro de 2018**: o GitHub descontinuou a permissão aos usuários para instalação de serviços. Removemos o GitHub Services da interface de usuário do GitHub.com.
- **29 de janeiro de 2019**: como uma alternativa ao serviço de email, você já pode começar a usar as notificações por email para os pushes no seu repositório. Confira "[Sobre as notificações por email para pushes no seu repositório](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para saber como configurar as notificações de email de commit.
- **31 de janeiro de 2019**: o GitHub deixará de fornecer eventos de serviços instalados no GitHub.com.

## Antecedentes do GitHub Services

O GitHub Services (às vezes chamado de Ganchos de Serviço) é o método herdado de integração, em que GitHub hospedava uma parte dos serviços do nosso integrador por meio [do repositório `github-services`](https://github.com/github/github-services). Ações executadas no GitHub acionam esses serviços e você pode usá-los para acionar ações fora do GitHub.

{% ifversion ghes %}
## Encontrar repositórios que usam o GitHub Services
Fornecemos um script de linha de comando que ajuda a identificar quais repositórios usam o GitHub Services. Para obter mais informações, confira [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

## GitHub Services vs. webhooks

As principais diferenças entre o GitHub Services e webhooks:
- **Configuração**: o GitHub Services tem opções de configuração específicas do serviço, enquanto os webhooks são configurados simplesmente pela especificação de uma URL e de um conjunto de eventos.
- **Lógica personalizada**: o GitHub Services pode ter uma lógica personalizada para responder com várias ações como parte do processamento de um só evento, enquanto os webhooks não têm nenhuma lógica personalizada.
- **Tipos de solicitações**: o GitHub Services pode fazer solicitações HTTP e que não são HTTP, enquanto os webhooks só podem fazer solicitações HTTP.

## Substituir os serviços por webhooks

Para substituir GitHub Services por Webhooks:

1. Identifique os eventos de webhook relevantes nos quais você precisará inscrever [nesta lista](/webhooks/#events).

2. Altere sua configuração dependendo de como você usa atualmente os GitHub Services:

   - **Aplicativos do GitHub**: atualize as permissões e os eventos assinados do aplicativo para configurar seu aplicativo para receber os eventos de webhook relevantes.
   - **Aplicativos OAuth**: solicite os escopos `repo_hook` e/ou `org_hook` para gerenciar os eventos relevantes em nome dos usuários.
   - **Provedores do GitHub Services**: solicite aos usuários que configurem manualmente um webhook com os eventos relevantes enviados a você ou aproveite esta oportunidade para criar um aplicativo a fim de gerenciar essa funcionalidade. Para obter mais informações, confira "[Sobre os aplicativos](/apps/about-apps/)".

3. Mover configuração adicional de fora do GitHub. Alguns GitHub Services exigem uma configuração adicional e personalizada na página de configuração do GitHub. Se o seu serviço fizer isso, você deverá mover esta funcionalidade para seu aplicativo ou depender dos aplicativos GitHub ou OAuth, quando necessário.

## Compatibilidade com {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: o {% data variables.product.prodname_ghe_server %} versão 2.17 ou superior descontinuará a permissão dos administradores de instalarem serviços. Os administradores continuarão podendo modificar hooks de serviço existentes e receber hooks de serviço no {% data variables.product.prodname_ghe_server %} para as versões 2.17 a 2.19. Como alternativa ao serviço de e-mail, você poderá usar notificações de e-mail para push para seu repositório no {% data variables.product.prodname_ghe_server %} com versão 2.17 ou superior. Confira [esta postagem no blog](https://developer.github.com/changes/2019-01-29-life-after-github-services) para saber mais.
- **{% data variables.product.prodname_ghe_server %} 2.20**: o {% data variables.product.prodname_ghe_server %} versão 2.20 e superior deixará de entregar todos os eventos de serviços instalados.

A versão 2.17 do {% data variables.product.prodname_ghe_server %} será a primeira versão que não permite que os administradores instalem o GitHub Services. Só suportaremos o GitHub Services existente até o lançamento da versão do {% data variables.product.prodname_ghe_server %}. Também aceitaremos quaisquer patches críticos o seu GitHub Services em execução em {% data variables.product.prodname_ghe_server %} até 1 de outubro de 2019.

## Migrar com a nossa ajuda

[Entre em contato conosco](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation) em caso de dúvidas.

Como uma visão geral de alto nível, o processo de migração normalmente envolve:
  - Identificar como e onde seu produto está usando o GitHub Services.
  - Identificar os eventos de webhook correspondentes que você precisa configurar para mover para webhooks simples.
  - Implementar o design por meio dos [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) ou dos [{% data variables.product.prodname_github_apps %}. O uso dos {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) é preferencial. Para saber mais sobre por que o uso dos {% data variables.product.prodname_github_apps %} é preferencial, confira "[Motivos para mudar para os {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)".
