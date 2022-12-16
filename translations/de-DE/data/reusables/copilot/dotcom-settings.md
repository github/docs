---
ms.openlocfilehash: 224ce401421d3af0e9afa5976695c95ed219a7b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109177"
---
## Konfigurieren von {% data variables.product.prodname_copilot %}-Einstellungen auf {% data variables.product.prodname_dotcom_the_website %}

Sobald du über eine aktive {% data variables.product.prodname_copilot %}-Testversion oder ein Abonnement verfügst, kannst du in den [{% data variables.product.prodname_copilot %}-Einstellungen](https://github.com/settings/copilot) {% data variables.product.prodname_copilot %}-Einstellungen für dein persönliches Konto auf {% data variables.product.prodname_dotcom %} anpassen. Die Einstellungen gelten überall, wo du {% data variables.product.prodname_copilot %} verwendest. Du kannst konfigurieren, welche Vorschläge von {% data variables.product.prodname_copilot %} angeboten werden sollen und wie {% data variables.product.company_short %} deine Telemetriedaten verwenden soll.

## Aktivieren oder Deaktivieren der Duplikaterkennung

{% data variables.product.prodname_copilot %} enthält einen Filter, der Codevorschläge erkennt, die öffentlichem Code auf {% data variables.product.prodname_dotcom %} entsprechen. Du kannst den Filter aktivieren oder deaktivieren. Wenn der Filter aktiviert ist, vergleicht {% data variables.product.prodname_copilot %} Codevorschläge einschließlich des umgebenden Codes von ca. 150 Zeichen mit öffentlichem Code auf {% data variables.product.prodname_dotcom %}. Wenn es eine Übereinstimmung oder Fast-Übereinstimmung gibt, wird der Vorschlag nicht angezeigt.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Wähle unter **Vorschläge, die öffentlichem Code entsprechen** das Dropdownmenü aus, und klicke dann auf **Zulassen**, um Vorschläge, die öffentlichem Code entsprechen, zuzulassen, oder auf **Blockieren**, um Vorschläge, die öffentlichem Code entsprechen, zu blockieren.
  ![Screenshot der Duplikaterkennungsoption](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

## Aktivieren oder Deaktivieren der Telemetrie

Durch Anpassung der Benutzereinstellungen kannst du auswählen, ob deine Codeausschnitte von GitHub für die weitere Verarbeitung und Freigabe durch Microsoft und Open AI gesammelt und aufbewahrt werden sollen. Weitere Informationen zu Daten, die {% data variables.product.prodname_copilot %} in Abhängigkeit von deinen Telemetrieeinstellungen sammeln kann, findest du unter [{% data variables.product.company_short %}-Bedingungen für zusätzliche Produkte und Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) und [{% data variables.product.prodname_copilot %}: Häufig gestellte Fragen zum Datenschutz](https://github.com/features/copilot/#faq-privacy).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. Um die Verwendung deiner Telemetriedaten durch {% data variables.product.prodname_dotcom %} zuzulassen oder zu verhindern, aktiviere oder deaktiviere **{% data variables.product.prodname_dotcom %} die Verwendung meiner Codeausschnitte für Produktverbesserungen erlauben**.
  ![Screenshot der Telemetrieoption](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## Weiterführende Themen

- [Häufig gestellte Fragen zu {% data variables.product.prodname_copilot %}](https://github.com/features/copilot/#faq)
