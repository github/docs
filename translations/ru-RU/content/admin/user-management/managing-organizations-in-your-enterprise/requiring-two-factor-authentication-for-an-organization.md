---
title: Требование прохождения двухфакторной проверки подлинности в организации
intro: 'Можно требовать от членов организации и внешних участников совместной работы включить двухфакторную проверку подлинности для личных учетных записей в организации, чтобы затруднить злоумышленникам доступ к репозиториям и параметрам организации.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 7686d3c816c181a0d32631fca203a77fccae58c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097942'
---
При использовании протокола LDAP или встроенной проверки подлинности двухфакторная проверка подлинности поддерживается для {% данных variables.location.product_location %}. Администраторы организации могут требовать от участников прохождения двухфакторной проверки подлинности.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Подробнее см. в разделе "[Сведения о двухфакторной проверке подлинности](/github/authenticating-to-github/about-two-factor-authentication)".

## Требования к применению двухфакторной проверки подлинности

Прежде чем требовать от членов организации и внешних сотрудников использовать 2FA, необходимо [включить двухфакторную проверку подлинности](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/) для личной учетной записи.

{% warning %}

**Предупреждения.**

- Если требуется двухфакторная проверка подлинности, члены организации внешние участники совместной работы (включая учетные записи ботов), которые не используют 2FA, будут удалены из организации и потеряют доступ к своим репозиториям, включая вилки частных репозиториев. Если они активируют 2FA для своей личной учетной записи в течение трех месяцев после удаления из организации, вы можете [восстановить их права и параметры доступа](/enterprise/user/articles/reinstating-a-former-member-of-your-organization).
- Если требуется 2FA, члены организации или внешние участники совместной работы, отключившие 2FA, будут автоматически удалены из организации.
- Если вы являетесь единственным владельцем организации, требующей двухфакторной проверки подлинности, вы не сможете отключить 2FA для личной учетной записи без отключения обязательной двухфакторной проверки подлинности для организации.

{% endwarning %}

Прежде чем требовать использование двухфакторной проверки подлинности, рекомендуется уведомить об этом членов организации и внешних участников совместной работы и попросить их настроить 2FA для своих учетных записей. [Узнать, используют ли члены организации и внешние участники 2FA](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled), можно на вкладке "Люди" организации.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Просмотр пользователей, удаленных из организации

Чтобы просмотреть пользователей, которые были автоматически удалены из организации из-за несоблюдения требований прохождения двухфакторной проверки подлинности, можно [выполнить поиск в журнале аудита](/enterprise/admin/guides/installation/searching-the-audit-log/) с помощью `reason:two_factor_requirement_non_compliance` в поле поиска.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Введите поисковый запрос с помощью `reason:two_factor_requirement_non_compliance`.
 ![Событие журнала аудита инструментов персонала, показывающее пользователя, удаленного из-за несоблюдения требований прохождения двухфакторной проверки подлинности](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Чтобы сузить поиск:
    - удаленных членов организации, введите `action:org.remove_member AND reason:two_factor_requirement_non_compliance`;
    - удаленных внешних участников совместной работы, введите `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`;

  Можно также просмотреть пользователей, удаленных из определенной организации, с помощью имени организации в поиске:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Нажмите кнопку **Поиск**.  

## Помощь удаленным членам организации и внешним участникам совместной работы в повторном присоединении к организации

Если члены организации или внешние участники совместной работы удаляются из организации при включении обязательного использования двухфакторной проверки подлинности, они получат электронное письмо с уведомлением об удалении. Затем они должны включить 2FA для своей личной учетной записи и обратиться к владельцу организации, чтобы запросить доступ к организации.

## Дополнительные материалы

- "[Проверка включения 2FA у пользователей организации](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Защита учетной записи с помощью двухфакторной проверки подлинности (2FA)](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Восстановление бывшего члена организации](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)"
- "[Восстановление доступа бывшего внешнего участника совместной работы к организации](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
