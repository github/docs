---
title: Ein Repository lizenzieren
intro: 'Öffentliche Repositorys auf GitHub werden häufig zur Freigabe von Open-Source-Software genutzt. Damit Dein Repository wirklich Open Source ist, musst Du es lizenzieren, damit andere die Software kostenlos nutzen, verändern und verteilen können.'
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Repositories
---
  ### Die richtige Lizenz auswählen

Wir haben [choosealicense.com](https://choosealicense.com) erstellt, um Dich bei der Lizenzierung Deines Codes zu unterstützen. Eine Softwarelizenz informiert andere Benutzer darüber, was sie mit Deinem Quellcode machen dürfen und was nicht. Eine durchdachte Entscheidung ist also sehr wichtig.

Du bist nicht dazu verpflichtet, eine Lizenz auszuwählen. Bedenke jedoch, dass ohne Lizenz das standardmäßige Urheberrecht gilt – Du behältst also alle Rechte an Deinem Quellcode, und niemand darf den Code reproduzieren, verteilen oder abgeleitete Werke davon erstellen. Wenn Du ein Open-Source-Projekt erstellst, empfehlen wir Dir, eine Open-Source-Lizenz anzuwenden. Der [Open Source Guide](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) bietet zusätzliche Hilfestellung bei der Auswahl der richtigen Lizenz für Ihr Projekt.

{% note %}

**Note:** If you publish your source code in a public repository on {% data variables.product.product_name %}, {% if currentVersion == "free-pro-team@latest" %}according to the [Terms of Service](/articles/github-terms-of-service), {% endif %}other users of {% data variables.product.product_location %} have the right to view and fork your repository. If you have already created a repository and no longer want users to have access to the repository, you can make the repository private. When you change the visibility of a repository to private, existing forks or local copies created by other users will still exist. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility).“

{% endnote %}

### Den Speicherort der Lizenz festlegen

Most people place their license text in a file named `LICENSE.txt` (or `LICENSE.md` or `LICENSE.rst`) in the root of the repository; [here's an example from Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Bei manchen Projekten finden sich Informationen zur Lizenz in der README-Datei. Beispielsweise kann die README-Datei eines Projekts den Hinweis „This project is licensed under the terms of the MIT license“ (Dieses Projekt ist gemäß den Bedingungen der MIT-Lizenz lizenziert) enthalten.

Als Best Practice empfehlen wir Dir, die Lizenzdatei zu Deinem Projekt hinzuzufügen.

### GitHub nach Lizenztyp durchsuchen

Du kannst Repositorys basierend auf ihrer Lizenz oder Lizenzfamilie filtern. Verwende dazu den Qualifizierer `license` und das exakte Lizenz-Stichwort:

| Lizenz | Lizenz-Stichwort                                                                              |
| ------ | --------------------------------------------------------------------------------------------- |
|        | Academic Free License v3.0 | `afl-3.0`                                                        |
|        | Apache-Lizenz 2.0 | `apache-2.0`                                                              |
|        | Artistic License 2.0 | `artistic-2.0`                                                         |
|        | Boost Software License 1.0 | `bsl-1.0`                                                        |
|        | FreeBSD-Lizenz (2-Klausel-BSD) | `bsd-2-clause`                                               |
|        | BSD-Lizenz (3-Klausel-BSD) | `bsd-3-clause`                                                   |
|        | BSD-Lizenz (3-Klausel-Clear-BSD) | `bsd-3-clause-clear`                                       |
|        | Creative Commons-Lizenzfamilie | `cc`                                                         |
|        | Creative Commons CC0 1.0 Universell | `cc0-1.0`                                               |
|        | Creative Commons Namensnennung 4.0 | `cc-by-4.0`                                              |
|        | Creative Commons Namensnennung und Weitergabe unter gleichen Bedingungen 4.0 | `cc-by-sa-4.0` |
|        | WTFPL-Lizenz (Do What The F*ck You Want To Public License) | `wtfpl`                          |
|        | Educational Community License v2.0 | `ecl-2.0`                                                |
|        | Eclipse Public License 1.0 | `epl-1.0`                                                        |
|        | Eclipse Public License 2.0 | `epl-2.0`                                                        |
|        | European Union Public License 1.1 | `eupl-1.1`                                                |
|        | GNU Affero General Public License v3.0 | `agpl-3.0`                                           |
|        | GNU General Public License (GPL)-Lizenzfamilie | `gpl`                                        |
|        | GNU General Public License v2.0 | `gpl-2.0`                                                   |
|        | GNU General Public License v3.0 | `gpl-3.0`                                                   |
|        | GNU Lesser General Public License (LGPL)-Lizenzfamilie | `lgpl`                               |
|        | GNU Lesser General Public License v2.1 | `lgpl-2.1`                                           |
|        | GNU Lesser General Public License v3.0 | `lgpl-3.0`                                           |
|        | ISC | `isc`                                                                                   |
|        | LaTeX Project Public License v1.3c | `lppl-1.3c`                                              |
|        | Microsoft Public License | `ms-pl`                                                            |
|        | MIT | `mit`                                                                                   |
|        | Mozilla Public License 2.0 | `mpl-2.0`                                                        |
|        | Open Software License 3.0 | `osl-3.0`                                                         |
|        | PostgreSQL License | `postgresql`                                                             |
|        | SIL Open Font License 1.1 | `ofl-1.1`                                                         |
|        | University of Illinois/NCSA Open Source License | `ncsa`                                      |
|        | Unlicense | `unlicense`                                                                       |
|        | zLib License | `zlib`                                                                         |

Wenn Du nach einer Lizenz einer Familie suchst, enthalten die Suchergebnisse alle Lizenzen dieser Familie. Wenn Du beispielsweise die Abfrage `license:gpl` verwendest, enthalten die Suchergebnisse Repositorys, die unter der GNU General Public License v2.0 und der GNU General Public License v3.0 lizenziert sind. Weitere Informationen findest Du unter „[Nach Repositorys suchen](/articles/searching-for-repositories/#search-by-license).“

### Eine Lizenz erkennen

[Das Open-Source-Ruby-Gem Licensee](https://github.com/licensee/licensee) vergleicht die *LICENSE*-Datei des Repositorys mit einer kurzen Liste bekannter Lizenzen. Licensee stellt außerdem die [Licenses-API](/rest/reference/licenses) bereit und [bietet Einblicke in die Lizenzierung von Repositorys auf {% data variables.product.product_name %}](https://github.com/blog/1964-open-source-license-usage-on-github-com). Wenn Dein Repository eine Lizenz verwendet, die nicht auf der [Website „Choose a License“](https://choosealicense.com/appendix/) (eine Lizenz auswählen) aufgeführt ist, kannst Du [das Hinzufügen einer Lizenz fordern](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Wenn Dein Repository eine Lizenz verwendet, die auf der Website „Choose a License“ (Wähle eine Lizenz) aufgeführt ist, und die Lizenz nicht deutlich sichtbar oben auf der Repository-Seite angezeigt wird, enthält das Repository möglicherweise mehrere Lizenzen oder es liegt eine andere Komplexität vor. Damit Deine Lizenz erkannt wird, vereinfache Deine *LICENSE*-Datei und notiere die Komplexität an anderer Stelle, beispielsweise in der *README*-Datei Deines Repositorys.

### Eine Lizenz auf ein Repository mit vorhandener Lizenz anwenden

Die Lizenzauswahl ist nur verfügbar, wenn Du auf GitHub ein neues Projekt erstellst. Du kannst manuell eine Lizenz über den Browser hinzufügen. Weitere Informationen zum Hinzufügen einer Lizenz zu einem Repository findest Du unter „[Eine Lizenz zu einem Repository hinzufügen](/articles/adding-a-license-to-a-repository).“

![Screenshot der Lizenzauswahl auf GitHub.com](/assets/images/help/repository/repository-license-picker.png)

### Haftungsausschluss

Das Ziel der Bemühungen von GitHub zur Open-Source-Lizenzierung ist es, Dir einen Ausgangspunkt für eine fundierte Entscheidung zu geben. GitHub zeigt Lizenzinformationen an, um Benutzer über Open-Source-Lizenzen und die Projekte, bei denen diese Lizenzen verwendet werden, zu informieren. Wir hoffen, dass wir Dir damit helfen. Bedenke aber bitte, dass wir keine Juristen sind und wie alle Menschen Fehler machen können. Aus diesem Grund stellt GitHub die Informationen ohne Gewähr bereit und übernimmt keine Zusicherungen im Hinblick auf alle auf oder über GitHub bereitgestellten Informationen und Lizenzen. Außerdem lehnt GitHub jegliche Haftung für Schäden ab, die sich aus der Nutzung der Lizenzinformationen ergeben. Wenn Du Fragen hinsichtlich der richtigen Lizenz für Deinen Code oder andere damit verbundene rechtliche Probleme hast, empfehlen wir, juristische Unterstützung einzuholen.

### Weiterführende Informationen

- Der Abschnitt „[The Legal Side of Open Source](https://opensource.guide/legal/)“ (Die rechtlichen Aspekte von Open Source) in den Open-Source-Leitfäden{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
