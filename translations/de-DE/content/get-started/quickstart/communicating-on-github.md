---
title: Kommunikation in GitHub
intro: 'Du kannst bestimmte Projekte und Änderungen sowie umfassendere Ideen oder Teamziele mithilfe verschiedener Arten von Diskussionen auf {% data variables.product.product_name %} besprechen.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 18321069abd4fb48956f4d61653b8bbe592c648b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106789'
---
## Einführung

{% data variables.product.product_name %} bietet integrierte Kommunikationstools für die Zusammenarbeit, sodass du eng mit der Community zusammenarbeiten kannst. In diesem Schnellstart erfährst du, wie du das richtige Tool für deine Anforderungen auswählst.

{% ifversion discussions %} Je nachdem, welche Art von Unterhaltung du führen möchtest, kannst du Issues, Pull Requests, {% data variables.product.prodname_discussions %} und Teamdiskussionen erstellen und daran teilnehmen.
{% else %} Je nachdem, welche Art von Unterhaltung du führen möchtest, kannst du Issues, Pull Requests und Teamdiskussionen erstellen und daran teilnehmen.
{% endif %}

### {% data variables.product.prodname_github_issues %}
- sind nützlich bei der Diskussion spezifischer Details eines Projekts, zum Beispiel Fehlerberichte, geplante Verbesserungen und Feedback 
- sind spezifisch für ein Repository, und ihnen ist in der Regel ein eindeutiger Besitzer zugeordnet 
- werden oft als das Bug-Nachverfolgungssystem für {% data variables.product.prodname_dotcom %} bezeichnet
  
### Pull Requests
- ermöglichen es dir, bestimmte Änderungen vorzuschlagen
- ermöglichen es dir, von anderen vorgeschlagene Änderungen direkt zu kommentieren 
- sind spezifisch für ein Repository 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  sind wie ein Forum und eignen sich am besten für offene Ideen und Diskussionen, bei denen die Zusammenarbeit wichtig ist 
-  können mehrere Repositorys betreffen 
-  bieten eine Funktion für die Zusammenarbeit jenseits der Codebasis, die das Brainstorming von Ideen und den Aufbau einer Community-Wissensdatenbank ermöglicht
-  ist häufig kein klarer Besitzer zugeordnet
-  führen häufig nicht zu einer umsetzbaren Aufgabe
{% endif %}

### Diskussionen im Team
- können auf der Seite deines Teams für projektübergreifende Unterhaltungen gestartet werden, die nicht zu einem bestimmten Issue oder Pull Request gehören. Anstatt einen Issue in einem Repository zu öffnen, um eine Idee zu diskutieren, kannst du das gesamte Team einbeziehen, indem du eine Unterhaltung in einer Teamdiskussion führst.
- ermöglichen es dir, zentral Diskussionen mit deinem Team über Planung, Analyse, Design, Benutzerforschung und allgemeine Projektentscheidungen zu führen.{% ifversion ghes or ghae %} 
- bieten eine Funktion für die Zusammenarbeit jenseits der Codebasis, die das Brainstorming von Ideen
- ist häufig kein klarer Besitzer zugeordnet
- führen häufig nicht zu einer umsetzbaren Aufgabe{% endif %}

## Welches Diskussionstool sollte ich verwenden?

### Szenarien für Issues

- Ich möchte Aufgaben, Verbesserungen und Fehler nachverfolgen.
- Ich möchte einen Fehlerbericht erstellen.
- Ich möchte Feedback zu einem bestimmten Feature teilen.
- Ich möchte eine Frage zu Dateien im Repository stellen.

#### Beispiel für ein Issue

Dieses Beispiel zeigt, wie ein {% data variables.product.prodname_dotcom %}-Benutzer ein Problem in unserem Open-Source-Repository für die Dokumentation erstellt hat, um uns auf einen Fehler aufmerksam zu machen und eine Lösung zu diskutieren. 

![Beispiel für ein Issue](/assets/images/help/issues/issue-example.png)

- Einem Benutzer ist aufgefallen, dass die blaue Farbe des Banners am oberen Rand der Seite in der chinesischen Version der {% data variables.product.prodname_dotcom %}-Dokumentation den Text im Banner unleserlich macht. 
- Der Benutzer hat ein Issue im Repository erstellt, in dem das Problem beschrieben und ein Fix vorgeschlagen wird (Verwendung einer anderen Hintergrundfarbe für das Banner).
- Es folgt eine Diskussion, und schließlich wird gemeinsam entschieden, welche Korrekturmaßnahmen angewendet werden sollen.
- Anschließend kann ein Mitwirkender einen Pull Request mit dem Fix erstellen.

### Szenarien für Pull Requests

- Ich möchte einen Tippfehler in einem Repository korrigieren.
- Ich möchte Änderungen an einem Repository vornehmen.
- Ich möchte Änderungen zum Beheben eines Problems vornehmen.
- Ich möchte von anderen Benutzern vorgeschlagene Änderungen kommentieren.

#### Pull Request-Beispiel

Dieses Beispiel zeigt, wie ein {% data variables.product.prodname_dotcom %}-Benutzer einen Pull Request in unserem Open-Source-Repository für die Dokumentation erstellt hat, um einen Tippfehler zu korrigieren. 

Auf der Registerkarte **Unterhaltung** des Pull Requests erläutert der Autor, warum er den Pull Request erstellt hat.

![Pull Request-Beispiel – Registerkarte „Unterhaltung“](/assets/images/help/pull_requests/pr-conversation-example.png)

Die Registerkarte **Geänderte Dateien** für den Pull Request zeigen den implementierten Fix.

![Pull Request-Beispiel – Registerkarte „Geänderte Dateien“](/assets/images/help/pull_requests/pr-files-changed-example.png)

- Dieser Mitwirkende bemerkt einen Tippfehler im Repository.
- Der Benutzer erstellt einen Pull Request mit dem Fix.
- Ein Repositoryverantwortlicher prüft den Pull Request, kommentiert ihn und mergt ihn.

{% ifversion discussions %}
### Szenarien für {% data variables.product.prodname_discussions %}

- Ich habe eine Frage, die sich nicht unbedingt auf bestimmte Dateien im Repository bezieht.
- Ich möchte Neuigkeiten mit meinen Mitstreitern oder meinem Team austauschen.
- Ich möchte eine ergebnisoffene Unterhaltung beginnen oder daran teilnehmen.
- Ich möchte eine Ankündigung an meine Community richten.

#### {% data variables.product.prodname_discussions %}-Beispiel

Dieses Beispiel zeigt die {% data variables.product.prodname_discussions %}-Willkommensmeldung für das Open-Source-Repository der {% data variables.product.prodname_dotcom %}-Dokumentation und veranschaulicht, wie das Team mit seiner Community zusammenarbeiten möchte.

![{% data variables.product.prodname_discussions %}-Beispiel](/assets/images/help/discussions/github-discussions-example.png)

Dieser Communityverantwortliche hat eine Diskussion gestartet, um die Community zu begrüßen und die Mitglieder zu bitten, sich vorzustellen. Dieser Beitrag fördert eine einladende Atmosphäre für Besucher und Mitwirkende. Außerdem wird betont, dass das Team gerne bei Beiträgen zum Repository behilflich ist.

{% endif %}
### Szenarien für Teamdiskussionen

- Ich habe eine Frage, die sich nicht unbedingt auf bestimmte Dateien im Repository bezieht.
- Ich möchte Neuigkeiten mit meinen Mitstreitern oder meinem Team austauschen.
- Ich möchte eine ergebnisoffene Unterhaltung beginnen oder daran teilnehmen.
- Ich möchte eine Ankündigung an mein Team richten.

{% ifversion fpt or ghec %} Wie du siehst, ähneln Teamdiskussionen und {% data variables.product.prodname_discussions %} einander sehr. Für {% data variables.product.prodname_dotcom_the_website %} empfehlen wir, {% data variables.product.prodname_discussions %} als Ausgangspunkt für Unterhaltungen zu verwenden. Du kannst {% data variables.product.prodname_discussions %} verwenden, um mit jeder Community auf {% data variables.product.prodname_dotcom %} zusammenzuarbeiten. Wenn du Teil einer Organisation bist und Unterhaltungen innerhalb deiner Organisation oder deines Teams anstoßen möchtest, solltest du Teamdiskussionen nutzen.
{% endif %}

#### Beispiel für eine Teamdiskussion

Dieses Beispiel zeigt einen Teambeitrag für das Team `octo-team`.

![Beispiel für eine Teamdiskussion](/assets/images/help/projects/team-discussions-example.png)

Das `octocat`-Mitglied hat eine Teamdiskussion gestartet und das Team über verschiedene Dinge informiert:
- Ein Teammitglied namens Mona hat damit begonnen, Termine für Remotegames hinzuzufügen.
- Es gibt einen Blogbeitrag, der beschreibt, wie die Teams {% data variables.product.prodname_actions %} verwenden, um ihre Dokumentation zu erstellen.
- Das Material zum All-Hands-Treffen im April ist jetzt für alle Teammitglieder zugänglich.

## Nächste Schritte

Diese Beispiele haben dir gezeigt, wie du entscheiden kannst, welches das beste Tool für deine Unterhaltungen über {% data variables.product.product_name %} ist. Aber das ist nur der Anfang. Es gibt viele weitere Möglichkeiten, wie du diese Tools an deine Bedürfnisse anpassen kannst.

Issues kannst du zum Beispiel für eine schnellere Suche mit Bezeichnungen versehen, und du kannst Vorlagen für Issues erstellen, mit denen Mitwirkende aussagekräftige Issues öffnen können. Weitere Informationen findest du unter [Informationen zu Issues](/github/managing-your-work-on-github/about-issues#working-with-issues) und [Informationen zu Vorlagen für Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates).

Für Pull Requests kannst du Entwürfe erstellen, wenn deine Änderungsvorschläge noch in Arbeit sind. Pull Request-Entwürfe können erst gemergt werden, wenn sie als bereit zum Review markiert sind. Weitere Informationen findest du unter [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests).

{% ifversion discussions %} Bei {% data variables.product.prodname_discussions %} kannst du{% ifversion fpt or ghec %} Verhaltensregeln festlegen und{% endif %} Diskussionen anheften, die wichtige Informationen für deine Community enthalten. Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).
{% endif %}

Für Teamdiskussionen kannst du Diskussionen auf der Seite eines Teams bearbeiten oder löschen, und du kannst Benachrichtigungen für Teamdiskussionen konfigurieren. Weitere Informationen findest du unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions).

Informationen zu einigen erweiterten Formatierungsfeatures, die dir helfen, zu kommunizieren, findest du unter [Schnellstart zum Schreiben auf {% data variables.product.prodname_dotcom %}"](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github).
