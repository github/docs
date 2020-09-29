---
title: Usar executores auto-hospedados em um fluxo de trabalho
intro: 'Para usar executores auto-hospedados em um fluxo de trabalho, você pode usar as etiquetas para especificar o tipo de executor para uma trabalho.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Para obter informações sobre como criar etiquetas-padrão e etiquetas personalizadas, consulte "[Usando etiquetas com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

### Usar executores auto-hospedados em um fluxo de trabalho

As etiquetas permitem que você envie trabalhos do fluxo de trabalho para tipos específicos de executores auto-hospedados, com base em suas características compartilhadas. Por exemplo, se o seu trabalho exigir um componente de hardware específico ou um pacote de software, você poderá atribuir uma etiqueta personalizada a um executor e, em seguida, configurar seu trabalho para ser executado somente em executores com essa etiqueta.

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

### Usar etiquetas-padrão para rotear tarefas

Um executor auto-hospedado recebe automaticamente certas etiquetas ao ser adicionado a {% data variables.product.prodname_actions %}. Elas são usadas para indicar seu sistema operacional e sua plataforma de hardware:

* `auto-hospedado`: Etiqueta-padrão aplicada a todos os executores auto-hospedados.
* `Linux`, `Windows`, ou `macOS`: Aplicado, dependendo do sistema operacional.
* `x86`, `x64`, `ARM`, ou `ARM64`: Aplicado, dependendo da arquitetura do hardware.

Você pode usar o YAML do seu fluxo de trabalho para enviar trabalhos para uma combinação dessas etiquetas. Neste exemplo, um executor auto-hospedado que corresponde a todas as três etiquetas será elegível para executar a o trabalho:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `auto-hospedado` - Execute esse trabalho em um executor auto-hospedado.
- `linux` - Use somente um executor baseado no Linux.
- `ARM64` - Use apenas um executor baseado no hardware ARM64.

As etiquetas-padrão são fixas e não podem ser alterados ou removidos. Considere usar etiquetas personalizadas caso precise de mais controle sobre o roteamento de trabalhos.

### Usar etiquetas personalizadas para rotear trabalhos

Você pode criar etiquetas personalizadas e atribuí-las aos seus executores auto-hospedados a qualquer momento. As etiquetas personalizadas permitem que você envie trabalhos para determinados tipos de executores auto-hospedados, com base no modo como como são rotulados.

Por exemplo, se você tiver uma tarefa que requer um tipo específico de hardware gráfico, você poderá criar uma etiqueta personalizada denominada `gpu` e atribuí-la aos executores que têm o hardware instalado. Um executor auto-hospedado que corresponde a todas as etiquetas atribuídas será elegível para executar o trabalho.

Este exemplo mostra um trabalho que combina etiquetas-padrão e etiquetas personalizadas:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `auto-hospedado` - Execute esse trabalho em um executor auto-hospedado.
- `linux` - Use somente um executor baseado no Linux.
- `x64` - Use somente um executor baseado no hardware x64.
- `gpu` - Esta etiqueta personalizada foi atribuída manualmente a executores auto-hospedados com o hardware GPU instalado.

Estas etiquetas operam cumulativamente. Portanto, as etiquetas de um executor auto-hospedado devem corresponder a todas as quatro para ser elegíveis a processar o trabalho.

### Precedência de encaminhamento para executores auto-hospedados

Se você usar executores no nível do repositório e da organização, {% data variables.product.prodname_dotcom %} seguirá uma ordem de precedência ao encaminhar trabalhos para os executores auto-hospedados:

1. As etiquetas `runs-on` do trabalho são processadas. {% data variables.product.prodname_dotcom %}, em seguida, tenta localizar um executor que corresponda aos requisitos da etiqueta:
2. O trabalho é enviado para um executor do nível de repositório que corresponde à etiqueta do trabalho. Se nenhum executor no nível do repositório estiver disponível (ocupado, off-line ou sem etiquetas correspondentes):
3. O trabalho será enviado para um executor do nível da organização que corresponde às etiquetas do trabalho. Se nenhum executor de nível de organização estiver disponível, ocorrerá uma falha na solicitação do trabalho em razão de erro.
