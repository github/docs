---
title: タグに署名する
intro: 'GPG、{% ifversion ssh-commit-verification %}SSH、{% endif %}S/MIME のいずれかを使って、ローカル環境でタグに署名できます。'
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 22bdc1c5095a8fa82d2ac406a19dc633f8f44fc6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106678'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. タグに署名するには、`git tag` コマンドに `-s` を追加します。
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. `git tag -v [tag-name]` を実行して署名されたタグを検証します。
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## 参考資料

- 「[リポジトリのタグを表示する](/articles/viewing-your-repositorys-tags)」
- 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
- 「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」
- 「[コミットに署名する](/articles/signing-commits)」
