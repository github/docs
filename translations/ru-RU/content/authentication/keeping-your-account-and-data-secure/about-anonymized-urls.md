---
title: Сведения об анонимных URL-адресах
intro: 'Если вы отправляете изображение или видео в {% data variables.product.product_name %}, URL-адрес изображения или видео будет изменен, чтобы предотвратить отслеживание ваших данных.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-anonymized-urls
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: b96c01144d28d668d33e96e4067801395aaa8275
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120008'
---
Для размещения изображений {% data variables.product.product_name %} использует [проект Camo с открытым кодом](https://github.com/atmos/camo). Camo создает анонимный прокси URL-адреса для каждого файла, который скрывает сведения о вашем браузере и связанную с ним информацию от других пользователей. URL-адрес начинается с `https://<subdomain>.githubusercontent.com/` с разными поддоменами в зависимости от того, как вы загрузили изображение. 

Видео также получают анонимные URL-адреса в том же формате, что и URL-адреса изображений, но не обрабатываются через Camo. Это связано с тем, что {% data variables.product.prodname_dotcom %} не поддерживает видео, размещенные на внешнем хостинге, поэтому анонимный URL-адрес представляет собой ссылку на загруженное видео, размещенное на {% data variables.product.prodname_dotcom %}.

Любой, кто получит анонимный URL-адрес напрямую или косвенно, может просмотреть изображение или видео. Чтобы конфиденциальные файлы мультимедиа оставались таковыми, ограничьте их использование частной сетью или сервером, требующим проверки подлинности, вместо использования Camo.

## Устранение неполадок с Camo

В редких случаях изображения, обработанные через Camo, могут не отображаться на {% data variables.product.prodname_dotcom %}. Ниже приведены некоторые действия, которые можно выполнить, чтобы определить, в чем проблема.

{% windows %}

{% tip %}

Пользователям Windows потребуется либо применять Git PowerShell (который устанавливается вместе с [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)), либо загрузить [curl для Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

### Изображение не отображается

Если изображение выводится в браузере, но не отображается на {% data variables.product.prodname_dotcom %}, попробуйте запросить его локально.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Запрос заголовков изображений с помощью `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Проверьте значение `Content-Type`. В этом случае он выглядит так: `image/x-png`.
4. Сравните этот тип контента со [списком типов, поддерживаемых Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

Если тип контента не поддерживается Camo, можно попробовать выполнить несколько действий:
  * Если вы являетесь владельцем сервера, на котором размещено изображение, измените его, чтобы он возвращал правильный тип содержимого для изображений.
  * Если вы используете внешнюю службу для размещения изображений, обратитесь в ее службу поддержки.
  * Создайте запрос на вытягивание в Camo, чтобы добавить тип контента в список.

### Изображение, которое было недавно изменено, не обновляется

Если изображение было недавно изменено и оно отображается в браузере, но не на {% data variables.product.prodname_dotcom %}, можно попробовать сбросить кэш изображения.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Запрос заголовков изображений с помощью `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Проверьте значение `Cache-Control`. В этом примере `Cache-Control` отсутствует. В этом случае:
  * Если вы являетесь владельцем сервера, на котором размещено изображение, измените его так, чтобы он возвращал `Cache-Control` из `no-cache` для изображений.
  * Если вы используете внешнюю службу для размещения изображений, обратитесь в ее службу поддержки.

 Если для `Cache-Control` *установлено* значение `no-cache`, свяжитесь с {% data variables.contact.contact_support %} или выполните поиск на {% data variables.contact.community_support_forum %}.

### Удаление изображения из кэша Camo

Очистка кэша заставляет каждого пользователя {% data variables.product.prodname_dotcom %} повторно запрашивать изображение, поэтому ее следует применять очень экономно и только в том случае, если описанные выше шаги не сработали.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Очистите изображение, используя `curl -X PURGE` на URL-адресе Camo.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

### Просмотр изображений в частных сетях

Если изображение передается из частной сети или с сервера, для которого требуется проверка подлинности, оно не может быть просмотрено {% data variables.product.prodname_dotcom %}. Фактически ни один пользователь не может просмотреть его, не запрашивая вход на сервер.

Чтобы устранить эту проблему, переместите изображение в общедоступную службу.

## Дополнительные материалы

- [Использование прокси для пользовательских изображений](https://github.com/blog/1766-proxying-user-images) в {% data variables.product.prodname_blog %}
