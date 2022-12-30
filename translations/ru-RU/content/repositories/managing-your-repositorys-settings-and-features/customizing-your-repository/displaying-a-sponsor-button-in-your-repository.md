---
title: Отображение кнопки спонсора в репозитории
intro: 'Вы можете добавить в репозиторий кнопку спонсора, чтобы повысить видимость вариантов финансирования для проекта разработки решений с открытым кодом.'
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558345'
---
## Сведения о файлах FUNDING

Вы можете настроить кнопку спонсора, изменив файл _FUNDING.yml_ в папке репозитория `.github` в ветви по умолчанию. Вы можете настроить кнопку для включения спонсируемых разработчиков в {% data variables.product.prodname_sponsors %}, платформ стороннего финансирования или пользовательского URL-адреса финансирования. Дополнительные сведения о {% data variables.product.prodname_sponsors %} см. в разделе [Сведения о GitHub Sponsors](/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

Вы можете добавить одно имя пользователя, имя пакета или имя проекта для каждой платформы внешнего финансирования и не более четырех пользовательских URL-адресов. Вы можете добавить одну организацию и до четырех спонсируемых разработчиков в {% data variables.product.prodname_sponsors %}. Добавьте каждую платформу в новую строку, используя следующий синтаксис:

Платформа | Синтаксис
-------- | -----
[LFX Mentorship (ранее — CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` или `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
Пользовательский URL-адрес | `custom: LINK1` или `custom: [LINK1, LINK2, LINK3, LINK4]`

Для Tidelift используйте синтаксис `platform-name/package-name` со следующими именами платформ:

Язык | Имя платформы
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Ниже приведен пример файла _FUNDING.yml_ :
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Примечание.** Если пользовательский URL-адрес в массиве содержит `:`, необходимо заключить URL-адрес в кавычки. Например, `"https://www.paypal.me/octocat"`.

{% endnote %}

Можно создать стандартную кнопку спонсора для организации или личной учетной записи. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% note %}

Ссылки на финансирование предоставляют возможность получать прямую финансовую поддержку для проектов с открытым исходным кодом от сообщества. Мы не поддерживаем использование ссылок на финансирование для других целей, таких как реклама или поддержка политических, социальных или благотворительных групп. Если у вас есть вопросы о том, поддерживается ли предполагаемое использование, обратитесь к {% data variables.contact.contact_support %}.

{% endnote %}

## Отображение кнопки спонсора в репозитории

Любой пользователь с разрешениями администратора может включить кнопку спонсора в репозитории.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Функции" выберите **Спонсорство**.
  ![Флажок для включения спонсорской поддержки](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. В разделе "Спонсорство" нажмите **кнопку "Настроить спонсора"** или **Переопределить ссылки для финансирования**.
  ![Кнопка для настройки кнопки спонсора](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. В редакторе файлов следуйте инструкциям в файле _FUNDING.yml_, чтобы добавить ссылки на расположения финансирования.
  ![Измените файл FUNDING для добавления ссылок на расположения финансирования](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Дополнительные материалы
- [Сведения о {% data variables.product.prodname_sponsors %} для участников разработки ПО с открытым кодом](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)
- [Вопросы и ответы о команде {% data variables.product.prodname_sponsors %} ](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/) для {% data variables.product.prodname_blog %}
