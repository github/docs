---
title: CSV- und TSV-Daten rendern
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

GitHub unterstützt das Rendering von Tabellendaten in den Formaten *.csv* (kommagetrennt) und *.tsv* (tabulatorgetrennt).

![Beispiel für eine gerenderte CSV-Datei](/assets/images/help/repository/rendered_csv.png)

In der Anzeige wird jede _CSV_- oder _TSV_-Datei, die in einem {% data variables.product.product_name %}-Repository festgeschrieben ist, automatisch als interaktive Tabelle mit Kopfzeile und Zeilennummerierung wiedergegeben. Standardmäßig wird davon ausgegangen, dass die erste Zeile die Kopfzeile mit den Spaltenüberschriften ist.

Durch Klicken auf die Zeilennummer kannst Du eine bestimmte Zeile verknüpfen, oder durch drücken der Umschalttaste mehrere Zeilen auswählen. Kopiere einfach die URL, und sende sie einem anderen Benutzer.

### Daten durchsuchen

Wenn Du in Deinem Datensatz einen bestimmten Wert suchst, gib einfach den Anfang des gesuchten Werts in die Suchleiste über der Datei ein. The rows will filter automatically:

![Suche nach Werten](/assets/images/help/repository/searching_csvs.gif)

### Fehlerbehandlung

Gelegentlich wird eine CSV- oder TSV-Datei nicht korrekt dargestellt. In diesem Fall wird unter dem Rohtext eine Fehlermeldung mit einem Hinweis auf die Fehlerursache angezeigt.

![Fehlermeldung beim Rendern einer CSV-Datei](/assets/images/help/repository/csv_render_error.png)

Die folgenden Fehler kommen häufig vor:

* Die Zeilen enthalten nicht die gleiche Anzahl an Spalten. Jede Zeile muss die gleiche Anzahl an Trennzeichen enthalten, selbst wenn eine Zelle leer bleibt.
* Das Dateigrößenlimit wurde überschritten. Das Rendering funktioniert nur bei Dateien mit einer Größe von bis zu 512 KB. Das Rendering größerer Dateien würde den Browser verlangsamen.
