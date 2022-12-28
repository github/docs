---
title: Защита репозитория
intro: 'Несколько возможностей {% data variables.product.prodname_dotcom %} позволяют поддерживать безопасность репозитория.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161186'
---
## Введение
В этом руководстве показано, как настроить функции безопасности для репозитория. Чтобы настроить параметры безопасности для репозитория, необходимо быть администратором репозитория или владельцем организации.

У каждого репозитория свои потребности в безопасности, поэтому вам может не потребоваться включить все функции для репозитория. Дополнительные сведения можно найти в статье [Функции безопасности {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features).

{% data reusables.advanced-security.security-feature-availability %}

## Управление доступом к репозиторию

Первым шагом для защиты репозитория является настройка пользователей, которые могут просматривать и изменять код. Дополнительные сведения см. в статье [Управление параметрами репозитория](/github/administering-a-repository/managing-repository-settings).

На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %}Параметры**, а затем прокрутите вниз до "Зона опасности".

- Чтобы настроить пользователей, которые могут просматривать репозиторий, выберите **Изменить видимость**. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/github/administering-a-repository/setting-repository-visibility). {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- Чтобы настроить пользователей, у которых есть доступ к репозиторию, и изменить разрешения, выберите **Управление доступом**. Дополнительные сведения приведены в статье [Управление командами и людьми, имеющими доступ к репозиторию](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository).{% endif %}

## Настройка политики безопасности

1. На главной странице репозитория щелкните **{% octicon "shield" aria-label="The shield symbol" %} Безопасность**.
2. Выберите **Политика безопасности**.
3. Нажмите кнопку **Запуск установки**.
4. Добавьте сведения о поддерживаемых версиях проекта и о том, как сообщить об уязвимости.

Дополнительные сведения см. в статье "[Добавление политики безопасности в репозиторий](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

## Управление графом зависимостей

{% ifversion fpt or ghec %} Граф зависимостей автоматически создается для всех общедоступных репозиториев, и его можно включить для частных репозиториев. Он интерпретирует файлы манифеста и блокировки в репозитории для идентификации зависимостей.

1. На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %} Параметры**.
2. Выберите **Безопасность и анализ**.
3. Рядом с графом зависимостей щелкните **Включить** или **Отключить**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Дополнительные сведения см. в разделе [Изучение зависимостей репозитория](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).

## Управление {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} создаются, когда {% data variables.product.prodname_dotcom %} выявляет зависимость в графе зависимостей с уязвимостью. {% ifversion fpt or ghec %}Вы можете включить {% data variables.product.prodname_dependabot_alerts %} для любого репозитория.{% endif %}

{% ifversion fpt or ghec %}
1. Щелкните фотографию профиля и выберите **Параметры**.
2. Выберите **Безопасность и анализ**.
3. Нажмите кнопку **Включить все** рядом с {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %} и [Управление параметрами безопасности и анализа для личной учетной записи](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}.

## Настройка проверки зависимостей

Проверка зависимостей позволяет визуализировать изменения зависимостей в запросах на вытягивание, прежде чем они будут объединены в репозитории. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

Проверка зависимостей — это функция {% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt or ghec %} Проверка зависимостей по умолчанию включена для всех общедоступных репозиториев. {% ifversion fpt %}Организации, в которых используется {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_advanced_security %}, могут дополнительно включить эти функции для частных и внутренних репозиториев. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Чтобы включить проверку зависимостей для {% ifversion ghec %}частного или внутреннего {% endif %}репозитория, убедитесь, что включен граф зависимостей, и включите {% data variables.product.prodname_GH_advanced_security %}. 

1. На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %}Параметры**.
2. Выберите **Безопасность и анализ**.
3. {% ifversion ghec %}Если граф зависимостей еще не включен, нажмите кнопку **Включить**.{% elsif ghes or ghae %}Убедитесь, что граф зависимостей настроен для вашего предприятия.{% endif %}
4. Если функция {% data variables.product.prodname_GH_advanced_security %} не включена, нажмите кнопку **Включить**.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## Управление функцией "{% data variables.product.prodname_dependabot_security_updates %}"

Для любого репозитория, в котором используются {% data variables.product.prodname_dependabot_alerts %}, можно включить {% data variables.product.prodname_dependabot_security_updates %} для создания запросов на включение внесенных изменений с обновлениями безопасности при обнаружении уязвимостей.

1. На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %}Параметры**.
2. Выберите **Безопасность и анализ**.
3. Рядом с пунктом "{% data variables.product.prodname_dependabot_security_updates %}" щелкните **Включить**.

Дополнительные сведения см. в статьях [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates) и [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates).

## Управление функцией "{% data variables.product.prodname_dependabot_version_updates %}"

Можно включить {% data variables.product.prodname_dependabot %} для автоматического создания запросов на включение внесенных изменений, чтобы поддерживать зависимости в актуальном состоянии. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates).

{% ifversion dependabot-settings-update-37 %}
1. На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %} Параметры**.
2. Выберите **Безопасность и анализ**.
3. Щелкните **Включить** рядом с {% data variables.product.prodname_dependabot_version_updates %}, чтобы создать простой файл конфигурации *dependabot.yml*.
4. Укажите зависимости, которые нужно обновить, и зафиксируйте файл в репозиторий. Дополнительные сведения см. в статье [Настройка обновления версий Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).

{% else %} Чтобы включить {% data variables.product.prodname_dependabot_version_updates %}, необходимо создать файл конфигурации *dependabot.yml*. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).
{% endif %}

{% endif %}

## Настройка функции "{% data variables.product.prodname_code_scanning %}"

Вы можете настроить {% data variables.product.prodname_code_scanning %} для автоматического выявления уязвимостей и ошибок в коде, хранящейся в репозитории, с помощью {% data variables.code-scanning.codeql_workflow %} или стороннего средства. Дополнительные сведения см. в статье [Настройка функции {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data variables.product.prodname_code_scanning_capc %} доступно {% ifversion fpt or ghec %}для всех общедоступных репозиториев, а также для частных репозиториев, принадлежащих организациям, которые являются частью предприятия с лицензией на {% else %}для репозиториев, принадлежащих организации, если в вашем предприятии используется {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Настройка функции "{% data variables.product.prodname_secret_scanning %}"

{% data variables.product.prodname_secret_scanning_caps %} {% ifversion fpt or ghec %}включено для всех общедоступных репозиториев и доступно для частных репозиториев, принадлежащих организациям, которые являются частью предприятия с лицензией на {% else %}доступно для репозиториев, принадлежащих организации, если в вашем предприятии используется {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}Дополнительные сведения можно найти в [документации {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}Возможно, {% data variables.product.prodname_secret_scanning_caps %} уже включено для вашего репозитория в зависимости от параметров организации.

1. На главной странице репозитория щелкните **{% octicon "gear" aria-label="The Settings gear" %}Параметры**.
2. Выберите **Безопасность и анализ**.
3. Если функция {% data variables.product.prodname_GH_advanced_security %} не включена, нажмите кнопку **Включить**.
4. Рядом с {% data variables.product.prodname_secret_scanning_caps %} нажмите **Включить**. {% endif %}

## Дальнейшие действия
Вы можете просматривать оповещения функций безопасности и управлять ими для обработки зависимостей и уязвимостей в коде. Дополнительные сведения см. в разделе {% ifversion fpt or ghes or ghec %} Просмотр [и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),{% endif %} {% ifversion fpt or ghec or ghes %}[Управление запросами на вытягивание для обновлений зависимостей](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}[Управление {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) и [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

{% ifversion fpt or ghec %}При наличии уязвимости системы безопасности можно создать рекомендации по безопасности, которые позволят в частном порядке обсудить и устранить уязвимость. Дополнительные сведения см. в [разделах Сведения о рекомендациях по безопасности репозитория](/code-security/security-advisories/about-github-security-advisories) и [Создание рекомендаций по безопасности](/code-security/security-advisories/creating-a-security-advisory).
{% endif %}
