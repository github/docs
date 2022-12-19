---
title: Устранение неполадок с проверкой подлинности SAML
shortTitle: Troubleshoot SAML SSO
intro: 'Если вы используете единый вход SAML и пользователи не могут пройти проверку подлинности для доступа к {% данных variables.location.product_location %}, вы можете устранить эту проблему.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: d15a3686045a4d570feb60cade2320f939cc0d86
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107256'
---
{% ifversion ghes %}
## Сведения о проблемах с проверкой подлинности SAML

{% data variables.product.product_name %} регистрирует сообщения об ошибках при неудачной проверке подлинности SAML в журнале проверки подлинности в файле _/var/log/github/auth.log_. Вы можете просмотреть ответы в этом файле журнала, а также настроить более подробное ведение журнала.

Дополнительные сведения о требованиях к ответу SAML см. в [справочнике по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements).

## Настройка отладки SAML

Вы можете настроить {% data variables.product.product_name %} для записи подробных журналов отладки в файл _/var/log/github/auth.log_ для каждой попытки проверки подлинности SAML. Возможно, вы сможете устранить неполадки неудачных попыток проверки подлинности с помощью этих дополнительных выходных данных.

{% warning %}

**Предупреждения**

- Включайте отладку SAML только на время и отключайте ее сразу после завершения устранения неполадок. Если вы оставите отладку включенной, размер журнала будет увеличиться гораздо быстрее, чем обычно, что может снизить производительность {% data variables.product.product_name %}
- Протестируйте новые параметры проверки подлинности для {% данных variables.location.product_location %} в промежуточной среде перед применением параметров в рабочей среде. Дополнительные сведения см. в разделе [Настройка экземпляра промежуточного процесса](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. В разделе "Отладка SAML" нажмите раскрывающийся список и выберите **Включено**.

   ![Снимок экрана: раскрывающийся список для включения отладки SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Попытайтесь войти в {% данных variables.location.product_location %} с помощью поставщика удостоверений SAML.

1. Просмотрите выходные данные отладки в _файле /var/log/github/auth.log_ на {% данных variables.location.product_location %}.

1. Завершив устранение неполадок, откройте раскрывающийся список и выберите **Отключено**.

   ![Снимок экрана: раскрывающийся список для отключения отладки SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Декодирование ответов в _auth.log_

Некоторые выходные данные в _auth.log_ могут быть закодированы в кодировке Base64. Вы можете получить доступ к административной оболочке и использовать `base64` служебную программу для {% данных variables.location.product_location %} для декодирования этих ответов. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

```shell
$ base64 --decode ENCODED_OUTPUT
```

## Ошибка: "Другой пользователь уже владеет этой учетной записью"

Когда пользователь впервые входит в {% данных variables.location.product_location %} с проверкой подлинности SAML, {% данных variables.product.product_name %} создает учетную запись пользователя в экземпляре и сопоставляет SAML `NameID` с учетной записью.

При повторном входе пользователя {% data variables.product.prodname_ghe_server %} сравнивает сопоставление `NameID` учетной записи с ответом поставщика удостоверений. Если `NameID` в ответе поставщика удостоверений больше не соответствует `NameID` пользователя, который ожидает {% data variables.product.product_name %}, вход завершится ошибкой. Пользователь увидит следующее сообщение.

> Другой пользователь уже владеет этой учетной записью. Попросите администратора проверить журнал аутентификации.

Сообщение обычно указывает, что имя пользователя или адрес электронной почты были изменены у поставщика удостоверений. Убедитесь, что сопоставление `NameID` в учетной записи пользователя {% data variables.product.prodname_ghe_server %} соответствует идентификатору пользователя `NameID` у поставщика удостоверений. Дополнительные сведения см. в разделе [Обновление `NameID` SAML для пользователя](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

## Ошибка: "Получатель в ответе SAML пустой или недопустимый"

`Recipient` Если URL-адрес ACS для {% данных variables.location.product_location %}не совпадает, одно из следующих двух сообщений об ошибке появится в журнале проверки подлинности при попытке пользователя пройти проверку подлинности.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Убедитесь, что для поставщика удостоверений задан `Recipient` полный URL-адрес ACS для {% данных variables.location.product_location %}. Например, `https://ghe.corp.example.com/saml/consume`.

## Ошибка: "Ответ SAML не подписан или изменен"

Если поставщик удостоверений не подписал ответ SAML или подпись не соответствует содержимому, в журнале проверки подлинности появится следующее сообщение об ошибке.

```
SAML Response is not signed or has been modified.
```

Убедитесь, что вы настроили подписанные утверждения для приложения {% data variables.product.product_name %} у поставщика удостоверений.

## Ошибка: "Аудитория недопустима" или "Утверждение не найдено"

Если в ответе поставщика удостоверений отсутствует или неверное значение `Audience`, в журнале проверки подлинности появится следующее сообщение об ошибке.

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Убедитесь, что для поставщика удостоверений `EntityId` задано значение `Audience` {% данных variables.location.product_location %}, которое является полным URL-адресом экземпляра. Например, `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
