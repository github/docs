---
title: "Phase\_2: Vorbereiten auf das Aktivieren im großen Stil"
intro: 'In dieser Phase bereitest du Entwickler*innen vor und sammelst Daten zu deinen Repositorys, sodass deine Teams bereit sind und du über alles verfügst, das du für Pilotprogramme sowie für das Rollout der {% data variables.product.prodname_code_scanning %} und der {% data variables.product.prodname_secret_scanning %} benötigst.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109713'
---
{% note %}

Dieser Artikel ist Teil einer Reihe zum Einführen von {% data variables.product.prodname_GH_advanced_security %} im großen Stil. Den vorherigen Artikel dieser Reihe findest du unter [Phase 1: Ausrichten auf die Rolloutstrategie und -ziele](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

{% endnote %}

## Vorbereiten auf das Aktivieren der {% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} Weitere Informationen findest du unter [Informationen zur Codeüberprüfung](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning).

Das Rollout der {% data variables.product.prodname_code_scanning %} hunderte von Repositorys übergreifend kann eine Herausforderung darstellen, besonders dann, wenn es ineffizient erfolgt. Wenn du die folgenden Schritte befolgst, wird dein Rollout sowohl effizient als auch erfolgreich. Als Teil der Vorbereitung arbeitest du in Teams, verwendest Automatisierung zum Sammeln von Daten zu deinen Repositorys und aktivierst die {% data variables.product.prodname_code_scanning %}. 

### Vorbereiten von Teams auf die {% data variables.product.prodname_code_scanning %}

Bereite deine Teams zunächst darauf vor, die {% data variables.product.prodname_code_scanning %} zu verwenden. Je mehr Teams die {% data variables.product.prodname_code_scanning %} nutzen, desto mehr Daten können für Wartungspläne und zum Überwachen des Fortschritts bei deinem Rollout verwendet werden. Konzentriere dich in dieser Phase auf das Nutzen von APIs und das Ausführen von internen Aktivierungen.

Dein Hauptfokus sollte auf dem Vorbereiten möglichst vieler Teams auf das Verwenden der {% data variables.product.prodname_code_scanning %} liegen. Du kannst die Teams auch dazu ermutigen, entsprechende Wartungen vorzunehmen. Es wird jedoch empfohlen, in dieser Phase das Aktivieren und Verwenden der {% data variables.product.prodname_code_scanning %} gegenüber dem Lösen von Problemen zu priorisieren.
  
### Sammeln von Informationen zu deinen Repositorys

Du kannst programmgesteuert Informationen zu verschiedenen Programmiersprachen sammeln, die in deinen Repositorys verwendet werden, und diese Daten zum Aktivieren der {% data variables.product.prodname_code_scanning %} mithilfe der GraphQL-API von {% data variables.product.product_name %} in allen Repositorys nutzen, die dieselbe Sprache verwenden.

{% note %}

**Hinweis:** Um diese Daten zu sammeln, ohne die in diesem Artikel beschriebenen GraphQL-Abfragen manuell auszuführen, kannst du unser öffentlich verfügbares Tool verwenden. Weitere Informationen findest du im [„ghas-enablement“-Tool](https://github.com/NickLiffen/ghas-enablement)-Repository.

{% endnote %}

Wenn du Informationen aus Repositorys sammeln möchtest, die mehreren Organisationen in deinem Unternehmen gehören, kannst du die untenstehende Abfrage zum Abrufen der Namen deiner Organisation verwenden und sie dann in die Repositoryabfrage eingeben. Ersetze „OCTO-ENTERPRISE“ durch deinen Unternehmensnamen.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Indem du die Repositorys auf Organisationsebene nach Sprache sortierst, kannst du ermitteln, welche Repositorys welche Sprachen verwenden. Du kannst die nachstehende Beispiel-GraphQL-Abfrage ändern, indem du „OCTO-ORG“ durch den Namen der Organisation ersetzt.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Weitere Informationen zum Ausführen von GraphQL-Abfragen findest du unter [Erstellen von Aufrufen mit GraphQL](/graphql/guides/forming-calls-with-graphql).

Konvertiere dann die Daten aus der GraphQL-Abfrage in ein lesbares Format, z. B. eine Tabelle.

| Sprache                | Anzahl der Repositorys | Name der Repositorys                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

Du kannst die aktuell nicht von {% data variables.product.prodname_GH_advanced_security %} unterstützten Sprachen aus dieser Tabelle herausfiltern.

Wenn du über Repositorys mit mehreren Sprachen verfügst, kannst du die GraphQL-Ergebnisse wie in der nachstehenden Tabelle dargestellt formatieren. Filtere Sprachen heraus, die nicht unterstützt werden, behalte jedoch alle Repositorys mit mindestens einer unterstützten Sprache. Du kannst die {% data variables.product.prodname_code_scanning %} für diese Repositorys aktivieren, und alle unterstützten Sprachen werden überprüft.

| Sprache(n)            | Anzahl der Repositorys | Name der Repositorys                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

Wenn du weißt, welche Repositorys welche Sprachen verwenden, kannst du mögliche Repositorys für Pilotprogramme in Phase 3 leichter ermitteln und dich besser auf das repositoryübergreifende Aktivieren der {% data variables.product.prodname_code_scanning %} in Phase 5 vorbereiten, das eine Sprache nach der anderen erfolgt.

{% ifversion ghes %}

### Aktivieren der {% data variables.product.prodname_code_scanning %} für deine Appliance

Bevor du mit Pilotprogrammen und dem Rollout der {% data variables.product.prodname_code_scanning %} in deinem Unternehmen fortfahren kannst, musst du zuerst die {% data variables.product.prodname_code_scanning %} für deine Appliance aktivieren. Weitere Informationen findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance).

{% endif %}

## Vorbereiten auf das Aktivieren der {% data variables.product.prodname_secret_scanning %}

Bei der Kommunikation zwischen einem Projekt und einem externen Dienst wird ein Token oder ein privater Schlüssel zur Authentifizierung verwendet. Wenn du ein Geheimnis in ein Repository einfügst, kann jedermann mit Lesezugriff auf das Repository das Geheimnis verwenden, um mit deinen Privilegien auf den externen Dienst zuzugreifen. Die {% data variables.product.prodname_secret_scanning_caps %} überprüft deinen gesamten Gitverlauf auf allen vorhandenen Branches in deinen Repositorys von {% data variables.product.prodname_dotcom %} auf Geheimnisse und warnt dich{% ifversion secret-scanning-push-protection %} oder blockiert den Push mit dem Geheimnis{% endif %}. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/code-security/secret-scanning/about-secret-scanning).

### Überlegungen beim Aktivieren der {% data variables.product.prodname_secret_scanning %}

Die {% data variables.product.prodname_secret_scanning %}-Funktion von {% data variables.product.product_name %} unterscheidet sich etwas von der {% data variables.product.prodname_code_scanning %}, da sie keine besondere Konfiguration nach Programmiersprache oder Repository bzw. allgemein weniger Konfigurationen benötigt. Dies bedeutet, dass das Aktivieren der {% data variables.product.prodname_secret_scanning %} auf Organisationsebene leicht sein kann. **Alle aktivieren** auf Organisationsebene anzuklicken und einen Haken bei der Option **{% data variables.product.prodname_secret_scanning %} für jedes neue Repository automatisch aktivieren** zu setzen, hat einige Downstreamauswirkungen, denen du dir bewusst sein solltest:

- **Lizenzverbrauch**  
  Das Aktivieren der {% data variables.product.prodname_secret_scanning %} für alle Repositorys verbraucht alle Ihre Lizenzen, auch wenn keine Codeüberprüfung verwendet wird. Solange du die Anzahl der aktiven Entwickler*innen in deiner Organisation nicht erhöhen möchtest, ist dies in Ordnung. Wenn die Anzahl der aktiven Entwickler*innen in den nächsten Monaten wahrscheinlich ansteigt, könntest du deine Lizenzgrenze überschreiten, sodass du dann {% data variables.product.prodname_GH_advanced_security %} nicht mehr für neu erstellte Repositorys verwenden kannst.
- **Anfängliches hohes Volumen erkannter Geheimnisse**  
  Wenn du die {% data variables.product.prodname_secret_scanning %} für eine große Organisation aktivierst, findest du eine hohe Anzahl an Geheimnissen. Manchmal sind Organisationen damit überfordert, und der Alarm wird ausgelöst. Wenn du die {% data variables.product.prodname_secret_scanning %} für alle Repositorys gleichzeitig aktivieren möchtest, solltest du planen, wie du auf mehrere Warnungen in der Organisation reagieren wirst.

{% data variables.product.prodname_secret_scanning_caps %} können für einzelne Repositorys aktiviert werden. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_secret_scanning %} für deine Repositorys](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories). {% data variables.product.prodname_secret_scanning_caps %} können, wie oben beschrieben, auch für alle Repositorys in deiner Organisation aktiviert werden. Weitere Informationen zum Aktivieren für alle Repositorys findest du unter [Verwalten der Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

### Benutzerdefinierte Muster für die {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %} {% note %}

**Hinweis:** Benutzerdefinierte Muster für {% data variables.product.prodname_secret_scanning %} liegen derzeit in der Betaversion vor und können geändert werden.

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %} erkennen eine große Anzahl an Standardmustern, können jedoch auch so konfiguriert werden, dass sie benutzerdefinierte Muster finden. Dazu gehören z. B. Geheimnisformate, die nur in deiner Infrastruktur zu finden sind, oder von Integratoren verwendet werden, die die {% data variables.product.prodname_secret_scanning %} von {% data variables.product.product_name %} aktuell nicht erkennt. Weitere Informationen zu unterstützten Geheimnissen für Partnermuster findest du unter [Geheimnisüberprüfungsmuster](/code-security/secret-scanning/secret-scanning-patterns). 

Erstelle eine Liste mit Geheimnistypen, wenn du Repositorys überwachst und mit Sicherheits- und Entwicklerteams sprichst, die du später zum Konfigurieren von benutzerdefinierten Mustern für die {% data variables.product.prodname_secret_scanning %} verwenden kannst. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).


{% note %}

Den nächsten Artikel in dieser Reihe findest du unter [Phase 3: Pilotprogramme](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs).

{% endnote %}
