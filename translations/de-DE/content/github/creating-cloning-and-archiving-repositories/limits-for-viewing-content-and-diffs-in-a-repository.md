---
title: Begrenzungen für die Anzeige von Inhalten und Diffs in einem Repository
intro: 'Bestimmte Arten von Ressourcen können ziemlich groß sein, wodurch ihre Verarbeitung auf {% data variables.product.product_name %} sehr aufwendig ist. Daher werden Begrenzungen festgelegt, um sicherzustellen, dass Anforderungen in angemessener Zeit abgeschlossen werden.'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

Die meisten der nachfolgend genannten Begrenzungen gelten sowohl für {% data variables.product.product_name %} als auch für die API.

### Textbeschränkungen

Textdateien mit mehr als **1 MB** werden immer als Nur-Text angezeigt. Die Codesyntax ist nicht hervorgehoben, und Dateien mit Fließtext werden nicht in HTML umgewandelt (z. B. Markdown, AsciiDoc *etc.*).

Textdateien mit mehr als **5 MB** sind nur über ihre rohen URLs verfügbar, die über `{% data variables.product.raw_github_com %}` bereitgestellt werden, beispielsweise `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Klicke auf die Schaltfläche **Raw** (Roh), um die rohe URL einer Datei anzuzeigen.

### Diff-Beschränkungen

Da Diffs sehr groß werden können, gelten Diff-Beschränkungen für Commits, Pull Requests und Vergleichsansichten:

- Die Diff einer einzelnen Datei darf nicht mehr als *20.000 Zeilen, die Du laden kannst*, oder *1 MB* an Diff-Rohdaten umfassen. *400 Zeilen* und *20 KB* werden automatisch für eine einzelne Datei geladen.
- Die Höchstzahl an Dateien in einer einzelnen Diff liegt bei *3.000*.
- Die Höchstzahl an darstellbaren Dateien (wie Grafiken, PDF- und GeoJSON-Dateien) in einer einzelnen Diff liegt bei *25*.

Einige Teile einer eingeschränkten Diff werden möglicherweise angezeigt, aber alles, was über die Begrenzung hinausgeht, wird nicht angezeigt.

### Commit-Listenbeschränkung

Die Vergleichsansicht und die Pull-Request-Seiten zeigen eine Liste mit Commits zwischen den `base`- und `head`-Revisionen. Diese Listen sind auf **250** Commits beschränkt. Wenn diese Grenze überschritten wird, gibt ein Hinweis an, dass weitere Commits vorhanden sind (aber sie werden nicht angezeigt).
