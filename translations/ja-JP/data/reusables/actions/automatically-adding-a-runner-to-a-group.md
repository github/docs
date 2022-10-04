---
ms.openlocfilehash: 39b0767cfd400a12b2fb2d6709e2588dce9be503
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763997"
---
構成スクリプトを使うと、新しいランナーをグループに自動的に追加できます。 たとえば、このコマンドを実行すると、新しいランナーが登録されて、`--runnergroup` パラメーターを使って `rg-runnergroup` という名前のグループに追加されます。

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

ランナー グループが存在しない場合、コマンドは失敗します。

```
Could not find any self-hosted runner group named "rg-runnergroup".
```