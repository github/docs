---
title: Применение политик для параметров безопасности в вашем предприятии
intro: Вы можете применять политики для управления параметрами безопасности в организациях предприятия или разрешить настройку политик в каждой организации.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183967'
---
## Сведения о политиках для параметров безопасности в вашем предприятии

Вы можете применять политики для управления параметрами безопасности для организаций, принадлежащих вашему предприятию в {% data variables.product.product_name %}. По умолчанию владельцы организации могут управлять параметрами безопасности. 

{% ifversion ghec or ghes %}

## Обязательная двухфакторная проверка подлинности для организаций в вашем предприятии

Владельцы предприятия могут требовать, чтобы члены организации, руководители выставления счетов и внешние участники совместной работы во всех организациях, принадлежащих предприятию, использовали двухфакторную проверку подлинности для защиты личных учетных записей.

Прежде чем можно будет требовать двухфакторную проверку подлинности для всех организаций, принадлежащих вашему предприятию, вы должны включить двухфакторную проверку подлинности для собственной учетной записи. Дополнительные сведения см. в разделе [Защита учетной записи с помощью двухфакторной проверки подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Предупреждения.**

- Если вы требуете двухфакторную проверку подлинности для вашего предприятия, то те члены организации, внешние участники совместной работы и менеджеры выставления счетов (включая учетные записи ботов) во всех организациях вашего предприятия, которые не используют двухфакторную проверку подлинности, будут удалены из организации и потеряют доступ к своим репозиториям. Они также потеряют доступ к своим вилкам в частных репозиториях организации. Вы можете восстановить их привилегии доступа и параметры, если они включат двухфакторную проверку подлинности для личной учетной записи в течение трех месяцев после их удаления из вашей организации. Дополнительные сведения см. в разделе [Восстановление бывшего участника вашей организации](/articles/reinstating-a-former-member-of-your-organization).
- Любой владелец организации, член, менеджер выставления счетов или внешний участник совместной работы в любой из организаций, принадлежащих вашему предприятию, отключивший двухфакторную проверку подлинности для своей личной учетной записи после того, как вы выключили обязательную двухфакторную проверку подлинности, будет автоматически удален из организации.
- Если вы являетесь единственным владельцем предприятия, которому требуется двухфакторная проверка подлинности, вы не сможете отключить двухфакторную проверку подлинности для своей личной учетной записи без отключения обязательной двухфакторной проверки подлинности для предприятия.

{% endwarning %}

Прежде чем требовать использование двухфакторной проверки подлинности, рекомендуется уведомить об этом членов организации, внешних участников совместной работы и менеджеров выставления счетов и попросить их настроить двухфакторную проверку подлинности для своих учетных записей. Владельцы организаций могут посмотреть, используют ли уже члены организации и внешние участники совместной работы двухфакторную проверку подлинности, на вкладке "Люди" каждой организации. Дополнительные сведения см. в разделе [Проверка включения двухфакторной проверки подлинности пользователями организации](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. В разделе "Двухфакторная проверка подлинности" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Двухфакторная проверка подлинности" выберите **Требовать двухфакторную проверку подлинности для всех организаций в предприятии** и нажмите **Сохранить**.
  ![Значок обязательной двухфакторной проверки подлинности](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. При появлении запроса прочитайте сведения о членах и внешних участниках совместной работы, которые будут удалены из организаций, принадлежащих вашему предприятию. Чтобы подтвердить изменение, введите имя предприятия, а затем нажмите **Удалить членов и требовать двухфакторную проверку подлинности**.
  ![Поле подтверждения принудительного применения двухфакторной проверки подлинности](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Если какие-либо члены или внешние участники удалены из организаций, принадлежащих вашему предприятию, рекомендуется при желании отправить им приглашение восстановить свои бывшие привилегии и доступ к вашей организации. Прежде чем принять приглашение, каждый пользователь должен будет включить двухфакторную проверку подлинности.

{% endif %}

## Управление центрами сертификации SSH для вашего предприятия

Вы можете использовать центры сертификации SSH (ЦС), чтобы разрешать членам любой организации, принадлежащей вашему предприятию, доступ к репозиториям этой организации с помощью предоставленных вами сертификатов SSH. {% data reusables.organizations.can-require-ssh-cert %} Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

{% data reusables.organizations.add-extension-to-cert %}

### Добавление центра сертификации SSH

Если вы требуете сертификаты SSH, для вашего предприятия, члены предприятия должны использовать специальный URL-адрес для операций Git по протоколу SSH. Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Удаление центра сертификации SSH

Удаление ЦС не может быть отменено. Если вы хотите использовать тот же ЦС в будущем, вам потребуется отправить ЦС снова.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## Управление единым входом для пользователей без проверки подлинности

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Если ваше предприятие использует {% data variables.product.prodname_emus %}, вы можете выбрать, какие пользователи не прошли проверку подлинности при попытке доступа к ресурсам предприятия. Дополнительные сведения о {% data variables.product.prodname_emus %} см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

По умолчанию, чтобы скрыть существование частных ресурсов, когда пользователь без проверки подлинности пытается получить доступ к вашему предприятию, {% data variables.product.company_short %} отображает ошибку 404.

Чтобы избежать путаницы со стороны разработчиков, вы можете изменить это поведение, чтобы пользователи автоматически перенаправлялись на единый вход (SSO) через поставщика удостоверений (IdP). При включении автоматического перенаправления любой пользователь, который посещает URL-адрес любого ресурса вашего предприятия, сможет увидеть, что ресурс существует. Однако они смогут просматривать ресурс, только если у них есть соответствующий доступ после проверки подлинности с помощью поставщика удостоверений.

{% note %}

**Примечание:** Если пользователь вошел в свою личную учетную запись при попытке получить доступ к каким-либо из корпоративных ресурсов, он будет автоматически выходить из системы и перенаправляться на единый вход для входа в {% data variables.enterprise.prodname_managed_user %}. Дополнительные сведения см. в разделе [Управление несколькими учетными записями](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Параметры единого входа" установите или снимите флажок **Автоматически перенаправлять пользователей для входа**.

   ![Флажок для автоматического перенаправления пользователей на вход {](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) % endif %}

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом для предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) {%- ifversion ghec %}
- ["Доступ к отчетам о соответствии для вашего предприятия](/admin/overview/accessing-compliance-reports-for-your-enterprise)" {%- endif %} {%- ifversion ghec or ghae %}
- ["Ограничение сетевого трафика с помощью списка разрешенных IP-адресов со списком разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
