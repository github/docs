---
title: Создание репозитория
intro: 'Вы можете создать новый репозиторий в личной учетной записи или в любой организации, где у вас имеются достаточные разрешения.'
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136922'
---
{% tip %}

**Совет.** Владельцы могут ограничивать разрешения на создание репозиториев в организации. Дополнительные сведения см. в разделе [Ограничение создания репозиториев в организации](/articles/restricting-repository-creation-in-your-organization).

{% endtip %}

{% tip %}

**Совет**. Репозиторий легко можно создать, используя {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh repo create`](https://cli.github.com/manual/gh_repo_create) в документации по {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.create_new %}
2. Если вы хотите создать репозиторий со структурой каталогов и файлами существующего репозитория, щелкните раскрывающийся список **Выберите шаблон** и выберите репозиторий шаблонов. Вы увидите репозитории шаблонов, принадлежащие вам и организациям, в которых вы являетесь участником или которые вы ранее использовали. Дополнительные сведения см. в разделе [Создание репозитория из шаблона](/articles/creating-a-repository-from-a-template).
  ![Раскрывающееся меню шаблонов](/assets/images/help/repository/template-drop-down.png)
3. Если вы решили использовать шаблон, то, чтобы включить в него структуру каталогов и файлы из всех ветвей, а не только ветвь по умолчанию, установите флажок **Включить все ветви**.
    ![Флажок "Включить все ветви"](/assets/images/help/repository/include-all-branches.png)
3. В раскрывающемся меню "Владелец" выберите учетную запись, в которой вы хотите создать репозиторий.
   ![Раскрывающееся меню "Владелец"](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Если вы не используете шаблон, то для предварительного заполнения репозитория можно использовать несколько необязательных элементов. Если вы импортируете существующий репозиторий в {% data variables.product.product_name %}, не выбирайте ни один из этих параметров, так как может возникнуть конфликт слияния. Добавлять или создавать новые файлы можно через пользовательский интерфейс; кроме того, новые файлы можно добавить позднее с помощью командной строки. Дополнительные сведения см. в разделах [Импорт репозитория Git с помощью командной строки](/articles/importing-a-git-repository-using-the-command-line/), [Добавление файла в репозиторий](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) и [Устранение конфликтов слияния](/articles/addressing-merge-conflicts/).
    - Вы можете создать файл README — документ с описанием вашего проекта. Дополнительные сведения см. в статье [О файлах README](/articles/about-readmes/).
    - Вы можете создать файл *GITIGNORE* — набор правил пропуска. Дополнительные сведения см. в разделе [Пропуск файлов](/github/getting-started-with-github/ignoring-files).{% ifversion fpt or ghec %}
    - Вы можете добавить лицензию на программное обеспечение для проекта. Дополнительные сведения см. в разделе [Лицензирование репозитория](/articles/licensing-a-repository).{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. В нижней части итоговой страницы "Быстрая настройка" в разделе "Импорт кода из старого репозитория" можно импортировать проект в новый репозиторий. Для этого нажмите **Импорт кода**.
{% endif %}

## Дополнительные материалы

- [Управление доступом к репозиториям вашей организации](/articles/managing-access-to-your-organization-s-repositories)
- [Руководства по открытому коду](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
