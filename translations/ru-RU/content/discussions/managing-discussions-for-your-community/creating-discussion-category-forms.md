---
title: Создание форм категорий обсуждений
shortTitle: Create discussion category forms
intro: 'Вы можете настроить шаблоны, доступные участникам сообщества, чтобы они открывали новые обсуждения в репозитории.'
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193483'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Сведения о формах категорий обсуждений

Вы можете побудить участников сообщества включать конкретную структурированную информацию в свои обсуждения с помощью форм обсуждений в репозитории. С помощью форм категорий обсуждений можно создавать шаблоны обсуждений с настраиваемыми полями веб-форм. Формы обсуждений написаны в YAML с использованием схемы формы {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Синтаксис схемы формы {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema). 

{% data reusables.actions.learn-more-about-yaml %}

Чтобы использовать форму категории обсуждений в репозитории, необходимо создать новый файл и добавить его в папку  `/.github/DISCUSSION_TEMPLATE/` в репозитории. 

Вы также можете создать формы категорий обсуждений для своей организации. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

Формы категорий обсуждений не поддерживаются для опросов. Дополнительные сведения об опросах см. в разделе [Сведения об опросах](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls).

Ниже приведена преобразованная для просмотра версия формы проблем.

  ![Снимок экрана: отрисоченная форма категории обсуждения](/assets/images/help/discussions/discussion-category-form-sample.png)

## Создание форм категорий обсуждений

Люди с доступом на запись в репозиторий может создать форму категории обсуждения. 

1. Перейдите в репозиторий, в котором вы хотите создать форму категории обсуждения. 
2. В репозитории создайте файл с именем `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`, заменив `FORM-NAME` именем формы категории обсуждения. {% data reusables.discussions.discussion-category-forms-name %} Дополнительные сведения о создании новых файлов на GitHub см. в разделе [Создание новых файлов](/github/managing-files-in-a-repository/creating-new-files).
3. В тексте нового файла введите содержимое формы категории обсуждения. Дополнительные сведения см. в разделе [Синтаксис для форм категорий обсуждений](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms).
4. Зафиксируйте этот файл в ветви по умолчанию вашего репозитория. Дополнительные сведения см. в статье "[Создание файлов](/github/managing-files-in-a-repository/creating-new-files)".
