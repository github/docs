---
title: Sintaxe para formulários de problema
intro: 'Você pode definir diferentes tipos de entrada, validações, responsáveis padrão e etiquetas padrão para seus formulários de problemas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
---

{% data reusables.community.issue-forms-beta %}

## Sobre a sintaxe do YAML para formulários de problemas

Você pode criar formulários de problemas personalizados adicionando um arquivo de definição de formulário YAML à pasta `/.github/ISSUE_TEMPLATE` no seu repositório. {% data reusables.actions.learn-more-about-yaml %} Você pode definir diferentes tipos de entrada, validações, atribuídos padrão e etiquetas padrão para seus formulários de problemas.

Quando um contribuidor preenche um formulário de problemas, as suas respostas para cada entrada são convertidas em markdown e adicionadas ao corpo de um issue. Os contribuidores podem editar seus problemas criados com formulários de problemas e outras pessoas podem interagir com problemas como um problema criado por meio de outros métodos.

Os formulários de problemas não são compatíveis com pull requests. É possível criar modelos de pull request nos seus repositórios para os colaboradores usarem. Para obter mais informações, consulte "[Criar um modelo de pull request para o repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)".

Este exemplo de arquivo de configuração YAML define um formulário de problema utilizando várias entradas para reportar um erro.

{% data reusables.community.issue-forms-sample %}

## Sintaxe de nível superior

Todos os arquivos de configuração de formulário de problema devem começar com os pares chave-valor `nome`, `descrição`e `texto`.

```YAML{:copy}
name:
description:
body:
```

Você pode definir as seguintes chaves de nível superior para cada formulário de problema.

| Tecla       | Descrição                                                                                                                      | Obrigatório | Tipo                                      |
|:----------- |:------------------------------------------------------------------------------------------------------------------------------ |:----------- |:----------------------------------------- |
| `name`      | Um nome para o modelo de formulário de problema. Deve ser exclusivo de todos os outros modelos, incluindo modelos de markdown. | Obrigatório | string                                    |
| `descrição` | Uma descrição para o modelo de formulário de problema, que aparece na interface de modelo de seletor.                          | Obrigatório | string                                    |
| `texto`     | Definição dos tipos de entrada no formulário.                                                                                  | Obrigatório | Array                                     |
| `assignees` | As pessoas que serão automaticamente atribuídas a problemas criados com este modelo.                                           | Opcional    | Matriz ou strings delimitadas por vírgula |
| `etiquetas` | Etiquetas que serão adicionadas automaticamente a problemas criados com este modelo.                                           | Opcional    | Matriz ou strings delimitadas por vírgula |
| `title`     | Um título padrão que será preenchido no formulário de envio do problema.                                                       | Opcional    | string                                    |

Para os tipos de entrada disponíveis `texto` e suas sintaxes, consulte "[Sintaxe para o esquema de formulário {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)".

## Convertendo um modelo de problema de markdown em um modelo de formulário de problema de YAML

Você pode usar os modelos de problemas de markdown e YAML no seu repositório. Se você deseja converter um modelo de problema de markdown em um modelo de formulário de problema de YAML, você deverá criar um novo arquivo YAML para definir o formulário de problema. Você pode transpor manualmente um modelo de problema de markdown existente para um formulário de problema de YAML. Para obter mais informações, consulte "[Configurando modelos de problema para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)."

Se quiser usar o mesmo nome de arquivo para o seu formulário de problema de YAML, você deverá excluir o modelo de problema do markdown quando fizer commit do novo arquivo no seu repositório.

Um exemplo de um modelo de problema de markdown e um modelo de formulário de problema de YAML correspondente é indicado abaixo.

### Modelo de problema de markdown

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? Referências? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### Modelo de formulário de problema de YAML

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? Referências? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## Leia mais

- [YAML](https://yaml.org/)
- [Erros de validação comuns ao criar formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
