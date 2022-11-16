---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114411"
---
### Выполнение заданий в другой операционной системе

Начальный рабочий процесс настраивает задания для запуска в Linux с помощью размещенных в {% data variables.product.prodname_dotcom %} средств выполнения `ubuntu-latest`. Можно изменить ключ `runs-on` для выполнения заданий в другой операционной системе. Например, можно использовать размещенные в {% data variables.product.prodname_dotcom %} средства выполнения Windows.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Кроме этого, можно выполнять задания на размещенных в {% data variables.product.prodname_dotcom %} средствах выполнения macOS.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Можно также выполнять задания в контейнерах Docker или предоставить локальное средство выполнения, которое выполняется в собственной инфраструктуре. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on).
