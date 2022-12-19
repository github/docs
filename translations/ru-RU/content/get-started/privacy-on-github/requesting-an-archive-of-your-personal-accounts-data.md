---
title: Запрос архива данных личной учетной записи
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878957'
---
{% data variables.product.product_name %} сохраняет метаданные репозитория и профиля из действий вашей личной учетной записи. Данные личной учетной записи можно экспортировать, используя параметры в {% data variables.product.prodname_dotcom_the_website %} или API миграции пользователей.

Дополнительные сведения о хранилищах {% data variables.product.product_name %}, доступных для экспорта, см. в разделах [Скачивание архива миграции пользователей](/rest/reference/migrations#download-a-user-migration-archive) и [Как {% data variables.product.product_name %} использует ваши данные](/articles/about-github-s-use-of-your-data).

Когда вы запрашиваете экспорт своих персональных данных, используя параметры в {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.product_name %} упаковывает ваши персональные данные в файл `tar.gz` и отправляет ссылку на скачивание по вашему основному адресу электронной почты.

По умолчанию срок действия ссылки на скачивание истекает через семь дней. Вы можете отключить эту ссылку на скачивание до истечения срока ее действия в параметрах пользователя. Дополнительные сведения см. в разделе [Удаление доступа к архиву данных личной учетной записи](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data).

Если операционная система не может распаковать файл `tar.gz` в собственном коде, можно использовать стороннее средство для извлечения архивных файлов. Дополнительные сведения см. в разделе [Распаковка файлов в формате TAR.GZ](https://opensource.com/article/17/7/how-unzip-targz-file) на сайте Opensource.com.

Созданный файл `tar.gz` будет содержать данные, хранимые на момент запуска экспорта данных.

## Скачивание архива данных личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. В разделе "Экспорт данных учетной записи" нажмите кнопку **Начать экспорт** или **Новый экспорт**.
![Выделенная кнопка запуска экспорта персональных данных](/assets/images/help/repository/export-personal-data.png)
![Выделенная кнопка нового экспорта персональных данных](/assets/images/help/repository/new-export.png)
4. Как только экспортированные данные будут готовы для скачивания, {% data variables.product.product_name %} отправит ссылку на скачивание по вашему основному адресу электронной почты.
5. Щелкните ссылку на скачивание в полученном электронном письме и введите пароль, если появится соответствующий запрос.
6. Вы будете переадресованы к файлу `tar.gz`, который можно скачать.

## Удаление доступа к архиву данных личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Чтобы отключить ссылку на скачивание, отправленную по электронной почте, в разделе "Экспорт данных учетной записи" найдите загрузку экспортированных данных, которую нужно отключить, и нажмите **Удалить**.
![Выделенная кнопка удаления пакет экспорта персональных данных](/assets/images/help/repository/delete-export-personal-account-data.png)
