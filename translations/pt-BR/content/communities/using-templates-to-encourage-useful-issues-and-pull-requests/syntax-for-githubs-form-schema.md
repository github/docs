---
title: Sintaxe para o esquema de formulário do GitHub
intro: 'Você pode usar o esquema de formulário de {% data variables.product.company_short %} para configurar formulários para funcionalidades compatíveis.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: 3a8a21f04582b87741ef80755e92fbc859921bb5
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179666'
---
{% note %}

**Observação:** atualmente, o esquema de formulário do {% data variables.product.company_short %} está em versão beta e sujeito a alterações.

{% endnote %}

## Sobre o esquema de formulário de {% data variables.product.company_short %}

Você pode usar o esquema de formulário de {% data variables.product.company_short %} para configurar formulários para funcionalidades compatíveis. Para obter mais informações, confira "[Como configurar modelos de problemas para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)".

Um formulário é um conjunto de elementos que solicita a entrada do usuário. Você pode configurar um formulário criando uma definição de formulário YAML, que é uma matriz de elementos de formulário. Cada elemento de formulário é um conjunto de par chave-valor que determina o tipo do elemento, as propriedades do elemento e as restrições que você deseja aplicar ao elemento. Para algumas chaves, o valor é outro conjunto de pares de chave-valor.

Por exemplo, a definição de formulário a seguir inclui quatro elementos de formulário: uma área de texto para fornecer o sistema operacional do usuário, um menu suspenso para escolher a versão de software que o usuário está executando, uma caixa de seleção para reconhecer o Código de Conduta e Markdown que agradece ao usuário por ter preenchido o formulário.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## simétricas

Para cada elemento de formulário, você pode definir as seguintes chaves.

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | O tipo de elemento que você deseja definir. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | O identificador do elemento, exceto quando `type` é definido como `markdown`. {% data reusables.form-schema.id-must-be-unique %} Se isso for fornecido, a `id` será o identificador canônico do campo nos preenchimentos prévios de parâmetro de consulta de URL. | Opcional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | Um conjunto de pares chave-valor que definem as propriedades do elemento.  | Obrigatório | Mapeamento | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | Um conjunto de pares chave-valor que define restrições sobre o elemento. | Opcional | Mapeamento | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

Você pode escolher entre os seguintes tipos de elementos de formulário. Cada tipo tem atributos e validações exclusivos.

| Tipo | Descrição |
| ---- | ----------- |
| [`markdown`](#markdown) | Texto Markdown exibido no formulário para fornecer contexto extra ao usuário, mas que **não é enviado**. |
| [`textarea`](#textarea) | Um campo de texto linha múltipla. |
| [`input`](#input) | Um campo de texto de linha única. |
| [`dropdown`](#dropdown) | Um menu suspenso. |
| [`checkboxes`](#checkboxes) | Um conjunto de caixas de seleção. |

### `markdown`

Você pode usar um elemento `markdown` para exibir o Markdown no seu formulário que fornece contexto extra ao usuário, mas que não é enviado.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | O texto que é interpretado. A formatação de Markdown é compatível. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Dicas:** o processamento do YAML tratará o símbolo de hash como um comentário. Para inserir cabeçalhos do Markdown, coloque seu texto entre aspas.

Para texto de linhas múltiplas, você pode usar o operador de pipe.

{% endtip %}

#### Exemplo

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Você pode usar um elemento `textarea` para adicionar um campo de texto de várias linhas ao formulário. Os colaboradores também podem anexar arquivos em campos `textarea`.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Uma breve descrição da entrada esperada do usuário, que também é exibida no formulário. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Uma descrição da área de texto para fornecer contexto ou orientação, que é exibida no formulário. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Um marcador semi-opaco interpretado na área de texto quando vazio. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Texto pré-preenchido na área de texto. | Opcional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | Se um valor for fornecido, o texto enviado será formatado de bloco de código. Quando esta chave é fornecida, a área de texto não será expandida para anexos de arquivos ou edição de markdown. | Opcional | String | {% octicon "dash" aria-label="The dash icon" %} | Linguagens conhecidas para {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira [o arquivo YAML de linguagens](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validações

{% data reusables.form-schema.validations-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

Você pode usar um elemento `input` para adicionar um campo de texto de linha única ao formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Uma breve descrição da entrada esperada do usuário, que também é exibida no formulário. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Uma descrição do campo para fornecer contexto ou orientação, que é exibida no formulário. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Um espaço reservado semitransparente interpretado no campo quando vazio. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Texto pré-preenchido no campo. | Opcional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validações

{% data reusables.form-schema.validations-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

Você pode usar um elemento `dropdown` para adicionar um menu suspenso ao formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Uma breve descrição da entrada esperada do usuário, que é exibida no formulário. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Uma descrição do menu suspenso para fornecer contexto ou orientação extra, que é exibida no formulário. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Determina se o usuário pode selecionar mais de uma opção. | Opcional | Boolean | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Uma matriz de opções que o usuário pode escolher. Não pode estar vazio e todas as escolhas devem ser distintas. | Obrigatório | Matriz de cadeia de caracteres | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validações

{% data reusables.form-schema.validations-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

Você pode usar o elemento `checkboxes` para adicionar um conjunto de caixas de seleção ao formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Uma breve descrição da entrada esperada do usuário, que é exibida no formulário. | Obrigatório | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Uma descrição do conjunto de caixas de seleção, que é exibida no formulário. É compatível com a formatação de markdown. | Opcional | String | String vazia | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Uma matriz de caixas de seleção que o usuário pode selecionar. Para a sintaxe, veja abaixo. | Obrigatório | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %}

#### Validações

{% data reusables.form-schema.validations-intro %}

| Chave | Descrição | Obrigatório | Type | Padrão | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Leitura adicional

- [YAML](https://yaml.org)
