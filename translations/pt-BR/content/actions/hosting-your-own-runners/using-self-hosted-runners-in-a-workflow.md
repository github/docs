---
title: Usar os executores auto-hospedados em um fluxo de trabalho
intro: 'Para usar executores auto-hospedados em um fluxo de trabalho, você pode usar as etiquetas para especificar o tipo de executor para uma trabalho.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573414'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Para obter informações sobre como criar rótulos personalizados e padrão, confira "[Como usar rótulos com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

## Usar os executores auto-hospedados em um fluxo de trabalho

As etiquetas permitem que você envie trabalhos do fluxo de trabalho para tipos específicos de executores auto-hospedados, com base em suas características compartilhadas. Por exemplo, se o seu trabalho exigir um componente de hardware específico ou um pacote de software, você poderá atribuir uma etiqueta personalizada a um executor e, em seguida, configurar seu trabalho para ser executado somente em executores com essa etiqueta.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

## Usar etiquetas-padrão para rotear tarefas

Um executor auto-hospedado recebe automaticamente certas etiquetas ao ser adicionado a {% data variables.product.prodname_actions %}. Elas são usadas para indicar seu sistema operacional e sua plataforma de hardware:

* `self-hosted`: rótulo padrão aplicado a todos os executores auto-hospedados.
* `linux`, `windows` ou `macOS`: aplicado, dependendo do sistema operacional.
* `x64`, `ARM` ou `ARM64`: aplicado, dependendo da arquitetura de hardware.

Você pode usar o YAML do seu fluxo de trabalho para enviar trabalhos para uma combinação dessas etiquetas. Neste exemplo, um executor auto-hospedado que corresponde a todas as três etiquetas será elegível para executar a o trabalho:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` – Execute este trabalho em um executor auto-hospedado.
- `linux` – Use apenas um executor baseado em Linux.
- `ARM64` – Use apenas um executor baseado no hardware ARM64.

As etiquetas-padrão são fixas e não podem ser alterados ou removidos. Considere usar etiquetas personalizadas caso precise de mais controle sobre o roteamento de trabalhos.

## Usar etiquetas personalizadas para rotear trabalhos

Você pode criar etiquetas personalizadas e atribuí-las aos seus executores auto-hospedados a qualquer momento. As etiquetas personalizadas permitem que você envie trabalhos para determinados tipos de executores auto-hospedados, com base no modo como como são rotulados. 

Por exemplo, se você tiver um trabalho que exige um tipo específico de hardware de elementos gráficos, crie um rótulo personalizado chamado `gpu` e atribua-o aos executores que têm o hardware instalado. Um executor auto-hospedado que corresponde a todas as etiquetas atribuídas será elegível para executar o trabalho. 

Este exemplo mostra um trabalho que combina etiquetas-padrão e etiquetas personalizadas:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` – Execute este trabalho em um executor auto-hospedado.
- `linux` – Use apenas um executor baseado em Linux.
- `x64` – Use apenas um executor baseado no hardware x64.
- `gpu` – esse rótulo personalizado foi atribuído manualmente aos executores auto-hospedados com o hardware de GPU instalado. 

Esses rótulos operam cumulativamente. Portanto, um executor auto-hospedado precisa ter todos os quatro rótulos para estar qualificado a processar o trabalho.

## Precedência de encaminhamento para executores auto-hospedados

Ao encaminhar um trabalho para um executor auto-hospedado, o {% data variables.product.prodname_dotcom %} procura um executor que corresponde aos rótulos `runs-on` do trabalho:

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- Se o {% data variables.product.prodname_dotcom %} encontrar um executor online e ocioso que corresponda aos rótulos `runs-on` do trabalho, o trabalho será atribuído e enviado ao executor.
  - Se o executor não pegar a tarefa atribuída dentro de 60 segundos, a tarefa será enfileirada novamente para que um novo executor possa aceitá-la.
- Se o {% data variables.product.prodname_dotcom %} não encontrar um executor online e ocioso que corresponda aos rótulos `runs-on` do trabalho, o trabalho permanecerá na fila até que um executor fique online.
- Se o trabalho permanecer na fila por mais de 24 horas, o trabalho falhará.
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %} primeiro procura um executor no nível do repositório, em seguida, no nível da organização e, por fim, no nível da empresa.
- Se o {% data variables.product.prodname_dotcom %} encontrar um executor online e ocioso em determinado nível que corresponde aos rótulos `runs-on` do trabalho, o trabalho será atribuído e enviado ao executor.
  - Se o executor não pegar a tarefa atribuída em de 60 segundos, o trabalho entrará na fila de todos os níveis e irá esperar que um executor correspondente de qualquer nível fique on-line e pegue o trabalho.
- Se {% data variables.product.prodname_dotcom %} não encontrar um executor on-line e inativo em qualquer nível, o trabalho entrará na fila de todos os níveis e irá esperar que um executor correspondente de qualquer nível fique on-line e pegue o trabalho.
- Se o trabalho permanecer na fila por mais de 24 horas, o trabalho falhará.
{% else %}
1. {% data variables.product.prodname_dotcom %} primeiro procura um executor no nível do repositório, em seguida, no nível da organização e, por fim, no nível da empresa.
2. Em seguida, o trabalho é enviado para o primeiro executor correspondente que está on-line e inativo.
   - Se todos os executores on-line estiverem ocupados, o trabalho será agendado no nível com o maior número de executores on-line.
   - Se todos os runners correspondentes estiverem off-line, a tarefa será listada no nível com o maior número de executores off-line correspondentes.
   - Se não houver executores correspondentes em qualquer nível, o trabalho falhará.
   - Se o trabalho permanecer na fila por mais de 24 horas, o trabalho falhará.
{% endif %}
