---
title: Exportieren von Änderungen in einen Branch
intro: In diesem Artikel werden Schritte zum Exportieren von Codespaceänderungen in einen Branch erläutert.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159594'
---
## Exportieren von Änderungen in einen Branch

Es kann vorkommen, dass du deine Änderungen in {% data variables.product.prodname_github_codespaces %} in einen Branch exportieren musst, ohne deinen Codespace zu starten. Dies kann hilfreich sein, wenn du eine [Ausgabengrenze](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) erreicht hast oder ein allgemeines Problem beim Zugreifen auf deinen Codespace besteht.

Wenn dein Codespace nicht veröffentlicht wurde (aus einer Vorlage erstellt und nicht einem Repository in {% data variables.product.product_name %} zugeordnet), kannst du keine Änderungen in einen Branch exportieren. Du kannst den Codespace jedoch in einem neuen Repository veröffentlichen, ohne den Codespace zu starten. Weitere Informationen findest du unter [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom).

So exportierst du deine Änderungen in einen Branch

{% data reusables.codespaces.your-codespaces-procedure-step %} Oder klicke für ein einzelnes Repository auf das Menü **{% octicon "code" aria-label="The code icon" %} Code**.
1. Klicke auf die Auslassungspunkte (**...**) rechts neben dem Codespace, aus dem du Code exportieren möchtest.
2. Wähle **{% octicon "git-branch" aria-label="The git branch icon" %} Änderungen in Branch exportieren** aus.

  ![Exportieren von Änderungen in einen Branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. Klicke im Popover auf die Option **Branch erstellen**.
