---
ms.openlocfilehash: 9b9749a9b1d8405deadafdb29203b9537900813e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884972"
---
トラブルシューティングするために、まずGitプロジェクト内のGitプロジェクトであるサブモジュールを本当に使いたいかを判断してください。サブモジュールは偶然作られてしまうことがあります。

サブモジュールを使用しない場合は、サブモジュールを削除し、<em>PATH-TO-SUBMODULE</em> をサブモジュールへのパスに置き換えます。
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
