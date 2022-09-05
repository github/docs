1. GitでSSH署名キーを設定するには、クリップボードの内容を使いたいキーに置き換えて以下のテキストを貼り付けてください。 キーは空白を含むので、引用符で囲まなければなりません。
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```