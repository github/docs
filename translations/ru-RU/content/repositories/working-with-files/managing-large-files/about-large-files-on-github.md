---
title: Сведения о больших файлах на GitHub
intro: '{% data variables.product.product_name %} ограничивает размер файлов, которые можно отслеживать в обычных репозиториях Git. Узнайте, как отслеживать или удалять файлы, выходящие за пределы лимита.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: 9e047ab3b237ced16c48cd6174b72bd48db7cffa
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094548'
---
## Сведения об ограничениях размера на {% data variables.product.product_name %}

{% ifversion fpt or ghec %} {% data variables.product.product_name %} пытается выделить достаточно места для хранения всех репозиториев GIT, но в отношении размеров файлов и репозиториев действуют жесткие ограничения. Чтобы обеспечить производительность и надежность для пользователей, мы активно отслеживаем общую работоспособность репозиториев. Работоспособность репозитория зависит от совокупности различных взаимосвязанных факторов, включая размер, частоту фиксации, содержимое и структуру.

### Ограничения размера файла
{% endif %}

На {% data variables.product.product_name %} допустимый размер файлов в репозиториях ограничен. При попытке добавить файл размером более {% data variables.large_files.warning_size %} или увеличить существующий файл сверх этого размера GIT выдаст предупреждение. Изменения будут успешно отправлены в репозиторий, но, возможно, будет лучше удалить фиксацию, чтобы свести к минимуму влияние на производительность. Дополнительные сведения см. в разделе [Удаление файлов из журнала репозитория](#removing-files-from-a-repositorys-history).

{% note %}

**Примечание**. Размер файла, добавляемого в репозиторий через браузер, не может превышать {% data variables.large_files.max_github_browser_size %}. Дополнительные сведения см. в разделе [Добавление файла в репозиторий](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

{% endnote %}

{% ifversion ghes %} По умолчанию {% endif %}{% данных variables.product.product_name %} блокирует файлы размером с {% variables.large_files.max_github_size %}. {% ifversion ghes %} Однако администратор сайта может настроить другое ограничение для {% данных variables.location.product_location %}.  Дополнительные сведения см. в разделе [Настройка ограничений на отправку в GIT](/enterprise/admin/guides/installation/setting-git-push-limits).{% endif %}

Для отслеживания файлов размером более этого предела необходимо использовать {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Дополнительные сведения см. в разделе [Сведения о {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

Если вам нужно распространять большие файлы в репозитории, можно создавать выпуски на {% данных variables.location.product_location %} вместо отслеживания файлов. Дополнительные сведения см. в разделе [Распространение больших двоичных файлов](#distributing-large-binaries).

В GIT не предусмотрена обработка больших файлов SQL. Для совместной работы с большими базами данных с другими разработчиками рекомендуется использовать [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec or ghae %}
### Ограничения на размер репозиториев

Рекомендуется, чтобы репозитории оставались небольшими, в идеале менее 1 ГБ, и крайне нежелательно, чтобы их размер превышал 5 ГБ. {% ifversion ghae %} Максимальный размер репозитория на {% данных variables.product.product_name %} составляет 100 ГБ. {% endif %} Небольшие репозитории быстрее клонируются и проще работать с ними и поддерживать их. Если ваш репозиторий чрезмерно влияет на нашу инфраструктуру, вы можете получить сообщение электронной почты от {% data variables.contact.github_support %} с просьбой принять корректирующие меры. Мы стараемся находить гибкий подход, особенно в случае с крупными проектами со множеством участников совместной работы. По возможности мы попробуем вместе с вами найти решение. Вы можете предотвратить воздействие репозитория на нашу инфраструктуру, эффективно управляя его размером и общей работоспособностью. Советы и средство для анализа репозиториев можно найти в репозитории [`github/git-sizer`](https://github.com/github/git-sizer).

Из-за внешних зависимостей репозитории GIT могут стать очень большими. Чтобы избежать заполнения репозитория внешними зависимостями, рекомендуется использовать диспетчер пакетов. К популярным диспетчерам пакетов для распространенных языков относятся [Bundler](http://bundler.io/), [диспетчер пакетов Node](http://npmjs.org/) и [Maven](http://maven.apache.org/). Эти диспетчеры пакетов поддерживают работу с репозиториями GIT напрямую, поэтому предварительно упакованные источники не нужны.

GIT не предназначен для использования в качестве средства резервного копирования. Однако существует множество решений, специально предназначенных для создания резервных копий, такие как [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) и [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Удаление файлов из журнала репозитория

{% warning %}

**Предупреждение.** Эти процедуры окончательно удаляют файлы из репозитория на компьютере и {% данных variables.location.product_location %}. Если файл важен, создайте его локальную резервную копию в каталоге за пределами репозитория.

{% endwarning %}

### Удаление файла, добавленного в рамках последней неотправленной фиксации

Если файл был добавлен с последней фиксацией и вы не отправлены в {% данных variables.location.product_location %}, вы можете удалить файл и изменить фиксацию:

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Чтобы удалить файл, введите команду `git rm --cached`:
  ```shell
  $ git rm --cached GIANT_FILE
  # Stage our giant file for removal, but leave it on disk
  ```
4. Зафиксируйте это изменение с помощью параметров `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Отправьте фиксации в {% данных variables.location.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Удаление файла, добавленного в рамках более ранней фиксации

Если вы добавили файл в рамках предыдущей фиксации, его необходимо удалить из журнала репозитория. Чтобы удалить файлы из журнала репозитория, можно использовать BFG Repo-Cleaner или команду `git filter-branch`. Дополнительные сведения см. в разделе [Удаление конфиденциальных данных из репозитория](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).

## Распространение больших двоичных файлов

Если вам нужно распространять большие файлы в репозитории, можно создавать выпуски на {% данных variables.location.product_location %}. Выпуски позволяют упаковывать программное обеспечение, заметки о выпуске и ссылки на двоичные файлы для использования другими людьми. Дополнительные сведения см. в разделе [Сведения о выпусках](/github/administering-a-repository/about-releases).

{% ifversion fpt or ghec %}

Мы не ограничиваем общий размер двоичных файлов в выпуске или пропускную способность для их доставки. Однако каждый отдельный файл должен быть меньше {% data variables.large_files.max_lfs_size %}.

{% endif %}

