---
title: Сведения о личных доменах и страницах GitHub
intro: '{% data variables.product.prodname_pages %} поддерживает использование личных доменов или изменение корня URL-адреса вашего сайта с URL-адреса сайта по умолчанию (например, `octocat.github.io`) на адрес любого домена, которым вы владеете.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: 4b71f14d364aabc0358e44a1651c872ca909c136
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099231'
---
## Поддерживаемые личные домены

{% data variables.product.prodname_pages %} работает с двумя типами доменов: поддоменами и вершинными доменами. Список неподдерживаемых личных доменов см. в разделе [Устранение неполадок личных доменов и {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported).

| Поддерживаемые типы личных доменов | Пример |
|---|---|
| Поддомен `www` | `www.example.com` |
| Личный поддомен | `blog.example.com` |
| Верхний домен        | `example.com` |

Вы можете настроить для своего сайта конфигурации из вершинных доменов и поддоменов `www`, как вместе, так и по отдельности. Дополнительные сведения о вершинных доменах см. в разделе [Использование вершинного домена для сайта {% data variables.product.prodname_pages %}](#using-an-apex-domain-for-your-github-pages-site).

Рекомендуется всегда использовать поддомен `www`, даже если вы также используете вершинный домен. Когда вы создаете новый сайт с вершинным доменом, мы автоматически пытаемся защитить поддомен `www` для использования при обслуживании содержимого сайта, но вам нужно внести изменения DNS для использования поддомена `www`. Если вы настраиваете поддомен `www`, мы автоматически пытаемся защитить соответствующий вершинный домен. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).

После настройки личного домена для сайта пользователя или организации этот личный домен заменит часть `<user>.github.io` или `<organization>.github.io` URL-адреса для всех принадлежащих учетной записи сайтов проектов, для которых не настроен личный домен. Например, если для сайта пользователя настроен личный домен `www.octocat.com`, и у вас есть сайт проекта без настроенного личного домена, опубликованный из репозитория с именем `octo-project`, сайт {% data variables.product.prodname_pages %} для этого репозитория будет доступен по адресу `www.octocat.com/octo-project`.
Дополнительные сведения о каждом типе сайтов и обработке личных доменов см. в разделе "[Типы данных {% variables.product.prodname_pages %} сайтов](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Использование поддомена для сайта {% data variables.product.prodname_pages %}

Поддомен является частью URL-адреса перед корневым доменом. Поддомен можно настроить как `www` или как отдельный раздел сайта, например `blog.example.com`.

Поддомены настраиваются с записью `CNAME` через поставщика DNS. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

### Поддомены `www`

Поддомен `www` является наиболее часто используемым типом поддомена. Например, `www.example.com` включает поддомен `www`.

Поддомены `www` являются наиболее стабильным типом личного домена, так как поддомены `www` не затрагиваются изменениями IP-адресов серверов {% data variables.product.product_name %}.

### Пользовательские поддомены

Личный поддомен — это тип поддомена, который не использует стандартный вариант `www`. Личные поддомены в основном используются, если требуется два отдельных раздела сайта. Например, вы можете создать сайт с именем `blog.example.com` и настроить этот раздел независимо от `www.example.com`.

## Использование вершинного домена для сайта {% data variables.product.prodname_pages %}

Вершинный домен — это личный домен, который не содержит поддомен, такой как `example.com`. Вершинные домены также называются базовыми, минимальными, "голыми", корневыми вершинными зонными вершинными доменами.

Вершинный домен настраивается с помощью записи `A`, `ALIAS` или `ANAME` через поставщика DNS. Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

{% data reusables.pages.www-and-apex-domain-recommendation %} Дополнительные сведения см. в разделе [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain).

## Обеспечение безопасности личного домена для сайта {% data variables.product.prodname_pages %}

{% data reusables.pages.secure-your-domain %} Дополнительные сведения см. в разделах [Проверка личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) и [Управление личным доменом для сайта {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site).

Существует несколько причин, по которым ваш сайт может быть автоматически отключен.

- Если вы понижаете уровень с {% data variables.product.prodname_pro %} на {% data variables.product.prodname_free_user %}, публикация всех сайтов {% data variables.product.prodname_pages %}, опубликованных к этому времени из частных репозиториев в вашей учетной записи, будет отменена. Дополнительные сведения см. в разделе [Понижение уровня плана выставления счетов {% data variables.product.prodname_dotcom %}](/articles/downgrading-your-github-billing-plan).
- При переносе частного репозитория в личную учетную запись, использующую {% data variables.product.prodname_free_user %}, этот репозиторий потеряет доступ к компоненту {% data variables.product.prodname_pages %}, а публикация опубликованного сайта {% data variables.product.prodname_pages %} будет отменена. Дополнительные сведения см. в разделе [Перенос репозитория](/articles/transferring-a-repository).

## Дополнительные материалы

- [Устранение неполадок личных доменов и {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)
