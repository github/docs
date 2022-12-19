---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108114"
---
可以使用配置脚本自动向组添加新运行器。 例如，此命令会注册一个新运行器，并使用 `--runnergroup` 参数将其添加到名为 `rg-runnergroup` 的组。

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

如果运行器组不存在，命令将失败：

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
