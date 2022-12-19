---
title: Сведения о проверке подлинности для вашей организации
shortTitle: About authentication
intro: 'Вам {% ifversion ghae %}необходимо настроить единый вход SAML, чтобы пользователи{% else %}могли выбрать способ проверки подлинности пользователей{% endif %} для доступа к {% ifversion ghec %}ресурсам вашей организации {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}ваше предприятие на {% data variables.product.product_name %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164375'
---
## Сведения о проверке подлинности для вашей организации

{% ifversion ghec %}

Владельцы организации в {% data variables.product.product_name %} могут управлять требованиями к проверке подлинности и доступу к ресурсам организации. 

{% data reusables.enterprise.ghec-authentication-options %}

Чтобы определить, какой метод лучше всего подходит для вашего предприятия, после изучения этих вариантов см. раздел [Определение лучшего метода проверки подлинности для вашего предприятия](#identifying-the-best-authentication-method-for-your-enterprise).

## Методы проверки подлинности для {% data variables.product.product_name %}

Для управления учетными записями и проверки подлинности в {% data variables.product.product_name %} доступны следующие параметры.

- [Проверка подлинности с помощью {% data variables.location.product_location %}](#authentication-through-githubcom)
- [Проверка подлинности с помощью {% data variables.location.product_location %} с дополнительным ограничением доступа SAML](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Проверка подлинности с помощью {% data variables.product.prodname_emus %} и федерации](#authentication-with-enterprise-managed-users-and-federation)

### Проверка подлинности с помощью {% data variables.location.product_location %}

По умолчанию каждый участник должен создать личную учетную запись в {% data variables.location.product_location %}. Вы предоставляете доступ к предприятию, а участник может получить доступ к ресурсам предприятия после входа в учетную запись на {% data variables.location.product_location %}. Участник управляет учетной записью и может вносить свой вклад в другие предприятия, организации и репозитории в {% data variables.location.product_location %}.

### Проверка подлинности с помощью {% data variables.location.product_location %} с дополнительным ограничением доступа SAML

При настройке дополнительного ограничения доступа SAML каждый участник должен создать личную учетную запись и управлять ею в {% data variables.location.product_location %}. Вы предоставляете доступ к своему предприятию, и участник может получить доступ к ресурсам предприятия после входа в учетную запись {% data variables.location.product_location %} и успешной проверки подлинности с помощью поставщика удостоверений SAML (IdP). Участник может участвовать в работе с другими предприятиями, организациями и репозиториями в {% data variables.location.product_location %} с помощью личной учетной записи. Дополнительные сведения о необходимости проверки подлинности SAML для полного доступа к ресурсам организации см. в разделе [Сведения о SAML для IAM организации](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

Если вы используете изолированную организацию с {% data variables.product.product_name %} или не хотите использовать проверку подлинности SAML для каждой организации в вашей корпорации, можно настроить SAML для отдельной организации. Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

### Проверка подлинности с помощью {% data variables.product.prodname_emus %} и федерации

Если вам нужен дополнительный контроль над учетными записями для участников предприятия в {% data variables.location.product_location %}, можно использовать {% data variables.product.prodname_emus %}. С помощью {% data variables.product.prodname_emus %} вы подготавливаете учетные записи для участников предприятия и управляете ими в {% data variables.location.product_location %} с помощью поставщика удостоверений. Каждый участник входит в созданную вами учетную запись, а организация управляет учетной записью. Вклады в остальные данные {% data variables.product.prodname_dotcom_the_website %} ограничены. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).

## Определение лучшего метода проверки подлинности для вашего предприятия

Единый вход SAML и {% data variables.product.prodname_emus %} повышают безопасность ресурсов вашего предприятия. {% data variables.product.prodname_emus %} дополнительно позволяет вам управлять учетными записями пользователей для членов вашего предприятия и ограничивает возможности учетных записей. Однако эти ограничения могут оказаться неприемлемыми для вашего предприятия, если они мешают рабочим процессам ваших разработчиков.

Чтобы определить, что принесет вашему предприятию больше преимуществ от единого входа SAML или {% data variables.product.prodname_emus %}, задайте себе эти вопросы.

- [Вы хотите контролировать учетные записи пользователей для ваших пользователей?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Какого поставщика удостоверений использует ваше предприятие?](#which-identity-provider-does-your-enterprise-use)
- [Работают ли ваши разработчики с общедоступными репозиториями, gist или сайтами {% data variables.product.prodname_pages %}?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Полагаются ли ваши разработчики на совместную работу за пределами вашего предприятия?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Полагается ли ваше предприятие на внешних участников совместной работы?](#does-your-enterprise-rely-on-outside-collaborators)
- [Может ли ваше предприятие позволить себе расходы на миграцию?](#can-your-enterprise-tolerate-migration-costs)

### Вы хотите контролировать учетные записи пользователей для ваших пользователей?

{% data variables.product.prodname_emus %} может подойти вашему предприятию, если вы не хотите, чтобы корпоративные участники использовали свои личные учетные записи на {% data variables.product.prodname_dotcom_the_website %} для доступа к ресурсам вашего предприятия. 

С помощью единого входа SAML разработчики создают свои личные учетные записи и управляют ими, при этом каждая учетная запись связана с удостоверением SAML в вашем поставщике удостоверений. Продукт {% data variables.product.prodname_emus %} больше похож на другие знакомые решения единого входа, так как вы предоставляете учетные записи для своих пользователей. Вы также можете обеспечить соответствие учетных записей пользователей удостоверению вашей компании, контролируя имена пользователей и адреса электронной почты, связанные с учетными записями. 

Если сейчас вы требуете, чтобы ваши пользователи создавали новую учетную запись на {% data variables.product.prodname_dotcom_the_website %} только для вашего предприятия, вам может подойти {% data variables.product.prodname_emus %}. Однако единый вход SAML может быть лучшим вариантом, если ваш поставщик удостоверений используется в качестве достоверного источника для вашего пользователя, а управление доступом усложняет работу. Например, возможно, на вашем предприятии не установлен процесс регистрации новых пользователей в вашем поставщике удостоверений.

### Какого поставщика удостоверений использует ваше предприятие?

{% data variables.product.prodname_emus %} поддерживается для ограниченного числа поставщиков удостоверений, в то время как единый вход SAML обеспечивает полную поддержку для большего числа поставщиков удостоверений, а также ограниченную поддержку для всех поставщиков удостоверений, реализующих стандарт SAML 2.0. Список поддерживаемых поставщиков удостоверений для каждого варианта см. в разделах [О {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support) и [О SAML для корпоративного IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps).

{% data variables.product.prodname_emus %} можно использовать с неподдерживаемым поставщиком удостоверений только при условии объединения неподдерживаемого поставщика удостоверений с поддерживаемым поставщиком удостоверений для использования в качестве точки интеграции. Если вы хотите избежать этой дополнительной сложности, единый вход SAML может быть лучшим решением для вас.

### Работают ли ваши разработчики с общедоступными репозиториями, gist или сайтами {% data variables.product.prodname_pages %}?

Чтобы предотвратить случайную утечку корпоративного содержимого у участников предприятия на {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} накладывает строгие ограничения на действия пользователей. Например, {% data variables.enterprise.prodname_managed_users %} не может создавать общедоступные репозитории, объекты видимости или {% data variables.product.prodname_pages %}, которые видны за пределами предприятия. Полный список ограничений см. в разделе [Возможности и ограничения {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users).

Эти ограничения неприемлемы для некоторых предприятий. Чтобы определить, подойдет ли вам {% data variables.product.prodname_emus %}, просмотрите ограничения вместе с вашими разработчиками и убедитесь, что никакие ограничения не помешают вашим существующим рабочим процессам. Если это так, единый вход SAML может быть лучшим выбором для вашего предприятия.

### Полагаются ли ваши разработчики на совместную работу за пределами вашего предприятия?

{% data variables.enterprise.prodname_managed_users_caps %} может вносить свой вклад только в репозитории на предприятии. Если разработчикам необходимо работать с репозиториями как внутри, так и вне вашей организации, включая частные репозитории, то {% data variables.product.prodname_emus %} могут не подойти вашему предприятию. Более оптимальным решением может быть единый вход SAML.

Некоторые компании поддерживают репозитории в существующем предприятии с помощью единого входа SAML в {% data variables.location.product_location %}, а также создают {% data variables.enterprise.prodname_emu_enterprise %}. Разработчики, которые участвуют в создании репозиториев, принадлежащих обоим предприятиям, с одной рабочей станции, должны переключаться между учетными записями в {% data variables.location.product_location %} в одном браузере или использовать разные браузеры для каждой учетной записи. Ему также может потребоваться изменить на рабочей станции конфигурацию Git под обе записи. Из-за сложности такого рабочего процесса увеличивается риск по ошибке сделать внутренний код достоянием общественности.

Если вы решили создать {% data variables.enterprise.prodname_emu_enterprise %}, но требуете от разработчиков вносить вклад в ресурсы за пределами предприятия с одной рабочей станции, вы можете обеспечить поддержку переключения между учетными записями в локальной конфигурации Git разработчика. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom).

### Полагается ли ваше предприятие на внешних участников совместной работы?

С помощью единого входа SAML вы можете предоставить доступ к определенным репозиториям людям, которые не являются членами каталога вашего поставщика удостоверений, используя роль внешнего участника совместной работы. Это может быть особенно полезно для участников совместной работы, не являющихся частью вашего бизнеса, например, подрядчиков. Дополнительные сведения см. в разделе [Добавление внешних участников совместной работы к репозиториям в вашей организации](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization).

При использовании {% data variables.product.prodname_emus %} роли внешнего участника совместной работы не существует. Доступ к ресурсам предприятия может получить только {% data variables.enterprise.prodname_managed_users %}, которые всегда подготавливаются поставщиком удостоверений. Чтобы предоставить внешним участникам совместной работы доступ к вашему предприятию, вам придется использовать гостевые учетные записи в своем поставщике удостоверений. Если вы заинтересованы в использовании {% data variables.product.prodname_emus %}, уточните у своих разработчиков, не помешает ли это их существующим рабочим процессам. Если это так, единый вход SAML может быть лучшим решением.

### Может ли ваше предприятие позволить себе расходы на миграцию?

Если ваше предприятие впервые использует {% data variables.product.prodname_dotcom_the_website %}, единый вход SAML и {% data variables.product.prodname_emus %} одинаково легко внедрить.

Если вы уже используете {% data variables.product.prodname_dotcom_the_website %}, а разработчики управляют своими собственными учетными записями пользователей, внедрение {% data variables.product.prodname_emus %} требует перехода на новую корпоративную учетную запись. Дополнительные сведения см. в разделе [Сведения о предприятиях с {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users).

Хотя {% data variables.product.prodname_emus %} бесплатен, процесс миграции может потребовать от вашей команды времени или затрат. Убедитесь, что этот процесс миграции приемлем для вашего бизнеса и ваших разработчиков. В противном случае единый вход SAML может быть лучшим выбором для вас.

{% elsif ghes %}

Администраторы сайта могут определить, как пользователи проходят проверку подлинности для доступа к экземпляру {% data variables.product.product_name %}. Можно использовать встроенную проверку подлинности {% data variables.product.product_name %} или, если требуется централизовать управление удостоверениями и доступом для веб-приложений, которые использует ваша команда, можно настроить внешний метод проверки подлинности.

## Методы проверки подлинности для {% data variables.product.product_name %}

Для {% data variables.product.product_name %} доступны следующие методы проверки подлинности.

- [Встроенная проверка подлинности](#built-in-authentication)
- [Внешняя проверка подлинности](#external-authentication)

### Встроенная проверка подлинности

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Чтобы получить доступ к экземпляру, пользователи проходят проверку подлинности с учетными данными для учетной записи. Дополнительные сведения см. в разделе [Настройка встроенной проверки подлинности](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).

### Внешняя проверка подлинности

Если вы используете внешний каталог или поставщик удостоверений (IdP) для централизации доступа к нескольким веб-приложениям, вы можете настроить внешнюю проверку подлинности для {% data variables.location.product_location %}. Дополнительные сведения см. в следующих руководствах.

- [Использование CAS для IAM организации](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [Использование LDAP для IAM организации](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [Использование SAML для IAM организации](/admin/identity-and-access-management/using-saml-for-enterprise-iam)

Если вы решили использовать внешнюю проверку подлинности, также можно настроить резервную проверку подлинности для пользователей, у которых нет учетной записи внешнего поставщика проверки подлинности. Например, может потребоваться доступ к подрядчику или пользователю компьютера. Дополнительные сведения см. в статье [Разрешение встроенной проверки подлинности пользователям за пределами вашего поставщика](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).

{% ifversion scim-for-ghes %}

Если вы используете единый вход SAML для проверки подлинности, вы также можете подготовить пользователей и сопоставить группы удостоверений с командами с помощью SCIM. Дополнительные сведения см. в разделе [Настройка подготовки пользователей с помощью SCIM для вашего предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} использует единый вход SAML для проверки подлинности. Владельцы организации должны настроить единый вход SAML с поставщиком удостоверений SAML (IdP) во время инициализации. Дополнительные сведения см. в разделе [О SAML для IAM организации](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

{% endif %}

## Дополнительные материалы

- [Типы учетных записей {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)
- [Сведения об учетных записях организации](/admin/overview/about-enterprise-accounts) {%- ifversion ghec %}
- [Можно ли создавать учетные записи для пользователей в моей организации?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)
{% endif %}
