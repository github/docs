---
title: Добавление организаций в предприятие
intro: 'Вы можете добавить организации для управления на предприятии, создав новую организацию, пригласив существующую организацию или передав организацию из другой корпоративной учетной записи.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127622'
---
## Сведения о добавлении организаций в корпоративную учетную запись

Ваша корпоративная учетная запись может владеть организациями. Члены предприятия могут совместно работать над связанными проектами в организации. Дополнительные сведения см. в статье "[Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

В корпоративную учетную запись можно добавлять новые организации. Если вы не используете {% data variables.product.prodname_emus %}, вы можете добавить существующие организации на {% data variables.location.product_location %} в ваше предприятие. Нельзя добавить существующую организацию из {% data variables.enterprise.prodname_emu_enterprise %} в другое предприятие.

{% data reusables.enterprise.create-an-enterprise-account %} Дополнительные сведения см. в статье "[Создание корпоративной учетной записи](/admin/overview/creating-an-enterprise-account)".

После добавления существующей организации в предприятие ее ресурсы останутся доступными членам организации по тем же URL-адресам, но будут применены следующие изменения.

- Члены организации станут членами предприятия, и {% data variables.product.company_short %} будет выставлять счета корпоративной учетной записи за использование организации. Необходимо убедиться, что у корпоративной учетной записи имеется достаточно лицензий для размещения новых членов. Дополнительные сведения см. в разделе [О выставлении счетов для вашего предприятия](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
- Владельцы предприятия могут управлять своей ролью в организации. Дополнительные сведения см. в статье [Управление ролью в организации, принадлежащей предприятию](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
- Любые политики, применяемые к предприятию, будут применяться к организации. Дополнительные сведения см. в статье "[Сведения о политиках предприятия](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".
- Если для корпоративной учетной записи настроен единый вход SAML, конфигурация SAML предприятия будет применяться к организации. Если в организации использовался единый вход SAML, конфигурация корпоративной учетной записи заменит конфигурацию организации. В корпоративных учетных записях не поддерживается SCIM, поэтому SCIM будет отключен для организации. Дополнительные сведения см. в статьях "[Настройка единого входа SAML для предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" и "[Переключение конфигурации SAML из организации в корпоративную учетную запись](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Если для организации был настроен единый вход SAML, существующие {% data variables.product.pat_generic %} или ключи SSH, которые были авторизованы для доступа к ресурсам организации, будут авторизованы для доступа к тем же ресурсам. Чтобы получить доступ к дополнительным организациям, принадлежащим предприятию, участники должны авторизовать {% data variables.product.pat_generic %} или ключ. Дополнительные сведения см. в разделах [Авторизация {% data variables.product.pat_generic %} для единого входа SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) и [Авторизация ключа SSH для использования с единым входом SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).
- Если организация была подключена к {% data variables.product.prodname_ghe_server %} или {% data variables.product.prodname_ghe_managed %} с помощью {% data variables.product.prodname_github_connect %}, при добавлении организации в предприятие подключение не обновится. Возможности {% data variables.product.prodname_github_connect %} больше не будут работать в организации. Чтобы продолжить использование {% data variables.product.prodname_github_connect %}, необходимо отключить и повторно подключить эту возможность. Дополнительные сведения см. в следующих руководствах.

  - [Управление {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect) в документации {% data variables.product.prodname_ghe_server %}
  - [Управление {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect) в документации {% data variables.product.prodname_ghe_managed %}
- Если в организации использовались приложения с выставлением счетов в {% data variables.product.prodname_marketplace %}, она может продолжить их использовать, но производить оплату необходимо напрямую поставщику. Чтобы получить дополнительные сведения, обратитесь к поставщику приложения.
- Все купоны будут удалены из организации. Чтобы повторно применить купон, [обратитесь в нашу группу продаж](https://github.com/enterprise/contact).

## Создание организации в корпоративной учетной записи

Новые организации, создаваемые в параметрах корпоративной учетной записи, включаются в подписку {% data variables.product.prodname_ghe_cloud %} вашей корпоративной учетной записи.

Владельцы предприятия, создающие организацию, принадлежащую корпоративной учетной записи, автоматически становятся владельцами организации. Дополнительные сведения о владельцах организации см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. На вкладке **Организации** над списком организаций нажмите кнопку **Создать организацию**.
  ![Кнопка "Создать организацию"](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. В поле "Имя организации" введите имя вашей организации.
  ![Поле для ввода имени новой организации](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Щелкните **Создать организацию**.
5. В поле "Пригласить владельцев" введите имя пользователя, которого вы хотите пригласить, чтобы он стал владельцем организации, а затем нажмите кнопку **Пригласить**.
  ![Поле поиска владельца организации и кнопка "Пригласить"](/assets/images/help/business-accounts/invite-org-owner.png)
6. Нажмите кнопку **Готово**.

## Приглашение организации присоединиться к корпоративной учетной записи

Владельцы предприятия могут пригласить существующие организации присоединиться к их корпоративным учетным записям. Если организация, которую вы хотите пригласить, уже принадлежит другой корпоративной учетной записи, вы должны быть владельцем обеих корпоративных учетных записей, или предыдущее предприятие должно сначала отказаться от владения организацией. Дополнительные сведения см. в разделе "[Удаление организации из предприятия](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)". 

{% data reusables.enterprise-accounts.access-enterprise %}
1. На вкладке **Организации** над списком организаций нажмите кнопку **Пригласить организацию**.
![Кнопка "Пригласить организацию"](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. В разделе "Название организации" начните вводить название организации, которую вы хотите пригласить, и выберите его, когда оно появится в раскрывающемся списке.
![Поиск организации](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Нажмите кнопку **Пригласить организацию**.
5. Владельцы организации получат электронное письмо с приглашением присоединиться к предприятию. Прежде чем процесс может быть продолжен, по крайней мере один владелец должен принять приглашение. Вы можете отменить или повторно отправить приглашение в любое время, прежде чем владелец утвердит его.
![Отмена или повторная отправка](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. После того, как владелец организации утвердит приглашение, вы можете просмотреть его состояние в списке ожидающих приглашений.
![Ожидающие приглашение](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Чтобы завершить передачу, нажмите кнопку **Утвердить**.
![Утверждение приглашения](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Перенос организации между корпоративными учетными записями

Владельцы предприятий могут передавать существующие организации между корпоративными учетными записями. Вы должны быть корпоративным владельцем обеих корпоративных учетных записей. 

{% note %}

**Примечание:** Вы не можете перенести существующую организацию в {% data variables.enterprise.prodname_emu_enterprise %}или из нее.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Рядом с организацией, которую вы хотите перенести, выберите раскрывающийся список {% octicon "gear" width="16" aria-label="Gear" %}, а затем щелкните **Перенести организацию**. 
![Снимок экрана: кнопка передачи](/assets/images/help/business-accounts/org-transfer-button.png)
1. Выберите раскрывающееся меню **Выбрать предприятие** , начните вводить имя целевого предприятия и выберите предприятие, когда оно появится в раскрывающемся списке.
![Снимок экрана: раскрывающийся список "Предприятие"](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Нажмите **кнопку Проверить передачу**.
3. Чтобы подтвердить передачу, щелкните **Перенести организацию**.
![Снимок экрана: кнопка "Организация передачи"](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
