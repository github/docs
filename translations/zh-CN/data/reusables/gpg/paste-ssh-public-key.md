---
ms.openlocfilehash: dc6bad5b656bb5d755196146b017213b66d1730e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884718"
---
1. 若要在 Git 中设置 SSH 签名密钥，请粘贴下面的文本，替换要使用的密钥的剪贴板内容。 由于密钥包含空格，因此必须用引号将它括起：
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```