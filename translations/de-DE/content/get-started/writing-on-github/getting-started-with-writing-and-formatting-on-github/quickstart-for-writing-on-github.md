---
title: Schnellstart zum Schreiben auf GitHub
intro: 'Hier erfährst du mehr zu Formatierungsfeatures durch Erstellen {% ifversion ghae %}eines Gist zur Selbstbeschreibung{% else %}einer Infodatei für dein {% data variables.product.prodname_dotcom %}-Profil{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107173'
---
## Einführung

Markdown ist eine leicht lesbare, einfach zu schreibende Sprache für die Formatierung von Nur-Text. Du kannst die Markdown-Syntax zusammen mit einigen HTML-Tags verwenden, um deine Eingaben auf {% data variables.product.prodname_dotcom %} zu formatieren, zum Beispiel in Infodateien von Repositorys und Kommentaren in Pull Requests und Issues. In diesem Leitfaden werden einige erweiterte Formatierungsfeatures behandelt, indem {% ifversion ghae %}ein Gist{% else %}oder eine Infodatei für dein {% data variables.product.prodname_dotcom %}-Profil erstellt oder bearbeitet wird{% endif %}.

Wenn du mit Markdown noch nicht vertraut bist, solltest du mit [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax) oder dem {% data variables.product.prodname_learning %}-Kurs [Kommunizieren mittels Markdown](https://github.com/skills/communicate-using-markdown) beginnen.

{% ifversion not ghae %}

Wenn du bereits über eine Profilinfodatei verfügst, kannst du diesen Leitfaden befolgen und einige Features zu deiner vorhandenen Infodatei hinzufügen oder ein Gist mit einer Markdowndatei erstellen, das zum Beispiel `about-me.md` heißt. Weitere Informationen findest du unter [Erstellen von Gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists).

{% endif %}

{% ifversion ghae %}

## Einen Gist erstellen

Gists ermöglichen dir das Speichern oder Freigeben von Codeausschnitten und anderen Informationen für andere Personen unter {% data variables.location.product_location %}. Um Formatierungsfeatures in Gists zu verwenden, füge eine Gist-Datei mit einer `.md`-Erweiterung hinzu.

1. Navigiere zu deiner {% data variables.gists.gist_homepage %}.
1. Gib optional eine Beschreibung für das Gist ein, z. B. „Über mich“.
1. Gib `about-me.md` in das Feld **Dateiname einschließlich Erweiterung...** ein.

Weitere Informationen findest du unter [Erstellen von Gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists).

{% else %}

## Erstellen oder Bearbeiten deiner Profilinfodatei

Mit der Profilinfodatei kannst du Informationen über dich selbst mit der Community über {% data variables.location.product_location %} teilen. Die Infodatei wird oben auf der Profilseite angezeigt.

Wenn du noch keine Profilinfodatei besitzt, kannst du eine hinzufügen.

1. Erstelle ein Repository mit demselben Namen wie deinen {% data variables.product.prodname_dotcom %}-Benutzernamen, und initialisiere das Repository mit einer `README.md`-Datei. Weitere Informationen findest du unter [Verwalten der README für dein Profil](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme).
1. Bearbeite die `README.md`-Datei, und lösche den Vorlagentext (ab `### Hi there`), der automatisch hinzugefügt wird, wenn du die Datei erstellst.

Wenn du bereits über eine Profilinfodatei verfügst, kannst du sie auf deiner Profilseite bearbeiten.

{% data reusables.profile.navigating-to-profile %}
1. Klicke auf das {% octicon "pencil" aria-label="The Pencil icon" %} neben deiner Profilinfodatei.

   ![Screenshot einer Profilseite mit hervorgehobenem Bleistiftsymbol neben der Profilinfodatei](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## Hinzufügen eines Bilds für deine Besucher*innen

Du kannst Bilder in deiner Kommunikation auf {% data variables.product.prodname_dotcom %} hinzufügen. Ganz oben in {% ifversion ghae %}deinem Gist {% else %}deiner Profilinfodatei{% endif %} fügst du ein reaktionsfähiges Bild ein, zum Beispiel ein Banner. 

Mithilfe des HTML-Elements `<picture>` mit dem `prefers-color-scheme`-Medienfeature kannst du ein Bild hinzufügen, das sich ändert, je nachdem, ob ein*e Besucher*in den hellen oder dunklen Modus verwendet. Weitere Informationen findest du unter [Verwalten deiner Designeinstellungen](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings).

1. Kopiere das folgende Markup in deine {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %}-Datei.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. Ersetze die Platzhalter im Markup durch die URLs deiner ausgewählten Bilder. Alternativ kannst du die URLs aus unserem folgenden Beispiel kopieren, um das Feature zuerst zu testen.

   - Ersetze `YOUR-DARKMODE-IMAGE` durch die URL eines Bilds, das für Besucher*innen im dunklen Modus angezeigt werden soll.
   - Ersetze `YOUR-LIGHTMODE-IMAGE` durch die URL eines Bilds, das für Besucher*innen im hellen Modus angezeigt werden soll.
   - Ersetze `YOUR-DEFAULT-IMAGE` durch die URL eines Bilds, das angezeigt werden soll, falls keine anderen Bilder zugeordnet werden können, z. B. wenn der Besucher oder die Besucherin einen Browser verwendet, der das `prefers-color-scheme`-Feature nicht unterstützt.
1. Um das Bild für Besucher*innen, die eine Sprachausgabe verwenden, zugänglich zu machen, ersetze `YOUR-ALT-TEXT` durch eine Beschreibung des Bilds.
1. Um zu überprüfen, ob das Bild ordnungsgemäß gerendert wurde, klicke auf die Registerkarte **Vorschau**.

Weitere Informationen zur Verwendung von Bildern in Markdown findest du unter [Grundlegende Schreib- und Formatierungssyntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

### Beispiel

{% data reusables.getting-started.picture-element-example %}

### So sieht es aus

![Screenshot der Registerkarte „Vorschau“ im hellen Modus mit einem Bild einer lächelnden Sonne](/assets/images/help/profile/lightmode-image-example.png)

## Hinzufügen einer Tabelle

Du kannst Markdown-Tabellen verwenden, um Informationen zu organisieren. Hier verwendest du eine Tabelle, um dich selbst vorzustellen, indem du zum Beispiel eine Rangfolge deiner am häufigsten verwendeten Programmiersprachen oder Frameworks erstellst, die Zeit angibst, bei welchen Themen du den größten Lernaufwand hattest oder deine Lieblingshobbys teilst. Wenn eine Tabellenspalte Zahlen enthält, ist es nützlich, die Spalte mithilfe der Syntax `--:` unterhalb der Kopfzeile rechts ausrichten.

1. Kehre zur Registerkarte **Bearbeiten der {% ifversion ghae %}new {% endif %}-Datei** zurück. 
1. Um dich vorzustellen, füge zwei Zeilen unter dem Tag `</picture>` eine `## About me`-Kopfzeile und einen kurzen Absatz über dich selbst hinzu, wie etwa im folgenden Beispiel.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. Füge zwei Zeilen unterhalb dieses Absatzes eine Tabelle ein, indem du das folgende Markup kopierst und einfügst.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. Ersetze `THING-TO-RANK` in der Spalte auf der rechten Seite durch „Sprachen“, „Hobbys“ oder etwas anderes, und fülle die Spalte mit deiner eigenen Liste auf.
1. Um zu überprüfen, ob die Tabelle ordnungsgemäß gerendert wurde, klicke auf die Registerkarte **Vorschau**.

Weitere Informationen findest du unter [Organisieren von Informationen mit Tabellen](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables).

### Beispiel

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### So sieht es aus

![Screenshot der Registerkarte „Vorschau“ mit der Überschrift „About me“ und einer gerenderten Tabelle mit einer Liste von Sprachen](/assets/images/help/profile/markdown-table-example.png)

## Erstellen eines reduzierten Abschnitts

Damit dein Inhalt übersichtlich bleibt, kannst du das Tag `<details>` verwenden, um einen erweiterbaren reduzierten Abschnitt zu erstellen. 

1. Um einen reduzierten Abschnitt für die von dir erstellte Tabelle zu erstellen, schließe deine Tabelle in `<details>`-Tags wie im folgenden Beispiel ein.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. Ersetze `THINGS-TO-RANK` zwischen den `<summary>`-Tags durch eine beliebige Rangposition in deiner Tabelle.
1. Wenn du optional den Abschnitt standardmäßig als geöffnet anzeigen möchtest, füge das `open`-Attribut dem `<details>`-Tag hinzu.

   ```HTML
   <details open>
   ```
1. Um zu überprüfen, ob der reduzierte Abschnitt ordnungsgemäß gerendert wurde, klicke auf die Registerkarte **Vorschau**.

### Beispiel

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### So sieht es aus

![Screenshot der Registerkarte „Vorschau“ mit einem reduzierten Abschnitt namens „My top languages“, der durch einen Dropdownpfeil gekennzeichnet ist](/assets/images/help/profile/collapsed-section-example.png)

## Hinzufügen eines Zitats

Markdown verfügt über viele weitere Optionen zum Formatieren deiner Inhalte. Hier fügst du eine horizontale Regel hinzu, um deine Seite und ein Blockzitat zu teilen, um dein Lieblingszitat zu formatieren.

1. Füge unten in der Datei zwei Zeilen unterhalb des `</details>`-Tags eine horizontale Regel hinzu, indem du drei oder mehr Bindestriche eingibst.

   ```Markdown
   ---
   ```
1. Füge unterhalb der `---`-Zeile ein Zitat hinzu, indem du Markup wie folgt eingibst.
   
   ```Markdown
   > QUOTE
   ```

   Ersetze `QUOTE` durch ein Zitat deiner Wahl. Kopiere alternativ das Zitat aus unserem Beispiel unten.
1. Um zu überprüfen, ob alles ordnungsgemäß gerendert wurde, klicke auf die Registerkarte **Vorschau**.

### Beispiel

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### So sieht es aus

![Screenshot der Registerkarte „Vorschau“ mit einem eingezogenen Zitat unter einer dicken horizontalen Linie](/assets/images/help/profile/markdown-quote-example.png)

## Hinzufügen eines Kommentars

Du kannst die HTML-Kommentarsyntax verwenden, um einen Kommentar hinzuzufügen, der in der Ausgabe ausgeblendet wird. Hier fügst du einen Kommentar hinzu, um dich selbst daran zu erinnern, später {% ifversion ghae %}deinen Gist{% else %}deine Infodatei{% endif %} zu aktualisieren.

1. Füge zwei Zeilen unterhalb der Kopfzeile `## About me` mithilfe des folgenden Markups einen Kommentar ein.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   Ersetze `COMMENT` durch ein „Aufgabenelement“, das dich daran erinnern soll, später etwas zu tun (z. B. der Tabelle weitere Elemente hinzufügen).
1. Klicke auf die Registerkarte **Vorschau**, um zu überprüfen, ob dein Kommentar in der Ausgabe ausgeblendet ist.

### Beispiel

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Speichern der Arbeit

Wenn du mit deinen Änderungen zufrieden bist, speichere {% ifversion ghae %} deinen Gist. 

- Klicke auf **Geheimen Gist erstellen**, um deinen Gist vor Suchmaschinen zu verbergen, ihn aber für alle sichtbar zu machen, mit denen du die URL teilst. 
- Wenn es für dich in Ordnung ist, wenn dein Gist von jedem auf {% data variables.location.product_location %} gesehen werden kann, klicke auf **Internen Gist erstellen**.

{% else %}Profilinfodatei, indem du auf **Änderungen committen** klickst. 

Wenn du direkt an den `main`-Branch committest, werden deine Änderungen allen Benutzer*innen auf deinem Profil angezeigt. Wenn du deine Arbeit speichern, sie jedoch noch nicht auf deinem Profil veröffentlichen möchtest, kannst du **Neuen Branch für diesen Commit erstellen und Pull Request starten** auswählen.

![Screenshot des Abschnitts „Committen von Änderungen“](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## Nächste Schritte

- Lerne mehr zu den erweiterten Formatierungsfeatures. Sieh dir zum Beispiel {% ifversion fpt or ghec %}[Erstellen von Diagrammen](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) und {% endif %}[Erstellen und Hervorheben von Codeblöcken](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) an.
- Nutze deine neuen Fähigkeiten beim Kommunizieren über GitHub, in Issues, Pull Request und Diskussionen. Weitere Informationen findest du unter [Kommunizieren auf {% data variables.product.prodname_dotcom %}](/get-started/quickstart/communicating-on-github).
