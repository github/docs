---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111709"
---
アップグレードをロールバックする場合は、拡張子が *.pkg* のアップグレード パッケージ ファイルを使用する必要があります。 拡張子が *.hpkg* のホットパッチ パッケージ ファイルはサポートされていません。

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

このコマンドの実行後には再起動が必要です。 パッチリリースでは移行は行われないので、ロールバックはデータパーティションには影響しません。
