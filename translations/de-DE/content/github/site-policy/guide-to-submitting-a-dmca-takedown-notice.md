---
title: Leitfaden zum Absenden einer DMCA Takedown Notice
redirect_from:
  - /dmca-counter-notice-how-to/
  - /articles/dmca-notice-how-to/
  - /articles/guide-to-submitting-a-dmca-takedown-notice
versions:
  free-pro-team: '*'
---

Dieser Leitfaden beschreibt die Informationen, die GitHub benötigt, um einen DMCA Takedown Request zu verarbeiten. Zu allgemeineren Fragen über die DMCA ist oder wie GitHub DMCA Takedown Requests verarbeitet, lesen Sie bitte unsere [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy).

Aufgrund der Art von Github gehosteten Inhalte (meist Softwarecode) und der Art und Weise, wie Inhalte verwaltet werden (mit Git), müssen Beschwerden so spezifisch wie möglich sein. Diese Richtlinien sollen die Bearbeitung von Benachrichtigungen über mutmaßliche Urheberrechtsverletzungen so unkompliziert wie möglich gestalten. Unser nachstehend aufgeführtes Notice-Formular entspricht dem im DMCA-Statut vorgeschlagenen Formular, das auf der offiziellen Website des U.S. Copyright Office zu finden ist: <https://www.copyright.gov>. Copyright Office's official website: <https://www.copyright.gov>.

Wie bei allen Rechtsfragen ist es immer am besten, sich mit einem Fachmann über Ihre spezifischen Fragen oder Situationen zu beraten. Wir empfehlen dringend, dies zu tun, bevor Sie Maßnahmen ergreifen, die sich auf Ihre Rechte auswirken könnten. Diese Übersicht ist keine Rechtsberatung und sollte nicht als solche betrachtet werden.

### Bevor Sie beginnen

***Sagen Sie die Wahrheit.*** Der DMCA verlangt, dass Sie die Tatsachen in Ihrer Urheberrechtsbeschwerde * eidesstattlich beschwören*. Es ist ein Bundesverbrechen, vorsätzlich in einer eidesstattlichen Erklärung zu lügen. (*See* [U.S. Code, Title 18, Section 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) Submitting false information could also result in civil liability — that is, you could get sued for money damages. Der DMCA selbst [gewährt Schadenersatz](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations) gegen jede Person, die wissentlich falsche Aussagen über die Verletzung von Inhalten oder Aktivitäten macht.

***Stellen Sie Ermittlungen an.*** Millionen von Benutzern und Organisationen stecken ihr Herz und ihre Seele in die Projekte, die sie auf GitHub erstellen und zu denen sie beitragen. Die Einreichung einer DMCA-Beschwerde gegen ein solches Projekt ist eine schwerwiegende rechtliche Anschuldigung, die echte Folgen für echte Menschen mit sich bringt. Aus diesem Grund bitten wir Sie, eine gründliche Untersuchung durchzuführen und sich mit einem Anwalt zu beraten, bevor Sie einen Takedown einreichen, um sicherzustellen, dass die Verwendung tatsächlich nicht zulässig ist.

***Fragen Sie zunächst höflich nach.*** Ein guter erster Schritt, bevor Sie uns eine Takedown Notice senden, besteht darin, den Benutzer direkt zu kontaktieren. Benutzer haben möglicherweise Kontaktinformationen auf ihrer öffentlichen Profilseite oder in der README-Datei des Repositorys aufgelistet, oder Sie können Kontakt aufnehmen, indem Sie ein Issue oder ein Pull Request im Repository erstellen. Dies ist nicht unbedingt erforderlich, aber es ist höflich.

***Senden Sie die richtige Anfrage.*** Wir können nur DMCA-Takedown-Notices für urheberrechtlich geschützte Werke akzeptieren, die ein bestimmtes urheberrechtlich geschütztes Werk identifizieren. Wenn Sie eine Beschwerde über Markenmissbrauch haben, lesen Sie bitte unsere [Markenverletzungsrichtlinie](/articles/github-trademark-policy/). Wenn Sie sensible Daten wie Passwörter entfernen möchten, lesen Sie bitte unsere [Richtlinie zu sensiblen Daten](/articles/github-sensitive-data-removal-policy/). Wenn Sie es mit Verleumdung oder anderem missbräuchlichem Verhalten zu tun haben, lesen Sie bitte unsere [Community-Richtlinien](/articles/github-community-guidelines/).

***Code unterscheidet sich von anderen kreativen Inhalten.*** GitHub wurde für die Zusammenarbeit mit Softwarecode entwickelt. Dadurch gestaltet sich die Identifizierung einer gültigen Urheberrechtsverletzung komplizierter, als dies beispielsweise bei Fotos, Musik oder Videos der Fall wäre.

Es gibt eine Reihe von Gründen, warum sich Code von anderen kreativen Inhalten unterscheidet. Zum Beispiel:

- Ein Repository kann einzelne Teile von Codes von vielen verschiedenen Personen enthalten, aber nur eine Datei oder sogar eine Subroutine innerhalb einer Datei verletzt Ihre Urheberrechte.
- Code vermischt Funktionalität mit kreativem Ausdruck, aber das Urheberrecht schützt nur die darstellenden Elemente, nicht die Teile, die funktional sind.
- Oft sind Lizenzen zu berücksichtigen. Nur weil ein Stück Code einen Copyright-Hinweis hat, bedeutet das nicht notwendigerweise, dass es sich um eine Verletzung handelt. Es ist möglich, dass der Code in Übereinstimmung mit einer Open-Source-Lizenz verwendet wird.
- Es kann eine [lautere Nutzung](https://www.lumendatabase.org/topics/22) vorliegen, wenn nur ein kleiner Teil an urheberrechtlich geschütztem Inhalt verwendet wird, wenn dieser Inhalt in einer umgestaltenden Weise verwendet wird, wenn er für pädagogische Zwecke oder für eine Kombination der oben genannten Zwecke verwendet wird. Da sich Code natürlich für solche Verwendungen eignet, ist jeder Anwendungsfall anders und muss gesondert betrachtet werden.
- Code kann auf viele verschiedene Arten als Verstoß geltend gemacht werden, wobei detaillierte Erklärungen und Identifizierungen von Werken erforderlich sind.

Diese Liste ist nicht erschöpfend, weshalb es besonders wichtig ist, mit einem Rechtsexperten über Ihre vorgeschlagene Beschwerde zu sprechen, wenn es um Code geht.

***Keine Bots.*** Sie sollten die Fakten bezüglich jeder Takedown Notice, die Sie senden, von einem geschulten Fachmann bewerten lassen. Wenn Sie Dritte mit diesen Aufgaben betrauen, stellen Sie sicher, dass Sie deren Arbeitsweise kennen, und stellen Sie sicher, dass sie keine automatisierten Bots verwenden, um Massenbeschwerden einzureichen. Diese Beschwerden sind oft ungültig und ihre Bearbeitung führt dazu, dass Projekte unnötigerweise entfernt werden!

***Fragen des Urheberrechts sind komplex.*** Es kann sehr schwierig, sein festzustellen, ob ein bestimmtes Werk urheberrechtlich geschützt ist oder nicht. Beispielsweise sind Fakten (einschließlich Daten) in der Regel nicht urheberrechtlich geschützt. Wörter und kurze Phrasen sind in der Regel nicht urheberrechtlich geschützt. URLs und Domainnamen sind in der Regel nicht urheberrechtlich geschützt. Da Sie den DMCA-Prozess nur verwenden können, um urheberrechtlich geschützte Inhalte zu beanstanden, sollten Sie mit einem Anwalt sprechen, wenn Sie Fragen dazu haben, ob Ihre Inhalte geschützt werden können oder nicht.

***Sie können eine Counter Notice erhalten.*** Jeder Benutzer, der von Ihrer Takedown-Notice betroffen ist, kann sich dazu entschließen, eine [Counter Notice](/articles/guide-to-submitting-a-dmca-counter-notice) einzureichen. Wenn dies der Fall ist, werden wir dessen Inhalte innerhalb von 10-14 Tagen wieder aktivieren, es sei denn, Sie benachrichtigen uns, dass Sie eine Klage eingeleitet haben, um den Benutzer daran zu hindern, sich an urheberrechtsverletzenden Aktivitäten im Zusammenhang mit den Inhalten auf GitHub zu beteiligen.

***Ihre Beschwerde wird veröffentlicht.*** Wie in unserer [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy#d-transparency), beschrieben, veröffentlichen wir nach der Bearbeitung von personenbezogenen Daten alle vollständigen und umsetzbaren Takedown Notices unter <https://github.com/github/dmca>.

***GitHub ist nicht der Richter.*** GitHub übt in diesem Prozess nur wenig Ermessensspielraum aus, als festzustellen, ob die Bekanntmachungen die Mindestanforderungen des DMCA erfüllen. Es obliegt den Parteien (und ihren Anwälten), die Stichhaltigkeit ihrer Ansprüche zu beurteilen, wobei zu bedenken ist, dass Benachrichtigungen unter dem Strafmaß des Meineids abgegeben werden müssen.

### Ihre Beschwerde muss ...

1. **Die folgende Aussage enthalten: „Ich habe GitHubs Leitfaden zum Einreichen einer DMCA-Notice gelesen und verstanden."** Wir werden uns nicht weigern, eine ansonsten vollständige Counter Notice zu bearbeiten, wenn Sie diese Erklärung nicht beifügen. Allerdings werden wir wissen, dass Sie diese Richtlinie nicht gelesen haben und Sie möglicherweise bitten, sie noch einmal durchzulesen.

2. **Das urheberrechtlich geschützte Werk, das Ihrer Meinung nach verletzt wurde, identifizieren.** Diese Informationen sind wichtig, weil sie dem betroffenen Benutzer helfen, Ihre Behauptung zu überprüfen und ihm die Möglichkeit geben, Ihr eigenes Werk mit seinem zu vergleichen. Wie genau Ihre Angaben sind, hängt von der Art des Werks ab, gegen das Ihrer Meinung nach verstoßen wurde. Wenn Sie Ihr Werk veröffentlicht haben, können Sie vielleicht einfach auf eine Webseite verlinken, auf der es sich befindet. Wenn es proprietär und nicht veröffentlicht ist, können Sie es beschreiben und erklären, dass es proprietär ist. Wenn Sie es beim Copyright Office registriert haben, sollten Sie die Registrierungsnummer angeben. Wenn Sie behaupten, dass es sich bei dem gehosteten Inhalt um eine direkte, wörtliche Kopie Ihrer Arbeit handelt, können Sie diese Tatsache auch einfach erklären.

3. **Das Material identifizieren, von dem Sie behaupten, dass es das in Punkt 2 aufgeführte urheberrechtlich geschützte Werk verletzt.** Es ist wichtig, bei Ihrer Beschreibung so spezifisch wie möglich zu sein. Diese Bezeichnung muss detailliert genug sein, damit GitHub das Material ermitteln kann. Dies bedeutet, dass Sie zumindest die URL zu dem Material einfügen sollten, das angeblich Ihr Urheberrecht verletzt. Wenn Sie behaupten, dass weniger als ein ganzes Repository verletzt wird, identifizieren Sie die spezifische(n) Datei(en) oder Zeilennummern in einer Datei, die angeblich Ihr Urheberrecht verletzen. Wenn Sie behaupten, dass der gesamte Inhalt einer URL gegen das Urheberrecht verstößt, bitten wir Sie, auch dies ausdrücklich zu erwähnen. Bitte beachten Sie abschließend, dass GitHub *nicht* automatisch [Forks](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) deaktiviert, wenn Sie ein übergeordnetes Repository deaktivieren. Wenn Sie den Fork eines Repositorys untersucht und analysiert haben und glauben, dass auch diese gegen Ihr Urheberrecht verstoßen, geben Sie bitte explizit jeden angeblich verletzenden Fork an. Bitte bestätigen Sie auch, dass Sie jeden Einzelfall untersucht haben und dass Ihre eidesstattlichen Erklärungen für jede identifizierte Fork gelten.

4. **Erläutern, was der betroffene Benutzer tun müsste, um die Zuwiderhandlung zu beheben.** Auch hier sind Details sehr wichtig. Wenn wir Ihre Beschwerde an den Benutzer weiterleiten, wird ihm mitgeteilt, was er tun muss, um zu vermeiden, dass der Rest seines Inhalts deaktiviert wird. Muss der Benutzer nur eine Anerkennungserklärung beifügen? Müssen sie bestimmte Zeilen in ihrem Code oder ganze Dateien löschen? Natürlich verstehen wir, dass in manchen Fällen der gesamte Inhalt eines Benutzers als Verstoß geltend gemacht werden kann, und sie nichts anderes tun können, als alles zu löschen. Wenn das der Fall ist, weisen Sie bitte ebenfalls darauf hin.

5. **Ihre Kontaktinformationen beinhalten.** Geben Sie Ihre E-Mail-Adresse, Ihren Namen, Ihre Telefonnummer und Ihre physische Adresse an.

6. **Die Kontaktinformationen des mutmaßlichen Urheberrechtsverletzers beinhalten, wenn Ihnen diese bekannt sind.** In der Regel genügt die Angabe des GitHub-Benutzernamens, der mit dem angeblich verletzenden Inhalt verknüpft ist. Es kann jedoch Fälle geben, in denen Sie zusätzliches Wissen über den mutmaßlichen Rechtsverletzer haben. Wenn ja, teilen Sie uns diese Informationen mit.

7. **Die folgende Erklärung beinhalten: „Ich bin in gutem Glauben der Ansicht, dass die oben beschriebene Nutzung des urheberrechtlich geschützten Materials auf den gegen das Urheberrecht verstoßenden Webseiten nicht vom Inhaber des Urheberrechts, seinem Vertreter oder dem Gesetz autorisiert ist. Ich habe hierbei das Fair-Use-Prinzip berücksichtigt."**

8. **Fügen Sie auch die folgende Erklärung ein: „Ich versichere eidesstattlich, dass die Informationen in dieser Benachrichtigung korrekt sind und dass ich der Eigentümer des betreffenden Urheberrechts bin, deren ausschließliches Recht angeblich verletzt wurde, oder dass ich befugt bin, im Namen des Eigentümers zu handeln."**

9. **Es muss Ihre physische oder elektronische Unterschrift enthalten sein;**

### Beschwerden über Anti-Umgehungstechnologie

Das Urheberrechtsgesetz verbietet auch die Umgehung technologischer Maßnahmen, die den Zugang zu urheberrechtlich geschützten Werken wirksam kontrollieren. Wenn Sie glauben, dass auf GitHub gehostete Inhalte gegen dieses Verbot verstoßen, senden Sie uns bitte einen Bericht über unsere {% data variables.contact.contact_dmca %}, und geben Sie spezifische Informationen darüber an, welche Inhalte gegen dieses Verbot verstoßen, welche technologischen Maßnahmen Sie ergriffen haben und warum der Inhalt gegen das Verbot verstößt.

### So reichen Sie Ihre Beschwerde ein

Der schnellste Weg, um eine Antwort zu erhalten, ist, Ihre Informationen einzugeben und alle Fragen auf unserer {% data variables.contact.contact_dmca %} zu beantworten.

Sie können auch eine E-Mail-Benachrichtigung an <copyright@github.com> senden. Sie können eine Anlage einfügen, wenn Sie möchten, aber bitte auch eine Text-Version Ihres Schreibens in den Text Ihrer Nachricht einfügen.

Wenn Sie Ihre Nachricht auf dem Postweg verschicken müssen, können Sie dies auch tun aber es wird *wesentlich* länger dauern, bis wir diese erhalten und beantworten. Mitteilungen, die wir per Text-E-Mail erhalten, haben eine wesentlich schnellere Bearbeitungszeit als PDF-Anhänge oder Post. Wenn Sie uns trotzdem Ihre Nachricht zusenden möchten, lautet unsere physische Adresse:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA.
```
