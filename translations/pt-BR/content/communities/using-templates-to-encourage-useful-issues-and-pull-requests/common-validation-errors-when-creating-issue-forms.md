---
title: Erros de validação comuns ao criar formulários de problemas
intro: 'Você pode ver alguns desses erros comuns de validação ao criar, salvar ou visualizar formulários de problemas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 54451186fe7fcbc40945dc6a0b2ee2d757924c1b
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145861066'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## <a name="required-top-level-key-name-is-missing"></a>A chave `name` de nível superior obrigatória está ausente

O modelo não contém um campo `name`, o que significa que não está claro como chamar seu modelo de problema ao fornecer aos usuários uma lista de opções.

### <a name="example"></a>Exemplo

```yaml
description: "Thank you for reporting a bug!"
...
```

O erro pode ser corrigido pela adição de `name` como uma chave.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## <a name="key-must-be-a-string"></a>`key` precisa ser uma cadeia de caracteres

Esta mensagem de erro significa que uma chave permitida foi fornecida, mas seu valor não pode ser analisado porque o tipo de dado não é compatível.

### <a name="example"></a>Exemplo

O `description` abaixo está sendo analisado como um booliano, mas deve ser uma cadeia de caracteres.

```yaml
name: "Bug report"
description: true
...
```

O erro pode ser corrigido fornecendo uma string como o valor. As strings podem ter de ser envolvidas em aspas duplas para serem analisadas com sucesso. Por exemplo, as cadeias de caracteres que contêm `'` precisam ser colocadas entre aspas duplas.

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

## <a name="input-is-not-a-permitted-key"></a>`input` não é uma chave permitida

Uma chave inesperada foi fornecida no nível superior do modelo. Para obter mais informações sobre quais chaves de nível superior são compatíveis, confira "[Sintaxe para formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)".

### <a name="example"></a>Exemplo

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

## <a name="forbidden-keys"></a>Chaves proibidas

O YAML analisa determinadas cadeias de caracteres como valores `Boolean`. Para evitar isso, proibimos explicitamente o uso das seguintes chaves:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

O erro pode ser corrigido removendo as chaves proibidas.

## <a name="body-must-contain-at-least-one-non-markdown-field"></a>O texto deve conter pelo menos um campo que não seja markdown

Os formulários de problemas devem aceitar a entrada do usuário, o que significa que pelo menos um dos seus campos deve conter um campo de entrada de usuário. Um elemento `markdown` é um texto estático, ou seja, uma matriz `body` não pode conter apenas elementos `markdown`.

### <a name="example"></a>Exemplo

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

## <a name="body-must-have-unique-ids"></a>O texto deve ter identificações únicas

Se você estiver usando atributos `id` para distinguir vários elementos, cada atributo `id` precisará ser exclusivo.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido pela alteração da `id` de uma dessas entradas, para que cada campo `input` tenha um atributo `id` exclusivo.

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

## <a name="body-must-have-unique-labels"></a>O texto deve ter etiquetas únicas

Quando há vários elementos `body` que aceitam a entrada de usuário, o atributo `label` para cada campo de entrada de usuário precisa ser exclusivo.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido pela alteração do atributo `label` de um dos campos de entrada para garantir que cada `label` seja exclusivo.

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

Os campos de entrada também podem ser diferenciados pelo atributo `id`. Se forem necessários atributos `label` duplicados, você poderá fornecer, pelo menos, uma `id` para diferenciar dois elementos com rótulos idênticos.

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

Os atributos da `id` não ficam visíveis no corpo do problema. Caso deseje distinguir os campos no problema resultante, use atributos da `label` distintos.


## <a name="labels-are-too-similar"></a>As etiquetas são muito semelhantes

As etiquetas semelhantes podem ser processadas em referências idênticas. Se um atributo `id` não for fornecido para uma `input`, o atributo `label` será usado para gerar uma referência ao campo `input`. Para fazer isso, processamos o `label` aproveitando o método [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) do Rails. Em alguns casos, duas etiquetas distintas podem ser processadas dentro da mesma string parametrizada.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido pela adição de, pelo menos, um caractere alfanumérico diferenciador, `-`, ou `_` a um dos rótulos conflitantes.

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

O erro também pode ser corrigido pelo fornecimento de uma `id` exclusiva a um dos rótulos conflitantes.

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

## <a name="checkboxes-must-have-unique-labels"></a>As caixas de seleção devem ter etiquetas únicas

Quando um elemento `checkboxes` está presente, cada um dos respectivos rótulos aninhados precisa ser exclusivo entre os pares, bem como entre outros tipos de entrada.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido pela alteração do atributo `label` para uma dessas entradas.

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

Como alternativa, você pode fornecer uma `id` para qualquer elemento de nível superior conflitante. Os elementos da caixa de seleção aninhados não dão suporte ao atributo `id`.

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

Os atributos da `id` não ficam visíveis no corpo do problema. Caso deseje distinguir os campos no problema resultante, use atributos da `label` distintos.

## <a name="bodyi-required-key-type-is-missing"></a>Body[i]: o tipo de chave necessário está ausente

Cada bloco de corpo precisa conter a chave `type`.

Os erros com `body` serão precedidos com o `body[i]`, em que `i` representa o índice indexado a zero do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

O erro pode ser corrigido pela adição da chave `type` com um tipo de entrada válido como o valor. Para os tipos de entrada `body` disponíveis e as respectivas sintaxes, confira "[Sintaxe do esquema de formulário do {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)".

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-x-is-not-a-valid-input-type"></a>Body[i]: `x` não é um tipo de entrada válido

Um dos blocos de corpo contém um valor de tipo que não é um dos [tipos permitidos](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

O erro pode ser corrigido pela alteração de `x` para um dos tipos válidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-required-attribute-key-value-is-missing"></a>Body[i]: a chave `value` de atributo obrigatória está ausente

Um dos atributos `value` obrigatórios não foi fornecido. O erro ocorre quando um bloco não tem uma chave `attributes` ou não tem uma chave `value` sob a chave `attributes`.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

O erro deste exemplo pode ser corrigido pela adição de `value` como uma chave sob `attributes` no segundo elemento da lista de `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## <a name="bodyi-label-must-be-a-string"></a>Body[i]: a etiqueta deve ser uma string

Dentro do bloco `attributes`, um valor tem o tipo de dados incorreto.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

O `label` abaixo está sendo analisado como um booliano, mas deve ser uma cadeia de caracteres.


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

O erro pode ser corrigido pelo fornecimento de um valor de cadeia de caracteres para `label`. Caso deseje usar um valor `label` que possa ser analisado como booliano, inteiro ou decimal, coloque o valor entre aspas. Por exemplo, `"true"` ou `"1.3"` em vez de `true` ou `1.3`.

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

As strings vazias ou strings que consistem em apenas espaços em branco não são permitidas quando um atributo espera uma string. Por exemplo, `""` ou `"     "` não é permitido.

Se o atributo é obrigatório, o valor deverá ser uma string não vazia. Se o campo não for obrigatório, você deverá excluir o par chave-valor.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## <a name="bodyi-id-can-only-contain-numbers-letters---_"></a>Body[i]: `id` só pode conter números, letras, -, _

Os atributos `id` só podem conter somente caracteres alfanuméricos, `-` e `_`. Seu modelo pode incluir caracteres não permitidos, como espaço em branco, em uma `id`.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

O erro pode ser corrigido garantindo que os espaços em branco e outros caracteres não permitidos sejam removidos dos valores `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## <a name="bodyi-x-is-not-a-permitted-key"></a>Body[i]: `x` não é uma chave permitida

Uma chave inesperada, `x`, foi fornecida no mesmo nível de recuo que `type` e `attributes`.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

O erro pode ser corrigido pela remoção das chaves extras e pelo uso de apenas `type`, `attributes` e `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-label-contains-forbidden-word"></a>Body[i]: `label` contém uma palavra proibida

Para minimizar o risco de informações particulares e credenciais serem postadas publicamente nos Problemas do GitHub, algumas palavras comumente usadas por invasores não são permitidas no `label` dos elementos de entrada ou de área de texto.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

O erro pode ser corrigido pela remoção de termos como "password" de qualquer campo `label`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## <a name="bodyi-x-is-not-a-permitted-attribute"></a>Body[i]: `x` não é um atributo permitido

Uma chave inválida foi fornecida em um bloco `attributes`.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

O erro pode ser corrigido removendo chaves extras e usando apenas os atributos permitidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## <a name="bodyi-options-must-be-unique"></a>Body[i]: `options` precisa ser exclusivo

Para as caixas de seleção e os tipos de entrada suspensos, as opções definidas na matriz `options` precisam ser exclusivas.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido garantindo que não existam opções duplicadas na matriz `options`.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## <a name="bodyi-options-must-not-include-the-reserved-word-none"></a>Body[i]: `options` não deve incluir a palavra reservada, none

"None" é uma palavra reservada em um conjunto de `options` porque ela é usada para indicar a não opção quando uma `dropdown` não é obrigatória.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido removendo "Nenhum" como opção. Caso deseje que um colaborador possa indicar que ele não gosta de nenhum desses tipos de tortas, você também pode remover a validação `required`.

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

## <a name="bodyi-options-must-not-include-booleans-please-wrap-values-such-as-yes-and-true-in-quotes"></a>Body[i]: `options` não deve incluir boolianos. Por favor, coloque os valores como "sim" e "verdadeiro" entre aspas

Há uma série de palavras em inglês processadas em valores booleanos pelo analisador do YAML, a menos que sejam entre aspas. Para as lista suspensa `options`, todos os itens precisam ser cadeias de caracteres em vez de boolianos.

Os erros com `body` serão precedidos com `body[i]`, em que `i` representa o índice do bloco do corpo que contém o erro. Por exemplo, `body[0]` informa que o erro foi causado pelo primeiro bloco da lista `body`.

### <a name="example"></a>Exemplo

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

O erro pode ser corrigido colocando cada opção incorreta entre aspas, para evitar que sejam processados como valores booleanos.

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

## <a name="further-reading"></a>Leitura adicional

- [YAML](https://yaml.org/)
- [Sintaxe para formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
