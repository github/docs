---
title: Устранение неполадок с использованием лицензий для GitHub Enterprise
intro: 'Вы можете устранять неполадки с использованием лицензий для предприятия, выполняя аудит отчетов о лицензиях.'
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179944'
---
## Сведения о непредвиденном использовании лицензий

Если для вашего предприятия используется непредвиденное число лицензий, с помощью отчета об используемых лицензиях вы можете выполнить аудит использования лицензий во всех развертываниях и подписках предприятия. Дополнительные сведения см. в статьях "[Просмотр сведений об использовании лицензий для GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" и "[Просмотр сведений о подписках и использовании для корпоративной учетной записи](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

При обнаружении ошибок вы можете выполнить действия по устранению неполадок.

По соображениям конфиденциальности владельцы предприятия не могут получить прямой доступ к сведениям об учетных записях пользователей, если не используется {% data variables.product.prodname_emus %}.

## Сведения о вычислении количества используемых лицензий

Если пользователь соответствует одному или нескольким из следующих условий, {% data variables.product.company_short %} выставляет счет за пользователя.

- Пользователь использует развертывания {% data variables.product.prodname_ghe_server %}.
- Пользователь является членом одной из ваших организаций в {% data variables.product.prodname_ghe_cloud %}.
- Пользователь имеет доступ на запись к одному из частных репозиториев вашей организации.
- Пользователь является {% data variables.visual_studio.prodname_vs_subscriber %}.

Приглашения для этих ролей будут использовать лицензию до тех пор, пока приглашение не будет принято или не истечет срок действия. Дополнительные сведения о пользователях в предприятии, использующих лицензию, см. в статье "[Сведения о ценах на пользователя](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

Чтобы каждый пользователь занимал одно место вне зависимости от количества используемых им развертываний, необходимо синхронизировать использование лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе "[Синхронизация использования лицензий между {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

После синхронизации использования лицензий {% data variables.product.prodname_dotcom %} сопоставляет учетные записи пользователей в {% data variables.product.prodname_ghe_server %} с учетными записями пользователей в {% data variables.product.prodname_ghe_cloud %} по адресу электронной почты.

Сначала проверяется основной адрес электронной почты каждого пользователя в {% data variables.product.prodname_ghe_server %}. Затем выполняется его сопоставление с адресом электронной почты учетной записи пользователя в {% data variables.product.prodname_ghe_cloud %}. Если в предприятии используется единый вход SAML, сначала выполняется поиск адресов электронной почты в следующих атрибутах SAML:

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

Если в этих атрибутах не обнаружены адреса электронной почты, совпадающие с основным адресом в {% data variables.product.prodname_ghe_server %}, или в предприятии не используется единый вход SAML, выполняется проверка каждого проверенного адреса электронной почты пользователя в {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения о подтверждении адресов электронной почты на {% data variables.product.prodname_dotcom_the_website %} см. в разделе [Подтверждение адреса электронной почты](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Поля в файлах с показателями использования лицензий

Отчет об использовании лицензий на веб-сайте {% data variables.product.prodname_dotcom_the_website %} и экспортированные файлы с показателями использования лицензий {% data variables.product.prodname_ghe_server %} содержат различные поля, которые помогут устранить неполадки с использованием лицензий для вашего предприятия. 

### Отчет об использовании лицензии (CSV-файл) на веб-сайте {% data variables.product.prodname_dotcom_the_website %}

Отчет об использовании лицензий для вашего предприятия — это CSV-файл, который содержит следующие сведения о членах вашей организации. Некоторые поля относятся к развертыванию {% data variables.product.prodname_ghe_cloud %} (GHEC), подключенным средам {% data variables.product.prodname_ghe_server %} (GHES) или вашим подпискам {% data variables.product.prodname_vs %} (VSS) в GitHub Enterprise.

| Поле | Описание
| ----- | -----------
| github_com_login | Имя учетной записи пользователя GHEC
| github_com_name | Отображаемое имя учетной записи пользователя GHEC
| github_com_profile | URL-адрес страницы профиля пользователя в GHEC
| github_com_user   | Указывает, имеется ли у пользователя учетная запись в GHEC |
| github_com_member_roles | Имя организации и роль пользователя в ней (`Owner` или `Member`) через двоеточие для каждой организации, членом которой пользователь является в GHEC<br><br>Организации разделяются запятыми |
| github_com_enterprise_role | Может принимать значение `Owner`, `Member` или `Outside collaborator`
| github_com_verified_domain_emails | Все адреса электронной почты, связанные с учетной записью пользователя GHEC и совпадающие с проверенными доменами вашего предприятия |
| github_com_saml_name_id | Имя пользователя SAML |
| github_com_orgs_with_pending_invites | Все приглашения, ожидающие присоединения к организациям в предприятии, для учетной записи пользователя GHEC |
| license_type | Может принимать значение `Visual Studio subscription` или `Enterprise`
| enterprise_server_user| Указывает, имеется ли у пользователя как минимум одна учетная запись в GHES |
| enterprise_server_primary_emails | Основной адрес электронной почты, связанный с каждой учетной записью пользователя в GHES |
| enterprise_server_user_ids | Идентификатор пользователя учетной записи для каждой учетной записи пользователя в GHES
| total_user_accounts | Общее количество учетных записей пользователя в GHEC и GHES
| visual_studio_subscription_user | Является ли пользователь {% data variables.visual_studio.prodname_vs_subscriber %} |
| visual_studio_subscription_email | Адрес электронной почты, связанный с VSS пользователя |
| visual_studio_license_status | Указывает, сопоставлена ли лицензия Visual Studio с пользователем {% data variables.product.company_short %} |

{% data variables.visual_studio.prodname_vs_subscriber %}s, которые еще не являются членами хотя бы одной организации в вашем предприятии, будут включены в отчет с состоянием ожидающего приглашения, а также будут отсутствовать значения для поля "Имя" или "Ссылка на профиль".

### Экспортированные сведения об использовании лицензий {% data variables.product.prodname_ghe_server %} (файл JSON)

Сведения об использовании лицензии {% data variables.product.prodname_ghe_server %} содержатся в JSON-файле, который обычно используется при выполняемой вручную синхронизации пользовательских лицензий между развертываниями {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_ghe_cloud %}. Файл содержит следующие сведения, относящиеся к вашей среде {% data variables.product.prodname_ghe_server %}.

| Поле | Описание
| ----- | -----------
| Компоненты | Функции {% data variables.product.prodname_github_connect %}, включенные в вашем экземпляре {% data variables.product.prodname_ghe_server %}, а также дата и время включения.
| Имя узла | Имя узла вашего экземпляра {% data variables.product.prodname_ghe_server %}.
| Только HTTP | Включен и настроен ли протокол TLS в вашем экземпляре {% data variables.product.prodname_ghe_server %}. Это может быть `True` или `False`. 
| Лицензия | Хэш вашей лицензии {% data variables.product.prodname_ghe_server %}.
| Открытый ключ | Часть открытого ключа вашей лицензии {% data variables.product.prodname_ghe_server %}.
| Идентификатор сервера | UUID, созданный для вашего экземпляра {% data variables.product.prodname_ghe_server %}.
| Версия | Версия вашего экземпляра {% data variables.product.prodname_ghe_server %}.

## Устранение неполадок с используемыми лицензиями

Чтобы убедиться, что каждый пользователь занимает только одно место для различных развертываний и подписок, выполните следующие действия по устранению неполадок.

1. Чтобы определить пользователей, которые занимают несколько мест, если в предприятии используются проверенные домены для {% data variables.product.prodname_ghe_cloud %}, просмотрите список членов предприятия, у которых нет адреса электронной почты из проверенного домена, связанного с их учетной записью на {% data variables.product.prodname_dotcom_the_website %}. Часто это пользователи, которые ошибочно используют более одного рабочего места по лицензии. Дополнительные сведения см. в статье [Просмотр сведений о членах без адреса электронной почты из проверенного домена](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

   {% note %}

  **Примечание.** Чтобы упростить устранение неполадок, рекомендуется использовать проверенные домены с корпоративной учетной записью на {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Проверка или утверждение домена для предприятия](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

  {% endnote %}
1. После определения пользователей, которые занимают несколько мест, убедитесь, что с учетными записями связан один адрес электронной почты. Дополнительные сведения о том, какие адреса электронной почты должны совпадать, см. в разделе "[Сведения о вычислении используемых лицензий](#about-the-calculation-of-consumed-licenses)".
1. Если адрес электронной почты был недавно обновлен или проверен для исправления несоответствия, просмотрите метку времени последнего задания синхронизации лицензий. Если задание не выполнялось после исправления, активируйте новое задание вручную. Дополнительные сведения см. в статье [Синхронизация потребления лицензий между GitHub Enterprise Server и GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

Если у вас остались вопросы об используемых лицензиях после просмотра приведенных выше сведений об устранении неполадок, вы можете связаться со службой {% data variables.contact.github_support %} с помощью {% data variables.contact.contact_enterprise_portal %}.
