---
title: リモートリポジトリについて
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
  - /github/using-git/about-remote-repositories
intro: GitHub のコラボレーティブな開発へのアプローチは、ローカルリポジトリからコミットを公開して、他者が見たり、フェッチしたり、更新したりできるようにすることに依存しています。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
リモート URL は、「コードがここに保存されています」ということを表現する Git のしゃれた方法です。 その URL は、GitHub 上のあなたのリポジトリや、他のユーザーのフォーク、さらにはまったく異なるサーバーだったりします。

プッシュできるのは、2 種類の URL アドレスに対してのみです。

* `https://{% data variables.command_line.backticks %}/user/repo.git` のような HTTPS URL
* `git@{% data variables.command_line.backticks %}:user/repo.git` のような SSH URL

Git はリモート URL に名前を関連付けます。デフォルトのリモートは通常 `origin` と呼ばれます。

これらの URL の違いに関する情報については、[どちらのリモート URL を使うべきか？](/articles/which-remote-url-should-i-use)を参照してください。

### リモートの作成

`git remote add` コマンドを使用してリモート URL に名前を関連付けることができます。 たとえば、コマンドラインに以下のように入力できます:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

これで `origin` という名前が `REMOTE_URL` に関連付けられます。

`git remote set-url` を使えば、[リモートの URL を変更](/articles/changing-a-remote-s-url)できます。
