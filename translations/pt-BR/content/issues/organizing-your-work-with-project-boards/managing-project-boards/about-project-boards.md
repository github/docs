---
title: Sobre quadros de projeto
intro: 'Os quadros de projeto no {% data variables.product.product_name %} ajudam você a organizar e priorizar seu trabalho. É possível criar quadros de projeto para trabalho de recurso específico, roteiros abrangentes ou, até mesmo, checklists de versão. Com os quadros de projeto, você tem a flexibilidade de criar fluxos de trabalho personalizados adequados às suas necessidades.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects/
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Os quadros de projeto são compostos por problemas, pull requests e observações que são categorizados como cartões em colunas de sua escolha. É possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões em uma coluna, mover cartões de coluna para coluna e alterar a ordem das colunas.

Os cartões do quadro de projeto contêm metadados relevantes para problemas e pull requests, como etiquetas, responsáveis, o status e quem os abriu. {% data reusables.project-management.edit-in-project %}

Você pode criar observações dentro de colunas para servirem de lembretes de tarefa, fazer referência a problemas e pull requests de qualquer repositório no {% data variables.product.product_name %} ou adicionar informações relacionadas ao quadro de projeto. É possível criar um cartão de referência para outro quadro de projeto adicionando um link a uma observação. Se a observação não for suficiente para suas necessidades, você poderá convertê-la em um problema. Para obter mais informações sobre como converter observações de quadro de projeto em problemas, consulte "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

Tipos de quadros de projeto:

- Os **quadros de projeto possuídos pelo usuário** podem conter problemas e pull requests de qualquer repositório pessoal.
- Os **quadros de projeto de toda a organização** podem conter problemas e pull requests de qualquer repositório que pertença a uma organização.  {% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)."
- Os **quadros de projeto do repositório** abrangem problemas ou pull requests dentro de um único repositório. Eles também podem incluir observações que fazem referência a problemas e pull requests em outros repositórios.

### Criar e exibir quadros de projeto

Para criar um quadro de projeto para sua organização, você deve ser um integrante da organização. Os proprietários da organização e as pessoas com permissões de administrador de quadro de projeto podem personalizar o acesso ao quadro de projeto.

Se um quadro de projeto possuído pela organização incluir problemas ou pull requests de um repositório que você não tem permissão para exibir, o cartão será removido.  Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

A exibição da atividade mostra o histórico recente do quadro de projeto, como cartões que alguém criou ou moveu entre colunas. Para acessar a exibição da atividade, clique em **Menu** e role para baixo.

Para encontrar cartões específicos em um quadro de projeto ou exibir um subconjunto dos cartões, você pode filtrar cartões do quadro de projeto. Para obter mais informações, consulte "[Filtrar cartões em um quadro de projeto](/articles/filtering-cards-on-a-project-board)".

Para simplificar seu fluxo de trabalho a manter as tarefas concluídas fora do quadro de projeto, você pode arquivar cartões. Para obter mais informações, consulte "[Arquivar cartões em um quadro de projeto](/articles/archiving-cards-on-a-project-board)."

Se você concluiu todas as tarefas do quadro de projeto ou não precisar mais usar o quadro de projeto, é possível fechá-lo. Para obter mais informações, consulte "[Fechar um quadro de projeto](/articles/closing-a-project-board)".

Também é possível [desabilitar quadros de projeto em um repositório](/articles/disabling-project-boards-in-a-repository) ou [desabilitar quadros de projeto em sua organização](/articles/disabling-project-boards-in-your-organization), se preferir rastrear o trabalho de maneira diferente.

{% data reusables.project-management.project-board-import-with-api %}

### Modelos para quadros de projeto

É possível usar modelos para configurar rapidamente um novo quadro de projeto. Quando você usar um modelo para criar um quadro de projeto, o novo quadro incluirá colunas, bem como cartões com dicas para usar quadros de projeto. Você também pode escolher um modelo com automação já configurada.

| Modelo                          | Descrição                                                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanban básico                   | Rastreie tarefas com colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                                         |
| Kanban automatizado             | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                 |
| Kanban automatizado com revisão | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídos), com gatilhos adicionais para status de revisão de pull request |
| Triagem de erros                | Faça a triagem e priorize erros com as colunas To do (Pendentes), High priority (Prioridade alta), Low priority (Prioridade baixa) e Closed (Fechados)                                 |

Para obter mais informações sobre automação para quadros de projeto, consulte "[Sobre automação para quadros de projeto](/articles/about-automation-for-project-boards)".

![Quadro de projeto com modelo de kanban básico](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

### Leia mais

- "[Criar um quadro de projeto](/articles/creating-a-project-board)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copiar um quadro de projeto](/articles/copying-a-project-board)"{% endif %}
- "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Atalhos de teclado](/articles/keyboard-shortcuts/#project-boards)"
