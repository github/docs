---
title: Organizationのモデレーターの管理
intro: Organization内の個人またはTeamにmoderatorロールを割り当てることによって、アクセスをブロックしたり制限したりできるようにすることができます。
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: モデレーターの管理
---

## Organizationのモデレーターについて

コントリビューターをブロックしたり、Organizationや個人リポジトリとのやりとりを制限したりしなければならないことがあります。 Organizaitonのオーナーはそういった操作を行えますが、Organizationの他のメンバーにそれらのタスクを委任したいこともあります。 これは、OrganizationのメンバーあるいはTeamにmoderatorロールを割り当てることで行えます。

Organizationのモデレーターは、以下のことができます。
* Organizationでのユーザのブロックあるいはブロック解除。 詳細は「[Organization からユーザをブロックする](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。
* Organizationの操作の制限。 詳細は「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)」を参照してください。
* Organizationの操作制限の管理。 詳しい情報については「[リポジトリでの操作の制限](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」を参照してください。
* Organizationが所有するすべてのパブリックリポジトリでのコメントの非表示。 詳しい情報については「[問題のあるコメントの管理](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」を参照してください。

Organizationのモデレーターに指名しても、上記のリスト以外にできることは増えません。 たとえば、リポジトリに読み取りアクセスだけを持っている人をモデレーターにしても、書き込みアクセスを得ることにはなりません。

最大で10人の人、あるいはTeamをモデレーターとして追加できます。 既にユーザとして10の人もしくはTeamを割り当てていて、さらに追加したい場合には、モデレーターのTeamに人をまとめて、そのTeamで既存のいくつかの割り当てを置き換えてください。 詳しい情報については「[Teamの作成](/organizations/organizing-members-into-teams/creating-a-team)」を参照してください。

## Organizationモデレーターの追加

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. サイドバーの"Access"セクションで**{% octicon "report" aria-label="The report icon" %} Moderation**を選択し、続いて**Moderators（モデレーター）**をクリックしてください。
1. **Moderators（モデレーター）**の下で、moderatorロールを割り当てたい人やTeamを検索して選択してください。 選択した人もしくはTeamは、検索バーの下のリストに表示されます。 ![モデレーターの検索フィールド及びリスト](/assets/images/help/organizations/add-moderators.png)


## Organizationモデレーターの削除

上記のステップ1-3を行ってから、モデレーターから削除したい人もしくはTeamの横の**Remove moderator（モデレーターを削除）** をクリックしてください。
