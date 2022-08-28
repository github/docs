トークンを入手したなら、HTTPS経由でGitの操作をする際にパスワードの代わりにそのトークンを入力できます。

たとえば、コマンドラインでは以下のように入力できます。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repo</em>.git
Username: <code>your_username</code>
Password: <em>your_token</em>
```
