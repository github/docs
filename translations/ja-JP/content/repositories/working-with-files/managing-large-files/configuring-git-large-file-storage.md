---
title: Git Large File Storage を設定する
intro: '[{% data variables.large_files.product_name_short %} をインストール](/articles/installing-git-large-file-storage/)したら、それをリポジトリ内の大容量ファイルに関連付ける必要かあります。'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331761'
---
{% data variables.product.product_name %} で利用したいファイルがリポジトリにある場合、まずリポジトリからそれらのファイルを削除し、それからローカルで {% data variables.large_files.product_name_short %} に追加する必要があります。 詳しくは、「[リポジトリのファイルを {% data variables.large_files.product_name_short %} に移動する](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)」をご覧ください。

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**注:** 大きいファイルを {% data variables.product.product_name %} にプッシュする前に、Enterprise で {% data variables.large_files.product_name_short %} を有効にしていることを確認してください。 詳しくは、「[GitHub Enterprise Server で Git Large File Storage を設定する](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)」をご覧ください。

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. カレントワーキングディレクトリを、{% data variables.large_files.product_name_short %}で利用したい既存のリポジトリに変更します。
3. リポジトリのファイルの種類を {% data variables.large_files.product_name_short %} と関連付けるには、`git {% data variables.large_files.command_name %} track` の後に、{% data variables.large_files.product_name_short %} に自動的にアップロードしたいファイル拡張子の名前を入力します。

  たとえば、 _.psd_ ファイルを関連付けるには、次のコマンドを入力します。
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  {% data variables.large_files.product_name_short %} に関連付けるすべてのファイルの種類を、`git {% data variables.large_files.command_name %} track` で追加する必要があります。 このコマンドは、リポジトリの *.gitattributes* ファイルを修正し、大きいファイルを {% data variables.large_files.product_name_short %} に関連付けます。

  {% note %}

  **注:** ローカルの *.gitattributes* ファイルをリポジトリにコミットすることを強くお勧めします。

    - {% data variables.large_files.product_name_short %} に関連付けられているグローバルな *.gitattributes* ファイルに依存すると、他の Git プロジェクトに参加するときに競合することがあります。
    - リポジトリに *.gitattributes* ファイルを入れると、フォークや新しいクローンを作成するユーザーは、{% data variables.large_files.product_name_short %} を使って共同作業をいっそう簡単に行うことができます。
    - リポジトリに *.gitattributes* ファイルを入れると、{% data variables.large_files.product_name_short %} オブジェクトを必要に応じて ZIP ファイルや tarball アーカイブに含めることができます。

  {% endnote %}

4. 以下のコマンドで、関連付けた拡張子に一致するリポジトリにファイルを追加します:
  ```shell
  $ git add path/to/file.psd
  ```
5. 以下のように、ファイルをコミットし、{% data variables.product.product_name %} にプッシュします:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  アップロードしたファイルの Diagnostics 情報が、以下のように表示されるはずです:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## 参考資料

- [{% data variables.large_files.product_name_long %} でのコラボレーション](/articles/collaboration-with-git-large-file-storage/){% ifversion fpt or ghec %}
- [リポジトリのアーカイブで {% data variables.large_files.product_name_short %} オブジェクトを管理する](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository){% endif %}
