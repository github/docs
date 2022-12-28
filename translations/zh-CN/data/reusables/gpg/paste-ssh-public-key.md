---
ms.openlocfilehash: adefefb787099214cf17f7b2276a8f44f3fe8e56
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: "148160570"
---
1. 若要在 Git 中设置 SSH 签名密钥，请粘贴下面的文本，将 /PATH/TO/KEY.PUB 替换为要使用的公钥路径。
  ```bash
  $ git config --global user.signingkey=/PATH/TO/.SSH/KEY.PUB