---
title: Aktionen auf dem GitHub-Marktplatz veröffentlichen
intro: 'Du kannst Aktionen auf dem {% data variables.product.prodname_marketplace %} veröffentlichen und der {% data variables.product.prodname_dotcom %}-Community zur Verfügung stellen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884301'
---
You must accept the terms of service to publish actions in {% data variables.product.prodname_marketplace %}.

## Informationen zum Veröffentlichen von Aktionen

Bevor du eine Aktion veröffentlichen kannst, musst du eine Aktion in deinem Repository erstellen. Weitere Informationen findest du unter [Erstellen von Aktionen](/actions/creating-actions).

Wenn du vorhast, deine Aktion auf dem {% data variables.product.prodname_marketplace %} zu veröffentlichen, musst du sicherstellen, dass das Repository nur die Metadatendatei, den Code und die anderen Dateien enthält, die für die Aktion notwendig sind. Wenn du ein einzelnes Repository für die Aktion erstellst, kannst du den Code in einer einzelnen Einheit markieren, veröffentlichen und packen. {% data variables.product.prodname_dotcom %} verwendet auch die Metadaten der Aktion auf deiner {% data variables.product.prodname_marketplace %}-Seite.

Aktionen werden ohne Überprüfung durch {% data variables.product.prodname_dotcom %} sofort auf dem {% data variables.product.prodname_marketplace %} veröffentlicht, sofern sie folgende Anforderungen erfüllen:

- Die Aktion muss sich in einem öffentlichen Repository befinden.
- Jedes Repository muss eine einzelne Aktion enthalten.
- Die Metadatendatei der Aktion (`action.yml` oder `action.yaml`) muss sich im Stammverzeichnis des Repositorys befinden.
- Der `name` in der Metadatendatei der Aktion muss eindeutig sein.
  - Der `name` darf mit keinem vorhandenen Aktionsnamen übereinstimmen, der auf dem {% data variables.product.prodname_marketplace %} veröffentlicht wurde.
  - Der `name` darf nicht mit einem Benutzer oder einer Organisation auf {% data variables.product.prodname_dotcom %} übereinstimmen, es sei denn, dieser Benutzer oder Organisationsinhaber veröffentlicht die Aktion. Beispielsweise kann nur die {% data variables.product.prodname_dotcom %}-Organisation eine Aktion namens `github` veröffentlichen.
  - Der `name` darf nicht mit einer vorhandenen {% data variables.product.prodname_marketplace %}-Kategorie übereinstimmen.
  - {% data variables.product.prodname_dotcom %} behält sich die Namen von {% data variables.product.prodname_dotcom %}-Funktionen vor.

## Publishing an action (Veröffentlichen einer Aktion)

Du kannst die von Dir erstellte Aktion auf den {% data variables.product.prodname_marketplace %} stellen, indem du sie als neue Version markierst und publizierst.

Um ein neues Release zu entwerfen und die Aktion auf dem {% data variables.product.prodname_marketplace %} zu veröffentlichen, folge diesen Anweisungen:

{% data reusables.repositories.navigate-to-repo %}
1. Navigiere zu der Aktionsmetadatendatei in deinem Repository (`action.yml` oder `action.yaml`). Dir wird ein Banner zum Veröffentlichen der Aktion auf dem {% data variables.product.prodname_marketplace %} angezeigt. Klicke auf **Entwerfen eines Release**.

   ![Schaltfläche zum Veröffentlichen dieser Aktion auf dem Marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. Wähle unter „Releaseaktion“ das Kontrollkästchen zum Veröffentlichen der Aktion auf dem {% data variables.product.prodname_marketplace %} aus. Wenn du das Kontrollkästchen nicht auswählen kannst, musst du zuerst auf den Link klicken, um den {% data variables.product.prodname_marketplace %}-Entwicklervertrag zu lesen und zu akzeptieren.
![Auswählen von „Auf dem Marketplace veröffentlichen“](/assets/images/help/repository/marketplace_actions_publish.png)
1. Wenn die Bezeichnungen in deiner Metadaten-Datei irgendwelche Probleme verursachen, wird Dir eine Fehlermeldung angezeigt.
![Benachrichtigungsanzeige](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Wenn Vorschläge auf dem Bildschirm angezeigt werden, setze diese um, indemDu deine Metadaten-Datei aktualisierst. Wenn du fertig bist, wird eine Nachricht mit dem Inhalt „Alles sieht gut aus“ angezeigt. Meldung.
![Beheben von Fehlern](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Wähle eine „Hauptkategorie“ und optional eine „Weitere Kategorie“ aus, die anderen hilft, deine Aktion im {% data variables.product.prodname_marketplace %} zu finden.
![Auswählen einer Kategorie](/assets/images/help/repository/marketplace_actions_categories.png)
1. Tagge eine Aktion mit einer Version und füge einen Titel für das Release hinzu. Dies zeigt den Leuten, welche Änderungen oder Funktionen das Release umfasst. Die Leute werden die Version auf der dedizierten {% data variables.product.prodname_marketplace %}-Seite der Aktion sehen.
![Markieren einer Version](/assets/images/help/repository/marketplace_actions_version.png)
1. Fülle alle anderen Felder aus, und klicke auf **Release veröffentlichen**. Zum Veröffentlichen brauchst du die Zwei-Faktor-Authentifizierung. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication/).
![Veröffentlichen des Release](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Eine Aktion vom {% data variables.product.prodname_marketplace %} entfernen

Um eine veröffentlichte Aktion vom {% data variables.product.prodname_marketplace %} zu entfernen, musst du jedes veröffentlichte Release aktualisieren. Führe die folgenden Schritte für jedes auf dem {% data variables.product.prodname_marketplace %} veröffentlichte Release der Aktion aus.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Klicke auf der Seite „Releases“ rechts neben dem Release, das du bearbeiten möchtest, auf **Bearbeiten**.
![Schaltfläche zum Bearbeiten des Release](/assets/images/help/releases/release-edit-btn.png)
4. Wähle **Diese Aktion auf dem {% data variables.product.prodname_marketplace %} veröffentlichen** aus, um das Häkchen zu entfernen.
![Schaltfläche zum Veröffentlichen dieser Aktion](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Klicke unten auf der Seite auf **Release aktualisieren**.
![Schaltfläche zum Aktualisieren des Release](/assets/images/help/repository/actions-marketplace-update-release.png)
