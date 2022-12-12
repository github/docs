---
title: Grundlegende Schreib- und Formatierungssyntax
intro: Erstelle mit einer einfachen Syntax eine ausgereifte Formatierung für deine Texte und Codes auf GitHub.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169248'
---
## Überschriften

Um eine Überschrift zu erstellen, kannst du bis zu sechs Rautensymbole (<kbd>#</kbd>) vor dem Text der Überschrift hinzufügen. Die Anzahl der verwendeten Rauten (<kbd>#</kbd>) bestimmt die Größe der Überschrift.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Gerenderte H1-, H2- und H6-Überschriften](/assets/images/help/writing/headings-rendered.png)

Wenn du zwei oder mehr Überschriften verwendest, generiert GitHub automatisch ein Inhaltsverzeichnis, auf das du zugreifen kannst, indem du innerhalb des Dateiheaders auf {% octicon "list-unordered" aria-label="The unordered list icon" %} klickst. Die einzelnen Überschriftentitel werden im Inhaltsverzeichnis aufgeführt, und du kannst auf einen Titel klicken, um zum gewünschten Abschnitt zu navigieren. 

![Screenshot: Hervorhebung des Inhaltsverzeichnissymbols](/assets/images/help/repository/headings_toc.png)

## Formatieren von Text

Du kannst Text in Kommentarfeldern und Dateien vom Typ `.md` mittels Fettformatierung, Kursivformatierung, durchgestrichenem, tief- oder hochgestelltem Text hervorheben.  

| Style | Syntax | Tastenkombinationen | Beispiel | Output |
| --- | --- | --- | --- | --- |
| Fett | `** **` oder `__ __`| <kbd>BEFEHL</kbd>+<kbd>B</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **Dieser Text ist fett.** |
| Kursiv | `* *` oder `_ _`     | <kbd>BEFEHL</kbd>+<kbd>I</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *Dieser Text ist kursiv.* |
| Durchgestrichen | `~~ ~~` | | `~~This was mistaken text~~` | ~~Dieser Text war falsch.~~ |
| Fett und kursiv verschachtelt | `** **` und `_ _` | | `**This text is _extremely_ important**` | **Dieser Text ist _sehr_ wichtig.** |
| Alles fett und kursiv | `*** **_` | | `_*_All this text is important_*_` | _ *_Dieser gesamte Text ist wichtig._** |
| Tiefgestellt | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>Dies ist ein tiefgestellter Text.</sub> |
| Hochgestellt | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>Dies ist ein hochgestellter Text.</sup> |

## Zitieren von Text

Text kann mit dem folgenden Zeichen zitiert werden: <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Gerenderter zitierter Text](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Tipp:** In einer Unterhaltung kannst du Text in einem Kommentar automatisch zitieren, indem du den Text markierst und anschließend <kbd>R</kbd> drückst. Wenn du einen vollständigen Kommentar zitieren möchtest, kannst du auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Antwort mit Zitat** klicken. Weitere Informationen zu Tastenkombinationen findest du unter [Tastenkombinationen](/articles/keyboard-shortcuts/).

{% endtip %}

## Code zitieren

Du kannst Code oder einen Befehl innerhalb eines Satzes mit einfachen Backticks zitieren. Der Text innerhalb der Backticks wird nicht formatiert. Du kannst auch die Tastenkombination <kbd>Command</kbd>+<kbd>E</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>E</kbd> (Windows/Linux) verwenden, um die Backticks für einen Codeblock innerhalb einer Markdownzeile einzufügen.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Gerenderter Inline-Codeblock](/assets/images/help/writing/inline-code-rendered.png)

Um Code oder einen Text in einem eigenen Absatz zu formatieren, verwende dreifache Backticks.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Gerenderter Codeblock](/assets/images/help/writing/code-block-rendered.png)

Weitere Informationen findest du unter [Codeblöcke erstellen und markieren](/articles/creating-and-highlighting-code-blocks).

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Unterstützte Farbmodelle

In Issues, Pull Requests und Diskussionen kannst du mit Backticks Farben innerhalb eines Satzes aufrufen. Ein unterstütztes Farbmodell in Backticks zeigt eine Visualisierung der Farbe an.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Gerendert unterstütztes Farbmodell](/assets/images/help/writing/supported-color-models-rendered.png)

Hier findest du die derzeit unterstützten Farbmodelle.

| Color | Syntax | Beispiel | Output |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Gerendert unterstütztes Farbmodell im HEX-Format](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Gerendert unterstütztes Farbmodell im RGB-Format](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Gerendert unterstütztes Farbmodell im HSL-Format](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Hinweise:**

- Ein unterstütztes Farbmodell darf keine führenden oder nachgestellten Leerzeichen innerhalb der Backticks aufweisen.
- Die Visualisierung der Farbe wird nur in Issues, Pull Requests und Diskussionen unterstützt.

{% endnote %}

## Links

Du kannst einen Inlinelink erstellen, indem du den Text in eckige Klammern `[ ]` und die URL in runde Klammern `( )` einschließt. Einen Link kannst du auch mit der Tastenkombination <kbd>Command</kbd>+<kbd>K</kbd> erstellen.{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} Wenn du Text markiert hast, kannst du eine URL aus der Zwischenablage einfügen, um auf der Grundlage der Auswahl automatisch einen Link zu erstellen.{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} Du kannst auch einen Markdownlink erstellen, indem du den Text hervorhebst und die Tastenkombination <kbd>Command</kbd>+<kbd>V</kbd> verwendest. Wenn du den Text durch den Link ersetzen möchtest, verwende die Tastenkombination <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Gerenderter Link](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Tipp:** {% data variables.product.product_name %} erstellt automatisch Links, wenn du gültige URLs in einen Kommentar einfügst. Weitere Informationen findest du unter [Automatisch verlinkte Verweise und URLs](/articles/autolinked-references-and-urls).

{% endtip %}

## Links zu Abschnitten

{% data reusables.repositories.section-links %}

## Relative Links

{% data reusables.repositories.relative-links %}

## Bilder

Du kannst ein Bild anzeigen, indem du <kbd>!</kbd> hinzufügst und den Alternativtext mit `[ ]` umschließt. Umschließe dann den Link für das Bild mit Klammern `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Gerendertes Bild](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} unterstützt das Einbetten von Bildern in Issues, Pull Requests{% ifversion fpt or ghec %}, Diskussionen{% endif %}, Kommentare und Dateien vom Typ `.md`. Du kannst ein Bild aus deinem Repository anzeigen, einen Link zu einem Onlinebild hinzufügen oder ein Bild hochladen. Weitere Informationen findest du unter [Ressourcen hochladen](#uploading-assets).

{% tip %}

**Tipp:** Wenn du ein Bild anzeigen möchtest, das sich in deinem Repository befindet, solltest du keine absoluten Links, sondern relative Links verwenden.

{% endtip %}

Hier findest du einige Beispiele für die Verwendung relativer Links zum Anzeigen eines Bilds.

| Kontext | Relativer Link |
| ------ | -------- |
| In einer Datei vom Typ `.md` im gleichen Branch | `/assets/images/electrocat.png` |
| In einer Datei vom Typ `.md` in einem anderen Branch | `/../main/assets/images/electrocat.png` |
| In Issues, Pull Requests und Kommentaren des Repositorys | `../blob/main/assets/images/electrocat.png?raw=true` |
| In einer Datei vom Typ `.md` in einem anderen Repository | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| In Issues, Pull Requests und Kommentaren eines anderen Repositorys | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Hinweis:** Die letzten beiden relativen Links in der obigen Tabelle funktionieren nur für Bilder in einem privaten Repository, wenn der Betrachter mindestens Lesezugriff auf das private Repository hat, das die Bilder enthält.

{% endnote %}

Weitere Informationen findest du unter [Relative Links](#relative-links).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Design angeben, in dem ein Bild angezeigt wird

Du kannst das Design angeben, für das ein Bild in Markdown angezeigt wird, indem du das HTML-Element `<picture>` in Kombination mit dem Medienfeature `prefers-color-scheme` verwendest. Wir unterscheiden zwischen hellem und dunklem Farbmodus. Es sind also zwei Optionen verfügbar. Du kannst diese Optionen verwenden, um Bilder anzuzeigen, die für dunkle oder helle Hintergründe optimiert sind. Das ist besonders bei transparenten PNG-Bildern hilfreich.

Der folgende Code zeigt beispielsweise ein Bild einer Sonne für helle Designs und einen Mond für dunkle Designs an:

{% data reusables.getting-started.picture-element-example %}

Die Methode zum Angeben von Bildern basierend auf dem Design mithilfe eines Fragments, das an die URL angefügt ist (`#gh-dark-mode-only` oder `#gh-light-mode-only`), ist veraltet und wird zugunsten der oben beschriebenen neuen Methode entfernt.
{% endif %}

## Listen

Du kannst eine ungeordnete Liste erstellen, indem du einer Textzeile oder mehreren Textzeilen <kbd>-</kbd>, <kbd>*</kbd> oder <kbd>+</kbd> voranstellst.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Gerenderte ungeordnete Liste](/assets/images/help/writing/unordered-list-rendered.png)

Um deine Liste zu ordnen, stelle jeder Zeile eine Zahl voran.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Gerenderte geordnete Liste](/assets/images/help/writing/ordered-list-rendered.png)

### Verschachtelte Listen

Du kannst eine verschachtelte Liste erstellen, indem du ein Listenelement oder mehrere Listenelemente unter einem anderen Element einrückst.

Beim Web-Editor in {% data variables.product.product_name %} oder bei einem Texteditor wie [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), der eine Festbreitenschriftart verwendet, kannst du deine Liste visuell ausrichten. Gib vor dem einzurückenden Listenelement so viele Leerzeichen ein, bis das Listenzeichen (<kbd>-</kbd> oder <kbd>*</kbd>) direkt unter dem ersten Zeichen des darüber liegenden Elements liegt.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Hinweis:** Im webbasierten Editor kannst du eine oder mehrere Textzeilen ein- oder ausrücken, indem du zuerst die gewünschten Zeilen markierst und dann <kbd>TAB</kbd> bzw. <kbd>UMSCHALT</kbd>+<kbd>TAB</kbd> drückst.

{% endtip %}

![Verschachtelte Liste mit hervorgehobener Ausrichtung](/assets/images/help/writing/nested-list-alignment.png)

![Liste mit zwei Ebenen untergeordneter Elemente](/assets/images/help/writing/nested-list-example-1.png)

Um eine verschachtelte Liste im Kommentareditor auf {% data variables.product.product_name %} zu erstellen, der keine nicht proportionale Schriftart verwendet, kannst du Dir das Listenelement direkt über der verschachtelten Liste ansehen und die Anzahl der Zeichen zählen, die vor dem Inhalt dieses Elements stehen. Gib diese Anzahl an Leerzeichen dann vor dem untergeordneten Listenelement ein.

In diesem Beispiel kannst du ein untergeordnetes Listenelement unter dem Listenelement `100. First list item` hinzufügen, indem du das untergeordnete Listenelement mindestens fünf Leerzeichen weit einrückst, da sich vor `First list item` fünf Zeichen (`100. `) befinden.

```markdown
100. First list item
     - First nested list item
```

![Liste mit einem untergeordneten Listenelement](/assets/images/help/writing/nested-list-example-3.png)   

Du kannst mit derselben Methode mehrere Ebenen an verschachtelten Listen erstellen. Da beispielsweise beim ersten untergeordneten Listenelement sieben Zeichen (`␣␣␣␣␣-␣`) vor dem untergeordneten Listeninhalt `First nested list item` stehen, muss das zweite untergeordnete Listenelement um sieben Leerzeichen eingerückt werden.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Liste mit zwei Ebenen untergeordneter Elemente](/assets/images/help/writing/nested-list-example-2.png)    

Weitere Beispiele findest du in der [Spezifikation zu GitHub Flavored Markdown](https://github.github.com/gfm/#example-265).

## Aufgabenlisten

{% data reusables.repositories.task-list-markdown %}

Wenn die Beschreibung eines Aufgabenlistenelements mit einer Klammer beginnt, muss die Klammer mit dem Escapezeichen <kbd>\\</kbd> versehen werden:

`- [ ] \(Optional) Open a followup issue`

Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/articles/about-task-lists).

## Personen und Teams erwähnen

Du kannst eine Person oder ein [Team](/articles/setting-up-teams/) in {% data variables.product.product_name %} erwähnen, indem du <kbd>@</kbd> sowie den Benutzer- oder Teamnamen eingibst. Dadurch wird eine Benachrichtigung ausgelöst und die Aufmerksamkeit auf die Unterhaltung gelenkt. Wenn du einen Kommentar bearbeitest und dabei den Benutzer- oder Teamnamen erwähnst, wird die Person respektive das Team ebenfalls benachrichtigt. Weitere Informationen zu Benachrichtigungen findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications).

{% note %}

**Hinweis:** Eine Person wird nur über eine Erwähnung benachrichtigt, wenn die Person Lesezugriff auf das Repository hat. Falls das Repository einer Organisation gehört, muss die Person außerdem der Organisation angehören.

{% endnote %}

`@github/support What do you think about these updates?`

![Gerenderte Erwähnung (@mention)](/assets/images/help/writing/mention-rendered.png)

Wenn du ein übergeordnetes Team erwähnst, erhalten auch die Mitglieder untergeordneter Teams Benachrichtigungen, was die Kommunikation mit mehreren Personengruppen erleichtert. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams).

Wenn du das Zeichen <kbd>@</kbd> eingibst, wird eine Liste der Personen oder Teams eines Projektes angezeigt. Diese Liste wird während deiner Eingabe gefiltert. Wenn du den Namen der gewünschten Person respektive des gewünschten Teams siehst, kannst du ihn mit den Pfeiltasten auswählen und die Tabulator- oder Eingabetaste drücken, um den Namen zu vervollständigen. Gib für Teams @organization/team-name ein. Daraufhin wird die Unterhaltung für alle Mitglieder des Teams abonniert.

Die automatisch vervollständigten Ergebnisse sind auf Repository-Mitarbeiter und andere Thread-Teilnehmer beschränkt.

## Auf Issues und Pull Requests verweisen

Du kannst eine Liste vorgeschlagener Issues und Pull Requests im Repository anzeigen, indem du <kbd>#</kbd> eingibst. Gib die Nummer des Issues oder Pull Requests ein, um die Liste zu filtern, und drücke dann die Tabulator- oder Eingabetaste, um das markierte Ergebnis zu vervollständigen.

Weitere Informationen findest du unter [Automatisch verlinkte Verweise und URLs](/articles/autolinked-references-and-urls).

## Auf externe Ressourcen verweisen

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Inhaltsanhänge

Einige {% data variables.product.prodname_github_apps %} stellen Informationen in {% data variables.product.product_name %} für URLs bereit, die mit den registrierten Domänen verknüpft sind. {% data variables.product.product_name %} zeigt die von der App bereitgestellten Informationen unter der URL im Text oder Kommentar eines Issues bzw. Pull Requests an.

![Inhaltsanhang](/assets/images/github-apps/content_reference_attachment.png)

Um Inhaltsanlagen anzeigen zu können, musst du über eine {% data variables.product.prodname_github_app %} verfügen, die die im Repository installierte Inhaltsanlagen-API verwendet.{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Eine App in deinem persönlichen Konto installieren](/articles/installing-an-app-in-your-personal-account) sowie unter [Eine App in deiner Organisation installieren](/articles/installing-an-app-in-your-organization).{% endif %}

Für URLs, die Teil eines Markdown-Links sind, werden keine Inhaltsanhänge angezeigt.

Weitere Informationen zum Erstellen einer {% data variables.product.prodname_github_app %}, die Inhaltsanlagen verwendet, findest du unter [Verwenden von Inhaltsanlagen](/apps/using-content-attachments).{% endif %}

## Ressourcen hochladen

Zum Hochladen von Ressourcen (beispielsweise Bilder) kannst du Drag&Drop verwenden, die Ressourcen über einen Dateibrowser auswählen oder sie einfügen. Du kannst Ressourcen in Issues, Pull Requests, Kommentare und Dateien vom Typ `.md` in deinem Repository hochladen.

## Emojis verwenden

Durch Eingeben von `:EMOJICODE:` kannst du deinem Text Emojis hinzufügen.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Gerendertes Emoji](/assets/images/help/writing/emoji-rendered.png)

Wenn du <kbd>:</kbd> eingibst, wird eine Liste mit vorgeschlagenen Emojis angezeigt. Die Liste wird bei der Eingabe gefiltert. Wenn du das gewünschte Emoji siehst, drücke **TAB** oder die **EINGABETASTE**, um das hervorgehobene Ergebnis zu vervollständigen.

Eine vollständige Liste der verfügbaren Emojis und Codes findest du im [Spickzettel für Emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Absätze

Um einen neuen Absatz zu erstellen, lasse eine Zeile zwischen den Textzeilen leer.

## Fußnoten

Mit der folgenden Klammersyntax kannst du deinem Inhalt Fußnoten hinzufügen:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

Die Fußnote wird wie folgt gerendert:

![Gerenderte Fußnote](/assets/images/site/rendered-footnote.png)

{% tip %}

**Hinweis:** Die Position einer Fußnote in deinem Markdown hat keinen Einfluss darauf, wo die Fußnote gerendert wird. Du kannst eine Fußnote direkt nach dem Verweis auf die Fußnote schreiben, und die Fußnote wird trotzdem am unteren Rand des Markdowns gerendert.

In Wikis werden Fußnoten nicht unterstützt.

{% endtip %}

## Inhalt mit Kommentaren ausblenden

Du kannst {% data variables.product.product_name %} anweisen, Inhalt aus dem gerenderten Markdown auszublenden, indem du den Inhalt in einem HTML-Kommentar platzierst.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Markdown-Formatierung ignorieren

Du kannst {% data variables.product.product_name %} anweisen, die Markdown-Formatierung zu ignorieren (oder zu umgehen), indem du <kbd>\\</kbd> vor dem Markdown-Zeichen platzierst.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Gerendertes maskiertes Zeichen](/assets/images/help/writing/escaped-character-rendered.png)

Weitere Informationen findest du in der [Markdown-Syntax](https://daringfireball.net/projects/markdown/syntax#backslash) von Daring Fireball.

## Deaktivieren des Markdown-Renderings

{% data reusables.repositories.disabling-markdown-rendering %}

## Weitere Informationsquellen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- [Informationen zum Schreiben und Formatieren auf GitHub](/articles/about-writing-and-formatting-on-github)
- [Arbeiten mit erweiterter Formatierung](/articles/working-with-advanced-formatting)
- [Schnellstart für das Schreiben auf {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
