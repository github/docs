---
title: コミットが間違ったユーザにリンクされているのはなぜですか？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} は、コミットヘッダのメールアドレスを使用して、コミットを GitHub ユーザにリンクします。 コミットが別のユーザにリンクされている場合、あるいはどのユーザにもリンクされていない場合は、ローカルの Git 設定を変更するか、アカウントのメール設定にメールアドレスを追加するか、あるいはその両方を行う必要があります。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% tip %}

**メモ**: コミットが別のユーザにリンクされている場合でも、そのユーザがあなたのリポジトリにアクセスできるわけではありません。 コラボレーターとして追加した場合、またはリポジトリにアクセスできる Team に追加した場合にのみ、ユーザはあなたが所有するリポジトリにアクセスできます。

{% endtip %}

### コミットは別のユーザにリンクされています

コミットが別のユーザにリンクされている場合は、あなたのローカル Git 設定のメールアドレスを、そのユーザが自分の {% data variables.product.product_name %} アカウントに追加したことを意味します。 この場合、ローカル Git 設定でメールアドレスを変更し、アカウントに将来のコミットをリンクするために、新しいメールアドレスを {% data variables.product.product_name %} アカウントに追加すれば解決します。

1. ローカル Git 設定でメールアドレスを変更するには、「<[Git にコミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」の手順に従ってください。 複数のマシンで作業している場合は、各マシンでこの設定を変更する必要があります。
2. 「[GitHub アカウントにメールアドレスを追加する](/articles/adding-an-email-address-to-your-github-account)」の手順に従って、ステップ 2 のメールアドレスをアカウント設定に追加します。

これ以降のコミットは、あなたのアカウントにリンクされます。

### コミットはどのユーザにもリンクされていません

コミットがどのユーザにもリンクされていない場合、コミット作者の名前はユーザプロファイルへのリンクとして表示されません。

これらのコミットに使用されたメールアドレスを確認し、コミットをアカウントに接続するには、次の手順に従います:

1. コミットメッセージリンクをクリックしてコミットに移動します。 ![コミットメッセージリンク](/assets/images/help/commits/commit-msg-link.png)
2. コミットがリンクされていない理由に関するメッセージを読むには、ユーザ名の右側にある青い {% octicon "question" aria-label="Question mark" %} の上にカーソルを合わせます。 ![コミットホバーメッセージ](/assets/images/help/commits/commit-hover-msg.png)

  - **未確認の作者 (メールアドレス付き)**: このメッセージにメールアドレスが表示されている場合、そのアドレスはアカウント設定に追加されていません。 コミットをリンクするには、[メールアドレスを GitHub メール設定に追加します](/articles/adding-an-email-address-to-your-github-account)。 メールアドレスに Gravatar が関連付けられている場合、Gravatar はデフォルトの灰色の Octocat ではなく、ユーザ名の横に表示されます。
  - **未確認の作者 (メールアドレスなし)**: メールアドレスなしでこのメッセージが表示された場合は、メール設定に追加できない一般的なメールアドレスを使用したことを意味します。 将来のコミットにリンクするために、[Git でコミットメールアドレスを設定し](/articles/setting-your-commit-email-address)、次に、[新しいメールアドレスを GitHub メール設定に追加する](/articles/adding-an-email-address-to-your-github-account)必要があります。 古いコミットはリンクされません。
  - **無効なメールアドレス** これは、ローカル Git 設定のメールアドレスが空白か、メールアドレスとしてフォーマットされていないことを意味します。 将来のコミットにリンクするために、[Git でコミットメールアドレスを設定し](/articles/setting-your-commit-email-address)、次に、[新しいメールアドレスを GitHub メール設定に追加する](/articles/adding-an-email-address-to-your-github-account)必要があります。 古いコミットはリンクされません。

{% warning %}

ローカル Git 設定に一般的なメールアドレス、または他のユーザのアカウントにすでに添付されているメールアドレスが含まれている場合、以前のコミットはアカウントにリンクされません。 Git では以前のコミットに使用したメールアドレスを変更することができますが、特に共有リポジトリではこれを推奨しません。

{% endwarning %}

### 参考リンク

* "[コミットの検索](/articles/searching-commits)"
