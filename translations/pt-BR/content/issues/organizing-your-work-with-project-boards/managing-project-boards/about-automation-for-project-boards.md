---
title: 'Sobre automação para {% data variables.product.prodname_projects_v1 %}'
intro: 'Você pode configurar fluxos de trabalho automáticos para manter o status de cartões de {% data variables.projects.projects_v1_board %} em sincronia com os problemas e pull requests associados.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automatização para {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  Para obter mais informações, consulte de[Permissões de {% data variables.product.prodname_projects_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)".

Você pode automatizar ações com base no acionamento de eventos para as colunas de {% data variables.projects.projects_v1_board %}. Isto elimina algumas das tarefas manuais no gerenciamento de um {% data variables.projects.projects_v1_board %}. Por exemplo, você pode configurar uma coluna "azer", onde todos os novos problemas ou pull requests que você adicionar a um {% data variables.projects.projects_v1_board %} são automaticamente movidos para a coluna configurada. Para obter mais informações, consulte "[Configurando automação para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

A automação da {% data variables.projects.projects_v1_board_caps %} também pode ajudar as equipes a desenvolver um entendimento compartilhado sobre o propósito de um {% data variables.projects.projects_v1_board %} e o processo de desenvolvimento da equipe, criando um fluxo de trabalho padrão para certas ações.

{% data reusables.project-management.resync-automation %}

## Opções de automação

| Coluna predefinida        | Opções de configuração    |
| ------------------------- | ------------------------- |
| To do (Tarefas pendentes) | <ul><li>Mover todos os problemas recentemente adicionados aqui</li><li>Mover todas as pull requests recentemente adicionadas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li></ul> |
| Em andamento              | <ul><li>Mover todas as pull requests recentemente abertas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li><li>Mover todas as pull requests que atendem ao número mínimo de revisões necessárias do branch base aqui</li><li>Mover todas as pull requests que não atendem mais ao número mínimo de revisões necessárias do branch base aqui</li></ul> |
| Concluído                 | <ul><li>Mover todos os problemas fechados aqui</li><li>Mover todas as pull requests mescladas aqui</li><li>Mover todas as pull requests fechadas e não mescladas aqui</li></ul> |

## Acompanhamento do andamento do projeto

Você pode acompanhar o progresso em seu {% data variables.projects.projects_v1_board %}. Cartões nas colunas "Pendente", "Em progresso" ou "Concluído" contam para o progresso geral do projeto. {% data reusables.project-management.project-progress-locations %}

Para obter mais informações, consulte "[Acompanhando o progresso no seu {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

## Leia mais
- "[Configurando automação para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copying a {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
