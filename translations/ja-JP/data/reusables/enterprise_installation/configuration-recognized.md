---
ms.openlocfilehash: 2fd5ca9c5a65bed4a656cb3fdbd37db7a23a9387
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111694"
---
1. インスタンスが完全に再起動し、アクセスできるようになったら、SSH の管理シェルを使って新しいリソース構成が認識されていることを確認してください:
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
