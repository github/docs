---
title: Создание файла работоспособности сообщества по умолчанию.
intro: 'Вы можете создать файлы работоспособности сообщества по умолчанию, такие как CONTRIBUTING и CODE_OF_CONDUCT. Файлы по умолчанию будут использоваться для любого репозитория, принадлежащего учетной записи, который не содержит собственный файл такого рода.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 85a672d0cc0991a5325df8a107737da47c7b81d3
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193632'
---
## Сведения о файлах работоспособности сообщества по умолчанию

Файлы работоспособности сообщества по умолчанию можно добавить в общедоступный репозиторий `.github` в корневой каталог репозитория или в папки `docs` или`.github`.

{% data variables.product.product_name %} будет использовать и отображать файлы по умолчанию для любого репозитория, принадлежащего учетной записи, которая не имеет собственного файла этого типа, в любом из следующих мест.
- Корень репозитория
- Папка `.github`
- Папка `docs`

Например, любой пользователь, создающий проблему или запрос на вытягивание в репозитории, у которого нет собственного файла CONTRIBUTING, увидит ссылку на файл CONTRIBUTING по умолчанию. Если в репозитории есть файлы в собственной папке `.github/ISSUE_TEMPLATE`{% ifversion fpt or ghes or ghec %}, включая шаблоны проблем или файл *config.yml*,{% endif %} содержимое папки по умолчанию `.github/ISSUE_TEMPLATE` использоваться не будет.

Файлы по умолчанию не включаются в клоны, пакеты или скачивания отдельных репозиториев, так как они хранятся только в репозитории `.github`.

## Поддерживаемые типы файлов

Вы можете создать заданные по умолчанию сведения в вашей организации{% ifversion fpt or ghes or ghec %} или личной учетной записи {% endif %} для следующих файлов работоспособности сообщества:

Файл работоспособности сообщества | Описание --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | Файл CODE_OF_CONDUCT определяет стандарты участия в деятельности сообщества. Дополнительные сведения см. в статье "[Добавление правил поведения в проект](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %} *CONTRIBUTING.md |* Файл CONTRIBUTEING содержит сведения о том, как люди должны участвовать в разработке проекта. Дополнительные сведения см. в разделе [Настройка рекомендаций для участников репозитория](/articles/setting-guidelines-for-repository-contributors/). {% ifversion discussion-category-forms %} Формы категорий обсуждений | Формы категорий обсуждений настраивают шаблоны, доступные участникам сообщества при открытии новых обсуждений в репозитории. Дополнительные сведения см. в разделе [Создание форм категорий обсуждений](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms). {% endif %} {% ifversion fpt or ghec %} *FUNDING.yml* | В файле FUNDING в репозитории отображается кнопка спонсора, чтобы повысить видимость вариантов финансирования для проекта открытый код. Дополнительные сведения см. в статье "[Отображение кнопки спонсора в репозитории](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %} Шаблоны проблем и запросов на вытягивание{% ifversion fpt or ghes or ghec %} и *config.yml*{% endif %} | Шаблоны проблем и запросов на вытягивание позволяют настраивать и стандартизовать сведения, которые участники должны указывать при открытии проблем и запросов на вытягивание в репозитории. Дополнительные сведения см. в статье "[Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates/)".{% ifversion fpt or ghes or ghec %} *SECURITY.md |* Файл SECURITY содержит инструкции по отправке сведений об уязвимости системы безопасности в проекте. Дополнительные сведения см. в статье "[Добавление политики безопасности в репозиторий](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %} *SUPPORT.md |* Файл SUPPORT содержит сведения о способах получения помощи по проекту. Дополнительные сведения см. в статье "[Добавление ресурсов поддержки в проект](/articles/adding-support-resources-to-your-project/)".

Создать файл лицензии по умолчанию невозможно. Файлы лицензий должны быть добавлены в отдельные репозитории, чтобы файл включался при клонировании, упаковке или скачивании проекта.

## Создание репозитория для файлов по умолчанию

{% data reusables.repositories.create_new %}
2. В раскрывающемся меню **Владелец** выберите организацию{% ifversion fpt or ghes or ghec %} или личную учетную запись{% endif %}, для которой нужно создать файлы по умолчанию.
  ![Раскрывающееся меню "Владелец"](/assets/images/help/repository/create-repository-owner.png)
3. Введите **.github** в качестве имени репозитория и необязательное описание.
  ![Поле создания репозитория](/assets/images/help/repository/default-file-repository-name.png)
4. Убедитесь, что для состояния репозитория задано значение **Общедоступный** (репозиторий для файлов по умолчанию не может быть частным).
  ![Переключатели для выбора состояния: частный или общедоступный](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. В репозитории создайте один из поддерживаемых файлов работоспособности сообщества. Шаблоны проблем{% ifversion fpt or ghes or ghec %} и их файл конфигурации{% endif %} должны находиться в папке с именем `.github/ISSUE_TEMPLATE`. Все остальные поддерживаемые файлы могут находиться в корне репозитория, папке `.github` или папке `docs`. Дополнительные сведения см. в статье "[Создание файлов](/articles/creating-new-files/)".
