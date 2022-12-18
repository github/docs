---
ms.openlocfilehash: c5a766780b3a2453300c61ea2a85db9b651af5cb
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098371"
---
{% данных reusables.package_registry.packages-classic-pat-only %}

1. Создайте {% данных variables.product.pat_v1 %} с соответствующими областями для задач, которые вы хотите выполнить. Если для вашей организации требуется единый вход, необходимо включить его для нового маркера.
  {% warning %}

  **Примечание:** По умолчанию при выборе `write:packages` области для {% данных variables.product.pat_v1 %} в пользовательском интерфейсе `repo` также будет выбрана область. Область `repo` предоставляет ненужный и широкий доступ, который рекомендуется избегать использования для рабочих процессов {% variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Усиление безопасности для GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access). В качестве обходного решения можно выбрать только `write:packages` область для {% данных variables.product.pat_v1 %} в пользовательском интерфейсе, указав следующий URL-адрес: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages` 

  {% endwarning %}

    - Выберите область `read:packages` для скачивания образов контейнеров и считывания их метаданных.
    - Выберите область `write:packages` для скачивания и отправки образов контейнеров, а также для считывания и записи их метаданных.
    - Выберите область `delete:packages` для удаления образов контейнеров.

  Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %} для командной строки](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".

2. Сохраните данные {% variables.product.pat_v1 %}. Рекомендуется сохранить маркер в качестве переменной среды.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. С помощью интерфейса командной строки для типа контейнера войдите в службу {% data variables.product.prodname_container_registry %} по адресу `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
