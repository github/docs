---
title: フォークについて
intro: フォークはユーザが管理するリポジトリのコピーです。 フォークを使えば、オリジナルのリポジトリに影響を与えることなくプロジェクトへの変更を行えます。 オリジナルのリポジトリから更新をフェッチしたり、プルリクエストでオリジナルのリポジトリに変更をサブミットしたりできます。
redirect_from:
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
リポジトリのフォークはリポジトリのコピーと似ていますが、次の 2 つの大きな違いがあります。

* プルリクエストを使ってユーザが所有するフォークからの変更をオリジナルのリポジトリ（*上流*のリポジトリとも呼ばれます）に提案できます。
* 上流のリポジトリと自分のフォークを同期させることで、上流のリポジトリからの変更を自分のローカルフォークへ持ち込めます。

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

フォークを削除しても、オリジナルの上流のリポジトリは削除されません。 オリジナルに影響を与えることなく、コラボレータの追加、ファイル名の変更、{% data variables.product.prodname_pages %} の生成など、自分のフォークに必要な変更を加えることができます。{% if currentVersion == "free-pro-team@latest" %} 削除されたフォークリポジトリを復元することはできません。 詳しい情報については、「[削除されたリポジトリを復元する](/articles/restoring-a-deleted-repository)」を参照してください。{% endif %}

オープンソースプロジェクトでは、フォークを使用して、上流のリポジトリに提供される前にアイデアや変更をイテレーションすることがよくあります。 ユーザ所有のフォークに変更を加え、作業を上流リポジトリと比較するプルリクエストをオープンすると、上流リポジトリへのプッシュアクセスできる人に対して、変更をプルリクエストブランチにプッシュする権限を付与することができます。 これにより、リポジトリメンテナがマージする前に、ユーザが所有するフォークからプルリクエストブランチに対してローカルでコミットを実行したり、テストを実行したりすることができるようになり、コラボレーションがスピードアップします。 Organization が所有するフォークにプッシュ権限を与えることはできません。

{% data reusables.repositories.private_forks_inherit_permissions %}

既存のリポジトリのコンテンツから新しいリポジトリを作成するが、将来にわたって変更を上流にマージしない場合、リポジトリを複製するか、リポジトリがテンプレートである場合は、リポジトリをテンプレートとして使うことができます。 詳細は「[リポジトリを複製する](/articles/duplicating-a-repository)」および「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」を参照してください。

### 参考リンク

- [コラボレーティブ開発モデルについて](/articles/about-collaborative-development-models)
- [フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)
- [オープンソースガイド](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
