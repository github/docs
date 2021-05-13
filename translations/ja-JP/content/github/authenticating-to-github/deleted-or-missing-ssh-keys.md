---
title: SSH キーの削除または紛失
intro: 'セキュリティ上の理由から、過去 1 年間使用されていない SSH キーを {% data variables.product.prodname_dotcom %}は自動的に削除します。'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
versions:
  free-pro-team: '*'
topics:
  - SSH
---

{% data variables.product.prodname_dotcom %}は使われていない SSH キーを自動的に削除し、アカウントを安全に保ちます。たとえば退職者が出たときやコンピューターを紛失したときです。

アカウントのセキュリティログを見ると、SSH キーが 1 年間使われていないか確認できます。 詳細は「[セキュリティ ログをレビューする](/articles/reviewing-your-security-log/)」を参照してください。

使われていない SSH キーが削除されると、新しい SSH キーを生成して、アカウントに関連付ける必要があります。 詳細は「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)」および「[GitHub アカウントに新しい SSH キーを追加する](/articles/adding-a-new-ssh-key-to-your-github-account/)」を参照してください。
