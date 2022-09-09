---
title: 还原提交
intro: 您可以还原特定提交，以从分支中删除其变更。
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085088'
---
在还原到上一个提交时，还原本身也是提交。 原提交仍会保留在仓库的历史记录中。

{% tip %}

提示：在还原多个提交时，最好按照从最新到最旧的顺序还原。 如果以其他顺序还原提交，可能会出现合并冲突。

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![差异视图上方的“还原”选项](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![差异视图上方的“还原”选项](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
