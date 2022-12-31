---
title: Automatische Skalierung mit selbstgehosteten Runnern
shortTitle: Autoscale self-hosted runners
intro: Du kannst deine selbstgehosteten Runner als Reaktion auf Webhookereignisse automatisch skalieren.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107557'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zur automatischen Skalierung

Du kannst die Anzahl selbstgehosteter Runner in deiner Umgebung als Reaktion auf Webhookereignisse, die du mit einer bestimmten Bezeichnung erhältst, automatisch erhöhen oder verringern. Beispielsweise kannst du eine Automatisierung erstellen, die jedes Mal einen neuen selbstgehosteten Runner hinzufügt, wenn du ein [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)-Webhookereignis mit der [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)-Aktivität erhältst, wodurch du darüber benachrichtigt wirst, dass ein neuer Auftrag verarbeitet werden kann. Die Webhooknutzdaten enthalten Bezeichnungsdaten, damit du die Art des Runners identifizieren kannst, den der Auftrag anfordert. Nachdem der Auftrag abgeschlossen ist, kannst du eine Automatisierung erstellen, durch die der Runner als Reaktion auf die `workflow_job`-[`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)-Aktivität entfernt wird. 

## Empfohlene Lösungen für die automatische Skalierung

{% data variables.product.prodname_dotcom %} empfiehlt und arbeitet eng mit zwei Open-Source-Projekten zusammen, die du zum automatischen Skalieren deiner Runner verwenden kannst. Abhängig von deinen Anforderungen können eine oder beide Lösungen geeignet sein. 

In den folgenden Repositorys sind detaillierte Anweisungen zum Einrichten dieser Autoskalierungen enthalten: 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller): Ein Kubernetes-Controller für selbstgehostete {% data variables.product.prodname_actions %}-Runner
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner): Ein Terraform-Modul für skalierbare {% data variables.product.prodname_actions %}-Runner auf Amazon Web Services

Jede Lösung weist bestimmte Eigenschaften auf, die du bedenken solltest:

| **Funktionen** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| Typ | Kubernetes | Linux- und Windows-VMs |
| Unterstützte Clouds | Azure, Amazon Web Services, Google Cloud Platform, lokal | Amazon Web Services |
| Wo Runner skaliert werden können | Auf Unternehmens-, Organisations- und Repositoryebenen. Nach Runnerbezeichnung und Runnergruppe. | Auf Organisations- und Repositoryebenen. Nach Runnerbezeichnung und Runnergruppe. |
| Wie Runner skaliert werden können | Webhookereignisse, Geplant, Pull-basiert | Webhookereignisse, Geplant (Nur Runner auf Organisationsebene) |

## Verwenden von kurzlebigen Runnern für die automatische Skalierung

{% data variables.product.prodname_dotcom %} empfiehlt die Implementierung der automatischen Skalierung mit kurzlebigen selbstgehosteten Runnern. Die automatische Skalierung mit beständigen selbstgehosteten Runnern wird nicht empfohlen. In bestimmten Fällen kann {% data variables.product.prodname_dotcom %} nicht garantieren, dass Aufträge keinen beständigen Runnern zugewiesen werden, während sie heruntergefahren werden. Bei kurzlebigen Runnern kann dies garantiert werden, da {% data variables.product.prodname_dotcom %} nur einen Auftrag pro Runner zuweist.

Mit diesem Ansatz kannst du deine Runner als kurzlebige Systeme verwalten, da du die Automatisierung dafür verwenden kannst, eine bereinigte Umgebung für jeden Auftrag bereitzustellen. Dadurch kann die Gefährdung von vertraulichen Ressourcen aus vorherigen Aufträgen begrenzt und auch das Risiko der Kompromittierung eines Runners, der neue Aufträge erhält, verringert werden.  

Wenn du deiner Umgebung einen kurzlebigen Runner hinzufügen möchtest, füge den `--ephemeral`-Parameter beim Registrieren deines Runners mit `config.sh` ein. Beispiel:

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

Der {% data variables.product.prodname_actions %}-Dienst hebt die Registrierung des Runners automatisch auf, nachdem ein Auftrag verarbeitet wurde. Anschließend kannst du deine eigene Automatisierung erstellen, die den Runner löscht, sobald die Registrierung aufgehoben wurde.

{% note %}

**Hinweis:** Wenn ein Auftrag für eine bestimmte Art von Runner gekennzeichnet ist, aber kein passender Runner verfügbar ist, schlägt der Auftrag in der Warteschlange nicht sofort fehl. Stattdessen bleibt der Auftrag bis zum Ablauf des Timeoutzeitraums von 24 Stunden in der Warteschlange.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## Steuern von Softwareupdates für selbstgehostete Runner

Standardmäßig werden Softwareupdates für selbstgehostete Runner automatisch ausgeführt, wenn eine neue Version der Runnersoftware verfügbar ist.  Wenn du kurzlebige Runner in Containern verwendest, kann dies bei der Veröffentlichung einer neuen Runnerversion zu wiederholten Softwareupdates führen.  Durch das Deaktivieren automatischer Updates kannst du die Runnerversion im Containerimage direkt zum gewünschten Zeitpunkt aktualisieren.

Um automatische Softwareupdates zu deaktivieren und sie selbst zu installieren, musst du das Flag `--disableupdate` beim Registrieren deines Runners mit `config.sh` angeben. Beispiel:

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

Auch wenn du automatische Updates deaktivierst, musst du deine Runnerversion regelmäßig aktualisieren.  Aufgrund der neuen Funktion in {% data variables.product.prodname_actions %} müssen sowohl am {% data variables.product.prodname_actions %}-Dienst _als auch_ an der Runnersoftware Änderungen vorgenommen werden.  Ohne ein Softwareupdate kann der Runner möglicherweise keine Aufträge verarbeiten, bei denen die neuen Features in {% data variables.product.prodname_actions %} verwendet werden.

Wenn du automatische Updates deaktivierst, musst du deine Runnerversion innerhalb von 30 Tagen nach der Veröffentlichung einer neuen Version aktualisieren.  Du solltest die Benachrichtigungen zu Releases im [`actions/runner`-Repository](https://github.com/actions/runner/releases) abonnieren. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications).

Anweisungen zum Installieren der neuesten Runnerversion findest du in den Installationsanweisungen für [das neueste Release](https://github.com/actions/runner/releases).

{% note %}

**Hinweis:** Wenn du innerhalb von 30 Tagen kein Softwareupdate durchführst, reiht der {% data variables.product.prodname_actions %}-Dienst keine Aufträge in die Warteschlange deines Runners ein.  Wenn ein kritisches Sicherheitsupdate durchgeführt werden muss, reiht der {% data variables.product.prodname_actions %}-Dienst keine Aufträge in die Warteschlange deines Runners ein, bis dieser aktualisiert wurde.

{% endnote %}

{% endif %}

## Verwenden von Webhooks für die automatische Skalierung

Du kannst mithilfe der vom [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)-Webhook empfangenen Nutzdaten deine eigene Umgebung für die automatische Skalierung erstellen. Dieser Webhook ist auf Repository-, Organisations- und Unternehmensebene verfügbar, und die Nutzdaten für dieses Ereignis enthalten einen `action`-Schlüssel, der den Phasen des Lebenszyklus eines Workflowauftrags entspricht, z. B. wenn Aufträge `queued`, `in_progress` und `completed` sind. Anschließend musst du deine eigene Skalierungsautomatisierung als Reaktion auf diese Webhooknutzdaten erstellen.

- Weitere Informationen zum `workflow_job`-Webhook findest du unter [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job).
- Unter [Erstellen von Webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks) erfährst du, wie du mit Webhooks arbeiten kannst.

## Authentifizierungsanforderungen

Du kannst selbstgehostete Runner für Repositorys und Organisationen mit [der API](/rest/reference/actions#self-hosted-runners) registrieren und löschen. Deine Implementierung für die automatische Skalierung kann ein Zugriffstoken oder eine {% data variables.product.prodname_dotcom %}-App verwenden, um sich bei der API zu authentifizieren. 

Dein Zugriffstoken benötigt den folgenden Geltungsbereich:

- Verwende bei privaten Repositorys ein Zugriffstoken mit dem [`repo`-Geltungsbereich](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Verwende bei öffentlichen Repositorys ein Zugriffstoken mit dem [`public_repo`-Geltungsbereich](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes):
- Verwende bei Organisationen ein Zugriffstoken mit dem [`admin:org`-Geltungsbereich](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

Um sich mithilfe einer {% data variables.product.prodname_dotcom %}-App zu authentifizieren, muss sie über die folgenden Berechtigungen verfügen:
- Weise für Repositorys die Berechtigung `administration` zu.
- Weise für Organisationen die Berechtigung `organization_self_hosted_runners` zu.

Du kannst selbstgehostete Runner für Unternehmen mithilfe [der API](/rest/reference/actions#self-hosted-runners) registrieren und löschen. Die Implementierung zur automatischen Skalierung kann ein Zugriffstoken verwenden, um sich bei der API zu authentifizieren.

Dein Zugriffstoken benötigt den `manage_runners:enterprise`-Geltungsbereich.
