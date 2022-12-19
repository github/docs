---
title: Сведения о лицензиях для GitHub Enterprise
intro: '{% ifversion ghec %} Если вы развертываете {% data variables.product.prodname_ghe_server %} в дополнение к {% data variables.product.prodname_ghe_cloud %}, то{% else %}Вы{% endif %} можете синхронизировать использование лицензии между{% ifversion ghes %} развертываниями {% data variables.product.prodname_enterprise %}{% endif %}и использовать файл лицензии для разблокировки каждого экземпляра {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: 1ccd9dce77f74e0e53fbf185cd0c827fb4bc4a7d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098452'
---
## Сведения о лицензировании {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Чтобы один и тот же пользователь не использовал более одной лицензии для нескольких корпоративных развертываний, вы можете синхронизировать использование лицензий между развертываниями {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}.

Чтобы использовать экземпляр {% data variables.product.prodname_ghe_server %}, необходимо отправить файл лицензии, который {% data variables.product.company_short %} предоставляет при покупке, продлении или добавлении пользовательских лицензий в {% data variables.product.prodname_enterprise %}.

## Сведения о синхронизации данных об использовании лицензий для {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Дополнительные сведения см. в разделе [Синхронизация использования лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

## Сведения о файлах лицензий для {% data variables.product.prodname_enterprise %}

При покупке или продлении {% данных variables.product.prodname_enterprise %}{ % данных variables.product.company_short %} предоставляется файл лицензии {% ifversion ghec %}для развертываний {% данных variables.product.prodname_ghe_server %}{% elsif ghes %}для {% данных variables.location.product_location_enterprise %}{%endif %}. Файл лицензии имеет дату окончания срока действия и управляет количеством пользователей, которые могут использовать {% данных variables.location.product_location_enterprise %}. После загрузки и установки {% data variables.product.prodname_ghe_server %} необходимо отправить файл лицензии, чтобы разблокировать приложение для использования.

Дополнительные сведения о загрузке файла лицензии см. в разделе "[Загрузка лицензии для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)". 

Дополнительные сведения об отправке файла лицензии см. в разделе {% ifversion ghec %}"[Отправка новой лицензии в {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" в документации по {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}"[Отправка новой лицензии в {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

Если срок действия лицензии истек, вы не сможете получить доступ к {% data variables.product.prodname_ghe_server %} через веб-браузер или Git. При необходимости вы сможете использовать служебные программы командной строки для резервного копирования всех данных. Дополнительные сведения см. в разделе {% ifversion ghec %}"[Настройка резервных копий на устройстве]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" в документации по {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Настройка резервных копий на устройстве](/admin/guides/installation/configuring-backups-on-your-appliance)". {% endif %}

Если у вас возникли вопросы о продлении лицензии, вам поможет {% data variables.contact.contact_enterprise_sales %}.

## Дополнительные материалы

- "[Сведения о выставлении счетов для предприятия](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Веб-сайт [выпусков {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- [Настройка экземпляра {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)
