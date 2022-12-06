---
title: Развертывание GitHub AE
intro: 'Можно выполнить развертывание {% data variables.product.product_name %} в доступных регионах Azure.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614370'
---
## Сведения о развертывании {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)."

После приобретения или запуска пробной версии {% data variables.product.product_name %} вы можете развернуть {% data variables.product.product_name %} в доступном регионе Azure. В этом руководстве используется ресурс Azure, содержащий развертывание {% data variables.product.product_name %} в качестве учетной записи {% data variables.product.product_name %}. Вы будете использовать портал Azure в [https://portal.azure.com](https://portal.azure.com) для развертывания учетной записи {% data variables.product.product_name %}.

## Предварительные требования

Вам потребуется разрешение для выполнения операции `/register/action` для поставщика ресурсов. Это разрешение включено в роли `Contributor` и `Owner`. Дополнительные сведения см. в разделе [Поставщики и типы ресурсов Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) в документации Майкрософт.

## Развертывание {% data variables.product.product_name %} с помощью {% data variables.actions.azure_portal %}

{% data variables.actions.azure_portal %} позволяет развернуть учетную запись {% data variables.product.product_name %} в вашей группе ресурсов Azure.

1. Щелкните одну из следующих двух ссылок, чтобы начать развертывание {% data variables.product.product_name %}. Выбор ссылки зависит от облака Azure, в котором вы планируете развернуть {% data variables.product.product_name %}. Дополнительные сведения об Azure для государственных организаций см. в разделе [Что такое Azure для государственных организаций?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) в документации Майкрософт.
   
   - [Развертывание {% data variables.product.product_name %} в Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Развертывание {% data variables.product.product_name %} в Azure для государственных организаций](https://aka.ms/create-github-ae-instance-gov)
1. Чтобы начать процесс добавления новой учетной записи {% data variables.product.product_name %}, нажмите **Создать учетную запись GitHub AE**.
1. Заполните поля "Сведения о проекте" и "Сведения об экземпляре".
    ![Результат поиска {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Имя учетной записи:** имя узла для вашего предприятия
    - **Имя пользователя администратора:** имя пользователя для первоначального владельца предприятия, которое будет создано в {% data variables.product.product_name %}
    - **Адрес администратора:** адрес электронной почты, на который будут отправляться сведения о входе
1. Чтобы просмотреть сводку предлагаемых изменений, нажмите кнопку **Проверить и создать**.
1. После завершения процесса проверки нажмите кнопку **Создать**.

На указанный выше адрес электронной почты придут инструкции о том, как получить доступ к вашему предприятию. После получения доступа вы сможете приступить к работе и выполнить начальные действия по настройке. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae).

{% note %}

**Примечание.** Обновления программного обеспечения для вашего развертывания {% data variables.product.product_name %} выполняются {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Сведения об обновлениях до новых выпусков](/admin/overview/about-upgrades-to-new-releases).

{% endnote %}

## Переход в ваше предприятие

Чтобы перейти к вашему развертыванию {% data variables.product.product_name %}, вы можете использовать {% data variables.actions.azure_portal %}. Полученный список содержит все развертывания {% data variables.product.product_name %} в вашем регионе Azure.

1. В {% data variables.actions.azure_portal %} в панели слева щелкните **Все ресурсы**.
1. В доступных фильтрах щелкните **Все типы**, затем снимите флажок **Выбрать все** типов и установите флажок **GitHub AE**: ![результаты поиска {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Дальнейшие действия

- После подготовки развертывания следующим шагом является инициализация {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae).
- Если вы испытываете {% data variables.product.product_name %}, вы можете перейти на полную лицензию в любое время в течение пробного периода, связавшись с контактным лицом {% data variables.contact.contact_enterprise_sales %}. Если вы не выполните обновление до последнего дня пробной версии, развертывание будет автоматически удалено. Если вам нужно больше времени для оценки {% data variables.product.product_name %}, обратитесь в {% data variables.contact.contact_enterprise_sales %}, чтобы запросить продление.

## Дополнительные материалы 

- [Включение функций {% data variables.product.prodname_advanced_security %} в {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)
- [Заметки о выпуске {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes) 
