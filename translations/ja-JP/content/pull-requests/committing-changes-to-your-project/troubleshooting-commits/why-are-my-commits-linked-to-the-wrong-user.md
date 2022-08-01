---
title: コミットが間違ったユーザにリンクされているのはなぜですか？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} は、コミットヘッダのメールアドレスを使用して、コミットを GitHub ユーザにリンクします。 コミットが別のユーザにリンクされている、またはまったくリンクされていない場合は、ローカルの Git 設定 {% ifversion not ghae %} を変更するか、アカウントのメール設定にメールアドレスを追加するか、あるいはその両方を行う必要があります{% endif %}。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
---

{% tip %}

**メモ**: コミットが別のユーザにリンクされている場合でも、そのユーザがあなたのリポジトリにアクセスできるわけではありません。 コラボレーターとして追加した場合、またはリポジトリにアクセスできる Team に追加した場合にのみ、ユーザはあなたが所有するリポジトリにアクセスできます。

{% endtip %}

## コミットは別のユーザにリンクされています

コミットが別のユーザにリンクされている場合は、ローカルの Git 設定のメールアドレスが {% data variables.product.product_name %} 上のそのユーザのアカウントに接続されていることを意味します。 この場合、ローカルの Git 設定 {% ifversion ghae %} のメールを {% data variables.product.product_name %} のアカウントに関連付けられたアドレスに変更して、今後のコミットをリンクすることができます。 古いコミットはリンクされません。 For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} account to link future commits to your account.

1. ローカル Git 設定でメールアドレスを変更するには、「<[コミットメールアドレスを設定する](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」の手順に従います。 複数のマシンで作業している場合は、各マシンでこの設定を変更する必要があります。
2. 「[GitHub アカウントにメールアドレスを追加する](/articles/adding-an-email-address-to-your-github-account)」の手順に従って、ステップ 2 のメールアドレスをアカウント設定に追加します。{% endif %}

これ以降のコミットは、あなたのアカウントにリンクされます。

## コミットはどのユーザにもリンクされていません

コミットがどのユーザにもリンクされていない場合、コミット作者の名前はユーザプロファイルへのリンクとして表示されません。

これらのコミットに使用されたメールアドレスを確認し、コミットをアカウントに接続するには、次の手順に従います:

1. コミットメッセージリンクをクリックしてコミットに移動します。 ![コミットメッセージリンク](/assets/images/help/commits/commit-msg-link.png)
2. コミットがリンクされていない理由に関するメッセージを読むには、ユーザ名の右側にある青い {% octicon "question" aria-label="Question mark" %} の上にカーソルを合わせます。 ![コミットホバーメッセージ](/assets/images/help/commits/commit-hover-msg.png)

  - **未確認の作者 (メールアドレスあり)** このメッセージにメールアドレスが表示される場合、コミットの作成に使用したアドレスは {% data variables.product.product_name %} のアカウントに接続されていません。 {% ifversion not ghae %}To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.{% endif %}
  - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% ifversion not ghae %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. 古いコミットはリンクされません。{% endif %}
  - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% ifversion not ghae %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. 古いコミットはリンクされません。{% endif %}

{% ifversion ghae %}
ローカルの Git 設定のメールをアカウントに関連付けられたアドレスに変更して、今後のコミットをリンクすることができます。 古いコミットはリンクされません。 詳しい情報については、「[コミットメールアドレスを設定する](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)」を参照してください。
{% endif %}

{% warning %}

ローカル Git 設定に一般的なメールアドレス、または他のユーザのアカウントにすでに添付されているメールアドレスが含まれている場合、以前のコミットはアカウントにリンクされません。 Git では以前のコミットに使用したメールアドレスを変更することができますが、特に共有リポジトリではこれを推奨しません。

{% endwarning %}

## 参考リンク

* "[コミットの検索](/search-github/searching-on-github/searching-commits)"
