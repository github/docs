---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089474"
---
Используется `jobs.<job_id>.environment` для определения среды, на которую ссылается задание. Чтобы задание, ссылающееся на среду, было отправлено в средство выполнения, должны соблюдаться все правила защиты среды. Дополнительные сведения см. в разделе [Использование сред для развертывания](/actions/deployment/using-environments-for-deployment).

Вы можете указать среду в виде только имени среды `name` или в виде объекта среды с `name` и `url`. URL-адрес сопоставляется с `environment_url` в API развертываний. Дополнительные сведения об API развертываний см. в разделе [Развертывания](/rest/reference/repos#deployments).

### Пример. Использование только имени среды
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### Пример. Использование имени среды и URL-адреса

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL-адрес может быть выражением и может использовать любой контекст, кроме [контекста`secrets`](/actions/learn-github-actions/contexts#contexts). Дополнительные сведения о выражениях см. в разделе [Выражения](/actions/learn-github-actions/expressions).

### Пример. Использование выходных данных в качестве URL-адреса
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
