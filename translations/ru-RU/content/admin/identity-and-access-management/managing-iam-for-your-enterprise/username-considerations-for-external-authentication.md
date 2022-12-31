---
title: Рекомендации по использованию имени пользователя для внешней проверки подлинности
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}При использовании {% ifversion ghes %}CAS, LDAP или SAML для проверки подлинности{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %} {% endif %}{% data variables.product.product_name %} следует установленным правилам для определения имени пользователя в каждой учетной записи пользователя {% ifversion ghec or ghae %}вашего предприятия{% elsif ghes %}в вашем экземпляре{% endif %}.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120754'
---
{% ifversion ghec %} {% note %}

**Примечание.** Эта статья относится только к {% data variables.product.prodname_emus %}. Если вы используете {% data variables.product.prodname_ghe_cloud %} без {% data variables.product.prodname_emus %}, имена пользователей будут создаваться пользователями, а не {% data variables.product.prodname_dotcom %}.

{% endnote %} {% endif %}

## Сведения об использовании имен пользователей с внешней проверкой подлинности

{% ifversion ghes %}

Вы можете настроить внешнюю проверку подлинности для {% data variables.product.product_name %} с использованием CAS, LDAP или SAML. Дополнительные сведения см. в разделе [Сведения о проверке подлинности для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server).

При использовании внешней проверки подлинности {% data variables.location.product_location %} автоматически создает имя пользователя для каждого пользователя при первом входе пользователя в {% data variables.location.product_location %} через внешнюю систему проверки подлинности.

{% elsif ghec %}

Если вы используете предприятие с {% data variables.product.prodname_emus %}, сотрудники вашего предприятия выполняют проверку подлинности для доступа к {% data variables.product.prodname_dotcom %} через вашего поставщика удостоверений SAML (IdP). Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) и разделе[ Сведения о проверке подлинности для вашего предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server).

{% data variables.product.prodname_dotcom %} автоматически создает имя пользователя для каждого пользователя при подготовке учетной записи пользователя с помощью SCIM, нормализуя идентификатор, предоставленный поставщиком удостоверений, а затем добавляя символ подчеркивания и короткий код. Если несколько идентификаторов нормализуются в одно и то же имя пользователя, возникает конфликт имен пользователей, и создается только первая учетная запись пользователя. Вы можете устранить проблемы с именами пользователей, изменив поставщика удостоверений, чтобы нормализованные имена пользователей были уникальными и не были ограничены 39 символами.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %} использует SAML SSO для проверки подлинности и автоматически создает имя пользователя для каждого пользователя, когда он впервые выполняет вход через вашего поставщика удостоверений (IdP).

{% endif %}

{% ifversion ghec %}
## Сведения о именах пользователей для {% data variables.enterprise.prodname_managed_users %}

При создании {% data variables.enterprise.prodname_emu_enterprise %} вы выберете короткий код, который будет использоваться в качестве суффикса для имен пользователей участников предприятия. {% data reusables.enterprise-accounts.emu-shortcode %} Пользователь установки, который настраивает единый вход SAML, имеет имя пользователя в формате **@<em>SHORT-CODE</em>_admin**. 

При подготовке нового пользователя из поставщика удостоверений новый {% data variables.enterprise.prodname_managed_user %} будет иметь имя пользователя {% data variables.product.prodname_dotcom %} в формате **@<em>IDP-USERNAME</em>_ <em>SHORT-CODE</em>**. Компонент <em>IDP-USERNAME</em> формируется путем нормализации значения атрибута `userName` SCIM, отправляемого из поставщика удостоверений. 

| Поставщик удостоверений                 | Имя пользователя {% data variables.product.prodname_dotcom %}  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ формируется путем нормализации символов, предшествующих символу `@` в UPN (имени субъекта-пользователя), который не включает `#EXT#` для гостевых учетных записей. |
| Okta                              | _IDP-USERNAME_ — это нормализованный атрибут имени пользователя, предоставляемый IdP.               |

Эти правила могут привести к тому, что IdP будет предоставлять один и тот же компонент _IDP-USERNAME_ для нескольких пользователей. Например, для Azure AD результатом использования следующих имен субъектов-пользователей будет то же имя пользователя:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Это приведет к конфликту имени пользователя, и будет подготовлен только первый пользователь. Дополнительные сведения см. в разделе [Устранение проблем с именами пользователей](#resolving-username-problems).
{% endif %}

Длина имен пользователей {% ifversion ghec %} с подчеркиванием и коротким кодом {% endif %} не должна превышать 39 символов.

## Сведения о нормализации имен пользователей

Имена пользователей для учетных записей пользователей в {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} могут содержать только буквенно-цифровые символы и тире (`-`).

{% ifversion ghec %} Когда вы настраиваете проверку подлинности SAML, {% data variables.product.product_name %} использует значение атрибута `userName` SCIM, отправленное от IdP, для определения имени пользователя для соответствующей учетной записи пользователя в {% data variables.product.prodname_dotcom_the_website %}. Если это значение включает неподдерживаемые символы, {% data variables.product.product_name %} нормализует имя пользователя в соответствии со следующими правилами.
{% elsif ghes %} Когда вы настраиваете проверку подлинности CAS, LDAP или SAML, {% data variables.product.product_name %} использует идентификатор из учетной записи пользователя вашего внешнего поставщика проверки подлинности, чтобы определить имя пользователя для соответствующей учетной записи пользователя в {% data variables.product.product_name %}. Если идентификатор содержит неподдерживаемые символы, {% data variables.product.product_name %} нормализует имя пользователя в соответствии со следующими правилами.
{% elsif ghae %} Когда вы настраиваете проверку подлинности SAML, {% data variables.product.product_name %} использует идентификатор из учетной записи пользователя в вашем IdP, чтобы определить имя пользователя для соответствующей учетной записи пользователя в {% data variables.product.product_name %}. Если идентификатор содержит неподдерживаемые символы, {% data variables.product.product_name %} нормализует имя пользователя в соответствии со следующими правилами.
{% endif %}

1. {% data variables.product.product_name %} преобразует любой небуквенно-цифровой символ в имени пользователя вашей учетной записи в тире. Например, имя пользователя `mona.the.octocat` будет нормализовано до `mona-the-octocat`. Обратите внимание, что нормализованные имена пользователей также не могут начинаться или заканчиваться дефисом. Они также не могут содержать два последовательных тире.

1. Имена пользователей, созданные на основе адресов электронной почты, создаются на основе нормализованных символов, предшествующих символу `@`.

1. Имена пользователей, созданные из учетных записей домена, создаются из нормализованных символов после `\\` разделителя. 

1. Если несколько учетных записей нормализуются в одно и то же имя пользователя {% data variables.product.product_name %}, создается только первая учетная запись пользователя. Последующие пользователи с тем же именем пользователя не смогут войти в систему. {% ifversion ghec %} Дополнительные сведения см. в разделе [Устранение проблем с именами пользователей](#resolving-username-problems). {% endif %}

### Примеры нормализации имен пользователей

| Идентификатор поставщика | Нормализованное имя пользователя в {% data variables.product.prodname_dotcom %} | Результат |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя успешно создано. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается, поскольку начинается с дефиса. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается, поскольку заканчивается дефисом. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается, поскольку содержит два последовательных дефиса. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается. Хотя нормализованное имя пользователя является допустимым, оно уже существует. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается. Хотя нормализованное имя пользователя является допустимым, оно уже существует. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается. Хотя нормализованное имя пользователя является допустимым, оно уже существует. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Это имя пользователя не создается, так как оно превышает ограничение в 39 символов. |

{% ifversion not ghec %}
### Сведения о нормализации имен пользователей с использованием SAML

{% ifversion ghes %} Если вы настроите проверку подлинности SAML для {% data variables.location.product_location %}, {% endif %}{% data variables.product.product_name %} определяет имя пользователя каждого пользователя по одному из следующих утверждений в ответе SAML, упорядоченных по убыванию приоритета.

1. Настраиваемый атрибут `username`, если он определен и присутствует
1. Утверждение `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, если оно присутствует
1. Утверждение `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, если оно присутствует
1. элемент `NameID`;

{% data variables.product.product_name %} требует элемент `NameID`, даже если присутствуют другие атрибуты. Дополнительные сведения см. в разделе [Справочник по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes).

{% data variables.product.product_name %} создает сопоставление между `NameID` из поставщика удостоверений и именем пользователя {% ifversion ghae %}в{% else %}на{% endif %} {% data variables.location.product_location %}, поэтому `NameID` объект должен быть постоянным, уникальным и не подлежит изменению в течение жизненного цикла пользователя.

{% ifversion ghes %} {% note %}

**Примечание.** Если `NameID` для пользователя изменится в поставщике удостоверений, пользователь увидит сообщение об ошибке при входе в {% data variables.location.product_location %}. Чтобы восстановить доступ пользователя, вам необходимо обновить сопоставление `NameID` учетной записи пользователя. Дополнительные сведения см. в разделе [Обновление SAML `NameID` пользователя](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## Устранение проблем с именем пользователя

При подготовке нового пользователя, если имя пользователя превышает 39 символов (включая символ подчеркивания и короткий код) или конфликтует с существующим пользователем в организации, попытка подготовки завершится ошибкой `409` . 

Чтобы устранить эту проблему, необходимо внести одно из следующих изменений в поставщик удостоверений, чтобы все нормализованные имена пользователей были в пределах ограничения символов и уникальны.
- Изменение значения атрибута `userName` для отдельных пользователей, которые вызывают проблемы
- Изменение сопоставления атрибутов `userName` для всех пользователей
- Настройка настраиваемого `userName` атрибута для всех пользователей

При изменении сопоставления атрибутов имена пользователей существующих {% data variables.enterprise.prodname_managed_users %} будут обновлены, но ничего другого в учетных записях не изменится, включая журнал действий.

{% note %}

**Примечание.** {% data variables.contact.github_support %} не может помочь с настройкой сопоставлений атрибутов или пользовательских выражений. Вы можете обратиться к своему IdP с любыми вопросами.

{% endnote %}

### Устранение проблем с именами пользователей в Azure AD

Чтобы устранить проблемы с именами пользователей в Azure AD, измените значение имени участника-пользователя для конфликтующего пользователя или измените сопоставление атрибутов для атрибута`userName`. Если вы измените сопоставление атрибута, вы сможете выбрать существующий атрибут или использовать выражение, чтобы убедиться, что все подготовленные пользователи имеют уникальный нормализованный псевдоним.

1. В Azure AD откройте приложение {% data variables.product.prodname_emu_idp_application %}.
1. В области слева щелкните **Подготовка**.
1. Щелкните **Изменить подготовку**.
1. Разверните раздел **Сопоставления** и щелкните **Подготовка пользователей Azure Active Directory**.
1. Щелкните сопоставление атрибута `userName` {% data variables.product.prodname_dotcom %}. 
1. Измените сопоставление атрибута.
   - Чтобы сопоставить существующий атрибут в Azure AD с атрибутом `userName` в {% data variables.product.prodname_dotcom %}, щелкните поле нужного атрибута. Затем сохраните изменения и дождитесь завершения цикла подготовки в течение примерно 40 минут.
   - Чтобы использовать выражение вместо существующего атрибута, измените тип сопоставления на "Выражение", а затем добавьте пользовательское выражение, которое сделает это значение уникальным для всех пользователей. Например, можно использовать `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. Дополнительные сведения см. в статье [Справочник по написанию выражений для сопоставлений атрибутов в Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) в Документации Майкрософт.

### Устранение проблем с именами пользователей в Okta

Чтобы устранить проблемы с именами пользователей в Okta, обновите параметры сопоставления атрибутов для приложения {% data variables.product.prodname_emu_idp_application %}.

1. В Okta откройте приложение {% data variables.product.prodname_emu_idp_application %}.
1. Щелкните **Войти**.
1. В разделе "Параметры" щелкните **OK**.
1. Обновите раздел "Формат имени пользователя приложения".
{% endif %}
