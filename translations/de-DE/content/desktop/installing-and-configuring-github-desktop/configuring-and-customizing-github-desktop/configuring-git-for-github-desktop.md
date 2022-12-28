---
title: Git für GitHub Desktop konfigurieren
shortTitle: Configuring Git
intro: 'Du kannst Git-Konfigurationseinstellungen für deine lokalen Repositorys mit {% data variables.product.prodname_desktop %} verwalten.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058516'
---
## Informationen zur Git-Konfiguration für {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} verwendet deine lokalen Git-Konfigurationseinstellungen und bietet die Möglichkeit, einige dieser Einstellungen zu konfigurieren, z. B. die globalen Informationen zum Autor und den Standardbranch, der beim Erstellen eines neuen Repositorys verwendet wird.

Mit {% data variables.product.prodname_desktop %} kannst du den Namen und die E-Mail-Adresse festlegen, die du mit den Commits verknüpfen möchtest, die du in deinen Repositorys durchführst. Wenn dein Name und deine E-Mail-Adresse bereits in der globalen Git-Konfiguration für deinen Computer festgelegt sind, erkennt {% data variables.product.prodname_desktop %} diese Werte und verwendet sie. Mit {% data variables.product.prodname_desktop %} kannst du auch einen anderen Namen und eine andere E-Mail-Adresse für ein einzelnes Repository festlegen. Dies ist nützlich, wenn du eine separate geschäftliche E-Mail-Adresse für ein bestimmtes Repository verwenden musst.

Wenn die in deiner Git-Konfiguration festgelegte E-Mail-Adresse nicht mit einer E-Mail-Adresse übereinstimmt, die mit dem {% data variables.product.product_name %}-Konto verknüpft ist, bei dem du derzeit angemeldet bist, zeigt {% data variables.product.prodname_desktop %} vor dem Committen eine Warnung an.

Mit {% data variables.product.prodname_desktop %} kannst du auch den Namen des Standardbranchs ändern, den du beim Erstellen neuer Repositorys verwenden möchtest. Standardmäßig verwendet {% data variables.product.prodname_desktop %} in allen neuen Repositorys, die du erstellst, `main` als Namen des Standardbranchs.

{% tip %}

**Tipp**: Wenn du öffentliche Commits übermittelst, können alle Personen die E-Mail-Adresse in deiner Git-Konfiguration sehen. Weitere Informationen findest du unter [Festlegen der Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address/).

{% endtip %}

## Konfigurieren deiner globalen Autoreninformationen

Wenn du deine globalen Autoreninformationen in {% data variables.product.prodname_desktop %} konfigurierst, werden der Name und die E-Mail-Adresse in deiner globalen Git-Konfiguration aktualisiert. Dies sind der Standardname und die E-Mail-Adresse für alle neuen lokalen Repositorys, die du in {% data variables.product.prodname_desktop %} erstellst.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. Klicke im Fenster „Einstellungen“ auf **Git**.
  ![Der Git-Bereich im Menü „Einstellungen“](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Das Namensfeld der Git-Konfiguration](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Auswählen der E-Mail-Adresse im Git-Konfigurationsfeld](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Schaltfläche „Speichern“ im Git-Konfigurationsfeld](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. Klicke im Fenster „Optionen“ auf **Git**.
![Der Git-Bereich im Menü „Optionen“](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Das Namensfeld der Git-Konfiguration](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Auswählen der E-Mail-Adresse im Git-Konfigurationsfeld](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Schaltfläche „Speichern“ im Git-Konfigurationsfeld](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Konfigurieren unterschiedlicher Autoreninformationen für ein einzelnes Repository

Du kannst den Namen und die E-Mail-Adresse ändern, die zum Erstellen von Commits in einem bestimmten Repository verwendet werden. Diese lokale Git-Konfiguration überschreibt deine globalen Git-Konfigurationseinstellungen nur für dieses Repository.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Konfigurieren des Standardbranchs für neue Repositorys

Du kannst den Standardbranch konfigurieren, der beim Erstellen eines neuen Repositorys in {% data variables.product.prodname_desktop %} verwendet wird. Weitere Informationen zum Standardbranch findest Du unter [Informationen zum Standardbranch](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. Klicke im Fenster „Einstellungen“ auf **Git**.
  ![Der Bereich „Git“ im Menü „Voreinstellungen“](/assets/images/help/desktop/mac-select-git-pane.png)
1. Wähle unter „Standardbranchname für neue Repositorys“ den Standardbranchnamen aus, den du verwenden möchtest, oder wähle zur Eingabe eines benutzerdefinierten Namens „Sonstige...“ aus.
  ![Optionen zur Auswahl des Standardbranchnamens](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Schaltfläche „Speichern“ im Git-Konfigurationsfeld](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. Klicke im Fenster „Optionen“ auf **Git**.
  ![Der Bereich „Git“ im Menü „Optionen“](/assets/images/help/desktop/windows-select-git-pane.png)
1. Wähle unter „Standardbranchname für neue Repositorys“ den Standardbranchnamen aus, den du verwenden möchtest, oder wähle zur Eingabe eines benutzerdefinierten Namens „Sonstige...“ aus.
  ![Optionen zur Auswahl des Standardbranchnamens](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Schaltfläche „Speichern“ im Git-Konfigurationsfeld](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Weiterführende Themen

- [Hinzufügen einer E-Mail-Adresse zu deinem GitHub-Konto](/articles/adding-an-email-address-to-your-github-account/)
- [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address/)
- [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches)
