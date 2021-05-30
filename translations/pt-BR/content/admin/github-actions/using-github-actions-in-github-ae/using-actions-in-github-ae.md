---
title: Usar ações no GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} inclui a maioria das ações de autoria de {% data variables.product.prodname_dotcom %}.'
versions:
  github-ae: '*'
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
---
{% data reusables.actions.ae-beta %}

Os fluxos de trabalho de {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que você pode combinar para criar tarefas e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

### Ações oficiais agrupadas com {% data variables.product.prodname_ghe_managed %}

A maioria das ações oficiais de autoria de {% data variables.product.prodname_dotcom %} são automaticamente agrupadas com {% data variables.product.prodname_ghe_managed %} e são capturadas em um momento a partir do {% data variables.product.prodname_marketplace %}. Quando sua instância do {% data variables.product.prodname_ghe_managed %} é atualizada, as ações oficiais agrupadas também são atualizadas.

As ações oficiais empacotadas incluem `ações/checkout`, `actions/upload-artefact`, `actions/download-artefact`, `actions/labeler`, e várias ações de `actions/setup-`, entre outras. Para ver quais das ações oficiais estão incluídas, acesse as seguintes organizações na sua instância:
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Os arquivos de cada ação são mantidos em um repositório das `ações` e das organizações `github`. Cada repositório de ação inclui as tags, branches e o commit necessários para que seus fluxos de trabalho possam usar para fazer referência à ação.
