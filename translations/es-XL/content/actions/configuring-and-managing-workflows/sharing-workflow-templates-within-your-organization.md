---
title: Compartir plantillas de flujo de trabajo dentro de tu organización
intro: Puedes crear un conjunto estandarizado de plantillas de flujo de trabajo específicamente para tu organización. Los miembros de la organización pueden entonces utilizar estas plantillas cuando creen flujos de trabajo nuevos en los repositorios de dicha organización.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Los usuarios con acceso de escritura en el repositorio `.github` de la organización pueden crear plantillas de flujo de trabajo. Los miembros de la organización que tengan permisos para crear flujos de trabajo podrán entonces utilizar estas plantillas.

Las plantillas de flujo de trabajo pueden utilizarse para crear flujos de trabajo nuevos en los repositorios públicos de una organización; para utilizar estas plantillas para crear flujos de trabajo en repositorios privados, la organización deberá pertenecer a un plan empresarial o a un plan de GitHub One.

### Crear una plantilla de flujo de trabajo

Este procedimiento muestra cómo crear una plantilla de flujo de trabajo y un archivo de metadatos. El archivo de metadatos describe cómo se presenta la plantilla a los usuarios cuando están creando un flujo de trabajo nuevo.

1. En caso de que no exista previamente, crea en tu organización un repositorio público nuevo que se llame `.github`.
1. Crea un directorio que se llame `workflow-templates`.
1. Crea tu nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

   Si necesitas referirte a la rama predeterminada de un repositorio, puedes utilizar el marcador de posición `$default-branch`. Cuando se crea un flujo de trabajo utilizando tu plantilla, el marcador de posición se reemplazará automáticamente con el nombre de la rama predeterminada del repositorio.

   Por ejemplo, este archivo de nombre `octo-organization-ci.yml` ilustra un flujo de trabajo básico.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - uses: actions/checkout@v2

       - name: Run a one-line script
         run: echo Hello from Octo Organization
   ```
1. Crea un archivo de metadatos dentro del directorio `workflow-templates`. El archivo de metadatos debe tener el mismo nombre que el archivo de flujo de trabajo, pero en vez de tener la extensión `.yml`, este deberá encontrarse adjunto en `.properties.json`. Por ejemplo, este archivo que se llama `octo-organization-ci.properties.json` contiene los metadatos para un archivo de flujo de trabajo de nombre `octo-organization-ci.yml`:
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Requerido.** El nombre de la plantilla de flujo de trabajo. Este se muestra en la lista de plantillas disponibles.
   * `description` - **Requerido.** La descripción de la plantilla de flujo de trabajo. Este se muestra en la lista de plantillas disponibles.
   * `iconName` - **Requerido.** Define un icono en la lista de plantillas para la entrada del flujo de trabajo. El `iconName` debe ser un icono en SVG del mismo nombre y se debe almacenar en el directorio `workflow-templates`. Por ejemplo, un archivo de tipo SVG que se nombre `example-icon.svg` se referenciará como `example-icon`.
   * `categories` - **Opcional.** Define la categoría de lenguaje del flujo de trabajo. Cuando un usuario visualiza las plantillas disponibles, aquellas que empaten con el mismo lenguaje se presentarán con mayor prominencia. Para obtener información sobre las categorías de lenguaje disponibles, consulta https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que se utilice la plantilla si el repositorio del usuario contiene un archivo en su directorio raíz, el cual empate con una expresión regular definida.

Para agregar otra plantilla de flujo de trabajo, agrega tus archivos al mismo directorio de `workflow-templates`. Por ejemplo:

![Archivos de plantilla de flujo de trabajo](/assets/images/help/images/workflow-template-files.png)

### Utilizar una plantilla de flujo de trabajo

Este procedimiento ilustra cómo un miembro de tu organización puede encontrar y utilizar una plantilla de flujo de trabajo para crear un flujo de trabajo nuevo. Cualquiera que sea un miembro de la organización podrá utilizar las plantillas de flujo de trabajo de ésta.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Si tu repositorio ya cuenta con flujos de trabajo: En la esquina superior izquierda, da clic sobre **Flujo de trabajo nuevo**. ![Crear un nuevo flujo de trabajo](/assets/images/help/repository/actions-new-workflow.png)
1. Tus plantillas de flujo de trabajo de la organización se ubican en su propia sección, la cual se titula "Flujos de trabajo creados por _nombre de la organización_". Debajo del nombre de la plantilla que deseas utilizar, da clic en **Configurar este flujo de trabajo**. ![Configurar este flujo de trabajo](/assets/images/help/settings/actions-create-starter-workflow.png)
