---
title: Создание среды обработчика предварительного получения
intro: 'Чтобы выполнить перехватчики предварительного получения, используйте среду предварительного получения по умолчанию или создайте настраиваемую среду.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116368'
---
Среда предварительного получения для {% data variables.product.prodname_ghe_server %} — это среда Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot). Так как перехватчики предварительного получения выполняются при каждом событии отправки, они должны быть быстрыми и легкими. Среда, необходимая для таких проверок, обычно будет минимальной.

{% data variables.product.prodname_ghe_server %} предоставляет среду по умолчанию, которая включает следующие пакеты: `awk`,  `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

Если у вас есть определенное требование, которое не удовлетворяется данной средой, например поддержка определенного языка, вы можете создать и отправить собственную 64-разрядную среду Linux `chroot`.

## Создание среды обработчика предварительного получения с помощью Docker

Для создания среды обработчика предварительного получения можно использовать средство управления контейнерами Linux. В этом примере используется [Alpine Linux](http://www.alpinelinux.org/) и [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Создайте файл `Dockerfile.alpine-3.3`, содержащий следующие сведения:

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. Из рабочего каталога, содержащего `Dockerfile.alpine-3.3`, создайте образ:

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. Создание контейнера:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Экспортируйте контейнер Docker в сжатый файл `gzip``tar`:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   Этот файл `alpine-3.3.tar.gz` готов к отправке на устройство {% data variables.product.prodname_ghe_server %}.

## Создание среды обработчика предварительного получения с помощью chroot

1. Создайте среду Linux `chroot`.
2. Создайте сжатый файл `gzip``tar` каталога `chroot`.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **Примечания.**
   - Не включайте ведущие пути к каталогам файлов в архив tar, например `/path/to/chroot`.
   - `/bin/sh` должен существовать и быть исполняемым как точка входа в среду chroot.
   - В отличие от традиционных chroot, каталог `dev` не требуется средой chroot для перехватчиков предварительного получения.

   {% endnote %}

Дополнительные сведения о создании среды chroot см. в разделе [Chroot](https://wiki.debian.org/chroot) на *вики-сайте Debian*, [BasicChroot](https://help.ubuntu.com/community/BasicChroot) *на справочном вики-сайте сообщества Ubuntu* или [Установка Alpine Linux в chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot) на *вики-сайте Alpine Linux*.

## Отправка среды обработчика предварительного получения на {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Щелкните **Управление средами**.
![Управление средами](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Щелкните **Добавить среду**.
![Добавить среду](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Введите нужное имя в поле **Имя среды**.
![Имя среды](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Введите URL-адрес файла `*.tar.gz`, содержащего среду.
![Отправка среды из URL-адреса](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Щелкните **Добавить среду**.
![Кнопка "Добавить среду"](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## Отправка среды перехватчика предварительного получения с помощью административной оболочки
1. Отправьте доступный для чтения файл `*.tar.gz`, содержащий среду, на веб-узел и скопируйте URL-адрес или перенесите файл на устройство {% data variables.product.prodname_ghe_server %} через `scp`. При использовании `scp` может потребоваться настроить разрешения файла `*.tar.gz` таким образом, чтобы файл был доступен для чтения.
1.  Подключение к административной оболочке.
2.  Используйте команду `ghe-hook-env-create` и введите имя среды в качестве первого аргумента, а также полный локальный путь или URL-адрес файла `*.tar.gz`, содержащего среду, в качестве второго аргумента.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
