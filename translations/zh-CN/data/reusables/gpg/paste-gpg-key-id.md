---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614197"
---
1. 若要在 Git 中设置 GPG 签名主键，请粘贴下面的文本，替换要使用的 GPG 主键 ID。 在本例中，GPG 密钥 ID 为 `3AA5C34371567BD2`：
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   或者，在设置子项时包含 `!` 后缀。 在本例中，GPG 子键 ID 为 `4BB6D45482678BE3`：
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
