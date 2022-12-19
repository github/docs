---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109078"
---
構成スクリプトを使うと、新しいランナーをグループに自動的に追加できます。 たとえば、このコマンドを実行すると、新しいランナーが登録されて、`--runnergroup` パラメーターを使って `rg-runnergroup` という名前のグループに追加されます。

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

ランナー グループが存在しない場合、コマンドは失敗します。

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
