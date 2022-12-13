---
title: Включение изоляции поддомена
intro: 'Можно настроить изоляцию поддоменов, чтобы безопасно отделить предоставленное пользователем содержимое от других частей устройства {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193100'
---
## Сведения об изоляции поддомена

Изоляция поддомена уменьшает риск межсайтовых сценариев и других связанных уязвимостей. Дополнительные сведения см. в статье [Межсайтовые сценарии](http://en.wikipedia.org/wiki/Cross-site_scripting) на Википедии. Настоятельно рекомендуется включить изоляцию поддомена в {% data variables.location.product_location %}.

При включенной изоляции поддомена {% data variables.product.prodname_ghe_server %} заменяет несколько путей поддоменами. После включения изоляции поддомена попытки получить доступ к предыдущим путям для определенного пользовательского содержимого, например `http(s)://HOSTNAME/raw/`, могут возвращать ошибки `404`.

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| Путь без изоляции поддомена  | Путь с изоляцией поддомена   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | | {%- endif %} `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | | {%- endif %} `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | Не поддерживается | `https://containers.HOSTNAME/` | {%- endif %}

## Предварительные требования

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Перед включением изоляции поддомена необходимо настроить параметры сети для нового домена.

- Укажите допустимое доменное имя в качестве имени узла вместо IP-адреса. Дополнительные сведения см. в разделе [Настройка имени узла](/enterprise/admin/guides/installation/configuring-a-hostname).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Настройте запись службы доменных имен (DNS) с подстановочными знаками или отдельные записи DNS для поддоменов, перечисленных выше. Мы рекомендуем создать запись А для `*.HOSTNAME`, которая указывает на IP-адрес сервера, чтобы не нужно было создавать несколько записей для каждого поддомена.
- Получите сертификат протокола TLS с подстановочными знаками для `*.HOSTNAME` с альтернативным именем субъекта (SAN) для `HOSTNAME` и домена `*.HOSTNAME` с подстановочными знаками. Например, если имя узла — `github.octoinc.com`, получите сертификат со значением общего имени `*.github.octoinc.com` и заданными для SAN значениями `github.octoinc.com` и `*.github.octoinc.com`.
- Включите TLS на устройстве. Дополнительные сведения см. в разделе [Настройка TLS](/enterprise/admin/guides/installation/configuring-tls/).

## Включение изоляции поддомена

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Выберите **Изоляция поддомена (рекомендовано)** .
  ![Флажок для включения изоляции поддомена](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
