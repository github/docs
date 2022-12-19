---
title: Schnellstart für GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} kann dir bei der Programmierung mit Inlinevorschlägen helfen.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: 5aa3071cddc2bf83e7ee7082eabea00f79a66ea5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080244'
---
## Einführung

{% data variables.product.prodname_copilot %} ist ein KI-Paarprogrammierer. {% data variables.product.prodname_copilot %} schlägt dir direkt im Editor ganze Zeilen oder Funktionen vor.

In dieser Anleitung erfährst du, wie du dich für {% data variables.product.prodname_copilot %} registrierst, die Erweiterung {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} installierst und deinen ersten Vorschlag erhältst. Weitere Informationen zu {% data variables.product.prodname_copilot %} findest du unter [Informationen zu {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot). Ausführlichere Informationen zum Verwenden von {% data variables.product.prodname_copilot %} in einer Vielzahl von Umgebungen findest du unter [Erste Schritte](/copilot/getting-started-with-github-copilot).

## Voraussetzungen

{% data reusables.copilot.copilot-prerequisites %}
- Um {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} zu verwenden, muss {% data variables.product.prodname_vscode %} installiert sein. Weitere Informationen findest du in der Dokumentation zu [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Registrierung für {% data variables.product.prodname_copilot %}

{% data reusables.copilot.signup-procedure %}

## Installieren der {% data variables.product.prodname_copilot %}-Erweiterung für {% data variables.product.prodname_vscode %}

Um {% data variables.product.prodname_copilot %} zu verwenden, musst du zuerst die {% data variables.product.prodname_vscode %}-Erweiterung installieren.

1. Wechsele im {% data variables.product.prodname_vscode %}-Marketplace zur Seite [{% data variables.product.prodname_copilot %}-Erweiterung](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), und klicke auf **Installieren**.
   ![Installieren der {% data variables.product.prodname_copilot %}-Erweiterung {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Ein Popupfenster mit der Abfrage, ob {% data variables.product.prodname_vscode %} geöffnet werden soll, wird angezeigt. Klicke auf **{% data variables.product.prodname_vscode %} öffnen**.
1. Klicke auf der Registerkarte „Erweiterung: {% data variables.product.prodname_copilot %}“ in {% data variables.product.prodname_vscode %} auf **Installieren**.
   ![Schaltfläche „Installieren“ in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Wenn du {% data variables.product.prodname_vscode %} noch nicht in deinem {% data variables.product.prodname_dotcom %}-Konto autorisiert hast, wirst du aufgefordert, dich bei {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %} anzumelden.
   - Wenn du zuvor {% data variables.product.prodname_vscode %} in deinem {% data variables.product.prodname_dotcom %}-Konto autorisiert hast, wird {% data variables.product.prodname_copilot %} automatisch autorisiert.
   ![Screenshot des {% data variables.product.prodname_vscode %}-Autorisierungsbildschirms](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In deinem Browser wird {% data variables.product.prodname_dotcom %} die notwendigen Berechtigungen für {% data variables.product.prodname_copilot %} anfordern. Um diese Berechtigungen zu genehmigen, klicke auf **{% data variables.product.prodname_vscode %} autorisieren**. 
1. Klicke in {% data variables.product.prodname_vscode %} im Dialogfeld „{% data variables.product.prodname_vscode %}“ auf **Öffnen**, um die Authentifizierung zu bestätigen. 

## Anzeigen deines ersten Vorschlags

{% data reusables.copilot.supported-languages %} Die folgenden Beispiele sind in JavaScript geschrieben, andere Sprachen funktionieren jedoch ähnlich.

1. Öffne {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} schlägt automatisch einen ganzen Funktionstext in ausgegrautem Text vor, wie unten gezeigt. Der genaue Vorschlag kann variieren.
![Erster Vorschlag für {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Nächste Schritte

Du hast {% data variables.product.prodname_copilot %} erfolgreich installiert und deinen ersten Vorschlag erhalten, aber das ist nur der Anfang! Hier findest du einige hilfreiche Ressourcen für deine nächsten Schritte mit {% data variables.product.prodname_copilot %}.

- [Erste Schritte](/copilot/getting-started-with-github-copilot): Du hast gelernt, wie du deinen ersten Vorschlag in {% data variables.product.prodname_vscode %} erhältst. Diese Anleitungen zeigen dir, wie du die verschiedenen Funktionen von {% data variables.product.prodname_copilot %} in allen unterstützten Umgebungen einrichten und darin navigieren kannst.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): Sieh dir praktische Beispiele der Unterstützung durch {% data variables.product.prodname_copilot %} an.
- [Konfigurieren von {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): Diese Anleitungen bieten Details zum Konfigurieren deiner persönlichen Einstellungen für {% data variables.product.prodname_copilot %}.


## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
