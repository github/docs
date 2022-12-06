---
title: Syntax für Issueformulare
intro: 'Du kannst verschiedene Eingabetypen, Überprüfungen, Standardpersonen für die Zuweisungen und Standardbezeichnungen für deine Issueformulare definieren.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 7e147868ce370b57c6a7437bc81f7b554f50443b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090168'
---
{% data reusables.community.issue-forms-beta %}

## Informationen zur YAML-Syntax für Issueformulare

Du kannst benutzerdefinierte Issueformulare erstellen, indem du dem Ordner `/.github/ISSUE_TEMPLATE` in deinem Repository eine YAML-Formulardefinitionsdatei hinzufügst. {% data reusables.actions.learn-more-about-yaml %} Du kannst verschiedene Eingabetypen, Überprüfungen, Standardpersonen für die Zuweisungen und Standardbezeichnungen für deine Issueformulare definieren.

Wenn ein Mitwirkender ein Issueformular ausfüllt, werden seine Antworten für jede Eingabe in Markdown konvertiert und dem Textkörper eines Issues hinzugefügt. Mitwirkende können ihre über Issueformulare erstellten Issues bearbeiten, und andere Personen können mit den Issues genau wie mit Issues interagieren, die über andere Methoden erstellt wurden.

Issueformulare werden für Pull Requests nicht unterstützt. Du kannst in deinen Repositorys Pull Request-Vorlagen erstellen, die von Mitarbeitern verwendet werden sollen. Weitere Informationen findest du unter [Erstellen einer Pull Request-Vorlage für dein Repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

In diesem Beispiel definiert die YAML-Konfigurationsdatei ein Issueformular mit mehreren Eingaben zum Melden eines Fehlers.

{% data reusables.community.issue-forms-sample %}

## Syntax auf oberster Ebene

Alle Konfigurationsdateien für Issueformulare müssen mit Schlüssel-Wert-Paaren für `name`, `description` und `body` beginnen.

```YAML{:copy}
name:
description:
body:
```

Du kannst für jedes Issueformular die folgenden Schlüssel auf oberster Ebene festlegen.

| Schlüssel | BESCHREIBUNG | Erforderlich | type |
| :-- | :-- | :-- | :-- | :-- |
| `name` | Ein Name für die Issueformularvorlage. Muss sich von allen anderen Vorlagen, einschließlich Markdownvorlagen, eindeutig unterscheiden. | Erforderlich | String |
| `description` | Eine Beschreibung für die Issueformularvorlage, die in der Oberfläche zur Vorlagenauswahl angezeigt wird. | Erforderlich | String |
| `body` | Definition der Eingabetypen im Formular. | Erforderlich | Array |
| `assignees` | Personen, die automatisch den mit dieser Vorlage erstellten Issues zugewiesen werden. | Optional | Array oder durch Trennzeichen getrennte Zeichenfolge |
| `labels` | Bezeichnungen, die automatisch den mit dieser Vorlage erstellten Issues hinzugefügt werden. | Optional | Array oder durch Trennzeichen getrennte Zeichenfolge |
| `title` | Ein Standardtitel, der im Issueübermittlungsformular vorab ausgefüllt wird. | Optional | String |

Eine Liste der verfügbaren `body`-Eingabetypen sowie die zugehörige Syntax findest du unter [Syntax for {% data variables.product.prodname_dotcom %}'s form schema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema) („Syntax für das GitHub-Formularschema“).

## Konvertieren einer Markdownissuevorlage in eine YAML-Issueformularvorlage

Du kannst sowohl Markdown- als auch YAML-Issuevorlagen in deinem Repository verwenden. Wenn du eine Markdownissuevorlage in eine YAML-Issueformularvorlage konvertieren möchtest, musst du eine neue YAML-Datei erstellen, um das Issueformular zu definieren. Du kannst eine vorhandene Markdownissuevorlage manuell in ein YAML-Issueformular transponieren. Weitere Informationen findest du unter [Konfigurieren von Issuevorlagen für dein Repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms).

Wenn du denselben Dateinamen für dein YAML-Issueformular verwenden möchtest, musst du die Markdownissuevorlage löschen, wenn du die neue Datei per Commit in dein Repository übernimmst.

Ein Beispiel für eine Markdownissuevorlage und eine entsprechende YAML-Issueformularvorlage findest du unten.

### Markdownissuevorlage

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### YAML-Issueformularvorlage

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## Weitere Informationsquellen

- [YAML](https://yaml.org/)
- [Häufige Validierungsfehler beim Erstellen von Issueformularen](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
