---
title: GitHub Importer でコミット作者属性を更新する
intro: インポートの間、コミット作者の GitHub アカウントのリポジトリのコミットにマッチングできます。
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131236'
---
GitHub Importer は、インポートしているリポジトリのコミット作者のメールアドレスにマッチする GitHub ユーザを探します。 次に、お客様は、そのメールアドレスまたは作者の GitHub ユーザ名を使って、コミットをその作者に接続することができます。

## コミット作者を更新する

1. リポジトリをインポートした後、インポート ステータス ページで **[Match authors]\(作成者の照合\)** をクリックします。
![[Match authors]\(作成者の照合\) ボタン](/assets/images/help/importer/match-authors-button.png)
2. 情報を更新する作成者の横の **[接続]** をクリックします。
![コミット作成者の一覧](/assets/images/help/importer/connect-commit-author.png)
3. 作成者のメール アドレスまたは GitHub ユーザー名を入力し、**Enter** キーを押します。

## パブリックメールアドレスのある GitHub ユーザにコミットを属させる

インポートしたリポジトリのコミットの作成者が、コミットを作成するのに使ったメール アドレスに関連付けられた GitHub アカウントを持っていて、[そのコミット メール アドレスをプライベートとして設定](/articles/setting-your-commit-email-address)していない場合、GitHub Importer は、コミットに関連付けられているメール アドレスを、GitHub アカウントに関連付けられているパブリック メール アドレスと照合し、そのコミットを GitHub アカウントの属性に設定します。

## パブリックメールアドレスのない GitHub ユーザにコミットを属させる

インポートしたリポジトリのコミットの作成者が、GitHub プロファイルでのパブリック メール アドレスの設定も、[コミット メール アドレスのプライベートとしての設定](/articles/setting-your-commit-email-address)も行っていない場合、GitHub Importer は、コミットに関連付けられているメール アドレスを GitHub アカウントと照合できない場合があります。

このことを、コミット作者はメールアドレスをプライベートに設定することで解決できます。 その場合、コミットは `<username>@users.noreply.github.com` の属性になり、インポートされたコミットは GitHub アカウントに関連付けられます。

## メールアドレスを使ったコミットの属性付け

作成者のメール アドレスが GitHub アカウントに関連付けられていない場合、インポートの後で、作成者は[アカウントにアドレスを追加する](/articles/adding-an-email-address-to-your-github-account)ことができ、コミットの属性は正しく設定されます。

作者が GitHub アカウントを所有していない場合、GitHub Importer は、コミットをコミットに関連するメールアドレスに属性付けできます。

## 参考資料

- 「[GitHub Importer について](/articles/about-github-importer)」
- [GitHub Importer でリポジトリをインポートする](/articles/importing-a-repository-with-github-importer)
- [アカウントにメール アドレスを追加する](/articles/adding-an-email-address-to-your-github-account/)
- 「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address)」
