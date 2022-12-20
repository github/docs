---
title: Informationen zur koordinierten Offenlegung von Sicherheitsrisiken
intro: Die Offenlegung von Sicherheitsrisiken ist eine koordinierte Anstrengung zwischen den Erstellern von Sicherheitsberichten und Maintainern des Repositorys.
redirect_from:
- /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
- /code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
shortTitle: Coordinated disclosure
ms.openlocfilehash: c451554e08b4193ca20f9af8a5e694750808bf19
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114058"
---
## Informationen zur Offenlegung von Sicherheitsrisiken in der Branche

{% data reusables.security-advisory.disclosing-vulnerabilities %}

Der erste Bericht eines Sicherheitsrisikos wird privat erstellt. Die vollständigen Details werden erst veröffentlicht, nachdem der oder die Maintainer*in das Problem bestätigt und idealerweise Korrekturen oder einen Patch verfügbar gemacht hat. Diese Veröffentlichung erfolgt in manchen Fällen mit Verzögerung, um mehr Zeit für die Installation der Patches einzuräumen. Weitere Informationen findest du auf der Website der [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software) im Abschnitt zur Offenlegung von Sicherheitsrisiken.

### Bewährte Methoden für Melder*innen von Sicherheitsrisiken

Es empfiehlt sich, Sicherheitsrisiken privat an Maintainer*innen zu melden. Als Melder*in eines Sicherheitsrisikos solltest du nach Möglichkeit Folgendes vermeiden:
- Öffentliche Offenlegung des Sicherheitsrisikos, ohne Maintainer*innen eine Möglichkeit zur Behebung einzuräumen
- Umgehen der Maintainer*innen
- Offenlegung des Sicherheitsrisikos, bevor eine korrigierte Codeversion verfügbar ist
- Erwarten einer Vergütung für das Melden eines Problems, für das es kein öffentliches Bounty-Programm gibt

Melder*innen von Sicherheitsrisiken dürfen Sicherheitsrisiken nach einer bestimmten Zeit offenlegen, wenn sie versucht haben, die Maintainer*innen zu kontaktieren und keine Antwort erhalten haben oder wenn sie sie kontaktiert haben und gebeten wurden, mit der Offenlegung zu lange zu warten. 

Melder*innen von Sicherheitsrisiken wird empfohlen, die Bedingungen der Offenlegung bei der Berichterstattung klar anzugeben. Selbst wenn Melder*innen sich nicht an eine strenge Vorgehensweise halten, sollte der zeitliche Horizont einer geplanten Offenlegung der Sicherheitsrisiken Maintainer*innen klar vermittelt werden. Ein Beispiel für eine Offenlegungsstrategie findest du auf der Website von GitHub Security Lab unter [Offenlegungsstrategie von Security Lab](https://securitylab.github.com/advisories#policy).

### Bewährte Methoden für Maintainer*innen

Als Maintainer*in solltest du klar angeben, wie und wo du Berichte zu Sicherheitsrisiken erhalten möchtest. Wenn diese Informationen nicht klar verfügbar sind, wissen Melder*innen von Sicherheitsrisiken nicht, wie sie dich kontaktieren können, und extrahieren möglicherweise die E-Mail-Adressen von Entwickler*innen aus Git-Commitverläufen, um auf diese Weise eine geeignete Kontaktperson zu finden. Dies kann zu Spannungen, verlorenen Berichten oder zur Veröffentlichung ungelöster Berichte führen.

Maintainer*innen sollten Sicherheitsrisiken rechtzeitig offenlegen. Wenn dein Repository ein Sicherheitsrisiko aufweist, wird Folgendes empfohlen:
- Behandle das Sicherheitsrisiko in deiner Antwort und Offenlegung nicht nur wie einen einfachen Fehler, sondern wie ein Sicherheitsproblem. Du musst z. B. explizit in den Versionshinweisen erwähnen, dass es sich bei dem Problem um ein Sicherheitsrisiko handelt.
- Bestätige den Empfang des Sicherheitsberichts so schnell wie möglich, auch wenn unmittelbar keine Ressourcen für eine Untersuchung verfügbar sind. Dies sendet die Botschaft, dass du schnell reagierst und handelst, und es schafft eine positive Grundlage für die weitere Interaktion zwischen dir und dem oder der Melder*in des Sicherheitsrisikos.
- Binde Melder*innen von Sicherheitsrisiken ein, wenn du die Auswirkungen und die Richtigkeit des Berichts überprüfst. Die Melder*innen haben das Sicherheitsrisiko wahrscheinlich bereits in verschiedenen Szenarios eingehender untersucht, von denen du einige möglicherweise noch nicht berücksichtigt hast.
- Behebe das Problem so, wie du es für passend erachtest, und berücksichtige sorgfältig dabei alle Hinweise und Ratschläge der Melder*innen. Häufig kennen Melder*innen bestimmte Ausnahmefälle und Korrekturumgehungen, die ohne Sicherheitsforschungen leicht zu übersehen sind.
- Würdige immer die Melder*innen von Sicherheitsrisiken in der Danksagung einer Entdeckung.
- Versuche, Fixes so schnell wie möglich zu veröffentlichen.
- Stelle sicher, dass du das weitläufigere Ökosystem auf das Problem und seine Behebung aufmerksam machst, wenn du das Sicherheitsrisiko offenlegst. Es kommt nicht selten vor, dass ein erkanntes Sicherheitsproblem im aktuellen Entwicklungsbranch eines Projekts behoben wird, während der Commit oder das nachfolgende Release nicht explizit als Sicherheitsfix oder Release markiert wird. Dies kann bei späteren Benutzer*innen zu Problemen führen.

Die Details eines Sicherheitsrisikos zu veröffentlichen, wirft kein schlechtes Licht auf Maintainer*innen. Sicherheitsrisiken gibt es in jeder Software, und Benutzer*innen vertrauen Maintainer*innen, die eine klare Vorgehensweise für die Offenlegung von Sicherheitsrisiken in ihrem Code etabliert haben.

## Informationen zum Melden und Offenlegen von Sicherheitsrisiken in Projekten auf {% data variables.product.prodname_dotcom %}

Der Prozess zum Melden und Offenlegen von Sicherheitsrisiken in Projekte auf {% data variables.product.prodname_dotcom_the_website %} lautet wie folgt:

 Wenn du Sicherheitsexpert*in bist (z. B. Sicherheitsforscher*in) und ein Sicherheitsrisiko melden möchtest, überprüfe zunächst, ob für das entsprechende Repository eine Sicherheitsrichtlinie vorliegt. Weitere Informationen findest du unter [Informationen zu Sicherheitsrisiken](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies). Ist eine Strategie vorhanden, befolge sie, um den Prozess zu verstehen, bevor du dich an das Sicherheitsteam für dieses Repository wendest. 
 
 Wenn keine Sicherheitsrichtlinie vorliegt, kann ein privater Kontakt zu Maintainer*innen am effizientesten hergestellt werden, indem du ein Issue erstellst und nach einem bevorzugten Sicherheitskontakt fragst. Dabei solltest du beachten, dass das Issue umgehend öffentlich sichtbar ist. Daher sollte es keine Informationen über den Fehler enthalten. Sobald der Kontakt hergestellt wurde, kannst du den Maintainer*innen vorschlagen, eine für die Zukunft Sicherheitsrichtlinie zu definieren.

{% note %}

**Hinweis**, _nur für npm_: Wenn uns Schadsoftware in einem npm-Paket gemeldet wird, versuchen wir, dich privat zu kontaktieren. Wenn du das Problem nicht rechtzeitig behebst, werden wir es offenlegen. Weitere Informationen findest du in der npm-Dokumentation unter [Melden von Schadsoftware in einem npm-Paket](https://docs.npmjs.com/reporting-malware-in-an-npm-package).

{% endnote %}

 Wenn du ein Sicherheitsrisiko in {% data variables.product.prodname_dotcom_the_website %} gefunden hast, melde es über unseren koordinierten Offenlegungsprozess. Weitere Informationen findest du auf der Website [Bug-Bounty-Programm von {% data variables.product.prodname_dotcom %} Security](https://bounty.github.com/).

 Wenn du Maintainer*in bist, kannst du den Pipelineprozess von Anfang an gestalten und eine Sicherheitsrichtlinie für dein Repository einrichten oder andere Anweisungen für das Melden von Sicherheitsrisiken klar verfügbar machen, z. B. in der README-Datei deines Projekts. Informationen zum Hinzufügen einer Sicherheitsrichtlinie findest du unter [Informationen zu Sicherheitsrichtlinien](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies). Wenn keine Sicherheitsrichtlinie vorliegt, werden Melder*innen wahrscheinlich versuchen, dich per E-Mail oder auf anderem Wege privat zu kontaktieren. Stattdessen können Melder*innen auch ein (öffentliches) Issue mit Details eines Sicherheitsproblems öffnen.

 Um ein Sicherheitsrisiko in deinem Code offenzulegen, musst du als Maintainer*in zunächst eine Sicherheitswarnung im Paketrepository in {% data variables.product.prodname_dotcom %} erstellen. {% data reusables.security-advisory.security-advisory-overview %} Weitere Informationen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories).


 Weitere Informationen zu den ersten Schritten findest du unter [Erstellen einer Sicherheitswarnung für ein Repository](/code-security/repository-security-advisories/creating-a-repository-security-advisory).
