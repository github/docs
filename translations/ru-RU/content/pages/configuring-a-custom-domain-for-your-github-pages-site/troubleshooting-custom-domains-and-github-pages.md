---
title: Устранение неполадок с личными доменами и страницами GitHub
intro: 'Вы можете проверить наличие распространенных ошибок, чтобы устранить проблемы в работе личных доменов или протокола HTTPS для сайта {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428391'
---
## Ошибки _CNAME_

{% ifversion pages-custom-workflow %}Если публикация выполняется с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}, все файлы _CNAME_ пропускаются и не являются обязательными.{% endif %}

Если публикация выполняется из ветви, личные домены хранятся в файле _CNAME_ в корне источника публикации. Вы можете добавить или обновить этот файл с помощью параметров репозитория либо вручную. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).

Чтобы сайт преобразовывал нужный домен для просмотра, убедитесь, что файл _CNAME_ все еще существует в репозитории. Например, многие генераторы статических сайтов принудительно отправляются в репозиторий, что может перезаписать файл _CNAME_, добавленный в репозиторий при настройке личного домена. Если вы выполняете сборку сайта локально и отправляете созданные файлы в {% data variables.product.product_name %}, сначала извлеките фиксацию, вследствие которой файл _CNAME_ был добавлен в локальный репозиторий. Таким образом файл будет включен в сборку.

Затем убедитесь, что файл _CNAME_ отформатирован правильно.

- Имя файла _CNAME_ должно быть записано прописными буквами.
- Файл _CNAME_ может содержать только один домен. Чтобы указать несколько доменов на сайт, необходимо настроить перенаправление через поставщика DNS.
- Файл _CNAME_ должен содержать только доменное имя. Например, `www.example.com`, `blog.example.com` или `example.com`.
- Доменное имя должно быть уникальным для всех сайтов {% data variables.product.prodname_pages %}. Например, если файл _CNAME_ другого репозитория содержит `example.com`, `example.com` нельзя использовать в файле _CNAME_ для репозитория.

## Неправильные настройки DNS

Если у вас возникли проблемы с указанием домена по умолчанию для сайта на личный домен, обратитесь к поставщику DNS.

Вы также можете использовать один из следующих методов для проверки правильности настройки записей DNS личного домена:

- Средство CLI, например `dig`. Дополнительные сведения см. в статье [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).
- Средство поиска DNS в Интернете.

## Неподдерживаемые имена личных доменов

Если личный домен не поддерживается, может потребоваться изменить домен на поддерживаемый. Вы также можете обратиться к поставщику DNS, чтобы узнать, предлагает ли он службы переадресации для доменных имен.

Убедитесь, что сайт:
- Не использует несколько доменов Apex. Например, значения `example.com` и `anotherexample.com`.
- Не использует несколько поддоменов `www`. Например, значения `www.example.com` и `www.anotherexample.com`.
- Не использует ни домен Apex, ни пользовательский поддомен. Например, значения `example.com` и `docs.example.com`.

  Единственным исключением является поддомен `www`. При правильной настройке поддомен `www` автоматически перенаправляется в домен Apex. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

{% data reusables.pages.wildcard-dns-warning %}

Список поддерживаемых личных доменов см. в статье [Сведения о личных доменах и {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains).

## Ошибки HTTPS

Доступ к сайтам {% data variables.product.prodname_pages %}, использующим личные домены, которые правильно настроены с помощью записей DNS `CNAME`, `ALIAS`, `ANAME` или `A`, можно получить по протоколу HTTPS. Дополнительные сведения см. в разделе [Защита сайта {% data variables.product.prodname_pages %} с помощью HTTPS](/articles/securing-your-github-pages-site-with-https).

После настройки личного домена может потребоваться около часа, чтобы ваш сайт стал доступным по протоколу HTTPS. После обновления существующих параметров DNS может потребоваться удалить и повторно добавить личный домен в репозиторий сайта, чтобы активировать процесс включения HTTPS. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).

Если вы используете записи авторизации центра сертификации (CAA), должна существовать по крайней мере одна такая запись со значением `letsencrypt.org` для сайта, чтобы он был доступен по протоколу HTTPS. Дополнительные сведения см. в статье [Авторизация центра сертификации (CAA)](https://letsencrypt.org/docs/caa/) в документации по Let's Encrypt.

## Форматирование URL-адресов в Linux

Если URL-адрес сайта содержит имя пользователя или название организации, которое начинается либо заканчивается тире или содержит последовательные тире, пользователи, выполняющие просмотр, используя Linux, при попытке посетить сайт получат ошибку сервера. Чтобы исправить это, измените имя пользователя {% data variables.product.product_name %} и удалите символы, которые не являются буквами или цифрами. Дополнительные сведения см. в статье [Изменение имени пользователя {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username/).

## Кэш браузера

Если вы недавно изменили или удалили личный домен и не можете получить доступ к новому URL-адресу в браузере, вам может потребоваться очистить кэш браузера для получения доступа. Дополнительные сведения об очистке кэша см. в документации браузера.
