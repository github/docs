---
title: Informationen zu GitHub Copilot-Telemetrie
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148756"
---
## <a name="what-data-is-collected"></a>Welche Daten werden gesammelt?

Die gesammelten Daten werden in den [{% data variables.product.prodname_copilot %}-Telemetriebedingungen](/github/copilot/github-copilot-telemetry-terms) beschrieben. Darüber hinaus sammelt die {% data variables.product.prodname_copilot %}-Erweiterung/das Plugin Aktivitäten aus der integrierten Entwicklungsumgebung (Integrated Development Environment, IDE) des Benutzers, verbunden mit einem Zeitstempel, sowie Metadaten, die vom Telemetriepaket der Erweiterung/des Plugins erfasst werden. Bei Verwendung mit {% data variables.product.prodname_vscode %}, IntelliJ, NeoVIM oder anderen IDEs sammelt {% data variables.product.prodname_copilot %} die von diesen IDEs bereitgestellten Standardmetadaten. 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>Verwendung der Daten durch {% data variables.product.company_short %}

{% data variables.product.company_short %} verwendet diese Daten für:

- Direkte Verbesserung des Produkts, einschließlich Bewertung verschiedener Strategien bei der Verarbeitung und Vorhersagen, welche Vorschläge Benutzer hilfreich finden könnten.
- Bewerten des Produkts, z. B. durch Messung der positiven Auswirkungen auf den Benutzer.
- Verbessern der zugrunde liegenden Codegenerierungsmodelle, z. B. durch Bereitstellen positiver und negativer Beispiele (aber immer so, dass dein privater Code nicht als Eingabe verwendet wird, um Code für andere Benutzer von {% data variables.product.prodname_copilot %}) vorzuschlagen.
- Leitung eng zusammenhängender {% data variables.product.company_short %}-Produkte
- Untersuchen und Erkennen potenziellen Missbrauchs des {% data variables.product.prodname_copilot %}-Diensts
- Weitere Zwecke im Zusammenhang mit der Verbesserung des {% data variables.product.prodname_copilot %}-Diensts, einschließlich der Freigabe, wie im nächsten Abschnitt beschrieben

## <a name="how-the-data-is-shared"></a>Freigabe der Daten

Die Telemetriedaten werden sicher auf {% data variables.product.company_short %}-Systemen gespeichert, wobei die entsprechende Verschlüsselung erfolgt. Wir wissen, dass Benutzerbearbeitungsaktionen, Quellcodeausschnitte und URLs von Repositorys und Dateipfaden vertrauliche Daten sind. Folglich wird der Zugang streng kontrolliert. Zugriff auf die Daten haben nur (1) benannte {% data variables.product.company_short %}-Mitarbeiter (Angestellte und Auftragnehmer), die im {% data variables.product.prodname_copilot %}-Team oder im {% data variables.product.company_short %}-Plattformintegritätsteam tätig sind, (2) Microsoft-Mitarbeiter (Angestellte und Auftragnehmer), die im oder mit dem Azure- und/oder {% data variables.product.prodname_copilot %}-Team tätig sind, und (3) Mitarbeiter von OpenAI, die an {% data variables.product.prodname_copilot %} arbeiten.

