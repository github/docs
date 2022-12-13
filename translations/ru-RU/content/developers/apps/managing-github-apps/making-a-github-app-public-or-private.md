---
title: Преобразование приложения GitHub в общедоступное или частное
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065893'
---
Сведения о проверке подлинности см. в разделе [Проверка подлинности в приложениях GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

## Процесс установки общедоступного приложения

Процесс установки общедоступного приложения предполагает наличие целевой страницы, с которой другие пользователи, помимо владельца приложения, могут устанавливать приложение в своих репозиториях. Ссылка на нее предоставляется в поле "Общедоступная ссылка" при настройке приложения GitHub. Дополнительные сведения см. в разделе [Установка приложений GitHub](/apps/installing-github-apps/).

## Процесс установки частного приложения

Процесс установки частного приложения позволяет устанавливать приложение GitHub только его владельцу. Ограниченные сведения о приложении GitHub будут отображаться на общедоступной странице, но кнопка **Установить** будет доступна только администраторам организации или личной учетной записи, если приложение GitHub принадлежит ей. Частные приложения GitHub можно установить только в учетной записи пользователя или организации владельца приложения.

## Изменение круга пользователей, которым доступна установка приложения GitHub

Чтобы изменить круг пользователей, которым доступна установка приложения GitHub, выполните указанные ниже действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. Выберите приложение GitHub, вариант установки которого нужно изменить.
![Выбор приложения](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. В зависимости от варианта установки приложения GitHub выберите **Сделать общедоступным** или **Сделать частным**.
![Кнопка для изменения варианта установки приложения GitHub](/assets/images/github-apps/github_apps_make_public.png)
6. В зависимости от варианта установки приложения GitHub выберите **Да, сделать это приложение GitHub общедоступным** или **Да, сделать это приложение GitHub {% ifversion fpt or ghec %}внутренним{% else %}частным{% endif %}** .
![Кнопка для подтверждения изменения варианта установки](/assets/images/github-apps/github_apps_confirm_installation_option.png)
