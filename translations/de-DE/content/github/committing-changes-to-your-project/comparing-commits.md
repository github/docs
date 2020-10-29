---
title: Commits vergleichen
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst den Status Deines Repositorys über Branches, Tags, Commits und Daten hinweg vergleichen. Um verschiedene Versionen Deines Repositorys zu vergleichen, füge `/compare` (vergleichen) zum Pfad Deines Repository hinzu.

Um die Leistungsfähigkeit der Vergleichsfunktion zu demonstrieren, sehen wir uns die Vergleichsseite für [einen Fork des Linguist-Repositorys](https://github.com/octocat/linguist) an, der unter [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master) zu finden ist.

Jede Vergleichsansicht eines Repositorys enthält zwei Dropdownmenüs: `base` (Basis) und `compare` (Vergleichen).

Dabei sollte `base` der Ausgangspunkt des Vergleichs sein, `compare` der Endpunkt. Während eines Vergleichs kannst Du die Anfangs- und Endpunkte `base` und `compare` jederzeit ändern, indem Du auf **Edit** (Bearbeiten) klickst.

### Branches vergleichen

Am häufigsten kommt die Vergleichsfunktion „Compare" beim Vergleich von Branches zum Einsatz, beispielsweise, wenn Du einen neuen Pull Request erstellst. Du wirst immer zur Branch-Vergleichsansicht weitergeleitet, wenn du [einen neuen Pull Request](/articles/creating-a-pull-request) startest.

Um Branches zu vergleichen, wähle oben auf der Seite im Dropdownmenü `compare` (Vergleichen) den Namen eines Branches aus.

Hier siehst Du ein Beispiel für einen [Vergleich zwischen zwei Branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

### Tags vergleichen

Ein Vergleich der Release-Tags zeigt Dir die Änderungen an Deinem Repository seit dem letzten Release. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} For more information, see "[Comparing releases](/github/administering-a-repository/comparing-releases)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}To compare tags, you can select a tag name from the `compare` drop-down menu at the top of the page.{% else %} Instead of typing a branch name, type the name of your tag in the `compare` drop down menu.{% endif %}

Hier siehst Du ein Beispiel für einen [Vergleich zwischen zwei Tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

### Commits vergleichen

Du kannst auch zwei beliebige Commits in Deinem Repository oder seinen Forks auf {% data variables.product.prodname_dotcom %} mit einem Two-Dot-Diff vergleichen.

Um schnell zwei Commits oder Git Object-IDs (OIDs) direkt miteinander in einem Two-Dot-Diff auf {% data variables.product.prodname_dotcom %} zu vergleichen, bearbeite die URL der Seite „Comparing changes“ (Änderungen vergleichen) Deines Repositorys.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Weitere Informationen zu anderen Vergleichsoptionen findest Du unter „[Three-Dot-Diff- und Two-Dot-Diff-Vergleiche](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).“

### Zwischen Forks vergleichen

Du kannst Dein Basis-Repository und jedes geforkte Repository vergleichen. Diese Ansicht wird gezeigt, wenn ein Benutzer einen Pull Request für ein Projekt ausführt.

Um Branches aus verschiedenen Repositorys zu vergleichen, stellen Sie den Branchnamen Benutzernamen voran. Wenn Du beispielsweise `octocat:master` für `base` und `octo-org:master` für `compare` festlegst, kannst Du den `master`-Branch der Repositorys vergleichen, die `octocat` respektive `octo-org` gehören.

Hier siehst Du ein Beispiel für einen [Vergleich zwischen zwei Repositorys](https://github.com/octocat/linguist/compare/master...octo-org:master).

### Vergleiche zwischen Commits

Als Kürzel verwendet Git die Notation `^`, die „einen Commit zuvor“ bedeutet.

Mit dieser Notation kannst Du einen einzelnen Commit oder Branch mit seinem unmittelbaren Vorgänger vergleichen. Beispielsweise bedeutet `96d29b7^^^^^` fünf Commits vor `96d29b7`, da fünf `^`-Zeichen enthalten sind. Bei der Eingabe von `96d29b7^^^^^` im `base`-Branch und `96d29b7` im `compare`-Branch werden die fünf Commits, die vor `96d29b7` vorgenommen wurden, mit dem Commit `96d29b7` verglichen.

Hier siehst Du ein Beispiel für einen [Vergleich mit der `^`-Notation](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

### Weiterführende Informationen

- „[Den Basis-Branch eines Pull Requests ändern](/articles/changing-the-base-branch-of-a-pull-request)“
