---
title: Sintaxis para formatos de propuesta
intro: 'Puedes definir diferentes tipos de entrada, validaciones, asingados predeterminados y etiquetas predeterminadas para tus formatos de propuesta.'
product: 'Los formatos de propuesta están disponibles en beta para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}'
versions:
  fpt: '*'
topics:
  - Community
---

{% data reusables.community.issue-forms-beta %}

## Acerca de la sintaxis YAML para formatos de propuesta

Puedes crear formatos de propuesta personalizados agregando un archivo de definición de formato YAML a la carpeta `/.github/ISSUE_TEMPLATE` en tu repositorio. {% data reusables.actions.learn-more-about-yaml %} Puedes definir diferentes tipos de entrada, validaciones, asingados predeterminados y etiquetas predeterminadas para tus formatos de propuesta.

Cuando un colaborador llega un formato de propuesta, sus respuestas para cada entrada se convierten en lenguaje de marcado y se agregan al cuerpo de una propuesta. Los contribuyentes pueden editar las propuestas que se crearon con estos formatos de propuesta y otras personas pueden interactuar con las propuestas como con una de ellas que se creó mediante otros métodos.

Los formatos de propuesta no son compatibles para las solicitudes de cambios. Puedes crear plantillas de solicitudes de cambios en tus repositorios para que las utilicen los colaboradores. Para obtener más información, consulta [Crear plantillas de solicitud de extracción para tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)".

Este archivo de configuración YAML define un formato de propuesta utilizando varias entradas para reportar un error.

{% data reusables.community.issue-forms-sample %}

## Sintaxis de nivel superior

Todos los archivos de configuración de formatos de propuestas deben comenzar con los pares de llave-valor `name`, `description`, y `body`.

```YAML{:copy}
name:
description:
body:
```

Puedes configurar las siguientes llaves de nivel superior para cada formato de propuesta.

| Clave           | Descripción                                                                                                                                                | Requerido | Type                                     |
|:--------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------- |:---------------------------------------- |
| `name (nombre)` | Un nombre para la plantilla de formato de propuesta. Debe ser único entre el resto de las plantillas, incluyendo de las plantillas de lenguaje de marcado. | Requerido | Secuencia                                |
| `descripción`   | Una descripción para la plantilla de formato de propuesta, la cual aparece en la interfaz de elección de plantilla.                                        | Requerido | Secuencia                                |
| `cuerpo`        | Definición de los tipos de entrada en el formato.                                                                                                          | Requerido | Arreglo                                  |
| `asignatarios`  | Las personas que se asignarán automáticamente a las propuestas que se crearán con esta plantilla.                                                          | Opcional  | Arreglo o secuencia delimitada por comas |
| `etiquetas`     | Las etiquetas que se agregarán automáticamente a las propuestas que se crearán con esta plantilla.                                                         | Opcional  | Secuencia                                |
| `título`        | Un título predeterminado que se pre-llenará en el formato de emisión de propuestas.                                                                        | Opcional  | Secuencia                                |

Para los tipos de entrada de `body` disponibles y sus sintaxis, consulta la sección "[Sintaxis para el modelo de formato de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)".

## Convertir una plantilla de propuesta de lenguaje de marcado en una plantilla de formato de propuesta YAML

Puedes utilizar plantillas de propuestas tanto de YAML como de lenguaje de marcado en tu repositorio. Si quieres convertir una plantilla de propuesta con lenguaje de marcado en una plantilla de formato de propuesta YAML, debes crear un archivo YAML nuevo para definir el formato de la propuesta. Puedes transponer manualmente una plantilla de propuesta de lenguaje de marcado hacia un formato de propuesta YAML. Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)".

Si quieres utilizar el mismo nombre de archivo para tu formato de propuesta YAML, debes borrar la plantilla de propuesta en lenguaje de marcado cuando confirmes el archivo nuevo en tu repositorio.

A continuación podrás encontrar un ejemplo de plantilla de propuesta de lenguaje de marcado y una plantilla de formato de propuesta YAML correspondiente.

### Plantilla de propuesta de lenguaje de marcado

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
Links? Referencias? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### Plantilla de formato de propuesta YAML

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
      Links? Referencias? Anything that will give us more context about the issue you are encountering!

      Tip: Puedes adjuntar imágenes o archivos de bitácora si haces clic en esta área para resaltarla y luego arrastrar los archivos hacia ella.
  validations:
    required: false
```

## Leer más

- [YAML](https://yaml.org/)
