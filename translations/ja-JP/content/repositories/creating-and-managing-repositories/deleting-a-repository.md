---
title: リポジトリの削除
intro: Organization のオーナーである場合、あるいはリポジトリまたはフォークに対する管理者権限がある場合、任意のリポジトリまたはフォークを削除できます。 フォークしたリポジトリを削除しても、上流のリポジトリは削除されません。
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132306'
---
{% data reusables.organizations.owners-and-admins-can %}Organization のリポジトリを削除できます。 **[この Organization のリポジトリの削除または移譲をメンバーに許可する]** が無効化されていると、Organization のオーナーだけが Organization のリポジトリを削除できます。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}パブリック リポジトリを削除しても、リポジトリのフォークは削除されません。{% endif %}

{% warning %}

**警告**:

- リポジトリを削除すると、リリースの添付ファイルと Team の権限が **完全に** 削除されます。 このアクションは取り消すことが **できません**。
- プライベート{% ifversion ghes or ghec or ghae %}またはインターナル{% endif %} リポジトリを削除すると、リポジトリのすべてのフォークが削除されます。

{% endwarning %}

削除されたリポジトリの一部は、削除から 90 日以内は復元できます。 {% ifversion ghes or ghae %}サイト管理者は、削除されたリポジトリを復元できる場合があります。 詳細については、「[削除されたリポジトリの復元](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)」を参照してください。 {% else %}詳細については、「[削除されたリポジトリの復元](/articles/restoring-a-deleted-repository)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. [危険なゾーン] の **[このリポジトリを削除]** をクリックします。
   ![リポジトリの削除ボタン](/assets/images/help/repository/repo-delete.png)
3. **警告を読みます**。
4. 削除しようとしているリポジトリに間違いがないことを確認するために、削除対象のリポジトリ名を入力します。
   ![削除ラベル](/assets/images/help/repository/repo-delete-confirmation.png)
5. **[影響を理解したうえで、このリポジトリを削除します]** をクリックします。
