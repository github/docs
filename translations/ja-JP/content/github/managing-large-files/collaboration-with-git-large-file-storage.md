---
title: Git Large File Storage でのコラボレーション
intro: '{% data variables.large_files.product_name_short %}を有効にすると、大容量のファイルも Git で扱う通常のファイルと同じようにフェッチ、修正、プッシュできます。 ただし、{% data variables.large_files.product_name_short %}を持っていないユーザの場合、ワークフローが異なります。'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

リポジトリのコラボレーターが {% data variables.large_files.product_name_short %}をインストールしていない場合、オリジナルの大容量ファイルにはアクセスできません。 リポジトリのクローンを試みた場合、ポインタファイルをフェッチするのみで、実際のデータにはアクセスできません。

{% tip %}

**ヒント:** {% data variables.large_files.product_name_short %}を有効にしていないユーザに対しては、大きなファイルの扱いについて記載したリポジトリコントリビューターのためのガイドラインを設定することをお勧めします。 たとえば、大容量ファイルを修正しないように、あるいは [Dropbox](http://www.dropbox.com/) や <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a> といったファイル共有サービスに変更をアップロードするように、コントリビューターに依頼するとよいでしょう。 詳しい情報については、「[リポジトリコントリビューターのためのガイドラインを定める](/github/building-a-strong-community/setting-guidelines-for-repository-contributors)」を参照してください。

{% endtip %}

### プルリクエストの大容量ファイルを表示する

{% data variables.product.product_name %}は、プルリクエストの {% data variables.large_files.product_name_short %}オブジェクトを表示しません。 Only the pointer file is shown:

![大容量ファイルのプルリクエスト例](/assets/images/help/large_files/large_files_pr.png)

ポインタファイルに関する詳しい情報については、「[{% data variables.large_files.product_name_long %}について](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)」を参照してください。

大きなファイルに加えられた変更を表示するには、プルリクエストをローカルでチェックアウトしてdiffを確認します。 詳しい情報については、「[プルリクエストをローカルでチェック アウトする](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

### 大容量ファイルをフォークにプッシュする

リポジトリのフォークに大容量ファイルをプッシュすると、フォークのオーナーのではなく、親リポジトリの、帯域幅およびストレージのクオータを消費することになります。

リポジトリネットワークですでに {% data variables.large_files.product_name_short %}オブジェクトがあるか、リポジトリネットワークのルートに書き込みアクセスがある場合、パブリックフォークに {% data variables.large_files.product_name_short %}オブジェクトをプッシュできます。

{% endif %}

### 参考リンク

- [Git Large File Storage オブジェクトでリポジトリを複製する](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)
