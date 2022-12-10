---
title: Настройка параметров GitHub Copilot в организации
intro: 'Вы можете настроить {% data variables.product.prodname_copilot %} в организации, включая предоставление и отзыв доступа для отдельных лиц и команд, а также определение того, следует ли блокировать предложения, соответствующие общедоступному коду.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193568'
---
## Сведения о параметрах {% data variables.product.prodname_copilot %} в организации

{% data reusables.copilot.about-copilot %}

Чтобы настроить использование {% data variables.product.prodname_copilot %} в вашей организации, организация должна принадлежать учетной записи {% data variables.product.prodname_ghe_cloud %}, а администратор предприятия должен сначала включить {% data variables.product.prodname_copilot_business_short %} для вашей организации. После этого администраторы организации смогут управлять назначением рабочих мест в организации. 

В зависимости от параметров политики, настроенных на уровне предприятия, администратор организации также может определить, следует ли разрешать или блокировать предложения {% data variables.product.prodname_copilot %}, соответствующие общедоступному коду. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_copilot %} на предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise).

## Настройка доступа к {% data variables.product.prodname_copilot %} в организации

После того как администратор {% data variables.product.prodname_ghe_cloud %} включит подписку на {% data variables.product.prodname_copilot_business_short %} в вашей организации, вы можете назначить {% data variables.product.prodname_copilot %} рабочие места отдельным лицам и командам в вашей организации.

### Предоставление доступа к {% data variables.product.prodname_copilot %} для всех текущих и будущих пользователей в организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование кода и автоматизация" на боковой панели щелкните **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, а затем щелкните **Доступ**.
1. В разделе "Разрешения пользователя", чтобы включить {% data variables.product.prodname_copilot %} для всех текущих и будущих пользователей в вашей организации, выберите **Разрешить для всех участников**.

   ![Снимок экрана: разрешения пользователя {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/allow-all-members.png)

1. Чтобы подтвердить включение {% data variables.product.prodname_copilot %} для всех текущих и будущих пользователей в организации, в диалоговом окне Подтверждение назначения рабочих мест нажмите кнопку **Подтвердить**.

   ![Снимок экрана: диалоговое окно подтверждения назначения места](/assets/images/help/copilot/confirm-seat-assignment.png)

1. Нажмите кнопку **Сохранить**, чтобы сохранить изменения.

   ![Снимок экрана: кнопка сохранения разрешений пользователя {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/user-permissions-save.png)

### Предоставление доступа к {% data variables.product.prodname_copilot %} для определенных пользователей в организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование кода и автоматизация" на боковой панели щелкните **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, а затем щелкните **Доступ**.
1. В разделе "Разрешения пользователя", чтобы включить {% data variables.product.prodname_copilot %} для выбранных команд или пользователей в вашей организации, выберите **Выбранные команды/пользователи** и нажмите кнопку **Сохранить**.

   ![Снимок экрана: выбранные разрешения пользователей и команд {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

1. Если вы обновляете доступ пользователей с помощью параметра **Разрешить для всех участников** , в диалоговом окне "Подтверждение назначения места" выберите способ назначения доступа.
    - Чтобы отменить назначение всех участников и выбрать тех, у кого должен быть доступ, выберите **Начать с нуля**.
    - Чтобы оставить всех участников, у которых в настоящее время есть доступ, а затем выбрать тех, у кого нет доступа, выберите **Сохранить всех пользователей**.

      ![Снимок экрана: диалоговое окно подтверждения назначения места](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. Если вы выбрали **Начать с нуля**, щелкните **Добавить людей** или **Добавить команды** , чтобы добавить отдельных пользователей или целые команды.

   ![Снимок экрана: кнопка "Добавить пользователей" или "Добавить команды"](/assets/images/help/copilot/add-people-add-teams.png)

1. Если вы выбрали **Добавить пользователей**, в диалоговом окне "Включить доступ GitHub Copilot для выбранных участников ОРГАНИЗАЦИИ" можно либо искать отдельных участников, либо добавлять участников массово, отправив CSV-файл.
 
   ![Снимок экрана: диалоговое окно "Включить доступ для выбранных участников"](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - Чтобы найти участников, введите имя пользователя, полное имя или адрес электронной почты в строке поиска.
    - Чтобы массово добавить участников, щелкните **Отправить CSV-файл**, а затем отправьте CSV-файл, включающий имя пользователя или адрес электронной почты для каждого участника, который вы хотите добавить, разделенный запятой.

        {% warning %}

      **Предупреждение:** При отправке CSV-файла {% data variables.product.prodname_copilot %} будет искать совпадения у всех пользователей в {% data variables.product.prodname_dotcom_the_website %}. Если csv-файл включает пользователей, которые не являются членами вашей организации, они будут приглашены присоединиться к вашей организации при нажатии кнопки **Добавить участников XX**.

      {% endwarning %}

    - Просмотрите список пользователей, созданных из CSV-файла. Чтобы подтвердить, что вы хотите предоставить доступ перечисленным пользователям, нажмите кнопку **Добавить участников XX для доступа к списку** или, чтобы отклонить список, нажмите кнопку **Отмена**.

     ![Снимок экрана: результаты csv-списка](/assets/images/help/copilot/csv-results.png)

1. Если вы выбрали **Добавить команды**, в диалоговом окне "Включить доступ GitHub Copilot для выбранных команд организации" начните вводить имя команды в строке поиска, выберите команду, которую вы хотите добавить, и щелкните **Выбрать команду выше**.

   ![Снимок экрана: диалоговое окно "Включить доступ для выбранных команд"](/assets/images/help/copilot/add-teams.png)

1. Если вы выбрали **Параметр Сохранить всех пользователей**, просмотрите полный список участников вашей организации и выберите пользователей, доступ к {% data variables.product.prodname_copilot %} которого вы хотите отменить.

   ![Снимок экрана: список "Сохранить всех пользователей"](/assets/images/help/copilot/access-removal-list.png)

1. Щелкните **раскрывающийся список Выбранные элементы XX** и нажмите кнопку **Удалить**.

   ![Снимок экрана: кнопка "Удалить доступ"](/assets/images/help/copilot/remove-access.png)

### Отключение доступа к {% data variables.product.prodname_copilot %} для всей организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование кода и автоматизация" на боковой панели щелкните **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, а затем щелкните **Доступ**.
1. В разделе "Разрешения пользователя", чтобы отключить {% data variables.product.prodname_copilot %} для всех пользователей в организации, выберите **Отключено**.

   ![Снимок экрана: отключенные разрешения пользователя {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/disable-access.png)

1. Нажмите кнопку **Сохранить**, чтобы сохранить изменения.
   
   ![Снимок экрана: кнопка сохранения разрешений пользователя {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-disabled.png)

### Отключение доступа к {% data variables.product.prodname_copilot %} для определенных пользователей в организации

Удаление пользователя из организаций, которым было назначено рабочее место {% data variables.product.prodname_copilot %}, автоматически отменит назначение этого места. Кроме того, можно отменить назначение места {% data variables.product.prodname_copilot %} участника, сохранив при этом его членство. Эти изменения вступают в силу с начала следующего цикла выставления счетов.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование кода и автоматизация" на боковой панели щелкните **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, а затем щелкните **Доступ**.
1. В разделе "Разрешения пользователя" выберите **Выбранные команды/пользователи** и нажмите кнопку **Сохранить**. 

   ![Снимок экрана: выбранные разрешения пользователей и команд {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

    - Во всплывающем диалоговом окне "Подтвердить назначение места" выберите **Сохранить всех пользователей**.

      ![Снимок экрана: диалоговое окно подтверждения назначения места](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. В разделе "Управление доступом" в строке поиска введите имя пользователя, полное имя или адрес электронной почты участника.

   ![Снимок экрана: панель поиска](/assets/images/help/copilot/manage-access-search.png)

1. Чтобы удалить участника из списка пользователей, имеющих доступ к {% data variables.product.prodname_copilot %}, нажмите кнопку **Удалить**.

   ![Снимок экрана: кнопка "Удалить доступ"](/assets/images/help/copilot/remove-access-button.png)

## Настройка политик сопоставления предложений для {% data variables.product.prodname_copilot %} в организации

В {% data variables.product.prodname_copilot %} содержится фильтр, который обнаруживает предложения кода, совпадающие с общедоступным кодом в {% data variables.product.prodname_dotcom %}. Если фильтр включен, {% data variables.product.prodname_copilot %} сверяет предложения кода и около 150 символов кода до и после искомого фрагмента с общедоступным кодом в {% data variables.product.prodname_dotcom %}. Если обнаруживается полное или частичное совпадение, предложение не будет отображаться.

Если администратор предприятия выбрал **параметр Нет политики (разрешить каждой организации решить)** для сопоставления предложений на уровне предприятия, вы можете задать политику сопоставления предложений для своей организации. Если члену организации назначено место несколькими организациями с разными политиками сопоставления предложений в рамках одного предприятия, {% data variables.product.prodname_copilot %} будет использовать наиболее ограничительную политику.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование кода и автоматизация" на боковой панели щелкните **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, а затем щелкните **Политики**.
1. В раскрывающемся списке "Предложения, соответствующие общедоступному коду" выберите **Разрешить** или **Блокировать** , чтобы разрешить или заблокировать предложения, соответствующие общедоступному коду.

   ![Снимок экрана: раскрывающийся список предложений, соответствующих общедоступному коду](/assets/images/help/copilot/duplication-detection-org-policy.png)

## Дополнительные материалы

- [Заявление о конфиденциальности {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
