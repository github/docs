---
title: コミットが間違ったユーザにリンクされているのはなぜですか？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} は、コミットヘッダのメールアドレスを使用して、コミットを GitHub ユーザにリンクします。 If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings{% if currentVersion != "github-ae@latest" %}, add an email address to your account email settings, or do both{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% tip %}

**メモ**: コミットが別のユーザにリンクされている場合でも、そのユーザがあなたのリポジトリにアクセスできるわけではありません。 コラボレーターとして追加した場合、またはリポジトリにアクセスできる Team に追加した場合にのみ、ユーザはあなたが所有するリポジトリにアクセスできます。

{% endtip %}

### コミットは別のユーザにリンクされています

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on {% data variables.product.product_name %}. In this case, you can change the email in your local Git configuration settings{% if currentVersion == "github-ae@latest" %} to the address associated with your account on {% data variables.product.product_name %} to link your future commits. 古いコミットはリンクされません。 For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your {% data variables.product.product_name %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". 複数のマシンで作業している場合は、各マシンでこの設定を変更する必要があります。
2. Add the email address from step 2 to your account settings by following the steps in "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

これ以降のコミットは、あなたのアカウントにリンクされます。

### コミットはどのユーザにもリンクされていません

コミットがどのユーザにもリンクされていない場合、コミット作者の名前はユーザプロファイルへのリンクとして表示されません。

これらのコミットに使用されたメールアドレスを確認し、コミットをアカウントに接続するには、次の手順に従います:

1. コミットメッセージリンクをクリックしてコミットに移動します。 ![コミットメッセージリンク](/assets/images/help/commits/commit-msg-link.png)
2. コミットがリンクされていない理由に関するメッセージを読むには、ユーザ名の右側にある青い {% octicon "question" aria-label="Question mark" %} の上にカーソルを合わせます。 ![コミットホバーメッセージ](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account).{% endif %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
  - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}
  - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can change the email in your local Git configuration settings to the address associated with your account to link your future commits. 古いコミットはリンクされません。 For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."
{% endif %}

{% warning %}

ローカル Git 設定に一般的なメールアドレス、または他のユーザのアカウントにすでに添付されているメールアドレスが含まれている場合、以前のコミットはアカウントにリンクされません。 Git では以前のコミットに使用したメールアドレスを変更することができますが、特に共有リポジトリではこれを推奨しません。

{% endwarning %}

### 参考リンク

* "[コミットの検索](/articles/searching-commits)"
