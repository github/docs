---
title: Crear flujos de trabajo iniciales para tu organización
shortTitle: Crear flujos de trabajo iniciales
intro: Aprende cómo puedes crear flujos de trabajo iniciales para ayudar a las personas de tu equipo a agregar flujos de trabajo con mayor facilidad.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Crear un flujo de trabajo inicial

Los usuarios con acceso de escritura al repositorio `.github` de una organización pueden crear flujos de trabajo iniciales. Estos pueden utilizarse entonces por los miembros de las organizaciones que tienen permiso para crear flujos de trabajo.

{% ifversion fpt %}
Los flujos de trabajo iniciales que crean los usuarios solo pueden utilizarse para crear flujos de trabajo en repositorios públicos. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden utilizar flujos de trabajo iniciales para crear flujos de trabajo en repositorios privados. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Nota:** Para evitar la duplicación entre los flujos de trabajo iniciales, puedes llamar flujos de trabajo reutilizables desde dentro de un flujo de trabajo. Esto puede ayudar a que tus flujos de trabajo se mantengan más fácilmente. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

{% endnote %}
{% endif %}

Este procedimiento demuestra cómo crear un flujo de trabajo inicial y archivo de metadatos. El archivo de metadatos describe cómo se presentarán los flujos de trabajo inicial a los usuarios cuando estén creando uno nuevo.

1. En caso de que no exista previamente, crea en tu organización un repositorio público nuevo que se llame `.github`.
2. Crea un directorio que se llame `workflow-templates`.
3. Crea tu nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

   Si necesitas referirte a la rama predeterminada de un repositorio, puedes utilizar el marcador de posición `$default-branch`. Cuando un flujo de trabajo se crea, el marcador de posición se reemplazará automáticamente con el nombre de la rama predeterminada del repositorio.

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
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Crea un archivo de metadatos dentro del directorio `workflow-templates`. El archivo de metadatos debe tener el mismo nombre que el archivo de flujo de trabajo, pero en vez de tener la extensión `.yml`, este deberá encontrarse adjunto en `.properties.json`. Por ejemplo, este archivo que se llama `octo-organization-ci.properties.json` contiene los metadatos para un archivo de flujo de trabajo de nombre `octo-organization-ci.yml`:
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
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
   * `name` - **Requerido.** El nombre del flujo de trabajo. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `description` - **Requerido.** La descripción del flujo de trabajo. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `iconName` - **Opcional.** Especifica un icono para el flujo de trabajo que se muestra en la lista de flujos de trabajo. El `iconName` debe ser el mismo que el de un archivo SVG, sin la extensión del nombre del archivo, almacenado en el directorio `workflow-templates`. Por ejemplo, un archivo SVG llamado `example-icon.svg` se referencia como `example-icon`.
   * `categories` - **Opcional.** Define la categoría de lenguaje del flujo de trabajo. Cuando un usuario ve los flujos iniciales disponibles de un repositorio, aquellos que coincidan con el lenguaje identificado del proyecto se mostrarán más destacadamente. Para obtener información sobre las categorías de lenguaje disponibles, consulta https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que se utilice el flujo de trabajo si el repositorio del usuario tiene un archivo en su directorio raíz, el cual empate con una expresión regular definida.

Para agregar otro flujo de trabajo inicial, agrega tus archivos al mismo directorio de `workflow-templates`. Por ejemplo:

![Archivos de flujo de trabajo](/assets/images/help/images/workflow-template-files.png)

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Utilizar flujos de trabajo iniciales](/actions/using-workflows/using-starter-workflows)".
