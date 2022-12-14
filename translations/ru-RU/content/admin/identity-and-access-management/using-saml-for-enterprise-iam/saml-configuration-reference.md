---
title: Справочник по конфигурации SAML
shortTitle: SAML reference
intro: 'Вы можете просмотреть метаданные SAML для {% ifversion ghec %}вашей организации или предприятия на {% данных variables.product.product_name %}{% elsif ghes %}{% данных variables.location.product_location %}{% elsif ghae %}ваше предприятие на {% данных variables.product.product_name %}{% endif %}, и вы можете узнать больше о доступных атрибутах SAML и требованиях к ответу.'
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
ms.openlocfilehash: 8a6e0a569e21bb12b2fd31a40c8c0bd98e34fe65
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098287'
---
## Сведения о конфигурации SAML

Чтобы использовать единый вход SAML для проверки подлинности на {% данных variables.product.product_name %}, Необходимо настроить внешний поставщик удостоверений SAML (IdP) и {% ifversion ghes %}{% данных variables.location.product_location %}{% elsif ghec %}ваше предприятие или организация на {% данных variables.location.product_location %}{% elsif ghae %}вашей организации на {% данных variables.product.product_name %}{% endif %}. В конфигурации SAML {% data variables.product.product_name %} используется как поставщик услуг (SP) SAML.

Вы должны ввести уникальные значения из вашего SAML IdP при настройке SAML SSO для {% data variables.product.product_name %}, а также вы должны ввести уникальные значения из {% data variables.product.product_name %} в вашем IdP. Дополнительные сведения о настройке единого входа SAML для {% data variables.product.product_name %} см. в разделах [Настройка единого входа SAML для вашего предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %} и [Включение и тестирование единого входа SAML для вашей организации](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}.

## Метаданные SAML

{% ifversion ghec %}

Метаданные SP для {% data variables.product.product_name %} доступны как для организаций, так и для предприятий с единым входом SAML. В {% data variables.product.product_name %} используется привязка `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Организации

Единый вход SAML можно настроить для отдельной организации в предприятии. Вы также можете настроить единый вход SAML SSO для организации, если вы используете отдельную организацию в {% data variables.product.product_name %} и не используете корпоративную учетную запись. Дополнительные сведения см. в разделе [Управление единым входом SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization).

Метаданные субъекта-службы для организации на {% данных variables.location.product_location %} доступны в `https://github.com/orgs/ORGANIZATION/saml/metadata`том месте, где **ОРГАНИЗАЦИЯ** — это название вашей организации на {% данных variables.location.product_location %}.

| Значение | Другие названия | Описание | Пример |
| :- | :- | :- | :- |
| Идентификатор сущности SP | URL-адрес SP, ограничение аудитории | URL-адрес верхнего уровня для вашей организации на {% данных variables.location.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| URL-адрес службы контроля доступа (ACS) | URL-адрес ответа, получателя или назначения | URL-адрес, с которого IdP отправляет ответы SAML | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL-адрес единого входа SP | | URL-адрес, по которому IdP начинает единый вход |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### Предприятия

Метаданные субъекта-службы для предприятия на {% данных variables.location.product_location %} доступны в `https://github.com/enterprises/ENTERPRISE/saml/metadata`том месте, где **ENTERPRISE** — это имя вашего предприятия на {% данных variables.location.product_location %}.

| Значение | Другие названия | Описание | Пример |
| :- | :- | :- | :- |
| Идентификатор сущности SP | URL-адрес SP, ограничение аудитории | URL-адрес верхнего уровня для вашего предприятия на {% данных variables.location.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| URL-адрес службы контроля доступа (ACS) | URL-адрес ответа, получателя или назначения | URL-адрес, с которого IdP отправляет ответы SAML | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL-адрес единого входа SP | | URL-адрес, по которому IdP начинает единый вход |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

Метаданные sp для {% данных variables.location.product_location %} доступны по `http(s)://HOSTNAME/saml/metadata`адресу **, где HOSTNAME** — это имя узла для вашего экземпляра. В {% data variables.product.product_name %} используется привязка `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Значение | Другие названия | Описание | Пример |
| :- | :- | :- | :- |
| Идентификатор сущности SP | URL-адрес SP, ограничение аудитории | URL-адрес верхнего уровня для {% data variables.product.product_name %} | `http(s)://HOSTNAME`
| URL-адрес службы контроля доступа (ACS) | URL-адрес ответа, получателя или назначения | URL-адрес, с которого IdP отправляет ответы SAML | `http(s)://HOSTNAME/saml/consume` |
| URL-адрес единого входа SP | | URL-адрес, по которому IdP начинает единый вход |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

Метаданные SP для вашего предприятия на {% data variables.product.product_name %} доступны по адресу `https://HOSTNAME/saml/metadata`, где **HOSTNAME** — это имя узла вашего предприятия в {% data variables.product.product_name %}. В {% data variables.product.product_name %} используется привязка `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Значение | Другие названия | Описание | Пример |
| :- | :- | :- | :- |
| Идентификатор сущности SP | URL-адрес SP, ограничение аудитории | URL-адрес верхнего уровня для {% data variables.product.product_name %} | `https://HOSTNAME` |
| URL-адрес службы контроля доступа (ACS) | URL-адрес ответа, получателя или назначения | URL-адрес, с которого IdP отправляет ответы SAML | `https://HOSTNAME/saml/consume` |
| URL-адрес единого входа SP | | URL-адрес, по которому IdP начинает единый вход |  `https://HOSTNAME/sso` |

{% endif %}

## Атрибуты SAML

Следующие атрибуты SAML доступны для {% data variables.product.product_name %}.{% ifversion ghes %} Вы можете изменить имена атрибутов в консоли управления, за исключением самого атрибута `administrator`. Дополнительные сведения см. в разделе [Доступ к консоли управления](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).{% endif %}

| Имя | Необходим? | Описание |
| :- | :- | :- |
| `NameID` | Да | Постоянный идентификатор пользователя. Можно использовать любой формат идентификатора постоянного имени. {% ifversion ghec %}Если вы используете предприятие с {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} нормализует элемент `NameID` для использования в качестве имени пользователя, если не указано одно из альтернативных утверждений. Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).<br><br>{% note %}**Примечание.** Важно, чтобы идентификатор был понятным человеку и постоянным. Переменный формат идентификатора, например `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`, приведет к повторной привязке учетных записей при каждом входе, что может затруднить управление авторизацией.{% endnote %}  |
| `SessionNotOnOrAfter` | Нет | Дата, когда {% data variables.product.product_name %} делает соответствующий сеанс недействительным. После недопустимости пользователь должен еще раз пройти проверку подлинности, чтобы получить доступ к {% ifversion ghec или ghae %}ресурсы вашего предприятия{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в разделе [Длительность сеанса и время ожидания](#session-duration-and-timeout). |
{%- ifversion ghes or ghae %} | `administrator` | Нет | Если значение равно `true`, {% data variables.product.product_name %} автоматически повысит пользователя до {% ifversion ghes %}администратора сайта{% elsif ghae %}владельца предприятия{% endif %}. Задание для этого атрибута всех значений, кроме `true`, приведет к понижению уровня при условии, что значение не пустое. Если пропустить этот атрибут или оставить значение пустым, роль пользователя не изменится. | | `username` | Нет | Имя пользователя для {% данных variables.location.product_location %}. | {%- endif %} | `full_name` | Нет | {% ifversion ghec %}Если вы настраиваете единый вход SAML для предприятия и используете {% data variables.product.prodname_emus %}, {% else %}{% endif %}Полное имя пользователя, которое будет отображаться на странице профиля пользователя. | | `emails` | Нет | Адреса электронной почты пользователя.{% ifversion ghes or ghae %} Вы можете указать более одного адреса.{% endif %}{% ifversion ghec or ghes %} Если вы синхронизируете использование лицензии между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} будет использовать `emails` для идентификации уникальных пользователей в продуктах. Дополнительные сведения см. в разделе [Синхронизация использования лицензии между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud). {% endif %} | | `public_keys` | Нет | {% ifversion ghec %}Если вы настраиваете единый вход SAML для предприятия и используете {% data variables.product.prodname_emus %}, {% else %}{% endif %}Открытые ключи SSH для пользователя. Можно указать несколько ключей. | | `gpg_keys` | Нет | {% ifversion ghec %}Если вы настраиваете единый вход SAML для предприятия и используете {% data variables.product.prodname_emus %}, {% else %}{% endif %}Ключи GPG для пользователя. Можно указать несколько ключей. |

Чтобы указать несколько значений для атрибута, используйте несколько элементов `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Требования к ответу SAML

{% data variables.product.product_name %} требует, чтобы ответное сообщение от вашего IdP соответствовало следующим требованиям.

- Ваш IdP должен предоставить элемент `<Destination>` в корневом документе ответа и обеспечить соответствие URL-адресу ACS, только если корневой документ ответа подписан. Если ваш IdP подпишет утверждение, {% data variables.product.product_name %} проигнорирует это утверждение.
- Ваш IdP всегда должен предоставлять элемент `<Audience>` как часть элемента `<AudienceRestriction>`. Значение должно соответствовать `EntityId` значению для {% данных variables.product.product_name %}.{ % ifversion ghes или ghae %} Это значение является URL-адресом, в котором осуществляется доступ к {% данных variables.location.product_location %}, например {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us`или `https://SUBDOMAIN.ghe.com`{% endif %}.{ % endif %}
  
  {%- ifversion ghec %}
  - Если вы настраиваете SAML для организации, это значение будет равно `https://github.com/orgs/ORGANIZATION`.
  - Если вы настраиваете SAML для предприятия, это значение будет равно `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Ваш IdP должен защищать каждое утверждение в ответе цифровой подписью. Это можно сделать, подписав каждый отдельный элемент `<Assertion>` или подписав элемент `<Response>`.
- IdP должен предоставить элемент `<NameID>` как часть элемента `<Subject>`. Вы можете использовать любой формат идентификатора постоянного имени.
- Ваш IdP должен включать атрибут `Recipient`, который должен быть настроен с URL-адресом ACS. В следующем примере демонстрируется атрибут.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## Длительность сеанса и время ожидания

Чтобы предотвратить проверку подлинности пользователя с помощью поставщика удостоверений и оставаться авторизованным на неопределенный срок, {% данных variables.product.product_name %} периодически делает сеанс недействительным для каждой учетной записи пользователя с доступом к {% ifversion ghec или ghae %}ресурсы вашего предприятия{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}. После этого пользователь должен снова выполнить проверку подлинности с помощью IdP. По умолчанию, если ваш IdP не утверждает значение атрибута `SessionNotOnOrAfter`, {% data variables.product.product_name %} делает сеанс недействительным на {% ifversion ghec %}24 часа{% elsif ghes or ghae %}одну неделю{% endif %} после успешной проверки подлинности с использованием вашего IdP.

Чтобы настроить длительность сеанса, можно определить значение атрибута `SessionNotOnOrAfter` в IdP. Если вы укажете значение менее 24 часов, {% data variables.product.product_name %} может предлагать пользователям выполнять проверку подлинности каждый раз, когда {% data variables.product.product_name %} инициирует перенаправление.

{% ifversion ghec %} Чтобы предотвратить ошибки при проверке подлинности, рекомендуется использовать минимальную продолжительность сеанса 4 часа. Дополнительные сведения см. в разделе [Устранение неполадок с проверкой подлинности SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate).
{% endif %}

{% note %}

**Примечания**

- Для Azure AD настраиваемая политика времени жизни для токенов SAML не контролирует время ожидания сеанса для {% data variables.product.product_name %}.
- Сейчас Okta не отправляет атрибут `SessionNotOnOrAfter` во время проверки подлинности SAML с {% data variables.product.product_name %}. Чтобы получить дополнительные сведения, обратитесь в Okta.

{% endnote %}
