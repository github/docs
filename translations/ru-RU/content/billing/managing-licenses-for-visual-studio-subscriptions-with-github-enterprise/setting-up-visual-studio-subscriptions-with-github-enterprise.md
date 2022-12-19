---
title: "Настройка подписок Visual\_Studio с GitHub Enterprise"
intro: 'Подписка команды на {% data variables.product.prodname_vs %} также может предоставить доступ к {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: ae030de637593aa723a5d2990485881ae30b333c
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120628'
---
## Сведения о настройке {% data variables.visual_studio.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Дополнительные сведения см. в разделе [Сведения о {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise).

В этом руководстве показано, как вашей команде получить лицензию на подписчиков {% data variables.product.prodname_vs %} и начать работу с {% data variables.product.prodname_enterprise %}.

Если вы предпочитаете видео, то можете посмотреть видеоролик [Настройка лицензий {% data variables.product.prodname_enterprise %} с подписками {% data variables.product.prodname_vs %}](https://www.youtube.com/watch?v=P_zBgp_BE_I) на YouTube-канале Microsoft Visual Studio.

## Роли для {% data variables.visual_studio.prodname_vss_ghe %}

Перед настройкой {% data variables.visual_studio.prodname_vss_ghe %} важно понимать роли для этого объединенного предложения.

| Роль | Служба | Описание | Дополнительные сведения |
| :- | :- | :- | :- |
| **Администратор подписок** | Подписка {% data variables.product.prodname_vs %} | Пользователь, который назначает лицензии для подписки {% data variables.product.prodname_vs %} | [Обзор обязанностей администратора](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) в Документации Майкрософт |
| **Подписчик** | Подписка {% data variables.product.prodname_vs %} | Пользователь, который использует лицензию для подписки {% data variables.product.prodname_vs %} | [Документация по Подпискам на Visual Studio](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) в Документации Майкрософт |
| **Владелец предприятия** | {% data variables.product.prodname_dotcom %} | Пользователь с личной учетной записью, которая является администратором предприятия в {% data variables.location.product_location %} | [Роли на предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) |
| **Владелец организации** | {% data variables.product.prodname_dotcom %} | Пользователь, у которого есть личная учетная запись, являющаяся владельцем организации на предприятии вашей команды на {% data variables.location.product_location %} | [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| **Участник предприятия** | {% data variables.product.prodname_dotcom %} | Пользователь, у которого есть личная учетная запись, являющаяся участником предприятия в {% data variables.location.product_location %} | [Роли на предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)  |

## Предварительные требования

- Подписка {% data variables.product.prodname_vs %} вашей команды должна включать {% data variables.product.prodname_enterprise %}. Дополнительные сведения см. в разделе [Подписки и преимущества {% data variables.product.prodname_vs %}](https://visualstudio.microsoft.com/subscriptions/) на веб-сайте {% data variables.product.prodname_vs %} и в разделе [Обзор обязанностей администратора](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) в Документации Майкрософт.
 
 - Ваша команда должна иметь предприятие на {% data variables.location.product_location %}. Если вы не знаете, есть ли у вашей команды предприятие, обратитесь к администратору {% data variables.product.prodname_dotcom %}. Если вы не знаете, кто в вашей команде отвечает за {% data variables.product.prodname_dotcom %}, свяжитесь с {% data variables.contact.contact_enterprise_sales %}. Дополнительные сведения см. в разделе [Сведения об учетных записях предприятия](/admin/overview/about-enterprise-accounts).

## Настройка {% data variables.visual_studio.prodname_vss_ghe %}

Чтобы настроить {% data variables.visual_studio.prodname_vss_ghe %}, участники вашей команды должны выполнить следующие задачи.

Один пользователь может быть в состоянии выполнить задачи, так как у него имеются все роли, однако может потребоваться координировать задачи с несколькими пользователями. Дополнительные сведения см. в разделе [Роли для {% data variables.visual_studio.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise).

1. Владелец предприятия должен создать хотя бы одну организацию в вашем предприятии на {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Добавление организаций на предприятии](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).

1. Администратор подписки должен назначить лицензию на {% data variables.product.prodname_vs %} подписчику в {% data variables.visual_studio.prodname_vss_admin_portal_with_url %}. Дополнительные сведения см. в разделах [Обзор портала администрирования подписок {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) и [Назначение лицензий {% data variables.product.prodname_vs %} на портале администрирования подписок {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) Документации Майкрософт.

1. При необходимости, если администратор подписки назначил лицензии подписчикам в {% data variables.product.prodname_vs %}, прежде чем добавить в подписку {% data variables.product.prodname_enterprise %}, администратор подписки может переместить подписчиков в объединенное предложение на портале администрирования {% data variables.product.prodname_vs %}. Дополнительные сведения см. в разделе [Управление подписками {% data variables.product.prodname_vs %} с {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) Документации Майкрософт.

1. Если администратор подписки не отключил уведомления по электронной почте, подписчик получит два сообщения с подтверждением. Дополнительные сведения см. в разделе [Подписки {% data variables.product.prodname_vs %} с {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) Документации Майкрософт.

1. Владелец организации должен пригласить подписчика в организацию на {% data variables.location.product_location %} из шага 1. Подписчик может принять приглашение с существующей учетной записью пользователя на {% data variables.product.prodname_dotcom_the_website %} или создать новую учетную запись. После присоединения к организации подписчик становится участником предприятия. Дополнительные сведения см. в разделе [Отправка пользователям приглашений присоединиться к организации](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).

   {% tip %}

   **Совет**.

   - Несмотря на то что это необязательно, рекомендуется, чтобы владелец организации отправлял приглашение на тот же адрес электронной почты, который использовался для имени участника-пользователя (UPN) подписчика. Если адрес электронной почты в {% data variables.location.product_location %} соответствует имени участника-пользователя подписчика, вы можете убедиться, что другое предприятие не запрашивает лицензию подписчика.
   - Если подписчик принимает приглашение в организацию с существующей личной учетной записью в {% data variables.location.product_location %}, рекомендуется добавить адрес электронной почты, который он использует для {% data variables.product.prodname_vs %}, в свою личную учетную запись в {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Добавление адреса электронной почты в учетную запись {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).
   - Если владелец организации должен пригласить большое количество подписчиков, можно ускорить процесс с помощью скрипта. Дополнительные сведения см. в [примере скрипта PowerShell](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) в репозитории `github/platform-samples`.

    {% endtip %}

После настройки {% data variables.visual_studio.prodname_vss_ghe %} для подписчиков в вашей команде владельцы предприятия могут просматривать сведения о лицензировании на {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Просмотр подписки и данных об использовании для учетной записи предприятия](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account).

## Дополнительные материалы

- [Начало работы с {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)
