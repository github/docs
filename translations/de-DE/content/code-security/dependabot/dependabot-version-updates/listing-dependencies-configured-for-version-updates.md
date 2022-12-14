---
title: Auflisten von für Versions-Updates konfigurierten Abhängigkeiten
intro: 'Du kannst die Abhängigkeiten anzeigen, die {% data variables.product.prodname_dependabot %} auf Updates überwacht.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109802'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Anzeigen von Abhängigkeiten, die von {% data variables.product.prodname_dependabot %} überwacht werden

Nachdem du Versions-Updates aktiviert hast, kannst du bestätigen, dass deine Konfiguration mit der Registerkarte **{% data variables.product.prodname_dependabot %}** im Abhängigkeitsgraph für das Repository korrekt ist. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. Wenn du optional die Dateien anzeigen möchtest, die für einen Paket-Manager überwacht werden, klicke auf das zugeordnete {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Überwachte Abhängigkeitsdateien](/assets/images/help/dependabot/monitored-dependency-files.png)

Wenn Abhängigkeiten fehlen, überprüfe die Protokolldateien auf Fehler. Wenn Paketmanager fehlen, überprüfe die Konfigurationsdatei.

## Anzeigen von {% data variables.product.prodname_dependabot %} -Protokolldateien

1. Klicke auf der Registerkarte **{% data variables.product.prodname_dependabot %}** auf **Zuletzt überprüft vor *TIME***, um die Protokolldatei anzuzeigen, die {% data variables.product.prodname_dependabot %} während der letzten Überprüfung auf Versionsupdates generiert hat.
  ![Protokolldatei anzeigen](/assets/images/help/dependabot/last-checked-link.png)
2. Wenn du die Versionsprüfung optional erneut ausführen möchtest, klicke auf **Nach Updates suchen**.
  ![Suchen nach Updates](/assets/images/help/dependabot/check-for-updates.png)
