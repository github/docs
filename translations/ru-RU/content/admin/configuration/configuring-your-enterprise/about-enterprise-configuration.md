---
title: Сведения о настройке предприятия
intro: 'Вы можете использовать панель мониторинга администратора сайта{% ifversion ghes %}, {% data variables.enterprise.management_console %}, а также административную оболочку (SSH) {% elsif ghae %} и параметры предприятия либо обратиться в службу поддержки{% endif %} для управления своим предприятием.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112891'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Дополнительные сведения см. в статье [Панель мониторинга администрирования сайта](/admin/configuration/site-admin-dashboard).

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Дополнительные сведения см. в статье [Доступ к консоли управления](/admin/configuration/accessing-the-management-console).

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Дополнительные сведения см. в статье [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
{% endif %}

{% ifversion ghae %} Чтобы приступить к работе с {% data variables.product.product_name %}, сначала необходимо развернуть {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Развертывание {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae).

При первом доступе к предприятию необходимо завершить начальную конфигурацию, чтобы получить {% data variables.product.product_name %}, готовые к использованию. Начальная конфигурация включает подключение предприятия к поставщику удостоверений (IdP), проверку подлинности с помощью единого входа SAML, настройку политик для репозиториев и организаций в предприятии и настройку SMTP для исходящей электронной почты. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

Позже вы можете воспользоваться панелью мониторинга администрирования сайта и параметрами предприятия для дальнейшей настройки предприятия, управления пользователями, организациями и репозиториями, а также задавать политики для снижения рисков и повышения качества. 

Все предприятия настроены с изоляцией поддомена и поддержкой версии TLS 1.2 и более поздних версий только для зашифрованного трафика.
{% endif %}

## Дополнительные материалы

- [Управление пользователями, организациями и репозиториями](/admin/user-management)
- [Настройка политик для предприятия](/admin/policies)
