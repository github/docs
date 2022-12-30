---
title: 添加工作流状态徽章
intro: 您可以在您的仓库中显示状态徽章，以指示您的工作流程状态。
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880627'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

注意：无法从外部访问专用存储库中的工作流徽章，因此无法嵌入它们或者从外部站点链接到它们。

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


若要向 `README.md` 文件添加工作流状态徽章，请首先找到要显示的状态徽章的 URL。 然后，可以使用 Markdown 将徽章显示为 `README.md` 文件中的图像。 有关 Markdown 中的图像标记的详细信息，请参阅“[基本编写和格式设置语法](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)”。

## 使用工作流程文件名称

可以使用工作流文件的名称生成工作流状态徽章的 URL：

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

若要在 `README.md` 文件中显示工作流状态徽章，请使用 Markdown 标记来嵌入图像。 有关 Markdown 中的图像标记的详细信息，请参阅“[基本编写和格式设置语法](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)”。

例如，将以下 Markdown 添加到 `README.md` 文件，可为文件路径为 `.github/workflows/main.yml` 的工作流添加状态徽章。 存储库的 `OWNER` 是 `github` 组织，`REPOSITORY` 名称为 `docs`。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## 使用 `branch` 参数

若要显示特定分支的工作流运行状态，请将 `?branch=<BRANCH_NAME>` 添加到状态徽章 URL 的末尾。

例如，将以下 Markdown 添加到 `README.md` 文件，可为名称为 `feature-1` 的分支显示状态徽章。

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## 使用 `event` 参数

若要显示 `push` 事件触发的工作流运行状态，请将 `?event=push` 添加到状态徽章 URL 的末尾。

例如，将以下 Markdown 添加到 `README.md` 文件，可显示由 `push` 事件触发的工作流运行状态的徽章，该徽章将显示该分支当前状态的生成状态。

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
