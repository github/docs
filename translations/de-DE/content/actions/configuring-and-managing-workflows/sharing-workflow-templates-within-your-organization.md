---
title: Freigeben von Workflowvorlagen in Ihrer Organisation
intro: Sie können einen standardisierten Satz von Workflowvorlagen speziell für Ihre Organisation erstellen. Organisationsmitglieder können die Vorlagen dann beim Erstellen neuer Workflows in den Organisations-Repositorys verwenden.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Workflowvorlagen können von Benutzern mit Schreibzugriff auf die `.github` Repository der Organisation erstellt werden. Die Vorlagen können dann von Organisationsmitgliedern verwendet werden, die über die Berechtigung zum Erstellen von Workflows verfügen.

Workflowvorlagen können verwendet werden, um neue Workflows in öffentlichen Repositorys einer Organisation zu erstellen. Um Vorlagen zum Erstellen von Workflows in privaten Repositorys zu verwenden, muss die Organisation Teil eines Unternehmens- oder GitHub One-Plans sein.

### Erstellen einer Workflowvorlage

In diesem Verfahren wird veranschaulicht, wie eine Workflowvorlage und eine Metadatendatei erstellt werden. Die Metadatendatei beschreibt, wie die Vorlage benutzern beim Erstellen eines neuen Workflows angezeigt wird.

1. Wenn es noch nicht vorhanden ist, erstellen Sie ein neues öffentliches Repository mit dem Namen `.github` in Ihrer Organisation.
1. Erstellen Sie ein Verzeichnis mit dem Namen `Workflowvorlagen`.
1. Erstellen Sie Ihre neue Workflowdatei im `Workflow-Vorlagen` Verzeichnis.

   Wenn Sie auf den Standardzweig eines Repositorys verweisen müssen, können Sie den `$default-branch` Platzhalter verwenden. Wenn ein Workflow mit Ihrer Vorlage erstellt wird, wird der Platzhalter automatisch durch den Namen der Standardverzweigung des Repositorys ersetzt.

   Diese Datei mit dem Namen `octo-organization-ci.yml` veranschaulicht beispielsweise einen grundlegenden Workflow.

   ```yaml
   Name: Octo Organization CI

   on:
     push:
       branch: [ $default-branch ]
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
1. Erstellen Sie eine Metadatendatei im `Workflow-Vorlagen` Verzeichnis. Die Metadatendatei muss denselben Namen wie die Workflowdatei haben, aber anstelle der Erweiterung `.yml` muss sie mit `.properties.json`angehängt werden. Diese Datei mit dem Namen `octo-organization-ci.properties.json enthält` beispielsweise die Metadaten für eine Workflowdatei mit dem Namen `octo-organization-ci.yml`:
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

### Verwenden einer Workflowvorlage

In diesem Verfahren wird veranschaulicht, wie ein Mitglied Ihrer Organisation eine Workflowvorlage finden und verwenden kann, um einen neuen Workflow zu erstellen. Die Workflowvorlagen einer Organisation können von jedem Benutzer verwendet werden, der Mitglied der Organisation ist.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Wenn Ihr Repository bereits über vorhandene Workflows verfügt: Klicken Sie in der linken oberen Ecke auf **Neuer Workflow**. ![Erstelle einen neuen Workflow](/assets/images/help/repository/actions-new-workflow.png)
1. Die Workflowvorlagen Ihrer Organisation befinden sich in ihrem eigenen Abschnitt mit dem Titel "Workflows, die von _Organisationsnamen_erstellt wurden". Klicke unter dem Namen der zu verwendenden Vorlage auf **Set up this workflow** (Workflow einrichten). ![Einrichten dieses Workflows](/assets/images/help/settings/actions-create-starter-workflow.png)
