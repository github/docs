---
title: Загрузка лицензии для GitHub Enterprise
intro: 'Вы можете скачать копию файла лицензии для {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: 2ee664fc25afef6d5afeb9a1e4bb6c5953739c5d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098916'
---
## Сведения о файлах лицензий для {% data variables.product.prodname_enterprise %}

После приобретения лицензии для {% data variables.product.prodname_enterprise %} или ее обновления с {% data variables.contact.contact_enterprise_sales %} необходимо загрузить новый файл лицензии. Дополнительные сведения о лицензиях для {% data variables.product.prodname_enterprise %} см. в разделе "[Сведения о лицензиях для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Загрузка лицензии с {% data variables.product.prodname_dotcom_the_website %}

Чтобы загрузить лицензию с {% data variables.product.prodname_dotcom_the_website %}, у вас должна быть корпоративная учетная запись {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе "[Сведения о корпоративных учетных записях](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" {% ifversion ghes %}" в документации по {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. На боковой панели слева щелкните **Корпоративное лицензирование**.
  ![Вкладка "Корпоративное лицензирование" на боковой панели параметров корпоративной учетной записи](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Чтобы загрузить файл лицензии, в разделе "Экземпляры Enterprise Server" щелкните {% octicon "download" aria-label="The download icon" %}.
  ![Загрузка лицензии для GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

После скачивания файла лицензии можно отправить файл в {% данных variables.location.product_location_enterprise %} для проверки приложения. Дополнительные сведения см. в разделе {% ifversion ghec %}"[Отправка новой лицензии в {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" в документации по {% data variables.product.prodname_ghe_server %}. {% elsif ghes %}"[Отправка новой лицензии в {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

## Загрузка лицензии при отсутствии корпоративной учетной записи на {% data variables.product.prodname_dotcom_the_website %}

Если у вас нет корпоративной учетной записи на {% data variables.product.prodname_dotcom_the_website %} или вы не уверены в ее наличии, лицензию для {% data variables.product.prodname_ghe_server %} можно загрузить с [веб-сайта {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Если у вас возникли вопросы о загрузке лицензии, вам поможет {% data variables.contact.contact_enterprise_sales %}.
