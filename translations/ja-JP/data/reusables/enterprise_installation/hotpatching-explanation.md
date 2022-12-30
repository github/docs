---
ms.openlocfilehash: 1789d143016bf39450798f8b3e1b97840f004332
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878921"
---
{% data variables.product.prodname_ghe_server %}は、ホットパッチを利用して最新のパッチリリースへアップグレードできます。ホットパッチにはメンテナンスウィンドウが不要で、通常は再起動も必要ありません。 

ホットパッチは新しいパッチリリースへのアップグレードに利用できますが、新しいフィーチャリリースへのアップグレードには利用できません。 たとえば、`2.10.1` から `2.10.5` は同じ機能シリーズに含まれているためアップグレードできますが、`2.10.9` から `2.11.0` は異なる機能シリーズに含まれているためアップグレードできません。
