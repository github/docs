---
title: Fehlerbehebung bei Suchabfragen
intro: 'Wenn Ihre Suche auf {% data variables.product.product_name %} zu unerwarteten Ergebnissen führt, ziehen Sie zur Behebung dieser Fehler unsere Informationen zu häufigen Problemen und Einschränkungen der Abfragelänge zu Rate.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
### Mögliche Zeitüberschreitung

Einige Abfragen stellen für unsere Suchinfrastruktur eine außergewöhnlich hohe Rechenlast dar. Damit die Suche aber für jeden Benutzer schnell erfolgt, sehen wir uns gezwungen, der Dauer einer einzelnen Abfrage Grenzen zu setzen. In den sehr seltenen Fällen, in denen eine Abfrage aufgrund einer Zeitüberschreitung abgebrochen wird, gibt die Suche alle Treffer zurück, die bis zum Abbruch gefunden wurden. Gleichzeitig wirst Du über die Zeitüberschreitung informiert.

Das Erreichen des Zeitlimits bedeutet jedoch nicht in jedem Fall, dass die Suchergebnisse unvollständig sind. Es bedeutet lediglich, dass die Abfrage vor der vollständigen Durchsuchung aller zur Verfügung stehenden Daten abgebrochen wurde.

### Einschränkungen der Abfragelänge

Bei der Suche auf {% data variables.product.product_name %} gelten für Abfragen auch Längeneinschränkungen:

* Abfragen mit mehr als 256 Zeichen werden nicht unterstützt.
* Mehr als fünf `AND`-, `OR`- oder `NOT`-Operatoren werden in einer Abfrage nicht unterstützt.

Für bestimmte Arten der Suche, beispielsweise für die Codesuche, gelten unter Umständen weitere Einschränkungen. Nähere Informationen findest Du in der Dokumentation zum jeweiligen Suchtyp.

### Weiterführende Informationen

- „[Informationen zur Suche auf GitHub](/articles/about-searching-on-github)“
