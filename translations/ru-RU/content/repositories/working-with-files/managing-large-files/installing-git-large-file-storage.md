---
title: Установка хранилища больших файлов Git
intro: 'Чтобы использовать {% data variables.large_files.product_name_short %}, необходимо загрузить и установить новую программу отдельно от Git.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: 8ac1ff43ad14e03fbbf1af0e56511aaf32535fbc
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008841'
---
{% mac %}

1. Перейдите на сайт [git-lfs.github.com](https://git-lfs.github.com) и нажмите кнопку **Скачать**. Кроме того, {% data variables.large_files.product_name_short %} можно установить с помощью диспетчера пакетов:
    - Чтобы использовать [Homebrew](http://brew.sh/), выполните команду `brew install git-lfs`.
    - Чтобы использовать [MacPorts](https://www.macports.org/), выполните команду `port install git-lfs`.

 Если вы устанавливаете {% data variables.large_files.product_name_short %} с помощью Homebrew или MacPorts, перейдите к шагу 6.

2. На компьютере найдите и распакуйте скачанный файл.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Измените текущий рабочий каталог на скачанную и распакованную папку.
  ```shell
  $ cd ~/Downloads/git-lfs-1.X.X
  ```
 {% note %}

 **Примечание.** Путь к файлу, который вы используете после `cd`, зависит от операционной системы, скачанной версии Git LFS и места сохранения скачанных файлов {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Чтобы установить файл, выполните следующую команду:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Примечание.** Для установки файла, возможно, потребуется использовать `sudo ./install.sh`.

 {% endnote %}
5. Проверьте, что установка выполнена:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Если сообщение об успешном выполнении `git {% data variables.large_files.command_name %} install` не отображается, обратитесь в {% data variables.contact.contact_support %}. Не забудьте указать имя операционной системы.

{% endmac %}

{% windows %}

1. Перейдите на сайт [git-lfs.github.com](https://git-lfs.github.com) и нажмите кнопку **Скачать**.

  {% tip %}

  **Совет.** Дополнительные сведения об альтернативных способах установки {% data variables.large_files.product_name_short %} для Windows см. в этом [руководстве по началу работы](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Найдите скачанный файл на компьютере.
3. Дважды щелкните файл с именем *git-lfs-windows-1.X.X.exe*, где 1.X.X заменяется скачанной версией Git LFS. При открытии этого файла в Windows запустится мастер установки для установки {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Проверьте, что установка выполнена:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Если сообщение об успешном выполнении `git {% data variables.large_files.command_name %} install` не отображается, обратитесь в {% data variables.contact.contact_support %}. Не забудьте указать имя операционной системы.

{% endwindows %}

{% linux %}

1. Перейдите на сайт [git-lfs.github.com](https://git-lfs.github.com) и нажмите кнопку **Скачать**.

  {% tip %}

  **Совет.** Дополнительные сведения об альтернативных способах установки {% data variables.large_files.product_name_short %} для Linux см. в этом [руководстве по началу работы](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. На компьютере найдите и распакуйте скачанный файл.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Измените текущий рабочий каталог на скачанную и распакованную папку.
  ```shell
  $ cd ~/Downloads/git-lfs-1.X.X
  ```
 {% note %}

 **Примечание.** Путь к файлу, который вы используете после `cd`, зависит от операционной системы, скачанной версии Git LFS и места сохранения скачанных файлов {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Чтобы установить файл, выполните следующую команду:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Примечание.** Для установки файла, возможно, потребуется использовать `sudo ./install.sh`.

 {% endnote %}
5. Проверьте, что установка выполнена:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Если сообщение об успешном выполнении `git {% data variables.large_files.command_name %} install` не отображается, обратитесь в {% data variables.contact.contact_support %}. Не забудьте указать имя операционной системы.

{% endlinux %}

## Дополнительные материалы

- [Настройка {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)
