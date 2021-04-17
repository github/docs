---
title: フォークからプルリクエストを作成する
intro: プルリクエストを作成して、上流リポジトリのフォークに加えた変更を提案できます。
redirect_from:
  - /articles/creating-a-pull-request-from-a-fork
permissions: リポジトリへの書き込みアクセスを持つユーザであれば、ユーザ所有のフォークからプルリクエストを作成できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

また、上流リポジトリのメンテナに、ユーザ所有のフォークにコミットをプッシュする権限を与えることもできます。 プルリクエストが上流リポジトリのブランチを base ブランチとして自分のトピックブランチと比較する場合、トピックブランチは「プルリクエストの比較ブランチ」とも呼ばれます。 例も含めたプルリクエストブランチに関する詳しい情報については、「[プルリクエストを作成する](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)」を参照してください。

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. 作成したフォークの元であるリポジトリに移動します。
{% data reusables.repositories.new-pull-request %}
3. [Compare] ページで [**compare across forks**] をクリックします。 ![[Compare across forks] リンク](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. [base branch] ドロップダウンメニューで、変更をマージする上流リポジトリのブランチを選択します。 ![base フォークとブランチを選択するドロップダウンメニュー](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. [head fork] ドロップダウンメニューでフォークを選択し、次に [compare branch] ドロップダウンメニューを使用して、変更を加えたブランチを選択します。 ![head フォークと比較ブランチを選択するドロップダウンメニュー](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![メンテナに変更を許可するサイドバーのチェックボックス](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

### 参考リンク

- "[フォークでの作業](/articles/working-with-forks)"
- [フォークから作成されたプルリクエストブランチへの変更を許可する](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
