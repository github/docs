---
title: Creating starter workflows for your organization
shortTitle: Creating starter workflows
intro: Learn how you can create starter workflows to help people in your team add new workflows more easily.
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

## Creating a starter workflow

Starter workflows can be created by users with write access to the organization's `.github` repository. These can then be used by organization members who have permission to create workflows.

{% ifversion fpt %}
Starter workflows created by users can only be used to create workflows in public repositories. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use starter workflows to create workflows in private repositories. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Note:** To avoid duplication among starter workflows you can call reusable workflows from within a workflow. Esto puede ayudar a que tus flujos de trabajo se mantengan más fácilmente. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

{% endnote %}
{% endif %}

This procedure demonstrates how to create a starter workflow and metadata file. The metadata file describes how the starter workflows will be presented to users when they are creating a new workflow.

1. En caso de que no exista previamente, crea en tu organización un repositorio público nuevo que se llame `.github`.
2. Crea un directorio que se llame `workflow-templates`.
3. Crea tu nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

   Si necesitas referirte a la rama predeterminada de un repositorio, puedes utilizar el marcador de posición `$default-branch`. When a workflow is created the placeholder will be automatically replaced with the name of the repository's default branch.

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
   * `name` - **Required.** The name of the workflow. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `description` - **Required.** The description of the workflow. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `iconName` - **Optional.** Specifies an icon for the workflow that's displayed in the list of workflows. The `iconName` must be the name of an SVG file, without the file name extension, stored in the `workflow-templates` directory. For example, an SVG file named `example-icon.svg` is referenced as `example-icon`.
   * `categories` - **Opcional.** Define la categoría de lenguaje del flujo de trabajo. When a user views the available starter workflows for a repository, the workflows that match the identified language for the project are featured more prominently. Para obtener información sobre las categorías de lenguaje disponibles, consulta https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Optional.** Allows the workflow to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another starter workflow, add your files to the same `workflow-templates` directory. Por ejemplo:

![Workflow files](/assets/images/help/images/workflow-template-files.png)

## Pasos siguientes

To continue learning about {% data variables.product.prodname_actions %}, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)."
