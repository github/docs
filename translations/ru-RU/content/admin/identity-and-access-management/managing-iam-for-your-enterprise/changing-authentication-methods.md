---
title: Изменение методов проверки подлинности
intro: 'Вы можете в любое время изменить способ проверки подлинности {% data variables.product.prodname_ghe_server %} с помощью существующих учетных записей.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 8aa09520dc05689591a698b937604fb710201d4c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098116'
---
Учетные записи пользователей на {% данных variables.location.product_location %} сохраняются при изменении метода проверки подлинности, и пользователи будут продолжать выполнять вход в ту же учетную запись, если имя пользователя не изменится.

Если вследствие нового метода проверки подлинности изменяются имена пользователей, будут созданы новые учетные записи. Администратор может переименовать пользователей с помощью параметров администратора сайта или [API администрирования пользователей](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Другие проблемы, которые следует учитывать:

* **Пароли.** Если вы переключитесь на встроенную проверку подлинности для своего экземпляра, пользователи должны [задать пароль](/enterprise/user/articles/how-can-i-reset-my-password/) после завершения изменения.

* **Администраторы сайта.** Правами администратора [управляет поставщик удостоверений при использовании SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes), а также они могут [управляться членством в группах при использовании протокола LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Членство в команде.** [Управлять членством в команде](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) с сервера каталогов позволяет только протокол LDAP.

* **Приостановка пользователя.** При использовании протокола LDAP для проверки подлинности доступ к {% data variables.product.prodname_ghe_server %} можно контролировать с помощью _групп с ограниченным доступом_. После переключения на протокол LDAP, если настроены группы с ограниченным доступом, существующие пользователи, которые не входят в одну из этих групп, будут приостановлены. Приостановка будет происходить при входе в систему или во время следующей синхронизации по протоколу LDAP.

* **Членство в группах.** При использовании протокола LDAP для проверки подлинности пользователи автоматически [приостанавливаются и разблокируются](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) на основе членства в группах с ограниченным доступом и состояния учетной записи в Active Directory.

* **Проверка подлинности Git:** SAML и CAS поддерживают проверку подлинности Git только по протоколу HTTP или HTTPS с помощью [{% данных variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use). Проверка пароля по протоколу HTTP или HTTPS не поддерживается. ПРОТОКОЛ LDAP поддерживает проверку подлинности Git на основе паролей по умолчанию, но мы рекомендуем [отключить этот метод](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) и принудительно выполнить проверку подлинности с помощью {% данных variables.product.pat_generic %} или ключа SSH.

* **Проверка подлинности API:** SAML и CAS поддерживают проверку подлинности API только с помощью [{% данных variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use). Обычная проверка подлинности не поддерживается.

* **Двухфакторная проверка подлинности.** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Резервная проверка подлинности для пользователей без учетной записи внешнего поставщика проверки подлинности:** Вы можете пригласить пользователей для проверки подлинности в {% данных variables.location.product_location %}, не добавляя их в поставщик удостоверений. Дополнительные сведения см. в статье [Разрешение встроенной проверки подлинности для пользователей за пределами поставщика](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).
