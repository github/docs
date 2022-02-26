トークンを入手したなら、HTTPS経由でGitの操作をする際にパスワードの代わりにそのトークンを入力できます。

たとえば、コマンドラインでは以下のように入力できます。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repo</em>.git
Username: <em>your_username</em>
Password: <em>your_token</em>
```
