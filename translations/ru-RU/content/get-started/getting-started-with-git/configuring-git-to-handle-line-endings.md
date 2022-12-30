---
title: Настройка Git для обработки окончаний строк
intro: 'Чтобы избежать проблем в объектах diff, можно настроить Git для правильной обработки окончаний строк.'
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884208'
---
## Сведения об окончаниях строк
Каждый раз, когда вы нажимаете клавишу <kbd>ВВОД</kbd> на клавиатуре, вы вставляете в строку невидимый символ, называемый окончанием строки. Разные операционные системы обрабатывают окончания строк по-разному.

При совместной работе над проектами в Git и {% data variables.product.product_name %} Git может выдавать непредвиденные результаты, например, если вы работаете на компьютере Windows, а ваш коллега внес изменение в macOS.

Чтобы эффективно взаимодействовать с пользователями, использующими разные операционные системы, вы можете настроить обработку окончаний строк в Git.

## Глобальные параметры для окончаний строк

Команда `git config core.autocrlf` используется для изменения способа обработки окончаний строк в Git. Она принимает один аргумент.

{% mac %}

В macOS вы просто передаете в конфигурацию параметр `input`. Пример:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

В Windows вы просто передаете в конфигурацию параметр `true`. Пример:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

В Linux вы просто передаете в конфигурацию параметр `input`. Например:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## Параметры для отдельных репозиториев

При необходимости можно настроить файл *.gitattributes*, чтобы управлять тем, как Git считывает окончания строк в определенном репозитории. При фиксации этого файла в репозитории Git переопределяет параметр `core.autocrlf` для всех участников репозитория. Это гарантирует согласованное поведение для всех пользователей независимо от параметров и среды Git.

Файл *.gitattributes* должен быть создан в корне репозитория и зафиксирован так же, как и любой другой файл.

Файл *.gitattributes* представляет собой таблицу с двумя столбцами:

* В левом столбце содержатся имена файлов Git для сопоставления.
* В правом столбце содержатся конфигурации окончаний строк, которые Git должен использовать для соответствующих файлов.

### Пример

Ниже приведен пример файла *.gitattributes*. Его можно использовать в качестве шаблона для ваших репозиториев:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

Вы видите типы сопоставляемых файлов, разделенные пробелами (`*.c`, `*.sln`, `*.png`), после которых указывается параметр — `text`, `text eol=crlf`, `binary`. Мы рассмотрим некоторые возможные параметры ниже.

- `text=auto` Git будет обрабатывать файлы наилучшим образом. Это хороший вариант по умолчанию.

- `text eol=crlf` Git будет всегда преобразовывать окончания строк в `CRLF` при извлечении. Этот вариант следует использовать для файлов, которые должны поддерживать окончания `CRLF`, даже в OSX или Linux.

- `text eol=lf` Git будет всегда преобразовывать окончания строк в `LF` при извлечении. Этот вариант следует использовать для файлов, которые должны поддерживать окончания LF, даже в Windows.

- `binary` Git поймет, что указанные файлы не являются текстом и изменять их не следует. Параметр `binary` также является псевдонимом для `-text -diff`.

## Обновление репозитория после изменения окончаний строк

Если задать параметр `core.autocrlf` или зафиксировать файл *.gitattributes*, можно обнаружить, что Git сообщает об изменениях в файлах, которые вы не выполняли. Git изменил окончания строк в соответствии с новой конфигурацией.

Чтобы все окончания строк в репозитории соответствовали новой конфигурации, создайте резервную копию файлов с помощью Git, удалите все файлы в репозитории (кроме каталога `.git`), а затем восстановите все файлы одновременно.

1. Сохраните текущие файлы в Git, чтобы ваши изменения не были потеряны.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Добавьте все измененные файлы обратно и нормализуйте окончания строк.
  ```shell
  $ git add --renormalize .
  ```
3. Откройте перезаписанные, нормализованные файлы.
  ```shell
  $ git status
  ```
4. Зафиксируйте изменения в репозитории.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## Дополнительные материалы

- [Настройка Git — атрибуты Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) в книге Pro Git
- [git-config](https://git-scm.com/docs/git-config) на страницах руководств для Git
- [Начало работы — первая настройка Git](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) в книге Pro Git
- [Учитывайте окончания строк](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/), автор: [Тим Клем](https://github.com/tclem)
