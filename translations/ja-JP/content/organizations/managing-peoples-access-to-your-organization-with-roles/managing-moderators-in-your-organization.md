---
title: Organization 内のモデレーターの管理
intro: Organization 内の個人またはチームをモデレーター ロールに割り当てることで、その個人やチームはアクセスをブロックおよび制限できるようになります。
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076715'
---
## Organization のモデレーターについて

場合によっては、コントリビューターをブロックしたり、Organization や個々のリポジトリの相互作用の制限を設定したりする必要がある場合があります。 Organization の所有者は、これらのタスクを実行できますが、これらのタスクを組織の他のメンバーに委任したい場合もあります。 これを行うには、Organization のメンバーまたはチームをモデレーター ロールに割り当てます。

Organization のモデレーターは、次のことができます。
* Organization のユーザーのブロックとブロック解除。 詳細については、「[Organization からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。
* Organization でのインタラクション制限の管理。 詳細については、「[Organization 内での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)」を参照してください。
* リポジトリのインタラクションの制限の管理。 詳細については、「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
* Organization が所有するすべてのパブリック リポジトリでコメントを非表示にする。 詳細については、「[混乱を生むコメントを管理する」](/communities/moderating-comments-and-conversations/managing-disruptive-comments)を参照してください。

Organization のモデレーターになったとしても、上記以外の追加の機能は提供されません。 たとえば、リポジトリへの読み取りアクセス権しか持っていないユーザーは、モデレーターになっても書き込みアクセス権は取得できません。

モデレーターとして、最大 10 人の個人またはチームを追加できます。 既に 10 人の個人やチームをユーザーとして割り当て、さらに追加する場合は、モデレーター チームにユーザーをグループ化し、これを使用して既存の割り当ての 1 つ以上を置き換えることができます。 詳細については、「[チームを作成する](/organizations/organizing-members-into-teams/creating-a-team)」を参照してください。

## Organization のモデレーターを追加する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [アクセス] セクションで、 **{% octicon "report" aria-label="The report icon" %} [モデレーション]** を選択し、 **[モデレーター]** をクリックします。
1. **[モデレーター]** で、モデレーター ロールを割り当てるユーザーまたはチームを検索して選択します。 選択した各個人またはチームは、検索バーの下に一覧表示されます。 
  ![Moderators の検索フィールドとリスト](/assets/images/help/organizations/add-moderators.png)


## Organization のモデレーターを削除する

上の手順 1 から 3 に従い、モデレーターとして削除する個人またはチームの横にある **[モデレーターの削除]** をクリックします。
