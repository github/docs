---
title: Управление локальными средствами выполнения для обновлений Dependabot в вашем предприятии
intro: 'Вы можете создать выделенные средства выполнения для {% data variables.location.product_location %}, которые {% data variables.product.prodname_dependabot %} использует для создания запросов на вытягивание для защиты и поддержки зависимостей, используемых в репозиториях на предприятии.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181336'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Сведения о локальных средствах выполнения для {% data variables.product.prodname_dependabot_updates %}

Вы можете помочь пользователям {% data variables.location.product_location %} создать и поддерживать безопасный код, настроив обновления безопасности и версий {% data variables.product.prodname_dependabot %}. С помощью {% data variables.product.prodname_dependabot_updates %}разработчики могут настроить репозитории таким образом, чтобы обновление и поддержание безопасности их зависимостей выполнялось автоматически. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

Чтобы использовать {% data variables.product.prodname_dependabot_updates %} в {% data variables.location.product_location %}, необходимо настроить локальные средства выполнения тестов для создания запросов на вытягивание, которые будут обновлять зависимости.

## Предварительные требования

{% ifversion dependabot-updates-github-connect %} Настройка локальных средств выполнения тестов — это лишь один шаг в середине процесса включения {% data variables.product.prodname_dependabot_updates %}. Перед этими действиями необходимо выполнить несколько действий, включая настройку {% data variables.location.product_location %} для использования {% data variables.product.prodname_actions %} с локальными средствами выполнения тестов. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% else %} Прежде чем настраивать локальные средства выполнения для {% data variables.product.prodname_dependabot_updates %}, необходимо выполнить следующие действия.

- Настройте {% data variables.location.product_location %} для использования {% data variables.product.prodname_actions %} с локальными средствами выполнения тестов. Дополнительные сведения см. в статье "[Начало работы с {% data variables.product.prodname_actions %} для GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- Включите {% data variables.product.prodname_dependabot_alerts %} для вашего предприятия. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Настройка локальных средств выполнения для {% data variables.product.prodname_dependabot_updates %}

После настройки {% data variables.location.product_location %} для использования {% data variables.product.prodname_actions %} необходимо добавить локальные средства выполнения для {% data variables.product.prodname_dependabot_updates %}.

### Требования к системе для средств выполнения {% data variables.product.prodname_dependabot %}

Все виртуальные машины, используемые для средств выполнения {% data variables.product.prodname_dependabot %}, должны соответствовать требованиям для локальных средств выполнения. Кроме того, они должны соответствовать следующим требованиям.

- Операционная система Linux
- Архитектура x64 {%- ifversion ghes < 3.5 %}
- Установленный Git {%- endif %}
- Docker, установленный с доступом для пользователей средства выполнения:
  - Рекомендуется установить Docker в режиме без корня и настроить средства выполнения для доступа к Docker без привилегий `root`.
  - Вы также можете установить Docker и предоставить пользователям средств выполнения повышенные привилегии для запуска Docker.

Требования к ЦП и памяти зависят от количества параллельных средств выполнения, развернутых на конкретной виртуальной машине. Для справки — нам удалось успешно настроить 20 средств выполнения на одной виртуальной машине с двумя ЦП и 8 ГБ, но в конечном счете требования к ЦП и памяти будут сильно зависеть от обновляемых репозиториев. Для одних экосистем потребуется больше ресурсов, чем для других.

Если вы указываете более 14 параллельных средств выполнения на виртуальной машине, необходимо также обновить конфигурацию Docker `/etc/docker/daemon.json`, чтобы увеличить число сетей по умолчанию, которое может создавать Docker.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Требования к сети для средств выполнения {% data variables.product.prodname_dependabot %}

Средствам выполнения {% data variables.product.prodname_dependabot %} требуется доступ к общедоступному Интернету, {% data variables.product.prodname_dotcom_the_website %}, а также ко всем внутренним реестрам, которые будут использоваться в обновлениях {% data variables.product.prodname_dependabot %}. Чтобы свести к минимуму риск для внутренней сети, следует ограничить доступ с виртуальной машины во внутреннюю сеть. Это снижает вероятность повреждения внутренних систем, если средство выполнения загрузит взломанную зависимость.

### Добавление локальных средств выполнения для обновлений {% data variables.product.prodname_dependabot %}

1. Подготовьте локальные средства выполнения на уровне учетной записи репозитория, организации или предприятия. Дополнительные сведения см. в разделах [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

2. Настройте локальные средства выполнения в соответствии с указанными выше требованиями. Например, на виртуальной машине, работающей на Ubuntu 20.04, вам нужно выполнить следующее:{% ifversion ghes < 3.5 %}

   - Убедиться, что Git установлен: `command -v git`{% endif %}
   - Установить Docker и убедиться, что пользователи средства выполнения имеют доступ к Docker. Дополнительные сведения см. в документации Docker.
     - [Установка подсистемы Docker в Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Рекомендуемый подход. [Запуск управляющей программы Docker в качестве некорневого пользователя (режим без корня)](https://docs.docker.com/engine/security/rootless/)
     - Альтернативный подход. [Управление Docker в качестве некорневого пользователя](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Убедитесь, что средства выполнения имеют доступ к общедоступному Интернету и могут получить доступ только к внутренним сетям, которые требуются {% data variables.product.prodname_dependabot %}.

3. Назначьте метку `dependabot` каждому средству выполнения, которое должен использовать {% data variables.product.prodname_dependabot %}. Дополнительные сведения см. в разделе [Использование меток с локальными средствами выполнения](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner).

4. При необходимости включите рабочие процессы, активируемые {% data variables.product.prodname_dependabot %}, чтобы использовать не только разрешения для чтения и иметь доступ к любым секретам, которые обычно доступны. Дополнительные сведения см. в разделе [Устранение неполадок {% data variables.product.prodname_actions %} для вашего предприятия](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions).
