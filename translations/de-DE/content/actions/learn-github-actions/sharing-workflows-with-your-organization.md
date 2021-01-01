---
title: Sharing workflows with your organization
shortTitle: Sharing workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing workflow templates, secrets, and self-hosted runners.'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Übersicht

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create workflow templates in the `.github` repository and share them with other users in your organization.

### Erstellen einer Workflowvorlage

Workflowvorlagen können von Benutzern mit Schreibzugriff auf die `.github` Repository der Organisation erstellt werden. Die Vorlagen können dann von Organisationsmitgliedern verwendet werden, die über die Berechtigung zum Erstellen von Workflows verfügen. Workflowvorlagen können verwendet werden, um neue Workflows in öffentlichen Repositorys einer Organisation zu erstellen. Um Vorlagen zum Erstellen von Workflows in privaten Repositorys zu verwenden, muss die Organisation Teil eines Unternehmens- oder GitHub One-Plans sein.

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


### Sharing secrets within an organization

You can centrally manage your secrets within an organization, and then make them available to selected repositories. This also means that you can update a secret in one location, and have the change apply to all repository workflows that use the secret.

Beim Erstellen eines geheimen Schlüssels in einer Organisation können Sie eine Richtlinie verwenden, um einzuschränken, welche Repositorys auf diesen geheimen Schlüssel zugreifen können. Sie können z. B. Zugriff auf alle Repositorys gewähren oder den Zugriff auf nur private Repositorys oder eine angegebene Liste von Repositorys beschränken.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Klicken Sie auf **Neue geheime**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den **Value** für Ihr Geheimnis ein.
1. Wählen Sie im **Repository-Zugriff** Dropdownliste eine Zugriffsrichtlinie aus.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

### Share self-hosted runners within an organization

Organization admins can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."


### Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)."
