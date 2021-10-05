---
title: Início rápido para problemas no GitHub
intro: 'Siga este breve guia interativo para aprender mais sobre {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## Introdução

Este guia demonstra como usar {% data variables.product.prodname_github_issues %} para planejar e rastrear um trabalho. Neste guia, você irá criar um novo problema e adicionar uma lista de tarefas para acompanhar as subtarefas. Você também aprenderá como adicionar etiquetas, marcos, responsáveis e projetos para comunicar metadados sobre o seu problema.

## Pré-requisitos

Para criar um problema, você precisa de um repositório. Você pode usar um repositório existente ao qual você tem acesso de gravação ou criar um novo repositório. O repositório deve ter problemas habilitados. Para obter mais informações sobre como criar um repositório, consulte "[Criar um repositório](/articles/creating-a-new-repository)". Para obter mais informações sobre problemas de habilitação se eles estiverem desabilitados no seu repositório, consulte "[Desabilitar problemas](/github/administering-a-repository/managing-repository-settings/disabling-issues)".

## Abrir um problema em branco

Primeiro, crie um problema. Existem várias maneiras de criar um problema. Você pode escolher o método mais conveniente para seu fluxo de trabalho. Este exemplo usará a interface do usuário de {% data variables.product.prodname_dotcom %} Para obter mais informações sobre outras formas de criar um problema, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. Neste exemplo, começaremos com um problema em branco. Seu repositório pode usar os modelos de problema{% ifversion fpt %} e formulários de problema{% endif %} para incentivar os colaboradores a fornecer informações específicas. Se seu repositório usa modelos de problema, {% ifversion fpt or ghes %}clique em **Abrir um problema em branco**{% else %}clique em **Abrir um problema regular.**{% endif %}.

![problema em branco](/assets/images/help/issues/blank-issue.png)

## Preenchimento de informações

Dê um título descritivo ao seu problema. O título deverá transmitir resumidamente o problema.

Adicione uma descrição que explique o propósito do problema, incluindo todos os detalhes que possam ajudar a resolvê-lo. Por exemplo, se este for um relatório de erro, descreva as etapas para reproduzir o erro, o resultado esperado e o resultado real.

Você pode usar o markdown para adicionar formatação, links, emojis e muito mais. Para obter mais informações, consulte "[Escrevendo no GitHub](/github/writing-on-github)".

![título e texto do problema](/assets/images/help/issues/issue-title-body.png)

## Adicionando uma lista de tarefas

Pode ser útil dividir problemas grandes em tarefas menores, ou rastrear vários problemas relacionados em um problema único maior. Adicione uma lista de tarefas ao seu problema, fornecendo uma breve introdução com `[ ]`. Referência de problemas existentes por número de problema ou URL. Você pode usar texto simples para acompanhar as tarefas que não têm um problema correspondente e convertê-las em problemas posteriormente. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/about-task-lists)".

![problema com lista de tarefas](/assets/images/help/issues/issue-task-list-raw.png)

## Adicionando etiquetas

Adicione uma etiqueta para categorizar o seu problema. Por exemplo, você pode usar uma etiqueta de `bug` e uma etiqueta `good first issue` para indicar que um problema é um bug que um primeiro colaborador poderia selecionar. Os usuários podem filtrar problemas por etiqueta para encontrar todos os problemas com uma etiqueta específica.

Você pode usar as etiquetas padrão ou criar uma nova. Para obter mais informações, consulte "[Gerenciar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

![problema com etiquetas](/assets/images/help/issues/issue-with-label.png)

## Adicionar marcos

Você pode adicionar um marco para acompanhar o problema como parte de um destino baseado em data. Um marco mostrará o progresso dos problemas à medida que se aproxima o prazo. Para obter mais informações, consulte "[Sobre marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)".

![problema com marco](/assets/images/help/issues/issue-milestone.png)

## Atribuindo o problema

Para comunicar-se responsabilidade, você pode atribuir o problema a um integrante da sua organização. Para obter mais informações, consulte "[Atribuir problemas e pull requests a outros usuários do GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".

![problema com responsáveis](/assets/images/help/issues/issue-assignees.png)

## Adicionando a problema a um projeto

Você pode adicionar um problema a um projeto existente. {% ifversion fpt %}Se você usar projetos (beta), você também poderá preencher os metadados do projeto. {% endif %} Para mais informações sobre projetos, consulte {% ifversion fpt %}"[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)e {% endif %}"[Organizar o seu trabalho com quadros de projeto](/issues/organizing-your-work-with-project-boards)".

![problema com projetos](/assets/images/help/issues/issue-project.png)

## Enviando o seu problema

Clique em **Enviar novo problema** para criar o seu problema. Você pode editar qualquer um dos campos acima após a criação do problema. Seu problema tem uma URL única que você pode compartilhar com os integrantes da equipe ou fazer referência a outros problemas ou pull requests.

## Comunicar

Depois que o seu problema for criado, continue a conversa adicionando comentários ao problema. Você pode @mencionar colaboradores ou equipes para chamar a atenção para um comentário. Para vincular problemas relacionados no mesmo repositório, você pode digitar `#` seguido de parte do título do problema e, em seguida, clicar no problema que você deseja vincular. Para obter mais informações, consulte "[Escrevendo no GitHub](/github/writing-on-github)".

![issue comment](/assets/images/help/issues/issue-comment.png)

## Próximas etapas

Você pode usar problemas para uma grande variedade de finalidades. Por exemplo:

- Rastrear ideias
- Coletar feedback
- Planejar tarefas
- Relatar erros

Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_github_issues %}:

- Para saber mais sobre problemas, consulte "[Sobre problemas](/issues/tracking-your-work-with-issues/about-issues)".
- Para saber mais sobre como os projetos podem ajudar você no planejamento e acompanhamento, consulte {% ifversion fpt %}"[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)ou {% endif %}"[Organizar seu trabalho com quadros de projeto](/issues/organizing-your-work-with-project-boards)".
- Para aprender mais sobre o uso dos modelos de problemas{% ifversion fpt %} e formulários de problemas{% endif %} para incentivar os contribuidores a fornecer informações específicas, consulte "[Usar modelos para incentivar problemas úteis e pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
