---
title: Объединение нескольких личных учетных записей
intro: Если у вас есть отдельные учетные записи для работы и личного использования, их можно объединить.
redirect_from:
- /articles/can-i-merge-two-accounts
- /articles/keeping-work-and-personal-repositories-separate
- /articles/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 71e2b280fad682f3ee8e9ac85141aedc3bde3d06
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145165396"
---
{% tip %}

{% ifversion ghec %}

**Совет.** {% data variables.product.prodname_emus %} позволяет организации подготавливать уникальные личные учетные записи для своих членов с помощью поставщика удостоверений (IdP). Дополнительные сведения см. в разделе [Сведения о пользователях, управляемых предприятием](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users). Для других вариантов использования рекомендуется применять только одну личную учетную запись для управления и личными, и профессиональными репозиториями.

{% else %}

**Совет.** Рекомендуется использовать только одну личную учетную запись для управления и личными, и профессиональными репозиториями. 

{% endif %}

{% endtip %}

{% warning %}

**Внимание!** 
- Разрешения на доступ к организации и репозиторию не переносятся между учетными записями. Если у удаляемой учетной записи есть существующее разрешение на доступ, владельцу организации или администратору репозитория потребуется пригласить учетную запись, которую вы хотите сохранить.
- Любые фиксации, созданные с помощью предоставленного GitHub адреса электронной почты `noreply`, нельзя передать из одной учетной записи в другую. Если учетная запись, которую вы хотите удалить, использовала параметр **Хранить мой адрес электронной почты в секрете**, будет невозможно перенести фиксации, созданные удаляемой учетной записью, в ту, которую вы хотите сохранить.

{% endwarning %}

1. [Перенесите все репозитории](/articles/how-to-transfer-a-repository) из учетной записи, которую вы хотите удалить, в ту, которую хотите сохранить. Также передаются проблемы, запросы на вытягивание и вики-сайты. Убедитесь, что репозитории существуют в учетной записи, которую вы хотите сохранить.
2. [Обновите удаленные URL-адреса](/github/getting-started-with-github/managing-remote-repositories) во всех локальных клонах перемещенных репозиториев.
3. [Удалите учетную запись](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account), которую вы больше не хотите использовать.
4. Чтобы добавить прошлые фиксации в новую учетную запись, добавьте адрес электронной почты, используемый для создания фиксаций, в сохраняемую учетную запись. Дополнительные сведения см. в разделе [Почему мои вклады не отображаются в моем профиле?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)

## <a name="further-reading"></a>Дополнительные материалы

- [Типы учетных записей {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)
