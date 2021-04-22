---
title: 管理者 Team を改善された Organization の権限に移行する
intro: '2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 レガシーの管理者 Team は、改善された Organization 権限モデルに移行するまで、リポジトリの作成資格を自動的に維持します。'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions/
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

レガシーの管理者 Team メンバーのために新しい Team を作成することで、レガシーの管理者 Team が持つリポジトリ作成の資格を削除できます。Team が Organization のリポジトリに対して必要なアクセスを持っていることを確認してから、レガシーの管理者 Teamを削除してください。

詳しい情報については、「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

{% warning %}

**警告:**
- レガシーの管理者 Team のメンバーが、他の Team のメンバーではない場合、そのメンバーは Team を削除すると Organization から削除されます。 Team を削除する前に、メンバーを Organization の直接メンバーにするか、必要なリポジトリに対するコラボレーターアクセスを持たせてください。
- レガシーの管理者 Team メンバーが作成したプライベートフォークを失わないために、レガシーの管理者 Teamを削除する前に、以下のステップ 1 - 3 に従う必要があります。
- Organization のメンバーにとって "admin" は、Organization の特定の[リポジトリに対する特定のアクセス](/articles/repository-permission-levels-for-an-organization)を示します。ですから、これを Team 名として使うことは避けるようおすすめします。

{% endwarning %}

1. [新しい Team を作成](/articles/creating-a-team)します。
2. 新しい Team に、レガシーの管理者 Team の[各メンバーを追加](/articles/adding-organization-members-to-a-team)します。
3. レガシーの管理者 Team がアクセスしていた各リポジトリについて、 [新しい Team に同等のアクセスを与えます](/articles/managing-team-access-to-an-organization-repository)。
4. [レガシーの管理者 Team を削除](/articles/deleting-a-team)します。
