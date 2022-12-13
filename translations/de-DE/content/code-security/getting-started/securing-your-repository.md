---
title: Repository schützen
intro: 'Dir stehen einige {% data variables.product.prodname_dotcom %}-Features zur Verfügung, um dein Repository zu schützen.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161183'
---
## Einführung
In diesem Leitfaden erfährst du, wie du Sicherheitsfunktionen für ein Repository konfigurierst. Du musst Repository-Administrator oder Organisationsbesitzer sein, um Sicherheitseinstellungen für ein Repository zu konfigurieren.

Deine Sicherheitsbedürfnisse sind für dein Repository individuell, daher musst du vielleicht nicht jedes Feature für dein Repository aktivieren. Weitere Informationen findest du unter [{% data variables.product.prodname_dotcom %}-Sicherheitsfeatures](/code-security/getting-started/github-security-features).

{% data reusables.advanced-security.security-feature-availability %}

## Verwalten des Zugriffs auf dein Repository

Der erste Schritt zur Sicherung eines Repositorys besteht darin, festzulegen, wer deinen Code sehen und ändern darf. Weitere Informationen findest du unter [Verwalten von Repositoryeinstellungen](/github/administering-a-repository/managing-repository-settings).

Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}-Einstellungen** und scrolle dann nach unten zur "Gefahrenzone."

- Um zu ändern, wer dein Projektarchiv sehen kann, klicke auf **Sichtbarkeit ändern**. Weitere Informationen findest du unter [Festlegen der Repositorysichtbarkeit](/github/administering-a-repository/setting-repository-visibility).{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- Um zu ändern, wer auf dein Repository zugreifen und Berechtigungen anpassen kann, klicke auf **Zugriff verwalten**. Weitere Informationen findest du unter "[Teams und Personen mit Zugriff auf dein Repository verwalten](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

## Festlegen einer Sicherheitsrichtlinie

1. Klicke unter deinem Repositorynamen auf **{% octicon "shield" aria-label="The shield symbol" %}-Sicherheit**.
2. Klicke auf **Sicherheitsrichtlinie**.
3. Klicke auf **Start setup** (Setup starten).
4. Füge Informationen über unterstützte Versionen deines Projekts hinzu und wie du Sicherheitsrisiken melden kannst.

Weitere Informationen findest du unter [Hinzufügen einer Sicherheitsrichtlinie zu deinem Repository](/code-security/getting-started/adding-a-security-policy-to-your-repository).

## Verwalten des Abhängigkeitsdiagramms

{% ifversion fpt or ghec %} Der Abhängigkeitsgraph wird automatisch für alle öffentlichen Repositorys erstellt, und du kannst ihn auch für private Repositorys aktivieren. Es interpretiert Manifest- und Sperrdateien in einem Repository, um Abhängigkeiten zu identifizieren.

1. Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}-Einstellungen**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. Klicke neben dem Abhängigkeitsdiagramm auf **Aktivieren** oder **Deaktivieren**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Weitere Informationen findest du unter [Untersuchen der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).

## Verwalten von {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} werden generiert, wenn {% data variables.product.prodname_dotcom %} eine Abhängigkeit im Abhängigkeitsdiagramm mit einem Sicherheitsrisiko identifiziert. {% ifversion fpt or ghec %}Du kannst {% data variables.product.prodname_dependabot_alerts %} für jedes Repository aktivieren.{% endif %}

{% ifversion fpt or ghec %}
1. Klicke auf dein Profilfoto und dann auf **Einstellung**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. Klicke auf **Alle aktivieren** neben {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Weitere Informationen findest du unter "[Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" und "Verwalten von [Sicherheits- und Analyseeinstellungen für dein persönliches Konto](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}."

## Verwalten der Abhängigkeitsüberprüfung

Mit der Abhängigkeitsüberprüfung kannst du Abhängigkeitsänderungen in Pull-Anforderungen visualisieren, bevor sie in deine Repositorys zusammengeführt werden. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

Die Abhängigkeitsüberprüfung ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature. {% ifversion fpt or ghec %}Die Abhängigkeitsüberprüfung ist bereits für alle öffentlichen Repositorys aktiviert. {% ifversion fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, können zusätzlich die Abhängigkeitsüberprüfung für private und interne Repositorys aktivieren. Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Um die Abhängigkeitsüberprüfung für ein {% ifversion ghec %}privates oder internes {% endif %}Repository zu aktivieren, stelle sicher, dass der Abhängigkeitsgraph aktiviert ist und aktiviere {% data variables.product.prodname_GH_advanced_security %}. 

1. Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}Einstellungen**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. {% ifversion ghec %} Wenn Abhängigkeitsdiagramm noch nicht aktiviert ist, klicke auf **"Aktivieren"**. {% elsif ghes or ghae %} Überprüfe, ob Abhängigkeitsdiagramm für dein Unternehmen konfiguriert ist. {% endif %}
4. Wenn {% data variables.product.prodname_GH_advanced_security %} nicht aktiviert ist, klicke auf **Aktivieren**.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## Verwalten von {% data variables.product.prodname_dependabot_security_updates %}

Für jedes Repository, für das {% data variables.product.prodname_dependabot_alerts %} verwendet werden, kannst du {% data variables.product.prodname_dependabot_security_updates %} aktivieren, um Pull Requests mit Sicherheitsupdates auszulösen, wenn Sicherheitsrisiken erkannt werden.

1. Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}Einstellungen**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. Klicke neben {% data variables.product.prodname_dependabot_security_updates %} auf **Aktivieren**.

Weitere Informationen findest du unter " [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates) " und " [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates) ."

## Verwalten von {% data variables.product.prodname_dependabot_version_updates %}

Du kannst {% data variables.product.prodname_dependabot %} zur automatisch Generierung von Pull Requests aktivieren, um deine Abhängigkeiten auf dem neuesten Stand zu halten. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates).

{% ifversion dependabot-settings-update-37 %}
1. Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}-Einstellungen**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. Klicke neben {% data variables.product.prodname_dependabot_version_updates %} auf **Aktivieren**, um eine einfache *dependabot.yml*-Konfigurationsdatei zu erstellen.
4. Gib die Abhängigkeiten an, um die Datei zu aktualisieren und in das Repository zu committen. Weitere Informationen findest du unter [Konfigurieren von Dependabot-Versionsupdates](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).

{% else %} Zum Aktivieren von {% data variables.product.prodname_dependabot_version_updates %} musst du eine *dependabot.yml*-Konfigurationsdatei erstellen. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).
{% endif %}

{% endif %}

## Konfigurieren von {% data variables.product.prodname_code_scanning %}

Du kannst {% data variables.product.prodname_code_scanning %} einrichten, um mit einem {% data variables.code-scanning.codeql_workflow %} oder einem Tool eines Drittanbieters automatisch Sicherheitsrisiken und Fehler in dem in deinem Repository gespeicherten Code zu identifizieren. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data variables.product.prodname_code_scanning_capc %} ist {% ifversion fpt or ghec %}für alle öffentlichen Repositorys und für private Repositorys im Besitz von Organisationen verfügbar, die Teil eines Unternehmens mit einer Lizenz für {% else %}für organisationsinterne Repositorys sind, wenn dein Unternehmen {% endif %}{% data variables.product.prodname_GH_advanced_security %} verwendet.

## Konfigurieren von {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} ist {% ifversion fpt or ghec %}für alle öffentlichen Repositorys aktiviert und für private Repositorys verfügbar, die Organisationen gehören, die Teil eines Unternehmens mit einer Lizenz für {% else %}verfügbar sind, wenn dein Unternehmen {% endif %}{% data variables.product.prodname_GH_advanced_security %} verwendet. {% ifversion fpt %} Weitere Informationen findest du in der Dokumentation [{% data variables.product.prodname_ghe_cloud %}.](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning) {% else %}{% data variables.product.prodname_secret_scanning_caps %} ist möglicherweise bereits für dein Repository aktiviert, je nach den Einstellungen deiner Organisation.

1. Klicke auf der Hauptseite deines Repositorys auf **{% octicon "gear" aria-label="The Settings gear" %}Einstellungen**.
2. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
3. Wenn {% data variables.product.prodname_GH_advanced_security %} nicht aktiviert ist, klicke auf **Aktivieren**.
4. Klicke neben {% data variables.product.prodname_secret_scanning_caps %} auf **Aktivieren**. {% endif %}

## Nächste Schritte
Du kannst Warnungen von Sicherheitsfeatures anzeigen und verwalten, um Abhängigkeiten und Sicherheitsrisiken in deinem Code zu bearbeiten. Weitere Informationen findest du unter {% ifversion fpt or ghes or ghec %} [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),{% endif %} {% ifversion fpt or ghec or ghes %}[Verwalten von Pull Requests für Abhängigkeitsupdates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}[Verwalten von {% data variables.product.prodname_code_scanning %} für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) und [Verwalten von Warnungen der {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

{% ifversion fpt or ghec %}Wenn ein Sicherheitsrisiko besteht, kannst du eine Sicherheitsempfehlung erstellen, um das Sicherheitsrisiko privat zu besprechen und zu beheben. Weitere Informationen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/security-advisories/about-github-security-advisories) und [Einen Sicherheitshinweis erstellen](/code-security/security-advisories/creating-a-security-advisory).
{% endif %}
