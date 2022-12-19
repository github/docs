---
title: 削除したリポジトリの復元
intro: '{% ifversion ghes or ghae %}エンタープライズの所有者{% elsif fpt or ghec %}ユーザー{% endif %}は、削除されたリポジトリを復元してその内容を回復できます。'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 233785cc42ac6dd97a35d042186ae198dd69502a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146200099'
---
{% ifversion ghes or ghae %}

通常、削除されたリポジトリは、{% ifversion ghes %}{% data variables.product.product_location %} の{% endif %}エンタープライズの所有者が 90 日以内に復元できます。 詳細については、「[削除されたリポジトリの復元](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)」を参照してください。 

{% else %}

## リポジトリの復元について

削除したリポジトリは、そのリポジトリが現在空ではないフォークネットワークの一部でない限り、90日以内であれば復元できます。 フォークネットワークは、親リポジトリ、リポジトリのフォーク、リポジトリのフォークのフォークで構成されます。 リポジトリがフォークネットワークの一部だった場合は、ネットワークの他のリポジトリすべてが削除されるか、ネットワークから切り離されていない限り、復元できません。 フォークについて詳しくは、「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」をご覧ください。

現在空ではないフォークネットワークの一部だったリポジトリを復元したい場合は、{% data variables.contact.contact_support %}にお問い合わせください。

削除したリポジトリが復元できるようになるまでには、最大で1時間かかる場合があります。

リポジトリを復元しても、リリース添付ファイルやチーム権限は復元されません。 復元された Issue はラベル付けされません。

## 個人アカウントで所有されていて削除されたリポジトリを復元する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Organizationが所有していて削除したリポジトリを復元する


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## 参考資料

- 「[リポジトリの削除](/articles/deleting-a-repository)」

{% endif %}
