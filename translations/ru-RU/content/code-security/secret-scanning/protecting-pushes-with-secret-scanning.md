---
title: Защита отправок с помощью сканирования секретов
intro: 'Вы можете использовать {% data variables.product.prodname_secret_scanning %}, чтобы предотвратить отправку поддерживаемых секретов в {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} организацию{% ifversion secret-scanning-enterprise-level %}, {% endif %} или репозиторий, включив принудительная защита.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184499'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## Сведения о защите отправок с секретами

До сих пор {% data variables.product.prodname_secret_scanning_GHAS %} проверяет наличие секретов _после_ отправки и оповещает пользователей об уязвимых секретах. {% data reusables.secret-scanning.push-protection-overview %}

Если участник обходит защитную блокировку push-уведомлений для секрета, {% data variables.product.prodname_dotcom %}:
- создает оповещение на вкладке "Безопасность" репозитория в состоянии, описанном в таблице ниже.
- добавляет событие обхода в журнал аудита.{% ifversion secret-scanning-push-protection-email %}
- отправляет оповещение по электронной почте владельцам организации, менеджерам безопасности и администраторам репозитория, которые просматривают репозиторий, со ссылкой на секрет и причину, по которой он был разрешен. {% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

Сведения о секретах и поставщиках услуг, поддерживаемых функцией защиты от отправки, см. в разделе [{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection).

## Включение {% data variables.product.prodname_secret_scanning %} для защиты отправок

Чтобы вы использовали {% data variables.product.prodname_secret_scanning %} в качестве защиты от push-уведомлений, {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} организация{% ifversion secret-scanning-enterprise-level %},{% endif %} или репозиторий должны быть включены как {% data variables.product.prodname_GH_advanced_security %}, так и {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в разделах {% ifversion secret-scanning-enterprise-level %}[Управление параметрами безопасности и анализа для предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise), {% endif %} Управление [параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization), [Управление параметрами безопасности и анализа для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) и [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

Владельцы организации, руководители безопасности и администраторы репозитория могут включить защиту отправок для {% data variables.product.prodname_secret_scanning %} с помощью пользовательского интерфейса и API. Дополнительные сведения см. в статье [Репозитории](/rest/reference/repos#update-a-repository) и разверните раздел "Свойства объекта `security_and_analysis`" в документации по REST API.

{% ifversion secret-scanning-enterprise-level %}
### Включение {% data variables.product.prodname_secret_scanning %} в качестве принудительной защиты для предприятия
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. На левой боковой панели щелкните **Безопасность и анализ кода**. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### Включение {% data variables.product.prodname_secret_scanning %} для защиты отправок в организации

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Включение {% data variables.product.prodname_secret_scanning %} для защиты отправок в репозитории

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Использование проверки на наличие секретов для защиты от отправки с помощью командной строки

{% data reusables.secret-scanning.push-protection-command-line-choice %}

В командной строке будет отображаться до пяти обнаруженных секретов. Если определенный секрет уже обнаружен в репозитории и оповещение уже существует, {% data variables.product.prodname_dotcom %} не заблокирует этот секрет. 

{% ifversion push-protection-custom-link-orgs %} 

Администраторы организации могут указать настраиваемую ссылку, которая будет отображаться при блокировке отправки. Эта ссылка может содержать относящиеся к организации ресурсы и рекомендации, например какое хранилище секретов рекомендуется использовать или с кем нужно связаться по вопросам блокировки секретов.

![Снимок экрана: отправка заблокирована при попытке пользователя отправить секрет в репозиторий](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Снимок экрана: отправка заблокирована при попытке пользователя отправить секрет в репозиторий](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Дополнительные сведения об обработке заблокированных секретов см. в разделе [Отправка ветви, заблокированной защитой от отправки](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line).

Если вы подтверждаете, что секрет является реальным и что вы планируете исправить его позже, постарайтесь как можно скорее исправить секрет. Например, можно отозвать секрет и удалить его из журнала фиксаций репозитория. Реальные секреты, которые отображаются, необходимо отозвать для предотвращения несанкционированного доступа. Прежде чем отзывать секрет, можно сначала сменить его. Дополнительные сведения см. в разделе [Удаление конфиденциальных данных из репозитория](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**Совет:** {% data variables.product.prodname_secret_scanning %} можно использовать в качестве защиты от отправки из пользовательского веб-интерфейса, а также из командной строки в {% data variables.product.product_name %} версии 3.6 или более поздней.

{% endtip %}

{% endif %}

### Как разрешить отправку заблокированного секрета

Если {% data variables.product.prodname_dotcom %} блокирует секрет, который, как вы считаете, можно безопасно отправить, вы можете разрешить секрет и указать причину, по которой следует разрешить отправку.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Посетите URL-адрес, возвращенный {% data variables.product.prodname_dotcom %} при блокировке отправки.
  ![Снимок экрана: форма с параметрами разблокировки отправки секрета](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Щелкните **Разрешить мне отправить этот секрет**.
2. Повторите попытку отправки с помощью командной строки в течение трех часов. Если вы не выполнили отправку в течение трех часов, необходимо повторить этот процесс.

{% ifversion secret-scanning-push-protection-web-ui %}
## Использование сканирования секретов для защиты отправок с помощью веб-интерфейса

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} будет отображать только один обнаруженный секрет в веб-интерфейсе. Если определенный секрет уже обнаружен в репозитории и оповещение уже существует, {% data variables.product.prodname_dotcom %} не заблокирует этот секрет.

{% ifversion push-protection-custom-link-orgs %} 

Администраторы организации могут указать настраиваемую ссылку, которая будет отображаться при блокировке отправки. Эта ссылка может содержать ресурсы и рекомендации, относящиеся к вашей организации. Например, настраиваемая ссылка может указывать на файл сведений о хранилище секретов организации, контактные лица или команды для эскалирования вопросов или утвержденную политику организации по работе с секретами и перезаписи журнала фиксаций.
{% endif %}

Секрет можно удалить из файла с помощью веб-интерфейса. После удаления секрета баннер в верхней части страницы изменится — на нем будет информация о том, что теперь можно зафиксировать изменения.

  ![Снимок экрана: фиксация в веб-интерфейсе разрешена после исправления секрета](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Обход защиты отправки с секретом

{% data reusables.secret-scanning.push-protection-remove-secret %} Дополнительные сведения об обработке заблокированных секретов см. в разделе [Отправка ветви, заблокированной защитой от отправки](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui). 

Если вы подтверждаете, что секрет является реальным и что вы планируете исправить его позже, постарайтесь как можно скорее исправить секрет. Дополнительные сведения см. в разделе [Удаление конфиденциальных данных из репозитория](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

Если {% data variables.product.prodname_dotcom %} блокирует секрет, который, как вы считаете, можно безопасно отправить, вы можете разрешить секрет и указать причину, по которой следует разрешить отправку.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Если вы подтверждаете, что секрет является реальным и что вы планируете исправить его позже, постарайтесь как можно скорее исправить секрет.

1. В баннере, который появился в верхней части страницы, когда {% data variables.product.prodname_dotcom %} заблокировал фиксацию, нажмите кнопку **Обход защиты**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Снимок экрана: форма с параметрами разблокировки отправки секрета](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Щелкните **Разрешить секрет**.


{% endif %}
