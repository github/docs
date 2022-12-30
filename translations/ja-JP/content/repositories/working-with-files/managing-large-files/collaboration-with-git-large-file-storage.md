---
title: Git Large File Storage でのコラボレーション
intro: '{% data variables.large_files.product_name_short %}を有効にすると、大容量のファイルも Git で扱う通常のファイルと同じようにフェッチ、修正、プッシュできます。 ただし、{% data variables.large_files.product_name_short %}を持っていないユーザの場合、ワークフローが異なります。'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131934'
---
リポジトリのコラボレーターが {% data variables.large_files.product_name_short %}をインストールしていない場合、オリジナルの大容量ファイルにはアクセスできません。 リポジトリのクローンを試みた場合、ポインタファイルをフェッチするのみで、実際のデータにはアクセスできません。

{% tip %}

**参考:** {% data variables.large_files.product_name_short %} を有効にしていないユーザーに対しては、大きなファイルの扱いについて記載したリポジトリ コントリビューターのためのガイドラインを設定することをお勧めします。 たとえば、大きなファイルを変更しないように共同作成者に依頼したり、[Dropbox](http://www.dropbox.com/) や <a href="https://drive.google.com/" data-proofer-ignore>Google ドライブ</a>などのファイル共有サービスに変更をアップロードしたりできます。 詳細については、「[リポジトリ コントリビューターのためのガイドラインを定める](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)」を参照してください。

{% endtip %}

## プルリクエストの大容量ファイルを表示する

{% data variables.product.product_name %}は、プルリクエストの {% data variables.large_files.product_name_short %}オブジェクトを表示しません。 ポインタファイルのみが表示されます。

![大容量ファイルのプルリクエスト例](/assets/images/help/large_files/large_files_pr.png)

ポインター ファイルについて詳しくは、「[{% data variables.large_files.product_name_long %} について](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)」を参照してください。

大きなファイルに加えられた変更を表示するには、プルリクエストをローカルでチェックアウトしてdiffを確認します。 詳しくは、「[pull request をローカルでチェックアウトする](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)」を参照してください。

{% ifversion fpt or ghec %}

## 大容量ファイルをフォークにプッシュする

リポジトリのフォークに大容量ファイルをプッシュすると、フォークのオーナーのではなく、親リポジトリの、帯域幅およびストレージのクオータを消費することになります。

リポジトリネットワークですでに {% data variables.large_files.product_name_short %}オブジェクトがあるか、リポジトリネットワークのルートに書き込みアクセスがある場合、パブリックフォークに {% data variables.large_files.product_name_short %}オブジェクトをプッシュできます。

{% endif %}

## 参考資料

- 「[Git Large File Storage オブジェクトでリポジトリを複製する](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)」
