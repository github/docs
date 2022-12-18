---
title: Управление файлом сведений о профиле
intro: 'Вы можете добавить файл сведений в свой профиль {% data variables.product.prodname_dotcom %}, чтобы рассказать другим людям о себе.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: f1f78d5aeff7212c2ea76bf9e8ae2248a269308e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094220'
---
## Сведения о файле сведений о профиле

Вы можете поделиться информацией о себе с сообществом на {% данных variables.location.product_location %}, создав профиль README. {% data variables.product.prodname_dotcom %} показывает файл сведений о вашем профиле в верхней части страницы профиля.

Вы решаете, какие сведения следует включить в файл сведений о профиле, поэтому вы самостоятельно определяете, как вы себя представите в {% data variables.product.prodname_dotcom %}. Ниже приведен ряд примеров информации, которую можно включить в файл сведений о вашем профиле, которая может быть интересной, увлекательной и полезной для посетителей.

- Раздел «Обо мне», описывающий вашу работу и интересы
- Вклады, которыми вы гордитесь, и условия, в которых вы сделали эти вклады.
- Руководство по получению помощи в сообществах, в работе которых вы участвуете

![Файл сведений о профиле, который отображается в профиле](/assets/images/help/repository/profile-with-readme.png)

Вы можете форматировать текст и включать эмодзи, изображения и GIF-файлы в профиле с помощью Flavored Markdown {% data variables.product.company_short %}. Дополнительные сведения см. в разделе [Начало работы с написанием и форматированием в {% vdata ariables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github). Практическое руководство по настройке профиля README см. в разделе "[Краткое руководство по написанию данных на {% variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)".

## Предварительные требования

GitHub будет отображать файл сведений о профиле на странице вашего профиля, если выполняются все указанные ниже действия.

- Вы создали репозиторий с именем, которое соответствует вашему имени пользователя {% data variables.product.prodname_dotcom %}.
- Репозиторий является общедоступным.
- В корневом каталоге репозитория содержится файл с именем README.md.
- Файл README.md может содержать любые данные.

{% note %}

**Примечание.** Если вы создали общедоступный репозиторий с таким же именем, что и ваше имя пользователя до июля 2020 года, {% data variables.product.prodname_dotcom %} не будет автоматически отображать файл сведений репозитория в вашем профиле. Вы можете вручную предоставить своему профилю общий доступ к файлу сведений репозитория, перейдя в репозиторий в {% data variables.product.prodname_dotcom_the_website %} и щелкнув **Предоставить общий доступ профилю**.

![Кнопка для предоставления профилю общего доступа к файл сведений](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## Удаление файла сведений о профиле

{% data reusables.repositories.create_new %}
2. В разделе «Имя репозитория» введите имя репозитория, которое соответствует вашему имени пользователя {% data variables.product.prodname_dotcom %}. Например, если имя пользователя — octocat, имя репозитория должно быть «octocat».
  ![Поле имени репозитория, соответствующее имени пользователя](/assets/images/help/repository/repo-username-match.png)
3. При необходимости добавьте описание репозитория. Например, «Мой личный репозиторий».
  ![Поле для ввода описания репозитория](/assets/images/help/repository/create-personal-repository-desc.png)
4. Щелкните **Общедоступный**.
 ![Переключатель для выбора состояния видимости; выбрано состояние «Общедоступный»](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Над правой боковой панелью щелкните **Изменить файл сведений**.
  ![Кнопка редактирования файла сведений](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  Созданный файл сведений предварительно заполняется данными из шаблона, чтобы предоставить вам подсказки и рекомендации по заполнению файла сведений.
  ![Файл сведений с предварительно заполненным шаблоном](/assets/images/help/repository/personal-repository-readme-template.png)

Сводка всех доступных эмодзи и их кодов см. в разделе [Краткий справочник по использованию эмодзи](https://www.webfx.com/tools/emoji-cheat-sheet/).

## Удаление файла сведения о профиле

Файл сведений о профиле удаляется из профиля {% data variables.product.prodname_dotcom %}, если выполняется какое-либо из следующих условий:

- Файл сведений пуст или не существует.
- Репозиторий является закрытым.
- Имя репозитория больше не соответствует имени пользователя.

Выбранный метод зависит от ваших потребностей, но если вы не уверены, рекомендуем сделать репозиторий закрытым. Инструкции по закрытию репозитория см. в разделе [Изменение видимости репозитория](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility).

## Дополнительные материалы

- [Сведения о файлах сведений](/github/creating-cloning-and-archiving-repositories/about-readmes)
