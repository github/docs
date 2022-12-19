---
title: Создание личного маркера доступа
intro: 'Вы можете создать {% данных variables.product.pat_generic %} для использования вместо пароля с помощью командной строки или API.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107752'
---
{% warning %}

**Предупреждение.** Обратитесь к маркерам доступа, таким как пароли.

Чтобы получить доступ к {% данных variables.product.company_short %} из командной строки, рассмотрите возможность использования {% данных variables.product.prodname_cli %} или [диспетчера учетных данных Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) вместо создания {% данных variables.product.pat_generic %}.

При использовании {% данных variables.product.pat_generic %} в скрипте рассмотрите возможность сохранения маркера в виде секрета и выполнения скрипта с помощью {% данных variables.product.prodname_actions %}. Дополнительные сведения см. в разделе "[Зашифрованные секреты](/actions/security-guides/encrypted-secrets)". {%- ifversion ghec или fpt %} Вы также можете сохранить маркер в виде секрета {% данных variables.product.prodname_codespaces %} и запустить скрипт в {% данных variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Если эти варианты недоступны, рассмотрите возможность безопасного хранения маркера с помощью другой службы, например [1Password CLI](https://developer.1password.com/docs/cli/secret-references/).

{% endwarning %}

## Сведения о {% данных variables.product.pat_generic %}s

{% данных variables.product.pat_generic_caps %} — это альтернатива использованию паролей для проверки подлинности на {% данных variables.product.product_name %} при использовании [API GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) или [командной строки](#using-a-token-on-the-command-line). {% данных variables.product.pat_generic_caps %}s предназначены для доступа к ресурсам {% variables.product.company_short %} от имени себя. Чтобы получить доступ к ресурсам от имени организации или для длительной интеграции, следует использовать {% данных variables.product.prodname_github_app %}. Дополнительные сведения см. в разделе [Сведения о приложениях](/developers/apps/getting-started-with-apps/about-apps).

{% ifversion pat-v2 %}

{% данных variables.product.company_short %} в настоящее время поддерживает два типа данных {% variables.product.pat_generic %}s: {% данных variables.product.pat_v2 %}s и {% данных variables.product.pat_v1_plural %}. {% данных variables.product.company_short %} рекомендует использовать {% данных variables.product.pat_v2 %}s вместо {% данных variables.product.pat_v1_plural %} по возможности. {% данных variables.product.pat_v2_caps %}s имеют несколько преимуществ безопасности по сравнению с {% данных variables.product.pat_v1_plural %}:

- Каждый маркер может получить доступ только к ресурсам, принадлежащим одному пользователю или организации.
- Каждый маркер может получить доступ только к определенным репозиториям.
- Каждому маркеру предоставляются определенные разрешения, которые обеспечивают больший контроль, чем области, предоставленные {% данных variables.product.pat_v1_plural %}.
- Каждый маркер должен иметь дату окончания срока действия.
- Владельцы организации могут требовать утверждения для любых данных {% variables.product.pat_v2 %}s, которые могут получить доступ к ресурсам в организации. {% ifversion ghec или ghes или ghae %}
- Владельцы предприятия могут требовать утверждения для любых данных {% variables.product.pat_v2 %}s, которые могут получить доступ к ресурсам в организациях, принадлежащих организации. {% endif %}

Кроме того, владельцы организации могут ограничить доступ к {% данных variables.product.pat_v1 %} своей организации{% ifversion ghec или ghes или ghae %}, а владельцы предприятия могут ограничить доступ к {% данных variables.product.pat_v1 %} предприятиям или организациям, принадлежащим enterprise{% endif %}.

{% данных reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## Создание {% данных variables.product.pat_v2 %}

{% note %}

**Примечание**. {% данных для повторного использования.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Проверьте адрес электронной почты](/github/getting-started-with-github/verifying-your-email-address), если он еще не проверен. {% endif %} {% данных для повторного использования.user-settings.access_settings %} {% данных для повторного использования.user-settings.developer_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="Значок ключа" %} {% данных variables.product.pat_generic_caps %}s** щелкните **детализированные маркеры**.
1. Щелкните **Generate new token** (Создание нового маркера).
1. При необходимости в поле **"Имя токена**" введите имя маркера.
1. В разделе **"Срок действия**" выберите срок действия маркера.
1. При необходимости в разделе **"Описание"** добавьте заметку, чтобы описать назначение маркера.
1. В разделе **"Владелец ресурса**" выберите владельца ресурса. Маркер сможет получить доступ только к ресурсам, принадлежащим выбранному владельцу ресурса. Организации, членом которых вы являетесь, не будут отображаться, если только организация не согласилась на {% данных variables.product.pat_v2 %}s. Дополнительные сведения см. в разделе "[Настройка политики {% данных variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)". {% ifversion ghec или ghae %} Возможно, вам потребуется выполнить единый вход SAML, если выбранная организация требует ее, и у вас еще нет активного сеанса SAML. {% endif %}
1. При необходимости, если владелец ресурса является организацией, требующей утверждения для {% данных variables.product.pat_v2 %}s, под владельцем ресурса в поле введите обоснование запроса.
1. В разделе **"Доступ к репозиторию"** выберите репозитории, к которым требуется получить доступ маркера. Необходимо выбрать минимальный доступ к репозиторию, соответствующий вашим потребностям. Маркеры всегда включают доступ только для чтения ко всем общедоступным репозиториям на сайте GitHub.
1. Если вы выбрали **только репозитории** на предыдущем шаге, в раскрывающемся списке **"Выбранные репозитории** " выберите репозитории, к которым будет обращаться маркер.
1. В разделе **"Разрешения"** выберите разрешения для предоставления маркера. В зависимости от того, какой владелец ресурса и какой доступ к репозиторию вы указали, существуют разрешения репозитория, организации и учетной записи. Необходимо выбрать минимальные разрешения, необходимые для ваших потребностей. Дополнительные сведения о том, какие разрешения необходимы для каждой операции REST API, см. в разделе "[Разрешения, необходимые для {% данных variables.product.pat_v2 %}s](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)".
1. Щелкните **Создать токен**.

Если вы выбрали организацию в качестве владельца ресурса и организации требует утверждения для {% данных variables.product.pat_v2 %}s, маркер будет помечен как `pending` до тех пор, пока он не будет проверен администратором организации. Маркер сможет читать общедоступные ресурсы только до тех пор, пока он не будет утвержден. Если вы являетесь владельцем организации, запрос будет автоматически утвержден. Дополнительные сведения см. в разделе "[Просмотр и отзыв данных {% variables.product.pat_generic %}s в организации](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".

{% endif %}

## Создание variables.product.pat_v1 данных {% %}

{% ifversion pat-v2 %}

{% note %}

**Примечание.** Владельцы организации могут ограничить доступ к данным {% variables.product.pat_v1 %} своей организации. Если вы попытаетесь использовать {% данных variables.product.pat_v1 %} для доступа к ресурсам в организации, которая отключила доступ к данным {% variables.product.pat_v1 %}, запрос завершится ошибкой с ответом 403. Вместо этого необходимо использовать {% данных variables.product.prodname_github_app %}, {% данных variables.product.prodname_oauth_app %}или {% данных variables.product.pat_v2 %}.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Примечание**. Ваш {% данных variables.product.pat_v1 %} может получить доступ к каждому репозиторию, к которому можно получить доступ. {% данных variables.product.company_short %} рекомендует использовать {% данных variables.product.pat_v2 %}s, которые можно ограничить определенными репозиториями. {% данных variables.product.pat_v2_caps %}s также позволяют задавать детализированные разрешения вместо широких областей.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Проверьте адрес электронной почты](/github/getting-started-with-github/verifying-your-email-address), если он еще не проверен. {% endif %} {% данных для повторного использования.user-settings.access_settings %} {% данных для повторного использования.user-settings.developer_settings %} {% ifversion pat-v2 %} 1. На левой боковой панели в разделе **{% octicon "key" aria-label="Значок ключа" %} {% данных variables.product.pat_generic_caps %}s** щелкните **Токены (классическая модель).** {% else %} {% данных для повторного использования.user-settings.personal_access_tokens %} {% endif %} {% ifversion pat-v2%} 1. Выберите **"Создать новый токен**", а затем нажмите кнопку **"Создать новый токен "(классическая модель)**". {% else %} {% данных для повторного использования.user-settings.generate_new_token %} {% endif %}
5. Присвойте маркеру описательное имя.
   ![Поле описания токена](/assets/images/help/settings/token_description.png)
6. Чтобы указать срок действия маркера, выберите раскрывающееся меню **Срок действия**, а затем щелкните значение по умолчанию или используйте календарь.
   ![Поле срока действия маркера](/assets/images/help/settings/token_expiration.png)
7. Выберите области, которые вы хотите предоставить этому маркеру. Чтобы использовать маркер для доступа к репозиториям из командной строки, выберите **repo**. С помощью маркера без назначенных областей можно получить доступ только к общедоступной информации. Дополнительные сведения см. в разделе [Доступные области](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).
   {% ifversion fpt or ghes or ghec %} ![Выбор областей маркера](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Выбор областей маркера](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Щелкните **Создать токен**.
   ![Кнопка](/assets/images/help/settings/generate_token.png) создания маркера {% ifversion fpt или ghec %} ![Созданный токен](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes или ghae %} ![Созданный маркер {% else %} ![Созданный токен](/assets/images/help/settings/personal_access_tokens_ghe.png)](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt или ghec %}
1. Чтобы использовать маркер для доступа к ресурсам, принадлежащим организации, использующей единый вход SAML, авторизации маркера. Дополнительные сведения см. в разделе "[Авторизация {% данных variables.product.pat_generic %} для использования с единым входом SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" в документации по {% данных variables.product.prodname_ghe_cloud %} . {% else %}". {% endif %} {% endif %}

## Использование маркера в командной строке

{% data reusables.command_line.providing-token-as-password %}

{% данных variables.product.pat_generic_caps %}s можно использовать только для операций HTTPS Git. Если в репозитории используется удаленный URL-адрес SSH, необходимо [переключить удаленный узел с SSH на HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Если вам не предлагается ввести имя пользователя и пароль, ваши учетные данные, возможно, кэшированы на компьютере. Вы можете [обновить учетные данные в цепочке ключей](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain), чтобы заменить старый пароль маркером.

Вместо того чтобы вручную вводить {% данных variables.product.pat_generic %} для каждой операции HTTPS Git, можно кэшировать {% данных variables.product.pat_generic %} с помощью клиента Git. Git временно хранит учетные данные в памяти до истечения срока их действия. Вы также можете сохранить маркер в обычном текстовом файле, который Git может считывать перед каждым запросом. Дополнительные сведения см. в разделе [Кэширование учетных данных {% data variables.product.prodname_dotcom %} в Git](/github/getting-started-with-github/caching-your-github-credentials-in-git).

## Дополнительные материалы

- [Сведения о проверке подлинности в GitHub](/github/authenticating-to-github/about-authentication-to-github)
- "[Срок действия маркера и отзыв](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"
