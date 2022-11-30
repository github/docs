---
title: Создание шаблона запроса на вытягивание для репозитория
intro: 'Когда вы добавите шаблон запроса на вытягивание в репозиторий, участники проекта автоматически увидят содержимое шаблона в тексте запроса на вытягивание.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: 2a85c88944f1d46209429846bba1e7a3c930968e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092341'
---
Дополнительные сведения см. в статье "[Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates).

Можно создать подкаталог *PULL_REQUEST_TEMPLATE/* в любой из поддерживаемых папок, чтобы он содержал шаблоны для нескольких запросов на вытягивание, и использовать параметр запроса `template`, чтобы указать шаблон, который будет заполнять текст запроса на вытягивание. Дополнительные сведения см. в разделе [Использование параметров запроса для создания запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request).

{% ifversion fpt or ghes or ghec %}

Можно создать шаблоны запроса на вытягивание по умолчанию для организации{% ifversion fpt or ghes or ghec %} или личной учетной записи{% endif %}. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Добавление шаблона запроса на вытягивание

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла:
    -  Чтобы сделать шаблон запроса на вытягивание видимым в корневом каталоге репозитория, присвойте шаблону запроса на вытягивание имя `pull_request_template.md`.
  ![Имя нового шаблона запроса на вытягивание в корневом каталоге](/assets/images/help/repository/pr-template-file-name.png)
    - Чтобы сделать шаблон запроса на вытягивание видимым в каталоге `docs` репозитория, присвойте шаблону запроса на вытягивание имя `docs/pull_request_template.md`.
  ![Шаблон нового запроса на вытягивание в каталоге документации](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Чтобы сохранить файл в скрытом каталоге, присвойте шаблону запроса на вытягивание имя `.github/pull_request_template.md`.
  ![Шаблон нового запроса на вытягивание в скрытом каталоге](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Чтобы создать шаблоны для нескольких запросов на вытягивание и использовать параметр запроса `template`, чтобы указать шаблон для заполнения текста проблемы, введите *.github/PULL_REQUEST_TEMPLATE/* , а затем имя шаблона запроса на вытягивание. Например, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Можно также хранить шаблоны для нескольких запросов на вытягивание в подкаталоге `PULL_REQUEST_TEMPLATE`, в корне или каталогах `docs/`. Дополнительную информацию см. в разделе [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).
  ![Шаблон для нескольких новых запросов на вытягивание в скрытом каталоге](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. Добавьте шаблон запроса на вытягивание в текст нового файла. Это может быть:
    - [ссылка на связанную проблему](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) в репозитории;
    - описание изменений, предлагаемых в запросе на вытягивание;
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) пользователя или команды, ответственной за проверку предлагаемых изменений.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Шаблоны доступны участникам совместной работы при их слиянии в ветвь репозитория по умолчанию.
{% data reusables.files.propose_new_file %}

## Дополнительные материалы

- [Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates)
- [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Создание запроса на вытягивание](/articles/creating-a-pull-request)
