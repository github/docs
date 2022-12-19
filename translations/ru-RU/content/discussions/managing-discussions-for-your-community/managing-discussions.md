---
title: Управление обсуждениями
intro: 'Вы можете категоризировать, продвинуть, перенести или удалить обсуждения.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: e5e1474648973c90d16e8998db18518331233aa3
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164342'
---
## Сведения об управлении обсуждениями

{% data reusables.discussions.about-discussions %} Дополнительные сведения об обсуждениях см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

Владельцы организации могут выбрать разрешения, необходимые для создания обсуждений в принадлежащих ей репозиториях. Аналогичным образом, чтобы выбрать разрешения, необходимые для создания обсуждения организации, ее владельцы могут изменить разрешения, необходимые в исходном репозитории. Дополнительные сведения см. в разделе [Управление созданием обсуждений для репозиториев в организации](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).

Ответственный за обсуждения может создавать ресурсы сообщества, чтобы поощрять обсуждения в соответствии с общей целью проекта и поддерживать дружественную и открытую атмосферу для участников совместной работы. Выработка{% ifversion fpt or ghec %} правил поведения или{% endif %} руководящих принципов для участников совместной работы поможет поддерживать творческий настрой и дух сотрудничества. Дополнительные сведения о создании ресурсов сообщества см. в разделах{% ifversion fpt or ghec %} "[Добавление правил поведения в проект](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" и{% endif %} "[Создание рекомендаций для участников репозитория](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

Когда в результате обсуждения рождается идея или выявляется ошибка, готовая к обработке, можно создать проблему прямо из обсуждения. Дополнительные сведения см. в статье "[Создание проблемы](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)".

Обсуждение можно закрепить в верхней части списка обсуждений для репозитория или организации. {% ifversion discussions-category-specific-pins %} Вы также можете закрепить обсуждение в определенной категории. {% endif %} Дополнительные сведения см. в разделе [Закрепление обсуждения](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).

Дополнительные сведения о том, как поддерживать здоровую атмосферу во время обсуждений, см. в разделе [Модерация комментариев и бесед](/communities/moderating-comments-and-conversations).

{% data reusables.discussions.you-can-label-discussions %}

## Предварительные требования

Для управления обсуждениями в репозитории необходимо включить для него {% data variables.product.prodname_discussions %}. Дополнительные сведения см. в разделе [Включение или отключение {% data variables.product.prodname_discussions %} для репозитория](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository).

Для управления обсуждениями в организации необходимо включить для нее {% data variables.product.prodname_discussions %}. Дополнительные сведения см. в разделе [Включение или отключение {% data variables.product.prodname_discussions %} для организации](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Изменение категории обсуждения

Вы можете классифицировать обсуждения, чтобы помочь участникам сообщества находить обсуждения по теме. Дополнительные сведения см. в разделе [Управление категориями обсуждений](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

Обсуждение можно также перенести в другую категорию. Обсуждения нельзя переносить в категорию опросов и из нее.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели справа от элемента "Категория" щелкните {% octicon "gear" aria-label="The gear icon" %}.

   ![Снимок экрана: "Категория" со значком шестеренки](/assets/images/help/discussions/category-in-sidebar.png)

1. Щелкните категорию.

   ![Снимок экрана: раскрывающееся меню "Изменить категорию"](/assets/images/help/discussions/change-category-drop-down.png)

## Закрепление обсуждения

{% ifversion discussions-category-specific-pins %} Обсуждение можно закрепить над списком обсуждений для репозитория или организации. Вы также можете закрепить обсуждение в определенной категории. Глобально закрепленные обсуждения будут отображаться в дополнение к обсуждениям, закрепленным в определенной категории.

Это то, как это выглядит, если у вас есть глобально закрепленное обсуждение и обсуждение, закрепленное в категории Идеи.

![Снимок экрана: глобально закрепленное обсуждение и обсуждение, закрепленное в категории "Идеи"](/assets/images/help/discussions/overview-pinned-discussions.png)

### Глобальное закрепление обсуждения
{% endif %}

Вы можете закрепить до четырех важных обсуждений над списком обсуждений для репозитория или организации. 


{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "pin" aria-label="The pin icon" %} **Закрепить обсуждение**.
{% ifversion discussions-category-specific-pins %}

   ![Снимок экрана: параметр "Закрепить обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![Снимок экрана: параметр "Закрепить обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. При необходимости настройте внешний вид закрепленного обсуждения.

   ![Снимок экрана: параметры настройки закрепленного обсуждения](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Нажмите кнопку **Закрепить обсуждение**.

   ![Снимок экрана: кнопка "Закрепить обсуждение" в разделе параметров настройки закрепленного обсуждения](/assets/images/help/discussions/click-pin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Закрепление обсуждения в категории

Над списком обсуждений в определенной категории можно закрепить до четырех важных обсуждений. 

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "pin" aria-label="The pin icon" %} **Закрепить обсуждение в КАТЕГОРИИ**.
   
   ![Снимок экрана: параметр "Закрепить обсуждение в категории" на правой боковой панели для обсуждения](/assets/images/help/discussions/pin-discussion-to-category.png)

2. Чтобы подтвердить, щелкните **Закрепить в категории**.

   ![Снимок экрана: модальное сообщение "Закрепление обсуждения в категории"](/assets/images/help/discussions/pin-discussion-to-category-modal.png)

{% endif %}

## Редактирование закрепленного обсуждения

Изменение закрепленного обсуждения не приведет к изменению его категории. Дополнительные сведения см. в разделе [Управление категориями обсуждений](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "pencil" aria-label="The pencil icon" %} **Изменить закрепленное обсуждение**.
  {% ifversion discussions-category-specific-pins %}

   ![Снимок экрана: параметр "Изменить закрепленное обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png) {% else %}


   ![Снимок экрана: параметр "Изменить закрепленное обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-edit-pinned-discussion.png){% endif %}

1. Настройте внешний вид закрепленного обсуждения.

  ![Снимок экрана: параметры настройки закрепленного обсуждения](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Нажмите кнопку **Закрепить обсуждение**.

  ![Снимок экрана: кнопка "Закрепить обсуждение" в разделе параметров настройки закрепленного обсуждения](/assets/images/help/discussions/click-pin-discussion-button.png)

## Открепление обсуждения

{% ifversion discussions-category-specific-pins %}

Обсуждение можно открепить от списка обсуждений для репозитория или организации или из списка обсуждений в определенной категории.

### Открепление глобально закрепленного обсуждения

Вы можете открепить глобально закрепленное обсуждение. Это не приведет к удалению обсуждения, но оно больше не будет отображаться над списком обсуждений.
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "pin" aria-label="The pin icon" %} **Открепить обсуждение**.

  ![Снимок экрана: параметр "Открепить обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-unpin-discussion.png)

1. Прочтите предупреждение и нажмите кнопку **Открепить обсуждение**.

  ![Снимок экрана: кнопка "Открепить обсуждение" под предупреждением в модальном режиме](/assets/images/help/discussions/click-unpin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Открепление обсуждения от категории

Вы можете открепить обсуждение, закрепленное в определенной категории. Обсуждение не будет удалено, но оно больше не будет отображаться в верхней части категории.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "pin" aria-label="The pin icon" %} **Открепить обсуждение от этой категории**.

   ![Снимок экрана: параметр "Открепить обсуждение от этой категории" на правой боковой панели для обсуждения](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. Прочтите предупреждение, а затем щелкните **Открепить от этой категории**.

   ![Снимок экрана: кнопка "Открепить от этой категории" в модальном модальном разделе "Открепить это обсуждение от этой категории"](/assets/images/help/discussions/unpin-discussion-from-category-modal.png)

{% endif %}

## Перенос обсуждения

Для переноса обсуждения необходимо иметь разрешения на создание обсуждений в репозитории, в который требуется перенести обсуждение. Если вы хотите перенести обсуждение в организацию, необходимо иметь разрешения на создание обсуждений в исходном репозитории обсуждений организации. Обсуждения можно переносить только между репозиториями, принадлежащими одной учетной записи пользователя или организации. Вы не можете перенести обсуждение из закрытого репозитория{% ifversion ghec or ghes %} или внутреннего репозитория{% endif %} в общедоступный репозиторий.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "arrow-right" aria-label="The right arrow icon" %} {% ifversion discussions-category-specific-pins %}**Transfer this discussion**{% else %}**Transfer discussion**{% endif %}.
{% ifversion discussions-category-specific-pins %}

   ![Снимок экрана: параметр "Перенести обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

  
   ![Снимок экрана: параметр "Перенести обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. В раскрывающемся списке **Выберите репозиторий** выберите репозиторий, в который нужно перенести обсуждение. Если обсуждение нужно перенести в организацию, выберите исходный репозиторий обсуждений организации.

   ![Снимок экрана: раскрывающийся список "Выбор репозитория", поле поиска "Поиск репозитория" и репозиторий в списке](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)

1. Нажмите кнопку **Перенести обсуждение**.

   ![Снимок экрана: кнопка "Перенести обсуждение"](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Удаление обсуждения

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "trash" aria-label="The trash arrow icon" %} **Удалить обсуждение**.
{% ifversion discussions-category-specific-pins %}

   ![Снимок экрана: параметр "Удалить обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% else %}


   ![Снимок экрана: параметр "Удалить обсуждение" на правой боковой панели для обсуждения](/assets/images/help/discussions/click-delete-discussion.png){% endif %}

1. Прочтите предупреждение, а затем нажмите кнопку **Удалить это обсуждение**.

   ![Снимок экрана: кнопка "Удалить это обсуждение" под предупреждением в модальном режиме](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Преобразование проблем на основе меток

Все проблемы с одной и той же меткой можно преобразовать в обсуждения за один раз. Будущие проблемы с этой меткой также будут автоматически преобразовываться в обсуждения настроенной категории.

1. На {% data variables.location.product_location %} перейдите на главную страницу репозитория или( в обсуждениях организации) к исходному репозиторию.
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. Рядом с меткой, которую необходимо преобразовать в обсуждения, нажмите кнопку **Преобразовать проблемы**.
1. Выберите раскрывающееся меню **Выбор категории** и выберите категорию для обсуждения.
1. Щелкните **Я понимаю, преобразуйте эту проблему в обсуждение**.
