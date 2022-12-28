---
title: Определение пользовательских шаблонов для проверки секретов
shortTitle: Define custom patterns
intro: 'Вы можете расширить {% data variables.product.prodname_secret_scanning_GHAS %}, чтобы обнаруживать секреты в других форматах, кроме стандартных вариантов.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106520'
---
## Описание пользовательских шаблонов для {% data variables.product.prodname_secret_scanning %}

Вы можете определять пользовательские шаблоны для идентификации секретов, которые не обнаружены шаблонами по умолчанию, поддерживаемыми {% data variables.product.prodname_secret_scanning %}. Например, у вас может быть внутренний шаблон секрета для вашей организации. Сведения о поддерживаемых секретах и поставщиках услуг см. в разделе [Шаблоны {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns).

Вы можете определять пользовательские шаблоны для предприятия, организации или репозитория. {% данных variables.product.prodname_secret_scanning_caps %} поддерживает до 500 пользовательских шаблонов для каждой организации или корпоративной учетной записи и до 100 пользовательских шаблонов на каждый репозиторий.

## Синтаксис регулярных выражений для пользовательских шаблонов

Пользовательские шаблоны для {% data variables.product.prodname_secret_scanning_GHAS %} можно указывать как одно или несколько регулярных выражений.

- **Формат секрета:** выражение, описывающее формат самого секрета.
- **Перед секретом:** выражение, описывающее символы перед секретом. По умолчанию задано значение `\A|[^0-9A-Za-z]`, которое означает, что секрет должен находиться в начале строки или перед ним должна быть буква или цифра.
- **После секрета:** выражение, описывающее символы после секрета. По умолчанию задано значение `\z|[^0-9A-Za-z]`, которое означает, что за секретом должна следовать новая строка или символ, не являющийся буквой или цифрой.
- **Дополнительные требования соответствия:** одно или несколько необязательных выражений, которым должен или не должен соответствовать сам секрет.

Для простых маркеров безопасности обычно достаточно указать только формат секрета. Другие поля обеспечивают гибкость, позволяющую задавать более сложные секреты без создания сложных регулярных выражений.  Пример пользовательского шаблона см. в разделе [Пример пользовательского шаблона, заданного с использованием дополнительных требований](#example-of-a-custom-pattern-specified-using-additional-requirements) ниже.

{% data variables.product.prodname_secret_scanning_caps %} использует [библиотеку Hyperscan](https://github.com/intel/hyperscan) и поддерживает только конструкции регулярных выражений Hyperscan, которые являются подмножеством синтаксиса PCRE. Модификаторы параметров Hyperscan не поддерживаются.  Дополнительные сведения о конструкциях шаблонов Hyperscan см. в разделе [Поддержка шаблонов](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support) документации Hyperscan.

## Определение пользовательского шаблона для репозитория

Перед определением настраиваемого шаблона необходимо убедиться, что в вашем репозитории включено {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_secret_scanning %} для репозиториев](/code-security/secret-security/configuring-secret-scanning-for-your-repositories).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Когда вы будете готовы протестировать новый пользовательский шаблон, чтобы определить совпадения в репозитории без создания оповещений, нажмите кнопку **Сохранить и выполнить пробный прогон**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

После создания шаблона {% data reusables.secret-scanning.secret-scanning-process %} Дополнительные сведения о просмотре оповещений {% data variables.product.prodname_secret_scanning %} см. в разделе [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

### Пример настраиваемого шаблона, заданного с использованием дополнительных требований

У компании есть внутренний маркер безопасности с пятью характеристиками. Они используют различные поля, чтобы указать, как идентифицировать маркеры, следующим образом.

| **Характеристика** | **Поле и регулярное выражение** |
|----------------|------------------------------|
| Длина от 5 до 10 символов | Формат секрета: `[$#%@AA-Za-z0-9]{5,10}` |
| Не заканчивается на `.` | После секрета: `[^\.]` |
| Содержит цифры и прописные буквы | Дополнительные требования: секрет должен соответствовать `[A-Z]` и `[0-9]` |
| Не содержит более одной строчной буквы в строке | Дополнительные требования: секрет должен не соответствовать `[a-z]{2,}` |
| Содержит один из символов `$%@!` | Дополнительные требования: секрет должен соответствовать `[$%@!]` |

Эти маркеры безопасности соответствуют пользовательскому шаблону, описанному выше:

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

Эти строки не соответствуют пользовательскому шаблону, описанному выше:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Определение пользовательского шаблона для организации

Перед определением пользовательского шаблона необходимо включить {% data variables.product.prodname_secret_scanning %} для репозиториев, которые требуется сканировать в организации. Сведения о том, как включить {% data variables.product.prodname_secret_scanning %} во всех репозиториях в организации, см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% ifversion ghes < 3.5 or ghae %} {% note %}

**Примечание.** Так как функциональность пробного прогона отсутствует, рекомендуется протестировать пользовательские шаблоны в репозитории, прежде чем определять их для всей организации. Таким образом можно избежать создания лишних ложных срабатываний оповещений {% data variables.product.prodname_secret_scanning %}.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Когда вы будете готовы протестировать новый пользовательский шаблон, чтобы определить совпадения в выбранных репозиториях без создания оповещений, нажмите кнопку **Сохранить и выполнить пробный прогон**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

После создания шаблона {% data variables.product.prodname_secret_scanning %} проверяет все секреты в репозиториях организации, включая полный журнал Git во всех ветвях. Владельцы организации и администраторы репозитория будут оповещены обо всех обнаруженных секретах и смогут просмотреть оповещение в репозитории, где обнаружен секрет. Дополнительные сведения о просмотре оповещений {% data variables.product.prodname_secret_scanning %} см. в разделе [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

## Определение пользовательского шаблона для учетной записи предприятия

{% ifversion fpt or ghec or ghes %}

Перед определением пользовательского шаблона необходимо включить проверку секретов для учетной записи предприятия. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_GH_advanced_security %} для предприятия]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **Примечания.**
- На уровне предприятия только создатель пользовательского шаблона может изменять шаблон и использовать его в пробном прогоне. 
- Владельцы предприятия могут использовать пробные прогоны только в репозиториях, к которым у них есть доступ. Владельцы предприятия могут не иметь доступа ко всем организациям или репозиториям предприятия.
{% else %} **Примечание.** Так как функциональность пробного прогона отсутствует, рекомендуется протестировать пользовательские шаблоны в репозитории, прежде чем определять их для всего предприятия. Таким образом можно избежать создания лишних ложных срабатываний оповещений {% data variables.product.prodname_secret_scanning %}.

{% endif %}

{% endnote %}

{% данных для повторного использования.enterprise-accounts.access-enterprise %} {% данных для повторного использования.enterprise-accounts.policies-tab %} {% ifversion security-feature-enablement-policies %} {% данных для повторного использования.enterprise-accounts.code-security-and-analysis-policies %}
1. В разделе "Безопасность и анализ кода" щелкните **"Функции безопасности**". {% else %} {% данных для повторного использования.enterprise-accounts.advanced-security-policies %} {% данных для повторного использования.enterprise-accounts.advanced-security-security-features %} {% endif %}
1. В разделе "Проверка секретов пользовательских шаблонов" нажмите кнопку **"Создать шаблон**".
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. Когда вы будете готовы протестировать новый пользовательский шаблон, чтобы найти совпадения в вашей корпорации, но не создавать оповещения, нажмите кнопку **Сохранить и выполнить пробный запуск**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

После создания шаблона {% data variables.product.prodname_secret_scanning %} проверяет все секреты в репозиториях организаций предприятия с включенной {% data variables.product.prodname_GH_advanced_security %}, включая полный журнал Git во всех ветвях. Владельцы организации и администраторы репозитория будут оповещены обо всех обнаруженных секретах и смогут просмотреть оповещение в репозитории, где обнаружен секрет. Дополнительные сведения о просмотре оповещений {% data variables.product.prodname_secret_scanning %} см. в разделе [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

## Изменение пользовательского шаблона

При сохранении изменения в пользовательском шаблоне закрываются все оповещения {% data variables.product.prodname_secret_scanning %}, созданные с помощью предыдущей версии шаблона.
1. Перейдите туда, где был создан пользовательский шаблон. Пользовательский шаблон можно создать в репозитории, организации или корпоративной учетной записи.
   * Для репозитория или организации откройте параметры "Безопасность и анализ" для репозитория или организации, где был создан пользовательский шаблон. Дополнительные сведения см. в разделе [Определение пользовательского шаблона для репозитория](#defining-a-custom-pattern-for-a-repository) или [Определение пользовательского шаблона для организации](#defining-a-custom-pattern-for-an-organization) выше.
   * Для предприятия в разделе "Политики" откройте область "Расширенная безопасность", а затем щелкните пункт **Функции безопасности**. Дополнительные сведения см. в разделе [Определение пользовательского шаблона для корпоративной учетной записи](#defining-a-custom-pattern-for-an-enterprise-account) выше.
2. В разделе "{% data variables.product.prodname_secret_scanning_caps %}" справа от пользовательского шаблона, который требуется изменить, щелкните {% octicon "pencil" aria-label="The edit icon" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. Когда вы будете готовы протестировать отредактированный пользовательский шаблон, чтобы найти совпадения в вашей корпорации, но не создавать оповещения, нажмите кнопку **Сохранить и выполнить пробный запуск**.
{%- endif %}
4. После проверки и тестирования изменений нажмите кнопку **Сохранить изменения**.

## Удаление пользовательского шаблона

1. Перейдите туда, где был создан пользовательский шаблон. Пользовательский шаблон можно создать в репозитории, организации или корпоративной учетной записи.

   * Для репозитория или организации откройте параметры "Безопасность и анализ" для репозитория или организации, где был создан пользовательский шаблон. Дополнительные сведения см. в разделе [Определение пользовательского шаблона для репозитория](#defining-a-custom-pattern-for-a-repository) или [Определение пользовательского шаблона для организации](#defining-a-custom-pattern-for-an-organization) выше.
   * Для предприятия в разделе "Политики" откройте область "Расширенная безопасность", а затем щелкните пункт **Функции безопасности**.  Дополнительные сведения см. в разделе [Определение пользовательского шаблона для корпоративной учетной записи](#defining-a-custom-pattern-for-an-enterprise-account) выше.
1. Справа от пользовательского шаблона, который вы хотите удалить, щелкните {% octicon "trash" aria-label="The trash icon" %}.
1. Просмотрите подтверждение и выберите метод для работы с любыми открытыми оповещениями, связанными с пользовательским шаблоном.
1. Нажмите **Да, удалить этот шаблон**.

   ![Подтверждение удаления пользовательского шаблона {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
