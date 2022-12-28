---
title: Настройка Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'В основе {% data variables.product.prodname_dotcom %} лежит система управления версиями с открытым кодом (VCS) под названием Git. Git отвечает за все, что связано с {% data variables.product.prodname_dotcom %} и происходит локально на вашем компьютере.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643960'
---
## С помощью Git

Для работы с Git в командной строке необходимо скачать, установить и настроить Git на компьютере. Также вы можете установить {% data variables.product.prodname_cli %} для работы с {% data variables.product.prodname_dotcom %} из командной строки. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Если вы хотите работать с Git локально без использования командной строки, скачайте и установите клиент [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Дополнительные сведения см. в разделе [Установка и настройка {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/).

Если вам не требуется работать с файлами локально, множество связанных с Git действий можно выполнять с помощью {% data variables.product.product_name %} непосредственно в браузере:

- [Создание репозитория](/articles/create-a-repo)
- [Создание вилки репозитория](/articles/fork-a-repo)
- [Управление файлами](/repositories/working-with-files/managing-files)
- [Взаимодействие с сообществом](/articles/be-social)

## Настройка Git

1. [Скачайте и установите последнюю версию Git](https://git-scm.com/downloads).

   {% note %}
   
   **Примечание**. На устройствах с Chrome OS потребуется дополнительная настройка:
   
   1. Установите на устройство с Chrome OS эмулятор терминала, например Termux, из Google Play Маркет.
   1. Установите Git из установленного эмулятора терминала. Например, в Termux введите `apt install git` и затем `y` при появлении запроса. 
   
   {% endnote %}

1. [Настройте имя пользователя в Git](/github/getting-started-with-github/setting-your-username-in-git).
1. [Укажите адрес электронной почты для фиксаций в Git](/articles/setting-your-commit-email-address).

## Проверка подлинности с помощью {% data variables.product.prodname_dotcom %} из Git

При подключении к репозиторию {% data variables.product.prodname_dotcom %} из Git необходимо пройти проверку подлинности в {% data variables.product.product_name %} с использованием протокола HTTPS или SSH.

{% note %}

**Примечание**. Для проверки подлинности в {% data variables.product.product_name %} можно использовать {% data variables.product.prodname_cli %} для HTTP или SSH. Дополнительные сведения см. на веб-сайте [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Подключение по протоколу HTTPS (рекомендуется)

При клонировании по протоколу HTTPS вы можете кэшировать учетные данные {% data variables.product.prodname_dotcom %} в Git с помощью вспомогательного приложения для управления учетными данными. Дополнительные сведения см. в разделах [Клонирование с помощью URL-адресов HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) и [Кэширование учетных данных {% data variables.product.prodname_dotcom %} в Git](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### Подключение по протоколу SSH

При клонировании по протоколу SSH необходимо создать ключи SSH на каждом компьютере, который будет использоваться для отправки или извлечения данных из {% data variables.product.product_name %}. Дополнительные сведения см. в разделах [Клонирование с помощью URL-адресов SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls) и [Создание нового ключа SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Дальнейшие действия

Настройка Git и {% data variables.product.prodname_dotcom %} завершена. Теперь вы можете создать репозиторий, в котором будут размещаться ваши проекты. В репозитории вы можете хранить резервные копии своего кода и обеспечить возможность доступа к нему пользователям по всему миру. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
