---
title: Hinzufügen eines Badges für den Workflowstatus
intro: Du kannst ein Statusbadge zum Status deines Workflows in deinem Repository anzeigen.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
ms.openlocfilehash: d2b0703e9ca4dcdc0a02cb81144e321a38cffde0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880629'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Hinweis**: Workflowbadges in einem privaten Repository sind nicht extern zugänglich, sodass du sie nicht einbetten oder von einer externen Website aus verlinken kannst.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Wenn du deiner `README.md`-Datei einen Workflowstatusbadge hinzufügen möchtest, suche zuerst die URL für den Statusbadge, den du anzeigen möchtest. Anschließend kannst du Markdown verwenden, um den Badge als Bild in deiner `README.md`-Datei anzuzeigen. Weitere Informationen zu Bildmarkup in Markdown findest du unter [Grundlegende Schreib- und Formatierungssyntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

## Verwenden des Workflowdateinamens

Du kannst die URL für einen Workflowstatusbadge mithilfe des Namens der Workflowdatei erstellen:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Um den Workflowstatusbadge in deiner `README.md`-Datei anzuzeigen, verwende das Markdownmarkup zum Einbetten von Bildern. Weitere Informationen zu Bildmarkup in Markdown findest du unter [Grundlegende Schreib- und Formatierungssyntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

Füge beispielsweise deiner `README.md`-Datei das folgende Markdownelement hinzu, um einen Statusbadge für einen Workflow mit dem Dateipfad `.github/workflows/main.yml` hinzuzufügen. Der `OWNER` des Repositorys ist die `github`-Organisation und der `REPOSITORY`-Name ist `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Verwenden des `branch`-Parameters

Zum Anzeigen des Status eines Workflows, der für einen bestimmten Branch ausgeführt wird, füge dem Ende der Statusbadge-URL `?branch=<BRANCH_NAME>` hinzu.

Füge beispielsweise deiner `README.md`-Datei das folgende Markdownelement hinzu, um einen Statusbadge für einen Branch mit dem Namen `feature-1` anzuzeigen.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Verwenden des `event`-Parameters

Zum Anzeigen des Status von Workflowausführungen, die vom `push`-Ereignis ausgelöst werden, füge dem Ende der Statusbadge-URL `?event=push` hinzu.

Füge beispielsweise deiner `README.md`-Datei das folgende Markdownelement hinzu, um einen Badge mit dem Status von Workflowausführungen anzuzeigen, die vom `push`-Ereignis ausgelöst werden, wodurch der Status des Builds für den aktuellen Zustand des betreffenden Branchs angezeigt wird.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
