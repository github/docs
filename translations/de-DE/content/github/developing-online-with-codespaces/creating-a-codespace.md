---
title: Erstellen eines Codespace
intro: Du kannst einen Codespace in einem Repository-Branch erstellen, um Online zu entwickeln.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Jeder kann einen Codespace für jedes öffentliche Repository erstellen, oder für jedes Repository, das seinem Benutzerkonto gehört.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Über die Codespace Erstellung

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} Weitere Informationen findest du unter „[Einen Codespace löschen](/github/developing-online-with-codespaces/deleting-a-codespace)."

{% data reusables.codespaces.unsupported-repos %}

Du kannst einen Codespace nicht in einem leeren Repository erstellen. Wenn Dein Repository leer ist, erstelle eine Datei im Repository, bevor Du einen Codespace erstellst. Weitere Informationen findest Du unter „[Eine Datei in ein Repository hinzufügen](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)" und „[Eine Datei über die Befehlszeile einem Repository hinzufügen](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)."

Die Umgebung des von Dir erstellten Codespace wird auf der Konfiguration des Repository basieren. Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Projekt konfigurieren](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

{% data reusables.codespaces.about-personalization %} Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Konto personalisieren](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Erstellen eines Codespace

{% data reusables.repositories.navigate-to-repo %}
2. Benutze das „Branch"-Dropdownmenü unterhalb des Repository-Namens und wähle den Branch, für den Du einen Codespace erstellen willst. ![Dropdownmenü „Branch"](/assets/images/help/codespaces/branch-drop-down.png)
3. Benutze das {% octicon "download" aria-label="The download icon" %} **Code**-Dropdownmenü unterhalb des Repository-Namens und wähle **Open with Codespaces** (Eröffnen mit Codespaces). ![Schaltfläche „Open with Codespaces" (Eröffnen mit Codespaces)](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. Wenn Du für den Branch schon einen Codespace hast, klicke auf {% octicon "plus" aria-label="The plus icon" %} **New codespace** (neuer Codespace). ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)
