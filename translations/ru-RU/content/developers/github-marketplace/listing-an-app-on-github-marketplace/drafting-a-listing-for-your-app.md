---
title: Создание черновика профиля для приложения
intro: 'При создании списка {% data variables.product.prodname_marketplace %} GitHub сохраняет его в режиме черновика, пока вы не отправите приложение на утверждение. Ваш список показывает пользователям, как использовать ваше приложение.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089693'
---
## Создание черновика профиля в {% data variables.product.prodname_marketplace %}

Создавать черновики профилей можно только для общедоступных приложений. Перед созданием черновика профиля можно ознакомиться со следующими рекомендациями по написанию и настройке параметров в профиле {% data variables.product.prodname_marketplace %}:

* [Написание описаний для профилей в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [Задание ценового плана для профиля в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [Настройка веб-перехватчика {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

Чтобы создать профиль в {% data variables.product.prodname_marketplace %}, выполните указанные ниже действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. На левой боковой панели выберите пункт **Приложения OAuth** или **Приложения GitHub** в зависимости от того, какое приложение добавляется в {% data variables.product.prodname_marketplace %}.

  {% note %}

  **Примечание**. Профиль можно также добавить, перейдя к https://github.com/marketplace/new, просмотрев доступные приложения и нажав кнопку **Создать черновик профиля**.

  {% endnote %}

  ![Выбор типа приложения](/assets/images/settings/apps_choose_app.png)

4. Выберите приложение, которое нужно добавить в {% data variables.product.prodname_marketplace %}.
![Выбор приложения для профиля в {% data variables.product.prodname_marketplace %}](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. После создания черновика профиля вы увидите обзор разделов, которые необходимо заполнить, чтобы завершить создание профиля в {% data variables.product.prodname_marketplace %}.
![Профиль в GitHub Marketplace](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**Примечание**. В разделе "Контактные данные" профиля рекомендуется использовать отдельные адреса электронной почты, а не групповые, например support@domain.com. GitHub будет использовать эти адреса электронной почты, чтобы сообщать вам об обновлениях в {% data variables.product.prodname_marketplace %}, которые могут повлиять на ваш профиль, выпуске новых функций, маркетинговых возможностях, выплатах, конференциях и спонсорских предложениях.

{% endnote %}

## Редактирование профиля

После создания черновика профиля в {% data variables.product.prodname_marketplace %} вы можете в любое время вернуться к изменению сведений профиля. Если приложение уже утверждено и опубликовано в {% data variables.product.prodname_marketplace %}, вы можете изменять сведения и изображения в профиле, но не опубликованные ценовые планы. См. раздел [Задание ценового плана для профиля в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/).

## Отправка приложения

Завершив создание профиля в {% data variables.product.prodname_marketplace %}, можно отправить его на проверку со страницы **Обзор**. Вам потребуется прочитать и принять условия [Соглашения {% data variables.product.prodname_marketplace %} для разработчиков](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/), а затем щелкнуть **Отправить на проверку**. После отправки приложения на проверку специалист по подключению свяжется с вами и даст дополнительные указания.

## Удаление профиля {% data variables.product.prodname_marketplace %}

Если вы хотите убрать приложение из {% data variables.product.prodname_marketplace %}, обратитесь в {% data variables.contact.contact_support %}.
