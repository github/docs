---
title: フォークについて
intro: フォークはユーザが管理するリポジトリのコピーです。 フォークを使えば、オリジナルのリポジトリに影響を与えることなくプロジェクトへの変更を行えます。 オリジナルのリポジトリから更新をフェッチしたり、プルリクエストでオリジナルのリポジトリに変更をサブミットしたりできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

リポジトリのフォークはリポジトリのコピーと似ていますが、次の 2 つの大きな違いがあります。

* プルリクエストを使ってユーザが所有するフォークからの変更をオリジナルのリポジトリ（*上流*のリポジトリとも呼ばれます）に提案できます。
* 上流のリポジトリと自分のフォークを同期させることで、上流のリポジトリからの変更を自分のローカルフォークへ持ち込めます。

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

If you're a member of a {% data variables.product.prodname_emu_enterprise %}, there are further restrictions on the repositories you can fork. {% data reusables.enterprise-accounts.emu-forks %} For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

フォークを削除しても、オリジナルの上流のリポジトリは削除されません。 オリジナルに影響を与えることなく、コラボレータの追加、ファイル名の変更、{% data variables.product.prodname_pages %} の生成など、自分のフォークに必要な変更を加えることができます。{% ifversion fpt or ghec %}削除されたフォークリポジトリを復元することはできません。 詳しい情報については、「[削除されたリポジトリを復元する](/articles/restoring-a-deleted-repository)」を参照してください。{% endif %}

オープンソースプロジェクトでは、フォークを使用して、上流のリポジトリに提供される前にアイデアや変更をイテレーションすることがよくあります。 When you make changes in your user-owned fork and open a pull request that compares your work to the upstream repository, you can give anyone with push access to the upstream repository permission to push changes to your pull request branch (including deleting the branch). これにより、リポジトリメンテナがマージする前に、ユーザが所有するフォークからプルリクエストブランチに対してローカルでコミットを実行したり、テストを実行したりすることができるようになり、コラボレーションがスピードアップします。 Organization が所有するフォークにプッシュ権限を与えることはできません。

{% data reusables.repositories.private_forks_inherit_permissions %}

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes to the upstream in the future, you can duplicate the repository or, if the repository is a template, you can use the repository as a template. For more information, see "[Duplicating a repository](/articles/duplicating-a-repository)" and "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)".

## 参考リンク

- [コラボレーティブ開発モデルについて](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)
- [フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [オープンソースガイド](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
