---
title: Ein „Issue“ (Problem) oder einen Pull-Request erstellen
intro: 'Du kannst ein „Issue“ (Problem) oder einen Pull-Request erstellen, um Änderungen an einem Projektarchiv vorzuschlagen und gemeinsam daran zu arbeiten.'
redirect_from:
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### Ein neues „Issue“ (Problem) eröffnen
Wenn du einen Fehler findest oder eine Verbesserung vorschlagen möchtest, während du lokal mit {% data variables.product.prodname_desktop %} arbeitest, kannst Du ein neues „Issue“ (Problem) in dem Repository eröffnen, in dem Du sich befindest, sofern „Issues“ (Probleme) zugelassen sind. Weitere Informationen über die Arbeit mit „Issues“ (Problemen) findest Du unter „[Informationen zu „Issues“ (Problemen)](/github/managing-your-work-on-github/about-issues)“.

{% mac %}

1. Wähle in der oberen linken Ecke des Bildschirms das Menü **Repository** aus. ![GitHub-Desktop-Menü in der Mac-Menüleiste](/assets/images/help/desktop/select-repository-menu-mac.png)
2. Klicke auf **„Connect to“ (Verbinden mit) {% data variables.product.prodname_dotcom %}** . ![Repository-Wert im Menü „Branch“](/assets/images/help/desktop/create-issue-mac.png)
3. Auf {% data variables.product.prodname_dotcom %} klickst Du **Get started** (Beginnen), um eine Issue-vorlage zu öffnen oder auf **Open a blank issue** (Leeres Issue öffnen). ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. Wähle in der oberen linken Ecke des Fensters das Menü **Repository** aus. ![Das GitHub-Desktop-Menü auf der Mac-Menüleiste](/assets/images/help/desktop/select-repository-menu-windows.png)
2. Klicke auf **„Create issue on“ (Ticket erstellen auf) {% data variables.product.prodname_dotcom %}**. ![Der Repository-Wert im Menü „Branch“](/assets/images/help/desktop/create-issue-windows.png)
3. Auf {% data variables.product.prodname_dotcom %} klickst Du **Get started** (Beginnen), um eine Issue-vorlage zu öffnen oder auf **Open a blank issue** (Leeres Issue öffnen). ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Hinweis**: Wenn in Deinem aktuellen Repository Issue-Vorlagen nicht aktiviert sind, leitet Dich {% data variables.product.prodname_desktop %} zu einem leeren Issue auf {% data variables.product.prodname_dotcom %} weiter.

{% endnote %}

### Einen neuen Pull-Request erstellen
Nachdem Sie [einen Branch erstellt haben](/desktop/guides/contributing-to-projects/managing-branches) und [einige Änderungen committen](/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project), können Sie einen Pull Request öffnen, um Feedback zu Ihren vorgeschlagenen Änderungen zu erhalten.

{% mac %}

1. Wähle in der oberen linken Ecke des Bildschirms das Menü **Branch** aus. ![Das GitHub-Desktop-Menü auf der Mac-Menüleiste](/assets/images/help/desktop/mac-select-branch-menu.png)
2. Klicke auf **Create Pull Request** (Pull-Request erstellen). ![Der Wert „Create pull request“ (Pull-Request erstellen) im Menü „Branch“](/assets/images/help/desktop/create-pull-request-mac.png)
3. Überprüfe auf {% data variables.product.prodname_dotcom %} den standardmäßigen _base_- (Basis-) Branch und den _compare_- (Vergleichs-) Branch in den Dropdown-Menüs und korrigiere falls nötig. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Wähle in der oberen linken Ecke Ihres Bildschirms das Menü **Branch** aus. ![Das GitHub-Desktop-Menü auf der Windows-Menüleiste](/assets/images/help/desktop/windows-select-branch-menu.png)
2. Klicke auf **Create pull request** (Pull-Request erstellen). ![Der Wert „Create pull request“ (Pull-Request erstellen) im Menü „Branch“](/assets/images/help/desktop/create-pull-request-win.png)
3. Überprüfe auf {% data variables.product.prodname_dotcom %} den standardmäßigen _base_- (Basis-) Branch und den _compare_- (Vergleichs-) Branch in den Dropdown-Menüs und korrigiere falls nötig. ![Dropdown-Menüs zur Auswahl von Basis- und Vergleichs-Branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}
