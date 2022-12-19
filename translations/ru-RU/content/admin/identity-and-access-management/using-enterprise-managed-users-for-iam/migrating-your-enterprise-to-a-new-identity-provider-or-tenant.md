---
title: Перенос предприятия в новый поставщик удостоверений или клиент
shortTitle: Migrate to new IdP or tenant
intro: Вы можете перенести предприятие в другой поставщик удостоверений (IdP) или Azure AD клиента.
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: idp-tenant-migration
topics:
  - Access management
  - Accounts
  - Administrator
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 78c33ccdb62bddf36b8435cc83fd7545be21d13b
ms.sourcegitcommit: 37dad7113bae5f057310ab9db39bb56326cce3df
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/22/2022
ms.locfileid: '148104722'
---
## Сведения о миграции между поставщиками удостоверений и клиентами

При использовании {% данных variables.product.prodname_emus %}может потребоваться перенести предприятие в новый клиент idP или Azure AD. Например, вы можете быть готовы к миграции из тестовой среды в рабочую среду.

Перед переносом данных {% variables.enterprise.prodname_emu_enterprise %} в новый idP или клиент определите, будут ли значения нормализованного атрибута SCIM `userName` оставаться неизменными для ваших {% данных variables.enterprise.prodname_managed_users %} в новой среде. Дополнительные сведения о нормализации имени пользователя см. в разделе "[Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

Если нормализованные значения SCIM `userName` останутся прежними после миграции, можно выполнить миграцию самостоятельно. Инструкции см. в разделе "[Миграция при сохранении нормализованных значений SCIM `userName` останется прежним](#migrating-when-the-normalized-scim-username-values-will-remain-the-same)".

Если нормализованные значения SCIM `userName` изменятся после миграции, {% данных variables.product.company_short %} потребуется помочь в миграции. Дополнительные сведения см. в разделе "[Миграция при изменении нормализованных значений SCIM`userName`](#migrating-when-the-normalized-scim-username-values-will-change)".

## Миграция, когда нормализованные значения SCIM `userName` останутся прежними.

Чтобы перейти на новый поставщик удостоверений или клиент, изменить существующую конфигурацию SAML невозможно. Вместо этого необходимо полностью отключить SAML для своей корпоративной учетной записи, а затем создать новые конфигурации SAML и SCIM для нового поставщика удостоверений или клиента.

{% warning %}

**Предупреждение:** Не удаляйте пользователей или группы из приложения для {% данных variables.product.prodname_emus %} в исходном idP или клиенте до завершения миграции.

{% endwarning %}

1. Если у вас еще нет кодов восстановления единого входа для вашего предприятия, скачайте коды. Дополнительные сведения см. в статье [Скачивание кодов восстановления единого входа для корпоративной учетной записи](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).
1. В текущем idP отключите подготовку в приложении для {% данных variables.product.prodname_emus %}.
    -  Если вы используете Azure AD, перейдите на вкладку "Подготовка" приложения и нажмите кнопку **"Остановить подготовку**".
    - Если вы используете Okta, перейдите на вкладку "Подготовка" приложения, перейдите на вкладку **"Интеграция** " и нажмите кнопку **"Изменить**". Отмените выбор **включения интеграции API**.
1. Используйте код восстановления для входа в {% данных variables.product.prodname_dotcom_the_website %} в качестве пользователя установки, имя пользователя которого является суффиксом `_admin`короткого кода вашей организации. Дополнительные сведения о пользователе установки см. в разделе "[О {% данных variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)".

1. Отключите SAML для {% данных variables.enterprise.prodname_emu_enterprise %}.
   -  В профиле щелкните **"Ваши предприятия"** и выберите соответствующее предприятие.
   - Щелкните {% octicon "gear" aria-label="The Settings gear" %} **Settings (Параметры шестеренки**) и нажмите кнопку **"Безопасность проверки подлинности**". 
   - В разделе "Единый вход SAML" снимите флажок **"Требовать проверку подлинности SAML**" и нажмите кнопку **"Сохранить**". 
   
1. Дождитесь, пока все пользователи предприятия будут отображаться как приостановленные.

1. При входе в систему в качестве пользователя установки настройте SAML и SCIM для нового поставщика удостоверений или клиента с помощью нового приложения {% данных variables.product.prodname_emus %}.
   
   После настройки подготовки для нового приложения {% данных variables.enterprise.prodname_managed_users %} будут неуправляемы, и разработчики смогут снова войти в существующие учетные записи.
   
   По умолчанию этот процесс может занять до 40 минут Azure AD. Чтобы ускорить процесс для отдельного пользователя, нажмите кнопку **"Подготовка по запросу** " на вкладке "Подготовка" приложения для {% данных variables.product.prodname_emus %}.

## Миграция при изменении нормализованных значений SCIM `userName`

Если нормализованные значения SCIM `userName` изменятся, {% данных variables.product.company_short %} должна подготовить новую корпоративную учетную запись для миграции. [Обратитесь за помощью в нашу группу продаж](https://github.com/enterprise/contact) .
