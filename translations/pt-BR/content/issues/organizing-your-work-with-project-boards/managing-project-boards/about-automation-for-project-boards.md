---
title: Sobre a automação para quadros de projeto
intro: Você pode configurar fluxos de trabalho automáticos para manter o status dos cartões do quadro de projeto em sincronia com os problemas e pull requests associados.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.automate-project-board-permissions %}  Para obter mais informações, consulte "[Permissões do quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)."

Você pode automatizar ações com base nos eventos de disparo para colunas do quadro de projeto. Isso elimina algumas das tarefas manuais no gerenciamento de um quadro de projeto. Por exemplo, é possível configurar uma coluna "Tarefas pendentes", onde qualquer problema ou pull request que você adiciona a um quadro de projeto é automaticamente movido para a coluna configurada. Para obter mais informações, consulte "[Configurar a automação para quadros de projeto](/articles/configuring-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

A automação do quadro de projeto também pode ajudar as equipes a desenvolver uma compreensão compartilhada da finalidade de um quadro de projeto e o processo de desenvolvimento da equipe criando um fluxo de trabalho padrão para determinadas ações.

{% data reusables.project-management.resync-automation %}

### Opções de automação

| Coluna predefinida        | Opções de configuração    |
| ------------------------- | ------------------------- |
| To do (Tarefas pendentes) | <ul><li>Mover todos os problemas recentemente adicionados aqui</li><li>Mover todas as pull requests recentemente adicionadas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li></ul> |
| Em andamento              | <ul><li>Mover todas as pull requests recentemente abertas aqui</li><li>Mover todos os problemas reabertos aqui</li><li>Mover todas as pull requests reabertas aqui</li><li>Mover todas as pull requests que atendem ao número mínimo de revisões necessárias do branch base aqui</li><li>Mover todas as pull requests que não atendem mais ao número mínimo de revisões necessárias do branch base aqui</li></ul> |
| Concluído                 | <ul><li>Mover todos os problemas fechados aqui</li><li>Mover todas as pull requests mescladas aqui</li><li>Mover todas as pull requests fechadas e não mescladas aqui</li></ul> |

### Acompanhamento do andamento do projeto

Você pode acompanhar o progresso no seu quadro de projeto. Cartões nas colunas "Pendente", "Em progresso" ou "Concluído" contam para o progresso geral do projeto. {% data reusables.project-management.project-progress-locations %}

Para obter mais informações, consulte "[Acompanhamento do progresso no quadro de projeto](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

### Leia mais
- "[Configurar automação para quadros de projeto](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copiar um quadro de projeto](/articles/copying-a-project-board)"{% endif %}
