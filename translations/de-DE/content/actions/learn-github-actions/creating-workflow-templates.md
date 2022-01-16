---
title: Creating workflow templates
shortTitle: Creating templates
intro: Learn how you can create workflow templates to help people in your team add new workflows more easily.
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

## Übersicht

{% data reusables.actions.workflow-organization-templates %}

## Erstellen einer Workflowvorlage

Workflowvorlagen können von Benutzern mit Schreibzugriff auf die `.github` Repository der Organisation erstellt werden. Die Vorlagen können dann von Organisationsmitgliedern verwendet werden, die über die Berechtigung zum Erstellen von Workflows verfügen. You can share workflow templates if your organization's repository is public or if the repository is private and on an Enterprise plan.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
{% note %}

**Note:** To avoid duplication in workflows created from a template you can call reusable workflows from within a workflow template. This can help make your workflows easier to maintain. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

{% endnote %}
{% endif %}

In diesem Verfahren wird veranschaulicht, wie eine Workflowvorlage und eine Metadatendatei erstellt werden. Die Metadatendatei beschreibt, wie die Vorlage benutzern beim Erstellen eines neuen Workflows angezeigt wird.

1. Wenn es noch nicht vorhanden ist, erstellen Sie ein neues öffentliches Repository mit dem Namen `.github` in Ihrer Organisation.
2. Erstellen Sie ein Verzeichnis mit dem Namen `Workflowvorlagen`.
3. Erstellen Sie Ihre neue Workflowdatei im `Workflow-Vorlagen` Verzeichnis.

   Wenn Sie auf den Standardzweig eines Repositorys verweisen müssen, können Sie den `$default-branch` Platzhalter verwenden. Wenn ein Workflow mit Ihrer Vorlage erstellt wird, wird der Platzhalter automatisch durch den Namen der Standardverzweigung des Repositorys ersetzt.

   Diese Datei mit dem Namen `octo-organization-ci.yml` veranschaulicht beispielsweise einen grundlegenden Workflow.

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
4. Erstellen Sie eine Metadatendatei im `Workflow-Vorlagen` Verzeichnis. Die Metadatendatei muss denselben Namen wie die Workflowdatei haben, aber anstelle der Erweiterung `.yml` muss sie mit `.properties.json`angehängt werden. Diese Datei mit dem Namen `octo-organization-ci.properties.json enthält` beispielsweise die Metadaten für eine Workflowdatei mit dem Namen `octo-organization-ci.yml`:
   ```yaml
   •
       "Name": "Octo Organization Workflow",
       "beschreibung": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json
   
       
           
           "
   ```
   * `Name` - **erforderlich.** Der Name der Workflowvorlage. Dies wird in der Liste der verfügbaren Vorlagen angezeigt.
   * `Beschreibung` - **erforderlich.** Die Beschreibung der Workflowvorlage. Dies wird in der Liste der verfügbaren Vorlagen angezeigt.
   * `iconName` - **Erforderlich.** Definiert ein Symbol für den Eintrag des Workflows in der Vorlagenliste. Der `iconName` muss ein SVG-Symbol mit demselben Namen sein und in den `Workflow-Vorlagen` Verzeichnis gespeichert werden. Beispielsweise wird eine SVG-Datei mit dem Namen `example-icon.svg` als `Beispielsymbol`referenziert.
   * `Kategorien` - **Optional.** Definiert die Sprachkategorie des Workflows. Wenn ein Benutzer die verfügbaren Vorlagen anzeigt, werden die Vorlagen, die derselben Sprache entsprechen, stärker in den Vordergrund gerückt. Informationen zu den verfügbaren Sprachkategorien finden Sie unter https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Optional.** Ermöglicht die Verwendung der Vorlage, wenn das Repository des Benutzers eine Datei im Stammverzeichnis enthält, die einem definierten regulären Ausdruck entspricht.

Um eine weitere Workflowvorlage hinzuzufügen, fügen Sie Ihre Dateien `Workflow-Vorlagen` -Verzeichnis hinzu. Ein Beispiel:

![Workflow-Vorlagendateien](/assets/images/help/images/workflow-template-files.png)

## Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Using workflow templates](/actions/learn-github-actions/using-workflow-templates)."
