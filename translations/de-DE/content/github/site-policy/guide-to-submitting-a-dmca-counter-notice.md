---
title: Leitfaden zum Absenden einer DMCA Counter Notice
redirect_from:
  - /dmca-counter-notice-how-to/
  - /articles/dmca-counter-notice-how-to/
  - /articles/guide-to-submitting-a-dmca-counter-notice
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

Dieser Leitfaden beschreibt die Informationen, die GitHub benötigt, um eine Counter Notice zu einem DMCA Takedown Request zu verarbeiten. Zu allgemeineren Fragen über die DMCA ist oder wie GitHub DMCA Takedown Requests verarbeitet, lesen Sie bitte unsere [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy).

Wenn Sie der Meinung sind, dass Ihre Inhalte auf GitHub irrtümlicherweise durch ein DMCA-Takedown Request deaktiviert wurden, haben Sie das Recht, den Takedown durch Einreichen einer Counter Notice anzufechten. Wenn Sie dies tun, werden wir 10-14 Tage warten und Ihre Inhalte dann wieder aktivieren, es sei denn, der Urheberrechtsinhaber leitet bis dahin eine Klage gegen Sie ein. Unser nachstehend aufgeführtes Counter Notice-Formular entspricht dem im DMCA-Statut vorgeschlagenen Formular, das auf der offiziellen Website des U.S. Copyright Office zu finden ist: <https://www.copyright.gov>. Copyright Office's official website: <https://www.copyright.gov>.

Wie bei allen Rechtsfragen ist es immer am besten, sich mit einem Fachmann über Ihre spezifischen Fragen oder Situationen zu beraten. Wir empfehlen dringend, dies zu tun, bevor Sie Maßnahmen ergreifen, die sich auf Ihre Rechte auswirken könnten. Diese Übersicht ist keine Rechtsberatung und sollte nicht als solche betrachtet werden.

### Bevor Sie beginnen

***Sagen Sie die Wahrheit.*** Der DMCA verlangt, dass Sie auf Ihre Counter Notice * unter Strafe des Meineids * schwören. Es ist ein Bundesverbrechen, vorsätzlich in einer eidesstattlichen Erklärung zu lügen. (*See* [U.S. Code, Title 18, Section 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) Submitting false information could also result in civil liability—that is, you could get sued for money damages.

***Stellen Sie Nachforschungen an.*** Die Einreichung einer DMCA-Counter Notice kann echte rechtliche Konsequenzen haben. Wenn die Beschwerdepartei nicht der Meinung ist, dass ihre Takedown Notice falsch war, könnte sie sich dazu entschließen, eine Klage gegen Sie einzureichen, um den Inhalt deaktiviert zu halten. Sie sollten eine gründliche Untersuchung der in der Mitteilung gemachten Vorwürfe durchführen und wahrscheinlich mit einem Anwalt sprechen, bevor Sie eine Counter Notice einreichen.

***You Must Have a Good Reason to Submit a Counter Notice.*** In order to file a counter notice, you must have "a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled." ([U.S. Code, Title 17, Section 512(g)](https://www.copyright.gov/title17/92chap5.html#512).) ([U.S. Code, Title 17, Section 512(g)](https://www.copyright.gov/title17/92chap5.html#512).) Whether you decide to explain why you believe there was a mistake is up to you and your lawyer, but you *do* need to identify a mistake before you submit a counter notice. In der Vergangenheit haben wir Counter Notices erhalten, in denen Fehler in der Take-Down-Notice genannt wurden, wie z.B.: die beschwerdeführende Partei hat nicht das Urheberrecht; ich habe eine Lizenz; der Code wurde unter einer Open-Source-Lizenz veröffentlicht, die meine Verwendung erlaubt; oder die Beschwerde berücksichtigt nicht die Tatsache, dass meine Verwendung durch die Fair-Use-Doktrin geschützt ist. Natürlich könnte die Take-Down-Notice auch andere Mängel aufweisen.

***Urheberrechtsgesetze sind kompliziert.*** Manchmal kann eine Takedown-Notice eine Verletzung in einer Weise vorwerfen, die seltsam oder indirekt erscheint. Urheberrechtsgesetze sind kompliziert und können zu unerwarteten Ergebnissen führen. In einigen Fällen kann eine Takedown-Notice den Vorwurf erheben, dass Ihr Quellcode aufgrund dessen, was er nach dem Kompilieren und Ausführen tun kann, gegen das Gesetz verstößt. Ein Beispiel:
  - In der Notice kann behauptet werden, dass Ihre Software zur [Umgehung von Zugangskontrollen](https://www.copyright.gov/title17/92chap12.html) zu urheberrechtlich geschützten Werken benutzt wird.
  - [Manchmal kann die Verbreitung von Software](https://www.copyright.gov/docs/mgm/) eine Urheberrechtsverletzung sein, wenn Sie Endbenutzer dazu bringen, die Software zu verwenden, um urheberrechtlich geschützte Werke zu verletzen.
  - Eine Urheberrechtsbeschwerde könnte auch auf dem [nicht-literalen Kopieren](https://en.wikipedia.org/wiki/Substantial_similarity) von Designelementen in der Software basieren, und nicht auf dem Quellcode selbst - mit anderen Worten, jemand hat eine Beschwerde eingereicht, in der er behauptet, dass Ihr *Design* seinem eigenen zu ähnlich sieht.

Dies sind nur einige Beispiele für die Komplexität des Urheberrechts. Da es in dieser Art von Fällen viele Nuancen des Gesetzes und einige ungeklärte Fragen gibt, ist es besonders wichtig, professionellen Rat einzuholen, wenn die Anschuldigungen wegen Rechtsverletzung nicht eindeutig zu sein scheinen.

***Eine Counter Notice ist eine rechtliche Erklärung.*** Alle Felder einer Counter Notice müssen vollständig ausgefüllt werden, denn eine Counter Notice ist eine rechtliche Erklärung - nicht nur für uns, sondern auch für die beschwerdeführende Partei. Wie oben erwähnt kann, muss der Beschwerdeführer, wenn er den Inhalt nach Erhalt einer Counter Notice deaktiviert lassen möchte, eine gerichtliche Klage einleiten, um eine gerichtliche Verfügung zu erwirken, die Sie davon abhält, rechtswidrige Aktivitäten bezüglich des Inhalts auf GitHub zu verüben. Mit anderen Worten, Sie könnten verklagt werden (und Sie stimmen dem in der Counter Notice zu).

***Ihre Counter Notice wird veröffentlicht.*** Wie in unserer [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy#d-transparency), **beschrieben, veröffentlichen wir nach der Bearbeitung von personenbezogenen Daten** alle vollständigen und umsetzbaren Counter Notices unter <https://github.com/github/dmca>. Außerdem weisen wir darauf hin, dass wir zur nur bearbeitete Benachrichtigungen veröffentlichen, jedoch eine vollständige, unbearbeitete Kopie jeder Benachrichtigung, die wir erhalten, direkt an jede Partei weitergeben können, deren Rechte dadurch beeinträchtigt werden können. Wenn Sie sich Sorgen um Ihre Privatsphäre machen, können Sie einen Anwalt oder einen anderen gesetzlichen Vertreter zu Rat ziehen, der die Counter Notice in Ihrem Namen einreicht.

***GitHub ist nicht der Richter.*** GitHub übt in diesem Prozess nur wenig Ermessensspielraum aus, als festzustellen, ob die Bekanntmachungen die Mindestanforderungen des DMCA erfüllen. Es obliegt den Parteien (und ihren Anwälten), die Stichhaltigkeit ihrer Ansprüche zu beurteilen, wobei zu bedenken ist, dass Benachrichtigungen unter dem Strafmaß des Meineids abgegeben werden müssen.

***Zusätzliche Ressourcen.*** Wenn Sie zusätzliche Hilfe benötigen, gibt es viele Selbsthilferessourcen online. Lumen hat eine informative Reihe über [Copyright](https://www.lumendatabase.org/topics/5) und [DMCA Safe Harbor](https://www.lumendatabase.org/topics/14). Wenn Sie an einem Open-Source-Projekt beteiligt sind, das Rechtsberatung benötigt, können Sie sich an das [Software Freedom Law Center](https://www.softwarefreedom.org/about/contact/) wenden. Und wenn Sie glauben, dass Sie es mit einem besonders herausfordernden Fall zu tun haben, sind möglicherweise gemeinnützige Organisationen wie die [Electronic Frontier Foundation](https://www.eff.org/pages/legal-assistance) bereit, Ihnen direkt zu helfen oder Sie an einen Anwalt zu verweisen.

### Ihre Counter Notice muss...

1. **Die folgende Aussage enthalten: „Ich habe GitHubs Leitfaden zum Einreichen einer DMCA-Counter Notice gelesen und verstanden."** Wir werden uns nicht weigern, eine ansonsten vollständige Counter Notice zu bearbeiten, wenn Sie diese Erklärung nicht beifügen; allerdings werden wir wissen, dass Sie diese Richtlinien nicht gelesen haben und Sie möglicherweise bitten, sie noch einmal durchzugehen und dies zu tun.

2. *** Den Inhalt, der deaktiviert wurde, und die Stelle, an der er erschien, angeben.*** Der deaktivierte Inhalt sollte in der Take-Down-Benachrichtigung durch die URL angegeben werden. Sie müssen lediglich die URL(s) kopieren, die Sie anfechten möchten.

3. **Ihre Kontaktinformationen beinhalten.** Geben Sie Ihre E-Mail-Adresse, Ihren Namen, Ihre Telefonnummer und Ihre physische Adresse an.

4. ***Die folgende Aussage enthalten: „Ich versichere eidesstattlich, das ich in gutem Glauben davon überzeugt bin, dass das Material aufgrund eines Fehlers oder einer falschen Identifizierung des zu entfernenden oder zu deaktivierenden Materials entfernt oder deaktiviert wurde."*** Sie können auch die Gründe angeben, warum Sie glauben, dass es sich um einen Fehler oder eine falsche Identifizierung handelt. Wenn Sie Ihre Counter Notice als "Hinweis" an die klagende Partei betrachten, ist dies eine Gelegenheit, zu erklären, warum sie nicht den nächsten Schritt machen und eine Klage als Antwort einreichen solltn. Dies ist ein weiterer Grund, bei der Einreichung einer Counter Notice mit einem Anwalt zusammenzuarbeiten.

5. ***Folgende Erklärung einschließen: „Ich akzeptiere die Zuständigkeit des Federal District Court für den Gerichtsbezirk, in dem sich meine Adresse befindet (sofern in den Vereinigten Staaten, andernfalls der Northern District of California, in dem GitHub ansässig ist), und ich akzeptiere die Klagezustellung von der Person, die die DMCA-Benachrichtigung übermittelt hat, oder von einem Vertreter dieser Person.***

6. **Es muss Ihre physische oder elektronische Unterschrift enthalten sein;**

### So reichen Sie Ihre DMCA Counter Notice ein

Der schnellste Weg, um eine Antwort zu erhalten, ist, Ihre Informationen einzugeben und alle Fragen auf unserer {% data variables.contact.contact_dmca %} zu beantworten.

Sie können auch eine E-Mail-Benachrichtigung an <copyright@github.com> senden. Sie können eine Anlage einfügen, wenn Sie möchten, aber bitte auch eine Text-Version Ihres Schreibens in den Text Ihrer Nachricht einfügen.

Wenn Sie Ihre Mitteilung per Post senden müssen, können Sie dies auch tun, aber es wird *wesentlich* länger dauern, bis wir diese empfangen und darauf reagieren – und die 10-14 Tage Wartezeit beginnt mit unserem *Erhaltt* Ihrer Counter Notice. Mitteilungen, die wir per Text-E-Mail erhalten, haben eine wesentlich schnellere Bearbeitungszeit als PDF-Anhänge oder Post. Wenn Sie uns trotzdem Ihre Nachricht zusenden möchten, lautet unsere physische Adresse:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA.
```
