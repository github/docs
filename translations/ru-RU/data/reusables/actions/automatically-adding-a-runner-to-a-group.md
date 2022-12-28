---
ms.openlocfilehash: 4e8c79051e378c800568f0fcf36c783a1bdd8811
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109076"
---
Вы можете автоматически добавлять новое средство выполнения в группу с помощью скрипта конфигурации. Например, следующая команда регистрирует новое средство выполнения и использует параметр `--runnergroup`, чтобы добавить его в группу с именем `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

Если такая группа средств выполнения не существует, команда завершится ошибкой:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```
