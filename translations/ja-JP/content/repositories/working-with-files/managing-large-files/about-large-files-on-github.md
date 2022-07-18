---
title: About large files on GitHub
intro: '{% data variables.product.product_name %} limits the size of files you can track in regular Git repositories. Learn how to track or remove files that are beyond the limit.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
---

## About size limits on {% data variables.product.product_name %}

{% ifversion fpt or ghec %}
{% data variables.product.product_name %} は、すべての Git リポジトリに対して十分なストレージを提供するよう努めていますが、ファイルとリポジトリのサイズにはハードリミットがあります。 ユーザのパフォーマンスと信頼性を確保するため、リポジトリ全体の健全性のシグナルを積極的に監視しています。 リポジトリの健全性は、サイズ、コミット頻度、コンテンツ、構造など、さまざまな相互作用要因の機能よるものです。

### File size limits
{% endif %}

{% data variables.product.product_name %} limits the size of files allowed in repositories. {% data variables.large_files.warning_size %}より大きいファイルを追加または更新しようとすると、Gitから警告が表示されます。 変更は引き続きリポジトリに正常にプッシュされますが、パフォーマンスへの影響を最小限に抑えるためにコミットを削除することを検討してもよいでしょう。 詳細は「[リポジトリの履歴からファイルを削除する](#removing-files-from-a-repositorys-history)」を参照してください。

{% note %}

**メモ:** ブラウザ経由でリポジトリにファイルを追加する場合、そのファイルは {% data variables.large_files.max_github_browser_size %} 以下でなければなりません。 詳細は「[ファイルをリポジトリに追加する](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)」を参照してください。

{% endnote %}

{% ifversion ghes %}デフォルトでは、{% endif %}{% data variables.product.product_name %}は{% data variables.large_files.max_github_size %}以上のプッシュをブロックします。 {% ifversion ghes %} ただし、サイト管理者は {% data variables.product.product_location %} に別の制限を設定できます。  For more information, see "[Setting Git push limits](/enterprise/admin/guides/installation/setting-git-push-limits)."{% endif %}

To track files beyond this limit, you must use {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). 詳しい情報については、「[{% data variables.large_files.product_name_long %} について](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)」を参照してください。

If you need to distribute large files within your repository, you can create releases on {% data variables.product.product_location %} instead of tracking the files. 詳しい情報については、「[大きなバイナリを配布する](#distributing-large-binaries)」を参照してください。

Git is not designed to handle large SQL files. 大規模なデータベースを他の開発者と共有するには、[Dropbox](https://www.dropbox.com/) の使用をお勧めします。

{% ifversion fpt or ghec %}
### Repository size limits

リポジトリは小さく保ち、理想としては 1GB 未満、および 5GB 未満にすることを強くお勧めします。 リポジトリが小さいほど、クローン作成が速く、操作やメンテナンスが簡単になります。 リポジトリがインフラストラクチャに過度に影響する場合は、{% data variables.contact.github_support %} から是正措置を求めるメールが送られてくる場合があります。 特に多くのコラボレータが参加している大規模なプロジェクトでは、柔軟に対応するよう努めており、可能な限り解決策を見つけるために協力します。 リポジトリのサイズと全体的な健全性を効果的に管理することで、リポジトリがインフラストラクチャに影響を与えることを防ぎます。 [`github/git-sizer`](https://github.com/github/git-sizer) リポジトリには、リポジトリ分析のためのアドバイスとツールがあります。

外部依存関係によって、Git リポジトリが非常に大きくなる場合があります。 リポジトリが外部依存関係で埋まってしまうことを避けるために、パッケージマネージャーの使用をお勧めします。 一般的な言語で人気のあるパッケージマネージャーには、[Bundler](http://bundler.io/)、[Node のパッケージマネージャー](http://npmjs.org/)、[Maven](http://maven.apache.org/) などがあります。 これらのパッケージマネージャーは Git リポジトリの直接使用をサポートしているため、事前にパッケージ化されたソースは必要ありません。

Git はバックアップツールとして機能するようには設計されていません。 ただし、[Arq](https://www.arqbackup.com/)、[Carbonite](http://www.carbonite.com/)、[CrashPlan](https://www.crashplan.com/en-us/) など、バックアップを実行するために特別に設計された多くのソリューションがあります。
{% endif %}

## ファイルをリポジトリの履歴から削除する

{% warning %}

**警告**: この手順では、ファイルをコンピュータのリポジトリと {% data variables.product.product_location %} から恒久的に削除します。 ファイルが重要なものである場合は、ローカルバックアップコピーをリポジトリ外にあるディレクトリに作成してください。

{% endwarning %}

### プッシュされていない直近のコミットで追加されたファイルを削除する

ファイルが直近のコミットで追加され、{% data variables.product.product_location %} にプッシュしていない場合は、ファイルを削除してコミットを修正することができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. ファイルを削除するため、`git rm --cached` を入力します。
  ```shell
  $ git rm --cached <em>サイズの大きいファイル</em>
  # サイズの大きいファイルを削除するためにステージするが、ディスクには残す
  ```
4. `--amend -CHEAD` を使用して、この変更をコミットします。
  ```shell
  $ git commit --amend -CHEAD
  # 以前のコミットを変更して修正する
  # プッシュされていない履歴からもファイルを削除する必要があるため
  # 単に新しいコミットを行うだけでは機能しない
  ```
5. コミットを {% data variables.product.product_location %} にプッシュします。
  ```shell
  $ git push
  # 書き換えられサイズが小さくなったコミットをプッシュする
  ```

### 以前のコミットで追加されたファイルを削除する

以前のコミットでファイルを追加した場合は、リポジトリの履歴から削除する必要があります。 リポジトリの履歴からファイルを削除するには、BFG Repo-Cleaner または `git filter-branch` コマンドを使用できます。 詳細は「[機密データをリポジトリから削除する](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)」を参照してください。

## 大きなバイナリを配布する

リポジトリ内で大きなファイルを配布する必要がある場合は、{% data variables.product.product_location %}でリリースを作成できます。 リリースでは、他の人が使用できるように、ソフトウェア、リリースノート、バイナリファイルへのリンクをパッケージ化できます。 詳細は「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

{% ifversion fpt or ghec %}

リリース内のバイナリファイルの合計サイズや、それらの配布に使用される帯域は制限されません。 ただし、個々のファイルは{% data variables.large_files.max_lfs_size %}未満でなければなりません。

{% endif %}

