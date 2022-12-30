---
title: Abbrechen eines Workflows
intro: 'Du kannst eine laufende Workflowausführung abbrechen. Wenn du eine Workflowausführung abbrichst, bricht {% data variables.product.prodname_dotcom %} alle Aufträge und Schritte ab, die Teil dieses Workflows sind.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: f8bf0d06f5e0e37cb120b22a3bd6da39b51b78a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088563'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## Einen Workflow-Lauf abbrechen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Klicke in der Liste der Workflowausführungen auf den Namen der `queued`- oder `in progress`-Ausführung, die du abbrechen möchtest.
![Name der Workflowausführung](/assets/images/help/repository/in-progress-run.png)
1. Klicke in der oberen rechten Ecke des Workflows auf **Workflow abbrechen**.
![Schaltfläche „Workflow abbrechen“](/assets/images/help/repository/cancel-check-suite-updated.png)

## Schritte, die {% data variables.product.prodname_dotcom %} zum Abbrechen einer Workflowausführung ausführt

Beim Abbrechen der Workflowausführung führst du möglicherweise andere Software aus, die im Zusammenhang mit der Workflowausführung stehende Ressourcen verwendet. Du kannst möglicherweise leichter im Zusammenhang mit der Workflowausführung stehende Ressourcen freigeben, wenn du die Schritte kennst, die {% data variables.product.prodname_dotcom %} ausführt, um eine Workflowausführung abzubrechen.

1. Um die Ausführung des Workflows abzubrechen, bewertet der Server die `if`-Bedingungen für alle derzeit ausgeführten Aufträge neu. Wenn die Bedingung als `true` ausgewertet wird, wird der Auftrag nicht abgebrochen. Wenn z. B. die Bedingung `if: always()` als „true“ ausgewertet wird, wird der Auftrag weiterhin ausgeführt. Wenn keine Bedingung vorhanden ist, entspricht dies der Bedingung `if: success()`, d. h. die Ausführung findet nur bei erfolgreichem Abschluss des vorherigen Schritts statt.
2. Für Aufträge, die abgebrochen werden müssen, sendet der Server eine Abbruchnachricht an alle Runnercomputer mit Aufträgen, die abgebrochen werden müssen.
3. Für Aufträge, die weiterhin ausgeführt werden, bewertet der Server die `if`-Bedingungen für die nicht abgeschlossenen Schritte neu. Wenn die Bedingung als `true` ausgewertet wird, wird der Schritt weiterhin ausgeführt.
4. Für Schritte, die abgebrochen werden müssen, sendet der Runnercomputer `SIGINT/Ctrl-C` an den Einstiegsprozess des Schritts (`node` für Javascript-Aktion, `docker` für Containeraktion und `bash/cmd/pwd` bei Verwendung von `run` in einem Schritt). Wenn der Prozess innerhalb von 7.500 ms nicht beendet wird, sendet der Runner `SIGTERM/Ctrl-Break` an den Prozess. Warte dann 2.500 ms, bis der Prozess beendet wird. Wenn der Prozess noch ausgeführt wird, beendet der Runner die Prozessstruktur.
5. Nach Ablauf des Abbruch-Timeoutzeitraums von 5 Minuten erzwingt der Server das Beenden aller Aufträge und Schritte, die die Ausführung nicht beenden oder den Abbruchprozess nicht abschließen.
