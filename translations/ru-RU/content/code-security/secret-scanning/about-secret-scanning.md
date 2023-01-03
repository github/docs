---
title: Сведения о проверке секретов
intro: '{% data variables.product.product_name %} сканирует репозитории на наличие известных типов секретов, чтобы предотвратить случайную фиксацию секретов.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192948'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Сведения о {% data variables.product.prodname_secret_scanning %}

Если проект взаимодействует с внешней службой, для проверки подлинности можно использовать токен или закрытый ключ. Токены и закрытые ключи — это примеры секретов, которые может выдавать поставщик услуг. Если зафиксировать секрет в репозитории, то любой пользователь с правами на чтение в репозитории сможет использовать этот секрет для доступа к внешней службе с вашими привилегиями. Рекомендуется хранить секреты в отдельном безопасном месте вне репозитория для проекта.

{% data variables.product.prodname_secret_scanning_caps %} сканирует весь журнал Git во всех ветвях, присутствующих в репозитории {% data variables.product.prodname_dotcom %} на наличие секретов{% ifversion ghec or ghes > 3.4 или ghae > 3.4 %}, даже если репозиторий архивирован{% endif %}. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} доступно в {% data variables.product.prodname_dotcom_the_website %} в двух формах:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** Выполняется автоматически во всех общедоступных репозиториях. Все строки, которые соответствуют шаблонам, предоставленным партнерами по проверке секретов, передаются непосредственно соответствующему партнеру.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}Организации, использующие {% data variables.product.prodname_ghe_cloud %} с лицензией для {% data variables.product.prodname_GH_advanced_security %}, могут включить и настроить дополнительную проверку для репозиториев, принадлежащих организации.{% elsif ghec %}Можно включить и настроить дополнительную проверку для репозиториев, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и у которых есть лицензия для {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Все строки, соответствующие шаблонам, предоставляемым партнерами по проверке секретов, другими поставщиками услуг или определенные организацией, отображаются в виде оповещений на вкладке репозиториев "Безопасность". Если строка в общедоступном репозитории соответствует шаблону партнера, об этом также сообщается партнеру.{% endif %}{% ifversion fpt %} Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Поставщики услуг могут сотрудничать с {% data variables.product.company_short %} и предоставлять свои форматы секретов для сканирования. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

Кроме того, {% data variables.product.prodname_secret_scanning %} можно использовать для принудительной защиты репозитория или организации. При включении этой функции {% data variables.product.prodname_secret_scanning %} запрещает участникам отправлять код с обнаруженным секретом. Чтобы продолжить, участники должны либо удалить секрет или секреты из отправки, либо, если нужно, обойти защиту. {% ifversion push-protection-custom-link-orgs %}Администраторы также могут указать настраиваемую ссылку, которая будет отображаться участнику при блокировке отправки. Эта ссылка может содержать относящиеся к организации ресурсы, которые помогут участникам. {% endif %}Дополнительные сведения: [Защита отправок через {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

{% endif %}

{% ifversion fpt or ghec %}
## Сведения о {% data variables.product.prodname_secret_scanning_partner %}

Когда вы делаете репозиторий общедоступным или отправляете изменения в общедоступный репозиторий, {% data variables.product.product_name %} всегда проверяет код на наличие секретов, соответствующих шаблонам партнеров. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} Если {% data variables.product.prodname_secret_scanning %} обнаруживает потенциальный секрет, мы уведомляем поставщика услуг, выдавшего секрет. Поставщик услуг проверяет строку и решает, следует ли ему отозвать секрет, выдать новый или связаться с вами напрямую. Его действие будет зависеть от того, какие риски при возникают для него или для вас. Дополнительные сведения см. в разделе [Поддерживаемые секреты для шаблонов партнеров](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

В общедоступных репозиториях конфигурацию {% data variables.product.prodname_secret_scanning %} менять нельзя.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Сведения о {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## Сведения о {% data variables.product.prodname_secret_scanning %} в {% data variables.product.product_name %}
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %} доступен во всех репозиториях, принадлежащих организации, в составе {% data variables.product.prodname_GH_advanced_security %}. В пользовательских репозиториях он недоступен. При включении {% data variables.product.prodname_secret_scanning %} для репозитория {% data variables.product.prodname_dotcom %} сканирует код на наличие шаблонов, соответствующих секретам, которые используются многими поставщиками услуг. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} {% ifversion secret-scanning-backfills %} {% data variables.product.prodname_dotcom %} также периодически выполняет полное сканирование журнала Git существующего содержимого в репозиториях {% data variables.product.prodname_GH_advanced_security %}, где включено {% data variables.product.prodname_secret_scanning %}, и отправляет уведомления об оповещениях, следуя параметрам уведомлений об оповещениях {% data variables.product.prodname_secret_scanning %}. {% endif %} Дополнительные сведения см. в разделе {% ifversion ghec %}[Поддерживаемые секреты для расширенной безопасности](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[{% data variables.product.prodname_secret_scanning_caps %} {](/code-security/secret-scanning/secret-scanning-patterns)% endif %}.

{% ifversion secret-scanning-issue-body-comments %} {% примечание %}

**Примечание.** {% data variables.product.prodname_secret_scanning_caps %} для описаний проблем и комментариев находится в общедоступной бета-версии и может быть изменено.

{% endnote %} {% endif %}

Если вы являетесь администратором репозитория, вы можете включить {% data variables.product.prodname_secret_scanning_GHAS %} для любого репозитория{% ifversion ghec or ghes > 3.4 или ghae > 3.4 %}, включая архивные репозитории{% endif %}. Владельцы организации также могут включить {% data variables.product.prodname_secret_scanning_GHAS %} для всех репозиториев или для всех новых репозиториев в организации. Дополнительные сведения см. в статьях [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) и [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% ifversion ghes or ghae or ghec %}Для репозитория, организации или предприятия можно также определить пользовательские шаблоны {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning).
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} хранит обнаруженные секреты с помощью симметричного шифрования как при передаче, так и при хранении.{% endif %}{% ifversion ghes > 3.7 %} Чтобы сменить ключи шифрования, используемые для хранения обнаруженных секретов, можно связаться с {% data variables.contact.contact_ent_support %}. {% endif %}

### Сведения об оповещениях {% data variables.product.prodname_secret_scanning %}

При включении {% data variables.product.prodname_secret_scanning %} для репозитория или отправки фиксаций в репозиторий с включенным {% data variables.product.prodname_secret_scanning %} {% data variables.product.prodname_dotcom %} проверяет содержимое этих фиксаций на наличие секретов, соответствующих шаблонам, определенным поставщиками услуг{% ifversion ghes or ghae or ghec %}, и любым пользовательским шаблонам, определенным в вашем предприятии, организации или репозитории{% endif %}. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} {% ifversion secret-scanning-backfills %} {% data variables.product.prodname_dotcom %} также периодически выполняет сканирование всего исторического содержимого в репозиториях с включенным {% data variables.product.prodname_secret_scanning %}. {% endif%}

Если {% data variables.product.prodname_secret_scanning %} обнаруживает секрет, {% data variables.product.prodname_dotcom %} выдает оповещение.

- {% data variables.product.prodname_dotcom %} отправляет оповещение по электронной почте администраторам репозитория и владельцам организации. Вы получите оповещение, если вы просматриваете репозиторий и если вы включили уведомления для оповещений системы безопасности или для всех действий в репозитории.
{% ifversion ghes or ghae or ghec %}
- Если участник, зафиксивший секрет, не игнорирует репозиторий, {% data variables.product.prodname_dotcom %} также отправит ей оповещение по электронной почте. Сообщения электронной почты содержат ссылку на связанное оповещение {% data variables.product.prodname_secret_scanning %}. После этого автор фиксации может просмотреть оповещение в репозитории и отметить его как решенное.
{% endif %}
- {% data variables.product.prodname_dotcom %} отображает оповещение на вкладке "Безопасность" для репозитория.

{% ifversion ghes or ghae or ghec %} Дополнительные сведения о просмотре и разрешении оповещений {% data variables.product.prodname_secret_scanning %} см. в статье [Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning).{% endif %}

Администраторы репозитория и владельцы организации могут предоставлять пользователям и командам доступ к оповещениям {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).

{% ifversion ghec or ghes or ghae > 3.4 %} Вы можете использовать обзор безопасности, чтобы просмотреть представление на уровне организации о том, какие репозитории включили {% data variables.product.prodname_secret_scanning %} и найденные оповещения. Дополнительные сведения см. в статье [Просмотр общих сведений о безопасности](/code-security/security-overview/viewing-the-security-overview).
{% endif %}

{%- ifversion ghec or ghes or ghae %} Rest API также можно использовать для мониторинга результатов из {% data variables.product.prodname_secret_scanning %} в частных репозиториях {% ifversion ghec %}в частных {% endif %}репозиториях{% ifversion ghes %} или организации{% endif %}. Дополнительные сведения о конечных точках API см. в разделе [{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning). {% endif %}

{% endif %}

## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository)
- [Обеспечение безопасности учетной записи и данных](/github/authenticating-to-github/keeping-your-account-and-data-secure) {%- ifversion fpt or ghec %}
- [Управление зашифрованными секретами для codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces){% endif %} {%- ifversion fpt or ghec or ghes %}
- [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- [Зашифрованные секреты](/actions/security-guides/encrypted-secrets)
