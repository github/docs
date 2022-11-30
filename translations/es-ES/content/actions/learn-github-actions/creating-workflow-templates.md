---
title: Crear plantillas de flujo de trabajo
shortTitle: Crear plantillas
intro: Aprende cómo puedes crear plantillas de flujo de trabajo para ayudar a los integrantes de tu equipo a agregar flujos de trabajo nuevos más fácilmente.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

{% data reusables.actions.workflow-organization-templates %}

## Crear una plantilla de flujo de trabajo

Los usuarios con acceso de escritura en el repositorio `.github` de la organización pueden crear plantillas de flujo de trabajo. Los miembros de la organización que tengan permisos para crear flujos de trabajo podrán entonces utilizar estas plantillas. You can share workflow templates if your organization's repository is public or if the repository is private and on an Enterprise plan.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
{% note %}

**Nota:** Para evitar la duplicación en los flujos de trabajo que se crean a partir de una plantilla, puedes llamar a los flujos reutilizables desde una plantilla de flujo de trabajo. Esto puede ayudar a que tus flujos de trabajo se mantengan más fácilmente. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

{% endnote %}
{% endif %}

Este procedimiento muestra cómo crear una plantilla de flujo de trabajo y un archivo de metadatos. El archivo de metadatos describe cómo se presenta la plantilla a los usuarios cuando están creando un flujo de trabajo nuevo.

1. En caso de que no exista previamente, crea en tu organización un repositorio público nuevo que se llame `.github`.
2. Crea un directorio que se llame `workflow-templates`.
3. Crea tu nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

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
4. Crea un archivo de metadatos dentro del directorio `workflow-templates`. El archivo de metadatos debe tener el mismo nombre que el archivo de flujo de trabajo, pero en vez de tener la extensión `.yml`, este deberá encontrarse adjunto en `.properties.json`. Por ejemplo, este archivo que se llama `octo-organization-ci.properties.json` contiene los metadatos para un archivo de flujo de trabajo de nombre `octo-organization-ci.yml`:
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

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Utilizar plantillas de flujo de trabajo](/actions/learn-github-actions/using-workflow-templates)".
