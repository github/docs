---
title: Team について
intro: Team は、アクセス権限とメンションをカスケードして会社またはグループの構造を反映する Organization メンバーのグループです。
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 7b899cf08ca58170acdf8fb2fb2ad13d251b76e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149846'
---
![Organization 内の Team のリスト](/assets/images/help/teams/org-list-of-teams.png)

Organization のオーナーとチームメンテナは、Organization のリポジトリに対する管理、読み取り、または書き込みのアクセス権を Team に付与できます。 Organization のメンバーは、Team の名前をメンションすることで、Team 全体に通知を送信できます。 Organization のメンバーは、Team のレビューを要求することでも、Team 全体に通知を送信することができます。 Organization のメンバーは、pull request が開かれているリポジトリに対する読み取りアクセス権を持つ特定の Team のレビューを要求できます。 コードの特定の種類や領域に対して Team をオーナーとして CODEOWNERS ファイルで指定できます。

詳細については、次を参照してください。
- [Organization のリポジトリに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)
- 「[ユーザーと Team をメンションする](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」
- 「[コード オーナーについて](/articles/about-code-owners/)」

![Team のメンションの画像](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

また、LDAP Sync を使って {% data variables.product.product_location %} の Team メンバーと Team ロールを、既成の LDAP グループと同期させることができます。 そうすることで、{% data variables.product.product_location %} 内で手動で行う代わりに、LDAP サーバーのユーザーのロールベースのアクセス制御を確立できます。 詳細については、「[LDAP Sync の有効化](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)」を参照してください。

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Team の可視性

{% data reusables.organizations.types-of-team-visibility %}

自分が所属するすべてのTeamは、パーソナルダッシュボードで表示できます。 詳細については、[個人用ダッシュボード](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)に関するページを参照してください。

## Team のページ

各 Team は、Organization 内に独自のページを持ちます。 Team のページでは、Team メンバー、子チーム、Team のリポジトリを見ることができます。 Organization のオーナーとチームメンテナは、Team のページから Team の設定にアクセスし、Team の説明とプロフィール画像を更新できます。

Organization のメンバーは、Team 内のディスカッションを作成し、参加できます。 詳細については、「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照してください。

![メンバーとディスカッションのリストがある Team ページ](/assets/images/help/organizations/team-page-discussions-tab.png)

## 入れ子チーム

{% data variables.product.product_name %}の Organization では、複数レベルの入れ子チームでグループや会社の階層を反映させることができます。 親 Team は複数の子 Team を持つことができますが、各子 Team は 1 つの親 Team のみを持ちます。 シークレット Team を入れ子にすることはできません。

子 Team は親のアクセス権限を継承し、大規模なグループの権限管理を簡素化します。 子 Team のメンバーは、親 Team が @mentioned された場合にも通知を受けるので、複数グループの人とのコミュニケーションがシンプルになります。

たとえば Team の構造が「従業員 > エンジニアリング > アプリケーションエンジニアリング > アイデンティティ」となっているなら、エンジニアリングにリポジトリへの書き込みアクセスを許可すれば、アプリケーションエンジニアとアイデンティティもそのアクセス権を得ることになります。 ID Team または Organization 階層の最下位にある任意の Team に @mention すると、通知を受け取るのはその人たちだけになります。

![親チームと子チームがある Team のページ](/assets/images/help/teams/nested-teams-eng-example.png)

親チームの権限とメンションを誰が共有するのかを簡単に知るには、親チームのページの [Members] タブで親チームの子チームのすべてのメンバーを見ることができます。 子チームのメンバーは、親チームの直接のメンバーではありません。

![子チームの全メンバーがある親チームのページ](/assets/images/help/teams/team-and-subteam-members.png)

Team を作るときには親を選択できます。あるいは、作成済みの Team を Organization の階層の中で移動させることもできます。 詳細については、「[Organization 階層内で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy)」を参照してください。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Organization 内で Team を入れ子にする準備

Organization がすでに既存の Team を持っている場合、その Team の上あるいは下に Team を入れ子にする前に、各 Team のリポジトリのアクセス権限を監査しておくべきです。 また、Organization に実装したい新しい構造についても考慮しておくべきです。

Team 階層の最上位では、親チームとその子チームのすべてのメンバーにとって安全なアクセス権限を、親チームのリポジトリに与えるべきです。 階層を下っていくにつれて、より注意が必要なリポジトリへの、より細かいアクセスを、子チームに許可していくことができます。

1. 既存の Team からすべてのメンバーを削除する
2. 各 Team のリポジトリのアクセス権限を監査して調整し、各 Team に親を与える
3. 必要な新しい Team を作成し、それぞれの新 Team の親を選択し、それらにリポジトリのアクセス権を与える
4. Team に直接人を追加する

## 参考資料

- 「[Team の作成](/articles/creating-a-team)」
- 「[Team への Organization メンバーの追加](/articles/adding-organization-members-to-a-team)」
