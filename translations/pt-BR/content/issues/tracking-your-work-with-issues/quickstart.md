---
title: Início rápido para problemas no GitHub
intro: 'Siga este breve guia interativo para aprender mais sobre {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423249'
---
## Introdução

Este guia demonstra como usar {% data variables.product.prodname_github_issues %} para planejar e rastrear um trabalho. Neste guia, você irá criar um novo problema e adicionar uma lista de tarefas para acompanhar as subtarefas. Você também aprenderá como adicionar etiquetas, marcos, responsáveis e projetos para comunicar metadados sobre o seu problema.

## Pré-requisitos

Para criar um problema, você precisa de um repositório. Você pode usar um repositório existente ao qual você tem acesso de gravação ou criar um novo repositório. {% data reusables.enterprise-accounts.emu-permission-repo %} O repositório deve ter problemas habilitados. Para obter mais informações sobre como criar um repositório, confira "[Como criar um repositório](/articles/creating-a-new-repository)". Para obter mais informações sobre como habilitar problemas se eles estiverem desabilitados no seu repositório, confira "[Como desabilitar problemas](/github/administering-a-repository/managing-repository-settings/disabling-issues)".

## Abrir um problema em branco

Primeiro, crie um problema. Existem várias maneiras de criar um problema. Você pode escolher o método mais conveniente para seu fluxo de trabalho. Este exemplo usará a interface do usuário de {% data variables.product.prodname_dotcom %} Para obter mais informações sobre outras maneiras de criar um problema, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Neste exemplo, começaremos com um problema em branco. Seu repositório poderá usar modelos de problemas{% ifversion fpt or ghec %} e formulários de problemas{% endif %} para incentivar os colaboradores a fornecer informações específicas. Se o repositório usar modelos de problemas, {% ifversion fpt or ghes or ghec %}clique em **Abrir um problema em branco**{% else %}clique em **Abrir um problema comum.** {% endif %}.

![problema em branco](/assets/images/help/issues/blank-issue.png)

## Preenchimento de informações

Dê um título descritivo ao seu problema. O título deverá transmitir resumidamente o problema.

Adicione uma descrição que explique o propósito do problema, incluindo todos os detalhes que possam ajudar a resolvê-lo. Por exemplo, se este for um relatório de erro, descreva as etapas para reproduzir o erro, o resultado esperado e o resultado real.

Você pode usar o markdown para adicionar formatação, links, emojis e muito mais. Para obter mais informações, confira "[Escrita no GitHub](/github/writing-on-github)".

![título e texto do problema](/assets/images/help/issues/issue-title-body.png)

## Adicionando uma lista de tarefas

Pode ser útil dividir problemas grandes em tarefas menores, ou rastrear vários problemas relacionados em um problema único maior. Adicione uma lista de tarefas ao seu problema acrescentando `[ ]` antes dos itens de lista. Referência de problemas existentes por número de problema ou URL. Você pode usar texto simples para acompanhar as tarefas que não têm um problema correspondente e convertê-las em problemas posteriormente. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/about-task-lists)".

![problema com lista de tarefas](/assets/images/help/issues/issue-task-list-raw.png)

## Adicionando etiquetas

Adicione uma etiqueta para categorizar o seu problema. Por exemplo, você pode usar um rótulo `bug` e um rótulo `good first issue` para indicar que um problema é um bug que um colaborador que está contribuindo pela primeira vez pode detectar. Os usuários podem filtrar problemas por etiqueta para encontrar todos os problemas com uma etiqueta específica.

Você pode usar as etiquetas padrão ou criar uma nova. Para obter mais informações, confira "[Como gerenciar rótulos](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

![problema com etiquetas](/assets/images/help/issues/issue-with-label.png)

## Adicionar marcos

Você pode adicionar um marco para acompanhar o problema como parte de um destino baseado em data. Um marco mostrará o progresso dos problemas à medida que se aproxima o prazo. Para obter mais informações, confira "[Sobre os marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)".

![problema com marco](/assets/images/help/issues/issue-milestone.png)

## Atribuindo o problema

Para comunicar-se responsabilidade, você pode atribuir o problema a um integrante da sua organização. Para obter mais informações, confira "[Como atribuir problemas e solicitações de pull a outros usuários do GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".

![problema com responsáveis](/assets/images/help/issues/issue-assignees.png)

## Adicionando a problema a um projeto

Você pode adicionar o problema a um projeto existente{% ifversion projects-v2 %} e preencher metadados para o projeto. {% endif %} Para obter mais informações sobre projetos, confira {% ifversion projects-v2 %}"[Sobre projetos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".{% else %}"[Organizar seu trabalho com quadros de projetos](/issues/organizing-your-work-with-project-boards)".{% endif %}

![problema com projetos](/assets/images/help/issues/issue-project.png)

## Enviando o seu problema

Clique em **Enviar novo problema** para criar seu problema. Você pode editar qualquer um dos campos acima após a criação do problema. Seu problema tem uma URL única que você pode compartilhar com os integrantes da equipe ou fazer referência a outros problemas ou pull requests.

## Comunicar

Depois que o seu problema for criado, continue a conversa adicionando comentários ao problema. Você pode @mention colaboradores ou equipes para chamar a atenção deles para um comentário. Para vincular problemas relacionados no mesmo repositório, digite `#` seguido de uma parte do título do problema e clique no problema que deseja vincular. Para obter mais informações, confira "[Escrita no GitHub](/github/writing-on-github)".

![comentário sobre um problema](/assets/images/help/issues/issue-comment.png)

## Próximas etapas

Você pode usar problemas para uma grande variedade de finalidades. Por exemplo:

- Rastrear ideias
- Coletar feedback
- Planejar tarefas
- Como relatar bugs

Veja alguns recursos úteis para dar seus próximos passos com o {% data variables.product.prodname_github_issues %}:

- Para saber mais sobre problemas, confira "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)".
- Para saber mais sobre como os projetos podem ajudar você com o planejamento e o acompanhamento, confira {% ifversion projects-v2 %}"[Sobre projetos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".{% else %}"[Organizar seu trabalho com quadros de projetos](/issues/organizing-your-work-with-project-boards)".{% endif %}
- Para saber mais sobre como usar modelos de problemas{% ifversion fpt or ghec %} e formulários de problemas{% endif %} a fim de incentivar os colaboradores a fornecer informações específicas, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
