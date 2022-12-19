---
title: Übersicht über die Bereitstellung von GitHub Advanced Security
intro: Hilf deinem Unternehmen, {% data variables.product.prodname_GH_advanced_security %} (GHAS) mit diesen bewährten Methoden, diesen Rolloutbeispielen und unserem von Unternehmen getesteten gestuften Ansatz erfolgreich einzuführen.
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
- /admin/advanced-security/overview-of-github-advanced-security-deployment
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145107023"
---
Dank {% data variables.product.prodname_GH_advanced_security %} (GHAS) können Teams mithilfe von Tools wie CodeQL, der weltweit modernsten Engine zur semantischen Analyse von Code, sichereren Code schneller erstellen. Bei GHAS handelt es sich um eine Sammlung von Tools, die eine aktive Beteiligung von Entwickler*innen im gesamten Unternehmen erfordert. Wenn du von deiner Investition optimal profitieren möchtest, musst du dich darüber informieren, wie du GHAS verwendest, anwendest und verwaltest, um deinen Code zuverlässig zu schützen.

Eine der größten Herausforderungen bei der Einführung einer neuen Software kann für ein Unternehmen der Rollout- und Implementierungsprozess sowie die Herbeiführung eines kulturellen Wandels zur Erreichung der für eine erfolgreiche Einführung erforderlichen Akzeptanz in der Organisation darstellen.

Dieser Überblick soll deinem Unternehmen helfen, diesen Prozess besser zu verstehen und sich mit GHAS darauf vorzubereiten, und bietet daher Folgendes:
  - Übersicht darüber, wie ein GHAS-Rollout für dein Unternehmen aussehen könnte
  - Unterstützung bei der Vorbereitung deines Unternehmens auf einen Rollout
  - Informationen über wichtige bewährte Methoden zur Unterstützung eines erfolgreichen Rollouts in deinem Unternehmen

Informationen zu den Sicherheitsfeatures, die über {% data variables.product.prodname_GH_advanced_security %} verfügbar sind, findest du unter [{% data variables.product.prodname_dotcom %}-Sicherheitsfeatures](/code-security/getting-started/github-security-features).

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>Empfohlene mehrstufige Vorgehensweise bei GHAS-Rollouts

Wir haben ausgehend von bewährten Branchenmethoden und bewährten GitHub-Methoden eine Vorgehensweise für GHAS-Rollouts in mehreren Phasen entwickelt. Diese Vorgehensweise kannst du für deinen Rollout in Zusammenarbeit mit {% data variables.product.prodname_professional_services %} oder eigenständig nutzen.

Zwar wird das Verfahren in mehreren Phasen empfohlen, du kannst jedoch je nach den Anforderungen in deinem Unternehmen Anpassungen vornehmen. Darüber hinaus wird empfohlen, eine Zeitachse für den Rollout und die Implementierung zu erstellen und einzuhalten. Wenn du mit der Planung beginnst, können wir zusammen die für dein Unternehmen am besten geeignete Vorgehensweise und Zeitachse festlegen.

![Abbildung zur Darstellung der drei Stufen beim Rollout und bei der Bereitstellung von GitHub Advanced Security: Phase 0: Planung und Kickoff, Phase 1: Pilotprojekte, Phase 2: Akzeptanz in der Organisation und Rollout für Early Adopter und Phase 3: Vollständiger Rollout in der Organisation und Change Management](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Aufgrund unserer Erfahrung bei der Unterstützung von Kunden bei einer erfolgreichen Bereitstellung von {% data variables.product.prodname_GH_advanced_security %} gehen wir davon aus, dass die meisten Kunden diese Phasen befolgen. Je nach den Anforderungen in deinem Unternehmen musst du diese Vorgehensweise unter Umständen anpassen und einige Phasen oder Schritte ändern oder auslassen.

Eine ausführliche Anleitung zum Implementieren der einzelnen Phasen findest du unter [Bereitstellen von {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise). Im nächsten Abschnitt findest du eine Übersicht über die einzelnen Phasen.

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 0: Planung und Kickoff

In dieser Phase geht es in erster Linie darum, den Rollout zu planen und vorzubereiten und dafür zu sorgen, dass die Technologien vorhanden und ebenso wie die Prozesse und Mitarbeiter*innen für den Rollout bereit sind. In dieser Phase solltest du auch überlegen, anhand welcher Kriterien gemessen werden soll, wie erfolgreich die Einführung und Nutzung von GHAS in deinen Teams verläuft.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 1: Pilotprojekte

Für den Anfang der Implementierung von GHAS wird empfohlen, zunächst mit wenigen wichtigen Projekten/Teams zu beginnen, mit denen ein anfänglicher Rollout in einem Pilotversuch getestet wird. Dies ermöglicht es einer ersten Gruppe in deinem Unternehmen, sich mit GHAS vertraut zu machen, zu erfahren, wie GHAS aktiviert und konfiguriert wird, und eine solide Grundlage für GHAS zu erstellen, bevor du den Rollout für den Rest deines Unternehmens durchführst.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 2: Akzeptanz in der Organisation und Vorbereitung des Rollouts

Phase 2 ist eine Wiederholung der vorherigen Phasen und dient der Vorbereitung auf einen umfassenderen Rollout im restlichen Unternehmen. In dieser Phase kann sich die Akzeptanz in der Organisation auf die Entscheidung deines Unternehmens, nach den Pilotprojekten fortzufahren, oder auf die allmähliche Einführung und Nutzung von GHAS im Unternehmen (dies ist am häufigsten der Fall) beziehen. Wenn du in deinem Unternehmen GHAS allmählich einführen möchtest, kannst du ab Phase 2 mit Phase 3 fortfahren.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 3: Vollständiger Rollout in der Organisation und Change Management

Sobald dein Unternehmen entsprechend vorbereitet ist, kannst du mit dem Rollout von GHAS im restlichen Unternehmen gemäß Rolloutplan beginnen. In dieser Phase muss sichergestellt werden, dass für alle Veränderungen, die während des Rollouts von GHAS möglicherweise in der Organisation vorgenommen werden müssen, ein Plan erstellt wird und dass die Teams die Notwendigkeit, den Wert und die Auswirkungen dieser Veränderungen auf aktuelle Workflows verstehen.

## <a name="best-practices-for-a-successful-ghas-rollout"></a>Bewährte Methoden für einen erfolgreichen Rollout von GHAS

Wir haben festgestellt, dass Unternehmen, die GHAS erfolgreich eingeführt haben, ähnliche erfolgsfördernde Merkmale aufweisen. Informiere dich über diese bewährten Methoden für einen erfolgreichen Rollout von GHAS in deinem Unternehmen.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} Festlegen klarer Ziele für den Rollout in deinem Unternehmen

Eigentlich ist das Festlegen von Zielen eine Selbstverständlichkeit. Dennoch beobachten wir immer wieder, dass Unternehmen mit dem Rollout von GHAS ohne klare Ziele beginnen. Für diese Unternehmen ist es schwieriger, die für den Rolloutprozess erforderliche Akzeptanz in der Organisation schaffen und von GHAS im Unternehmen optimal zu profitieren.

Wenn du mit der Planung für deinen Rollout und die Implementierung beginnst, solltest du zunächst Ziele für GHAS in deinem Unternehmen festlegen und dafür sorgen, dass diese im Team bekannt gemacht werden. Deine Ziele können sehr detailliert oder einfach gehalten sein. Wichtig ist, dass es einen Ausgangspunkt und eine Ausrichtung gibt. So kannst du eine Grundlage für die Richtung des Rollouts in deinem Unternehmen schaffen und einen Plan zum Erreichen dieses Ziels entwickeln. Wenn du beim Festlegen deiner Ziele Unterstützung benötigst, erhältst du von {% data variables.product.prodname_professional_services %} Empfehlungen, die auf unseren Erfahrungen mit deinem Unternehmen und früheren Projekten bei anderen Kund*innen basieren.

Im Folgenden findest du einige Beispiele dafür, wie deine Ziele für den Rollout von GHAS lauten könnten:
  - **Reduzierung der Anzahl von Sicherheitsrisiken:** Dies kann ein allgemeines Ziel sein oder auf ein erhebliches Sicherheitsrisiko zurückgehen, von dem dein Unternehmen vor kurzem betroffen war und das deiner Meinung nach durch ein Tool wie GHAS hätte verhindert werden können.
  - **Identifizierung von Repositorys mit hohem Risiko:** In manchen Unternehmen sollen einfach nur die Repositorys mit dem größten Risiko identifiziert werden, sodass Sicherheitsrisiken beseitigt und Risiken minimiert werden können.
  -  **Erhöhung der Beseitigungsraten:** Dies kann erreicht werden, indem Entwickler*innen dazu gebracht werden, Erkenntnisse umzusetzen, und indem sichergestellt wird, dass Sicherheitsrisiken zeitnah beseitigt werden. Dadurch wird sichergestellt, dass sich nicht immer mehr Sicherheitsrisiken anhäufen.  
  - **Erfüllung von Complianceanforderungen:** Dazu können einfach neue Complianceanforderungen oder etwas Spezifischeres festgelegt werden. Wir haben festgestellt, dass in vielen Unternehmen im Gesundheitswesen GHAS zur Verhinderung einer Gefährdung von personenbezogenen Gesundheitsdaten verwendet wird.
  - **Verhinderung einer Gefährdung von Geheimnissen:** Dieses Ziel wird häufig von Unternehmen formuliert, bei denen kritische Daten wie Softwareschlüssel, Kunden- oder Finanzdaten usw. bereits gefährdet waren (oder eine Gefährdung verhindert werden soll).
  - **Verwaltung von Abhängigkeiten:** Dieses Ziel wird häufig von Unternehmen formuliert, die aufgrund nicht gepatchter Abhängigkeiten Opfer von Hacks geworden sind, oder von Unternehmen, die diese Art von Angriffen durch Aktualisieren anfälliger Abhängigkeiten verhindern möchten.  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} Einrichten einer klaren Kommunikation und Ausrichtung zwischen den Teams

Eine klare Kommunikation und Ausrichtung sind für den Erfolg eines Projekts sowie für den Rollout von GHAS von entscheidender Bedeutung. Wir haben festgestellt, dass Unternehmen, in denen sich Sicherheits- und Entwicklungsteams sowie der jeweilige Executive Sponsor (CISO oder VP) in allen Bereichen vom Erwerb von GHAS bis zum Rollout gut miteinander abstimmen, häufig mehr Erfolg mit ihren Rollouts haben.

Dabei sollten sich diese Teams während des Rollouts von GHAS nicht nur gut miteinander abstimmen, sondern auch auf einige bestimmte Bereiche konzentrieren.

#### <a name="rollout-planning"></a>Planung des Rollouts

Wie soll in deinem Unternehmen ein Rollout für GHAS ausgeführt werden? Dazu wird es wahrscheinlich viele Vorschläge und Meinungen geben. Im Folgenden sind einige Fragen aufgeführt, die du beantworten und bei denen du dich abstimmen solltest, bevor du fortfährst:
  - Welche Teams sollen am Pilotversuch beteiligt sein?
  - Auf welchen Projekten liegt der Fokus beim Pilotversuch?
  - Wie sollten Projekte für den Rollout priorisiert werden?
  - Wie soll der Erfolg des Pilotprojekts und in der Zeit danach gemessen werden?
  - Wie groß ist der Umfang der täglichen Veränderungen, die deine Teams bewältigen müssen? Wie soll das kommuniziert werden?
  - Wie sollen deine Rolloutpläne im gesamten Unternehmen kommuniziert werden?
  - Wie sollen deine Teams geschult werden?
  - Wie sollen Überprüfungsergebnisse zunächst verwaltet werden? (Weitere Informationen findest du im nächsten Abschnitt über die Verarbeitung von Ergebnissen.)

#### <a name="processing-results"></a>Verarbeiten von Ergebnissen

Bevor für deine Teams ein Rollout für GHAS durchgeführt wird, muss klar festgelegt werden, wie Ergebnisse im weiteren Verlauf verwaltet werden sollen. Es wird empfohlen, Ergebnisse zunächst eher informativ und nicht blockierend zu betrachten. Da dein Unternehmen wahrscheinlich über eine vollständige CI/CD-Pipeline verfügt, wird dieser Ansatz empfohlen, um eine Blockierung der Prozesse in deinem Unternehmen zu vermeiden. Wenn du dich an die Verarbeitung dieser Ergebnisse gewöhnt hast, kannst du den Grad der Einschränkung schrittweise bis zu einem für dein Unternehmen besser geeigneten Punkt erhöhen.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %} Führe deinen Rollout mit Sicherheits- und mit Entwicklungsteams durch

In vielen Unternehmen wird das Rollout von GHAS mit dem Sicherheitsteam durchgeführt. Entwicklungsteams werden häufig erst nach Abschluss des Pilotprojekts in den Rolloutprozess einbezogen. Wir haben jedoch festgestellt, dass Unternehmen, die beim Rollout sowohl das Sicherheits- als auch das Entwicklungsteam einbeziehen, meist mehr Erfolg beim Rollout von GHAS haben.

Warum? Bei GHAS wird in puncto Softwaresicherheit durch die nahtlose Integration in den Entwicklerworkflow ein entwicklerorientierter Ansatz verfolgt. Wenn das Entwicklungsteam nicht frühzeitig im Prozess eingebunden wird, erhöht sich das Risiko für das Rollout und es ist schwieriger, eine Akzeptanz in der Organisation zu schaffen.

Je früher Entwicklungsteams eingebunden werden (idealerweise bereits beim Erwerb), umso früher im Prozess können sich Sicherheits- und Entwicklungsteams miteinander abstimmen. Damit lassen sich Grenzen zwischen den beiden Gruppen überwinden. Zudem werden dadurch Arbeitsbeziehungen aufgebaut und gestärkt, und es trägt dazu bei, eine Mentalität des Weiterreichens in den Teams zu verhindern. All dies trägt dazu bei, das Gesamtziel zu erreichen, nämlich Unternehmen dabei zu unterstützen, Sicherheitsprobleme mithilfe von GHAS früher im Entwicklungsprozess zu beheben.

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} Empfohlene Schlüsselrollen für dein Rolloutteam

Es wird empfohlen, in deinem Team einige Schlüsselrollen zu besetzen, um sicherzustellen, dass deine Teams während der Planung und Durchführung des Rollouts und der Implementierung gut vertreten sind.

Es wird dringend empfohlen, dass du dein Rolloutteam mit folgenden Rollen besetzt:
- **Executive Sponsor:** Dies ist häufig der CISO, CIO, VP of Security oder VP of Engineering.
- **Leiter des Teams für technische Sicherheit:** Der Leiter des Teams für technische Sicherheit leistet im Auftrag des Sicherheitsteams während des gesamten Implementierungsprozesses technische Unterstützung.
- **Leiter des Teams für technische Entwicklung:** Der Leiter des Teams für technische Entwicklung leistet technische Unterstützung und wird voraussichtlich die Implementierung zusammen mit dem Entwicklungsteam leiten.  

Es wird außerdem empfohlen, dass du dein Rolloutteam mit folgenden Rollen besetzt:
- **Projektmanager:** Wir haben festgestellt, dass die Wahrscheinlichkeit eines erfolgreichen Verlaufs umso größer ist, je früher ein Projektmanager in den Rolloutprozess eingebunden wird.  
- **QA-Techniker*in:** Durch die Einbindung eines Mitglieds des QA-Teams deines Unternehmens kann sichergestellt werden, dass Prozessänderungen für das QA-Team berücksichtigt werden.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} Übersicht über die wichtigsten Fakten rund um GHAS zur Vermeidung häufiger Missverständnisse

Zu Beginn der Implementierung von GHAS solltest du dir einen Überblick über einige grundlegende Fakten dazu, was GHAS ist und was es leistet, um zu verhindern, dass es in Unternehmen beim Rollout von GHAS zu Missverständnissen kommt, verschaffen.

{% note %}

**Hinweis:** Wenn du deine Kenntnisse rund um GHAS vertiefen möchtest, bietet {% data variables.product.prodname_professional_services %} verschiedene Optionen für zusätzliche Schulungen und Trainings zu Themen wie die, die in deinem Unternehmen für GHAS vorbereitet werden müssen. Bei diesen Angeboten kann es sich um Workshops, Demonstrationen oder Bootcamps handeln. Die Themen können von der Bereitstellung von GHAS und der grundlegenden Verwendung von GHAS bis hin zu weiterführenden Themen zur Weiterentwicklung der Fähigkeiten deines Teams reichen. Weitere Informationen zur Zusammenarbeit mit dem {% data variables.product.prodname_professional_services_team %}-Team findest du unter [{% data variables.product.prodname_professional_services %}](#github-professional-services).

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>Fakt 1: Bei GHAS handelt es sich um Sicherheitstools, die Maßnahmen zum Schutz deines Codes erfordern.

GHAS ist keine Sicherheitssoftware, die installiert und dann vergessen wird. GHAS allein schützt deinen Code nicht. Bei GHAS handelt es sich um eine Sammlung von Tools, deren Wert sich erhöht, wenn sie konfiguriert, gewartet und in täglichen Workflows sowie in Kombination mit anderen Tools verwendet werden.

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>Fakt 2: GHAS muss nach der Implementierung angepasst werden.

Nach dem Einrichten von GHAS in den Repositorys müssen zur Anpassung an die Anforderungen in deinem Unternehmen weitere Schritte unternommen werden. Insbesondere die Codeüberprüfung erfordert weitere Konfigurationsschritte zur Optimierung der Ergebnisse, z. B. zur Anpassung der im Rahmen der Überprüfung gekennzeichneten Elemente, um die Erkennung bei künftigen Überprüfungen anzupassen. Viele Kunden stellen fest, dass die ersten Überprüfungen entweder keine Ergebnisse liefern oder Ergebnisse, die auf der Grundlage des Bedrohungsmodells der Anwendung nicht relevant sind und an die Anforderungen des Unternehmens angepasst werden müssen.

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>Fakt 3: GHAS-Tools sind am effektivsten, wenn sie zusammen verwendet werden. Für die besonders effektiven AppSec-Programme sind jedoch zusätzliche Tools/Aktivitäten erforderlich.

GHAS ist am effektivsten, wenn alle Tools zusammen verwendet werden. Noch effektiver ist das AppSec-Programm, wenn GHAS in Unternehmen zusammen mit anderen Tools und Aktivitäten wie Penetrationstests und dynamischen Überprüfungen integriert wird. Es wird empfohlen, immer mehrere Schutzebenen zu verwenden.

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>Fakt 4: Nicht in allen Unternehmen werden angepasste {% data variables.product.prodname_codeql %}-Abfragen verwendet/benötigt. Diese können jedoch zur Anpassung oder gezielten Nutzung von Überprüfungsergebnissen nützlich sein.

Die Codeüberprüfung wird von {% data variables.product.prodname_codeql %}, der weltweit leistungsfähigsten Codeanalyse-Engine, unterstützt. Viele Unternehmen sind zwar begeistert von der Möglichkeit, benutzerdefinierte Abfragen schreiben zu können, aber für einen Großteil unserer Kund*innen sind die Basisabfragen und die in der Community verfügbaren zusätzlichen Abfragen in der Regel mehr als ausreichend. Viele Unternehmen stellen jedoch unter Umständen fest, dass benutzerdefinierte {% data variables.product.prodname_codeql %}-Abfragen benötigt werden, um die Anzahl der falsch positiven Ergebnissen zu reduzieren, oder dass neue Abfragen erstellt werden müssen, um die für das Unternehmen erforderlichen Ergebnisse zu erzielen.

Wenn du in deinem Unternehmen benutzerdefinierte {% data variables.product.prodname_codeql %}-Abfragen erstellen möchtest, solltest du jedoch zunächst den Rollout und die Implementierung von GHAS durchführen, bevor du dich mit benutzerdefinierten Abfragen beschäftigen.

{% note %}

**Hinweis:** In deinem Unternehmen sollten solide Grundkenntnisse in puncto GHAS vorhanden sein, bevor du dich ausführlicher mit Sicherheitsmaßnahmen befasst.

{% endnote %}

Wenn dein Unternehmen bereit ist, kann dich unser Customer Success-Team bei der Ermittlung der zu erfüllenden Anforderungen unterstützen und dafür sorgen, dass dein Unternehmen über geeignete Anwendungsfälle für benutzerdefinierte Abfragen verfügt.  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>Fakt 5: Mit {% data variables.product.prodname_codeql %} werden nicht nur die in einem Pull Request vorgenommenen Änderungen, sondern die gesamte Codebasis überprüft.

Wenn die Codeüberprüfung über einen Pull Request ausgeführt wird, enthält die Überprüfung die gesamte Codebasis und nicht nur die Änderungen, die im Pull Request vorgenommen wurden. Auch wenn dies manchmal unnötig erscheinen mag, ist dies ein wichtiger Schritt, um sicherzustellen, dass die Änderung für alle Interaktionen in der Codebasis überprüft wurde.

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>Beispiele für erfolgreiche Rollouts von {% data variables.product.prodname_GH_advanced_security %}

Nachdem du nun über einige wichtige Faktoren für einen erfolgreichen Rollout und eine entsprechende Implementierung von GHAS mehr weißt, werden im Folgenden einige Beispiele für erfolgreiche Rollouts bei unseren Kunden beschrieben. Auch wenn sich dein Unternehmen an einem anderen Ort befindet, kann dich {% data variables.product.prodname_dotcom %} bei der Entwicklung eines an die Anforderungen deines Rollouts angepassten Konzepts unterstützen.

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>Beispiel für einen Rollout für ein mittelständisches Technologieunternehmen im Gesundheitswesen  

In einem mittelständisches Technologieunternehmen im Gesundheitswesen mit Sitz in San Francisco wurde der Rolloutprozess für GHAS erfolgreich durchgeführt. Im Unternehmen gab es zwar vielleicht nicht viele Repositorys, die aktiviert werden mussten, jedoch verhalf dem Unternehmen ein gut organisiertes und gut abgestimmtes Team für den Rollout mit einem klar benannten Ansprechpartner für die Zusammenarbeit mit {% data variables.product.prodname_dotcom %} bei der Behandlung von Issues während des Prozesses zum Erfolg. Dadurch konnte der Rollout im Unternehmen innerhalb von zwei Monaten durchgeführt werden.

Weil ein Entwicklungsteam eingebunden war, konnten Teams im Unternehmen darüber hinaus nach Abschluss des Rollouts Codeüberprüfungen auf PR-Ebene verwenden.

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>Beispiel für einen Rollout für ein mittelständisches Unternehmen für Datenplattformen

Ein weltweit tätiges Unternehmen für Datenplattformen hat bisher große Erfolge mit GHAS erzielt. Die anfängliche Implementierung ist abgeschlossen, und derzeit ist der Rolloutprozess im Gang. Dieses Unternehmen verfügt über eine moderne Sicherheitsstruktur und entsprechende Tools und ist als Unternehmen gut aufgestellt. Dadurch kann das Unternehmen sehr unabhängig agieren, und der Rollout konnte schnell und reibungslos durchgeführt werden.

Dank der guten Abstimmung, der effizienten Abläufe und der modernen Sicherheitstools konnte im Unternehmen GHAS schnell implementiert und für {% data variables.product.prodname_codeql %} eine gute Grundlage geschaffen werden. Seit der Implementierung kann im Unternehmen {% data variables.product.prodname_codeql %} in verschiedenen Repositorys automatisch aktiviert werden.

Neben der modernen Sicherheitsstruktur und der technischen Reife ist der Umstand, dass es einen Projektverantwortlichen und einen einzigen Ansprechpartner im Team gibt, der das Projekt vorantreibt, ein weiterer wichtiger Schlüssel zum Erfolg dieses Unternehmens. Diese Kontaktperson ist nicht nur wichtig, sondern auch unglaublich kreativ und kompetent und trägt direkt zum Erfolg des Rollouts bei.

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>Voraussetzungen für dein Unternehmen vor dem Rollout von GHAS

{% data variables.product.prodname_professional_services %} kann dein Unternehmen zusätzlich beim Zusammenstellen dieser Voraussetzungen sowie bei der Vorbereitung für die Implementierung von GHAS unterstützen.

 ### <a name="cicd-systems-and-process"></a>CI/CD-Systeme und -Prozesse

Wenn in deinem Unternehmen noch nicht in CI/CD-Systeme und -prozesse (Continuous Integration und Continuous Delivery) investiert wird oder noch keine CI/CD-Systeme und -prozesse implementiert sind, solltest du diesen Schritt in Verbindung mit der Einführung von GHAS ergreifen. Dies kann für dein Unternehmen eine gewaltige Umstellung bedeuten. Wir können mit dir zusammenarbeiten, indem wir Empfehlungen und Anleitungen für die Implementierung eines CI/CD-Systems bereitstellen und dich bei eventuell erforderlichen Schulungen unterstützen.

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>Anforderungen für die Installation von {% data variables.product.prodname_GH_advanced_security %}

Je nachdem, welche Kombinationen von Technologien in deinem Unternehmen verwendet werden, gibt es verschiedene Möglichkeiten für die Installation von GHAS. In diesem Abschnitt erhältst du eine kurze Übersicht über die Schritte, die du in deinem Unternehmen ergreifen musst.

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

Es ist wichtig, dass du eine Version von {% data variables.product.prodname_ghe_server %} (GHES) verwendest, die den Anforderungen in deinem Unternehmen entspricht.

Wenn du eine frühere Version von GHES (vor 3.0) verwendest und ein Upgrade durchführen möchtest, musst du vor dem Upgrade einige Anforderungen erfüllen. Weitere Informationen findest du unter
  - [Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)
  - [Upgradeanforderungen](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)

Wenn du ein CI/CD-System eines Drittanbieters und {% data variables.product.prodname_code_scanning %} verwenden möchtest, musst du zuerst {% data variables.product.prodname_codeql_cli %} herunterladen. Weitere Informationen findest du unter [Informationen zur CodeQL-Codeüberprüfung in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system).

Wenn du für das Rollout von GHAS {% data variables.product.prodname_professional_services %} verwendest, solltest du diese Punkte beim Kickoffmeeting ausführlich besprechen.

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

Wenn du Kunde von {% data variables.product.prodname_ghe_cloud %} (GHEC) bist, musst du je nach dem, welches CI/CD-System du verwenden möchtest, bestimmte Voraussetzungen erfüllen.

Bei Verwendung von {% data variables.product.prodname_actions %} für das CI/CD-System:
- Damit {% data variables.product.prodname_code_scanning %} ordnungsgemäß integriert und genutzt werden kann, solltest du über grundlegende Kenntnisse in Bezug auf {% data variables.product.prodname_actions %} verfügen, bevor du mit der Installation fortfährst.

Bei Verwendung eines Drittanbietertools für das CI/CD-System:
- Zur Integration der {% data variables.product.prodname_codeql_cli %} solltest du über grundlegende Kenntnisse in Bezug auf das CI/CD-System sowie *nix und Windows, insbesondere über die Ausführung von Befehlen und die Anzeige von Erfolg oder Fehler verfügen. Weitere Informationen zum Integrieren eines Drittanbietertools findest du unter [Verwenden der CodeQL-Codeüberprüfung bei vorhandenen CI-Systemen](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system).

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>Partnerschaft mit GitHub für den Rollout

Bei der Vorbereitung der Implementierung von GHAS solltest du dir überlegen, was von deinem Unternehmen für ein erfolgreiches Projekt verlangt wird. Unsere erfolgreichsten Implementierungen von GHAS basieren auf der gemeinsamen Verantwortung von GitHub und unseren Kunden für den gesamten Prozess, wobei ein Projektbeteiligter des Kunden klar zu benennen ist, der das Projekt leitet.

#### <a name="success-model-for-customer-and-github-responsibilities"></a>Erfolgsmodell für Kunden- und GitHub-Aufgaben

**Kunden-Zuständigkeiten**
- Erfüllung der Voraussetzungen für Infrastruktur und Prozesse
- Leitung des Rollouts und der Implementierung sowie der Planung und Ausführung
- Interne Schulung
- (Optional) Beitrag von {% data variables.product.prodname_codeql %}-Abfragen in der GitHub-Community

**GitHub-Aufgaben**

- Wartung und Verbesserung von Features wie {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}
- Bereitstellung und Wartung der folgenden Dienste: {% data variables.product.prodname_dotcom %}-Dokumentation, {% data variables.product.prodname_dotcom %}-Community, {% data variables.product.prodname_dotcom %}-Support

{% note %}

**Hinweis:** {% data variables.product.prodname_professional_services %} kann dich bei vielen Kundenaufgaben unterstützen. Weitere Informationen findest du unter [GitHub-Dienste und -Support](#github-services-and-support).

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>{% data variables.product.prodname_dotcom %}-Dienste und -Support

### <a name="-data-variablesproductprodname_dotcom--support"></a>{% data variables.product.prodname_dotcom %}-Support

Wenn du während der Implementierung auf Probleme stößt, kannst du in unserer ausführlichen Dokumentation nach Lösungen suchen oder sich an den {% data variables.product.prodname_dotcom %}-Support wenden, ein Team von hochqualifizierten Technikern, die dich bei Issues unterstützen. Weitere Informationen findest du unter [GitHub Enterprise-Support](https://enterprise.github.com/support).

Darüber hinaus kannst du auch unseren [{% data variables.product.prodname_gcf %}](https://github.community/) ausprobieren.

Wenn du einen Premium-Support-Plan erworben hast, kannst du dein Ticket über das [Premium-Support-Portal](https://enterprise.github.com/support) einreichen. Wenn du dir nicht sicher bist, welchen Supportplan du erworben hast, kannst du dich an den zuständigen Vertriebsmitarbeiter wenden oder sich anhand der Planoptionen informieren.

Weitere Informationen zu den Premium-Support-Planoptionen findest du unter:
  - [Premium Support](https://github.com/premium-support) {% ifversion ghec %}
  - [Informationen zum GitHub Premium Support für {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud){% endif %}{% ifversion ghes %}
  - [Informationen zum GitHub Premium Support für {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server){% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

Unser {% data variables.product.prodname_professional_services_team %}-Team kann mit dir zusammenarbeiten, sodass du für {% data variables.product.prodname_GH_advanced_security %} einen erfolgreichen Rollout und eine entsprechende Implementierung durchführen kannst. Wir bieten dir verschiedene Optionen für die Art von Anleitung und Support, die du für deine Implementierung benötigst. Außerdem bieten wir Schulungen und Bootcamps an, damit du in deinem Unternehmen GHAS optimal nutzen kannst.

Wenn du bei der Implementierung mit unserem {% data variables.product.prodname_professional_services_team %}-Team zusammenarbeiten möchtest, solltest du dich vor den Gesprächen zunächst Gedanken über deinen Systementwurf und deine Infrastruktur sowie über die Anzahl der Repositorys machen, die du mit GHAS einrichten möchtest. Darüber hinaus solltest du dir Gedanken darüber machen, welche Ziele du mit diesem Rollout erreichen möchtest.

Die Implementierung ist nur ein Schritt in einem erfolgreichen sicherheitsorientierten Prozess, bei dem du erfährst, wie du GHAS.nutzen kannst. Nachdem du die Implementierung abgeschlossen hast, findest du weitere Informationen zum Rollout in ihrer gesamten Infrastruktur und in allen Codebasen. Wende dich an den zuständigen Vertriebsmitarbeiter, um weitere Informationen zu allen verfügbaren {% data variables.product.prodname_professional_services_team %}-Optionen zu erhalten.

Wenn du ursprünglich das Abonnement von weiteren Diensten gekündigt hast, zu Beginn der Implementierung jedoch feststellst, dass du zusätzliche Unterstützung benötigst, wende dich an den zuständigen Vertriebsmitarbeiter, um zu besprechen, welche Dienstoptionen zur Unterstützung der Implementierung erforderlich sind.
