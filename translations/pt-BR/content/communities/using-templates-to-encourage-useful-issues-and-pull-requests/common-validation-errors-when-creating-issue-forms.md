---
title: Common validation errors when creating issue forms
intro: 'Você pode ver alguns desses erros comuns de validação ao criar, salvar ou visualizar formulários de problemas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
---

<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## Required top level key `name` is missing

O modelo não contém um campo `nome`, o que significa que não está claro que nome dar ao seu modelo de problema ao fornecer aos usuários uma lista de opções.

### Exemplo

```yaml
descrição: "Obrigado por relatar um erro!"
...
```

O erro pode ser corrigido adicionando `nome` como chave.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## a `chave` deve ser uma string

Esta mensagem de erro significa que uma chave permitida foi fornecida, mas seu valor não pode ser analisado porque o tipo de dado não é compatível.

### Exemplo

A `descrição` abaixo está sendo analisada como um booleano, mas deve ser uma string.

```yaml
name: "Bug report"
description: true
...
```

O erro pode ser corrigido fornecendo uma string como o valor. As strings podem ter de ser envolvidas em aspas duplas para serem analisadas com sucesso. Por exemplo, as strings que contenham `'` devem estar entre aspas duplas.

```yaml
name: "Bug report"
description: "true"
...
```

As strings vazias ou que consistem em espaços em branco também não são permitidas quando o campo espera uma string.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

O erro pode ser corrigido ajustando o valor como uma string não vazia. Se o campo não for obrigatório, você deverá excluir o par chave-valor.

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `entrada` não é uma chave permitida

Uma chave inesperada foi fornecida no nível superior do modelo. Para obter mais informações sobre quais chaves de nível superior são compatíveis, consulte "[Sintaxe para os formulários do problema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax). "

### Exemplo

```yaml
name: "Bug report"
hello: world
...
```

O erro pode ser corrigido removendo as chaves inesperadas.

```yaml
name: "Bug report"
...
```

## Chaves proibidas

O YAML analisa certas strings como valores `booleanos`. Para evitar isso, proibimos explicitamente o uso das seguintes chaves:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

O erro pode ser corrigido removendo as chaves proibidas.

## O texto deve conter pelo menos um campo que não seja markdown

Os formulários de problemas devem aceitar a entrada do usuário, o que significa que pelo menos um dos seus campos deve conter um campo de entrada de usuário. Um elemento `markdown` é um texto estático. Portanto, uma matriz do `texto` não pode conter apenas elementos de `markdown`.

### Exemplo

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

O erro pode ser corrigido adicionando elementos que não são markdown que aceitam a entrada do usuário.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## O texto deve ter identificações únicas

Se você estiver usando `atributos de id` para distinguir vários elementos, cada atributo de `id` deverá ser único.

### Exemplo

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

O erro pode ser corrigido alterando o `id` para uma dessas entradas, para que todo campo `entrada` tenha um atributo `id` único.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## O texto deve ter etiquetas únicas

Quando há vários elementos do `texto` que aceitam entrada do usuário, o atributo `etiqueta` para cada campo de entrada do usuário deve ser único.

### Exemplo

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

O erro pode ser corrigido alterando o atributo `rótulo` para um dos campos de entrada para garantir que cada `etiqueta` seja única.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

Os campos de entrada também podem ser diferenciados pelo seu atributo `id`. Se forem necessários atributos de `etiquetas` duplicadas, você poderá fornecer pelo menos um `id` para diferenciar dois elementos com etiquetas idênticas.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

Os atributos de `id` não estão visíveis no texto do problema. If you want to distinguish the fields in the resulting issue, you should use distinct `label` attributes.


## Labels are too similar

Similar labels may be processed into identical references. If an `id` attribute is not provided for an `input`, the `label` attribute is used to generate a reference to the `input` field. To do this, we process the `label` by leveraging the Rails [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) method. In some cases, two labels that are distinct can be processed into the same parameterized string.

### Exemplo

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

The error can be fixed by adding at least one differentiating alphanumeric character, `-`, or `_` to one of the clashing labels.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

The error can also be fixed by giving one of the clashing labels a unique `id`.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## Checkboxes must have unique labels

When a `checkboxes` element is present, each of its nested labels must be unique among its peers, as well as among other input types.

### Exemplo

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

The error can be fixed by changing the `label` attribute for one of these inputs.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

Alternatively, you can supply an `id` to any clashing top-level elements. Nested checkbox elements do not support the `id` attribute.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Os atributos de `id` não estão visíveis no texto do problema. If you want to distinguish the fields in the resulting issue, you should use distinct `label` attributes.

## Body[i]: required key type is missing

Each body block must contain the key `type`.

Errors with `body` will be prefixed with `body[i]` where `i` represents the zero-indexed index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

The error can be fixed by adding the key `type` with a valid input type as the value. Para os tipos de entrada disponíveis `texto` e suas sintaxes, consulte "[Sintaxe para o esquema de formulário {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)".

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

## Body[i]: `x` is not a valid input type

One of the body blocks contains a type value that is not one of the [permitted types](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

The error can be fixed by changing `x` to one of the valid types.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

## Body[i]: required attribute key `value` is missing

One of the required `value` attributes has not been provided. The error occurs when a block does not have an `attributes` key or does not have a `value` key under the `attributes` key.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
- type: markdown
```

The error in this example can be fixed by adding `value` as a key under `attributes` in the second list element of `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i]: label must be a string

Within its `attributes` block, a value has the wrong data type.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

The `label` below is being parsed as a Boolean, but it should be a string.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

The error can be fixed by supplying a string value for `label`. If you want to use a `label` value that may be parsed as a Boolean, integer, or decimal, you should wrap the value in quotes. For example, `"true"` or `"1.3"` instead of `true` or `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

As strings vazias ou strings que consistem em apenas espaços em branco não são permitidas quando um atributo espera uma string. Por exemplo, `""` ou `" "` não são permitidos.

Se o atributo é obrigatório, o valor deverá ser uma string não vazia. Se o campo não for obrigatório, você deverá excluir o par chave-valor.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i]: `id` pode apenas conter números, letras, -, _

Atributos de `id` podem conter apenas caracteres alfanuméricos, `-`, e `_`. Seu modelo pode incluir caracteres não permitidos, como espaços em branco, em um `id`.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

O erro pode ser corrigido garantindo que os espaços em branco e outros caracteres não permitidos sejam removidos de valores da `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]: `x` não é uma chave permitida

Uma chave inesperada, `x`, foi fornecida no mesmo nível de indentação que `tipo` e `atributos`.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

O erro pode ser corrigido removendo chaves extras e usando apenas `tipo`, `atributos` e `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: `label` contém a palavra proibida

Para minimizar o risco de informações e credenciais privadas serem publicadas nos problemas do GitHub, algumas palavras comumente usadas por invasores não são permitidas na `etiqueta` de entrada ou elementos de texto.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

O erro pode ser corrigido removendo termos como "senha" de qualquer campo da `etiqueta`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]: `x` não é um atributo permitido

Uma chave inválida foi fornecida em um bloco de `atributos`.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    valor: "Obrigado por reservar um tempo tempo para preencher esse erro!"
```

O erro pode ser corrigido removendo chaves extras e usando apenas os atributos permitidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]: `opções ` devem ser únicas

Para caixas de seleção e tipos de entrada de menu suspenso, as escolhas definidas na matriz `opções` devem ser únicas.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

O erro pode ser corrigido garantindo que não existam opções duplicadas na matriz de `opções`.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]: `options` não deve incluir a palavra reservada, nenhum

"Nenhum" é uma palavra reservada em um conjunto de `opções` porque é usado para indicar a não escolha quando não um `dropdown` não é necessário.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

O erro pode ser corrigido removendo "Nenhum" como opção. Se você deseja que um contribuidor possa indicar que ele não gosta de nenhum desses tipos de tortas, você pode também remover a validação `necessária`.

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

Neste exemplo, "Nenhum" será preenchido automaticamente como uma opção selecionável.

## Body[i]: `options` não deve incluir booleanos. Por favor, coloque os valores como "sim" e "verdadeiro" entre aspas

Há uma série de palavras em inglês processadas em valores booleanos pelo analisador do YAML, a menos que sejam entre aspas. Para as `opções` do menu suspenso, todos os itens devem ser strings ao invés de booleanos.

Errors with `body` will be prefixed with `body[i]` where `i` represents the index of the body block containing the error. For example, `body[0]` tells us that the error has been caused by the first block in the `body` list.

### Exemplo

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

The error can be fixed by wrapping each offending option in quotes, to prevent them from being processed as Boolean values.

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## Leia mais

- [YAML](https://yaml.org/)
- [Sintaxe para formulários de problema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
