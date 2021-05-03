---
title: Usar o GitHub Actions para gerenciamento de projetos
intro: 'Você pode usar {% data variables.product.prodname_actions %} para automatizar muitas das suas tarefas de gerenciamento de projeto.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Project management
---

Você pode usar {% data variables.product.prodname_actions %} para automatizar suas tarefas de gerenciamento de projeto, criando fluxos de trabalho. Cada fluxo de trabalho contém uma série de tarefas que são executadas automaticamente toda vez que o fluxo de trabalho é executado. Por exemplo, você pode criar um fluxo de trabalho que é executado toda vez que um problema é criado para adicionar uma etiqueta, deixar um comentário e transferir um problema para um quadro de projeto.

### Quando os fluxos de trabalho são executados?

Você pode configurar seus fluxos de trabalho para ser executado em um cronograma ou serem acionados quando um evento ocorre. Por exemplo, você pode definir o fluxo de trabalho para ser executado quando alguém cria um problema em um repositório.

Muitos gatilhos de fluxo de trabalho são úteis para automatizar o gerenciamento do projeto.

- Um problema é aberta, atribuído ou etiquetado.
- Um comentário é adicionado a um problema.
- Um cartão de projeto foi criado ou transferido.
- Um horário agendado.

Para uma lista completa de eventos que podem acionar fluxos de trabalho, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

### O que os fluxos de trabalho podem fazer?

Os fluxos de trabalho podem fazer muitas coisas como, por exemplo, comentar em um problema, adicionar ou remover etiquetas, mover cartões nos quadros do projeto e abrir problemas.

Você pode aprender sobre como usar {% data variables.product.prodname_actions %} para gerenciamento de projetos seguindo esses tutoriais, que incluem fluxos de trabalho de exemplo que você pode adaptar para atender às suas necessidades.

- "[Adicionar etiquetas a problemas](/actions/guides/adding-labels-to-issues)"
- "[Remover uma etiqueta quando um cartão é adicionado à coluna do quadro de projeto](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
- "[Transferir problemas atribuídos em quadros de projeto](/actions/guides/moving-assigned-issues-on-project-boards)"
- "[Comentar em um problema quando uma etiqueta é adicionada](/actions/guides/commenting-on-an-issue-when-a-label-is-added)"
- "[Fechar problemas inativos](/actions/guides/closing-inactive-issues)"
- "[Agendar a criação de problemas](/actions/guides/scheduling-issue-creation)"
