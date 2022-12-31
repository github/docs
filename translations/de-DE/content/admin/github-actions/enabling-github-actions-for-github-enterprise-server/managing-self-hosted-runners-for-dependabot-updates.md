---
title: Verwalten von selbstgehosteten Runnern für Dependabot-Updates für dein Unternehmen
intro: 'Du kannst dedizierte Runner für {% data variables.location.product_location %} erstellen, mit denen {% data variables.product.prodname_dependabot %} Pull Requests erstellt werden, um die Abhängigkeiten zu sichern und zu verwalten, die in Repositorys in deinem Unternehmen verwendet werden.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181333'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Informationen zu selbst gehosteten Runnern für {% data variables.product.prodname_dependabot_updates %}

Du kannst Benutzer*innen von {% data variables.location.product_location %} helfen, sicheren Code zu erstellen und zu pflegen, indem du mit {% data variables.product.prodname_dependabot %} Sicherheits- und Versionsupdates einrichtest. Mit {% data variables.product.prodname_dependabot_updates %} können Entwickler Repositorys so konfigurieren, dass ihre Abhängigkeiten aktualisiert und automatisch gesichert werden. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

Um {% data variables.product.prodname_dependabot_updates %} auf {% data variables.location.product_location %} zu verwenden, musst du selbstgehostete Runner konfigurieren, um die Pull Requests zu erstellen, die die Abhängigkeiten aktualisieren.

## Voraussetzungen

{% ifversion dependabot-updates-github-connect %} Das Konfigurieren von selbstgehosteten Runnern ist nur ein Schritt in der Mitte des Prozesses zum Aktivieren von {% data variables.product.prodname_dependabot_updates %}. Es gibt mehrere Schritte, die du vor diesen Schritten ausführen musst, einschließlich der Konfiguration von {% data variables.location.product_location %}, um {% data variables.product.prodname_actions %} mit selbstgehosteten Runnern zu verwenden. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% else %} Bevor du selbst gehostete Runner für {% data variables.product.prodname_dependabot_updates %} konfigurieren, musst du Folgendes ausführen:

- Konfiguriere {% data variables.location.product_location %}, um {% data variables.product.prodname_actions %} mit selbstgehosteten Runnern zu verwenden. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).
- Aktiviere {% data variables.product.prodname_dependabot_alerts %} für dein Unternehmen. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Konfigurieren selbst gehosteter Runner für {% data variables.product.prodname_dependabot_updates %}

Nachdem du {% data variables.location.product_location %} so konfiguriert hast, dass {% data variables.product.prodname_actions %} verwendet wird, musst du selbstgehostete Runner für {% data variables.product.prodname_dependabot_updates %} hinzufügen.

### Systemanforderungen für {% data variables.product.prodname_dependabot %}-Runner

Jede VM, die du für {% data variables.product.prodname_dependabot %}-Runner verwendest, muss die Anforderungen für selbst gehostete Runner erfüllen. Sie muss außerdem die folgenden Anforderungen erfüllen.

- Linux-Betriebssystem
- x64-Architektur {%- ifversion ghes < 3.5 %}
- Git installiert {%- endif %}
- Docker ist mit Zugriff für die Runner-Benutzer installiert:
  - Du solltest Docker im Rootless-Modus installieren und die Runner für den Zugriff auf Docker ohne `root`-Berechtigungen konfigurieren.
  - Installiere alternativ Docker, und gib den Runner-Benutzern Berechtigungen zum Ausführen von Docker.

Die CPU- und Speicheranforderungen hängen von der Anzahl der gleichzeitigen Runner ab, die du auf einer bestimmten VM bereitstellst. Als Anhaltspunkt: Wir haben erfolgreich 20 Runner auf einem einzelnen Computer mit 2 CPUs und 8 GB eingerichtet. Letztendlich hängen deine CPU- und Speicheranforderungen jedoch stark von den zu aktualisierenden Repositories ab. Einige Ökosysteme erfordern mehr Ressourcen als andere.

Wenn du mehr als 14 gleichzeitige Runner auf einer VM angibst, musst du auch die Docker-`/etc/docker/daemon.json`-Konfiguration aktualisieren, um die Standardanzahl von Netzwerken zu erhöhen, die Docker erstellen kann.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Netzwerkanforderungen für {% data variables.product.prodname_dependabot %}-Runner

Die {% data variables.product.prodname_dependabot %}-Runner benötigen Zugriff auf das öffentliche Internet, {% data variables.product.prodname_dotcom_the_website %}, und auf alle internen Registrierungen, die in den Updates von {% data variables.product.prodname_dependabot %} verwendet werden. Um das Risiko für dein internes Netzwerk zu minimieren, solltest du den Zugriff auf den virtuellen Computer (VM) auf dein internes Netzwerk beschränken. Dadurch wird das Potenzial für Schäden an internen Systemen reduziert, wenn ein Runner eine Hijack-Abhängigkeit herunterladen sollte.

### Hinzufügen selbst gehosteter Runner für {% data variables.product.prodname_dependabot %}-Updates

1. Bereitstellen selbst gehosteter Runner auf der Ebene von Repository, Organisation oder Unternehmenskonto. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/about-self-hosted-runners).

2. Richte die selbst gehosteten Runner mit den oben beschriebenen Anforderungen ein. Beispielsweise würdest du auf einer VM unter Ubuntu 20.04 Folgendes ausführen:{% ifversion ghes < 3.5 %}

   - Überprüfe, ob Git installiert ist: `command -v git`.{% endif %}
   - Installiere Docker, und stelle sicher, dass die Runner-Benutzer Zugriff auf Docker haben. Weitere Informationen findest du in der Dokumentation zur Docker.
     - [Installieren der Docker-Engine unter Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Empfohlene Vorgehensweise: [Ausführen des Docker-Daemons als Nicht-Root-Benutzer (Rootless-Modus)](https://docs.docker.com/engine/security/rootless/).
     - Alternativer Ansatz: [Verwalten von Docker als Nicht-Root-Benutzer](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Stelle sicher, dass die Runner Zugriff auf das öffentliche Internet haben und nur auf die internen Netzwerke zugreifen können, die {% data variables.product.prodname_dependabot %} benötigt.

3. Weise jedem Runner eine `dependabot`-Bezeichnung zu, die {% data variables.product.prodname_dependabot %} verwenden soll. Weitere Informationen findest du unter [Verwenden von Bezeichnungen mit selbst gehosteten Runnern](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner).

4. Aktiviere optional Workflows, die von {% data variables.product.prodname_dependabot %} ausgelöst werden, um mehr als schreibgeschützte Berechtigungen zu verwenden und Zugriff auf alle Geheimnisse zu haben, die normalerweise verfügbar sind. Weitere Informationen findest du unter [Problembehandlung bei {% data variables.product.prodname_actions %} für dein Unternehmen](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions).
