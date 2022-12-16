---
title: Informationen zu GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} kann dir mit AutoVervollständigen-Vorschlägen bei der Programmierung helfen. Du erfährst, wie {% data variables.product.prodname_copilot %} funktioniert und was bei der Verwendung von {% data variables.product.prodname_copilot %} zu beachten ist.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192778'
---
## Informationen zu {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} ist ein KI-Paarprogrammierer, der während des Programmierens AutoVervollständigen-Vorschlägen anbietet. Du kannst Vorschläge von {% data variables.product.prodname_copilot %} erhalten, indem du entweder beginnst, den gewünschten Code zu schreiben, oder indem du in einem Kommentar in natürlicher Sprache beschreibst, was der Code tun soll. {% data variables.product.prodname_copilot %} analysiert den Kontext in der Datei, die du gerade bearbeitest, sowie in verwandten Dateien, und bietet Vorschläge in deinem Text-Editor an. {% data variables.product.prodname_copilot %} wird von OpenAI Codex unterstützt, einem neuen KI-System, das von OpenAI erstellt wurde.

{% data variables.product.prodname_copilot %} wird für alle Sprachen trainiert, die in öffentlichen Repositorys angezeigt werden. Für jede Sprache hängt die Qualität der Vorschläge, die du erhältst, von der Menge und Vielfalt der Trainingsdaten für diese Sprache ab. JavaScript ist beispielsweise in öffentlichen Repositorys gut vertreten und eine der am besten unterstützten Sprachen von {% data variables.product.prodname_copilot %}. Sprachen mit weniger Präsenz in öffentlichen Repositorys können weniger oder weniger robuste Vorschläge liefern.

{% data variables.product.prodname_copilot %} ist als Erweiterung in Visual Studio Code, Visual Studio, Neovim und der JetBrains-Suite von IDEs verfügbar. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot).

## Verwenden von {% data variables.product.prodname_copilot %}

Du kannst Praxisbeispiele von {% data variables.product.prodname_copilot %} in Aktion sehen. Weitere Informationen findest du auf der [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)-Website. 

{% data variables.product.prodname_copilot %} bietet Vorschläge aus einem Modell, das OpenAI aus Milliarden von Open Source-Codezeilen erstellt hat. Daher kann der Trainingssatz für {% data variables.product.prodname_copilot %} unsichere Codierungsmuster, Fehler oder Verweise auf veraltete APIs oder Idiome enthalten. Wenn {% data variables.product.prodname_copilot %} Vorschläge auf diesen Trainingsdaten basierend erzeugt, können diese Vorschläge auch unerwünschte Muster enthalten. 

Du bist für Sicherheit und Qualität deines Codes verantwortlich. Wenn du von {% data variables.product.prodname_copilot %} generierten Code verwendest, solltest du dieselben Vorsichtsmaßnahmen ergreifen wie beim Verwenden von Code, den du nicht selbst geschrieben hast. Diese Vorsichtsmaßnahmen umfassen strenge Tests, IP-Überprüfungen und Nachverfolgung bezüglich Sicherheitsrisiken. {% data variables.product.company_short %} bietet eine Reihe von Funktionen, die dir bei der Überwachung und Verbesserung der Codequalität helfen, wie {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} und {% data variables.product.prodname_code_scanning %}. Alle diese Features können kostenlos in öffentlichen Repositorys verwendet werden. Weitere Informationen findest du unter [Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions) und [{% data variables.product.company_short %}-Sicherheitsfeatures](/code-security/getting-started/github-security-features).

{% data variables.product.prodname_copilot %} verwendet Filter, um anstößige Wörter in den Eingabeaufforderungen zu blockieren und das Erstellen von Vorschlägen in sensiblen Kontexten zu vermeiden. Wir sind bestrebt, das Filtersystem ständig zu verbessern, um anstößige Vorschläge, die von {% data variables.product.prodname_copilot %} generiert werden, einschließlich voreingenommener, diskriminierender oder missbräuchlicher Ausgaben, intelligenter zu erkennen und zu entfernen. Wenn du einen von {% data variables.product.prodname_copilot %} generierten anstößigen Vorschlag siehst, melde ihn bitte direkt an copilot-safety@github.com, damit wir unsere Sicherheitsvorkehrungen verbessern können. 

## Informationen zur Abrechnung für {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} ist ein kostenpflichtiges Feature, das ein monatliches oder jährliches Abonnement erfordert. {% data variables.product.prodname_copilot %}-Abonnements können über ein persönliches Konto auf {% data variables.product.prodname_dotcom_the_website %} mit {% data variables.product.prodname_copilot_for_individuals %} oder zentral über ein Unternehmenskonto auf {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_copilot_for_business %} bezahlt und verwaltet werden.

Verifizierte Schüler, Lehrer und Betreuer beliebter Open Source-Projekte auf {% data variables.product.prodname_dotcom %} sind berechtigt, {% data variables.product.prodname_copilot_individuals_short %} kostenlos zu verwenden. Wenn du die Kriterien für ein kostenloses {% data variables.product.prodname_copilot_individuals_short %}-Abonnement erfüllst, wirst du automatisch benachrichtigt, wenn du die Abonnementseite für {% data variables.product.prodname_copilot %} besuchst. Wenn du die Kriterien für ein kostenloses {% data variables.product.prodname_copilot_individuals_short %}-Abonnement nicht erfüllst, wird dir eine kostenlose 60-Tage-Testversion angeboten, nach deren Ablauf ein kostenpflichtiges Abonnement für die fortgesetzte Nutzung erforderlich ist. {% data variables.product.prodname_copilot_for_business %} enthält keine kostenlose Testversion. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## Informationen zur Lizenz für das {% data variables.product.prodname_copilot %}-Plug-In in JetBrains-IDEs

{% data variables.product.prodname_dotcom %}, Inc. ist der Lizenzgeber des JetBrains-Plug-Ins. Der Endbenutzerlizenzvertrag für dieses Plug-In sind die [{% data variables.product.prodname_dotcom %}-Bedingungen für zusätzliche Produkte und Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot), und die Nutzung dieses Plug-Ins unterliegt diesen Bedingungen. JetBrains übernimmt keine Verantwortung oder Haftung im Zusammenhang mit dem Plug-In oder dieser Vereinbarung. Durch die Nutzung des Plug-Ins stimmst du den vorstehenden Bedingungen zu.

## Weitere Informationsquellen

- [{% data variables.product.company_short %}-Bedingungen für zusätzliche Produkte und Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot){% ifversion ghec %}
- [Datenschutzerklärung für {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement){% endif %}
