---
ms.openlocfilehash: 81695036af856b526d3d9483e36b36a06a85b7ee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118390"
---
**メモ:** {% data variables.product.prodname_actions %} は既定の Docker ユーザー(root) で実行しなければなりません。 Dockerfile で `USER` 命令が設定されていないことを確認します。されている場合は、`GITHUB_WORKSPACE` にアクセスできません。
