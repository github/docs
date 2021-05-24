---
title: Aktionen auf dem GitHub-Marktplatz veröffentlichen
intro: 'Du kannst Aktionen auf dem {% data variables.product.prodname_marketplace %} veröffentlichen und der {% data variables.product.prodname_dotcom %}-Gemeinschaft zur Verfügung stellen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  free-pro-team: '*'
type: how_to
---

{% data reusables.actions.ae-beta %}

You must accept the terms of service to publish actions in {% data variables.product.prodname_marketplace %}.

### Informationen zum Veröffentlichen von Aktionen

Bevor Du eine Aktion veröffentlichen kannst, musst Du eine Aktion in Deinem Repository erstellen. For more information, see "[Creating actions](/actions/creating-actions)."

Wenn Du vorhast, Deine Aktion auf dem {% data variables.product.prodname_marketplace %} zu veröffentlichen, musst Du sicherstellen, dass das Repository nur jene Metadaten-, Code- und andere Dateien enthält, welche für die Aktion notwendig sind. Wenn Du ein separates Repository für die Aktion erstellst, kannst Du den Code in einer einzigen Einheit taggen, releasen und paketieren. {% data variables.product.prodname_dotcom %} verwendet auch die Metadaten der Aktion auf Deiner {% data variables.product.prodname_marketplace %}-Seite.

Aktionen werden ohne Überprüfung durch {% data variables.product.prodname_dotcom %} sofort auf dem {% data variables.product.prodname_marketplace %} veröffentlicht, sofern sie folgende Anforderungen erfüllen:

- Die Aktion muss in einem öffentlichen Repository liegen.
- Jedes Repository muss eine einzelne Aktion enthalten.
- Die Metadaten-Datei (`action.yml` oder `action.yaml`) der Aktion muss im Stammverzeichnis (‚root‘) des Repositorys liegen.
- Der `name` in der Metadaten-Datei der Aktion muss eindeutig sein.
  - Der `name` darf nicht mit irgend einem existierenden Aktionsnamen übereinstimmen, der auf dem {% data variables.product.prodname_marketplace %} veröffentlicht wurde.
  - Der `name` darf nicht mit einem Benutzer oder einer Organisation auf {% data variables.product.prodname_dotcom %}übereinstimmen, es sei denn, eben dieser Benutzer oder Organisationsinhaber veröffentlicht die Aktion. Beispielsweise kann nur die Organisation {% data variables.product.prodname_dotcom %} eine Aktion namens `github` veröffentlichen.
  - Der `name` darf nicht mit einer existierenden Kategorie des {% data variables.product.prodname_marketplace %} übereinstimmen.
  - {% data variables.product.prodname_dotcom %} behält sich die Namen von {% data variables.product.prodname_dotcom %}-Funktionen vor.

### Eine Aktion veröffentlichen

Du kannst die von Dir erstellte Aktion auf den {% data variables.product.prodname_marketplace %} stellen, indem Du sie als neue Version markierst und publizierst.

Um ein neues Release zu entwerfen und die Aktion auf dem {% data variables.product.prodname_marketplace %} zu veröffentlichen, folge diesen Anweisungen:

{% data reusables.repositories.navigate-to-repo %}
1. Wenn ein Repository für eine Aktion eine Metadaten-Datei (`action.yml` oder `Aktion. aml`) enthält, siehst Du ein Banner, um die Aktion auf dem {% data variables.product.prodname_marketplace %} zu veröffentlichen. Klicke auf **Draft a release** (Ein neues Release entwerfen). ![Schaltfläche um diese Aktion auf dem Marktplatz zu veröffentlichen](/assets/images/help/repository/publish-github-action-to-markeplace-button.png)
1. Wähle **Publish this action to the {% data variables.product.prodname_marketplace %}** (Diese Aktion auf dem {% data variables.product.prodname_marketplace %} veröffentlichen). Wenn Du das Ankreuzfeld **Publish this action to the {% data variables.product.prodname_marketplace %}** nicht auswählen kannst, musst Du zuerst die {% data variables.product.prodname_marketplace %}-Vereinbarung lesen und akzeptieren. ![Veröffentlichung auf dem Marktplatz auswählen](/assets/images/help/repository/marketplace_actions_publish.png)
1. Wenn die Bezeichnungen in Deiner Metadaten-Datei irgendwelche Probleme verursachen, wird Dir eine Fehlermeldung angezeigt. ![Siehe Benachrichtigung](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Wenn Vorschläge auf dem Bildschirm angezeigt werden, setze diese um, indemDu Deine Metadaten-Datei aktualisierst. Sobald Du fertig bist, siehst Du eine Nachricht „Everything looks good!“ (Alles sieht gut aus). ![Fehler beheben](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Wähle eine „Primary Category“ (Haupt-Kategorie) und optional „Another Category“ (Eine weitere Kategorie), die den Leuten hilft, Deine Aktion auf dem {% data variables.product.prodname_marketplace %} zu finden. ![Kategorie wählen](/assets/images/help/repository/marketplace_actions_categories.png)
1. Tagge eine Aktion mit einer Version und fügen Sie einen Titel für das Release hinzu. Dies zeigt den Leuten, welche Änderungen oder Funktionen das Release umfasst. Die Leute werden die Version auf der dedizierten {% data variables.product.prodname_marketplace %}-Seite der Aktion sehen. ![Version taggen](/assets/images/help/repository/marketplace_actions_version.png)
1. Fülle alle anderen Felder aus und klicke auf **Publish release** (Release veröffentlichen). Zum Veröffentlichen brauchst Du die Zwei-Faktor-Authentifizierung. Weitere Informationen findest Du unter „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication/)“. ![Release veröffentlichen](/assets/images/help/repository/marketplace_actions_publishrelease.png)

### Eine Aktion vom {% data variables.product.prodname_marketplace %} entfernen

Um eine veröffentlichte Aktion vom {% data variables.product.prodname_marketplace %} zu entfernen, musst Du jedes veröffentlichte Release aktualisieren. Führe die folgenden Schritte für jedes auf dem {% data variables.product.prodname_marketplace %} veröffentlichte Release der Aktion aus.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Klicke auf der Seite „Releases“ (Veröffentlichungen) rechts neben dem zu bearbeitenden Release auf **Edit** (Bearbeiten). ![Schaltfläche um das Release zu bearbeiten](/assets/images/help/releases/release-edit-btn.png)
4. Klicke auf **Publish this action to the {% data variables.product.prodname_marketplace %}** (...veröffentlichen) um die Markierung aus dem Kontrollkästchen zu entfernen. ![Schaltfläche um diese Aktion zu verröffentlichen](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Klicke auf **Update release** (Release aktualisieren) am Ende der Seite. ![Schaltfläche um das Release zu aktualisieren](/assets/images/help/repository/actions-marketplace-update-release.png)
