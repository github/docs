---
title: Обновление SAML NameID пользователя
shortTitle: Update SAML NameID
intro: 'Когда изменения учетной записи `NameID` в поставщике удостоверений (IdP) и пользователь больше не может {% ifversion ghes или ghae %}войти в {% данных variables.location.product_location %}{% elsif ghec %}пройти проверку подлинности для доступа к ресурсам вашего предприятия{% endif %}, Необходимо {% ifversion ghec %}либо связаться с {% данными variables.product.company_short %} Support, либо отозвать связанное удостоверение пользователя{% elsif ghes %}обновить `NameID`  сопоставление данных {% variables.location.product_location %}{% elsif ghae %}свяжитесь с {% данных variables.product.company_short %} Поддержка {% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7cb5754640793679bb80fe03a5bdd19164df4755
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098831'
---
## Сведения об обновлении SAML `NameID` пользователей

В некоторых ситуациях может потребоваться обновить значения, связанные с учетной записью пользователя в поставщике удостоверений SAML. Если этот идентификатор совпадает с `NameID`, используемым для проверки подлинности в {% data variables.product.product_name %}, необходимо обновить сопоставление `NameID` в экземпляре, чтобы пользователь смог успешно проходить проверку подлинности. Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Обновление SAML `NameID` пользователя

Владельцы предприятия могут обновить SAML `NameID` пользователя в экземпляре {% data variables.product.product_name %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. На левой боковой панели нажмите **Все пользователи**.
  ![Элемент боковой панели "Все пользователи" в параметрах администратора сайта](/assets/images/enterprise/site-admin-settings/all-users.png)
3. В списке пользователей щелкните имя пользователя, для которого нужно обновить сопоставление `NameID`.
  ![Имя пользователя в списке учетных записей пользователей экземпляра](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. Справа от параметра "Обновить SAML NameID" нажмите кнопку **Изменить**.
  ![Кнопка "Изменить" в разделе "Проверка подлинности SAML" справа от параметра "Обновить SAML NameID"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. В поле NameID введите новый `NameID` пользователя.
  ![Поле NameID в модальном диалоговом окне с введенным значением NameID](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Нажмите **Обновить NameID**.
  ![Кнопка "Обновить NameID" под обновленным значением NameID в модальном окне](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
