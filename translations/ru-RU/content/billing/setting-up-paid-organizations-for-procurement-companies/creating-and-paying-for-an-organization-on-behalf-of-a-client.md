---
title: Создание и оплата организации от имени клиента
intro: 'Вы можете создать и оплатить организацию {% data variables.product.prodname_dotcom %} от имени клиента.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087782'
---
## Требования

Прежде чем приступить к работе, убедитесь, что выполнены следующие условия:
- Имя пользователя {% data variables.product.prodname_dotcom %} клиента, который станет владельцем создаваемой организации
- Имя, используемое клиентом для организации
- Адрес электронной почты, на который вам нужно отправить квитанции
- [Продукт](/articles/github-s-products), который клиент хочет приобрести
- Количество [платных рабочих мест](/articles/about-per-user-pricing/), которые клиент хочет приобрести для организации

## Шаг 1. Создание личной учетной записи {% data variables.product.prodname_dotcom %}

Для настройки организации вы будете использовать личную учетную запись. Вам также потребуется войти в эту учетную запись, чтобы продлить подписку клиента или внести в нее изменения в будущем.

Если у вас уже есть личная учетная запись в {% data variables.product.prodname_dotcom %}, перейдите к [шагу 2](#step-2-create-the-organization).

1. Перейдите на страницу [Присоединение к GitHub](https://github.com/join).
2. В разделе "Создание личной учетной записи" введите свое имя пользователя, адрес электронной почты и пароль, а затем нажмите **Создать учетную запись**.
![Форма ввода для создания личной учетной записи](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Выберите {% data variables.product.prodname_free_user %} для своей личной учетной записи.
4. Нажмите **Закончить регистрацию**.

## Шаг 2. Создание организации

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. В разделе "Выбор плана" нажмите **Выбрать {% data variables.product.prodname_free_team %}** . Вы выполните обновление организации на следующем шаге.
{% data reusables.organizations.organization-name %}
5. В поле "Контактный адрес электронной почты" введите адрес электронной почты контакта для клиента.
  ![Поле "Адрес электронной почты"](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. Щелкните **Далее**.

## Шаг 3. Обновление организации до ежегодной платной подписки


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (Вы сможете добавить дополнительные рабочие места в организацию на следующем шаге.)
6. В разделе "Сводка по обновлению" выберите **Платить ежегодно**, чтобы платить за организацию раз в год.
![Переключатель для ежегодного выставления счетов](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Шаг 4. Обновление количества платных рабочих мест в организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## Шаг 5. Приглашение клиента присоединиться к организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. Введите имя пользователя {% data variables.product.prodname_dotcom %} и нажмите клавишу **ВВОД**.
![Поле для ввода имени пользователя клиента](/assets/images/help/organizations/org-invite-modal.png)
6. Выберите роль *владельца* для клиента и нажмите **Отправить приглашение**.
![Переключатель роли владельца и кнопка "Отправить приглашение"](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Клиент получит электронное письмо с приглашением в организацию. Ему потребуется принять приглашение, прежде чем вы сможете перейти к следующему шагу.

## Шаг 6. Передача права владения организацией клиенту

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Убедитесь, что клиент указан в списке членов организации и ему назначена роль *владельца*.
5. Справа от имени пользователя в раскрывающемся меню {% octicon "gear" aria-label="The Settings gear" %} нажмите кнопку **Управление**.
  ![Ссылка для управления доступом](/assets/images/help/organizations/member-manage-access.png)
6. В левой части экрана нажмите **Удалить из организации**.
  ![Кнопка "Удалить из организации"](/assets/images/help/organizations/remove-from-org-button.png)
7. Подтвердите выбор и нажмите **Удалить участников**.
  ![Кнопка подтверждения удаления участников](/assets/images/help/organizations/confirm-remove-from-org.png)

## Дальнейшие действия

1. Обратитесь к клиенту и попросите [добавить вас в организацию в качестве менеджера по выставлению счетов](/articles/adding-a-billing-manager-to-your-organization). Вы должны быть менеджером по выставлению счетов для организации, чтобы иметь возможность продлевать подписку клиента или вносить в нее изменения в будущем.
2. Если вам нужно удалить кредитную карту своей организации, чтобы плата не взималась снова, обратитесь к {% data variables.contact.contact_support %}.
3. Когда придет время продлевать платную подписку клиента, см. статью [Продление платной организации клиента](/articles/renewing-your-client-s-paid-organization).

## Дополнительные материалы

- [Сведения об организациях для закупочных компаний](/articles/about-organizations-for-procurement-companies)
- [Повышение или понижение уровня платной организации клиента](/articles/upgrading-or-downgrading-your-client-s-paid-organization)
- [Возобновление платной организации вашего клиента](/articles/renewing-your-client-s-paid-organization)
