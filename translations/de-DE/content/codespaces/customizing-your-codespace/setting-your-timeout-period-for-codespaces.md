---
title: Festlegen des Timeoutzeitraums für Codespaces
shortTitle: Set the timeout
intro: Du kannst dein Standardtimeout für {% data variables.product.prodname_codespaces %} auf der Seite mit deinen persönlichen Einstellungen festlegen.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064418"
---
Ein Codespace wird nach einem Inaktivitätszeitraum beendet. Du kannst die Länge dieses Zeitraums angeben. Die aktualisierte Einstellung gilt für alle neu erstellten Codespaces.

Einige Organisationen verfügen möglicherweise über eine maximale Leerlauf-Timeoutrichtlinie. Wenn eine Organisationsrichtlinie ein maximales Timeout festlegt, das unter dem von dir festgelegten Standardtimeout liegt, wird anstelle deiner Einstellung das Timeout der Organisation verwendet, und du wirst darüber benachrichtigt, sobald der Codespace erstellt ist. Weitere Informationen findest du unter [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

{% warning %}

**Warnung**: Codespaces werden pro Minute abgerechnet. Wenn du einen Codespace nicht aktiv nutzt, aber der Timeout des Codespace noch nicht eingetreten ist, werden dir die Kosten für die Zeit, in der der Codespace ausgeführt wird, trotzdem in Rechnung gestellt. Weitere Informationen findest du unter [Informationen zur Abrechnung für Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>Festlegen des standardmäßigen Timeoutzeitraums

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Gib unter „Standard-Leerlauftimeout“ die gewünschte Zeit ein, und klicke dann auf **Speichern**. Die Zeit muss zwischen 5 Minuten und 240 Minuten (4 Stunden) liegen.
   ![Auswählen deines Timeouts](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>Festlegen des Timeoutzeitraums für einen Codespace

{% data reusables.cli.cli-learn-more %}

Um den Timeoutzeitraum festzulegen, wenn du einen Codespace erstellst, verwende das `idle-timeout`-Argument mit dem `codespace create`-Unterbefehl. Gib die Zeit in Minuten an, gefolgt von `m`. Die Zeit muss zwischen 5 Minuten und 240 Minuten (4 Stunden) liegen.

```shell
gh codespace create --idle-timeout 90m
```

Wenn du keinen Timeoutzeitraum angibst, wenn du einen Codespace erstellst, wird der Standard-Timeoutzeitraum verwendet. Informationen zum Festlegen eines Standard-Timeoutzeitraums findest du auf dieser Seite auf der Registerkarte „Webbrowser“. Du kannst derzeit keinen Standard-Timeoutzeitraum über {% data variables.product.prodname_cli %} angeben.

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>Festlegen eines Timeoutzeitraums

Du kannst auf {% data variables.product.prodname_dotcom_the_website %} deinen standardmäßigen Timeoutzeitraum in deinem Webbrowser festlegen. Wenn du alternativ {% data variables.product.prodname_cli %} verwendest, um einen Codespace zu erstellen, kannst du einen Timeoutzeitraum für diesen bestimmten Codespace festlegen. Weitere Informationen erhältst du, wenn du oben auf die entsprechende Registerkarte klickst.

{% endvscode %}
