
1. 公開鍵と秘密鍵をどちらも持っているGPGキーの長い形式のリストを表示するには、 `gpg --list-secret-keys --keyid-format=long`コマンドを使ってください。 コミットやタグに署名するには秘密鍵が必要です。
  ```shell
  $ gpg --list-secret-keys --keyid-format=long
```
  {% note %}

  **ノート:**LinuxのGPG環境の中には、既存のキーのリストを表示させるために`gpg2 --list-keys --keyid-format LONG`としなければならないものもあります。 この場合、`git config --global gpg.program gpg2`と実行してGitが`gpg2`を使うように設定する必要もあります。

  {% endnote %}
