---
title: Sintaxe para o esquema de formulário do GitHub
intro: 'Você pode usar o esquema de formulário de {% data variables.product.company_short %} para configurar formulários para funcionalidades compatíveis.'
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
---

{% note %}

**Observação:** O esquema de formulário de {% data variables.product.company_short %} encontra-se atualmente na versão beta e está sujeito a alterações.

{% endnote %}

## Sobre o esquema de formulário de {% data variables.product.company_short %}

Você pode usar o esquema de formulário de {% data variables.product.company_short %} para configurar formulários para funcionalidades compatíveis. Para obter mais informações, consulte "[Configurando modelos de problema para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)."

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
    description: The Code of Conduct helps create a safe space for everyone. Nós exigimos
      que todos concordem com isso.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Chaves

Para cada elemento de formulário, você pode definir as seguintes chaves.

| Tecla        | Descrição                                                                                                                                                                                                                          | Obrigatório | Tipo   | Padrão                                          | Valores válidos                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------- | ----------------------------------------------- |
| `tipo`       | O tipo de elemento que você deseja definir.                                                                                                                                                                                        | Obrigatório | string | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul>                       |
| `id`         | O identificador para o elemento, exceto quando `tipo` é definido como `markdown`. {% data reusables.form-schema.id-must-be-unique %} Se fornecido, o `ID` é o identificador canônico para o campo no parâmetro de consulta da URL. | Opcional    | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `attributes` | Um conjunto de pares chave-valor que definem as propriedades do elemento.                                                                                                                                                          | Obrigatório | Hash   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `validações` | Um conjunto de pares chave-valor que define restrições sobre o elemento.                                                                                                                                                           | Opcional    | Hash   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

Você pode escolher entre os seguintes tipos de elementos de formulário. Cada tipo tem atributos e validações exclusivos.

| Tipo                               | Descrição                                                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`markdown`](#markdown)            | O texto do markdown exibido no formulário para fornecer um contexto adicional ao usuário, mas **não é enviado**. |
| [`textarea`](#textarea)            | Um campo de texto linha múltipla.                                                                                |
| [`entrada`](#input)                | Um campo de texto de linha única.                                                                                |
| [`suspenso`](#dropdown)            | Um menu suspenso.                                                                                                |
| [`caixas de seleção`](#checkboxes) | Um conjunto de caixas de seleção.                                                                                |

### `markdown`

Você pode usar um elemento</code>markdown` para exibir o markdown no seu formulário que fornece contexto extra para o usuário, mas não é enviado.</p>

<h4 spaces-before="0">Atributos</h4>

<p spaces-before="0">{% data reusables.form-schema.attributes-intro %}</p>

<table spaces-before="0">
<thead>
<tr>
  <th>Tecla</th>
  <th>Descrição</th>
  <th>Obrigatório</th>
  <th>Tipo</th>
  <th>Padrão</th>
  <th>Valores válidos</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>valor`</td> 

</tr> </tbody> </table>

{% tip %}

**Dicas:** O processamento do YAML tratará o símbolo hash como um comentário. Para inserir cabeçalhos do Markdown, coloque seu texto entre aspas.

Para texto de linhas múltiplas, você pode usar o operador de pipe.

{% endtip %}

#### Exemplo

```YAML{:copy}
body:
- type: markdown
  value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Você pode usar um elemento `textarea` para adicionar um campo de texto de linha múltipla ao seu formulário. Os colaboradores também podem anexar arquivos aos campos `textarea`.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Tecla              | Descrição                                                                                                                                                                                      | Obrigatório | Tipo   | Padrão                                          | Valores válidos                                                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `etiqueta`         | Uma breve descrição da entrada esperada do usuário, que também é exibida no formulário.                                                                                                        | Obrigatório | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descrição`        | Uma descrição da área de texto para fornecer contexto ou orientação, que é exibida no formulário.                                                                                              | Opcional    | string | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `espaço reservado` | Um marcador semi-opaco interpretado na área de texto quando vazio.                                                                                                                             | Opcional    | string | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `valor`            | Texto pré-preenchido na área de texto.                                                                                                                                                         | Opcional    | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `render`           | Se um valor for fornecido, o texto enviado será formatado de bloco de código. Quando esta chave é fornecida, a área de texto não será expandida para anexos de arquivos ou edição de markdown. | Opcional    | string | {% octicon "dash" aria-label="The dash icon" %} | Linguagens conhecidas para {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte [o arquivo de linguagens do YAML](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validações

{% data reusables.form-schema.validations-intro %}

| Tecla | Descrição | Obrigatório | Tipo | Padrão | Valores válidos |
| ----- | --------- | ----------- | ---- | ------ | --------------- |
|       |           |             |      |        |                 |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Apresente-nos o passo a passo."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `entrada`

Você pode usar um elemento de `entrada` para adicionar um campo de texto de linha única ao seu formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Tecla              | Descrição                                                                                 | Obrigatório | Tipo   | Padrão                                          | Valores válidos                                 |
| ------------------ | ----------------------------------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`         | Uma breve descrição da entrada esperada do usuário, que também é exibida no formulário.   | Obrigatório | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descrição`        | Uma descrição do campo para fornecer contexto ou orientação, que é exibida no formulário. | Opcional    | string | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `espaço reservado` | Um espaço reservado semitransparente interpretado no campo quando vazio.                  | Opcional    | string | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `valor`            | Texto pré-preenchido no campo.                                                            | Opcional    | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### Validações

{% data reusables.form-schema.validations-intro %}

| Tecla | Descrição | Obrigatório | Tipo | Padrão | Valores válidos |
| ----- | --------- | ----------- | ---- | ------ | --------------- |
|       |           |             |      |        |                 |
{% data reusables.form-schema.required-key %}

#### Exemplo

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the user account page (1-2 times a week)"
  validations:
    required: true
```

### `suspenso`

Você pode usar um elemento de `dropdown` para adicionar um menu suspenso ao seu formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Tecla       | Descrição                                                                                                       | Obrigatório | Tipo             | Padrão                                          | Valores válidos                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ----------- | ---------------- | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`  | Uma breve descrição da entrada esperada do usuário, que é exibida no formulário.                                | Obrigatório | string           | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descrição` | Uma descrição do menu suspenso para fornecer contexto ou orientação extra, que é exibida no formulário.         | Opcional    | string           | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `múltiplo`  | Determina se o usuário pode selecionar mais de uma opção.                                                       | Opcional    | Booleano         | falso                                           | {% octicon "dash" aria-label="The dash icon" %}
| `options`   | Uma matriz de opções que o usuário pode escolher. Não pode estar vazio e todas as escolhas devem ser distintas. | Obrigatório | String da matriz | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### Validações

{% data reusables.form-schema.validations-intro %}

| Tecla | Descrição | Obrigatório | Tipo | Padrão | Valores válidos |
| ----- | --------- | ----------- | ---- | ------ | --------------- |
|       |           |             |      |        |                 |
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

### `caixas de seleção`

Você pode usar o elemento `checkboxes` para adicionar um conjunto de caixas de seleção ao seu formulário.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Tecla       | Descrição                                                                                                               | Obrigatório | Tipo   | Padrão                                          | Valores válidos                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`  | Uma breve descrição da entrada esperada do usuário, que é exibida no formulário.                                        | Opcional    | string | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descrição` | Uma descrição do conjunto de caixas de seleção, que é exibida no formulário. É compatível com a formatação de markdown. | Opcional    | string | String vazia                                    | {% octicon "dash" aria-label="The dash icon" %}
| `options`   | Uma matriz de caixas de seleção que o usuário pode selecionar. Para a sintaxe, veja abaixo.                             | Obrigatório | Array  | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% data reusables.form-schema.options-syntax %}
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

## Leia mais

- [YAML](https://yaml.org)
