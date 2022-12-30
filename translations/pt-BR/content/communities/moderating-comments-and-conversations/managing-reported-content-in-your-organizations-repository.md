---
title: Gerenciando o conteúdo denunciado no repositório da sua organização
intro: 'Depois que um colaborador relata conteúdo disruptivo em um repositório, os mantenedores do repositório podem exibir e gerenciar o relatório.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095211'
---
Qualquer pessoa com permissões de administrador em um repositório pode visualizar e gerenciar conteúdo denunciado no repositório.

## Sobre gerenciamento de conteúdo denunciado

Antes de poder visualizar ou gerenciar o conteúdo denunciado, você deve ativar o conteúdo relatado para o repositório. Para obter mais informações, confira "[Como gerenciar a forma como os colaboradores denunciam abuso no repositório da sua organização](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)".

Você pode rastrear, selecionar e responder relatórios de conteúdo disruptivo. Na lista "Relatórios de abuso", você pode visualizar todos os relatórios e navegar diretamente para cada comentário denunciado em {% data variables.product.prodname_dotcom %}.

{% data reusables.community.tools-for-moderating %}

Depois de terminar a moderação do conteúdo disruptivo, você pode marcar o relatório como resolvido. Se você decidir que não terminou a moderação, também poderá marcar o relatório como não resolvido.

## Visualizando conteúdo que um colaborador denunciou

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. À direita do conteúdo denunciado que você deseja ver, clique em {% octicon "kebab-horizontal" aria-label="The edit icon" %} e em **Exibir conteúdo**.
  !["Exibir conteúdo" no menu suspenso Editar do conteúdo denunciado](/assets/images/help/repository/reported-content-report-view-content.png)

## Resolvendo um relatório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. À direita da denúncia que você deseja resolver, clique em {% octicon "kebab-horizontal" aria-label="The edit icon" %} e em **Marcar como resolvido**.
  !["Marcar como resolvido" no menu suspenso Editar do conteúdo denunciado](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## Marcando um relatório como não resolvido

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. À direita da denúncia que você deseja marcar como não resolvida, clique em {% octicon "kebab-horizontal" aria-label="The edit icon" %} e em **Marcar como não resolvido**.
  !["Marcar como não resolvido" no menu suspenso Editar do conteúdo denunciado](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## Leitura adicional

- "[Sobre o gerenciamento e a moderação da comunidade](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)"
