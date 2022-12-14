---
title: Создание пользовательского индикатора событий для приложения GitHub
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
ms.openlocfilehash: df691669b42b0448f9979dec4bf25ca6c1ebf070
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117267'
---
По умолчанию новое приложение GitHub будет иметь автоматически созданный [Identicon](https://github.com/blog/1586-identicons).
Значок Identicon выглядит примерно так:

![Identicon](/assets/images/identicon.png)

После создания приложения GitHub можно настроить индикатор событий приложения, отправив логотип и выбрав цвет фона. Индикатор событий — это квадратное изображение логотипа внутри круглого значка. Вы можете выбрать цвет фона для индикатора событий, который можно использовать для визуального выделения приложения.

Логотип должен быть PNG, JPG или GIF-файл размером менее 1 МБ. Для улучшенной отрисовки рекомендуется использовать размер изображения не менее 200 x 200 пикселей. {% ifversion fpt or ghec %} Дополнительные сведения о настройке индикаторов событий см. в разделе [Рекомендации для изображений индикаторов событий и логотипов](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos). {% endif %}

{% ifversion fpt or ghec %}

Можно пользовательский индикатор событий для приложения GitHub, у которого уже есть утвержденный список Marketplace. Для этого перейдите к https://github.com/marketplace/manage.

{% endif %}

Чтобы создать настраиваемый индикатор событий, выполните приведенные далее действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. В разделе "Отображение информации" перетащите изображение из локальной папки или щелкните **Отправить логотип**, чтобы выбрать изображение с компьютера.
![Отправка логотипа](/assets/images/github-apps/github_apps_upload_logo.png)
6. Обрезка рисунка. По завершении нажмите кнопку **Установить новый аватар**.
![Обрезка и установка логотипа](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. В поле «Цвет фона для индикатора событий» введите [шестнадцатеричный код цвета](http://www.color-hex.com/) фона для индикатора событий. {% ifversion fpt or ghec %}**Примечание.** Поле ввода "Цвет фона индикатора событий" будет отображаться только после отправки логотипа приложения.{% endif %} ![Цвет фона индикатора событий](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## Дальнейшие действия

Дополнительные сведения о создании описания в Marketplace для этого приложения см. в разделе [Листинг на GitHub Marketplace](/marketplace/listing-on-github-marketplace/).

{% endif %}
