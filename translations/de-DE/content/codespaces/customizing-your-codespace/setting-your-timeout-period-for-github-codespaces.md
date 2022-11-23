---
title: Festlegen des Timeoutzeitraums für GitHub Codespaces
shortTitle: Set the timeout
intro: 'Du kannst dein Standardtimeout für {% data variables.product.prodname_github_codespaces %} auf der Seite mit deinen persönlichen Einstellungen festlegen.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159605'
---
## Informationen zum Leerlauftimeout

Ein Codespace wird nach einem Inaktivitätszeitraum beendet. Standardmäßig beträgt dieser Zeitraum 30 Minuten. Du kannst jedoch einen längeren oder kürzeren Standardtimeoutzeitraum in deinen persönlichen Einstellungen für {% data variables.product.prodname_dotcom %} angeben. Die aktualisierte Einstellung gilt für alle neuen Codespaces, die du erstellst, oder für vorhandene Codespaces, wenn du sie das nächste Mal startest. Du kannst auch ein Timeout angeben, wenn du {% data variables.product.prodname_cli %} verwendest, um einen Codespace zu erstellen.

{% warning %}

**Warnung**: Die Computenutzung von Codespaces wird für die Dauer abgerechnet, für die ein Codespace aktiv ist. Wenn du keinen Codespace verwendest, er aber weiterhin ausgeführt wird und noch kein Timeout aufgetreten ist, wird dir die Gesamtzeit in Rechnung gestellt, in der der Codespace aktiv war, unabhängig davon, ob du ihn verwendet hast. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

{% endwarning %}

### Timeoutzeiträume für organisationseigene Repositorys

Organisationen können eine maximale Leerlauftimeoutrichtlinie für Codespaces festlegen, die aus einigen oder allen eigenen Repositorys erstellt wurden. Wenn eine Organisationsrichtlinie ein maximales Timeout festlegt, das unter dem von dir festgelegten Standardtimeout liegt, wird anstelle deiner Einstellung das Timeout der Organisation verwendet. Du wirst darüber benachrichtigt, nachdem der Codespace erstellt wurde. Weitere Informationen findest du unter [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

{% webui %}

## Festlegen des standardmäßigen Timeoutzeitraums

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Gib unter „Standard-Leerlauftimeout“ die gewünschte Zeit ein, und klicke dann auf **Speichern**. Die Zeit muss zwischen 5 Minuten und 240 Minuten (4 Stunden) liegen.
   ![Auswählen deines Timeouts](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Festlegen des Timeoutzeitraums für einen Codespace

{% data reusables.cli.cli-learn-more %}

Um den Timeoutzeitraum festzulegen, wenn du einen Codespace erstellst, verwende das `idle-timeout`-Argument mit dem `codespace create`-Unterbefehl. Gib die Zeit in Minuten an, gefolgt von `m`. Die Zeit muss zwischen 5 Minuten und 240 Minuten (4 Stunden) liegen.

```shell
gh codespace create --idle-timeout 90m
```

Wenn du keinen Timeoutzeitraum angibst, wenn du einen Codespace erstellst, wird der Standard-Timeoutzeitraum verwendet. Informationen zum Festlegen eines Standard-Timeoutzeitraums findest du auf dieser Seite auf der Registerkarte „Webbrowser“. Du kannst derzeit keinen Standard-Timeoutzeitraum über {% data variables.product.prodname_cli %} angeben.

{% endcli %}

{% vscode %}

## Festlegen eines Timeoutzeitraums

Du kannst auf {% data variables.product.prodname_dotcom_the_website %} deinen standardmäßigen Timeoutzeitraum in deinem Webbrowser festlegen. Wenn du alternativ {% data variables.product.prodname_cli %} verwendest, um einen Codespace zu erstellen, kannst du einen Timeoutzeitraum für diesen bestimmten Codespace festlegen. Weitere Informationen erhältst du, wenn du oben auf die entsprechende Registerkarte klickst.

{% endvscode %}
