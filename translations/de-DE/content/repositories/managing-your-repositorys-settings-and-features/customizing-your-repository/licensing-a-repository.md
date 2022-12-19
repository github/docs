---
title: Ein Repository lizenzieren
intro: 'Öffentliche Repositorys auf GitHub werden häufig zur Freigabe von Open-Source-Software genutzt. Damit Dein Repository wirklich Open Source ist, musst Du es lizenzieren, damit andere die Software kostenlos nutzen, verändern und verteilen können.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f49dad5c20909647b1d7da7bb44a80a771337966
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881796'
---
## Die richtige Lizenz auswählen

Wir haben [choosealicense.com](https://choosealicense.com) erstellt, damit Du weißt, wie Du Deinen Code lizenzierst. Eine Softwarelizenz informiert andere Benutzer darüber, was sie mit Deinem Quellcode machen dürfen und was nicht. Eine durchdachte Entscheidung ist also sehr wichtig.

Du bist nicht dazu verpflichtet, eine Lizenz auszuwählen. Bedenke jedoch, dass ohne Lizenz das standardmäßige Urheberrecht gilt – Du behältst also alle Rechte an Deinem Quellcode, und niemand darf den Code reproduzieren, verteilen oder abgeleitete Werke davon erstellen. Wenn Du ein Open-Source-Projekt erstellst, empfehlen wir Dir, eine Open-Source-Lizenz anzuwenden. Der [Open Source-Leitfaden](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) enthält zusätzliche Anleitungen zum Auswählen der richtigen Lizenz für Dein Projekt.

{% note %}

**Hinweis:** Wenn Du Deinen Quellcode in einem öffentlichen Repository auf {% data variables.product.product_name %} {% ifversion fpt or ghec %}gemäß den [Nutzungsbedingungen](/free-pro-team@latest/github/site-policy/github-terms-of-service) veröffentlichst, {% endif %}sind andere Benutzer von {% data variables.product.product_location %} berechtigt, Dein Repository anzuzeigen und zu forken. Wenn Du bereits ein Repository erstellt hast und nicht mehr möchtest, dass andere Benutzer darauf zugreifen, kannst Du festlegen, dass das Repository privat ist. Wenn Du die Sichtbarkeit eines Repository in privat änderst, bleiben vorhandene Forks oder lokale Kopien bestehen, die andere Benutzer erstellt haben. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/github/administering-a-repository/setting-repository-visibility).

{% endnote %}

## Den Speicherort der Lizenz festlegen

Die meisten Personen platzieren ihren Lizenztext in einer Datei mit dem Namen `LICENSE.txt` (oder `LICENSE.md` oder `LICENSE.rst`) im Stammverzeichnis des Repositorys; [hier ein Beispiel aus Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Bei manchen Projekten finden sich Informationen zur Lizenz in der README-Datei. Beispielsweise kann die README-Datei eines Projekts den Hinweis „This project is licensed under the terms of the MIT license“ (Dieses Projekt ist gemäß den Bedingungen der MIT-Lizenz lizenziert) enthalten.

Als Best Practice empfehlen wir Dir, die Lizenzdatei zu Deinem Projekt hinzuzufügen.

## GitHub nach Lizenztyp durchsuchen

Du kannst Repositorys basierend auf ihrer Lizenz oder Lizenzfamilie filtern. Verwende dazu den Qualifizierer `license` und das exakte Lizenzschlüsselwort:

Lizenz | Lizenz-Stichwort
---  | ---
| Academic Free License v3.0 | `afl-3.0` |
| Apache license 2.0 | `apache-2.0` |
| Artistic license 2.0 | `artistic-2.0` |
| Boost Software License 1.0 | `bsl-1.0` |
| BSD 2-clause "Simplified" license | `bsd-2-clause` |
| BSD 3-clause "New" or "Revised" license | `bsd-3-clause` |
| BSD 3-clause Clear license | `bsd-3-clause-clear` |
| Creative Commons-Lizenzfamilie | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Creative Commons Attribution 4.0 | `cc-by-4.0` |
| Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
| Do What The F*ck You Want To Public License | `wtfpl` |
| Educational Community License v2.0 | `ecl-2.0` |
| Eclipse Public License 1.0 | `epl-1.0` |
| Eclipse Public License 2.0 | `epl-2.0` |
| European Union Public License 1.1 | `eupl-1.1` |
| GNU Affero General Public License v3.0 | `agpl-3.0` |
| GNU General Public-Lizenzfamilie | `gpl` |
| GNU General Public License v2.0 | `gpl-2.0` |
| GNU General Public License v3.0 | `gpl-3.0` |
| GNU Lesser General Public-Lizenzfamilie | `lgpl` |
| GNU Lesser General Public License v2.1 | `lgpl-2.1` |
| GNU Lesser General Public License v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| LaTeX Project Public License v1.3c | `lppl-1.3c` |
| Microsoft Public License | `ms-pl` |
| MIT | `mit` |
| Mozilla Public License 2.0 | `mpl-2.0` |
| Open Software License 3.0 | `osl-3.0` |
| PostgreSQL License | `postgresql` |
| SIL Open Font License 1.1 | `ofl-1.1` |
| University of Illinois/NCSA Open Source License | `ncsa` |
| The Unlicense | `unlicense` |
| zLib License | `zlib` |

Wenn Du nach einer Lizenz einer Familie suchst, enthalten die Suchergebnisse alle Lizenzen dieser Familie. Wenn Du beispielsweise die Abfrage `license:gpl` verwendest, enthalten die Suchergebnisse Repositorys, die unter der GNU General Public License v2.0 und der GNU General Public License v3.0 lizenziert sind. Weitere Informationen findest du unter [Suchen nach Repositorys](/search-github/searching-on-github/searching-for-repositories/#search-by-license).

## Eine Lizenz erkennen

[Der Open Source Ruby Gem-Lizenznehmer](https://github.com/licensee/licensee) vergleicht die *LIZENZ*-Datei des Repositorys mit einer kurzen Liste bekannter Lizenzen. Der Lizenznehmer bietet auch die [Lizenz-API](/rest/reference/licenses) und [gibt uns Einblick in die Lizenz von Repositorys für {% data variables.product.product_name %}](https://github.com/blog/1964-open-source-license-usage-on-github-com). Wenn Dein Repository eine Lizenz verwendet, die nicht auf der [Website "Choose a License"](https://choosealicense.com/appendix/) (Wähle eine Lizenz) aufgeführt ist, kannst Du [die Lizenz anfordern](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Wenn Dein Repository eine Lizenz verwendet, die auf der Website „Choose a License“ (Wähle eine Lizenz) aufgeführt ist, und die Lizenz nicht deutlich sichtbar oben auf der Repository-Seite angezeigt wird, enthält das Repository möglicherweise mehrere Lizenzen oder es liegt eine andere Komplexität vor. Damit Deine Lizenz erkannt wird, vereinfache Deine *LICENSE*-Datei und notiere die Komplexität an anderer Stelle, beispielsweise in der *README*-Datei Deines Repositorys.

## Eine Lizenz auf ein Repository mit vorhandener Lizenz anwenden

Die Lizenzauswahl ist nur verfügbar, wenn Du auf GitHub ein neues Projekt erstellst. Du kannst manuell eine Lizenz über den Browser hinzufügen. Weitere Informationen zum Hinzufügen einer Lizenz zu einem Repository findest Du unter "[Hinzufügen einer Lizenz zu einem Repository](/articles/adding-a-license-to-a-repository)".

![Screenshot der Lizenzauswahl auf GitHub.com](/assets/images/help/repository/repository-license-picker.png)

## Haftungsausschluss

Das Ziel der Bemühungen von GitHub zur Open-Source-Lizenzierung ist es, Dir einen Ausgangspunkt für eine fundierte Entscheidung zu geben. GitHub zeigt Lizenzinformationen an, um Benutzer über Open-Source-Lizenzen und die Projekte, bei denen diese Lizenzen verwendet werden, zu informieren. Wir hoffen, dass wir Dir damit helfen. Bedenke aber bitte, dass wir keine Juristen sind und wie alle Menschen Fehler machen können. Aus diesem Grund stellt GitHub die Informationen ohne Gewähr bereit und übernimmt keine Zusicherungen im Hinblick auf alle auf oder über GitHub bereitgestellten Informationen und Lizenzen. Außerdem lehnt GitHub jegliche Haftung für Schäden ab, die sich aus der Nutzung der Lizenzinformationen ergeben. Wenn Du Fragen hinsichtlich der richtigen Lizenz für Deinen Code oder andere damit verbundene rechtliche Probleme hast, empfehlen wir, juristische Unterstützung einzuholen.

## Weiterführende Themen

- Der Abschnitt "[The Legal Side of Open Source](https://opensource.guide/legal/)"{% ifversion fpt or ghec %} (Die rechtliche Seite von Open Source) des Open Source-Leitfadens
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
