---
title: Erstellen von Startworkflows für deine Organisation
shortTitle: Creating starter workflows
intro: 'Hier erfährst du, wie du Startworkflows erstellen kannst, um Mitglieder deines Teams beim Hinzufügen von neuen Workflows zu unterstützen.'
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
ms.openlocfilehash: cbaecefc90f3593b8883c7ccad5256b4addf972c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884189'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Erstellen eines Startworkflows

Startworkflows können von Benutzer*innen mit Schreibzugriff auf das `.github`-Repository der Organisation erstellt werden. Diese können dann von Organisationsmitgliedern verwendet werden, die über die Berechtigung zum Erstellen von Workflows verfügen.

{% ifversion fpt %} Startworkflows, die von Benutzer*innen erstellt wurden, können nur zum Erstellen von Workflows in öffentlichen Repositorys verwendet werden. Organisationen, die {% data variables.product.prodname_ghe_cloud %} nutzen, können Startworkflows auch zum Erstellen von Workflows in privaten Repositorys verwenden. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**Hinweis:** Du kannst wiederverwendbare Workflows innerhalb eines Workflows abrufen, um die Duplizierung zwischen Startworkflows zu vermeiden. Dies kann die Verwaltung von Workflows vereinfachen. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).

{% endnote %} {% endif %}

In diesem Verfahren wird veranschaulicht, wie du einen Startworkflow und eine Metadatendatei erstellen kannst. Die Metadatendatei beschreibt, wie der Startworklow Benutzer*innen beim Erstellen eines neuen Workflows zur Verfügung gestellt wird.

1. Wenn diese noch nicht vorhanden ist, solltest du ein neues Repository mit dem Namen `.github` in deiner Organisation erstellen.
2. Erstelle ein Verzeichnis namens `workflow-templates`.
3. Erstelle die neue Workflowdatei im Verzeichnis `workflow-templates`.

   Wenn du auf den Standardbranch eines Repositorys verweisen musst, kannst du den Platzhalter `$default-branch` verwenden. Beim Erstellen eines Workflows wird der Platzhalter automatisch durch den Namen des Standardbranches des Repositorys ersetzt.

   Die Datei `octo-organization-ci.yml` veranschaulicht beispielsweise einen grundlegenden Workflow.

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
4. Erstelle im Verzeichnis `workflow-templates` eine Metadatendatei. Die Metadatendatei muss denselben Namen wie die Workflowdatei tragen, aber statt der `.yml`-Erweiterung muss `.properties.json` angefügt sein. Beispielsweise enthält die Datei `octo-organization-ci.properties.json` die Metadatei für den Workflow `octo-organization-ci.yml`:
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
   * `name` - **Muss angegeben werden.** Der Name des Workflows. Dieser wird in der Liste der verfügbaren Workflows angezeigt.
   * `description` - **Muss angegeben werden.** Die Beschreibung des Workflows. Diese wird in der Liste der verfügbaren Workflows angezeigt.
   * `iconName` - **Kann optional angegeben werden.** Dieser legt ein Symbol für den Workflow fest, das in der Liste der Workflows angezeigt wird. Der `iconName` muss der Name einer SVG-Datei (ohne die Dateinamenerweiterung) sein, die im Verzeichnis `workflow-templates` gespeichert ist. Beispielsweise wird auf eine SVG-Datei mit dem Namen `example-icon.svg` als `example-icon` verwiesen.
   * `categories` - **Kann optional angegeben werden.** Definiert die Sprachkategorie des Workflows. Wenn ein*e Benutzer*in die verfügbaren Startworkflows für ein Repository anzeigt, werden die Workflows, die mit der identifizierten Sprache für das Projekt übereinstimmen, stärker hervorgehoben. Weitere Informationen zu den verfügbaren Sprachkategorien findest du unter https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Kann optional angegeben werden.** Dies ermöglicht die Verwendung des Workflows, wenn sich im Repository des Benutzers bzw. der Benutzerin eine Datei im Stammverzeichnis befindet, die einem definierten regulären Ausdruck entspricht.

Füge die Dateien zum gleichen `workflow-templates`-Verzeichnis hinzu, um einen anderen Startworkflow hinzuzufügen. Beispiel:

![Workflowdateien](/assets/images/help/images/workflow-template-files.png)

## Nächste Schritte

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Verwenden von Startworkflows](/actions/using-workflows/using-starter-workflows).
