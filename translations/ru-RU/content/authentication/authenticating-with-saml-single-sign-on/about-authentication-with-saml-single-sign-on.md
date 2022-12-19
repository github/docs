---
title: Сведения о проверке подлинности с помощью единого входа SAML
intro: 'Вы можете получить доступ к {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}организации, которая использует единый вход SAML (SSO){% endif %} путем проверки подлинности {% ifversion ghae %}с помощью единого входа SAML {% endif %}через поставщика удостоверений (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111516'
---
## Сведения о проверке подлинности с помощью единого входа SAML

{% ifversion ghae %}

Единый вход SAML позволяет владельцу предприятия обеспечить централизованное управление и защиту доступа к {% data variables.product.product_name %} из поставщика удостоверений SAML. При посещении {% data variables.location.product_location %} в браузере {% data variables.product.product_name %} перенаправляет вас к поставщику удостоверений для проверки подлинности. После успешной проверки подлинности с помощью учетной записи поставщика удостоверений поставщик удостоверений перенаправит вас обратно в {% data variables.location.product_location %}. {% data variables.product.product_name %} проверяет ответ от поставщика удостоверений, а затем предоставляет доступ.

{% data reusables.saml.you-must-periodically-authenticate %}

Если вы не можете получить доступ к {% data variables.product.product_name %}, обратитесь к владельцу локального предприятия или администратору для {% data variables.product.product_name %}. Чтобы найти контактные данные для вашего предприятия, нажмите на кнопку **Поддержка** в нижней части любой страницы на {% data variables.product.product_name %}. {% data variables.product.company_short %} и {% data variables.contact.github_support %} не имеют доступа к вашему поставщику удостоверений и не могут устранять неполадки проверки подлинности. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Владельцы организации могут пригласить вашу личную учетную запись в {% data variables.product.prodname_dotcom %} присоединиться к их организации, которая использует единый вход SAML, что позволит вам вносить вклад в организацию и сохранять существующие удостоверения и вклады в {% data variables.product.prodname_dotcom %}.

Если вы являетесь участником {% data variables.enterprise.prodname_emu_enterprise %}, вы будете использовать новую учетную запись, подготовленную для вас и контролируемую вашим предприятием. {% data reusables.enterprise-accounts.emu-more-info-account %}

При попытке получить доступ к большинству ресурсов в организации, которая использует единый вход SAML, {% data variables.product.prodname_dotcom %} перенаправит вас к поставщику удостоверений SAML организации для проверки подлинности. После того как вы успешно пройдете проверку подлинности с помощью учетной записи в поставщике удостоверений, поставщик удостоверений перенаправит вас обратно в {% data variables.product.prodname_dotcom %}, где вы сможете получить доступ к ресурсам организации.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Если вы недавно прошли проверку подлинности с помощью поставщика удостоверений SAML в браузере, вы автоматически авторизованы для доступа к организации {% data variables.product.prodname_dotcom %}, которая использует единый вход SAML. Если вы недавно не проходили проверку подлинности с помощью поставщика удостоверений SAML в браузере, то перед доступом к организации вам потребуется пройти проверку подлинности в поставщике удостоверений SAML.

{% data reusables.saml.you-must-periodically-authenticate %}

## Связанные удостоверения SAML

При проверке подлинности с помощью учетной записи поставщика удостоверений и возврате к {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dotcom %} записывает ссылку в организации или предприятии в вашей личной учетной записи {% data variables.product.prodname_dotcom %} и удостоверении SAML, в которое вы выполнили вход.  Это связанное удостоверение используется для проверки членства в этой организации, и в зависимости от настройки организации или предприятия оно также может использоваться для определения организаций и команд, участником которых вы также являетесь. Каждая учетная запись {% data variables.product.prodname_dotcom %} может быть связана только с одним удостоверением SAML для каждой организации. Аналогичным образом каждое удостоверение SAML можно связать с одной учетной записью {% data variables.product.prodname_dotcom %} в организации. 

При входе с помощью удостоверения SAML, уже связанного с другой учетной записью {% data variables.product.prodname_dotcom %}, появится сообщение об ошибке, где сказано, что вы не можете войти с помощью этого удостоверения SAML. Эта ситуация может возникнуть, если вы пытаетесь использовать новую учетную запись {% data variables.product.prodname_dotcom %} для работы в пределах вашей организации. Если вы не планируете использовать это удостоверение SAML с данной учетной записью {% data variables.product.prodname_dotcom %}, необходимо выйти из этого удостоверения SAML, а затем выполнить вход повторно SAML. Если вы хотите использовать это удостоверение SAML с вашей учетной записью {% data variables.product.prodname_dotcom %}, вам нужно попросить администратора отменить связь удостоверения SAML со старой учетной записью, чтобы связать его с новой учетной записью.  В зависимости от настройки организации или предприятия администратору может потребоваться переназначить удостоверение в вашем поставщике SAML.  Дополнительные сведения см. в разделе [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).

Если удостоверение SAML, которое вы используете для входа, не соответствует удостоверению SAML, связанному с вашей учетной записью {% data variables.product.prodname_dotcom %}, вы получите предупреждение о попытке повторной привязки вашей учетной записи. Учитывая, что удостоверение SAML используется для управления доступом и членством в команде, если вы продолжите использовать новое удостоверение SAML, это может привести к потере доступа к командам и организациям в {% data variables.product.prodname_dotcom %}. Вы можете продолжать его использовать только в том случае, если знаете, что вам потребуется использовать новое удостоверение SAML для проверки подлинности в будущем. 

## Авторизация {% data variables.product.pat_generic %}s и ключей SSH с помощью единого входа SAML

Чтобы использовать API или Git в командной строке для доступа к защищенному содержимому в организации, которая использует единый вход SAML, необходимо использовать авторизованный {% data variables.product.pat_generic %} по протоколу HTTPS или авторизованный ключ SSH.

Если у вас нет ключа {% data variables.product.pat_generic %} или SSH, можно создать {% data variables.product.pat_generic %} для командной строки или создать новый ключ SSH. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)или [Создание нового ключа SSH и его добавление в ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Чтобы использовать новый или существующий ключ {% data variables.product.pat_generic %} или ключ SSH в организации, которая использует или применяет единый вход SAML, необходимо авторизовать маркер или ключ SSH для использования с организацией единого входа SAML. Дополнительные сведения см. в разделах [Авторизация {% data variables.product.pat_generic %} для использования с единым входом SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) или [Авторизация ключа SSH для использования с единым вхоздом SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

## Сведения о {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} и едином входе SAML

У вас должен быть активный сеанс SAML каждый раз, когда вы выполняете авторизацию {% data variables.product.prodname_oauth_app %} или {% data variables.product.prodname_github_app %} для доступа к организации, которая использует или применяет единый вход SAML. Можно создать активный сеанс SAML, перейдя к `https://github.com/orgs/ORGANIZATION-NAME/sso` в браузере.

После того как владелец предприятия или организации включает или применяет единый вход SAML для организации и после первого прохождения проверки подлинности с помощью SAML, необходимо повторно авторизовать все {% data variables.product.prodname_oauth_apps %} или {% data variables.product.prodname_github_apps %}, которые ранее были авторизованы для доступа к организации. 

Чтобы просмотреть авторизированные вами {% data variables.product.prodname_oauth_apps %}, перейдите на [страницу {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Чтобы просмотреть авторизированные вами {% data variables.product.prodname_github_apps %}, перейдите на [страницу {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Дополнительные материалы

{% ifversion ghec %}- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% endif %} {% ifversion ghae %}- [Сведения об управлении удостоверениями и доступом к вашему предприятию](/admin/authentication/about-identity-and-access-management-for-your-enterprise){% endif %}
