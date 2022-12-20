---
title: Импорт репозитория с помощью GitHub Importer
intro: 'Если проект размещен в другой системе управления версиями, можно автоматически импортировать его в GitHub с помощью средства GitHub Importer.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 8fa7e98593167d8285f9c051b8744731090e6804
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098567'
---
{% tip %}

**Совет.** GitHub Importer может использоваться не для всех операций импорта. Например, если существующий код размещен в частной сети, то этот инструмент не сможет получить доступ к этому коду. В этих случаях рекомендуется [выполнить импорт с помощью командной строки](/articles/importing-a-git-repository-using-the-command-line) для репозиториев Git или с помощью внешнего [средства миграции исходного кода](/articles/source-code-migration-tools) для проектов, импортированных из других систем управления версиями.

{% endtip %}

Если вы хотите сопоставить фиксации в репозитории с личными учетными записями GitHub авторов во время импорта, перед началом импорта убедитесь, что у каждого участника репозитория есть учетная запись GitHub.

{% data reusables.repositories.repo-size-limit %}

1. В правом верхнем углу любой страницы щелкните {% octicon "plus" aria-label="Plus symbol" %} и выберите **Импортировать репозиторий**.
![Пункт "Импортировать репозиторий" в меню нового репозитория](/assets/images/help/importer/import-repository.png)
2. В поле "URL-адрес клона старого репозитория" введите URL-адрес проекта, который вы хотите импортировать.
![Текстовое поле для URL-адреса импортированного репозитория](/assets/images/help/importer/import-url.png)
3. Выберите личную учетную запись или организацию, которым принадлежит репозиторий, а затем введите имя репозитория в GitHub.
![Меню владельца репозитория и поле имени репозитория](/assets/images/help/importer/import-repo-owner-name.png)
4. Укажите, должен ли новый репозиторий быть *общедоступным* или *частным*. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/articles/setting-repository-visibility).
![Переключатели для общедоступного и частного репозитория](/assets/images/help/importer/import-public-or-private.png)
5. Просмотрите введенные сведения и нажмите кнопку **Начать импорт**.
![Кнопка "Начать импорт"](/assets/images/help/importer/begin-import-button.png)
6. Если для доступа к старому проекту требуется ввести учетные данные, введите данные для входа для этого проекта и нажмите кнопку **Отправить**. Если для учетной записи пользователя в старом проекте включен единый вход SAML или 2FA, введите {% данных variables.product.pat_generic %} с разрешениями на чтение репозитория в поле "Пароль" вместо пароля.
![Форма ввода пароля и кнопка "Отправить" для проекта, защищенного паролем](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Если по URL-адресу клонирования старого проекта размещено несколько проектов, выберите проект, который вы хотите импортировать, а затем нажмите кнопку **Отправить**.
![Список проектов для импорта и кнопка "Отправить"](/assets/images/help/importer/choose-project-importer.png)
8. Если проект содержит файлы размером более 100 МБ, выберите, следует ли импортировать большие файлы с помощью [Git Large File Storage](/articles/versioning-large-files), а затем нажмите кнопку **Продолжить**.
![Меню Git Large File Storage и кнопка "Продолжить"](/assets/images/help/importer/select-gitlfs-importer.png)

После окончания импорта вы получите уведомление по электронной почте.

## Дополнительные материалы

- [Обновление атрибута автора фиксации с помощью GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer)
