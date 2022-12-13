---
title: Untersuchung zu Zitaten
intro: A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.
redirect_from:
- /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
ms.openlocfilehash: cacf9a63013c5bbf9b7d867e088640ff01400289
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068505"
---
Von: Albert Ziegler (@wunderalbert)

## <a name="-data-variablesproductprodname_dotcom--copilot-parrot-or-crow"></a>{% data variables.product.prodname_dotcom %} Copilot: Papagei oder Krähe?
Ein erster Blick auf das Auswendiglernen in {% data variables.product.prodname_dotcom %} Copilot-Vorschlägen

## <a name="introduction"></a>Einführung

{% data variables.product.prodname_dotcom %} Copilot wird mit Milliarden von Zeilen öffentlichen Codes trainiert. Die Vorschläge, die das Tool dir anzeigt, sind an deinen Code angepasst, die zugrunde liegende Verarbeitung basiert jedoch auf dem Code anderer Personen.

Wie direkt ist die Beziehung zwischen dem vorgeschlagenen Code und dem Code, auf dem dieser basiert? In einem kürzlich erschienenen Paper, das zum Nachdenken anregt<sup id="anchor1">[1](#footnote1)</sup>, haben Bender, Gebru et al. für KI-Systeme wie {% data variables.product.prodname_dotcom %} Copilot den Begriff „stochastische Papageien“ geprägt. Oder wie eine Kollegin, die ebenfalls bei {% data variables.product.company_short %} als Machine Learning Engineer tätig ist<sup id="anchor2">[2](#footnote2)</sup>, im Rahmen einer Unterhaltung in der Teeküche meinte: Diese Systeme können wie „ein Kleinkind mit einem fotografischen Gedächtnis“ wirken.

Dies sind bewusst stark vereinfachte Darstellungen. Viele Vorschläge von {% data variables.product.prodname_dotcom %} Copilot fühlen sich in hohem Maße genau auf die konkrete Codebasis zugeschnitten an, an der der Benutzer bzw. die Benutzerin gerade arbeitet. Häufig wirkt das Tool weniger wie ein Papagei, sondern vielmehr wie eine Krähe, die aus kleinen Blöcken ein neues Werkzeug baut<sup id="anchor3">[3](#footnote3)</sup>. Man kann jedoch nicht leugnen, dass {% data variables.product.prodname_dotcom %} Copilot über ein erstaunliches Gedächtnis verfügt:

![Film mit Demonstration von Copilot](/assets/images/help/copilot/resources_recitation_example_zen.gif)

Hier habe ich {% data variables.product.prodname_dotcom %} Copilot bewusst angewiesen<sup id="anchor4">[4](#footnote4)</sup>, einen sehr bekannten Text zu zitieren, den das Tool offensichtlich auswendig kann. Ich kann auch einige Texte auswendig. Ich erinnere mich beispielsweise immer noch an einige Gedichte, die ich in der Schule auswendig gelernt habe. Allerdings war ich unabhängig vom Thema einer Unterhaltung noch nie versucht, diese in eine vollkommen andere Richtung zu lenken, indem ich begonnen habe, in einem jambischen Vierheber zu sprechen und von Narzissen zu schwärmen.

Ist dies (oder vielmehr die Entsprechung hierzu beim Programmieren) also etwas, wozu {% data variables.product.prodname_dotcom %} Copilot neigt? Wie viele der Vorschläge sind einzigartig, und wie oft wiederholt Copilot einfach wie ein Papagei passend aussehenden Code, der dem Tool im Rahmen des Trainings begegnet ist?

## <a name="the-experiment"></a>Das Experiment

In den frühen Phasen der Entwicklung von {% data variables.product.prodname_dotcom %} Copilot haben fast 300 Mitarbeiter*innen das Tool im Rahmen einer internen Testphase bei ihrer täglichen Arbeit verwendet. Durch diese Testphase verfügten wir über ein gutes Dataset für eine Überprüfung auf Zitate. Ich wollte herausfinden, wie oft der Vorschlag von {% data variables.product.prodname_dotcom %} Copilot ein Zitat von etwas war, das dem Tool zuvor begegnet war.

Ich habe die Untersuchung auf Python-Vorschläge bis zum 7. Mai 2021 begrenzt (dem Tag, an dem wir begonnen haben, die Daten zu extrahieren). Hierdurch blieben 453.780 auf 396 „Benutzerwochen“ verteilte Vorschläge übrig. Benutzerwochen sind Kalenderwochen, in denen ein*e Benutzer*in aktiv {% data variables.product.prodname_dotcom %} Copilot für Python-Code verwendet hat.

### <a name="automatic-filtering"></a>Automatische Filterung

453.780 Vorschläge sind zwar viel, allerdings konnten viele davon direkt verworfen werden. Für die interessanten Fälle muss man Abfolgen von „Wörtern“ betrachten, die im Vorschlag in derselben Reihenfolge stehen wie in dem Code, der zum Trainieren von {% data variables.product.prodname_dotcom %} Copilot verwendet wurde. In diesem Kontext zählen Satzzeichen, Klammern und andere Sonderzeichen alle als „Wörter“, während Tabstoppzeichen, Leerzeichen und sogar Zeilenumbrüche vollständig ignoriert werden. Schließlich ist ein Zitat auch dann immer noch ein Zitat, wenn es über einen Einzug aus einem Tabstoppzeichen oder acht Leerzeichen verfügt.

Einer der Vorschläge von {% data variables.product.prodname_dotcom %} Copilot war beispielsweise der folgende reguläre Ausdruck für Zahlen, die durch Leerräume getrennt sind:

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

Dies wären genau 100 „Wörter“ im oben erläuterten Sinne. Hierbei handelt es sich jedoch um ein besonders dichtes Beispiel: Eine durchschnittliche nicht leere Codezeile verfügt über nur 10 „Wörter“. Ich habe diese Untersuchung auf Fälle beschränkt, in denen die Überschneidung mit dem Code, der beim Training von {% data variables.product.prodname_dotcom %} Copilot verwendet wurde, mindestens 60 dieser „Wörter“ umfasst. Irgendwo muss man die Grenze ziehen, und ich denke, es ist eher selten der Fall, dass kürzere Sequenzen von großem Interesse wären. Tatsächlich sind die meisten interessanten Fälle, die später identifiziert wurden, sehr weit von diesem Schwellenwert von 60 entfernt.

Wenn die Überschneidung auch den Teil umfasst, den der bzw. die Benutzer*in bereits geschrieben hat, wird dieser bei der Länge ebenfalls berücksichtigt. Schließlich kann es sein, dass der bzw. die Benutzer*in diesen Kontext ebenfalls mithilfe von {% data variables.product.prodname_dotcom %} Copilot verfasst hat.

Im folgenden Beispiel hat der bzw. die Benutzer*in mit dem Schreiben eines sehr gängigen Codeausschnitts begonnen. {% data variables.product.prodname_dotcom %} Copilot vervollständigt diesen. Der beim Vervollständigen ergänzte Teil selbst ist zwar ziemlich kurz, zusammen mit dem bereits vorhandenen Code liegt die Länge jedoch über dem Schwellenwert, und das Beispiel wird beibehalten. 

![Beispielcode](/assets/images/help/copilot/example_last_straw.png)

Bei diesem Vorgehen werden so viele Beispiele zugelassen, dass viele eher „langweilige“ Beispiele wie die beiden obigen beibehalten werden. Dennoch wird effektiv die menschliche Analyse der interessanten Fälle einbezogen, und mehr als 99 % der Copilot-Vorschläge werden aussortiert.

### <a name="manual-bucketing"></a>Manuelles Zuordnen zu Buckets

Nach dem Filtern waren noch 473 Vorschläge übrig. Diese waren jedoch sehr unterschiedlich:

1. Einige waren im Grunde genommen nur Wiederholungen eines anderen Falls, der ebenfalls herausgefiltert wurde. Beispielsweise kommt es manchmal vor, dass {% data variables.product.prodname_dotcom %} Copilot einen Vorschlag macht, der Entwickler eine Kommentarzeile eingibt und {% data variables.product.prodname_dotcom %} Copilot dann wieder einen sehr ähnlichen Vorschlag macht. Diese Fälle habe ich als Duplikate aus der Analyse entfernt.
2. Einige Vorschläge waren lange, repetitive Sequenzen, wie das folgende Beispiel, bei dem die wiederholten `‘<p>’`-Blöcke selbstverständlich irgendwo im Trainingsdataset gefunden werden: <br>![Beispiel für Wiederholungen](/assets/images/help/copilot/example_repetitions.png)<br> Solche Vorschläge können hilfreich sein (Testfälle, reguläre Ausdrücke) oder nicht hilfreich (wie in diesem Fall, denke ich). In jedem Fall passen sie nicht zu der Idee des Auswendiglernens, die ich zu Beginn dieser Untersuchung im Kopf hatte.
3. Bei einigen Vorschlägen handelte es sich um Standardsammlungen wie natürliche Zahlen, Primzahlen, Börsenticker oder das griechische Alphabet: <br>![Beispiel für das griechische Alphabet](/assets/images/help/copilot/example_greek.png)
4. Bei einigen Vorschlägen handelte es sich um häufig verwendete und einfache, vielleicht sogar universelle Methoden, etwas Bestimmtes zu erreichen, bei denen es sehr wenige natürliche Freiheiten gibt. So scheint mir beispielsweise der Mittelteil des folgenden Ausschnitts mehr oder weniger die Standardmethode für die Verwendung des BeautifulSoup-Pakets zum Parsen einer Wikipedia-Liste zu sein. Tatsächlich wird in dem Codeausschnitt mit der höchsten Übereinstimmung mit den Trainingsdaten von {% data variables.product.prodname_dotcom %} Copilot<sup id="anchor5">[5](#footnote5)</sup> dieser Code verwendet, um einen anderen Artikel zu parsen, und dann etwas anderes mit den Ergebnissen gemacht. <br>![Beispiel für Beautiful Soup](/assets/images/help/copilot/example_beautiful_soup.png) <br>Dies passt auch nicht zu meiner Vorstellung von einem Zitat. Es ist ein bisschen so, wie wenn jemand sagt: „Ich bringe den Müll raus, bin gleich wieder da.“ Dies ist eine Aussage, kein Zitat, auch wenn genau dieser Satz zuvor schon viele Male gesagt wurde.
5. Und dann gibt es noch alle anderen Fälle. Dies sind die Fälle mit zumindest etwas spezifischer Überschneidung im Code oder in den Kommentaren. Diese interessieren mich am meisten und sind auch das, worauf ich mich im Folgenden konzentrieren werde.

Bei dieser Zuordnung zu Buckets gibt es naturgemäß einige Randfälle<sup id="anchor6">[6](#footnote6)</sup>, und die Meinungen dazu, wo diese einzusortieren sind, können auseinandergehen. Vielleicht bist du schon mit den verschiedenen Buckets selbst nicht einverstanden.

Daher stellen wir dieses Dataset als Open-Source-Dataset bereit<sup id="anchor7">[7](#footnote7)</sup>. Wenn du die Zuordnung zu Buckets etwas anders besser findest oder dich für andere Aspekte des papageiartigen Wiederholens der Inhalte des Trainingsdatasets durch GitHub Copilot interessierst, kannst du den nächsten Abschnitt auch einfach ignorieren und deine eigenen Schlüsse ziehen.

## <a name="results"></a>Ergebnisse

![Übersichtsplot](/assets/images/help/copilot/plot_buckets.png)

Bei den meisten Vorschlägen von {% data variables.product.prodname_dotcom %} Copilot hat unser automatischer Filter keine signifikanten Überschneidungen mit dem für das Training verwendeten Code gefunden. Er hat uns jedoch auf 473 Fälle aufmerksam gemacht. Nach dem Entfernen des ersten Buckets (Fälle, die sehr ähnlich wie andere Fälle aussehen) waren noch 185 Vorschläge übrig. Von diesen Vorschlägen wurden 144 den Buckets 2 bis 4 zugeordnet. Somit waren noch 41 Fälle im letzten Bucket, den „Zitaten“ in dem Sinne, den ich im Kopf habe.

Dies entspricht **einem Zitatereignis alle 10 Benutzerwochen** (95%-Konfidenzintervall: 7 bis 13 Wochen, Verwendung eines Poisson-Tests).

Natürlich wurde dies bei den {% data variables.product.prodname_dotcom %}- und Microsoft-Entwicklern gemessen, die {% data variables.product.prodname_dotcom %} Copilot getestet haben. Wenn dein Programmierverhalten sich stark von dem dieser Entwickler unterscheidet, können deine Ergebnisse abweichen. Insbesondere arbeiten einige dieser Entwickler nicht die ganze Zeit an Python-Projekten. Hier war keine Unterscheidung möglich, sodass ich jede Person, die in einer bestimmten Woche etwas Python-Code geschrieben hat, als Benutzer*in gezählt habe.

Ein Ereignis in 10 Wochen klingt nicht nach viel, ist aber auch nicht kein Ereignis. Außerdem sind mir drei Dinge aufgefallen.

### <a name="-data-variablesproductprodname_dotcom--copilot-quotes-when-it-lacks-specific-context"></a>{% data variables.product.prodname_dotcom %} Copilot zitiert bei fehlendem spezifischem Kontext

Wenn ich den Text eines Lieds lernen möchte, muss ich dieses viele Male anhören. Bei {% data variables.product.prodname_dotcom %} Copilot verhält es sich genauso: Ein Codeausschnitt muss dem Tool oft begegnen, damit es diesen auswendig lernt. Jede Datei wird {% data variables.product.prodname_dotcom %} Copilot nur einmal gezeigt. Folglich muss der Ausschnitt in vielen verschiedenen Dateien in öffentlichem Code vorhanden sein.

Von den 41 Hauptfällen, die wir bei der manuellen Beschriftung herausgesucht haben, sind keine in weniger als zehn verschiedenen Dateien zu finden. Die meisten (35 Fälle) sind mehr als hundert Mal vorhanden. Einmal hat {% data variables.product.prodname_dotcom %} Copilot sogar vorgeschlagen, eine leere Datei mit etwas zu beginnen, das dem Tool beim Training in mehr als 700.000 verschiedenen Fällen begegnet ist. Dabei handelte es sich um die GNU General Public License.

Im folgenden Plot ist die Anzahl der Dateien mit Übereinstimmungen für die Ergebnisse in Bucket 5 (eine rote Markierung unten für jedes Ergebnis) im Vergleich zu den Buckets 2 bis 4 zu sehen. Bucket 1, bei dem es sich einfach nur um eine Mischung aus Duplikaten von Fällen in den Buckets 2 bis 4 sowie in Bucket 5 handelt, habe ich nicht berücksichtigt. Die daraus abgeleitete Verteilung wird als rote Linie angezeigt. Die Spitze dieser Linie liegt bei zwischen 100 und 1.000 Übereinstimmungen.

![Plot mit Anzahl der Übereinstimmungen](/assets/images/help/copilot/plot_copies.png)

### <a name="-data-variablesproductprodname_dotcom--copilot-mostly-quotes-in-generic-contexts"></a>{% data variables.product.prodname_dotcom %} Copilot zitiert hauptsächlich in generischen Kontexten

Mit der Zeit wird jede Datei einzigartig. Darauf wartet {% data variables.product.prodname_dotcom %} Copilot jedoch nicht<sup id="anchor8">[8](#footnote8)</sup>: Das Tool bietet seine Lösungen an, während deine Datei noch äußerst generisch ist. Und wenn es nichts Spezifisches gibt, das als Grundlage verwendet werden kann, ist es viel wahrscheinlicher als in anderen Fällen, dass Copilot etwas von anderer Stelle zitiert.

![Plot mit Kontextlänge](/assets/images/help/copilot/plot_context.png)

Natürlich arbeiten Softwareentwickler die meiste Zeit weiter hinten in den Dateien, wo der Kontext einzigartig genug ist, sodass {% data variables.product.prodname_dotcom %} Copilot einzigartige Vorschläge macht. Im Gegensatz hierzu sind die Vorschläge am Anfang eher Glückssache, da {% data variables.product.prodname_dotcom %} Copilot nicht wissen kann, um was für ein Programm es sich handeln wird. Manchmal kann jedoch auch wenig Kontext bereits genug für eine recht gute Vermutung dahingehend sein, was der bzw. die Benutzer*in vorhat, vor allem bei kleinen Projekten oder eigenständigen Skripts. Und manchmal ist die Datei dennoch so generisch, dass {% data variables.product.prodname_dotcom %} Copilot glaubt, dass eine der auswendig gelernten Lösungen vielversprechend aussieht:

![Beispielcode](/assets/images/help/copilot/example_robot.png)

Dies wurde nahezu identisch aus dem Kursmaterial für einen Robotikkurs übernommen, von dem verschiedene Varianten hochgeladen wurden<sup id="anchor9">[9](#footnote9)</sup>.

### <a name="detection-is-only-as-good-as-the-tool-that-does-the-detecting"></a>Erkennung ist nur so gut wie das erkennende Tool

Bei dem Filter in seiner aktuellen Form enthalten die Ergebnisse bei einer breiten Anwendung zahlreiche uninteressante Fälle. Dennoch sollte dies nicht zu allzu viel Rauschen führen. Bei den internen Benutzer*innen im Experiment wäre es im Durchschnitt etwas mehr als ein Treffer pro Woche gewesen (wenn auch wahrscheinlich stoßweise). Davon wären etwa 17 % (95%-Konfidenzintervall mit einem Binomialtest: 14–21 %) im fünften Bucket.

Natürlich ist nichts unfehlbar. Folglich kann auch dieses Tool überlistet werden. Einige Fälle sind für das Tool, das wir erstellen, trotz einer offensichtlichen Quelle ziemlich schwer zu erkennen. Spannen wir den Bogen zurück zu „Zen of Python“:

![Abgewandelte Version von „Zen of Python“](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## <a name="conclusion-and-next-steps"></a>Zusammenfassung und nächste Schritte

Diese Untersuchung hat gezeigt, dass es sein _kann_, dass {% data variables.product.prodname_dotcom %} Copilot Codeausschnitte wörtlich zitiert, dies aber selten passiert. Wenn dies der Fall ist, wird hauptsächlich Code zitiert, den alle zitieren, und meist am Anfang der Datei, fast wie eine Art Eisbrecher.

Es gibt jedoch noch einen großen Unterschied zwischen dem Zitieren von Code durch GitHub Copilot und mir, wenn ich ein Gedicht wiedergebe: Ich _weiß_, wann ich zitiere. Ich wüsste auch gern, wann Copilot bestehenden Code wiedergibt, statt eigene Ideen vorzuschlagen. So kann ich Hintergrundinformationen zu diesem Code nachschlagen und ggf. den ursprünglichen Urheber an entsprechender Stelle angeben.

Die Lösung liegt auf der Hand: Wir sollten die Vorfilterungslösung zur Verfügung stellen, die wir bei dieser Analyse für die Erkennung von Überschneidungen mit dem Trainingsdataset verwendet haben. Wenn ein Vorschlag Ausschnitte enthält, die aus dem Trainingsdataset kopiert wurden, sollte einfach in der Benutzeroberfläche angezeigt werden, woraus zitiert wird. Dann kann man entweder den Urheber richtig angeben oder sich generell gegen die Verwendung dieses Codes entscheiden.

Diese Duplikatsuche ist noch nicht in die Technical Preview integriert, eine solche Integration ist jedoch geplant. Darüber hinaus werden wir weiterhin sowohl daran arbeiten, die Häufigkeit von Zitaten zu reduzieren, als auch daran, die Genauigkeit der Erkennung zu verbessern.

<br><br>

### <a name="footnotes"></a>Fußnoten

<a name="footnote1">1</a>: [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: vgl. von Bayern et al. zur Kreativität und Klugheit von Krähen: [Compound tool construction by New Caledonian crows](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a>: s. Carlini et al. zum bewussten Auslösen des Abrufens von Trainingsdaten: [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: Wahrscheinlich jedoch nicht _allzu_ viele. Ich habe einige Entwickler gebeten, mir bei der Beschriftung der Fälle zu helfen, und sie dazu aufgefordert, Fälle zu kennzeichnen, bei denen sie sich mit ihrer Einschätzung nicht sicher sind. Dies wurde nur bei 34 Fällen gemacht, also bei weniger als 10 %. [^](#anchor6)

<a name="footnote7">7</a>: Im [öffentlichen Dataset](/assets/images/help/copilot/matched_snippets.csv) ist der Teil der Vorschläge von Copilot aufgeführt, der auch im Trainingsdataset gefunden wurde, sowie die Angabe, wie oft dieser jeweils gefunden wurde, und ein Link zu einem Beispiel, in dem der jeweilige Vorschlag in öffentlichem Code verwendet wird. Aus Datenschutzgründen wurden die nicht übereinstimmenden Teile bei der Vervollständigung sowie der vom Benutzer bzw. der Benutzerin eingegebene Kontext nicht angegeben (sondern nur die jeweilige Länge). [^](#anchor7)

<a name="footnote8">8</a>: Nach der Durchführung dieses Experiments wurden Änderungen an {% data variables.product.prodname_dotcom %} Copilot vorgenommen, sodass das Tool nun _sehr wohl_ eine bestimmte Mindestmenge an Inhalt in einer Datei erfordert. Daher würden einige der hier berücksichtigten Vorschläge in der aktuellen Version nicht angezeigt. [^](#anchor8)

<a name="footnote9">9</a>: Zum Beispiel von jenevans33: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
