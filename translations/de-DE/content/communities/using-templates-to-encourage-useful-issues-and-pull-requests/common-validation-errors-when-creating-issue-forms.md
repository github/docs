---
title: Häufige Validierungsfehler beim Erstellen von Issue-Formularen
intro: 'Möglicherweise treten einige dieser gängigen Überprüfungsfehler beim Erstellen, Speichern oder Anzeigen von Issueformularen auf.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 55eae6e043f82bfbaa49f7af42e23e4cb56f0ee8
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147650341'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## Erforderlicher Schlüssel oberster Ebene (`name`) fehlt

Die Vorlage enthält kein `name`-Feld. Folglich ist nicht klar, welche Bezeichnung für deine Issuevorlage verwendet werden soll, wenn Benutzer*innen eine Liste verschiedener Optionen angezeigt wird.

### Beispiel

```yaml
description: "Thank you for reporting a bug!"
...
```

Der Fehler kann behoben werden, indem `name` als Schlüssel hinzufügt wird.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## `key` muss eine Zeichenfolge sein

Diese Fehlermeldung bedeutet, dass ein zulässiger Schlüssel angegeben wurde, der Wert jedoch nicht analysiert werden kann, weil der Datentyp nicht unterstützt wird.

### Beispiel

Der `description`-Wert unten wird als boolescher Wert analysiert, es sollte jedoch eine Zeichenfolge sein.

```yaml
name: "Bug report"
description: true
...
```

Der Fehler kann behoben werden, indem eine Zeichenfolge als Wert angegeben wird. Für eine erfolgreiche Analyse müssen Zeichenfolgen gegebenenfalls in doppelte Anführungszeichen eingeschlossen werden. Zeichenfolgen mit `'` müssen z. B. in doppelte Anführungszeichen gesetzt werden.

```yaml
name: "Bug report"
description: "true"
...
```

Leere Zeichenfolgen oder Zeichenfolgen, die nur aus Leerzeichen bestehen, sind ebenfalls unzulässig, wenn für das Feld eine Zeichenfolge erwartet wird.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

Der Fehler kann behoben werden, indem der Wert korrigiert und in eine nicht leere Zeichenfolge geändert wird. Wenn das Feld nicht erforderlich ist, solltest du das Schlüssel-Wert-Paar löschen.

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input` ist kein zulässiger Schlüssel

Auf oberster Ebene der Vorlage wurde ein unerwarteter Schlüssel angegeben. Weitere Informationen zu den unterstützten Schlüsseln oberster Ebene findest du unter [Syntax for issue forms](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax) („Syntax für Issue-Formulare“).

### Beispiel

```yaml
name: "Bug report"
hello: world
...
```

Der Fehler kann behoben werden, indem die unerwarteten Schlüssel entfernt werden.

```yaml
name: "Bug report"
...
```

## Unzulässige Schlüssel

YAML analysiert bestimmte Zeichenfolgen als `Boolean`-Werte. Damit dies vermieden wird, wurde die Verwendung der folgenden Schlüssel explizit untersagt:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

Der Fehler kann behoben werden, indem die unzulässigen Schlüssel entfernt werden.

## Der Text muss mindestens ein Nicht-Markdown-Feld enthalten

Issue-Formulare müssen Benutzereingaben akzeptieren, es muss also mindestens ein Benutzereingabefeld enthalten sein. Da ein `markdown`-Element statischer Text ist, darf ein `body`-Array nicht ausschließlich `markdown`-Elemente enthalten.

### Beispiel

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

Der Fehler kann behoben werden, indem Nicht-Markdown-Elemente hinzugefügt werden, die Benutzereingaben akzeptieren.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## Der Text muss eindeutige IDs aufweisen

Wenn du `id`-Attribute verwendest, um zwischen mehreren Elementen zu unterscheiden, muss jedes `id`-Attribut eindeutig sein.

### Beispiel

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

Der Fehler kann behoben werden, indem der `id`-Wert für eine dieser Eingaben geändert wird, damit jedes `input`-Feld über ein eindeutiges `id`-Attribut verfügt.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## Der Text muss eindeutige Bezeichnungen aufweisen

Wenn mehrere `body`-Elemente vorhanden sind, die Benutzereingaben akzeptieren, muss das `label`-Attribut für jedes Benutzereingabefeld eindeutig sein.

### Beispiel

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

Der Fehler kann behoben werden, indem das `label`-Attribut für eins der Eingabefelder so geändert wird, dass jeder `label`-Wert eindeutig ist.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

Zwischen Eingabefeldern kann anhand ihres `id`-Attributs unterschieden werden. Wenn doppelte `label`-Attribute erforderlich sind, kannst du mindestens einen `id`-Wert angeben, um zwischen zwei Elementen mit identischen Bezeichnungen zu unterscheiden.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

`id`-Attribute sind im Issue-Text nicht sichtbar. Wenn du im resultierenden Issue zwischen den Feldern unterscheiden können möchtest, solltest du unterschiedliche `label`-Attribute verwenden.


## Bezeichnungen sind zu ähnlich

Ähnliche Bezeichnungen können in identische Verweise verarbeitet werden. Wenn kein `id`-Attribut für einen `input`-Wert angegeben wird, wird das `label`-Attribut verwendet, um einen Verweis auf das `input`-Feld zu generieren. Dazu wird `label` mit der Rails-Methode [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) verarbeitet. In einigen Fällen können zwei unterschiedliche Bezeichnungen in dieselbe parametrisierte Zeichenfolge verarbeitet werden.

### Beispiel

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

Der Fehler kann behoben werden, indem mindestens ein anderes alphanumerisches Zeichen, `-` oder `_` zu einer der Bezeichnungen hinzugefügt wird, bei denen es zu einem Konflikt kommt.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

Der Fehler kann auch behoben werden, indem einer der Bezeichnungen ein eindeutiger `id`-Wert zugewiesen wird.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## Kontrollkästchen müssen eindeutige Bezeichnungen aufweisen

Wenn ein `checkboxes`-Element vorhanden ist, müssen alle geschachtelten Bezeichnungen innerhalb der Peers sowie innerhalb von anderen Eingabetypen eindeutig sein.

### Beispiel

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Der Fehler kann behoben werden, indem das `label`-Attribut für eine dieser Eingaben geändert wird.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

Alternativ kannst du einen `id`-Wert für eins der Elemente oberster Ebene angeben, bei denen es zu Konflikten kommt. Geschachtelte Kontrollkästchenelemente unterstützen das `id`-Attribut nicht.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

`id`-Attribute sind im Issue-Text nicht sichtbar. Wenn du im resultierenden Issue zwischen den Feldern unterscheiden können möchtest, solltest du unterschiedliche `label`-Attribute verwenden.

## Body[i]: erforderlicher Schlüsseltyp fehlt

Jeder Textblock muss den Schlüssel `type` enthalten.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den nullindizierten Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Der Fehler kann behoben werden, indem der Schlüssel `type` mit einem gültigen Eingabetyp als Wert hinzugefügt wird. Eine Liste der verfügbaren `body`-Eingabetypen sowie die zugehörige Syntax findest du unter [Syntax for {% data variables.product.prodname_dotcom %}'s form schema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys) („Syntax für das GitHub-Formularschema“).

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: `x` ist kein gültiger Eingabetyp

Einer der Textblöcke enthält einen Typwert, der kein [zulässiger Typ](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys) ist.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Der Fehler kann behoben werden, indem `x` in einen gültigen Typ geändert wird.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: erforderlicher Attributschlüssel `value` fehlt

Eins der erforderlichen `value`-Attribute wurde nicht angegeben. Der Fehler tritt auf, wenn ein Block nicht über einen `attributes`-Schlüssel oder nicht über einen `value`-Schlüssel unterhalb des `attributes`-Schlüssels verfügt.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

Der Fehler in diesem Beispiel kann behoben werden, indem `value` als Schlüssel unter `attributes` im zweiten Listenelement von `body` hinzugefügt wird.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i]: Bezeichnung muss eine Zeichenfolge sein

Ein Wert innerhalb des `attributes`-Blocks weist den falschen Datentyp auf.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

Der `label`-Wert unten wird als boolescher Wert analysiert, es sollte jedoch eine Zeichenfolge sein.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

Der Fehler kann behoben werden, indem ein Zeichenfolgenwert für `label` angegeben wird. Wenn du einen `label`-Wert verwenden möchtest, der als boolescher Wert, ganze Zahl oder Dezimalzahl analysiert werden kann, setze den Wert in Anführungszeichen. Verwende z. B. `"true"` oder `"1.3"` anstelle von `true` oder `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

Leere Zeichenfolgen oder Zeichenfolgen, die nur aus Leerzeichen bestehen, sind unzulässig, wenn für ein Attribut eine Zeichenfolge erwartet wird. `""` oder `"     "` sind z. B. nicht zulässig.

Wenn das Attribut erforderlich ist, muss der Wert eine nicht leere Zeichenfolge sein. Wenn das Feld nicht erforderlich ist, solltest du das Schlüssel-Wert-Paar löschen.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i]: `id` darf ausschließlich Zahlen, Buchstaben, -, _ enthalten

`id`-Attribute dürfen ausschließlich alphanumerische Zeichen, `-` und `_` enthalten. Deine Vorlage umfasst möglicherweise unzulässige Zeichen (z. B. Leerzeichen) in einem `id`-Wert.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

Der Fehler kann behoben werden, indem sichergestellt wird, dass Leerzeichen und andere unzulässige Zeichen aus `id`-Werten entfernt werden.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]: `x` ist kein zulässiger Schlüssel

Ein unerwarteter Schlüssel (`x`) wurde auf derselben Einzugsebene angegeben wie `type` und `attributes`.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Der Fehler kann behoben werden, indem zusätzliche Schlüssel entfernt und lediglich `type`, `attributes` und `id` verwendet werden.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]: `label` enthält ein unzulässiges Wort

Damit das Risiko der Offenlegung privater Informationen und Anmeldeinformation in GitHub Issues verhindert wird, sind einige Wörter, die häufig von Angreifer*innen verwendet werden, in `label`-Werten von Eingabe- oder Textbereichselementen nicht zulässig.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

Der Fehler kann behoben werden, indem Begriffe wie „password“ (Kennwort) aus `label`-Feldern entfernt werden.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]: `x` ist kein zulässiges Attribut

In einem `attributes`-Block wurde ein ungültiger Schlüssel angegeben.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

Der Fehler kann behoben werden, indem zusätzliche Schlüssel entfernt und lediglich zulässige Attribute verwendet werden.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]: `options` muss eindeutig sein

Die für Kontrollkästchen und Dropdowneingabetypen im `options`-Array definierten Auswahlmöglichkeiten müssen eindeutig sein.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

Der Fehler kann behoben werden, indem sichergestellt wird, dass keine doppelten Auswahlmöglichkeiten im `options`-Array vorhanden sind.

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]: `options` darf das reservierte Wort „none“ (keine) nicht enthalten

„none“ (keine) ist ein reserviertes Wort in einer `options`-Auswahl, mit dem angezeigt wird, dass keine Auswahl getroffen wird, wenn kein `dropdown`-Wert erforderlich ist.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

Der Fehler kann behoben werden, indem „None“ (Keine) als Option entfernt wird. Wenn Mitwirkende angeben können sollen, dass sie keine dieser Optionen mögen, kannst du zusätzlich die `required`-Validierung entfernen.

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

In diesem Beispiel wird „None“ (Keine) automatisch als auswählbare Option gefüllt.

## Body[i]: `options` darf keine booleschen Werte enthalten. Setze Werte wie „yes“ (ja) und „true“ (wahr) in Anführungszeichen.

Eine Reihe von englischen Wörtern werden vom YAML-Parser in boolesche Werte verarbeitet, wenn sie nicht in Anführungszeichen eingeschlossen sind. Bei Dropdownoptionen (`options`) müssen sämtliche Elemente Zeichenfolgen und keine booleschen Werte sein.

Bei Fehlern mit `body` wird das Präfix `body[i]` hinzugefügt, wobei `i` für den Index des Textblocks mit dem Fehler steht. `body[0]` weist z. B. darauf hin, dass der Fehler durch den ersten Block in der `body`-Liste verursacht wurde.

### Beispiel

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

Der Fehler kann behoben werden, indem alle Optionen in Anführungszeichen gesetzt werden, bei denen Probleme aufgetreten sind. Auf diese Weise lässt sich verhindern, dass die Optionen als boolesche Werte verarbeitet werden.

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## Text darf nicht leer sein

Das Vorlagentextpaar `key:value` darf nicht leer sein. Weitere Informationen zu den erforderlichen Schlüsseln oberster Ebene findest du unter [Syntax für Issueformulare](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax).

Dieser Fehler kann durch Hinzufügen des Abschnitts `body:` behoben werden.

### Beispiel

```yaml
name: Support Request
description: Something went wrong and you need help?
---
body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

In diesem Beispiel kann der Fehler durch Löschen des Abschnitts `---` (Dokumenttrennzeichen) zwischen den Kopfzeilen und dem Abschnitt `body` behoben werden.

```yaml
name: Support Request
description: Something went wrong and you need help?

body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

## Weitere Informationsquellen

- [YAML](https://yaml.org/)
- [Syntax for issue forms](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) („Syntax für Issue-Formulare“)
