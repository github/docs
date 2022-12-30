---
title: Сведения об удаленных репозиториях
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'Подход GitHub к разработке зависит от публикации фиксаций из вашего локального репозитория в {% data variables.product.product_name %} для просмотра, извлечения и обновления другими людьми.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130893'
---
## Сведения об удаленных репозиториях

Удаленный URL-адрес — это необычный способ указания "места, в котором хранится код". Этот URL-адрес может быть вашим репозиторием в GitHub, вилкой репозитория другого пользователя или даже репозиторием на совершенно другом сервере.

Вы можете отправлять файлы только для двух типов URL-адресов:

* URL-адрес HTTPS, например, `https://{% data variables.command_line.backticks %}/user/repo.git`;
* URL-адрес SSH, например, `git@{% data variables.command_line.backticks %}:user/repo.git`.

Git связывает удаленный URL-адрес с именем. Удаленный репозиторий по умолчанию обычно называется `origin`.

## Создание удаленных репозиториев

Для сопоставления удаленного URL-адреса с именем можно использовать команду `git remote add`.
Например, вы ввели следующую команду в командной строке:

```shell
git remote add origin &lt;REMOTE_URL>
```

Она связывает имя `origin` с URL-адресом `REMOTE_URL`.

Для [изменения URL-адреса удаленного репозитория](/get-started/getting-started-with-git/managing-remote-repositories) можно использовать команду `git remote set-url`.

## Выбор URL-адреса для удаленного репозитория

Существует несколько способов клонирования репозиториев, доступных в {% data variables.location.product_location %}.

При просмотре репозитория во время входа в учетную запись под сведениями о репозитории отображаются URL-адреса, которые можно использовать для клонирования проекта на компьютер.

Сведения о настройке или изменении удаленного URL-адреса см. в разделе [Управление удаленными репозиториями](/get-started/getting-started-with-git/managing-remote-repositories).

## Клонирование с URL-адресами HTTPS

URL-адреса клонирования `https://` доступны во всех репозиториях независимо от их видимости. URL-адреса клонирования `https://` работают, даже если вы находитесь за брандмауэром или прокси-сервером.

При выполнении команд `git clone`, `git fetch`, `git pull` или `git push` для удаленного репозитория с использованием URL-адресов HTTPS в командной строке Git запросит ваши имя пользователя и пароль {% data variables.product.product_name %}. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Совет**.
- Вы можете использовать вспомогательное приложение учетных данных, чтобы Git запоминал ваши учетные данные {% data variables.product.prodname_dotcom %} каждый раз, когда он взаимодействует с {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Кэширование учетных данных {% data variables.product.prodname_dotcom %} в Git](/github/getting-started-with-github/caching-your-github-credentials-in-git).
- Чтобы клонировать репозиторий без проверки подлинности в {% data variables.product.product_name %} в командной строке, можно использовать {% data variables.product.prodname_desktop %} для клонирования. Дополнительные сведения см. в разделе [Клонирование репозитория из {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop).

{% endtip %}

 {% ifversion fpt or ghec %}Если вы предпочитаете использовать SSH, но не можете подключиться через порт 22, возможно, у вас получится использовать SSH через порт HTTPS. Дополнительные сведения см. в разделе [Использование SSH через порт HTTPS](/github/authenticating-to-github/using-ssh-over-the-https-port).{% endif %}

## Клонирование с URL-адресами SSH

URL-адреса SSH предоставляют доступ к репозиторию Git через безопасный протокол SSH. Чтобы использовать эти URL-адреса, необходимо создать на компьютере строку ключа SSH и добавить **открытый** ключ в учетную запись в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Дополнительные сведения см. в разделе [Подключение к {% data variables.product.prodname_dotcom %} с помощью SSH](/github/authenticating-to-github/connecting-to-github-with-ssh).

При выполнении команд `git clone`, `git fetch`, `git pull` или `git push` для удаленного репозитория с использованием URL-адресов SSH вам будет необходимо ввести пароль и указать парольную фразу ключа SSH в командной строке. Дополнительные сведения см. в разделе [Работа с парольными фразами ключей SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases).

{% ifversion fpt or ghec %}Если вы обращаетесь к организации, использующей единый вход SAML, перед проверкой подлинности необходимо авторизовать ключ SSH для доступа к организации. Дополнительные сведения см. в разделах [Сведения о проверке подлинности с помощью единого входа SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on) и [Авторизация ключа SSH для использования с единым входом SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}

{% tip %}

**Совет.** Вы можете использовать URL-адрес SSH для клонирования репозитория на компьютер и для безопасного способа развертывания кода на рабочих серверах. Вы также можете использовать перенаправление агента SSH с помощью скрипта развертывания, чтобы не управлять ключами на сервере. Дополнительные сведения см. в разделе [Использование перенаправления агента SSH](/developers/overview/using-ssh-agent-forwarding).

{% endtip %}

## Клонирование с помощью {% data variables.product.prodname_cli %}

Вы также можете установить {% data variables.product.prodname_cli %} для использования рабочих процессов {% data variables.product.product_name %} в терминале. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

{% ifversion not ghae %}
## Клонирование с помощью Subversion

Клиент [Subversion](https://subversion.apache.org/) также можно использовать для доступа к любому репозиторию в {% data variables.product.prodname_dotcom %}. Функции, предлагаемые Subversion, отличаются от возможностей Git. Дополнительные сведения см. в разделе [Каковы различия между Subversion и Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git).

Вы также можете получить доступ к репозиториям в {% data variables.product.prodname_dotcom %} из клиентов Subversion. Дополнительные сведения см. в разделе [Поддержка клиентов Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients).
{% endif %}
