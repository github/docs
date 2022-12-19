---
title: Поддержание непрерывности владения репозиториями личной учетной записи
intro: 'Вы можете пригласить пользователя для управления репозиториями, принадлежащими пользователю, если вы не можете управлять ими самостоятельно.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: 5230b99ebce74f3b59e805c8fe81c16edfcd1ba9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147508001'
---
## Сведения о преемниках

Если нет возможности управлять репозиториями, принадлежащими пользователю, рекомендуется пригласить другого пользователя {% data variables.product.company_short %} в качестве преемника. В качестве преемника у него будет разрешение:

- Архивировать общедоступные репозитории.
- Переносить общедоступные репозитории в собственную учетную запись пользователя.
- Переносить общедоступные репозитории в организацию, в которой они могут создавать репозитории.

Преемники не смогут зарегистрироваться в вашей учетной записи пользователя.

Назначенный преемник может управлять общедоступными репозиториями пользователя после предъявления свидетельства о смерти и ожидания в течение 7 дней или после предъявления некролога и ожидания в течение 21 дня. Дополнительные сведения см. в разделе [ Политика в отношении умершего пользователя {% data variables.product.company_short %}](/free-pro-team@latest/github/site-policy/github-deceased-user-policy).

Чтобы запросить доступ к управлению репозиториями в качестве преемника, свяжитесь со [службой поддержки GitHub](https://support.github.com/contact?tags=docs-accounts).

## Приглашение преемника
Пользователь, приглашенный быть преемником, должен иметь учетную запись {% data variables.product.company_short %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Чтобы пригласить преемника, в разделе "Параметры преемника" начните вводить имя пользователя, полное имя или адрес электронной почты, а затем щелкните его имя при появлении.
   ![Поле поиска приглашения преемника](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. Щелкните **Добавить преемника**.
{% data reusables.user-settings.sudo-mode-popup %}
6. Приглашенный пользователь будет указан как "Ожидающий", пока не согласится стать преемником.
   ![Ожидающее приглашение преемника](/assets/images/help/settings/settings-pending-successor.png)
