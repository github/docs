---
title: Восстановление бывшего члена организации
intro: 'Владельцы организации могут {% ifversion fpt or ghec %}пригласить бывших участников организации повторно присоединиться к{% else %}добавить бывших участников к{% endif%} вашей организации и решить, следует ли восстановить прежнюю роль пользователя, разрешения доступа, вилки и параметры.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109768'
---
## Восстановление участника

Если пользователь удален из организации одним из следующих способов, его права доступа и параметры сохраняются в течение трех месяцев. 

- Вы вручную удалили пользователя из организации. Дополнительные сведения см. в разделе [Удаление участника из организации](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization).{% ifversion not ghae %}
- Пользователь был удален из вашей организации, так как для участников и сторонних участников совместной работы требовалось включить двухфакторную проверку подлинности (2FA). Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization).{% endif %}{% ifversion fpt or ghec %}
- Пользователь удален из вашей организации, так как вы принудительно применили единый вход SAML. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}» в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}. {% endif %}{% endif %}
- Вы выполнили преобразование участника организации в стороннего участника совместной работы Дополнительные сведения см. в разделе [Преобразование участника организации во внешнего участника совместной работы](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator).

Вы можете восстановить привилегии пользователя, если {% ifversion fpt or ghec %}пригласите{% else %}добавите{% endif %} обратно в организацию в течение этого периода времени.

{% note %}

**Примечание.** {% data reusables.saml.removed-users-can-rejoin %} Вам не нужно приглашать этих пользователей повторно присоединиться. Вместо этого пользователь может войти в свою личную учетную запись, перейти в организацию и щелкнуть баннер, чтобы пройти проверку подлинности с помощью единого входа SAML.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

При восстановлении бывшего участника организации можно восстановить следующие параметры:
 - Роль пользователя в организации
 - Все частные вилки репозиториев, принадлежащих организации
 - Членство в командах организации
 - Предыдущие права доступа и разрешения для репозиториев организации
 - Звездочки для репозиториев организации
 - Выдача назначений в организации
 - Подписки репозитория (параметры уведомлений для наблюдения, отмены наблюдения или игнорирования действий репозитория)

{% ifversion ghes %} Если участник организации был удален из организации, поскольку он не использовал двухфакторную проверку подлинности, а ваша организация по-прежнему требует, чтобы участники использовали 2FA, то такой бывший участник должен включить двухфакторную проверку подлинности, прежде чем можно будет восстановить его членство.
{% endif %}

{% ifversion fpt or ghec %} Если у вашей организации есть платная подписка для каждого пользователя, неиспользуемая лицензия должна быть доступна, прежде чем можно будет восстановить бывшего участника организации. Дополнительные сведения см. в разделе [Сведения о стоимости подписки для каждого пользователя](/articles/about-per-user-pricing). {% data reusables.organizations.org-invite-scim %} {% endif %}

## Восстановление бывшего члена организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. Выберите, следует ли восстановить предыдущие привилегии этого пользователя в организации или удалить свои предыдущие привилегии и задать новые разрешения для доступа, а затем нажать кнопку **Пригласить и восстановить** или **Пригласить и начать заново**.
  ![Укажите, требуется ли восстановление информации](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Выберите, следует ли восстановить предыдущие привилегии этого пользователя в организации или удалить свои предыдущие привилегии и задать новые разрешения для доступа, а затем нажать кнопку **Добавить и восстановить** или **Добавить и начать заново**.
  ![Выберите, следует ли восстановить привилегии](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Если вы удалили предыдущие привилегии для бывшего участника организации, выберите роль для пользователя и при необходимости добавьте их в некоторые команды, а затем нажмите кнопку **Отправить приглашение**.
  ![Параметры роли и команды и кнопка отправки приглашения](/assets/images/help/organizations/add-role-send-invitation.png){% else %}
7. Если вы удалили предыдущие привилегии для бывшего участника организации, выберите роль пользователя и при необходимости добавьте их в некоторые команды, а затем нажмите кнопку **Добавить участника**.
  ![Параметры роли и команды и кнопка добавления участника](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Дополнительные материалы

- [Преобразование участника организации во внешнего участника совместной работы](/articles/converting-an-organization-member-to-an-outside-collaborator)
