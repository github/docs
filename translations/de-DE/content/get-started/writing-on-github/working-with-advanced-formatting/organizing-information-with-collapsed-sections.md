---
title: Organisieren von Informationen mit reduzierten Abschnitten
intro: 'Optimiere Markdown, indem du einen reduzierten Abschnitt mit dem Tag `<details>` erstellst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '146273098'
---
## Erstellen eines reduzierten Abschnitts

Du kannst Markdownabschnitte vorübergehend ausblenden, indem du einen reduzierten Abschnitt erstellst, den Leser*innen erweitern können. Wenn du beispielsweise technische Details in einen Issuekommentar einfügen möchtest, die möglicherweise nicht für alle Leser*innen relevant oder interessant sind, kannst du diese Details in einen reduzierten Abschnitt einfügen.

Alle Markdowns innerhalb des `<details>`-Blocks werden reduziert, bis der Leser auf {% octicon "triangle-right" aria-label="The right triange icon" %} klickt, um die Details zu erweitern. Verwende im `<details>`-Block das `<summary>`-Tag, um eine Bezeichnung rechts neben {% octicon "triangle-right" aria-label="The right triange icon" %} zu erstellen.

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Der Markdown wird standardmäßig reduziert.

![Gerendert reduziert](/assets/images/help/writing/collapsed-section-view.png)

Nachdem ein Leser auf {% octicon "triangle-right" aria-label="The right triange icon" %} geklickt hat, werden die Details erweitert.

![Gerendert offen](/assets/images/help/writing/open-collapsed-section.png)

## Weiterführende Themen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)
