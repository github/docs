---
title: Настройка проверки секретов в ваших репозиториях
intro: 'Вы можете настроить поведение {% data variables.product.prodname_dotcom %} при поиске в репозитории секретов, соответствующих расширенным шаблонам безопасности.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192940'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Включение {% data variables.product.prodname_secret_scanning_GHAS %}

Вы можете включить {% data variables.product.prodname_secret_scanning_GHAS %} для любого репозитория, принадлежащего организации. После включения {% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**Примечание.** {% data variables.product.prodname_secret_scanning_caps %} для описания проблем и комментариев находится в общедоступной бета-версии и может быть изменен.

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**Примечание:** Если ваша организация принадлежит корпоративной учетной записи, владелец предприятия также может включить {% data variables.product.prodname_secret_scanning %} на уровне предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Если {% data variables.product.prodname_advanced_security %} еще не включено для этого репозитория, справа от "{% data variables.product.prodname_GH_advanced_security %}" нажмите кнопку **Включить**.
   {% ifversion fpt or ghec %}![Включение {% data variables.product.prodname_GH_advanced_security %} для репозитория](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Включение {% data variables.product.prodname_GH_advanced_security %} для репозитория](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. Проверьте влияние включения {% data variables.product.prodname_advanced_security %}, а затем нажмите **Включить {% data variables.product.prodname_GH_advanced_security %} для этого репозитория**.
3. Если включить {% data variables.product.prodname_advanced_security %}, для этого репозитория может быть автоматически включено {% data variables.product.prodname_secret_scanning %}, в зависимости от параметров организации. Если "{% data variables.product.prodname_secret_scanning_caps %}" отображается с кнопкой **Включить**, значит вам все еще нужно включить {% data variables.product.prodname_secret_scanning %}, нажав кнопку **Включить**. Если вы видите кнопку **Отключить**, значит {% data variables.product.prodname_secret_scanning %} уже включено. 
   ![Включение {% data variables.product.prodname_secret_scanning %} для репозитория](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. Если вы хотите включить защиту отправки, то можете нажать кнопку **Включить** справа от пункта "Защита отправки". {% data reusables.secret-scanning.push-protection-overview %} Дополнительные сведения см. в разделе [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
   ![Включение защиты отправок для репозитория](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. Прежде чем включать {% data variables.product.prodname_secret_scanning %}, необходимо сначала включить {% data variables.product.prodname_GH_advanced_security %}. Справа от "{% data variables.product.prodname_GH_advanced_security %}" нажмите кнопку **Включить**.
   ![Включение {% data variables.product.prodname_GH_advanced_security %} для репозитория](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Нажмите кнопку **Включить {% data variables.product.prodname_GH_advanced_security %} для этого репозитория**, чтобы подтвердить действие.
   ![Подтверждение включения {% data variables.product.prodname_GH_advanced_security %} для репозитория](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. Справа от {% data variables.product.prodname_secret_scanning_caps %} нажмите **Включить**.
   ![Включение {% data variables.product.prodname_secret_scanning %} для репозитория](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## Исключение каталогов из {% data variables.product.prodname_secret_scanning_GHAS %}

С помощью файла *secret_scanning.yml* вы можете исключать каталоги из {% data variables.product.prodname_secret_scanning %}. Например, можно исключить каталоги, содержащие тесты или случайно созданное содержимое.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите *.github/secret_scanning.yml*.
4. В разделе **Изменить новый файл** введите `paths-ignore:` и следом пути, которые хотите исключить из {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    Можно использовать специальные символы для фильтрации путей, например, `*`. Дополнительные сведения о шаблонах фильтров см. в разделе [Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

    {% note %}
    
    **Примечания.**
    - Если в `paths-ignore` имеется более 1000 записей, то {% data variables.product.prodname_secret_scanning %} исключит из проверки только первые 1000 записей.
    - Если размер *secret_scanning.yml* больше 1 МБ, {% data variables.product.prodname_secret_scanning %}пропустит весь файл.
    
    {% endnote %}

Вы также можете пропускать отдельные оповещения из {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в разделе [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts).

## Дополнительные материалы

- [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
- [Описание пользовательских шаблонов для {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)
