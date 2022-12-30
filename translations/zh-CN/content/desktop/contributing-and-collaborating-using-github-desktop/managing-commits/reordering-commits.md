---
title: 重新排序提交
intro: '您可以使用 {% data variables.product.prodname_desktop %} 对分支历史记录中的提交重新排序。'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099266'
---
## 关于重新排序提交

重新订购允许您更改您的提交历史记录，以提供更有意义的提交进度。 {% data variables.product.prodname_desktop %} 允许您在分支历史记录中拖放提交以重新排序。

## 重新排序提交

{% data reusables.desktop.current-branch-menu %}
2. 在分支列表中，单击包含您想要重新排序其提交的分支。
{% data reusables.desktop.history-tab %}
4. 拖动您想要重新排序的提交，并将其置于两个相邻的提交之间。
  ![对拖放进行重新排序](/assets/images/help/desktop/reorder-drag-and-drop.png)当应用程序重新排序提交时，“正在进行重新排序”对话框将指示更改的进度。

## 重新排序提交时的错误消息

重新排序提交时，您可能会看到以下通知或错误消息。

* 通知指出，请求的分支更改将需要强制推送以更新远程分支。 当您重新排序的提交之前被推送到远程分支时，将会显示此通知。 强制推送会更改分支的提交历史记录，并影响处理该分支的其他协作者。  选择“开始重新排序”以开始重新排序，然后单击“强制推送源”以推送所做的更改 。

  ![重新排序强制推送对话框](/assets/images/help/desktop/reorder-force-push-dialog.png)

* 错误表示重排序失败，因为重新排序的提交之间有合并提交。

  ![重新排序合并提交对话框](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* 通知显示您当前分支上存在未提交的更改。 选择“”存储更改并继续，或选择“关闭”以关闭消息并提交更改 。 当不再有任何未提交的更改时，您可以重新排序您的提交。

  ![重新排序暂存对话框](/assets/images/help/desktop/reorder-stash-dialog.png)

* 消息指出，必须先解决冲突，然后应用程序才可继续重新排序分支上的提交。
    1. 单击“查看冲突”以查看冲突。
      ![重新排序解决冲突消息](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. 当所有冲突得到解决时，您可以重新排序您的提交。
  
