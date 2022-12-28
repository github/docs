---
title: Создание учетной записи предприятия
intro: 'Если сейчас вы используете {% data variables.product.prodname_ghe_cloud %} для одной организации, можно создать учетную запись предприятия, чтобы централизованно управлять несколькими организациями.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573404'
---
## Сведения о создании учетной записи предприятия

{% data variables.product.prodname_ghe_cloud %} включает возможность создания учетной записи предприятия, которая обеспечивает совместную работу между несколькими организациями и предоставляет администраторам единую точку видимости и управления. Дополнительные сведения см. в статье [Сведения об учетных записях предприятия](/admin/overview/about-enterprise-accounts).

{% data reusables.enterprise.create-an-enterprise-account %} При оплате по счету вы можете создать учетную запись предприятия самостоятельно на {% data variables.product.prodname_dotcom %}. В противном случае [свяжитесь с отделом продаж](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards), чтобы вам создали учетную запись предприятия.

Корпоративная учетная запись входит в {% data variables.product.prodname_ghe_cloud %} Создание корпоративной учетной записи не приводит к дополнительным расходам.

При создании корпоративной учетной записи, связанной с существующей организацией в {% data variables.product.product_name %}, ресурсы организации остаются доступными для участников по тем же URL-адресам. После добавления организации в корпоративную учетную запись к организации будут применяться следующие изменения.

- Существующая организация автоматически будет принадлежать учетной записи предприятия.
- {% data variables.product.company_short %} выставляет счета за использование корпоративной учетной записи во всех организациях, принадлежащих предприятию. Текущие сведения о выставлении счетов организации, включая адрес электронной почты для выставления счетов организации, станут сведениями о выставлении счетов новой учетной записи предприятия. Дополнительные сведения см. в разделе [О выставлении счетов для вашего предприятия](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
- Все текущие владельцы вашей организации становятся владельцами корпоративной учетной записи, а все текущие менеджеры по выставлению счетов в организации становятся менеджерами по выставлению счетов новой корпоративной учетной записи. Дополнительные сведения см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

Дополнительные сведения об изменениях, которые применяются к организации после добавления организации в предприятие, см. в разделе [Добавление организаций в предприятие](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account).

## Создание учетной записи предприятия на {% data variables.product.prodname_dotcom %}

Чтобы создать учетную запись предприятия, ваша организация должна использовать {% data variables.product.prodname_ghe_cloud %}.

Если вы производите оплату по счету, можно создать учетную запись предприятия напрямую через {% data variables.product.prodname_dotcom %}. В противном случае [свяжитесь с отделом продаж](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards), чтобы вам создали учетную запись предприятия.


{% data reusables.organizations.billing-settings %}
1. Нажмите кнопку **Upgrade to enterprise account** (Обновить до учетной записи предприятия).

   ![Снимок экрана: кнопка Upgrade to an enterprise account (Обновить до учетной записи предприятия)](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. В разделе Enterprise name (Название предприятия) введите значение для учетной записи предприятия.

   ![Снимок экрана: поле Enterprise name (Название предприятия)](/assets/images/help/business-accounts/enterprise-name-field.png)
1. В разделе Enterprise URL slug (Динамический идентификатор URL-адреса предприятия) введите динамический идентификатор для учетной записи предприятия. Этот динамический идентификатор будет использоваться в URL-адресе предприятия. Например, если выбрать `octo-enterprise`, URL-адрес предприятия будет иметь значение `https://github.com/enterprises/octo-enterprise`.

   ![Снимок экрана: поле Enterprise URL slug (Динамический идентификатор URL-адреса предприятия)](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Нажмите кнопку **Confirm and upgrade** (Подтвердить и обновить).

   ![Снимок экрана: кнопка Confirm and upgrade (Подтвердить и обновить)](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Прочтите предупреждения и нажмите кнопку **Create enterprise account** (Создать учетную запись предприятия).

   ![Снимок экрана: кнопка Create enterprise account (Создать учетную запись предприятия)](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Дальнейшие действия

После создания учетной записи предприятия мы рекомендуем узнать больше о том, как работают такие учетные записи, а также настроить параметры и политики. Дополнительные сведения см. в схеме обучения [Начало работы с учетной записью предприятия](/admin/guides#get-started-with-your-enterprise-account).
