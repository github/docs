---
title: Управление личным доменом для сайта "Страницы GitHub"
intro: 'Вы можете настроить или обновить определенные записи DNS и параметры репозитория, чтобы создать в домене по умолчанию для сайта {% data variables.product.prodname_pages %} ссылку на личный домен.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain
  - /articles/setting-up-a-www-subdomain
  - /articles/setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain-and-www-subdomain
  - /articles/adding-a-cname-file-to-your-repository
  - /articles/setting-up-your-pages-site-repository
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Manage a custom domain
ms.openlocfilehash: d8c11f50369d27a1bf99b10ba843e1525b3d4014
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181262'
---
Пользователи с разрешениями администратора для репозитория могут настроить личный домен для сайта {% data variables.product.prodname_pages %}.

## Сведения о конфигурации личного домена

Прежде чем настраивать личный домен с помощью поставщика DNS, добавьте личный домен на сайт {% data variables.product.prodname_pages %}. Настройка личного домена с помощью поставщика DNS без добавления личного домена в {% data variables.product.product_name %} может привести к тому, что другой пользователь сможет разместить сайт на одном из поддоменов.

{% windows %}

Команда `dig`, которую можно использовать для проверки правильности конфигурации записей DNS, не включена в Windows. Прежде чем проверять правильность настройки записей DNS, необходимо установить [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Примечание.** Распространение изменений DNS может занять до 24 часов.

{% endnote %}

## Настройка поддомена

Чтобы настроить `www` или личный поддомен, например `www.example.com` или `blog.example.com`, необходимо добавить домен в параметры репозитория. После этого с помощью поставщика DNS настройте запись CNAME.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. В поле "Личный домен" укажите личный домен и нажмите **Сохранить**. Если публикация выполняется из ветви, будет создана фиксация, которая добавляет файл `CNAME` в корень исходной ветви. Если публикация выполняется с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}, файл `CNAME` не создается. Дополнительные сведения об источнике публикации см. в статье "[Настройка источника публикации для сайта GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".
  ![Кнопка для сохранения личного домена](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **Примечание:** Если личный домен является интернационализированным доменным именем, необходимо ввести версию в кодировке Punycode.
  
  Дополнительные сведения о Punycodes см. в разделе [Имя международного домена](https://en.wikipedia.org/wiki/Internationalized_domain_name).
  
  {% endnote %}

5. Перейдите к поставщику DNS и создайте запись `CNAME`, указывающую поддомен в домен по умолчанию для сайта. Например, если вы хотите использовать поддомен `www.example.com` для сайта пользователя, создайте запись `CNAME`, указывающую `www.example.com` в `<user>.github.io`. Если вы хотите использовать поддомен `another.example.com` для сайта организации, создайте запись `CNAME`, указывающую `another.example.com` в `<organization>.github.io`. Запись `CNAME` всегда должна указывать в `<user>.github.io` или `<organization>.github.io`, за исключением имени репозитория. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Чтобы проверить правильность настройки записи DNS, используйте команду `dig`, заменив _WWW.EXAMPLE.COM_ своим поддоменом.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Настройка домена apex

Чтобы настроить домен apex, например `example.com`, необходимо с помощью поставщика DNS настроить личный домен в параметрах репозитория и как минимум одну запись `ALIAS`, `ANAME` или `A`.

{% data reusables.pages.www-and-apex-domain-recommendation %} Дополнительные сведения см. в статье [Настройка поддомена](#configuring-a-subdomain).

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. В поле "Личный домен" укажите личный домен и нажмите **Сохранить**. Если публикация выполняется из ветви, будет создана фиксация, которая добавляет файл `CNAME` в корень исходной ветви. Если публикация выполняется с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}, файл `CNAME` не создается. Дополнительные сведения об источнике публикации см. в статье "[Настройка источника публикации для сайта GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".
  ![Кнопка для сохранения личного домена](/assets/images/help/pages/save-custom-apex-domain.png)
5. Перейдите к поставщику DNS и создайте запись `ALIAS`, `ANAME` или `A`. Вы также можете создавать записи `AAAA` для поддержки IPv6. {% data reusables.pages.contact-dns-provider %}
    - Чтобы создать запись `ALIAS` или `ANAME`, укажите свой домен apex в домене по умолчанию для вашего сайта. {% data reusables.pages.default-domain-information %}
    - Чтобы создать записи `A`, укажите свой домен apex в IP-адресе для {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - Чтобы создать записи `AAAA`, укажите свой домен apex в IP-адресе для {% data variables.product.prodname_pages %}.
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Чтобы проверить правильность настройки записи DNS, используйте команду `dig`, заменив _EXAMPLE.COM_ своим доменом apex. Убедитесь, что результаты соответствуют IP-адресам для {% data variables.product.prodname_pages %} выше.
   - Для записей `A`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - Для записей `AAAA`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Настройка домена apex и варианта поддомена `www`

При использовании домена apex рекомендуется настроить сайт {% data variables.product.prodname_pages %} для размещения содержимого как в домене apex, так и в варианте поддомена `www` этого домена.

Чтобы настроить поддомен `www` наряду с доменом apex, необходимо сначала настроить домен apex путем создания записи `ALIAS`, `ANAME` или `A` с помощью поставщика DNS. Дополнительные сведения см. в статье [Настройка домена apex](#configuring-an-apex-domain).

После настройки домена apex необходимо с помощью поставщика DNS настроить запись CNAME.

1. Перейдите к поставщику DNS и создайте запись `CNAME`, указывающую `www.example.com` в домене по умолчанию для вашего сайта: `<user>.github.io` или `<organization>.github.io`. Не указывайте имя репозитория. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. Чтобы проверить правильность настройки записи DNS, используйте команду `dig`, заменив _WWW.EXAMPLE.COM_ своим вариантом поддомена `www`.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## Удаление личного домена

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. В разделе "Личный домен" нажмите **Удалить**.
  ![Кнопка для сохранения личного домена](/assets/images/help/pages/remove-custom-domain.png)

## Защита личного домена

{% data reusables.pages.secure-your-domain %} Дополнительные сведения см. в статье [Проверка личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Дополнительные материалы

- [Устранение неполадок личных доменов и {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)
