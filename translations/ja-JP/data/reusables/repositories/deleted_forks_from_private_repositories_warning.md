---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879263"
---
{% warning %}

**警告:**

- プライベートリポジトリへの個人のアクセス権を削除すると、そのプライベートリポジトリからその人が作成したフォークはすべて削除されます。 プライベートリポジトリのローカルクローンは残ります。 プライベート リポジトリへの Team のアクセス権が削除されたり、プライベート リポジトリへのアクセス権を持つ Team が削除されたりしていることに加え、他の Team 経由でのそのリポジトリへのアクセス権を Team のメンバーが持っていなければ、そのリポジトリのプライベート フォークは削除されます。{% ifversion ghes %}
- [LDAP Sync が有効になっている](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)と、ある人がリポジトリから削除された場合、その人はアクセス権を失いますが、その人のフォークは削除されません。 元々のOrganizationのリポジトリへのアクセスできるように3ヶ月以内にその人がTeamに追加されたなら、次回の同期の際にフォークへのアクセスは自動的に回復されます。{% endif %}
- リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。

- プライベート{% ifversion ghes or ghae or ghec %} または内部{% endif %} リポジトリへの管理アクセス許可を持つユーザーは、そのリポジトリのフォークを禁止することができます。また、Organization 所有者は、Organization 内でのプライベート{% ifversion ghes or ghae or ghec %} または内部{% endif %} リポジトリのフォークを禁止することができます。 詳細については、「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」および「[リポジトリのフォーク ポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% endwarning %}
