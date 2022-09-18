---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694222"
---
1. 使用 `gpg --list-secret-keys --keyid-format=long` 命令列出你拥有其公钥和私钥的长形式 GPG 密钥。 签名提交或标记需要私钥。

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   注意：Linux 上的某些 GPG 安装可能需要改用 `gpg2 --list-keys --keyid-format LONG` 查看现有密钥的列表。 在这种情况下，还需要通过运行 `git config --global gpg.program gpg2` 来配置 Git 以使用 `gpg2`。

   {% endnote %}
