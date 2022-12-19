---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069572"
---
`permissions` можно использовать для изменения разрешений по умолчанию, предоставленных `GITHUB_TOKEN`, при необходимости добавляя или удаляя права доступа, чтобы разрешить только минимальный требуемый доступ. Дополнительные сведения см. в статье "[Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

`permissions` можно использовать в качестве ключа верхнего уровня для применения ко всем заданиям в рабочем процессе или в конкретных заданиях. При добавлении ключа `permissions` в конкретном задании указанные права доступа получают все действия и команды выполнения в этом задании, использующие `GITHUB_TOKEN`.  Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### Пример. Назначение разрешений для GITHUB_TOKEN

В этом примере показаны разрешения, заданные для `GITHUB_TOKEN`, которые будут применены ко всем заданиям в рабочем процессе. Всем разрешениям предоставляется доступ на чтение.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
