---
title: Поддержание непрерывности владения репозиториями учетной записи пользователя
intro: You can invite someone to manage your user owned repositories if you are not able to.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092281"
---
## <a name="about-successors"></a>Сведения о преемниках

Если нет возможности управлять репозиториями, принадлежащими пользователю, рекомендуется пригласить другого пользователя {% data variables.product.company_short %} в качестве преемника. В качестве преемника у них будет разрешение:

- Архивировать общедоступные репозитории.
- Переносить общедоступные репозитории в собственную учетную запись пользователя.
- Переносить общедоступные репозитории в организацию, в которой они могут создавать репозитории.

Преемники не могут зарегистрироваться в учетной записи пользователя.

Назначенный преемник может управлять общедоступными репозиториями пользователя после предъявления сертификата о смерти и ожидания в течение 7 дней или после предъявления некролога и ожидания в течение 21 дня. Дополнительные сведения см. в разделе [ Политика в отношении умершего пользователя {% data variables.product.company_short %}](/free-pro-team@latest/github/site-policy/github-deceased-user-policy).

Чтобы запросить доступ к управлению репозиториями в качестве преемника, свяжитесь со [службой поддержки GitHub](https://support.github.com/contact?tags=docs-accounts).

## <a name="inviting-a-successor"></a>Приглашение преемника
Пользователь, приглашенный быть преемником, должен иметь учетную запись {% data variables.product.company_short %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. В разделе "Параметры преемника", чтобы пригласить преемника, начните вводить имя пользователя, полное имя или адрес электронной почты, а затем щелкните их имя при появлении.
   ![Поле поиска приглашения преемника](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. Щелкните **Добавить преемника**.
{% data reusables.user-settings.sudo-mode-popup %}
5. Приглашенный пользователь будет указан как "Ожидающий", пока не согласится стать преемником.
   ![Ожидающее приглашение преемника](/assets/images/help/settings/settings-pending-successor.png)
