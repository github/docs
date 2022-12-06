---
title: Übersicht über GitHub Codespaces
shortTitle: Overview
intro: 'In diesem Leitfaden werden {% data variables.product.prodname_github_codespaces %} sowie Details zu ihrer Funktionsweise und Nutzung vorgestellt.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164323'
---
## Was ist ein Codespace?

Ein Codespace ist eine in der Cloud gehostete Entwicklungsumgebung. Du kannst dein Projekt für {% data variables.product.prodname_github_codespaces %} anpassen, indem du [Konfigurationsdateien](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) in deinem Repository committest (was häufig als Configuration-as-Code bezeichnet wird). Dadurch wird eine wiederholbare Codespacekonfiguration für alle Benutzer deines Projekts erstellt.

Jeder Codespace wird auf einem virtuellen Computer ausgeführt, der von {% data variables.product.prodname_dotcom %} gehostet wird. Du kannst den Typ des Computers auswählen, den du verwenden möchtest, je nachdem, welche Ressourcen du benötigst. Es stehen verschiedene Computertypen zur Verfügung, beginnend mit einem 2-Kern-Prozessor, 4 GB RAM und 32 GB Speicher. 

Du kannst über deinen Browser, über {% data variables.product.prodname_vscode %}, über die JetBrains Gateway-Anwendung oder über {% data variables.product.prodname_cli %} eine Verbindung mit deinen Codespaces herstellen.

![Diagramm zur Veranschaulichung der Funktionsweise von {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Verwenden von {% data variables.product.prodname_github_codespaces %}

Du kannst einen Codespace aus einer beliebigen Vorlage, einem beliebigen Branch oder Commit in deinem Repository erstellen, um mit der Entwicklung cloudbasierter Computeressourcen zu beginnen. Wenn du einen Codespace aus einer Vorlage erstellst, kannst du mit einer leeren Vorlage beginnen oder eine Vorlage auswählen, die für die von dir ausgeführte Arbeit geeignet ist.

{% data reusables.codespaces.links-to-get-started %}

### Verwenden von Codespaces im Besitz deines persönlichen Kontos

Alle persönlichen {% data variables.product.prodname_dotcom_the_website %}-Konten verfügen über ein monatliches Kontingent zur kostenlosen Nutzung von {% data variables.product.prodname_github_codespaces %} im kostenlosen oder Pro-Plan. Du kannst mit {% data variables.product.prodname_github_codespaces %} in deinem persönlichen Konto beginnen, ohne Einstellungen zu ändern oder Zahlungsdetails anzugeben.

Du kannst einen Codespace für jedes Repository erstellen und verwenden, den du klonen kannst. Du kannst auch eine Vorlage verwenden, um Codespaces zu erstellen, die anfänglich keinem Repository zugeordnet sind. Wenn du einen Codespace aus einem organisationseigenen Repository erstellst, wird die Verwendung des Codespace entweder der Organisation (sofern die Organisation dafür konfiguriert ist) oder deinem persönlichen Konto in Rechnung gestellt. Codespaces, die aus Vorlagen erstellt wurden, werden immer deinem persönlichen Konto in Rechnung gestellt. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Verwenden von organisationseigenen Codespaces

Organisationsbesitzer können die Verwendung von {% data variables.product.prodname_github_codespaces %} aktivieren, die dem Organisations- oder Unternehmenskonto in Rechnung gestellt werden kann. Dies gilt für Codespaces, die aus Repositorys im Besitz der Organisation erstellt wurden. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization). Du kannst ein Ausgabenlimit für die Verwendung von {% data variables.product.prodname_github_codespaces %} in deinem Organisations- oder Unternehmenskonto festlegen. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

Wenn die Verwendung eines Codespaces einer Organisation oder einem Unternehmen in Rechnung gestellt wird, wird dies angezeigt, wenn der Codespace erstellt wird. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). Codespaces, die einer Organisation oder ihrem übergeordneten Unternehmen in Rechnung gestellt werden, gehören der Organisation und können von einem Organisationsbesitzer bzw. einer -besitzerin gelöscht werden. Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization). 

### Anpassen von {% data variables.product.prodname_github_codespaces %}

Um die Runtimes und Tools in deinem Codespace anzupassen, kannst du eine oder mehrere Entwicklercontainerkonfigurationen für dein Repository erstellen. Das Hinzufügen von Entwicklercontainerkonfigurationen zu deinem Repository ermöglicht es dir, verschiedene Entwicklungsumgebungen zu definieren, die für die Aufgaben geeignet sind, die Benutzer in deinem Repository ausführen. 

Wenn einen Codespace aus einem Repository ohne Entwicklercontainerkonfigurationen erstellst, klont {% data variables.product.prodname_github_codespaces %} dein Repository in einer Umgebung mit dem standardmäßigen Codespace-Image, das viele Tools, Sprachen und Runtimeumgebungen umfasst. Wenn du einen Codespace aus einer Vorlage erstellst, beginnst du möglicherweise mit einer anfänglichen Konfiguration auf dem Standardimage. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Du kannst Aspekte deiner Codespaceumgebung personalisieren, indem du ein öffentliches [dotfiles](https://dotfiles.github.io/tutorials/)-Repository verwendest. Du kannst dotfiles verwenden, um Shellaliase und -einstellungen festzulegen oder deine persönliche Einstellung der Tools zu installieren, die du verwenden möchtest. Wenn du {% data variables.product.prodname_github_codespaces %} im Browser oder in {% data variables.product.prodname_vscode %} verwendest, kannst du [Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) verwenden, um deinem Codespace-Editor die gleichen Einstellungen, Tastenkombinationen, Codeausschnitte und Erweiterungen zu geben, die du in deiner lokalen Installation von {% data variables.product.prodname_vscode %} eingerichtet hast. 

Weitere Informationen findest du unter [Anpassen deines Codespace](/codespaces/customizing-your-codespace).

## Abrechnung für {% data variables.product.prodname_codespaces %}

Informationen zu Preisen, Speicher und Nutzung für {% data variables.product.prodname_github_codespaces %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Informationen dazu, wie Organisationsbesitzer und Abrechnungsmanager das Ausgabenlimit für {% data variables.product.prodname_github_codespaces %} für eine Organisation verwalten können, findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).
