---
title: Usar executores hospedados de AE em um fluxo de trabalho
intro: 'Você pode usar etiquetas para enviar trabalhos para um grupo de {% data variables.actions.hosted_runner %}s.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Usar {% data variables.actions.hosted_runner %}s em um fluxo de trabalho

As etiquetas permitem que você envie trabalhos do fluxo de trabalho para qualquer {% data variables.actions.hosted_runner %} que inclua essa etiqueta. Você pode usar as etiquetas padrão e pode criar as suas próprias etiquetas personalizadas.

### Usar etiquetas-padrão para rotear tarefas

Um {% data variables.actions.hosted_runner %} recebe uma etiqueta quando é adicionado a {% data variables.product.prodname_actions %}. A etiqueta é usada para indicar onde foi atribuída.

Você pode utilizar o YAML do seu fluxo de trabalho para enviar trabalhos para um grupos específico de {% data variables.actions.hosted_runner %}. Este exemplo demonstra como configurar um fluxo de trabalho para ser executado em uma etiqueta denominada `AE-runner-for-CI`:

```yaml
runs-on: [AE-runner-for-CI]
```

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

### Usar etiquetas personalizadas para rotear trabalhos

Você pode criar etiquetas personalizadas e atribuí-las aos seus {% data variables.actions.hosted_runner %}s a qualquer momento. As etiquetas personalizadas permitem que você envie tarefas para determinados tipos de executores, com base em como são etiquetados.

Por exemplo, se você tem um trabalho que requer um pacote de software específico, você pode criar uma etiqueta personalizada denominada `octocat` e atribuí-la aos executores que têm o pacote instalado. Um {% data variables.actions.hosted_runner %} que corresponde a todos as etiquetas atribuídas será elegível para executar o trabalho.

Este exemplo mostra um trabalho que usa várias etiquetas:

```yaml
runs-on: [AE-runner-for-CI, octocat, linux]
```

Essas etiquetas são operadas cumulativamente. Portanto, as etiquetas de um {% data variables.actions.hosted_runner %} devem corresponder a todos, para que possam processar o trabalho.
