---
title: Защита сайта GitHub Pages с помощью HTTPS
intro: 'Протокол HTTPS добавляет уровень шифрования, который не позволяет другим пользователям перехватывать или изменять трафик между вашим сайтом и его пользователями. Вы можете потребовать использование протокола HTTPS для сайта {% data variables.product.prodname_pages %}, и тогда все HTTP-запросы будут прозрачно перенаправляться на HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: 34ecec8e187efb117e09e61f85768fc203404ab3
ms.sourcegitcommit: 7e6836f8cb3b981939bf934e735e7eced8133b05
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148022525'
---
Пользователи с разрешениями администратора для репозитория могут применять протокол HTTPS для сайта {% data variables.product.prodname_pages %}.

## Сведения о HTTPS и {% data variables.product.prodname_pages %}

Все сайты {% data variables.product.prodname_pages %}, включая сайты, которые правильно настроены с помощью личного домена, поддерживают HTTPS и принудительное применение HTTPS. Дополнительные сведения о личных доменах см. в разделах [Сведения о личных доменах и {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages) и [Устранение неполадок личных доменов и {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors).

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**Примечание.** RFC3280 указывает, что длина общего имени должна быть не более 64 символов. Таким образом, для успешного создания сертификата все доменное имя сайта {% data variables.product.prodname_pages %} должно быть меньше 64 символов.

{% endnote %}

## Принудительное применение протокола HTTPS для сайта {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. В разделе "{% data variables.product.prodname_pages %}" выберите **Применить HTTPS**.
  ![Флажок принудительного применения протокола HTTPS](/assets/images/help/pages/enforce-https-checkbox.png)

## Устранение неполадок при подготовке сертификатов (ошибка "Сертификат еще не создан")

При настройке или изменении личного домена в параметрах страниц начинается автоматическая проверка DNS. Эта проверка определяет, настроены ли параметры DNS, чтобы разрешить {% data variables.product.prodname_dotcom %} получать сертификат автоматически. Если проверка выполнена успешно, {% data variables.product.prodname_dotcom %} помещает задание в очередь для запроса сертификата TLS из [Let's Encrypt](https://letsencrypt.org/). При получении допустимого сертификата {% data variables.product.prodname_dotcom %} автоматически отправляет его на серверы, обрабатывающие завершение сеанса TLS для страниц. После успешного завершения этого процесса рядом с именем личного домена отображается флажок.

Этот процесс может занять некоторое время. Если процесс не завершился в течение нескольких минут после нажатия кнопки **Сохранить**, попробуйте нажать кнопку **Удалить** рядом с именем личного домена. Повторно введите доменное имя и нажмите кнопку **Сохранить** еще раз. Это приведет к отмене и перезапуску процесса подготовки.

## Устранение проблем со смешанным содержимым

Если вы включаете HTTPS для сайта {% data variables.product.prodname_pages %}, но код HTML сайта по-прежнему ссылается на изображения, каскадные таблицы стилей или JavaScript по протоколу HTTP, это означает, что ваш сайт обслуживает *смешанное содержимое*. Обслуживание смешанного содержимого может сделать сайт менее безопасным и привести к проблемам с загрузкой ресурсов.

Чтобы удалить смешанное содержимое сайта, обеспечьте, чтобы все ресурсы обслуживались по протоколу HTTPS, изменив `http://` на `https://` в HTML-коде сайта.

Ресурсы обычно находятся в следующих расположениях:
- Если ваш сайт использует Jekyll, то HTML-файлы, скорее всего, находятся в папке *_layouts*.
- Каскадные таблицы стилей обычно находятся в разделе `<head>` HTML-файла.
- JavaScript обычно находится в разделе `<head>` или непосредственно перед закрывающим тегом `</body>`.
- Изображения часто находятся в разделе `<body>`.

{% tip %}

**Совет.** Если вы не можете найти ресурсы в исходных файлах сайта, попробуйте найти исходные файлы сайта для `http` в текстовом редакторе или в {% data variables.product.product_name %}.

{% endtip %}

### Примеры ресурсов, на которые ссылается HTML-файл

| Тип ресурса | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| Image        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
