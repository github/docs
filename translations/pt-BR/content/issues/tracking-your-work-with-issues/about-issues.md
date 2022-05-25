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
---

## Integrado ao GitHub

Os problemas permitem que você acompanhe seu trabalho em {% data variables.product.company_short %}, onde o desenvolvimento acontece. Ao mencionar um problema em outro problema ou pull request, a linha do tempo do problema reflete a referência cruzada para que você possa acompanhar o trabalho relacionado. Para indicar que o trabalho está em andamento, você pode vincular um problema a um pull request. Quando o pull request faz merge, o problema vinculado é fechado automaticamente.

Para obter mais informações sobre palavras-chave, consulte "[Vinculando um pull request a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

## Crie problemas rapidamente

Os problemas podem ser criados de várias maneiras. Portanto, você pode escolher o método mais conveniente para seu fluxo de trabalho. Por exemplo, você pode criar um problema a partir de um repositório,{% ifversion fpt or ghec %} um item em uma lista de tarefas,{% endif %} uma observação em um projeto, um comentário em um problema ou pull request, uma linha de código específica ou uma consulta de URL. Você também pode criar um problema a partir da sua plataforma de escolha: por meio da interface do usuário web {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL e APIs REST ou {% data variables.product.prodname_mobile %}. Para obter mais informações, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".

## Monitorar trabalho

Você pode organizar e priorizar problemas com projetos. {% ifversion fpt or ghec %}Para monitorar problemas como parte de um problema maior, você pode usar as listas de tarefas.{% endif %} Para categorizar problemas relacionados, você pode usar etiquetas e marcos.

Para obter mais informações sobre os projetos, consulte {% ifversion fpt or ghec %}"[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)e {% endif %}"[Organizar seu trabalho com quadros de projeto](/issues/organizing-your-work-with-project-boards)". {% ifversion fpt or ghec %}Para obter mais informações sobre listas de tarefas, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)". {% endif %}Para obter mais informações sobre etiquetas e marcos, consulte "[Usando etiquetas e marcos para rastrear o trabalho](/issues/using-labels-and-milestones-to-track-work)".

## Mantenha-se atualizado

Para manter-se atualizado sobre os comentários mais recentes em um problema, você pode assinar um problema para receber notificações sobre os comentários mais recentes. Para encontrar links para problemas atualizados recentemente nos quais você está inscrito, visite seu painel. Para obter mais informações, consulte "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" e "[Sobre o seu painel pessoal](/articles/about-your-personal-dashboard)".

## Gerenciamento da comunidade

Para ajudar os colaboradores a abrir problemas significativos que fornecem as informações de que você precisa, você pode usar {% ifversion fpt or ghec %}formulários de problemas e {% endif %}modelos de problema. Para obter mais informações, consulte "[Usar modelos para incentivar problemas úteis e pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion fpt or ghec %}Para manter uma comunidade saudável, pode relatar comentários que violam as [diretrizes da comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Relatar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)".{% endif %}

## Comunicação eficiente

Você pode @mencionar colaboradores com acesso ao seu repositório em um problema para chamar a atenção para um comentário. Para vincular problemas relacionados no mesmo repositório, você pode digitar `#` seguido de parte do título do problema e, em seguida, clicar no problema que você deseja vincular. Para comunicar responsabilidade, você pode atribuir problemas. Se você se encontrar, frequentemente, digitando o mesmo comentário, você poderá usar as respostas salvas.
{% ifversion fpt or ghec %} Para mais informações, consulte "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" e "[Atribuindo problemas e pull requests a outros usuários do GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)"

## Comparando problemas e discussões

Algumas conversas são mais adequadas para {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Para orientação sobre quando usar um problema ou discussão, consulte "[Comunicar com o GitHub](/github/getting-started-with-github/quickstart/communicating-on-github)".

Quando uma conversa em um problema é mais adequada para uma discussão, você pode converter a questão em uma discussão.
{% endif %}
