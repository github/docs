---
title: Deinen Branch synchronisieren
intro: 'Während Commits an Dein Projekt per Push auf {% data variables.product.prodname_dotcom %} übertragen werden, kannst Du Deine lokale Kopie des Projekts mit dem Remote-Repository synchron halten.'
versions:
  free-pro-team: '*'
---

Du musst Deinen lokalen Branch mit dem Remote-Repository synchronisieren, um zusätzliche Commits abzurufen, die seit der ursprünglichen [Erstellung Deines Branches](/desktop/guides/contributing-to-projects/managing-branches) dem vorgelagerten Branch hinzugefügt wurden.

### Deinen lokalen Branch aktualisieren

1. Wechsle in {% data variables.product.prodname_desktop %} zum lokalen Branch, den Du aktualisieren möchtest. Klicke dazu auf {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** (Aktueller Branch) und wähle den Branch aus der Liste aus.
2. Klicke auf **Fetch origin** (Ursprung abrufen), um Deinen Branch zu aktualisieren. ![Die Schaltfläche „Fetch origin“ (Ursprung abrufen)](/assets/images/help/desktop/fetch-button.png)
3. Wenn auf dem Remote-Branch Commits vorliegen, kannst Du diese abrufen. Klicke dazu auf **Pull origin** (Ursprung abrufen) oder **Pull origin with rebase** (Ursprung abrufen und neue Basis legen). ![Die Schaltfläche „Pull origin“ (Ursprung abrufen)](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Anderen Branch per Merge in Deinen Projekt-Branch fusionieren

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Hinweis:** Bei Merge-Konflikten wirst Du oberhalb der Schaltfläche **Merge <em>BRANCH</em> into <em>BRANCH</em>** (BRANCH per Merge in BRANCH fusionieren) von {% data variables.product.prodname_desktop %} gewarnt. Du kannst die Branches erst per Merge fusionieren, nachdem Du alle Konflikte behoben hast.

   {% endnote %}

   ![Die Schaltfläche „Merge“](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Deinen Projekt-Branch per Rebase auf einem anderen Branch basieren lassen
Einige Workflows erfordern es oder profitieren davon, dass Du per Rebasing eine neue Basis legst statt im Gegensatz hierzu per Merge zu fusionieren. Durch das Rebasing kannst Du Commits neu anordnen, bearbeiten oder zusammenzwingen. Weitere Informationen findest Du unter „[Informationen zu Git Rebase](/articles/about-git-rebase)“.

1. Verwende das Dropdown-Menü **Branch**, und klicke auf **Rebase Current Branch** (Aktuellen Branch auf neue Basis legen). ![„Rebase Current Branch“ (Basis des aktuellen Branches neu setzen) im Dropdown-Menü des Branches](/assets/images/help/desktop/rebase-current-branch.png)
2. Klicke auf den Branch, den Du als neue Basis für den aktuellen Branch setzen möchtest, und klicke anschließend auf **Start rebase** (Rebase starten). ![Schaltfläche „Start rebase“ (Rebase starten)](/assets/images/help/desktop/start-rebase-button.png)
3. Wenn Du sicher bist, dass Du ein Rebasing vornehmen möchtest, klicke auf **Begin rebase** (Rebase beginnen). ![Schaltfläche „Begin rebase“ (Rebase starten)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Klicke zum Übertragen Deiner lokalen Änderungen per Push auf **Force push origin** (Ursprungs-Push erzwingen). ![Force push origin (Ursprungs-Push erzwingen)](/assets/images/help/desktop/force-push-origin.png)
