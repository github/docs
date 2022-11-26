---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114416"
---
Вы можете указать среду для каждого задания в рабочем процессе. Для этого добавьте ключ `jobs.<job_id>.environment`, за которым следует имя среды.

Например, этот рабочий процесс будет использовать среду с именем `production`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

При выполнении указанного выше рабочего процесса задание `deployment` будет применяться к любым правилам, настроенным для среды `production`. Например, если среда требует рецензентов, задание будет приостановлено до тех пор, пока один из рецензентов не утвердит задание.

Также можно указать URL-адрес среды. Указанный URL-адрес появится на странице развертываний для репозитория (доступ к которым можно получить, нажав **Среды** на странице приветствия репозитория) и в графе визуализации для запуска рабочего процесса. Если запрос на вытягивание активировал рабочий процесс, URL-адрес также отображается в виде кнопки **Просмотреть развертывание** на временной шкале запроса на вытягивание.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![Граф рабочего процесса с URL-адресом](/assets/images/help/images/deploy-graph.png)
