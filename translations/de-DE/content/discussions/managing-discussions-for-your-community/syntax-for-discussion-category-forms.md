---
title: Syntax für Diskussionskategorieformulare
shortTitle: Syntax for discussion category forms
intro: 'Du kannst YAML-Syntax verwenden, um die Felder in deinen Diskussionskategorieformularen zu definieren.'
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193359'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Informationen zur YAML-Syntax für Diskussionskategorieformulare

Du kannst benutzerdefinierte Diskussionskategorieformulare erstellen, indem du dem Ordner `/.github/DISCUSSION_TEMPLATE/` in deinem Repository eine YAML-Formulardefinitionsdatei hinzufügst. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

Du kannst für jedes Feld den Eingabetyp, die Validierung und eine Standardbezeichnung definieren.

Wenn ein Communitymitglied ein Diskussionskategorieformular ausfüllt, werden seine Antworten für jede Eingabe in Markdown konvertiert und dem Textkörper einer Diskussion hinzugefügt. Communitymitglieder können ihre Diskussionen bearbeiten, die mit einem Diskussionsformular erstellt wurden, und andere Personen können mit der Diskussion wie mit einer Diskussion interagieren, die mit anderen Methoden erstellt wurde.

In dieser YAML-Beispielkonfigurationsdatei wird ein allgemeines Diskussionskategorieformular definiert.

{% data reusables.discussions.discussion-category-forms-sample %}

## Syntax auf oberster Ebene

Die Konfigurationsdatei für ein Diskussionskategorieformular muss einen `body`-Schlüssel enthalten, und `body` muss mindestens ein Feld ohne Markdown enthalten.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

Du kannst für jedes Issueformular die folgenden Schlüssel auf oberster Ebene festlegen.

| Schlüssel | BESCHREIBUNG | Erforderlich | type |
| :-- | :-- | :-- | :-- | :-- |
| `body` | Definition der Eingabetypen im Diskussionsformular. | Erforderlich | Array |
| `labels` | Bezeichnungen, die automatisch den mit dieser Vorlage erstellten Diskussionen hinzugefügt werden. | Optional | Array oder durch Trennzeichen getrennte Zeichenfolge |
| `title` | Ein Standardtitel, der im Diskussionsübermittlungsformular vorab ausgefüllt wird. | Optional | String |

Um Felder zum Formular hinzuzufügen, füge ein Array von Formularelementen in den `body`-Schlüssel ein. Eine Liste der verfügbaren Elemente sowie die zugehörige Syntax findest du unter [Syntax für das {% data variables.product.prodname_dotcom %}-Formularschema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).
