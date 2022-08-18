---
title: 'Sobre {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} em {% data variables.product.product_name %} ajuda você a organizar e priorizar seu trabalho. Você pode criar {% data variables.projects.projects_v1_boards %} para o trabalho específico de recursos, roteiros completos ou até mesmo listas de verificação de versão. Com {% data variables.product.prodname_projects_v1 %}, você tem a flexibilidade para criar fluxos de trabalho personalizados que atendam às suas necessidades.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} são compostas de problemas, pull requests e notas que são categorizadas como cartões em colunas de sua escolha. É possível arrastar e soltar ou usar atalhos de teclado para reordenar cartões em uma coluna, mover cartões de coluna para coluna e alterar a ordem das colunas.

Os cartões de {% data variables.projects.projects_v1_board_caps %} contêm metadados relevantes para problemas e pull requests, como etiquetas, responsáveis, status e quem o abriu. {% data reusables.project-management.edit-in-project %}

Você pode criar observações dentro de colunas para servir como lembretes de tarefas, referências a problemas e pull requests de qualquer repositório no {% data variables.product.product_location %}, ou a adicionar informações relacionadas ao {% data variables.projects.projects_v1_board %}. Você pode criar um cartão de referência para outro {% data variables.projects.projects_v1_board %} adicionando um link para uma observação. Se a observação não for suficiente para suas necessidades, você poderá convertê-la em um problema. Para obter mais informações sobre a conversão de observações em problemas, consulte "[Adicionando observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)."

Tipos de quadros de projeto:

- ** Pertencente ao usuário {% data variables.projects.projects_v1_board %}** pode conter problemas e pull requests de qualquer repositório pessoal.
- **Em toda a organização {% data variables.projects.projects_v1_board %}** pode conter problemas e pull requests de qualquer repositório que pertence a uma organização.  {% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, consulte "[Vincular um repositório a um {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)".
- **Repositório {% data variables.projects.projects_v1_board %}** tem o escopo definido como problemas e pull requests em um repositório único. Eles também podem incluir observações que fazem referência a problemas e pull requests em outros repositórios.

## Criando e visualizando {% data variables.projects.projects_v1_boards %}

Para criar um {% data variables.projects.projects_v1_board %} para sua organização, você deve ser um integrante da organização. Os proprietários da organização e as pessoas com permissões de administrador em {% data variables.projects.projects_v1_board %} podem personalizar o acesso a {% data variables.projects.projects_v1_board %}.

Se um {% data variables.projects.projects_v1_board %} pertencente a uma organização incluir problemas ou pull requests de um repositório que você não tem permissão para visualizar, o cartão será redigido.  Para obter mais informações, consulte "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

O modo de exibição de atividade mostra o histórico recente de {% data variables.projects.projects_v1_board %}, como cartões criados ou movidos entre colunas. Para acessar a exibição da atividade, clique em **Menu** e role para baixo.

Para encontrar cartões específicos em um {% data variables.projects.projects_v1_board %} ou ver um subconjunto das cartões, você pode filtrar os cartões de {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Filtrando cartões em um {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)".

Para simplificar seu fluxo de trabalho e manter tarefas concluídas fora do seu {% data variables.projects.projects_v1_board %}, você pode arquivar cartões. Para obter mais informações, consulte "[Arquivando cartões em um {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board)".

Se você concluiu todas as suas tarefas de {% data variables.projects.projects_v1_board %} ou não precisa mais usar seu {% data variables.projects.projects_v1_board %}, você pode fechar o {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[Fechando um {% data variables.product.prodname_project_v1 %}de](/articles/closing-a-project-board)".

Você também pode [desabilitar {% data variables.projects.projects_v1_boards %} em um repositório](/articles/disabling-project-boards-in-a-repository) ou [desabilitar {% data variables.projects.projects_v1_boards %} na sua organização](/articles/disabling-project-boards-in-your-organization), se você preferir acompanhar o seu trabalho de uma forma diferente.

{% data reusables.project-management.project-board-import-with-api %}

## Modelos para {% data variables.projects.projects_v1_boards %}

Você pode usar modelos para configurar rapidamente um novo {% data variables.projects.projects_v1_board %}. Ao usar um modelo para criar um {% data variables.projects.projects_v1_board %}, seu novo quadro incluirá colunas, assim como cartões com dicas para usar o {% data variables.product.prodname_projects_v1 %}. Você também pode escolher um modelo com automação já configurada.

| Modelo                          | Descrição                                                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanban básico                   | Rastreie tarefas com colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                                         |
| Kanban automatizado             | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídas)                                                                 |
| Kanban automatizado com revisão | Cartões são movidos automaticamente entre as colunas To do (Pendentes), In progress (Em andamento) e Done (Concluídos), com gatilhos adicionais para status de revisão de pull request |
| Triagem de erros                | Faça a triagem e priorize erros com as colunas To do (Pendentes), High priority (Prioridade alta), Low priority (Prioridade baixa) e Closed (Fechados)                                 |

Para obter mais informações sobre automação para {% data variables.product.prodname_projects_v1 %}, consulte "[Sobre automação para o {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

![{% data variables.product.prodname_project_v1 %} com modelo básico de kanban](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Leia mais

- "[Criar um {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editando um {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copiando um {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
- "[Adicionando problemas e pull requests a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
- "[Atalhos de teclado](/articles/keyboard-shortcuts/#project-boards)"
