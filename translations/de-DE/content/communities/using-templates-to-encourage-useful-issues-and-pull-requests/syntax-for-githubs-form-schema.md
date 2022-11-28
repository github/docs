---
title: Syntax für das GitHub-Formularschema
intro: 'Du kannst mit dem Formularschema von {% data variables.product.company_short %} Formulare für unterstützte Features konfigurieren.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: 3a8a21f04582b87741ef80755e92fbc859921bb5
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179669'
---
{% note %}

**Hinweis:** Das Formularschema von {% data variables.product.company_short %} befindet sich derzeit in der Betaphase und kann noch geändert werden.

{% endnote %}

## Informationen zum Formularschema von {% data variables.product.company_short %}

Du kannst mit dem Formularschema von {% data variables.product.company_short %} Formulare für unterstützte Features konfigurieren. Weitere Informationen findest du unter [Konfigurieren von Issuevorlagen für dein Repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms).

Ein Formular ist ein Satz von Elementen zum Anfordern von Benutzereingaben. Du kannst ein Formular konfigurieren, indem du eine YAML-Formulardefinition erstellst, die ein Array von Formularelementen ist. Jedes Formularelement ist ein Satz von Schlüssel-Wert-Paaren, die den Typ des Elements, die Eigenschaften des Elements und die Einschränkungen bestimmen, die du auf das Element anwenden möchtest. Bei einigen Schlüsseln ist der Wert ein weiterer Satz von Schlüssel-Wert-Paaren.

Die folgende Formulardefinition enthält beispielsweise vier Formularelemente: einen Textbereich für die Bereitstellung des Betriebssystems des Benutzers, ein Dropdownmenü zum Auswählen der Softwareversion, die der Benutzer ausführt, ein Kontrollkästchen, um die Verhaltensregeln zu bestätigen, und Markdown, um dem Benutzer zum Ausfüllen des Formulars zu danken.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Tasten

Für jedes Formularelement kannst du die folgenden Schlüssel festlegen.

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | Der Typ des Elements, das du definieren möchtest. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | Der Bezeichner für das Element, außer wenn `type` auf `markdown` gesetzt ist. {% data reusables.form-schema.id-must-be-unique %} Wenn angegeben, ist `id` der kanonische Bezeichner für das Feld im URL-Abfrageparameter. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | Ein Satz von Schlüssel-Wert-Paaren, die die Eigenschaften des Elements definieren.  | Erforderlich | Zuordnung | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | Ein Satz von Schlüssel-Wert-Paaren, die Einschränkungen für das Element festlegen. | Optional | Zuordnung | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

Du hast die Wahl zwischen den folgenden Typen von Formularelementen. Jeder Typ hat eindeutige Attribute und Validierungen.

| type | BESCHREIBUNG |
| ---- | ----------- |
| [`markdown`](#markdown) | Markdown-Text, der im Formular angezeigt wird, um dem Benutzer zusätzlichen Kontext zu bieten, jedoch **nicht übermittelt** wird. |
| [`textarea`](#textarea) | Ein mehrzeiliges Textfeld. |
| [`input`](#input) | Ein einzeiliges Textfeld. |
| [`dropdown`](#dropdown) | Ein Dropdownmenü. |
| [`checkboxes`](#checkboxes) | Ein Satz von Kontrollkästchen. |

### `markdown`

Mit einem `markdown`-Element kannst du Markdown in deinem Formular anzuzeigen, um dem Benutzer zusätzlichen Kontext zu bieten, Markdown wird aber nicht übermittelt.

#### Attribute

{% data reusables.form-schema.attributes-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | Der Text, der gerendert wird. Markdown-Formatierung wird unterstützt. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Tipp:** Die YAML-Verarbeitung behandelt das Hashsymbol als Kommentar. Um Markdown-Kopfzeilen einzufügen, schließe den Text in Anführungszeichen ein.

Für mehrzeiligen Text kannst du den Pipe-Operator verwenden.

{% endtip %}

#### Beispiel

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Du kannst mit einem `textarea`-Element deinem Formular ein mehrzeiliges Textfeld hinzufügen. Mitwirkende können auch Dateien in `textarea`-Feldern anfügen.

#### Attribute

{% data reusables.form-schema.attributes-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Eine auch im Formular angezeigte kurze Beschreibung der erwarteten Benutzereingabe. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Eine im Formular angezeigte Beschreibung des Textbereichs, die Kontext oder Anleitungen bereitstellt. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Ein halbdurchsichtiger Platzhalter, der im Textbereich gerendert wird, wenn er leer ist. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Im Textbereich als Vorgabe angezeigter Text. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | Wenn ein Wert angegeben wird, wird übermittelter Text in einen Codeblock formatiert. Wenn dieser Schlüssel bereitgestellt wird, wird der Textbereich nicht für Dateianlagen oder Markdown-Bearbeitung erweitert. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | Sprachen, die {% data variables.product.prodname_dotcom %} bekannt sind. Weitere Informationen findest du in der [YAML-Datei der Sprachen](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Überprüfungen

{% data reusables.form-schema.validations-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Beispiel

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

Du kannst mit einem `input`-Element deinem Formular ein einzeiliges Textfeld hinzufügen.

#### Attribute

{% data reusables.form-schema.attributes-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Eine auch im Formular angezeigte kurze Beschreibung der erwarteten Benutzereingabe. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Eine im Formular angezeigte Beschreibung des Felds, die Kontext oder Anleitungen bereitstellt. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Ein halbdurchsichtiger Platzhalter, der im Feld gerendert wird, wenn es leer ist. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Im Feld als Vorgabe angezeigter Text. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Überprüfungen

{% data reusables.form-schema.validations-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Beispiel

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

Mit einem `dropdown`-Element kannst du deinem Formular ein Dropdownmenü hinzufügen.

#### Attribute

{% data reusables.form-schema.attributes-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Eine im Formular angezeigte kurze Beschreibung der erwarteten Benutzereingabe. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Eine im Formular angezeigte Beschreibung des Dropdownmenüs, die zusätzlichen Kontext oder Anleitungen bereitstellt. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Bestimmt, ob der Benutzer mehrere Optionen auswählen kann. | Optional | Boolean | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Ein Array von Optionen, aus dem der Benutzer auswählen kann. Kann nicht leer sein, und alle Auswahlmöglichkeiten müssen eindeutig sein. | Erforderlich | Zeichenfolgenarray | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Überprüfungen

{% data reusables.form-schema.validations-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Beispiel

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

Du kannst mit dem `checkboxes`-Element deinem Formular einen Satz von Kontrollkästchen hinzufügen.

#### Attribute

{% data reusables.form-schema.attributes-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Eine im Formular angezeigte kurze Beschreibung der erwarteten Benutzereingabe. | Erforderlich | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Eine im Formular angezeigte Beschreibung des Satzes von Kontrollkästchen. Unterstützt Markdown-Formatierung. | Optional | String | Leere Zeichenfolge | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Ein Array von Kontrollkästchen, die der Benutzer auswählen kann. Syntax siehe unten. | Erforderlich | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %}

#### Überprüfungen

{% data reusables.form-schema.validations-intro %}

| Schlüssel | BESCHREIBUNG | Erforderlich | type | Standard | Gültige Werte |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Beispiel

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Weiterführende Themen

- [YAML](https://yaml.org)
