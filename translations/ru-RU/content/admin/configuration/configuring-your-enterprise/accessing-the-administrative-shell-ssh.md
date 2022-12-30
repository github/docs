---
title: Доступ к административной оболочке (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
ms.openlocfilehash: 10c1496c340e48bee33fac5879515622fc436e7d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093860'
---
## Сведения о доступе к административной оболочке

Если у вас есть доступ по протоколу SSH к административной оболочке, можно запустить программы командной строки {% data variables.product.prodname_ghe_server %}. Доступ по протоколу SSH также полезен для устранения неполадок при выполнении резервных копий и настройке репликации. Административный доступ по протоколу SSH управляется отдельно от доступа Git SSH и доступен только через порт 122.

## Включение доступа к административной оболочке через SSH

Чтобы включить административный доступ по протоколу SSH, необходимо добавить открытый ключ SSH в список авторизованных ключей экземпляра. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% tip %}

**Совет.** Изменения авторизованных ключей SSH вступают в силу немедленно.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. В разделе SSH access (Доступ по протоколу SSH) вставьте ключ в текстовое поле и нажмите кнопку **Add key** (Добавить ключ).
  ![Текстовое поле и кнопка для добавления ключа SSH](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png) {% data reusables.enterprise_management_console.save-settings %}

## Подключение к административной оболочке через SSH

После добавления ключа SSH в список подключитесь к экземпляру по протоколу SSH в качестве пользователя `admin` через порт 122.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### Устранение неполадок с подключением по протоколу SSH

Если при попытке `Permission denied (publickey)` подключиться к {% данных variables.location.product_location %} по протоколу SSH возникает ошибка, убедитесь, что вы подключаетесь через порт 122. Может потребоваться явно указать, какой закрытый ключ SSH следует использовать.

Чтобы указать закрытый ключ SSH с помощью командной строки, выполните `ssh` с аргументом `-i`.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@HOSTNAME
```

Можно также указать закрытый ключ SSH с помощью файла конфигурации SSH (`~/.ssh/config`).

```shell
Host HOSTNAME
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## Доступ к административной оболочке с помощью локальной консоли

В чрезвычайных ситуациях, например, если протокол SSH недоступен, вы можете получить доступ к административной оболочке локально. Войдите в качестве пользователя `admin` и используйте пароль, установленный во время начальной настройки {% data variables.product.prodname_ghe_server %}.

## Ограничения доступа для административной оболочки

Доступ к административной оболочке разрешен только для устранения неполадок и выполнения документированных операций. Изменение файлов системы и приложений, запуск программ или установка неподдерживаемых пакетов программного обеспечения может привести к отмене контракта на поддержку. Если у вас есть вопрос о действиях, разрешенных контрактом на поддержку, обратитесь в {% data variables.contact.contact_ent_support %}.
