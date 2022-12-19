---
title: Просмотр файла
intro: 'Вы можете просмотреть содержимое необработанного файла или отследить изменения строк в файле и узнать, как части файла изменялись с течением времени.'
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179862'
---
## Просмотр или копирование содержимого необработанного файла

С помощью необработанного представления можно просматривать или копировать содержимое необработанного файла без стиля.

{% data reusables.repositories.navigate-to-repo %}
1. Выберите файл, который нужно просмотреть.
2. В правом верхнем углу представления файла щелкните **Необработанный**.
![Снимок экрана: кнопка "Необработанный" в заголовке файла](/assets/images/help/repository/raw-file-button.png)
3. При необходимости, чтобы скопировать необработанное содержимое файла, в правом верхнем углу представления файла щелкните **{% octicon "copy" aria-label="The copy icon" %}** .

## Просмотр истории версий файла по строкам

С помощью представления blame можно просматривать историю версий всего файла по строкам или просмотреть историю версий одной строки файла, щелкнув {% octicon "versions" aria-label="The prior blame icon" %}. При каждом щелчке {% octicon "versions" aria-label="The prior blame icon" %} будет отображаться информация о предыдущих версиях этой строки, включая автора версии и время ее фиксации.

![Представление Git blame](/assets/images/help/repository/git_blame.png)

В файле или запросе на вытягивание можно также использовать меню {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}, чтобы просмотреть Git blame для выбранной строки или диапазона строк.

![Меню в виде многоточия с параметром просмотра Git blame для выбранной строки](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Совет.** В командной строке также можно использовать `git blame` для просмотра истории версий строк файла. Дополнительные сведения см. в [документации по Git `git blame`](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Нажмите и откройте файл, журнал строк которого нужно просмотреть.
3. В правом верхнем углу представления файла щелкните **Blame** для открытия представления blame.
![Кнопка "Blame"](/assets/images/help/repository/blame-button.png)
4. Чтобы просмотреть более ранние версии определенной строки или повторно использовать blame, щелкайте {% octicon "versions" aria-label="The prior blame icon" %}, пока не найдете нужные изменения.
![Кнопка "Предыдущий blame"](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Игнорирование фиксаций в представлении blame

Все версии, указанные в файле `.git-blame-ignore-revs`, которые должны находиться в корневом каталоге репозитория, скрыты из представления blame с помощью параметра конфигурации `git blame --ignore-revs-file` Git. Дополнительные сведения см. в разделе [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) документации.

1. В корневом каталоге вашего репозитория создайте файл с именем `.git-blame-ignore-revs`.
2. Добавьте хэши фиксации, которые нужно исключить из представления blame для этого файла. Мы рекомендуем структурировать файл следующим образом, включая комментарии:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Зафиксируйте и отправьте изменения.

Теперь при посещении представления blame перечисленные версии не будут включены в blame. Вы увидите баннер **Игнорирование версий в .git-blame-ignore-revs**, который означает, что некоторые фиксации могут быть скрыты:

![Снимок экрана: баннер в представлении blame со ссылкой на файл .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Это может быть полезно, если несколько фиксаций вносят значительные изменения в код. Файл можно также использовать при локальном выполнении `git blame`:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

Вы также можете настроить локальный Git так, чтобы он всегда пропускал обновления в этом файле:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## `.git-blame-ignore-revs` Обход в представлении "Виноват"

Если в представлении вины для файла отображается **игнорирование исправлений в .git-blame-ignore-revs, вы по-прежнему** можете обходить `.git-blame-ignore-revs` и просматривать обычное представление об ошибке. В URL-адресе добавьте `~` к SHA, и **игнорирование редакций в .git-blame-ignore-revs** исчезнет.
