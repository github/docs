---
title: Создание пользовательского индикатора событий для приложения OAuth
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878538'
---
По умолчанию новое приложение OAuth будет иметь автоматически созданный [Identicon](https://github.com/blog/1586-identicons).
Значок Identicon выглядит примерно так:

![Identicon](/assets/images/identicon.png)

После создания приложения OAuth можно настроить индикатор событий приложения, отправив логотип и выбрав цвет фона. Индикатор событий — это квадратное изображение логотипа внутри круглого значка. Вы можете выбрать цвет фона для индикатора событий, который можно использовать для визуального выделения приложения.

Логотип должен быть PNG, JPG или GIF-файл размером менее 1 МБ. Для улучшенной отрисовки рекомендуется использовать размер изображения не менее 200 x 200 пикселей. {% ifversion fpt or ghec %} Дополнительные сведения о настройке индикаторов событий см. в разделе [Рекомендации для изображений индикаторов событий и логотипов](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos). {% endif %}

{% ifversion fpt or ghec %}

Можно пользовательский индикатор событий для приложения GitHub, у которого уже есть утвержденный список Marketplace. Для этого перейдите к https://github.com/marketplace/manage.

{% endif %}

Чтобы создать настраиваемый индикатор событий, выполните приведенные далее действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. В разделе «Логотип приложения» перетащите изображение из локальной папки или щелкните **Отправить новый логотип**, чтобы выбрать изображение с компьютера.
![Отправка логотипа](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Обрезка рисунка. По завершении нажмите кнопку **Настроить новый логотип приложения**.
![Обрезка и настройка логотипа](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. В поле «Цвет фона для индикатора событий» введите [шестнадцатеричный код цвета](http://www.color-hex.com/) фона для индикатора событий. {% ifversion fpt or ghec %}**Примечание.** Поле ввода «Цвет фона индикатора событий» будет отображаться после отправки логотипа приложения.{% endif %} ![Цвет фона индикатора событий](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## Дальнейшие действия

Дополнительные сведения о создании описания в Marketplace для этого приложения см. в разделе [Листинг на GitHub Marketplace](/marketplace/listing-on-github-marketplace/).

{% endif %}
