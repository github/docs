---
title: Описание GitHub Pages
intro: 'Вы можете использовать {% данных variables.product.prodname_pages %} для размещения веб-сайта о себе, организации или проекте непосредственно из репозитория на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{%endif %}.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1717726156a59f5f1216e62707d7c0fa26518956
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094444'
---
## Описание {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} — это служба размещения статических сайтов, которая принимает файлы HTML, CSS и JavaScript прямо из репозитория в {% data variables.product.product_name %}, при необходимости выполняет файлы с помощью процесса сборки и публикует веб-сайт. Примеры сайтов {% data variables.product.prodname_pages %} можно посмотреть в [коллекции примеров {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %} Вы можете разместить свой сайт в домене `github.io` {% data variables.product.prodname_dotcom %} или в своем личном домене. Дополнительные сведения см. в разделе [Использование личного домена вместе с {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages).
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} Дополнительные сведения см. в разделе [Изменение видимости сайта {% data variables.product.prodname_pages %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %} в документации {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %} {% endif %}

Чтобы приступить к работе, изучите раздел [Создание сайта {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site).

{% ifversion fpt or ghes or ghec %} Владельцы организации могут отключить публикацию сайтов {% data variables.product.prodname_pages %} из репозиториев организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% endif %}

## Типы сайтов {% data variables.product.prodname_pages %}

Существует три типа сайтов {% data variables.product.prodname_pages %}: сайт проекта, сайт пользователя и сайт организации. Сайты проектов подключаются к определенным проектам, размещенным в {% data variables.product.product_name %}, таким как библиотека JavaScript или коллекция рецептов. Сайты пользователей и организаций подключены к определенной учетной записи {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}.

Чтобы опубликовать сайт пользователя, необходимо создать репозиторий, принадлежащий вашей личной учетной записи с именем {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Чтобы опубликовать сайт организации, необходимо создать репозиторий, принадлежащий организации с именем {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}Если вы не используете личный домен, сайты пользователя и организации доступны по адресу `http(s)://<username>.github.io` или `http(s)://<organization>.github.io`.{% elsif ghae %}Сайты пользователя и организации доступны по адресу `http(s)://pages.<hostname>/<username>` или `http(s)://pages.<hostname>/<organization>`.{% endif %}

Исходные файлы для сайта проекта хранятся в том же репозитории, что и проект. {% ifversion fpt or ghec %}Если вы не используете личный домен, сайты проекта доступны по адресу `http(s)://<username>.github.io/<repository>` или `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Сайты проекта доступны по адресу `http(s)://pages.<hostname>/<username>/<repository>/` или `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %} Если вы публикуете сайт в частном порядке, URL-адрес сайта будет отличаться. Дополнительные сведения см. в разделе [Изменение видимости сайта {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% endif %}

{% ifversion fpt or ghec %} Дополнительные сведения о том, как личные домены влияют на URL-адрес сайта, см. в разделе [Сведения о личных доменах и {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages).
{% endif %}

Для каждой учетной записи в {% data variables.product.product_name %} можно создать только один сайт пользователя или организации. Сайты проектов, принадлежащие учетной записи организации или личной учетной записи, не ограничены.

{% ghes ifversion %} URL-адрес, по котором доступен сайт, зависит от того, включена ли изоляция поддомена для {% данных variables.location.product_location %}.

| Тип сайта | Изоляция поддомена включена | Изоляция поддомена отключена |
| ------------ | --------------------------- | ---------------------------- |
Пользователь | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
План | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Сайт проекта, принадлежащий личной учетной записи | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Сайт проекта, принадлежащий учетной записи организации | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Дополнительные сведения см. в разделе [Включение изоляции поддомена](/enterprise/admin/installation/enabling-subdomain-isolation) или обратитесь к администратору сайта.
{% endif %}

## Источники публикации для сайтов {% data variables.product.prodname_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

Дополнительные сведения см. в статье "[Настройка источника публикации для сайта GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".

{% ifversion ghec %}
## Ограничения для {% data variables.product.prodname_emus %}
Если вы являетесь {% данных variables.enterprise.prodname_managed_user %}, использование {% данных variables.product.prodname_pages %} ограничено.

  - Сайты {% data variables.product.prodname_pages %} могут публиковаться только из репозиториев, принадлежащих организациям.
  - Сайты {% data variables.product.prodname_pages %} видны только другим членам предприятия.
  - Невозможно создать сайт организации (сайт, опубликованный из репозитория с именем `<organization>.github.io`)

Дополнительные сведения о {% data variables.product.prodname_emus %} см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).
{% endif %}

## Генераторы статических сайтов

{% data variables.product.prodname_pages %} публикует все статические файлы, которые вы отправляете в свой репозиторий. Вы можете создать собственные статические файлы или использовать генератор статических сайтов для создания сайта. Вы также можете настроить собственный процесс сборки локально или на другом сервере.

{% ifversion pages-custom-workflow %}

Если используется пользовательский процесс сборки или генератор статических сайтов, отличный от Jekyll, можно создать действие {% data variables.product.prodname_actions %}, чтобы создать и опубликовать сайт. {% data variables.product.product_name %} предоставляет начальные рабочие процессы для различных генераторов статических сайтов. Дополнительные сведения см. в статье "[Настройка источника публикации для сайта GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".

При публикации сайта из исходной ветви {% data variables.product.prodname_pages %} будет по умолчанию использовать Jekyll, чтобы создать сайт. Если вы хотите использовать другой генератор статических сайтов, отличный от Jekyll, рекомендуется создать действие {% data variables.product.prodname_actions %}, чтобы создать и опубликовать сайт. В противном случае отключите процесс сборки Jekyll, для этого необходимо создать в корне источника публикации пустой файл под названием `.nojekyll`, а затем следовать инструкциям используемого генератора статических сайтов, чтобы создать сайт локально.

{% else %}

Мы рекомендуем использовать Jekyll, генератор статических сайтов со встроенной поддержкой {% data variables.product.prodname_pages %} и упрощенным процессом сборки. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_pages %} и Jekyll](/articles/about-github-pages-and-jekyll).

{% data variables.product.prodname_pages %} будет использовать Jekyll для создания сайта по умолчанию. Если вы хотите использовать другой генератор статических сайтов, отключите процесс сборки Jekyll, создав пустой файл с именем `.nojekyll` в корне вашего источника публикации, а затем следуйте инструкциям вашего генератора статических сайтов, чтобы создать сайт локально.

{% endif %}

{% data variables.product.prodname_pages %} не поддерживает серверные языки, такие как PHP, Ruby или Python.

## Ограничения на использование {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %} Сайты {% data variables.product.prodname_pages %}, созданные после 15 июня 2016 г. и использующие домены `github.io`, обслуживаются по протоколу HTTPS. Если вы создали сайт до 15 июня 2016 г., то можете включить поддержку HTTPS для трафика на сайт. Дополнительные сведения см. в разделе [Защита сайта {% data variables.product.prodname_pages %} с помощью HTTPS](/articles/securing-your-github-pages-site-with-https).

### Запрещенные виды использования
{% endif %} Не предусмотрено и не разрешается использование {% data variables.product.prodname_pages %} в качестве бесплатной службы веб-размещения для запуска бизнеса в Интернете, сайта электронной коммерции и любого другого веб-сайта, в первую очередь направленного либо на коммерческие транзакции, либо на предоставление коммерческого программного обеспечения как услуги (SaaS). {% data reusables.pages.no_sensitive_data_pages %}

Кроме того, использование {% data variables.product.prodname_pages %} регулируется [условиями предоставления услуг GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/), включающими ограничения на схемы быстрого обогащения, материалы непристойного сексуального характера, а также материалы или действия, содержащие насилие или угрозы.

### Ограничения использования
На сайты {% data variables.product.prodname_pages %} распространяются следующие ограничения использования.

  - Исходные репозитории {% data variables.product.prodname_pages %} имеют рекомендуемое ограничение в 1 ГБ.{% ifversion fpt or ghec %} Дополнительные сведения см. в разделе [Какова квота диска?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations) {% endif %}
  - Размер опубликованного сайта {% data variables.product.prodname_pages %} не может превышать 1 ГБ.
{% ifversion fpt or ghec %}
  - Сайты {% data variables.product.prodname_pages %} имеют *мягкое* ограничение пропускной способности в 100 ГБ в месяц.
  - Для сайтов {% data variables.product.prodname_pages %} установлено *мягкое* ограничение в 10 сборок в час.{% ifversion pages-custom-workflow %} Это ограничение не применяется, если вы создаете и публикуете сайт с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}.{% endif %}
  - Чтобы обеспечить согласованное качество обслуживания для всех сайтов {% data variables.product.prodname_pages %}, могут применяться ограничения скорости. Эти ограничения скорости не предназначены для того, чтобы препятствовать законному использованию {% data variables.product.prodname_pages %}. Если ваш запрос активирует ограничение скорости, вы получите соответствующий ответ с кодом состояния HTTP `429`, а также информативным сообщением HTML.

Если ваш сайт превышает эти квоты использования, мы не сможем обслуживать ваш сайт, или вы получите вежливое электронное сообщение от {% data variables.contact.contact_support %} с предложением стратегий снижения воздействия вашего сайта на наши серверы, включая размещение сторонней сети доставки содержимого (CDN) перед сайтом, использование других функций {% data variables.product.prodname_dotcom %}, таких как выпуски, или переход в другую службу размещения, которая лучше соответствует вашим потребностям.

{% endif %}

## Типы MIME в {% data variables.product.prodname_pages %}

Тип MIME — это заголовок, который сервер отправляет в браузер, предоставляя сведения о характере и формате файлов, запрошенных браузером. {% data variables.product.prodname_pages %} поддерживает более 750 типов MIME в тысячах расширений файлов. Список поддерживаемых типов MIME создается из [проекта mime-db](https://github.com/jshttp/mime-db).

Хотя вы не можете указывать специальные типы MIME на уровне файла или репозитория, вы можете добавлять или изменять типы MIME для использования в {% data variables.product.prodname_pages %}. Дополнительные сведения см. [в правилах по предложению улучшений в mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## сбор данных

Когда кто-либо переходит на сайт {% data variables.product.prodname_pages %}, в целях безопасности IP-адрес посетителя регистрируется и сохраняется независимо от того, выполнил ли посетитель вход в {% data variables.product.prodname_dotcom %} или нет. Дополнительные сведения о методах обеспечения безопасности в {% data variables.product.prodname_dotcom %} см. в разделе <a href="/articles/github-privacy-statement/" class="dotcom-only">Заявление о конфиденциальности {% data variables.product.prodname_dotcom %}</a>.
{% endif %}

## Дополнительные материалы

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) в {% data variables.product.prodname_learning %}
- [{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)
