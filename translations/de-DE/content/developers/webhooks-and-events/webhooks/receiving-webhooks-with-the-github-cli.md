---
title: Empfangen von Webhooks mit der GitHub CLI
intro: 'Du kannst die {% data variables.product.prodname_cli %} verwenden, um Webhooks in deiner Entwicklungsumgebung ohne die Komplexität der Portweiterleitung oder Tools von Drittanbietern zu testen.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160664'
---
## Informationen zum Empfangen von Webhooks mit {% data variables.product.prodname_cli %}

{% note %}

**Hinweis:** Der Empfang von Webhooks mit der {% data variables.product.prodname_cli %} befindet sich derzeit in der eingeschränkten öffentlichen Betaphase und kann sich noch ändern. Wenn du dich für die Betaversion registrieren möchtest, antworte in unserer GitHub-Community-[Diskussion](https://github.com/orgs/community/discussions/38261). Möglicherweise dauert es etwas, bis du hinzugefügt wirst. Du erhältst eine E-Mail-Benachrichtigung, sobald du der Betaversion hinzugefügt wurdest.

{% endnote %}

Wenn du Änderungen am Integrationscode vornimmst, kannst den Code in einer lokalen Umgebung ausführen, um ihn schnell zu testen und zu durchlaufen, ohne den Code bereitstellen zu müssen. Du kannst {% data variables.product.prodname_cli %} verwenden, um Webhooks an deine lokale Umgebung weiterzuleiten.

{% note %}

**Hinweis:** Die Webhookweiterleitung im {% data variables.product.prodname_cli %} funktioniert nur mit Repository- und Organisationswebhooks. Wenn Webhooks für Sponsoring, für die GitHub-App, für Unternehmen oder den Marketplace lokal testen möchtest, musst du dies manuell tun. Weitere Informationen findest du unter [Erstellen von Webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks).

{% endnote %}

## Empfangen von Webhooks mit {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. Verwende den Unterbefehl `extension install`, um die {% data variables.product.prodname_cli %}-Erweiterung zu installieren, um die Webhookweiterleitung zu aktivieren. 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. Starte die Anwendung lokal, und beachte dabei die URL, wo die Webhooks empfangen werden sollen. In diesem Leitfaden wird davon ausgegangen, dass deine Anwendung bei `http://localhost:3000/webhook` auf Webhookereignisse lauscht.

1. Führe den Unterbefehl `webhook forward` aus, um Webhooks einzurichten, die an deine Anwendung übermittelt werden sollen. Ersetze `REPOSITORY` durch den Namen deines Repositorys. Beispiel: `monalisa/octocat`. Ersetze `EVENTS` durch eine durch Trennzeichen getrennte Liste der Ereignisse, die du empfangen möchtest. Beispiel: `issues,pull_request`. Ersetze `URL` durch die lokale URL, in der deine Anwendung Webhooks empfängt. Beispiel: `"http://localhost:3000/webhook"`.  Ersetze das `--repo`-Flag durch das `--org`-Flag, um an Organisationswebhooks anstelle von Repositorywebhooks zu lauschen. Beispiel: `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Lasse den Befehl im Hintergrund weiterhin laufen. So werden alle angegebenen Ereignisse für das angegebene Repository empfangen. Diese werden dann an deinen Webhookhandler weitergeleitet, der unter der angegebenen URL ausgeführt wird.
