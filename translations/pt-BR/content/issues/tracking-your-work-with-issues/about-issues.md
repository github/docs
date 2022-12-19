---
title: Sobre problemas
intro: 'Use {% data variables.product.prodname_github_issues %} para rastrear ideias, comentários, tarefas ou erros para trabalho em {% data variables.product.company_short %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422729'
---
## Integrado ao GitHub

Os problemas permitem que você acompanhe seu trabalho em {% data variables.product.company_short %}, onde o desenvolvimento acontece. Ao mencionar um problema em outro problema ou pull request, a linha do tempo do problema reflete a referência cruzada para que você possa acompanhar o trabalho relacionado. Para indicar que o trabalho está em andamento, você pode vincular um problema a um pull request. Quando o pull request faz merge, o problema vinculado é fechado automaticamente.

Para obter mais informações sobre palavras-chave, confira "[Como vincular uma solicitação de pull a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

## Crie problemas rapidamente

Os problemas podem ser criados de várias maneiras. Portanto, você pode escolher o método mais conveniente para seu fluxo de trabalho. Por exemplo, você pode criar um problema por meio de um repositório,{% ifversion fpt or ghec %} um item em uma lista de tarefas,{% endif %} uma observação em um projeto, um comentário em uma solicitação de pull ou em um problema, uma linha de código específica ou uma consulta de URL. Você também pode criar um problema a partir da sua plataforma de escolha: por meio da interface do usuário web {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL e APIs REST ou {% data variables.product.prodname_mobile %}. Para obter mais informações, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".

## Monitorar trabalho

Você pode organizar e priorizar problemas com projetos. {% ifversion fpt or ghec %}Para acompanhar problemas como parte de um problema maior, você pode usar listas de tarefas.{% endif %} Para categorizar problemas relacionados, você pode usar rótulos e marcos.

Para obter mais informações sobre projetos, confira {% ifversion projects-v2 %}"[Sobre projetos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)." {% else %}"[Como organizar seu trabalho com placas de projeto](/issues/organizing-your-work-with-project-boards)."{% endif %} {% ifversion fpt or ghec %}Para obter mais informações sobre listas de tarefas, confira "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)." {% endif %} Para obter mais informações sobre rótulos e marcos, confira "[Como usar rótulos e marcos para acompanhar o trabalho](/issues/using-labels-and-milestones-to-track-work)".

## Fique atualizado

Para manter-se atualizado sobre os comentários mais recentes em um problema, você pode assinar um problema para receber notificações sobre os comentários mais recentes. Para encontrar links para problemas atualizados recentemente nos quais você está inscrito, visite seu painel. Para obter mais informações, confira "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" e "[Sobre seu painel pessoal](/articles/about-your-personal-dashboard)".

## Gerenciamento da comunidade

Para ajudar os colaboradores a abrir problemas significativos que fornecem as informações necessárias, use {% ifversion fpt or ghec %}formulários de problemas e {% endif %}modelos de problemas. Para obter mais informações, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion fpt or ghec %}Para manter uma comunidade benéfica, denuncie os comentários que violam as [Diretrizes da Comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)".{% endif %}

## Comunicação eficiente

Você pode @mention colaboradores que têm acesso ao seu repositório em um problema para chamar a atenção deles para um comentário. Para vincular problemas relacionados no mesmo repositório, digite `#` seguido de uma parte do título do problema e clique no problema que deseja vincular. Para comunicar responsabilidade, você pode atribuir problemas. Se você se encontrar, frequentemente, digitando o mesmo comentário, você poderá usar as respostas salvas.
{% ifversion fpt or ghec %} Para obter mais informações, confira "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" e "[Como atribuir problemas e solicitações de pull a outros usuários do GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".
{% endif %} {% ifversion discussions %}
## Comparando problemas e discussões

Algumas conversas são mais adequadas para {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Para obter diretrizes sobre quando usar um problema ou uma discussão, confira "[Comunicação no GitHub](/github/getting-started-with-github/quickstart/communicating-on-github)".

Quando uma conversa em um problema é mais adequada para uma discussão, você pode converter a questão em uma discussão.
{% endif %}
