---
title: Migrieren deines Unternehmens zu GitHub Actions
shortTitle: Migrate to Actions
intro: 'Hier erfährst du, wie du eine Migration deines Unternehmens von einem anderen Anbieter zu {% data variables.product.prodname_actions %} planst.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 332d8af7f1087626509a9c72751882ea11f3072f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160302'
---
## Informationen zu Unternehmensmigrationen zu {% data variables.product.prodname_actions %}

Um dein Unternehmen zu aus einem vorhandenen System zu {% data variables.product.prodname_actions %} zu migrieren, kannst du die Migration planen, die Migration abschließen und vorhandene Systeme beenden.

In diesem Leitfaden werden bestimmte Überlegungen zu Migrationen behandelt. Weitere Informationen zur Einführung von {% data variables.product.prodname_actions %} in dein Unternehmen findest du unter "[Einführen von {% data variables.product.prodname_actions %} in dein Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

## Planen der Migration

Bevor du mit der Migration deines Unternehmens zu {% data variables.product.prodname_actions %} beginnst, solltest du ermitteln, welche Workflows migriert werden und wie diese Migrationen sich auf deine Teams auswirken, und planen, wie und wann du die Migrationen abschließt.

### Nutzen von Migrationsexperten

{% data variables.product.company_short %} können Dir bei der Migration helfen, und du kannst auch von einem Kauf von {% data variables.product.prodname_professional_services %} profitieren. Weitere Informationen erhältst du von deinem dedizierten Vertreter oder {% data variables.contact.contact_enterprise_sales %}.

### Identifizieren und Inventarisieren von Migrationszielen

Bevor du zu {% data variables.product.prodname_actions %} migrieren kannst, musst du über ein vollständiges Verständnis der Workflows verfügen, die von deinem Unternehmen im vorhandenen System verwendet werden.

Erstelle zunächst ein Inventar der vorhandenen Build- und Release-Workflows innerhalb deines Unternehmens, sammele Informationen darüber, welche Workflows aktiv verwendet werden und migriert werden müssen und welche zurückgelassen werden können.

Lerne als Nächstes die Unterschiede zwischen deinem aktuellen Anbieter und {% data variables.product.prodname_actions %} kennen. Dadurch kannst du etwaige Probleme bei der Migration jedes Workflows bewerten und wo sich dein Unternehmen möglicherweise in den Features unterscheidet. Weitere Informationen findest du unter [Migrieren zu {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions).

Mit diesen Informationen kannst du bestimmen, welche Workflows du zu {% data variables.product.prodname_actions %} migrieren kannst und möchtest.

### Ermitteln der Auswirkungen von Migrationen auf das Team

Wenn du die Tools änderst, die in deinem Unternehmen verwendet werden, beeinflusst Du, wie dein Team funktioniert. Du musst berücksichtigen, wie ein Workflow von deinen vorhandenen Systemen in {% data variables.product.prodname_actions %} sich auf die tägliche Arbeit deiner Entwickler auswirkt.

Identifiziere alle Prozesse, Integrationen und Tools von Drittanbietern, die von der Migration betroffen sind, und plane alle Updates, die du vornehmen musst.

Berücksichtige, wie sich die Migration möglicherweise auf deine Compliance auswirkt. Werden beispielsweise deine vorhandenen Anmeldeinformations-Scan- und Sicherheitsanalysetools mit {% data variables.product.prodname_actions %} funktionieren, oder musst du neue Tools verwenden?

Identifiziere die Gates und die Prüfungen in deinem vorhandenen System, und überprüfe, ob du sie mit {% data variables.product.prodname_actions %} implementieren kannst.

### Identifizieren und Überprüfen von Migrationstools

Automatisierte Migrationstools können die Workflows deines Unternehmens aus der Syntax des vorhandenen Systems in die Syntax übersetzen, die für {% data variables.product.prodname_actions %} erforderlich ist. Identifiziere das Drittanbietertool oder wende Dich an deinen dedizierten Vertreter oder {% data variables.contact.contact_enterprise_sales %}, um nach Tools zu fragen, die {% data variables.product.company_short %} bereitstellen kann. Du kannst beispielsweise {% data variables.product.prodname_actions_importer %} verwenden, um deine CI-Pipelines zu planen, auszurichten und aus verschiedenen unterstützten Diensten zu {% data variables.product.prodname_actions %} zu migrieren. Weitere Informationen findest du unter [Automatisieren der Migration mit {% data variables.product.prodname_actions_importer %}](/actions/migrating-to-github-actions/automating-migration-with-github-actions-importer).

Nachdem du ein Tool zum Automatisieren deiner Migrationen identifiziert hast, überprüfe das Tool, indem du das Tool in einigen Testworkflows ausführst und überprüfst, ob die Ergebnisse wie erwartet ausfallen.

Automatisierte Tools sollten in der Lage sein, die meisten deiner Workflows zu migrieren, aber wahrscheinlich musst du mindestens einen kleinen Prozentsatz manuell neu schreiben. Schätze ein, wie viel Arbeit du manuell wirst ausführen müssen.

### Entscheiden über einen Migrationsansatz

Bestimme den Migrationsansatz, der am besten für dein Unternehmen funktioniert. Kleinere Teams können all ihre Workflows mit einem "Rip-and-replace"-Ansatz gleichzeitig migrieren. Für größere Unternehmen ist ein iterativer Ansatz wohl realistischer. Du kannst festlegen, dass die gesamte Migration zentral verwaltet wird, oder du kannst einzelne Teams bitten, selber tätig zu werden und ihre eigenen Workflows zu migrieren.

Wir empfehlen einen iterativen Ansatz, der aktive Verwaltung mit Eigenverantwortung kombiniert. Beginne mit einer kleinen Gruppe von Early Adopters, die als interne Experten fungieren können. Identifiziere eine Handvoll Workflows, die so umfassend sind, dass sie dein Unternehmen in seiner gesamten Breite darstellen. Arbeite mit deinen Early Adopters zusammen, um diese Workflows zu {% data variables.product.prodname_actions %} zu migrieren und wiederhole den Vorgang bei Bedarf. So können andere Teams darauf vertrauen, dass ihre Workflows ebenfalls migriert werden können.

Stelle dann {% data variables.product.prodname_actions %} deiner erweiterten Organisation zur Verfügung. Stelle Ressourcen bereit, mit denen diese Teams ihre eigenen Workflows zu {% data variables.product.prodname_actions %} migrieren können, und informiere die Teams, wenn die vorhandenen Systeme eingestellt werden. 

Informiere schließlich alle Teams, die deine alten Systeme weiterhin verwenden, damit sie ihre Migrationen innerhalb eines bestimmten zeitlichen Rahmens abschließen. Du kannst auf die Erfolge anderer Teams verweisen, um ihnen zu versichern, dass die Migration möglich und wünschenswert ist.

### Definieren des Migrationsplans

Nachdem du Dich für einen Migrationsansatz entschieden hast, erstelle einen Zeitplan, der angibt, wann deine einzelnen Teams ihre Workflows zu {% data variables.product.prodname_actions %} migrieren.

Wähle zunächst das Datum aus, an dem deine Migration abgeschlossen sein soll. Du kannst z. B. planen, die Migration bis zu dem Zeitpunkt abzuschließen, zu dem dein Vertrag mit deinem aktuellen Anbieter endet.

Erstelle dann gemeinsam mit deinen Teams einen Zeitplan, bei dem dein Termin eingehalten wird, ohne dass die Teams ihre Ziele hierfür opfern müssen. Schaue Dir den Rhythmus deines Unternehmens und die Arbeitslast jedes einzelnen Teams an, das du migrieren möchtest. Sprich Dich mit den einzelnen Teams ab, damit du ihre Lieferpläne kennst, und erstelle einen Plan, mit dem das jeweilige Team seine Workflows zu einem Zeitpunkt migrieren kann, der nicht mit ihrer Fähigkeit zu liefern kollidiert.

## Migrieren zu {% data variables.product.prodname_actions %}

Wenn du bereit bist, die Migration zu starten, übersetze deine vorhandenen Workflows mithilfe der automatisierten Tools und der oben geplanten manuellen Umschreibung in {% data variables.product.prodname_actions %}.

Möglicherweise möchtest du auch alte Buildartefakte aus deinem vorhandenen System beibehalten, vielleicht indem du einen skriptgesteuerten Prozess zum Archivieren der Artefakte schreibst.

## Stilllegen vorhandener Systeme

Nach Abschluss der Migration kannst du Dir über die Stilllegung deines vorhandenen Systems Gedanken machen.

Möglicherweise möchtest du beide Systeme für einen bestimmten Zeitraum parallel ausführen, während du überprüfst, ob deine {% data variables.product.prodname_actions %}-Konfiguration stabil ist, ohne dass die Benutzererfahrung für Entwickler beeinträchtigt wird.

Schließlich deaktiviere die alten Systeme und stelle sicher, dass niemand in deinem Unternehmen die alten Systeme wieder aktivieren kann.
