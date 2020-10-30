---
title: フォークから作成されたプルリクエストのブランチへの変更をコミットする
intro: プルリクエストの作者から権限を付与されていれば、リポジトリのフォークから作成されたプルリクエストのブランチにおける変更をコミットできます。
redirect_from:
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

プルリクエストのブランチが以下の条件を満たす場合にのみ、コミットを実行できます:
- あなたがプッシュアクセス権限を持つリポジトリでオープンされ、かつそのリポジトリのフォークから作成されている
- ユーザ所有のフォーク上にある
- プルリクエストの作者から権限を付与されている
- コミットを妨げる[ブランチ制限](/articles/about-branch-restrictions)がない

プルリクエストを作成したユーザのみが、ユーザー所有のフォークにコミットをプッシュする権限を与えることができます。 詳しい情報については、「[フォークから作成されたプルリクエストブランチへの変更を許可する](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

{% note %}

**注釈:** リポジトリのフォークの、コピー (またはフォーク) を作成して、プルリクエストの変更元と同じ head ブランチに変更をコミットすることにより、{% data variables.product.product_location %} を通じて、リポジトリのフォークからプルリクエストのブランチへコミットすることも可能です。 一般的なガイドラインについては、「[フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)」を参照してください。

{% endnote %}

1. {% data variables.product.product_name %}で、プルリクエストのブランチを作成したフォーク (またはリポジトリのコピー) のメインページに移動します。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
 {% tip %}

 **ヒント:** {% data variables.product.prodname_desktop %}を使ってフォークをクローンしたい場合、「[{% data variables.product.prodname_desktop %}にリポジトリをクローンする](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)」を参照してください。

 {% endtip %}
4. カレントワーキングディレクトリを、クローンしたディレクトリをダウンロードしたい場所に変更します。
  ```shell
  $ cd open-source-projects
  ```
5. `git clone` と入力し、ステップ 3 でコピーした URL を貼り付けます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. **Enter** を押します。 これで、ローカルにクローンが作成されます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **ヒント:** エラーメッセージ "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" は、現在のワーキングディレクトリに、同じ名前のリポジトリがすでに存在することを意味します。 このエラーを解決するには、別のディレクトリにフォークをクローンする必要があります。

 {% endtip %}
7. 新しくクローンしたリポジトリに移動します。
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. 元の変更が行われた、プルリクエストの比較ブランチに切り替えます。 元のプルリクエストに移動すると、比較ブランチがプルリクエストの上部に表示されます。 ![比較ブランチの例](/assets/images/help/pull_requests/compare-branch-example.png) 以下の例では、比較ブランチは `test-branch` です。
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **ヒント:** 例も含めたプルリクエストブランチに関する詳しい情報については「[プルリクエストを作成する](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)」を参照してください。

 {% endtip %}
8. これで、このブランチに対して任意の操作を実行できます。 You can push new commits to it, run some local tests, or merge other branches into the branch. 自由に修正しましょう。
9. プルリクエストの head ブランチに変更をコミットした後、元のプルリクエストに直接、変更をプッシュできます。 この例では、head ブランチは `test-branch` です:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

新しいコミットが、{% data variables.product.product_location %} の元のプルリクエストに反映されます。

### 参考リンク

- [フォークについて](/articles/about-forks)
