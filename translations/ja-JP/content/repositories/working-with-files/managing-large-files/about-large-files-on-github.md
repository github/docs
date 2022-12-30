---
title: GitHub での大きいファイルについて
intro: '{% data variables.product.product_name %} には、通常の Git リポジトリで追跡できるファイルのサイズに制限があります。 制限を超えるファイルを追跡または削除する方法について説明します。'
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
ms.openlocfilehash: c9910f669b13c0c2bc4a8517ac6b33476b23b475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331649'
---
## {% data variables.product.product_name %} でのサイズ制限について

{% ifversion fpt or ghec %} {% data variables.product.product_name %} は、すべての Git リポジトリに対して十分なストレージを提供するよう努めていますが、ファイルとリポジトリのサイズにはハード制限があります。 ユーザのパフォーマンスと信頼性を確保するため、リポジトリ全体の健全性のシグナルを積極的に監視しています。 リポジトリの健全性は、サイズ、コミット頻度、コンテンツ、構造など、さまざまな相互作用要因の機能よるものです。

### ファイル サイズ制限
{% endif %}

{% data variables.product.product_name %} には、リポジトリで許可されるファイルのサイズに制限があります。 {% data variables.large_files.warning_size %}より大きいファイルを追加または更新しようとすると、Gitから警告が表示されます。 変更は引き続きリポジトリに正常にプッシュされますが、パフォーマンスへの影響を最小限に抑えるためにコミットを削除することを検討してもよいでしょう。 詳しくは、「[ファイルをリポジトリの履歴から削除する](#removing-files-from-a-repositorys-history)」をご覧ください。

{% note %}

**注:** ブラウザーからリポジトリにファイルを追加する場合、そのファイルは {% data variables.large_files.max_github_browser_size %} 以下でなければなりません。 詳細については、「[リポジトリにファイルを追加する](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)」を参照してください。

{% endnote %}

{% ifversion ghes %}既定では、{% endif %}{% data variables.product.product_name %} は {% data variables.large_files.max_github_size %} を超えるプッシュをブロックします。 {% ifversion ghes %}ただし、サイト管理者は、{% data variables.product.product_location %} に対して異なる制限を構成できます。  詳しくは、「[Git のプッシュ制限を設定](/enterprise/admin/guides/installation/setting-git-push-limits)」をご覧ください。{% endif %}

この制限を超えるファイルを追跡するには、{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) を使う必要があります。 詳しくは、「[{% data variables.large_files.product_name_long %} について](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)」をご覧ください。

リポジトリ内で大きなファイルを配布する必要がある場合は、ファイルを追跡するのではなく、{% data variables.product.product_location %} でリリースを作成できます。 詳しくは、「[大きなバイナリを配布する](#distributing-large-binaries)」をご覧ください。

Git は、大きい SQL ファイルを処理するようには設計されていません。 大きいデータベースを他の開発者と共有するには、[Dropbox](https://www.dropbox.com/) を使うことをお勧めします。

{% ifversion fpt or ghec %}
### リポジトリ サイズの制限

リポジトリは小さく保ち、理想としては 1GB 未満、および 5GB 未満にすることを強くお勧めします。 リポジトリが小さいほど、クローン作成が速く、操作やメンテナンスが簡単になります。 リポジトリがインフラストラクチャに過度に影響する場合は、{% data variables.contact.github_support %} から是正措置を求めるメールが送られてくる場合があります。 特に多くのコラボレータが参加している大規模なプロジェクトでは、柔軟に対応するよう努めており、可能な限り解決策を見つけるために協力します。 リポジトリのサイズと全体的な健全性を効果的に管理することで、リポジトリがインフラストラクチャに影響を与えることを防ぎます。 [`github/git-sizer`](https://github.com/github/git-sizer) リポジトリには、リポジトリ分析のためのアドバイスとツールがあります。

外部依存関係によって、Git リポジトリが非常に大きくなる場合があります。 リポジトリが外部依存関係で埋まってしまうことを避けるために、パッケージマネージャーの使用をお勧めします。 一般的な言語で人気のあるパッケージ マネージャーには、[Bundler](http://bundler.io/)、[Node のパッケージ マネージャー](http://npmjs.org/)、[Maven](http://maven.apache.org/) などがあります。 これらのパッケージマネージャーは Git リポジトリの直接使用をサポートしているため、事前にパッケージ化されたソースは必要ありません。

Git はバックアップツールとして機能するようには設計されていません。 ただし、[Arq](https://www.arqbackup.com/)、[Carbonite](http://www.carbonite.com/)、[CrashPlan](https://www.crashplan.com/en-us/) など、バックアップを実行するために特別に設計された多くのソリューションがあります。
{% endif %}

## ファイルをリポジトリの履歴から削除する

{% warning %}

**警告**: この手順では、ファイルをコンピューターのリポジトリと {% data variables.product.product_location %} から完全に削除します。 ファイルが重要なものである場合は、ローカルバックアップコピーをリポジトリ外にあるディレクトリに作成してください。

{% endwarning %}

### プッシュされていない直近のコミットで追加されたファイルを削除する

ファイルが直近のコミットで追加され、{% data variables.product.product_location %} にプッシュしていない場合は、ファイルを削除してコミットを修正することができます。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. ファイルを削除するには、「`git rm --cached`」と入力します。
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. `--amend -CHEAD` を使って、この変更をコミットします。
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. コミットを {% data variables.product.product_location %} にプッシュします。
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### 以前のコミットで追加されたファイルを削除する

以前のコミットでファイルを追加した場合は、リポジトリの履歴から削除する必要があります。 リポジトリの履歴からファイルを削除するには、BFG Repo-Cleaner または `git filter-branch` コマンドを使用できます。 詳しくは、「[機密データをリポジトリから削除する](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)」をご覧ください。

## 大きなバイナリを配布する

リポジトリ内で大きなファイルを配布する必要がある場合は、{% data variables.product.product_location %}でリリースを作成できます。 リリースでは、他の人が使用できるように、ソフトウェア、リリースノート、バイナリファイルへのリンクをパッケージ化できます。 詳しくは、「[リリースについて](/github/administering-a-repository/about-releases)」をご覧ください。

{% ifversion fpt or ghec %}

リリース内のバイナリファイルの合計サイズや、それらの配布に使用される帯域は制限されません。 ただし、個々のファイルは{% data variables.large_files.max_lfs_size %}未満でなければなりません。

{% endif %}

