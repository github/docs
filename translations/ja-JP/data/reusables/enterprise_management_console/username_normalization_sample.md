---
ms.openlocfilehash: 5f81e75a6968f2a63114b23674561e82f6a0bae6
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141528597"
---
以下の表は、ユーザ名が{% data variables.product.prodname_ghe_server %}でどのように変換されるかの例を示しています。

| ユーザー名 | 変換されたユーザ名 | 結果
|----------|---------------------|-------
| Ms.Bubbles | `ms-bubbles` | このユーザ名の作成は成功します。
| !Ms.Bubbles | `-ms-bubbles` | このユーザ名はダッシュで始まるので作成されません。
| Ms.Bubbles! | `ms-bubbles-` | このユーザ名はダッシュで終わるので作成されません。
| Ms!!Bubbles | `ms--bubbles` | このユーザ名には連続する2つのダッシュが含まれるので作成されません。
| Ms!Bubbles | `ms-bubbles` | このユーザ名は作成されません。 変換されたユーザ名は正当ですが、すでに存在しています。
| Ms.Bubbles@example.com | `ms-bubbles` | このユーザ名は作成されません。 変換されたユーザ名は正当ですが、すでに存在しています。
