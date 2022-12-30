---
title: Konfigurieren des automatischen Löschens deiner Codespaces
shortTitle: Configure automatic deletion
intro: 'Inaktive Codespaces werden automatisch gelöscht. Du kannst bis zu einem Maximum von 30 Tagen auswählen, wie lange deine beendeten Codespaces aufbewahrt werden.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159697'
---
Standardmäßig werden {% data variables.product.prodname_github_codespaces %} automatisch gelöscht, nachdem sie beendet wurden und 30 Tage lang inaktiv geblieben sind.

Da {% data variables.product.prodname_github_codespaces %} jedoch Speichergebühren verursachen, solltest du den Aufbewahrungszeitraum verringern, indem du deinen Standardzeitraum in deinen persönlichen Einstellungen für {% data variables.product.prodname_github_codespaces %} änderst. Weitere Informationen zu den Speichergebühren findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

{% note %}

**Hinweis**: Unabhängig davon, ob du einen persönlichen Codespace-Aufbewahrungszeitraum festgelegt hast oder nicht, solltest du dir angewöhnen, nicht mehr benötigte Codespaces zu löschen. Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

{% endnote %}

Automatisches Löschen erfolgt unabhängig davon, ob ein Codespace nicht gepushte Änderungen enthält. Um das automatische Löschen eines Codespaces zu verhindern, öffne den Codespace einfach erneut. Der Aufbewahrungszeitraum wird jedes Mal zurückgesetzt, wenn du eine Verbindung mit einem Codespace herstellst, und der Aufbewahrungscountdown wird neu gestartet, wenn der Codespace beendet wird.

Wenn ein Repository zu einer Organisation gehört, hat der Organisationsadministrator möglicherweise einen Aufbewahrungszeitraum für die gesamte Organisation festgelegt. Wenn dieser Zeitraum kürzer als der Standardaufbewahrungszeitraum in deinen persönlichen Einstellungen ist, gilt der Aufbewahrungszeitraum der Organisation für Codespaces, die du für dieses Repository erstellst. Weitere Informationen findest du unter [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

Jeder Codespace verfügt über einen eigenen Aufbewahrungszeitraum. Du kannst daher über Codespaces mit unterschiedlichen Aufbewahrungszeiträumen verfügen. Beispiele:
* Du hast einen Codespace erstellt, den Standardaufbewahrungszeitraum geändert und dann einen anderen Codespace erstellt.
* Du hast einen Codespace mit {% data variables.product.prodname_cli %} erstellt und einen anderen Aufbewahrungszeitraum angegeben.
* Du hast einen Codespace von einem organisationseigenen Repository aus erstellt, für das ein Aufbewahrungszeitraum für die Organisation konfiguriert ist.

{% note %}

**Hinweis**: Der Aufbewahrungszeitraum wird in Tagen angegeben. Ein Tag ist ein Zeitraum von 24 Stunden, der zu dem Zeitpunkt beginnt, wenn du einen Codespace beendest.

{% endnote %}

{% webui %}

## Festlegen eines Standardaufbewahrungszeitraums für deine Codespaces

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Gib unter „Standardaufbewahrungszeitraum“ die Anzahl der Tage ein, für die deine Codespaces standardmäßig aufbewahrt werden sollen, nachdem sie beendet wurden. 

   ![Auswählen des Aufbewahrungszeitraums](/assets/images/help/codespaces/setting-default-retention.png)

   Du kannst deinen Standardaufbewahrungszeitraum zwischen `0` und `30` Tagen festlegen. 

   {% warning %}

   **Warnung**: Wenn du den Zeitraum auf `0` festlegst, werden deine Codespaces sofort gelöscht, wenn du sie beendest oder ein Inaktivitätstimeout in Kraft tritt. Weitere Informationen findest du unter [Festlegen deines Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces).

   {% endwarning %}
 
1. Klicke auf **Speichern**.

Wenn du einen Codespace mit {% data variables.product.prodname_cli %} erstellst, kannst du diesen Standardwert außer Kraft setzen. Wenn du einen Codespace in einer Organisation erstellst, die einen kürzeren Aufbewahrungszeitraum angibt, überschreibt der Wert auf Organisationsebene dein persönliche Einstellung.

Wenn du einen Aufbewahrungszeitraum von mehreren Tagen festlegst, erhältst du einen Tag vor dem Löschen eine E-Mail-Benachrichtigung. 

## Überprüfen der verbleibenden Zeit bis zur automatischen Löschung

Du kannst überprüfen, ob ein Codespace bald automatisch gelöscht werden soll. 

Wenn das Ende des Aufbewahrungszeitraums eines inaktiven Codespaces nähert rückt, wird dies in deiner Codespaces-Liste auf {% data variables.product.prodname_dotcom %} unter [https://github.com/codespaces](https://github.com/codespaces) angezeigt.

![Die Nachricht über vorläufiges Löschen wird in der Codespaces-Liste auf {% data variables.product.prodname_dotcom %} angezeigt.](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Festlegen eines Aufbewahrungszeitraums für einen Codespace

Um beim Erstellen eines Codespaces den Aufbewahrungszeitraum festzulegen, verwende das `--retention-period`-Flag mit dem `codespace create`-Unterbefehl. Gib den Zeitraum in Tagen an. Der Zeitraum muss zwischen 0 und 30 Tagen betragen.

```shell
gh codespace create --retention-period DAYS
```

Wenn du beim Erstellen eines Codespaces keinen Aufbewahrungszeitraum angibst, wird entweder dein Standardaufbewahrungszeitraum oder ein Aufbewahrungszeitraum der Organisation festgelegt, je nachdem, welcher kürzer ist. Informationen zum Festlegen deines Standardaufbewahrungszeitraums findest du auf dieser Seite auf der Registerkarte „Webbrowser“. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Festlegen des Aufbewahrungszeitraums

Du kannst auf {% data variables.product.prodname_dotcom_the_website %} deinen Standardaufbewahrungszeitraum in deinem Webbrowser festlegen. Wenn du alternativ {% data variables.product.prodname_cli %} verwendest, um einen Codespace zu erstellen, kannst du einen Aufbewahrungszeitraum für diesen bestimmten Codespace festlegen. Weitere Informationen erhältst du, wenn du oben auf die entsprechende Registerkarte klickst.

## Überprüfen, ob Codespaces bald automatisch gelöscht werden

Du kannst in der {% data variables.product.prodname_vscode %}-Desktopanwendung überprüfen, ob ein Codespace bald automatisch gelöscht werden soll.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Wähle **{% data variables.product.prodname_github_codespaces %}** im Dropdownmenü oben rechts im Remote-Explorer aus, falls es noch nicht ausgewählt ist.
1. Positioniere unter „GITHUB CODESPACES“ den Mauszeiger über dem gewünschten Codespace. Ein Popupfeld mit Informationen über den Codespace wird angezeigt.

   Gegen Ende des Aufbewahrungszeitraums des Codespaces wird eine Zeile einbezogen, die dir mitteilt, wann der Codespace gelöscht wird.

   ![Codespaceinformationen über die bis zum Löschen verbleibende Zeit](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
