---
title: "Phase\_6: Rollout und Skalierung der Geheimnisüberprüfung"
intro: 'In der letzten Phase konzentrierst du dich auf den Rollout von {% data variables.product.prodname_secret_scanning %}. Der Rollout von {% data variables.product.prodname_secret_scanning_caps %} ist einfacher als der von{% data variables.product.prodname_code_scanning %}, da weniger Konfiguration erforderlich ist. Allerdings ist es wichtig, eine Strategie für den Umgang mit neuen und alten Ergebnissen zu haben.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158757'
---
{% note %}

Dieser Artikel ist Teil einer Reihe zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß. Den vorherigen Artikel in dieser Reihe findest du unter [Phase 5: Rollout und Skalierung der Codeüberprüfung](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning).

{% endnote %}

Du kannst die Geheimnisüberprüfung für einzelne oder alle Repositorys in einer Organisation aktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

In diesem Artikel wird der allgemeine Prozess zur Aktivierung der {% data variables.product.prodname_secret_scanning %} für alle Repositorys in einer Organisation erklärt. Die in diesem Artikel beschriebenen Grundsätze können auch dann umgesetzt werden, wenn du einen gestaffelteren Ansatz für die Aktivierung der {% data variables.product.prodname_secret_scanning %} für einzelne Repositorys wählst. 

### 1. Auf neu committete Geheimnisse konzentrieren

Wenn du die {% data variables.product.prodname_secret_scanning %} aktivierst, solltest du dich darauf konzentrieren, alle neu comitteten Anmeldeinformationen, die bei der Geheimnisüberprüfung entdeckt wurden, zu bereinigen. Wenn du dich darauf konzentrierst, committete Anmeldeinformationen zu bereinigen, könnten Entwickler weiterhin versehentlich neue Anmeldeinformationen pushen. Das bedeutet, dass deine Gesamtanzahl an Geheimnissen in etwa auf demselben Niveau bleibt und nicht wie beabsichtigt abnimmt. Deshalb muss das Kompromittieren neuer Anmeldeinformationen unbedingt verhindert werden, ehe es darum geht, bestehende Geheimnisse zu widerrufen.

Es gibt verschiedene Ansätze, um neu committete Anmeldeinformationen in Angriff zu nehmen, doch eine davon wäre zum Beispiel:

1. **Benachrichtigung**: Verwende Webhooks, um sicherzustellen, dass alle Warnungen zu neuen Geheimnissen so schnell wie möglich an die richtigen Teams weitergeleitet werden. Ein Webhook wird ausgelöst, wenn eine Geheimniswarnung entweder erstellt, behoben oder erneut geöffnet wird. Anschließend kannst du die Nutzdaten des Webhooks analysieren und in die von dir und deinem Team genutzten Tools wie Slack, Teams, Splunk oder E-Mail integrieren. Weitere Informationen findest Du unter [Informationen zu Webhooks](/developers/webhooks-and-events/webhooks/about-webhooks) und [Webhookereignisse und -nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert).
2. **Nachverfolgung**: Richte einen allgemeinen Bereinigungsprozess für alle Geheimnistypen ein. Du kannst dich beispielsweise mit dem Entwickler, der das Geheimnis committet hat, und seinem technischen Leiter für dieses Projekt in Verbindung setzen und sie auf die Gefahren des Committens von Geheimnissen auf GitHub mit der Bitte hinweisen, das erkannte Geheimnis zu widerrufen und zu aktualisieren.

  {% note %}
  
  **Hinweis**: Dieser Schritt kann automatisiert werden. Bei großen Unternehmen und Organisationen mit Hunderten von Repositorys ist eine manuelle Nachverfolgung nicht praktikabel. Du kannst eine Automatisierung in den im ersten Schritt beschriebenen Webhookprozess einführen. Die Nutzdaten des Webhooks enthalten Repository- und Organisationsinformationen zum kompromittieren Geheimnis. Mithilfe dieser Informationen kannst du die aktuellen Maintainer des Repositorys kontaktieren und eine E-Mail/SMS an die verantwortlichen Personen richten oder ein Issue eröffnen.
  
  {% endnote %} 
3. **Schulung**: Erstelle ein internes Schulungsdokument, das dem Entwickler zugewiesen wird, der das Geheimnis committet hat. In diesem Schulungsdokument kannst du die Risiken erklären, die durch das Committen von Geheimnissen entstehen, und sie auf deine bewährten Methoden zur sicheren Verwendung von Geheimnissen in der Entwicklung verweisen. Wenn ein Entwickler nicht aus der Erfahrung lernt und weiterhin Geheimnisse committet, kannst du einen Eskalationsprozess einrichten, aber in der Regel funktioniert eine Schulung wie gewünscht.

Wiederhole die letzten beiden Schritte für alle neuen kompromittierten Geheimnisse. Dieser Prozess ermutigt Entwickler, die Verantwortung für das sichere Verwalten der in ihrem Code verwendeten Geheimnisse zu übernehmen, und ermöglicht es dir, die Reduzierung neu committeter Geheimnisse zu messen.

{% note %}

**Hinweis:** Fortgeschrittene Organisationen möchten ggf. bestimmte Geheimnistypen automatisch bereinigen. Es gibt eine Open-Source-Initiative namens [GitHub Secret Scanner Auto Remediator](https://github.com/NickLiffen/GSSAR), die du in deiner AWS-, Azure- oder GCP-Umgebung bereitstellen und so anpassen kannst, dass bestimmte Geheimnistypen, je nachdem, was du als besonders kritisch definierst, automatisch widerrufen werden. Das ist auch eine hervorragende Möglichkeit, auf neue committete Geheimnisse mit einem automatisierteren Ansatz zu reagieren.

{% endnote %}

### 2. Zuvor committete Geheimnisse beginnend mit dem kritischsten bereinigen

Nachdem du einen Prozess zur Überwachung, Benachrichtigung und Bereinigung neu veröffentlichter Geheimnisse eingerichtet hast, kannst du mit der Arbeit an Geheimnissen beginnen, die vor Einführung von {% data variables.product.prodname_GH_advanced_security %} committet wurden.

Die Definition deiner wichtigsten Geheimnisse hängt von den Prozessen und Integrationen deiner Organisation ab. Ein Unternehmen macht sich z. B. wahrscheinlich keine Gedanken über ein Geheimnis des Typs „Slack Incoming Webhook“, wenn es Slack gar nicht nutzt. Es kann hilfreich sein, sich zunächst auf die fünf kritischsten Typen von Anmeldeinformationen für deine Organisation zu konzentrieren.

Sobald du die Entscheidung über die Geheimnistypen getroffen hast, kannst du Folgendes tun:

1. Einen Prozess zur Bereinigung jedes Geheimnistyps einrichten. Die tatsächlichen Verfahren für die einzelnen Geheimnistypen unterscheiden sich oft erheblich. Notiere den Prozess für jeden Geheimnistyp in einem Dokument oder einer internen Wissensdatenbank.
  
  {% note %}
  
  **Hinweis:** Wenn du den Prozess für den Widerruf von Geheimnissen gestaltest, solltest du versuchen, die Verantwortung für das Widerrufen von Geheimnissen dem Team zu übertragen, das das Repository verwaltet, und nicht einem zentralen Team. Einer der Grundsätze von GHAS ist, dass Entwickler die Verantwortung für Sicherheit übernehmen und für die Behebung von Sicherheitsproblemen zuständig sind, insbesondere wenn sie diese selbst verursacht haben.

  {% endnote %}

2. Wenn du den Prozess eingerichtet hast, den Teams für das Widerrufen von Anmeldeinformationen befolgen sollen, kannst du Informationen über die Geheimnistypen und andere Metadaten, die den kompromittierten Geheimnissen zuzuordnen sind, zusammentragen, damit du erkennen kannst, wen du über den neuen Prozess informieren musst.
  
  {% ifversion not ghae %}
  
  Du kannst diese Informationen in der Sicherheitsübersicht sammeln. Weitere Informationen zur Sicherheitsübersicht findest du unter [Filtern von Warnungen in Sicherheitsübersichten](/code-security/security-overview/filtering-alerts-in-the-security-overview).
  
  {% endif %}
  
  Folgende Informationen möchtest du möglicherweise sammeln:
  
    - Organization
    - Repository
    - Geheimnistyp
    - Geheimniswert
    - Maintainer des Repositorys zur Kontaktaufnahme
  
  {% note %}
  
  **Hinweis**: Nutze die Benutzeroberfläche, wenn es wenige kompromittierte Geheimnisse dieses Typs gibt. Wenn es Hunderte kompromittierter Geheimnisse gibt, kannst du die Informationen mithilfe der API sammeln. Weitere Informationen findest du unter [REST-API für die Geheimnisüberprüfung](/rest/reference/secret-scanning).
    
  {% endnote %}

3. Nachdem du Informationen über kompromittierte Geheimnisse gesammelt hast, erstelle einen zielgerichteten Kommunikationsplan für die Benutzer, die die Repositorys mit den jeweiligen Geheimnistypen betreuen. Du kannst eine E-Mail oder SMS senden oder auch ein GitHub-Issue in den betroffenen Repositorys einrichten. Wenn du die von diesen Tools zur Verfügung gestellten APIs nutzen kannst, um die Mitteilungen automatisch zu senden, wird die Skalierung für mehrere Geheimnistypen einfacher.

### 3. Das Programm um weitere Geheimnistypen und benutzerdefinierte Muster erweitern

Du kannst jetzt über die fünf kritischsten Geheimnistypen hinaus eine umfassendere Liste erstellen, und zwar mit einem zusätzlichen Schwerpunkt auf Schulung. Du kannst den vorherigen Schritt wiederholen und zuvor committete Geheimnisse für die verschiedenen anvisierten Geheimnistypen bereinigen.

Du kannst auch weitere der benutzerdefinierten Muster einbeziehen, die in den früheren Phasen gesammelt wurden, und Sicherheits- und Entwicklerteams einladen, weitere Muster zu übermitteln, indem du einen Prozess zur Übermittlung neuer Muster einrichtest, sobald neue Geheimnistypen erstellt werden. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).

{% ifversion secret-scanning-push-protection %}

Du kannst auch mit der Geheimnisüberprüfung auch einen Pushschutz aktivieren. Sobald die Geheimnisüberprüfung aktiviert ist, werden Pushes für hoch vertrauliche Geheimnisse geprüft und blockiert. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line).

{% endif %}

Während du deine Prozesse zur Bereinigung anderer Geheimnistypen weiterentwickelst, solltest du damit beginnen, proaktive Schulungsmaterialien zu erstellen, die in deiner Organisation für alle GitHub-Entwickler freigegeben werden können. Bis zu diesem Zeitpunkt lag der Schwerpunkt vor allem auf der Reaktion. Es ist eine ausgezeichnete Idee, den Fokus auf Proaktivität zu verlagern und Entwickler dazu zu ermutigen, Anmeldeinformationen gar nicht erst auf GitHub zu pushen. Dies kann auf verschiedene Weise geschehen, aber die Erstellung eines kurzen Dokuments, in dem die Risiken und Gründe erläutert werden, wäre ein guter Anfang.

{% note %}

Dies ist der letzte Artikel einer Reihe zum Einführen von {% data variables.product.prodname_GH_advanced_security %} nach Maß. Wenn du Fragen hast oder Unterstützung benötigst, lies den Abschnitt zu {% data variables.contact.github_support %} und {% data variables.product.prodname_professional_services_team %} in [Informationen zur Einführung von {% data variables.product.prodname_GH_advanced_security %} nach Maß](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services).

{% endnote %}
