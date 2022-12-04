---
title: Классификация репозитория с помощью тем
intro: 'Чтобы помочь другим пользователям найти ваш проект и принять в нем участие, вы можете добавлять темы в репозиторий, связанные с целью проекта, его предметной областью, территориальными группами и другими важными качествами.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108889'
---
## Сведения о темах

С помощью тем можно исследовать репозитории в определенной предметной области, выполнять поиск проектов, в работе над которыми можно участвовать, и находить новые решения конкретной проблемы. Темы отображаются на главной странице репозитория. Вы можете щелкнуть имя темы, чтобы {% ifversion fpt or ghec %}просмотреть связанные темы и список других репозиториев, классифицированных с помощью этой темы{% else %}искать другие репозитории с этой темой{% endif %}.

![Главная страница репозитория тестов, отображающая темы](/assets/images/help/repository/os-repo-with-topics.png)

Чтобы просмотреть наиболее часто используемые темы, перейдите по адресу https://github.com/topics/.

{% ifversion fpt or ghec %}Вы можете принять участие в разработке набора рекомендуемых тем {% data variables.product.product_name %} в репозитории [github/explore](https://github.com/github/explore). {% endif %}

Администраторы репозитория могут добавлять в репозиторий любые темы. Полезными темами для классификации репозитория являются назначение, предметная область, сообщество или язык репозитория.{% ifversion fpt or ghec %} Кроме того, {% data variables.product.product_name %} анализирует содержимое общедоступного репозитория и создает предлагаемые темы, которые администраторы репозитория могут принимать или отклонять. Содержимое частного репозитория не анализируется, и предложения тем отсутствуют.{% endif %}

{% ifversion fpt %}Общедоступные и частные{% elsif ghec or ghes %}Общедоступные, частные и внутренние{% elsif ghae %}Частные и внутренние{% endif %} репозитории могут иметь темы, хотя в результатах поиска тем вы увидите только частные репозитории, к которым у вас есть доступ.

Вы можете выполнять поиск репозиториев, связанные с определенной темой. Дополнительные сведения см. в статье "[Поиск репозиториев](/search-github/searching-on-github/searching-for-repositories#search-by-topic)". Можно также выполнить поиск списка тем по {% data variables.product.product_name %}. Дополнительные сведения см. в статье "[Поиск тем](/search-github/searching-on-github/searching-topics)".

## Добавление тем в репозиторий

{% note %}

**Примечание:** Имена разделов всегда являются общедоступными, даже если вы создаете раздел из частного репозитория.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. Справа от элемента "Сведения" щелкните {% octicon "gear" aria-label="The Gear icon" %}.
  ![Значок шестеренки на главной странице репозитория](/assets/images/help/repository/edit-repository-details-gear.png)
3. В разделе "Темы" введите название темы, которую вы хотите добавить в репозиторий, а затем введите пробел.
  ![Форма для ввода тем](/assets/images/help/repository/add-topic-form.png)
4. Завершив добавление тем, нажмите кнопку **Сохранить изменения**.
  ![Кнопка "Сохранить изменения" в разделе "Изменение сведений о репозитории"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
