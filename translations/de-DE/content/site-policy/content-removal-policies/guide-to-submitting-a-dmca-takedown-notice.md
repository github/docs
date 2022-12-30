---
title: Anleitung zum Einreichen einer DMCA Takedown Notice (Antrag auf Entfernung von Inhalten im Rahmen des DMCA)
redirect_from:
  - /dmca-notice-how-to
  - /articles/dmca-notice-how-to
  - /articles/guide-to-submitting-a-dmca-takedown-notice
  - /github/site-policy/guide-to-submitting-a-dmca-takedown-notice
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: c664d164136504f695a3954b03b01e0d47191eab
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556573'
---
Dieser Leitfaden beschreibt die Informationen, die GitHub benötigt, um einen DMCA-Takedown-Antrag zu bearbeiten. Wenn Sie allgemeinere Fragen dazu haben, was der DMCA ist oder wie GitHub DMCA-Takedown-Anträge bearbeitet, lesen Sie bitte unsere [Richtlinie zu DMCA-Takedowns](/articles/dmca-takedown-policy).

Aufgrund der Art der Inhalte, die GitHub hostet (hauptsächlich Softwarecode) und der Art und Weise, wie die Inhalte verwaltet werden (mit Git), müssen Beschwerden so spezifisch wie möglich sein. Diese Leitlinien sollen die Bearbeitung von Mitteilungen über mutmaßliche Verstöße so einfach wie möglich machen. Unser unten stehendes Meldeformular entspricht dem im DMCA-Gesetz vorgeschlagenen Formular, das auf der offiziellen Website des U.S. Copyright Office zu finden ist: <https://www.copyright.gov>.

Wie bei allen rechtlichen Angelegenheiten ist es stets ratsam, sich zu Ihren spezifischen Fragen oder Ihrer Situation an einen Fachmann zu wenden. Wir empfehlen Ihnen dringend, dies zu tun, bevor Sie Maßnahmen ergreifen, die Ihre Rechte beeinträchtigen könnten. Dieser Leitfaden ist keine Rechtsberatung und sollte auch nicht als solche verstanden werden.

## Bevor Sie beginnen

***Sagen Sie stets die Wahrheit.** _Eine Urheberrechtsbeschwerde im Rahmen des DMCA ist wie eine eidesstattliche Erklärung, und wenn Sie die Unwahrheit sagen, können Sie_des Meineids bezichtigt werden *. Es ist eine Straftat, in einer eidesstattlichen Erklärung vorsätzlich zu lügen. (* Siehe* [U.S. Code, Titel 18, Abschnitt 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) Die Angabe falscher Informationen kann auch zu einer zivilrechtlichen Haftung führen, d. h. Sie können auf Schadenersatz verklagt werden. Gemäß den Bestimmungen des DMCA ist jede Person, die vorsätzlich falsch aussagt, dass Material oder Aktivitäten eine Verletzung darstellen, [schadensersatzpflichtig](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations).

***Untersuchen.*** Millionen von Nutzern und Organisationen erstellen Projekte auf GitHub. Die Einreichung einer DMCA-Beschwerde gegen ein solches Projekt ist eine ernstzunehmende juristische Anschuldigung, die reale Folgen für reale Personen hat. Daher bitten wir Sie, eine gründliche Untersuchung durchzuführen und einen Anwalt zu konsultieren, bevor Sie die Deaktivierung von Inhalten beantragen. So stellen Sie sicher, dass die Verwendung der Inhalte tatsächlich unzulässig ist.

***Fragen Sie zunächst höflich nach.*** Bevor Sie uns einen Antrag zum Entfernen von Daten senden, können Sie als ersten Schritt den Nutzer direkt kontaktieren. Eventuell finden Sie die Kontaktinformationen des Nutzers auf seiner öffentlichen Profilseite oder in der README-Datei des Repositories, oder Sie können den Nutzer kontaktieren, indem Sie ein Issue oder Pull Request im Repository erstellen. Dies ist nicht unbedingt erforderlich, wird aber geschätzt.

***Reichen Sie den richtigen Antrag ein.*** Wir können nur DMCA-Takedown-Anträge für Werke akzeptieren, die urheberrechtlich geschützt sind, und in dem Antrag muss ein bestimmtes urheberrechtlich geschütztes Werk benannt werden. Wenn Sie eine Beschwerde über Markenmissbrauch einreichen möchten, lesen Sie bitte unsere [Markenrichtlinie](/articles/github-trademark-policy/). Wenn Sie sensible Daten wie Kennwörter entfernen möchten, lesen Sie bitte unsere [Richtlinie zu sensiblen Daten](/articles/github-sensitive-data-removal-policy/). Wenn Sie einen Fall von Verleumdung oder anderem missbräuchlichem Verhalten melden möchten, lesen Sie bitte unsere [Community-Richtlinien](/articles/github-community-guidelines/).

***Der Code unterscheidet sich von anderen kreativen Inhalten.*** GitHub wurde entwickelt, damit Nutzer gemeinsam an Softwarecode arbeiten können. Es ist wesentlich komplizierter, festzustellen, ob eine Urheberrechtsverletzung vorliegt, als beispielsweise bei Fotos, Musik oder Videos.

Es gibt eine Reihe von Merkmalen, durch die sich Code von anderen kreativen Inhalten unterscheidet. Zum Beispiel:

- Ein Repository kann Bits und Stücke von Code von vielen verschiedenen Personen enthalten, aber nur eine Datei oder sogar ein Unterprogramm innerhalb einer Datei verletzt Ihre Urheberrechte.
- Code mischt Funktionalität mit kreativem Ausdruck, aber das Urheberrecht schützt nur die expressiven Elemente, nicht die funktionalen Teile.
- Oft gibt es Lizenzen, die berücksichtigt werden müssen. Nur weil ein Codeabschnitt einen Urheberrechtsvermerk enthält, bedeutet das nicht unbedingt, dass eine Urheberrechtsverletzung vorliegt. Es ist möglich, dass der Code gemäß einer Open-Source-Lizenz verwendet wird.
- Eine bestimmte Verwendung kann [angemessen](https://www.lumendatabase.org/topics/22) sein, wenn nur wenige urheberrechtlich geschützte Inhalte verwendet werden, diese Inhalte auf transformative Weise verwendet werden, wenn die Inhalte für Bildungszwecke verwendet werden, oder wenn eine Kombination der oben genannten Bedingungen vorliegt. Da sich Code natürlich für solche Verwendungen anbietet, ist jeder Anwendungsfall anders und muss individuell betrachtet werden.
- Eine Urheberrechtsverletzung durch Code kann sehr unterschiedlich sein. Daher sind detaillierte Erklärungen und eine genaue Identifizierung des Werks besonders wichtig.

Wenn es um den Umgang mit Code geht, sollten Sie stets mit einem Rechtsexperten über Ihre beabsichtigte Beschwerde zu sprechen.

***Keine Bots.*** Sie sollten die Fakten jeder Deaktivierungsmitteilung, die Sie senden, von einem geschulten Fachmann auswerten lassen. Wenn Sie Ihre Bemühungen an Dritte auslagern, stellen Sie sicher, dass Sie wissen, wie sie arbeiten, und stellen Sie sicher, dass sie keine automatisierten Bots verwenden, um Beschwerden in großen Mengen einzureichen. Diese Beschwerden sind meist ungültig und ihre Bearbeitung führt dazu, dass Projekte unnötigerweise eingestellt werden.

***Urheberrechtsfragen sind komplex.*** Ob ein bestimmtes Werk urheberrechtlich geschützt ist oder nicht, ist manchmal nicht so einfach festzustellen. Beispielsweise sind Fakten (einschließlich Daten) im Allgemeinen nicht urheberrechtlich geschützt. Auch Wörter und kurze Sätze sind im Allgemeinen nicht urheberrechtlich geschützt. URLs und Domainnamen sind im Allgemeinen nicht urheberrechtlich geschützt. Da Sie mit dem DMCA-Verfahren auf urheberrechtlich geschützte Inhalte anwendbar ist, sollten Sie bei Ihrem Anwalt zunächst erfragen, ob Ihre Inhalte geschützt sind oder nicht.

***Möglicherweise erhalten Sie eine Counter Notice.*** Jeder Nutzer, der von Ihrer Takedown Notice betroffen ist, kann eine [Counter Notice](/articles/guide-to-submitting-a-dmca-counter-notice) einreichen. In diesem Fall schalten wir die Inhalte innerhalb von 10 bis 14 Tagen wieder frei, es sei denn, Sie teilen uns mit, dass Sie rechtliche Schritte eingeleitet haben, um den Nutzer daran zu hindern, im Zusammenhang mit den Inhalten auf GitHub rechtswidrige Handlungen vorzunehmen.

***Ihre Beschwerde wird veröffentlicht.*** Wie in unserer [Richtlinie zu DMCA-Takedowns](/articles/dmca-takedown-policy#d-transparency) dargelegt, veröffentlichen wir alle vollständigen und durchsetzbaren Takedown Notices, nachdem wir jegliche personenbezogenen Daten unkenntlich gemacht haben, unter <https://github.com/github/dmca>.

***GitHub tritt nicht als Richter auf.***
GitHub hat in diesem Verfahren wenig Ermessensspielraum und muss lediglich bestimmen, ob die Mitteilungen die Mindestanforderungen des DMCA erfüllen. Es ist Sache der Parteien (und ihrer Anwälte), die Begründetheit ihrer Ansprüche zu beurteilen, wobei zu beachten ist, dass alle Counter Notices in Kenntnis der Strafbarkeit einer falschen eidesstattlichen Versicherung erfolgen müssen.

## Ihre Beschwerde muss...

1. **die folgende Erklärung beinhalten: „I have read and understand GitHub's Guide to Filing a DMCA Notice.”** („Ich habe den Leitfaden von GitHub zur Einreichung einer DMCA-Notice gelesen und verstanden.”) Wenn diese Erklärung nicht enthalten ist, werden wir die Beschwerde dennoch bearbeiten, sofern sie ansonsten vollständig ist. Wir müssen jedoch davon ausgehen, dass Sie diese Richtlinien nicht gelesen haben, und werden Sie gegebenenfalls auffordern, dies nachzuholen.

2. **Benennen Sie das urheberrechtlich geschützte Werk, bei dem Sie glauben, dass eine Urheberrechtsverletzung stattgefunden hat.** Diese Information ist wichtig, da sie dem betroffenen Nutzer hilft, Ihren Anspruch zu beurteilen und ihm die Möglichkeit gibt, Ihre Arbeit mit seiner zu vergleichen. Wie genau Sie das betroffene Werk benennen können, hängt von der Natur des Werks ab. Wenn Ihr Werk veröffentlicht wurde, können Sie vielleicht einfach auf eine Webseite verweisen, auf der es sich befindet. Wenn Ihr Werk urheberrechtlich geschützt und nicht veröffentlicht ist, können Sie es beschreiben und erklären, dass es urheberrechtlich geschützt ist. Wenn Sie es beim Copyright Office registriert haben, sollten Sie die Registrierungsnummer angeben. Wenn Sie der Auffassung sind, dass der gehostete Inhalt eine direkte, wörtliche Kopie Ihrer Arbeit ist, können Sie diese Tatsache auch einfach erklären.

3. **Identifizieren Sie das Material, von dem Sie meinen, dass es die Urheberrechte des in Punkt 2 genannten Werks verletzt.** Es ist wichtig, bei Ihrer Identifizierung so genau wie möglich zu sein. Diese Identifizierung muss ausreichend sein, damit GitHub das Material finden kann. Das bedeutet zumindest, dass Sie die URL zu dem Material angeben sollten, von dem Sie meinen, dass es Ihr Urheberrecht verletzt. Wenn Sie behaupten, dass weniger als ein ganzes Repository eine Verletzung darstellt, benennen Sie die spezifischen Dateien oder Zeilennummern innerhalb einer Datei, die Ihrer Meinung nach eine Verletzung darstellen. Wenn Sie meinen, dass der gesamte Inhalt einer URL eine Verletzung darstellt, teilen Sie uns dies bitte auch ausdrücklich mit. 
   - Bitte beachten Sie, dass GitHub *keine* [Forks](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) automatisch deaktivieren wird, wenn ein Parent-Repository deaktiviert wird. Wenn Sie die Forks eines Repositories untersucht und analysiert haben und der Meinung sind, dass sie ebenfalls Urheberrechte verletzen, geben Sie bitte jeden mutmaßlich verletzenden Fork explizit an. Bitte bestätigen Sie auch, dass Sie jeden einzelnen Fall untersucht haben und dass Ihre eidesstattlichen Erklärungen für jeden identifizierten Fork gelten. In seltenen Fällen können Sie eine Urheberrechtsverletzung in einem vollständigen Repository geltend machen, das aktiv geforkt wird. Wenn Sie zu dem Zeitpunkt, an dem Sie Ihre Mitteilung eingereicht haben, alle vorhandenen Abspaltungen dieses Repositories als mutmaßlich verletzend identifiziert haben, würden wir bei Bearbeitung der Mitteilung einen gültigen Anspruch gegen alle Abspaltungen in diesem Netzwerk bearbeiten. Wir würden dies aufgrund der Wahrscheinlichkeit tun, dass alle neu erstellten Abspaltungen denselben Inhalt enthalten würden. Wenn das gemeldete Netzwerk, das die mutmaßlich verletzenden Inhalte enthält, größer als einhundert (100) Repositories ist und es daher schwierig wäre, es in seiner Gesamtheit zu überprüfen, können wir außerdem in Betracht ziehen, das gesamte Netzwerk zu deaktivieren, wenn Sie in Ihre Mitteilung folgende Aussage aufnehmen: „"Based on the representative number of forks you have reviewed, I believe that all or most of the forks are infringing to the same extent as the parent repository." („Auf der Grundlage der von mir überprüften repräsentativen Anzahl von Forks bin ich der Ansicht, dass alle oder die meisten Forks im gleichen Maße wie das übergeordnete Repository rechtsverletzend sind.“) Ihre eidesstattliche Erklärung würde für diese Erklärung gelten.

4. **Erklären Sie, was der betroffene Nutzer tun müsste, um den Verstoß zu beheben.** Auch hier ist Genauigkeit sehr wichtig. Wenn wir Ihre Beschwerde an den Nutzer weiterleiten, wird ihm mitgeteilt, was er tun muss, um zu vermeiden, dass der Rest seiner Inhalte deaktiviert wird. Muss der Nutzer nur eine Anerkennung des Copyrights hinzufügen? Muss er bestimmte Zeilen in seinem Code oder ganze Dateien löschen? In manchen Fällen ist der gesamte Inhalt eines Nutzers mutmaßlich rechtsverletzend, und er kann nichts anderes tun, als alles zu löschen. Wenn dem so ist, machen Sie das bitte auch deutlich.

5. **Geben Sie Ihre Kontaktdaten an.** Geben Sie Ihre E-Mail-Adresse, Ihren Namen, Ihre Telefonnummer und Ihre Anschrift an.

6. **Geben Sie die Kontaktinformationen der Person an, die Ihr Urheberrecht verletzt hat, falls Sie sie haben.** Normalerweise reicht es, den GitHub Nutzernamen anzugeben, der mit dem mutmaßlich rechtsverletzenden Inhalt verknüpft ist. In manchen Fällen haben Sie jedoch zusätzliche Informationen über die Person, die mutmaßlich Ihre Rechte verletzt hat. Wenn ja, geben Sie diese Informationen bitte an.

7. **die folgende Erklärung beinhalten: „Ich bin nach Treu und Glauben der Ansicht, dass die Verwendung der oben beschriebenen Marke nicht vom Markeninhaber, seinem Vertreter oder dem Gesetz autorisiert wurde. Ich habe das Fair-Use-Prinzip bei meiner Bewertung berücksichtigt.”**

8. **Fügen Sie außerdem bitte folgende Erklärung ein: „Ich erkläre, dass die Informationen in dieser Mitteilung richtig sind, und ich erkläre ferner an Eides statt, dass ich befugt bin, im Namen des Inhabers des exklusiven und mutmaßlich verletzten Rechts aufzutreten.”**

9. **Setzen Sie Ihre physische oder elektronische Unterschrift darunter.**

## Beschwerden über Anti-Umgehungstechnologie

Der Copyright Act verbietet die Umgehung technischer Maßnahmen, die den Zugang zu urheberrechtlich geschützten Werken wirksam kontrollieren. Wenn Sie glauben, dass auf GitHub gehostete Inhalte gegen dieses Verbot verstoßen, senden Sie uns bitte einen Bericht über unseren {% data variables.contact.contact_dmca %}. Ein Anspruch wegen Umgehung von Maßnahmen muss die folgenden Angaben zu den eingesetzten technischen Maßnahmen sowie zur Art und Weise enthalten, wie sie durch das betreffende Projekt umgangen werden. Insbesondere muss die Mitteilung an GitHub detaillierte Erklärungen enthalten, die Folgendes beschreiben:
1. Was die technischen Maßnahmen sind,
2. wie sie den Zugriff auf das urheberrechtlich geschützte Material effektiv kontrollieren und 
3. wie das betreffende Projekt darauf abzielt, die zuvor beschriebenen technischen Schutzmaßnahmen zu umgehen.

## So übermitteln Sie Ihre Beschwerde

Sie erhalten am schnellsten eine Antwort, wenn Sie Ihre Informationen auf unserem {% data variables.contact.contact_dmca %} eingeben und dort alle Fragen beantworten.

Sie können auch eine E-Mail-Benachrichtigung an <copyright@github.com> senden. Wenn Sie möchten, können Sie einen Anhang beifügen, Ihre E-Mail sollte aber auch eine Klartextversion Ihres Schreibens im Textbereich enthalten.

Sie können Ihre Notice auch per Post senden, aber es dauert *sehr viel länger*, bis wir sie erhalten und darauf reagieren können. Mitteilungen, die wir als Klartext in einer E-Mail erhalten, werden wesentlich schneller bearbeitet als PDF-Anhänge oder Postzustellungen. Wenn Sie uns Ihre Counter Notice dennoch per Post zusenden möchten, lautet unsere Anschrift:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA. 94107
```
