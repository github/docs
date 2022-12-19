---
title: コミットが間違ったユーザにリンクされているのはなぜですか？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} は、コミットヘッダのメールアドレスを使用して、コミットを GitHub ユーザにリンクします。 コミットが別のユーザーにリンクされているか、どのユーザーにもリンクされていない場合は、ローカルの Git 設定を変更する{% ifversion not ghae %}か、アカウントのメール設定にメール アドレスを追加するか、その両方を行う{% endif %}必要がある場合があります。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883036'
---
{% tip %}

**注**: コミットが別のユーザーにリンクされている場合でも、そのユーザーがあなたのリポジトリにアクセスできるわけではありません。 コラボレーターとして追加した場合、またはリポジトリにアクセスできる Team に追加した場合にのみ、ユーザはあなたが所有するリポジトリにアクセスできます。

{% endtip %}

## コミットは別のユーザにリンクされています

コミットが別のユーザにリンクされている場合は、ローカルの Git 設定のメールアドレスが {% data variables.product.product_name %} 上のそのユーザのアカウントに接続されていることを意味します。 この場合、ローカルの Git 設定のメールを{% ifversion ghae %} {% data variables.product.product_name %} のアカウントに関連付けられたアドレスに変更して、今後のコミットをリンクすることができます。 古いコミットはリンクされません。 詳細については、「[コミット メール アドレスの設定](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」を参照してください。{% else %}新しいメール アドレス {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} アカウントのアカウントに追加して、今後のコミットをアカウントにリンクします。

1. ローカル Git 設定のメール アドレスを変更するには、「[コミット メール アドレスを設定する](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」の手順に従います。 複数のマシンで作業している場合は、各マシンでこの設定を変更する必要があります。
2. 「[GitHub アカウントへのメール アドレスの追加](/articles/adding-an-email-address-to-your-github-account)」の手順に従って、手順 2 のメール アドレスをアカウント設定に追加します。{% endif %}

これ以降のコミットは、あなたのアカウントにリンクされます。

## コミットはどのユーザにもリンクされていません

コミットがどのユーザにもリンクされていない場合、コミット作者の名前はユーザプロファイルへのリンクとして表示されません。

これらのコミットに使用されたメールアドレスを確認し、コミットをアカウントに接続するには、次の手順に従います:

1. コミットメッセージリンクをクリックしてコミットに移動します。
![コミット メッセージ リンク](/assets/images/help/commits/commit-msg-link.png)
2. コミットがリンクされていない理由に関するメッセージを読むには、ユーザー名の右側にある青い {% octicon "question" aria-label="Question mark" %} の上にカーソルを合わせます。
![コミット ホバー メッセージ](/assets/images/help/commits/commit-hover-msg.png)

  - **未確認の作者 (メールアドレスあり)** このメッセージにメール アドレスが表示される場合、コミットの作成に使用したアドレスが {% data variables.product.product_name %} のアカウントに接続されていません。 {% ifversion not ghae %}コミットをリンクするには、[メール アドレスを GitHub のメール設定に追加します](/articles/adding-an-email-address-to-your-github-account)。{% endif %}{% ifversion not ghae %} メール アドレスに Gravatar が関連付けられている場合、Gravatar は既定の灰色の Octocat ではなく、コミットの横に表示されます。{% endif %}
  - **認識できない作成者 (電子メール アドレスなし)** このメッセージにメール アドレスがない場合は、{% data variables.product.product_name %} でアカウントに接続できない汎用メール アドレスを使用しています。{% ifversion not ghae %}[Git でコミット電子メール アドレスを設定](/articles/setting-your-commit-email-address)し、[新しいアドレスを GitHub の電子メール設定に追加](/articles/adding-an-email-address-to-your-github-account)して、今後のコミットをリンクする必要があります。 古いコミットはリンクされません。{% endif %}
  - **無効なメール** ローカル Git 構成設定の電子メール アドレスが空白であるか、電子メール アドレスとして書式設定されていません。{% ifversion not ghae %}[Git でコミット電子メール アドレスを設定](/articles/setting-your-commit-email-address)し、[新しいアドレスを GitHub の電子メール設定に追加](/articles/adding-an-email-address-to-your-github-account)して、今後のコミットをリンクする必要があります。 古いコミットはリンクされません。{% endif %}

{% ifversion ghae %}ローカルの Git 設定のメールをアカウントに関連付けられたアドレスに変更して、今後のコミットをリンクすることができます。 古いコミットはリンクされません。 詳細については、「[コミット メール アドレスの設定](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」を参照してください。
{% endif %}

{% warning %}

ローカル Git 設定に一般的なメールアドレス、または他のユーザのアカウントにすでに添付されているメールアドレスが含まれている場合、以前のコミットはアカウントにリンクされません。 Git では以前のコミットに使用したメールアドレスを変更することができますが、特に共有リポジトリではこれを推奨しません。

{% endwarning %}

## 参考資料

* 「[コミットを検索する](/search-github/searching-on-github/searching-commits)」
