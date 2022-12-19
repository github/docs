---
ms.openlocfilehash: 680371419da47612c4035e166640fa3102ba0cda
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145139019"
---
トークンを入手したなら、HTTPS経由でGitの操作をする際にパスワードの代わりにそのトークンを入力できます。

たとえば、コマンドラインでは以下のように入力できます。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repo</em>.git
Username: <em>your_username</em>
Password: <em>your_token</em>
```
