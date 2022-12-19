---
title: Настройка пробной версии GitHub Enterprise Server
intro: 'Можно бесплатно ознакомиться с возможностями {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163565'
---
## Сведения о пробных версиях {% data variables.product.prodname_ghe_server %}

Вы можете запросить 45-дневную пробную версию {% data variables.product.prodname_ghe_server %} и оценить ее работу. Пробная версия будет установлена как виртуальный модуль с вариантами локального или облачного развертывания. Дополнительные сведения о {% data variables.product.prodname_ghe_server %}, а также список поддерживаемых платформ виртуализации см. в разделе [Сведения о {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server).

Оповещения {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}системы безопасности{% endif %} и {% data variables.product.prodname_github_connect %} в настоящее время недоступны в пробных версиях {% data variables.product.prodname_ghe_server %}. Для демонстрации этих функций обратитесь в {% data variables.contact.contact_enterprise_sales %}. Дополнительные сведения об этих функциях см. в разделах [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) и [Подключение корпоративной учетной записи к {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud).

Пробные версии также доступны для {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе [Настройка пробной версии {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud).

{% data reusables.products.which-product-to-use %}

## Настройка пробной версии {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} устанавливается в качестве виртуального модуля. Выберите наиболее подходящего специалиста в организации для настройки виртуальной машины и попросите его отправить [запрос на пробную версию](https://enterprise.github.com/trial). Пробную версию можно начать использовать сразу после отправки запроса.

Чтобы настроить учетную запись для веб-портала {% data variables.product.prodname_enterprise %}, щелкните ссылку в сообщении электронной почты, полученном после отправки запроса на пробную версию, и следуйте инструкциям. Затем скачайте файл лицензии. Дополнительные сведения см. в разделе [Управление лицензией для {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise).

Чтобы установить {% data variables.product.prodname_ghe_server %}, скачайте необходимые компоненты и отправьте файл лицензии. Дополнительные сведения см. в инструкциях для выбранной платформы визуализации в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance).

## Дальнейшие действия

Чтобы максимально эффективно использовать пробную версию, выполните указанные ниже действия.

1. [Создайте организации](/enterprise-server@latest/admin/user-management/creating-organizations).
2. Основные сведения об использовании {% data variables.product.prodname_dotcom %} см. в следующих ресурсах:
   - Веб-трансляция [Введение в {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/)
   - Раздел [Общие сведения о потоке {% data variables.product.prodname_dotcom %}](https://guides.github.com/introduction/flow/) в руководствах {% data variables.product.prodname_dotcom %}
   - Раздел [Hello World](https://guides.github.com/activities/hello-world/) в руководствах {% data variables.product.prodname_dotcom %}
   - [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)
3. Сведения о настройке экземпляра в соответствии с потребностями организации см. в разделе [Настройка организации](/enterprise-server@latest/admin/configuration/configuring-your-enterprise).
4. Сведения об интеграции {% data variables.product.prodname_ghe_server %} с поставщиком удостоверений см. в разделах [Использование SAML](/enterprise-server@latest/admin/user-management/using-saml) и [Использование LDAP](/enterprise-server@latest/admin/authentication/using-ldap).
5. Пригласите неограниченное количество пользователей в пробную версию.
   - Добавьте пользователей в экземпляр {% data variables.product.prodname_ghe_server %} с помощью встроенной проверки подлинности или настроенного поставщика удостоверений. Дополнительные сведения см. в статье [Использование встроенной проверки подлинности](/enterprise-server@latest/admin/user-management/using-built-in-authentication).
   - Чтобы пригласить пользователей в качестве администраторов учетных записей, перейдите на [веб-портал {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login).

    {% note %}

    **Примечание**. Пользователи, приглашенные в качестве администраторов учетных записей, получат сообщение электронной почты со ссылкой для принятия приглашения.

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## Завершение пробного периода

Вы можете перейти на полные лицензии на [веб-портале {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login) в любое время в течение пробного периода.

Если вы не выполнили обновление до последнего дня пробного периода, то получите сообщение электронной почты с уведомлением о его завершении. Если вам нужно больше времени для оценки {% data variables.product.prodname_enterprise %}, обратитесь в {% data variables.contact.contact_enterprise_sales %}, чтобы запросить продление.

## Дополнительные материалы

- [Настройка пробной версии {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)
