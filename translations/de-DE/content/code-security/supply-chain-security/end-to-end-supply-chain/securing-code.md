---
title: Bewährte Methoden zum Sichern von Code in einer Lieferkette
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: 'Anleitung zum Schutz des mittleren Teils deiner Lieferkette: der Code, den du schreibst, und der Code, den du benötigst'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184004'
---
## Über diesen Leitfaden

Dieser Leitfaden beschreibt die wichtigsten Änderungen, mit denen du die Sicherheit deines Codes verbessern kannst. In den einzelnen Abschnitten wird jeweils eine Änderung beschrieben, die du zur Verbesserung der Sicherheit an deinen Prozessen vornehmen kannst. Die Änderungen mit den größten Auswirkungen sind zuerst aufgeführt.

## Welches Risiko besteht?

Die wichtigsten Risiken im Entwicklungsprozess sind:

- Verwendung von Abhängigkeiten mit Sicherheitsrisiken, die ein Angreifer ausnutzen könnte.
- Die Authentifizierungsanmeldeinformationen oder ein Token, das ein Angreifer für den Zugriff auf deine Ressourcen verwenden kann.
- Einführung eines Sicherheitsrisikos in deinen eigenen Code, das ein Angreifer ausnutzen könnte.

Diese Risiken machen deine Ressourcen und Projekte angreifbar. Diese Risiken werden direkt an jeden weitergegeben, der ein von dir erstelltes Paket verwendet. In den folgenden Abschnitten wird erklärt, wie du dich selbst und deine Benutzer vor diesen Risiken schützen kannst.

## Erstelle ein Programm zur Verwaltung von Sicherheitsrisiken für Abhängigkeiten

Du kannst den von dir abhängigen Code sichern, indem du ein Programm zur Verwaltung von Sicherheitsrisiken für Abhängigkeiten erstellst. Auf hoher Ebene sollte dies Prozesse beinhalten, die sicherstellen, dass du:

1. Einen Bestand deiner Abhängigkeiten erstellst.

1. Weißt, wann es eine Sicherheitslücke in einer Abhängigkeit gibt.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. Abhängigkeitsüberprüfungen für deine Pull Requests erzwingst.{% endif %}

1. Die Auswirkungen der Sicherheitslücke auf deinen Code abschätzen und entscheiden, welche Maßnahmen du ergreifen musst.

### Automatische Bestandsgenerierung

Als erster Schritt möchtest du eine vollständige Bestandsaufnahme deiner Abhängigkeiten vornehmen. Das Abhängigkeitsdiagramm für ein Repository zeigt dir Abhängigkeiten für unterstützte Ökosysteme. Wenn du deine Abhängigkeiten überprüfst oder andere Ökosysteme verwendest, musst du dies durch Daten aus Drittanbietertools oder durch manuelles Auflisten von Abhängigkeiten ergänzen. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Automatische Erkennung von Sicherheitsrisiken in Abhängigkeiten

{% data variables.product.prodname_dependabot %} können dich dabei unterstützen, deine Abhängigkeiten zu überwachen und dich zu benachrichtigen, wenn sie eine bekannte Sicherheitsanfälligkeit enthalten. {% ifversion fpt or ghec or ghes %} Du kannst sogar {% data variables.product.prodname_dependabot %} aktivieren, um Pull Requests automatisch auszulösen, die die Abhängigkeit auf eine sichere Version aktualisieren. {% endif %} Weitere Informationen findest du unter [Informationen über {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts){% ifversion fpt or ghec or ghes %} und [Informationen über Dependabot-Sicherheitsupdates](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates){% endif %}.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### Automatische Erkennung von Sicherheitsrisiken in Pull Requests

Die {% data variables.product.prodname_dependency_review_action %} erzwingt eine Abhängigkeitsprüfung für deine Pull Requests, sodass du leicht erkennen kannst, ob ein Pull Request eine für Sicherheitsrisiken anfällige Version einer Abhängigkeit in dein Repository einführt. Wenn ein Sicherheitsrisiko erkannt wird, kann die {% data variables.product.prodname_dependency_review_action %} das Zusammenführen des Pull Requests blockieren. Weitere Informationen findest Du unter [Erzwingen der Abhängigkeitsüberprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement).{% endif %} 
    

### Bewertung der Risikogefährdung durch eine anfällige Abhängigkeit

Wenn du feststellst, dass du eine anfällige Abhängigkeit verwendest, z. B. eine Bibliothek oder ein Framework, musst du die Belichtungsebene deines Projekts bewerten und entscheiden, welche Maßnahmen ergriffen werden müssen. Sicherheitsrisiken werden in der Regel mit einem Schweregrad angegeben, um zu zeigen, wie schwerwiegend ihre Auswirkungen sein könnten. Der Schweregrad ist ein nützlicher Anhaltspunkt, sagt aber nichts über die vollen Auswirkungen der Sicherheitsrisiken auf deinen Code aus.

Um die Auswirkungen einer Sicherheitsanfälligkeit auf deinen Code zu bewerten, musst du auch berücksichtigen, wie du die Bibliothek verwendest und bestimmst, wie viel Risiko tatsächlich für dein System besteht. Vielleicht ist das Sicherheitsrisiko Teil eines Features, das du nicht nutzt, und du kannst die betroffene Bibliothek aktualisieren und mit deinem normalen Veröffentlichungszyklus fortfahren. Oder vielleicht ist dein Code stark gefährdet und du musst die betroffene Bibliothek aktualisieren und sofort einen aktualisierten Build senden. Diese Entscheidung hängt davon ab, wie du die Bibliothek in deinem System verwendest, und ist eine Entscheidung, die nur du treffen kannst.

## Sichere deine Kommunikationstoken

Der Code muss oft mit anderen Systemen über ein Netzwerk kommunizieren und benötigt geheime Schlüssel (wie ein Passwort oder einen API-Schlüssel), um sich zu authentifizieren. Dein System benötigt Zugang zu diesen Geheimnissen, um zu funktionieren. Dabei empfiehlt es sich, sie nicht in deinen Quellcode einzuschließen. Dies ist besonders wichtig für Repositorys, auf die potenziell viele Personen Zugriff haben{% ifversion not ghae %} und kritisch für öffentliche Repositorys{% endif %}.

### Automatische Erkennung von Geheimnissen, die in ein Repository übertragen wurden

{% note %}

**Hinweis:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} ist Partner vieler Anbieter, um automatisch zu erkennen, wenn Geheimnisse in deine öffentlichen Repositorys übertragen oder dort gespeichert werden, und benachrichtigt den Anbieter, damit er geeignete Maßnahmen ergreifen kann, um die Sicherheit deines Kontos zu gewährleisten. Weitere Informationen findest du unter "[Informationen zu {% data variables.product.prodname_secret_scanning %} Partner-Muster](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)."
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} Wenn deine Organisation {% data variables.product.prodname_GH_advanced_security %} verwendet, kannst du {% data variables.product.prodname_secret_scanning_GHAS %} für jedes Repository aktivieren, das der Organisation gehört. Du kannst auch eigene Muster definieren, um zusätzliche Geheimnisse auf Repository-, Organisations- oder Unternehmensebene zu erkennen. Weitere Informationen findest du unter "[Informationen zu {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)."
{% else %} Du kannst {% data variables.product.prodname_secret_scanning %} so konfigurieren, dass nach Geheimnissen gesucht wird, die von vielen Dienstanbietern ausgegeben werden, und dass du benachrichtigt wirst, wenn welche gefunden werden. Du kannst auch eigene Muster definieren, um zusätzliche Geheimnisse auf Repository-, Organisations- oder Unternehmensebene zu erkennen. Weitere Informationen findest du unter "[Über das geheime Überprüfen](/code-security/secret-scanning/about-secret-scanning)" und "[Geheime Überprüfungsmuster](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

### Sichere Speicherung von Geheimschlüsseln, die du in {% data variables.product.product_name %} verwendest

{% ifversion fpt or ghec %} Neben deinem Code musst du wahrscheinlich Geheimnisse an anderen Stellen verwenden. Zum Beispiel, um {% data variables.product.prodname_actions %}-Workflows, {% data variables.product.prodname_dependabot %} oder deine {% data variables.product.prodname_github_codespaces %}-Entwicklungsumgebung mit anderen Systemen kommunizieren zu lassen. Weitere Informationen zur sicheren Speicherung und Verwendung von Geheimnissen findest du unter "[Verschlüsselte Geheimnisse in Aktionen](/actions/security-guides/encrypted-secrets)", "[Verwalten von verschlüsselten Geheimnissen für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)" und "[Verwalten von verschlüsselten Geheimnissen für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
{% endif %}

{% ifversion ghes or ghae %} Du musst Geheimnisse wahrscheinlich auch an anderen Stellen als deinem Code verwenden. zum Beispiel, um {% data variables.product.prodname_actions %}-Workflows {% ifversion ghes %} oder {% data variables.product.prodname_dependabot %}{% endif %} die Kommunikation mit anderen Systemen zu ermöglichen. Weitere Informationen darüber, wie du Geheimnisse sicher speicherst und verwendest, findest du unter [Verschlüsselte Geheimnisse in Aktionen](/actions/security-guides/encrypted-secrets){% ifversion ghes %} und [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).{% else %}."{% endif %} {% endif %}

## Halte anfällige Codierungsmuster aus deinem Repository fern

{% note %}

**Hinweis:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Erstelle einen Überprüfungsprozess der Pull-Anforderungen

Du kannst die Qualität und Sicherheit deines Codes verbessern, indem du sicherstellst, dass alle Pull-Anforderungen überprüft und getestet werden, bevor sie zusammengeführt werden. {% data variables.product.prodname_dotcom %} verfügt über viele Features, mit denen du den Überprüfungs- und Zusammenführungsprozess steuern kannst. Um zu beginnen, siehe "[Informationen zu geschützten Zweigen](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)."

### Überprüfe deinen Code auf anfällige Muster

Unsichere Codemuster sind für Prüfer oft nur schwer zu erkennen. Du kannst deinen Code nicht nur auf Geheimnisse prüfen, sondern auch auf Muster, die mit Sicherheitsrisiken verbunden sind. Zum Beispiel kann eine Funktion, die nicht speichersicherfähig ist, oder eine Benutzereingabe, die zu einem Einschleusungsrisiko führen könnte, nicht entschlüsselt werden. {% data variables.product.prodname_dotcom %} bietet verschiedene Möglichkeiten, wie und wann du deinen Code überprüfen kannst. Um zu beginnen, siehe "[Informationen zur Überprüfung von Codes](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)."

## Nächste Schritte

- [Sichern einer End-to-End-Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)

- "[Bewährte Methoden zum Schützen von Konten](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- [Bewährte Methoden zum Sichern deines Buildsystems](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)
