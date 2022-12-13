---
title: Сведения о проверке подлинности в GitHub
intro: 'Чтобы получить безопасный доступ к ресурсам своей учетной записи, пройдите проверку подлинности в {% data variables.product.product_name %} с помощью различных учетных данных в зависимости от того, где выполняется проверка подлинности.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: 73caa1d527e87551078b5ce6d5830a3a936ed22d
ms.sourcegitcommit: 38a390a0101fa2848c3c1f070e69644d738097d1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/21/2022
ms.locfileid: '148104303'
---
## Сведения о проверке подлинности в {% data variables.product.prodname_dotcom %}

Чтобы обеспечить безопасность учетной записи, необходимо пройти проверку подлинности перед доступом к{% ifversion not ghae %} некоторым{% endif %} ресурсам на {% data variables.product.product_name %}. При проверке подлинности в {% data variables.product.product_name %} вы предоставляете или подтверждаете свои уникальные учетные данные, чтобы доказать, что вы именно тот, кем себя называете.

Доступ к ресурсам в {% data variables.product.product_name %} можно получать различными способами: в браузере, через {% data variables.product.prodname_desktop %} или другое классическое приложение, с помощью API или командной строки. Каждый способ доступа к {% data variables.product.product_name %} поддерживает различные режимы проверки подлинности:
{%- ifversion not fpt %}
- Ваш поставщик удостоверений (IdP){% endif %}{% ifversion not ghae %}
- Имя пользователя и пароль с двухфакторной проверкой подлинности{% endif %}
- {% данных variables.product.pat_generic_caps %}
- Ключ SSH

## Проверка подлинности в браузере

{% ifversion ghae %}

Вы можете пройти проверку подлинности в {% data variables.product.product_name %} в браузере с помощью поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on).

{% else %}

{% ifversion fpt or ghec %}

Если вы являетесь членом {% данных variables.enterprise.prodname_emu_enterprise %}, вы будете проходить проверку подлинности в {% данных variables.product.product_name %} в браузере с помощью поставщика удостоверений. Дополнительные сведения см. в разделе [Проверка подлинности в качестве управляемого пользователя](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %} 

Если вы не являетесь членом {% данных variables.enterprise.prodname_emu_enterprise %}, вы проверите проверку подлинности с помощью имени пользователя и пароля {% данных variables.product.prodname_dotcom_the_website %}. Вы также можете использовать двухфакторную проверку подлинности и единый вход SAML, если этого потребуют организация и владельцы предприятия.

{% else %}

Проверку подлинности в {% data variables.product.product_name %} в браузере можно проходить различными способами.

{% endif %}

- **Только имя пользователя и пароль**
    - Пароль создается при создании учетной записи в {% data variables.product.product_name %}. Рекомендуется использовать диспетчер паролей для создания случайного уникального пароля. Дополнительные сведения см. в разделе [Создание надежного пароля](/github/authenticating-to-github/creating-a-strong-password). {% ifversion fpt or ghec %}
  - Если вы не включили двухфакторную проверку подлинности, {% data variables.product.product_name %} будет запрашивать дополнительную проверку при первом входе с нераспознанного устройства, например из нового профиля браузера, из браузера, в котором были удалены файлы cookie, или с нового компьютера.

   После предоставления имени пользователя и пароля вам будет предложено указать код проверки, который мы отправим вам по электронной почте. Если у вас установлено приложение {% data variables.product.prodname_mobile %}, вместо этого вы будете получать уведомление. Дополнительные сведения см. в статье [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).{% endif %}
- **Двухфакторная проверка подлинности** (рекомендуется)
    - Если вы включите двухфакторную проверку подлинности, то после успешного ввода имени пользователя и пароля мы также попросим вам указать код, созданный генератором одноразовых паролей с ограниченным сроком действия на мобильном устройстве{% ifversion fpt or ghec %} или отправленный в текстовом сообщении (SMS){% endif %}. Дополнительные сведения см. в разделе [Доступ к {% data variables.product.prodname_dotcom %} с помощью двухфакторной проверки подлинности](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website).
    - Помимо проверки подлинности с помощью генератора одноразовых паролей с ограниченным сроком действия{% ifversion fpt or ghec %} или текстового сообщения{% endif %} можно также добавить альтернативный метод проверки подлинности с помощью {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} или{% endif %} ключа безопасности, используя WebAuthn. Дополнительные сведения см. в разделах {% ifversion fpt or ghec %}[Настройка двухфакторной проверки подлинности с помощью {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) и {% endif %}[Настройка двухфакторной проверки подлинности с использованием ключа безопасности](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).{% ifversion ghes %}
- **Внешняя проверка подлинности**
  - Администратор сайта может настроить {% данных variables.location.product_location %} для использования внешней проверки подлинности вместо имени пользователя и пароля. Дополнительные сведения см. в разделе [Внешние методы проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication). {% endif %} {% ifversion fpt or ghec %}
- **Единый вход SAML**
  - Возможно, что для получения доступа к ресурсам, принадлежащим организации или корпоративной учетной записи, использующей единый вход SAML, вам нужно будет также пройти проверку подлинности с помощью поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}

{% endif %}

## Проверка подлинности с помощью {% data variables.product.prodname_desktop %}
Вы можете пройти проверку подлинности с помощью {% data variables.product.prodname_desktop %} в браузере. Дополнительные сведения см. в разделе [Проверка подлинности в {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).

## Проверка подлинности с помощью API

Проверку подлинности с помощью API можно проходить разными способами.

- **{% данных variables.product.pat_generic_caps %}s**
    - В ограниченных ситуациях, таких как тестирование, для доступа к API можно использовать {% данных variables.product.pat_generic %}. Использование {% данных variables.product.pat_generic %} позволяет отозвать доступ в любое время. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
- **Процесс в веб-приложении**
    - Для рабочих приложений OAuth проверку подлинности следует проходить с помощью процесса в веб-приложении. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).
- **Приложения GitHub**
    - Для рабочих приложений GitHub проверку подлинности следует проходить от имени установленного приложения. Дополнительные сведения см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/).

## Проверка подлинности с помощью командной строки

Доступ к репозиториям на {% data variables.product.product_name %} можно получать из командной строки двумя способами: по HTTPS и SSH, причем метод проверки подлинности в этих двух случаях разный. Метод проверки подлинности зависит от того, выбрали ли вы удаленный URL-адрес HTTPS или SSH при клонировании репозитория. Дополнительные сведения об используемых способах доступа см. в разделе [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories).

### HTTPS

Со всеми репозиториями на {% data variables.product.product_name %} можно работать по протоколу HTTPS, даже если вы находитесь за брандмауэром или прокси-сервером.

При проверке подлинности с помощью {% данных variables.product.prodname_cli %}можно выполнить проверку подлинности с помощью {% данных variables.product.pat_generic %} или через веб-браузер. Дополнительные сведения о проверке подлинности с помощью {% data variables.product.prodname_cli %} см. в разделе [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

При проверке подлинности без {% данных variables.product.prodname_cli %}необходимо пройти проверку подлинности с помощью {% данных variables.product.pat_generic %}. {% data reusables.user-settings.password-authentication-deprecation %} При каждом использовании Git для проверки подлинности с помощью {% data variables.product.product_name %} вам нужно будет вводить учетные данные для проверки подлинности с помощью {% data variables.product.product_name %}, если они не кэшируются [вспомогательным приложением для хранения учетных данных](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### SSH

Со всеми репозиториями на {% data variables.product.product_name %} можно работать по протоколу SSH, хотя брандмауэры и прокси-серверы могут отклонять SSH-подключения.

При проверке подлинности с помощью {% data variables.product.prodname_cli %} интерфейс командной строки находит открытые ключи SSH на вашем компьютере и предлагает выбрать один из них для отправки. Если {% данных variables.product.prodname_cli %} не находит открытый ключ SSH для отправки, он может создать новый открытый или закрытый ключ SSH и передать открытый ключ в учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}. Затем можно выполнить проверку подлинности с помощью {% данных variables.product.pat_generic %} или через веб-браузер. Дополнительные сведения о проверке подлинности с помощью {% data variables.product.prodname_cli %} см. в разделе [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

При проверке подлинности без {% данных variables.product.prodname_cli %}необходимо создать SSH public/private keypair на локальном компьютере и добавить открытый ключ в учетную запись {% ifversion ghae %}{% данных variables.product.product_name %}{% остальных %}{% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Каждый раз, когда вы используете GIT для проверки подлинности на {% data variables.product.product_name %}, вам предлагается ввести парольную фразу ключа SSH, если [ключ не сохранен](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% ifversion fpt or ghec %}
### Авторизация для единого входа SAML

Чтобы использовать ключ {% данных variables.product.pat_generic %} или SSH для доступа к ресурсам, принадлежащим организации, использующей единый вход SAML, необходимо также авторизовать личный маркер или ключ SSH. Дополнительные сведения см. в разделе "[Авторизация {% данных variables.product.pat_generic %} для использования с единым входом SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" или "[Авторизация ключа SSH для использования с единым входом SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" в документации по {% данных variables.product.prodname_ghe_cloud %}. {% else %}". {% endif %} {% endif %}

## Форматы токенов {% data variables.product.company_short %}

{% data variables.product.company_short %} выдает токены, начинающиеся с префикса, который указывает тип токена.

| Тип маркера | Prefix | Дополнительные сведения |
| :- | :- | :- |
| {% данных variables.product.pat_v1_caps %} | `ghp_` | {% ifversion pat-v2 %}"[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token#creating-a-personal-access-token-classic)"{% else %}"[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"{% endif %}  |{% ifversion pat-v2 %}
| {% данных variables.product.pat_v2_caps %} | `github_pat_` | "[Создание variables.product.pat_generic данных {% %}](/github/authenticating-to-github/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token)" |{% endif %}
| Маркер доступа OAuth | `gho_` | [Авторизация {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps) |
| Маркер "пользователь — сервер" для {% data variables.product.prodname_github_app %} | `ghu_` | [Определение и авторизация пользователей для {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps) |
| Маркер "сервер — сервер" для {% data variables.product.prodname_github_app %} | `ghs_` | [Проверка подлинности в {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation) |
| Обновление токена для {% data variables.product.prodname_github_app %} | `ghr_` | [Обновление маркеров доступа "пользователь — сервер"](/developers/apps/refreshing-user-to-server-access-tokens) |

