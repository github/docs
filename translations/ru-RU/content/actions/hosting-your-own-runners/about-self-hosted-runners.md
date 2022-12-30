---
title: О самостоятельно размещенных средствах выполнения
intro: 'Можно размещать собственные средства выполнения и настраивать среду, используемую для выполнения заданий в рабочих процессах {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107568'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## О самостоятельно размещенных средствах выполнения

Локальное средство выполнения — это система, которую вы развертываете и управляете выполнением заданий из {% данных variables.product.prodname_actions %} на {% ifversion ghae или ghec %}{% данных variables.product.product_name %}{% остальных %}{% данных variables.location.product_location %}{%endif %}. Дополнительные сведения о {% data variables.product.prodname_actions %}, см. в разделах [Общие сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghec or ghes or ghae %} и [Сведения о {% data variables.product.prodname_actions %} для предприятий](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

Вы можете добавить локальные средства выполнения тестов на различных уровнях иерархии управления.
- Средства выполнения тестов на уровне репозитория предназначены для одного репозитория.
- Средства выполнения тестов на уровне организации могут обрабатывать задания для нескольких репозиториев в организации.
- Средства выполнения тестов на корпоративном уровне могут назначаться нескольким организациям в корпоративной учетной записи.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} При выпуске новой версии приложение средства выполнения тестов автоматически обновляет себя, когда ему назначается задание, или в течение недели после выпуска, если никакое задание не назначается.

{% ifversion ghes %} {% note %}

**Примечание.** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

Дополнительные сведения об установке и использовании локальных средств выполнения тестов см. в разделах [Добавление локальных средств выполнения тестов](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners) и [Использование локальных средств выполнения тестов в рабочем процессе](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow).

## {% ifversion fpt or ghec or ghes %}Различия размещенных в {% data variables.product.prodname_dotcom %} и {% elsif ghae %}Характеристики {% endif %}локальных средств выполнения тестов

{% ifversion fpt or ghec or ghes %} Размещенные в {% data variables.product.prodname_dotcom %} средства выполнения тестов предлагают более быстрый и простой способ запуска рабочих процессов, а локальные{% elsif ghae %}Локальные{% endif %} средства выполнения тестов являются способом запуска рабочих процессов в вашей собственной пользовательской среде с широкими возможностями настройки. {% ifversion ghae %}Локальные средства выполнения тестов:{% endif %}

{% ifversion fpt or ghec or ghes %} **Средства выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}**
- Получение автоматических обновлений для операционной системы, предварительно установленных пакетов и средств, а также самостоятельного приложения средства выполнения.
- Управляются и обслуживаются {% data variables.product.prodname_dotcom %}.
- Предоставляют чистый экземпляр для каждого выполнения задания.
- Используют бесплатные минуты в вашем плане {% data variables.product.prodname_dotcom %} с поминутными тарифами, которые применяются после превышения количества бесплатных минут.

**Локальные средства выполнения тестов**{% endif %}
- Получать автоматические обновления для локального приложения средства выполнения только {% ifversion fpt или ghec или ghes > 3.4 или ghae %}, хотя вы можете отключить автоматическое обновление средства выполнения. Дополнительные сведения об управлении обновлениями программного обеспечения локальных средств выполнения тестов см. в разделе [Автомасштабирование с локальными средствами выполнения тестов](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners).{% else %}.{% endif %} Вы несете ответственность за обновление операционной системы и прочего программного обеспечения.
- Может использовать облачные службы или локальные компьютеры, за которые вы уже платите.
- Являются настраиваемыми под ваше оборудование, операционную систему, программное обеспечение и требования безопасности.
- Не нуждаются в чистом экземпляре для каждого выполнения задания.
- Могут использоваться с {% data variables.product.prodname_actions %}, но вы отвечаете за затраты на обслуживание ваших компьютеров средств выполнения тестов.{% ifversion ghec or ghes or ghae %}
- Можно упорядочить в группы, чтобы ограничить доступ к определенным {% ifversion restrict-groups-to-workflows %}рабочим процессам, {% endif %}организациям и репозиториям. Дополнительные сведения см. в разделе [Управление доступом к локальным средствам выполнения тестов с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."{% endif %}

## Требования для компьютеров локальных средств выполнения тестов

Вы можете использовать любой компьютер в качестве локального средства выполнения тестов, если он соответствует следующим требованиям.

* На этом компьютере можно установить и запустить приложение локального средства выполнения тестов. Дополнительные сведения см. в разделе [Поддерживаемые архитектуры и операционные системы для локальных средств выполнения тестов](#supported-architectures-and-operating-systems-for-self-hosted-runners).
* Компьютер может взаимодействовать с {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Обмен данными между локальными средствами выполнения тестов и {% data variables.product.product_name %}](#communication-requirements).
* На компьютере достаточно аппаратных ресурсов для того типа рабочих процессов, которые вы планируете запускать. Само приложение локального средства выполнения тестов требует только минимальных ресурсов.
* Если вы хотите запускать рабочие процессы, использующие действия контейнеров Docker или контейнеры служб, необходимо использовать компьютер Linux и установить Docker.

## Автоммасштабирование локальных средств выполнения тестов

Вы можете автоматически увеличивать или уменьшать количество локальных средств выполнения тестов в вашей среде в ответ на полученные события веб-перехватчика. Дополнительные сведения см. в разделе [Автомасштабирование с использованием локальных средств выполнения тестов](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

## Ограничения использования

Существуют некоторые ограничения на использование {% data variables.product.prodname_actions %} при использовании локальных средств выполнения тестов. Эти ограничения могут меняться.

{% data reusables.actions.usage-workflow-run-time %}
- **Время в очереди заданий** — каждое задание для локальных средств выполнения тестов может находиться в очереди не более 24 часов. Если локальное средство выполнения тестов не запускает выполнение задания в течение этого времени, задание завершается и не может быть выполнено.
{% data reusables.actions.usage-api-requests %}
- **Матрица заданий** — {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## Непрерывность рабочих процессов для локальных средств выполнения тестов

{% data reusables.actions.runner-workflow-continuity %}

## Поддерживаемые архитектуры и операционные системы для локальных средств выполнения тестов

Для приложения локального средства выполнения тестов поддерживаются следующие операционные системы.

### Linux

- Red Hat Enterprise Linux 7 или более поздней версии
- CentOS 7 или более поздней версии
- Oracle Linux 7
- Fedora 29 или более поздней версии
- Debian 9 или более поздней версии
- Ubuntu 16.04 или более поздней версии.
- Linux Mint 18 или более поздней версии
- openSUSE 15 или более поздней версии
- SUSE Enterprise Linux (SLES) 12 SP2 или более поздней версии

### Windows

- Windows 7 64-разрядная
- Windows 8.1 64-разрядная
- Windows 10 64-разрядная
- Windows Server 2012 R2 64-разрядная
- Windows Server 2019 64-разрядная

### macOS

- macOS 10.13 (High Sierra) или более поздней версии

### Архитектуры

Для приложения локального средства выполнения тестов поддерживаются следующие процессорные архитектуры.

- `x64` — Linux, macOS, Windows.
- `ARM64` — Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (в настоящее время в бета-версии){% endif %}.
- `ARM32` -Linux.

{% ifversion ghes %}

## Поддерживаемые действия для локальных средств выполнения тестов

Для использования действий из {% data variables.product.prodname_dotcom_the_website %} с {% data variables.product.prodname_ghe_server %} или для использования действий `actions/setup-LANGUAGE` с локальными средствами выполнения тестов, не имеющими доступа к Интернету, может потребоваться дополнительная настройка. Дополнительные сведения см. в разделе [Управление доступом к действиям из {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom) и обратитесь к своему администратору сайта {% data variables.product.prodname_enterprise %}.

{% endif %}

<a name="communication-requirements"></a>

## Обмен данными между локальными средствами выполнения тестов и {% data variables.product.product_name %}

Локальное средство выполнения тестов подключается к {% data variables.product.product_name %} для получения назначений заданий и загрузки новых версий приложения средства выполнения тестов. Локальное средство выполнения тестов использует _длинный опрос_ {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %}, который открывает подключение к {% data variables.product.product_name %} на 50 секунд, и если ответ не будет получен, подключение истекает, и создается новый длинный опрос. Приложение должно быть запущено на компьютере, чтобы принимать и запускать задания {% data variables.product.prodname_actions %}.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt или ghec %} Так как локальное средство выполнения открывает подключение к {% данных variables.location.product_location %}, вам не нужно разрешать {% данных variables.product.prodname_dotcom %} выполнять входящие подключения к локальному средству выполнения.
{% elsif ghes или ghae %} Требуется только исходящее подключение от средства выполнения к {% данных variables.location.product_location %}. Нет необходимости входящего подключения от {% данных variables.location.product_location %} к средству выполнения.
{%- endif %}

{% ifversion ghes %}

{% данных variables.product.product_name %} должны принимать входящие подключения от средств выполнения через {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} в {% данных variables.location.product_location %}имя узла и поддомен API, и средства выполнения должны разрешать исходящие подключения через {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} к {% данных variables.location.product_location %}имя узла и поддомен API.

{% elsif ghae %}

Вы должны убедиться, что локальное средство выполнения тестов имеет соответствующий сетевой доступ для взаимодействия с вашим URL-адресом {% data variables.product.product_name %} и его поддоменами. Например, если поддомен для {% data variables.product.product_name %} — `octoghae`, необходимо разрешить локальному средству выполнения тестов доступ к `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` и `codeload.octoghae.githubenterprise.com`.

Если вы используете список разрешенных IP-адресов, необходимо добавить IP-адрес локального средства выполнения тестов в этот список разрешений. Дополнительные сведения см. в разделе [Управление разрешенными IP-адресами для организации](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list).

{% endif %}

{% ifversion fpt or ghec %}

Необходимо убедиться, что компьютер имеет соответствующий сетевой доступ для взаимодействия с узлами {% data variables.product.prodname_dotcom %}, перечисленными ниже. Некоторые узлы необходимы для основных операций средства выполнения тестов, в то время как другие узлы требуются только для определенных функций.

{% note %}

**Примечание.** Некоторые из перечисленных ниже доменов настраиваются с помощью записей `CNAME`. Для некоторых брандмауэров может потребоваться рекурсивно добавить правила для всех записей `CNAME`. Обратите внимание, что записи `CNAME` в будущем могут измениться, и что только указанные ниже домены останутся неизменными.

{% endnote %}

**Требуется для основных операций:**

```
github.com
api.github.com
```

**Требуется для загрузки действий:**

```
codeload.github.com
```

**Требуется для обновления версий средства выполнения тестов:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Требуется для отправки и скачивания кэшей и артефактов рабочих процессов:**    

```
*.blob.core.windows.net
```

**Требуется для получения маркеров OIDC:**

```
*.actions.githubusercontent.com
```

**Требуется для скачивания или публикации пакетов или контейнеров в {% data variables.product.prodname_dotcom %} Пакеты:**

```
*.pkg.github.com
ghcr.io
```

Кроме того, рабочему процессу может потребоваться доступ к другим сетевым ресурсам.

Если вы используете список разрешенных IP-адресов для вашей организации {% data variables.product.prodname_dotcom %} или корпоративной учетной записи, необходимо добавить IP-адрес локального средства выполнения тестов в этот список разрешений. Дополнительные сведения см. в разделе [«правление разрешенными IP-адресами для организации](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) или [Обеспечение применения политик параметров безопасности в вашей организации](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}" в документации {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% else %}

{% ifversion ghes %} Для работы локальных средств выполнения тестов не требуется внешний доступ к Интернету. В результате вы можете использовать сетевую маршрутизацию для прямого взаимодействия между локальным модулом выполнения тестов и {% data variables.location.product_location %}. Например, можно назначить частный IP-адрес локальному средству выполнения тестов и настроить маршрутизацию для отправки трафика в {% data variables.location.product_location %}, не требуя передачи трафика через общедоступную сеть. {% endif %}

{% endif %}

{% ifversion ghae %} Если вы используете список разрешенных IP-адресов для вашей организации {% data variables.product.prodname_dotcom %} или корпоративной учетной записи, необходимо добавить IP-адрес локального средства выполнения тестов в этот список разрешений. Дополнительные сведения см. в разделе [Управление разрешенными IP-адресами для организации](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list).
{% endif %}

Вы также можете использовать локальные средства выполнения тестов с прокси-сервером. Дополнительные сведения см. в разделе [Использование прокси-сервера с локальными средствами выполнения тестов](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners).

Дополнительные сведения об устранении распространенных проблем с сетевым подключением см. в разделе [Мониторинг и устранение неполадок локальных средств выполнения тестов](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity).

{% ifversion ghes or ghae %}

## Обмен данными между локальными средствами выполнения тестов и {% data variables.product.prodname_dotcom_the_website %}

Локальным средствам выполнения тестов не требуется подключаться к {% data variables.product.prodname_dotcom_the_website %}, если вы не включили автоматический доступ к действиям {% data variables.product.prodname_dotcom_the_website %} для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Сведения об использовании действий в организации](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

Если вы включили автоматический доступ к действиям {% data variables.product.prodname_dotcom_the_website %}, то локальное средство выполнения тестов будет подключаться непосредственно к {% data variables.product.prodname_dotcom_the_website %} для загрузки действий. Необходимо убедиться, что компьютер имеет соответствующий сетевой доступ для взаимодействия с URL-адресами {% data variables.product.prodname_dotcom %}, перечисленными ниже. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**Примечание.** Некоторые из перечисленных выше доменов настраиваются с помощью записей `CNAME`. Для некоторых брандмауэров может потребоваться рекурсивно добавить правила для всех записей `CNAME`. Обратите внимание, что записи `CNAME` в будущем могут измениться, и что только указанные выше домены останутся неизменными.

{% endnote %}

{% endif %}

## Безопасность локального средства выполнения тестов

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

Это не проблема средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}, так как каждое средство выполнения тестов, размещенное в {% data variables.product.prodname_dotcom %}, всегда является чистой изолированной виртуальной машиной и уничтожается в конце выполнения задания.

{% endif %}

Недоверенные рабочие процессы, выполняющиеся в локальном средстве выполнения тестов, представляют значительные риски безопасности для вашего компьютера и сетевой среды, особенно если компьютер сохраняет свою среду между выполнениями заданий. Некоторые риски перечислены ниже.

* Вредоносные программы, работающие на компьютере.
* Утечка песочницы средства выполнения тестов компьютера.
* Предоставление доступа к сетевой среде компьютера.
* Сохранение на компьютере нежелательных или опасных данных.

Дополнительные сведения об усилении защиты для локальных средств выполнения тестов см. в разделе [Усиление защиты для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

{% ifversion ghec or ghes or ghae %}

## Дополнительные материалы

- [Начало работы с локальными средствами выполнения тестов для вашего предприятия](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
