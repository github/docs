---
title: コミットに署名する
intro: 'GPG、{% ifversion ssh-commit-verification %}SSH、{% endif %}S/MIME のいずれかを使って、ローカル環境でコミットに署名できます。'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106750'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**ヒント:**

Git バージョン 2.0.0 以降で、ローカル リポジトリ用に既定でコミットに署名するように Git クライアントを設定するには、`git config commit.gpgsign true` を実行します。 コンピューター上の任意のローカル リポジトリで、既定ですべてのコミットに署名するには、`git config --global commit.gpgsign true` を実行します。

コミットに署名するたびに入力する必要をなくすために GPG キーパスフレーズを保管するには、次のツールの使用をおすすめします:
  - Mac ユーザーは、[GPG スイート](https://gpgtools.org/)により、Mac OS キーチェーンに GPG キー パスフレーズを保管できます。
  - Windows ユーザーの場合、[Gpg4win](https://www.gpg4win.org/) は他の Windows ツールと統合されます。

また、GPG キー パスフレーズを保管しておくために [gpg-agent](http://linux.die.net/man/1/gpg-agent) を手動で設定できますが、これは ssh-agent のように Mac OS キーチェーンでは統合されず、さらに設定が必要です。

{% endtip %}

複数のキーを持っている場合、または、コミッターの ID にマッチしないキーでコミットやタグに署名しようとする場合、[サインインのキーを Git に伝える](/articles/telling-git-about-your-signing-key)必要があります。

1. ローカルブランチに変更をコミットする場合、 -S フラグをGitコミットコマンドに追加します。
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. GPG を使用している場合は、コミットを作成した後、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときに設定したパスフレーズを指定します。
3. ローカルでのコミット作成が完了したら、{% data variables.product.product_name %} 上のリモートリポジトリにプッシュします。
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. {% data variables.product.product_name %}上で、プルリクエストに移動します。
{% data reusables.repositories.review-pr-commits %}
5. ベリファイされた署名の詳しい情報を見るには、Verifiedをクリックします。
![署名されたコミット](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## 参考資料

* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* [タグに署名する](/articles/signing-tags)
