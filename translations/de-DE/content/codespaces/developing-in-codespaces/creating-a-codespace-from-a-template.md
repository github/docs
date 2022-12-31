---
title: Erstellen eines Codespaces aus einer Vorlage
intro: 'Wenn du mit einem neuen Projekt beginnst, kannst du einen Codespace aus einer leeren Vorlage erstellen oder eine Vorlage auswählen, die speziell für die geplante Tätigkeit entwickelt wurde.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188312'
---
## Informationen zu Vorlagen für {% data variables.product.prodname_github_codespaces %}

Wenn du mit einem neuen Projekt beginnst, kannst du schnell mit der Entwicklung beginnen, indem du einen Codespace aus einer Vorlage erstellst. Du kannst in einer cloudbasierten Entwicklungsumgebung an deinem Projekt arbeiten, deine Dateien in der Cloud speichern und deine Arbeit in einem neuen Remoterepository veröffentlichen, das du für andere freigeben oder auf deinen lokalen Computer klonen kannst.

{% note %}

**Hinweis**: Codespaces, die aus einer Vorlage und nicht aus einem Repository erstellt wurden, werden immer deinem persönlichen Konto in Rechnung gestellt. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% endnote %}

Du kannst mit einer leeren Vorlage beginnen, aus Vorlagen wählen, die von {% data variables.product.company_short %} für gängige Technologien wie React oder Jupyter Notebook bereitgestellt werden, oder einen Codespace aus einem beliebigen Vorlagenrepository auf {% data variables.product.prodname_dotcom %} starten. Wenn du eine leere Vorlage verwendest, beginnst du mit einem leeren Verzeichnis, Zugriff auf cloudbasierte Computeressourcen und den Tools, Sprachen und Laufzeitumgebungen, die mit dem Standardcodespaceimage vorinstalliert wurden. Wenn du andere Vorlagen verwendest, erhältst du Startdateien für die Technologie, mit der du arbeitest, sowie in der Regel einige zusätzliche Dateien wie eine README-Datei, eine `.gitignore`-Datei und Konfigurationsdateien für Entwicklungscontainer, die eine benutzerdefinierte Umgebungskonfiguration enthalten. Weitere Informationen zu Entwicklungscontainern und dem Standardimage findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Wenn du beispielsweise einen Codespace aus der React-Vorlage von {% data variables.product.company_short %} erstellst, gelangst du in einen Arbeitsbereich, der Vorlagendateien (wie `index.js`, `app.js` und `package.json`) für eine einfache Anwendung enthält. Kurz nachdem der Codespace geöffnet wurde, wird automatisch ein Entwicklungsserver gestartet, und du kannst die ausgeführte Anwendung auf einer einfachen Browserregisterkarte im {% data variables.product.prodname_vscode_shortname %}-Webclient anzeigen.

![Screenshot der React-Vorlage, die in einem Codespace ausgeführt wird](/assets/images/help/codespaces/react-template.png)

Die in Vorlagen enthaltenen Dateien und Konfigurationen werden in Vorlagenrepositorys definiert. Das Vorlagenrepository wird beim Erstellen des Codespaces in deinen Codespace geklont. Danach wird die Verbindung unterbrochen, und dein Codespace wird erst dann mit einem Remoterepository verknüpft, wenn du es in einem veröffentlichst. 

{% tip %}

**Tipp:** Um Personen bei den ersten Schritten mit deinem Framework, deiner Bibliothek oder einem anderen Projekt zu helfen, kannst du ein Vorlagenrepository zur Verwendung mit {% data variables.product.prodname_github_codespaces %} einrichten. Weitere Informationen findest du unter [Einrichten eines Vorlagenrepositorys für {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces).

{% endtip %}

## Erstellen eines Codespaces aus einer {% data variables.product.company_short %}-Vorlage

Vorlagen, die von {% data variables.product.company_short %} verwaltet werden (einschließlich der leeren Vorlage), sind auf der Seite „Deine Codespaces“ verfügbar.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Klicke optional auf den Namen der Vorlage, um das Vorlagenrepository anzuzeigen, das die Dateien für eine Vorlage enthält.

   ![Screenshot: Abschnitt „Schnellstartvorlagen durchsuchen“, in dem „React“ hervorgehoben ist](/assets/images/help/codespaces/react-template-name.png)

1. Klicke unter der Vorlage, die du starten möchtest, auf **Diese Vorlage verwenden**.
   
   ![Screenshot: Schnellstartvorlagen mit der hervorgehobenen Schaltfläche „Diese Vorlage verwenden“ unter der React-Vorlage](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Erstellen eines Codespaces aus einem Vorlagenrepository

Du kannst einen Codespace aus einem beliebigen Vorlagenrepository erstellen und dann deine Arbeit in einem neuen Repository veröffentlichen, wenn du bereit bist. Weitere Informationen zu Vorlagenrepositorys findest du unter [Erstellen eines Repositorys aus einer Vorlage](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Hinweis:** Wenn du ein*e Maintainer des Vorlagenrepositorys bist und Änderungen an das Vorlagenrepository selbst committen möchtest, solltest du einen Codespace aus dem Dropdownmenü **{% octicon "code" aria-label="The code icon" %}-Code** erstellen. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Veröffentlichen in einem Repository auf {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Veröffentlichen aus {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

Wenn ein Codespace veröffentlicht wird, hast du Zugriff auf eine größere Auswahl an Optionen, mit denen du deine {% data variables.product.prodname_github_codespaces %}-Benutzeroberfläche anpassen kannst. Du hast beispielsweise folgende Möglichkeiten:

- Ändere den Computertyp deines Codespaces, um sicherzustellen, dass du Ressourcen verwendest, die für die von dir ausgeführte Arbeit geeignet sind (siehe [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)).
- Erlaube {% data variables.product.prodname_dotcom %}, GPG automatisch zu verwenden, um Commits zu signieren, die du in deinem Codespace vornimmst (weitere Informationen findest du unter [Verwalten der GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)).
- Teile verschlüsselte Geheimnisse mit deinem Codespace (weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)).

### Veröffentlichen aus {% data variables.product.prodname_dotcom_the_website %} 

Du kannst einen unveröffentlichten Codespace über die Seite „Deine Codespaces“ auf {% data variables.product.prodname_dotcom_the_website %} veröffentlichen. Dies ist nützlich, wenn du einen Codespace veröffentlichen möchtest, den du derzeit nicht in deinem Browser geöffnet hast. Wenn du dies tust, bleibt deine Arbeit in einem Repository erhalten, es gibt jedoch keine Verknüpfung zwischen deinem vorhandenen Codespace und dem neuen Repository. Du kannst jedoch zum neuen Repository navigieren und dort einen Codespace erstellen, und dieser Codespace wird mit dem Repository verbunden.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Klicke neben dem nicht veröffentlichten Codespace auf die Auslassungspunkte ( **...** ), und wähle dann **In einem neuen Repository veröffentlichen** aus.

   ![Screenshot: Die Schaltfläche „In einem neuen Repository veröffentlichen“](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Wähle einen Namen für dein neues Repository aus, lege es auf **Öffentlich** oder **Privat** fest, und klicke auf **Repository erstellen**.

   ![Screenshot: Das Dropdownmenü „In einem neuen Repository veröffentlichen“](/assets/images/help/codespaces/template-new-repository-settings.png)
1. Klicke optional auf **Repository anzeigen**, um das neue Repository anzuzeigen.

## Weitere nützliche Informationen

- [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
- [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle)
- [Verwenden der Quellcodeverwaltung in deinem Codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)
