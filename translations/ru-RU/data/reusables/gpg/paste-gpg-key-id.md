---
ms.openlocfilehash: a844d741a89d4839e7c2c4010a1479246cc4d405
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009840"
---
1. Чтобы задать первичный ключ подписи GPG в Git, вставьте приведенный ниже текст, подставив идентификатор первичного ключа GPG, который вы хотите использовать. В этом примере идентификатором ключа GPG является `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey 3AA5C34371567BD2
   ```
   
   Кроме того, при задании подраздела включите суффикс `!`. В этом примере идентификатором подраздела GPG является `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey 4BB6D45482678BE3!
   ```
