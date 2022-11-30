---
title: Sponsoren und Sponsoring anzeigen
intro: Du kannst detaillierte Informationen und Analysen zu deinen Sponsoren und Förderungen einsehen und exportieren.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134202'
---
## Informationen zu Sponsor*innen und Sponsoring

Du kannst Analysen zu deinen aktuellen und vergangenen Sponsorings einsehen, die Zahlungen, die du von Sponsoren erhalten hast, und Ereignisse, wie beispielsweise Kündigungen oder Sponsoren-Stufenänderungen für deine Sponsorings. Du kannst auch Aktivitäten wie neue Sponsorings oder geänderte und gekündigte Sponsorings ansehen. Du kannst die Liste der Aktivitäten nach Datum filtern. Du kannst die Sponsoring-Daten deines Kontos auch im CSV- oder JSON-Format exportieren.

## Informationen zu Transaktionsmetadaten

Du kannst benutzerdefinierte URLs mit Metadaten für dein {% data variables.product.prodname_sponsors %}-Profil oder deine Bezahlseite verwenden, um nachzuvollziehen, woher deine Sponsor*innen stammen. Die Metadaten sind im Transaktionsexport in der Metadatenspalte enthalten. Weitere Informationen zum Exportieren von Transaktionsdaten findest du unter [Exportieren von Sponsoringdaten](#exporting-your-sponsorship-data).

Metadaten müssen dem `key=value`-Format entsprechen und können am Ende dieser URLs hinzugefügt werden.

- Gesponsertes Kontoprofil: `https://github.com/sponsors/{account}`
- Sponsoringbezahlung: `https://github.com/sponsors/{account}/sponsorships`

Die Metadaten bleiben in der URL erhalten, wenn potenzielle Sponsor*innen das Konto wechseln, über das das Sponsoring erfolgt, und monatliche oder einmalige Zahlungen sowie eine andere Ebene auswählen.

### Syntaxanforderungen

Deine Metadaten müssen die folgenden Anforderungen erfüllen, die nicht für andere übergebene URL-Parameter gelten.

- Den Schlüsseln muss das Präfix `metadata_` vorangestellt werden, z. B. `metadata_campaign`. Im Transaktionsexport wird der `metadata_`-Präfix aus dem Schlüssel entfernt.
- Schlüssel und Werte dürfen nur alphanumerische Werte, Striche oder Unterstriche enthalten. Wenn nicht erlaubte Zeichen in Schlüsseln oder Werten übergeben werden, wird ein 404-Fehler angezeigt.
- Leerzeichen sind nicht zulässig.
- Pro Anforderung sind maximal **10** Schlüssel-Wert-Paare erlaubt. Wenn mehr übergeben werden, werden nur die ersten 10 gespeichert.
- Pro Schlüssel sind maximal **25** Zeichen erlaubt. Wenn mehr übergeben werden, werden nur die ersten 25 gespeichert.
- Pro Wert sind maximal **100** Zeichen erlaubt. Wenn mehr übergeben werden, werden nur die ersten 100 gespeichert.

So kannst du mit `https://github.com/sponsors/{account}?metadata_campaign=myblog` beispielsweise Sponsoring nachverfolgen, das aus deinem Blog hervorgeht. `metadata_campaign` ist der Schlüssel und `myblog` der Wert. In der Metadatenspalte des Transaktionsexports wird der Schlüssel als `campaign` aufgeführt.

## Sponsoren und Sponsoring anzeigen

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Wenn du deine Sponsor*innen nach Ebene filtern möchtest, verwende das Dropdownmenü **Filtern**, klicke auf **Aktive Ebenen** oder **Inaktive Ebenen**, und wähle eine Ebene aus.
  ![Dropdownmenü zum Filtern nach Ebene](/assets/images/help/sponsors/filter-drop-down.png)

## Letzte Sponsoring-Aktivitäten anzeigen

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## Deine Sponsoring-Daten exportieren

Du kannst deine Sponsoringtransaktionen nach Monat exportieren. {% data variables.product.company_short %} sendet Ihnen eine E-Mail mit den Transaktionsdaten aller Sponsor*innen des ausgewählten Monats. Nachdem der Export abgeschlossen ist, kannst du einen weiteren Monat an Daten exportieren. Du kannst bis zu 10 Datensätze pro Stunde für jedes deiner gesponserten Konten exportieren.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. Klicke rechts oben auf {% octicon "download" aria-label="The download icon" %} **Exportieren**.
  ![Schaltfläche "Exportieren"](/assets/images/help/sponsors/export-all.png)
1. Wähle einen Zeitrahmen und ein Format für die Daten aus, die du exportieren möchtest, und klicke dann auf **Export starten**.
  ![Optionen für den Datenexport](/assets/images/help/sponsors/export-your-sponsors.png)
