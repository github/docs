---
title: GitHub上のマージ方法について
intro: 'リポジトリへのプッシュアクセスを持つコントリビューターに対し、{% data variables.product.product_location %}上でプルリクエストを様々なマージオプションでマージすることを許可するか、リポジトリへのすべてのプルリクエストに特定のマージ方法を強制することができます。'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}コミットsquashingあるいはリベースのようなマージの1つの種類を、リポジトリでその方法だけを有効化することで強制できます。

{% ifversion fpt or ghec %}
{% note %}

**Note:** When using the merge queue, you no longer get to choose the merge method, as this is controlled by the queue. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %}
{% endif %}

{% data reusables.pull_requests.default_merge_option %}

デフォルトのマージ方法では、マージコミットが作成されます。 直線状のコミット履歴を強制して、保護されたブランチにマージコミットをプッシュできないようにすることができます。 詳しい情報については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-linear-history)」を参照してください。

## マージコミットのsquash

{% data reusables.pull_requests.squash_and_merge_summary %}

コミットの squash を有効化する前に、以下の欠点について考慮してください:
- 特定の変更が元々いつ行われたのか、そして squash されたコミットを誰が作成したのかという情報が失われます。
- squash してマージした後もプルリクエストの head ブランチで作業を続け、同じブランチ間に新しいプルリクエストを作成すると、以前 squash してマージしたコミットが新しいプルリクエストにリストされます。 また、連続するプルリクエストごとに繰り返し解決しなければならないコンフリクトが発生する場合もあります。 詳しい情報については[プルリクエストのマージについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)を参照してください。
- "SHA" あるいは "hash" ID を使う Git コマンドの中には、オリジナルのコミット中の SHA ID が失われるので使うことが難しくなるものが生じるかもしれません。 たとえば[`git rerere`](https://git-scm.com/docs/git-rerere)はそれほど効果的ではなくなるかもしれません。

詳しい情報については[プルリクエストのためのコミットsquashingの設定](/articles/configuring-commit-squashing-for-pull-requests)を参照してください。

## リベースとコミットのマージ

{% data reusables.pull_requests.rebase_and_merge_summary %}

コミットのリベースを有効化する前に、以下の欠点について考慮してください:
- リポジトリのコントリビューターは、コマンドライン上でリベースし、コンフリクトがあれば解決し、変更をプルリクエストのトピックブランチ (あるいはリモートの head ブランチ) へフォースプッシュしなければ、{% data variables.product.product_location %} 上で**リベースとマージ**という選択肢を使えるようにならないかもしれません。 フォースプッシュは、コントリビューターが他者が作業のベースとしている作業を上書きすることがないよう、慎重に行わなければなりません。 {% data variables.product.product_location %}で**リベースとマージ**の選択肢が無効化されている場合と、それを再度有効にするワークフローについてもっと知るには、[プルリクエストのマージについて](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)を参照してください。
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

詳しい情報については[プルリクエストのためのコミットのリベースの設定](/articles/configuring-commit-rebasing-for-pull-requests)を参照してください。
