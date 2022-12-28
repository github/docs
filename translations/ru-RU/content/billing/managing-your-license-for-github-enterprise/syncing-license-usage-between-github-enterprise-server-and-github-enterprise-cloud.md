---
title: Синхронизация потребления лицензий между GitHub Enterprise Server и GitHub Enterprise Cloud
intro: 'Вы можете синхронизировать использование лицензий {% data variables.product.prodname_ghe_server %} с {% data variables.product.prodname_ghe_cloud %}, чтобы просматривать все сведения об использовании лицензий на предприятии в одном расположении и проверять, используют ли пользователи с учетными записями в обеих средах только одну лицензию пользователя.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572595'
---
## Сведения о синхронизации потребления лицензий

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

Чтобы просмотреть актуальные сведения о лицензии на сайте {% data variables.product.prodname_dotcom_the_website %}, вы можете автоматически синхронизировать потребление лицензий между средами с помощью {% data variables.product.prodname_github_connect %}. Дополнительные сведения о {% data variables.product.prodname_github_connect %} см. в статье [Сведения о {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %} документации {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}. {% endif %}

Если вы не хотите включать {% data variables.product.prodname_github_connect %}, вы можете вручную синхронизировать потребление лицензий, отправив файл с {% data variables.product.prodname_ghe_server %} в {% data variables.product.prodname_dotcom_the_website %}.

После синхронизации использования лицензий только идентификатор пользователя и адреса электронной почты для каждой учетной записи пользователя в {% data variables.product.prodname_ghe_server %} передаются на {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Автоматическая синхронизация потребления лицензий

Вы можете использовать {% data variables.product.prodname_github_connect %} для автоматической синхронизации количества пользовательских лицензий и потребления между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %} на еженедельной основе. Дополнительные сведения см. в статье [Включение автоматической синхронизации пользовательских лицензий для предприятия]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %} документации {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}. {% endif %}

{% ifversion ghec or ghes > 3.4 %} После включения {% data variables.product.prodname_github_connect %} данные лицензии будут автоматически синхронизированы на еженедельной основе. Вы также можете вручную синхронизировать данные лицензии в любое время, активировав задание синхронизации лицензий.

### Активация задания синхронизации лицензий

1. Войдите в экземпляр {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. В разделе License sync (Синхронизация лицензий) нажмите кнопку {% octicon "sync" aria-label="The Sync icon" %} **Синхронизировать сейчас**.
  ![Снимок экрана: кнопка Sync now (Синхронизировать сейчас) в разделе синхронизации лицензий](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Загрузка лицензий GitHub Enterprise Server вручную

Вы можете скачать файл JSON с {% data variables.product.prodname_ghe_server %} и отправить файл в {% data variables.product.prodname_ghe_cloud %} для ручной синхронизации потребления пользовательских лицензий между двумя развертываниями.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. В разделе Quick links (Быстрые ссылки) для скачивания файла, содержащего текущее потребление лицензии на {% data variables.product.prodname_ghe_server %}, щелкните **Export license usage** (Экспортировать потребление лицензии).
  ![Ссылка для экспортирования потребления лицензии](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. В разделе Enterprise Server Instances (Экземпляры Enterprise Server) нажмите кнопку **Add server usage** (Добавить потребление сервера).
  ![Ссылка для отправки потребления GitHub Enterprise Servers](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Отправьте файл JSON, скачанный с {% data variables.product.prodname_ghe_server %}.
  ![Перетаскивание или выбор файла для отправки](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
