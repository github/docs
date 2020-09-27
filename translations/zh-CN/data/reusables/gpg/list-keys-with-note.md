
1. 使用 `gpg --list-secret-key--keyid-form LONG` 命令列出您拥有其公钥和私钥的 GPG 密钥。 签名提交或标记需要私钥。
  ```shell
  $ gpg --list-secret-keys --keyid-format LONG
```
  {% note %}

  **注：**Linux上的一些 GPG 安装可能需要使用 `gpg2 --list-keyid-form LONG` 查看您现有密钥的列表。 在这种情况下，您还需要运行 `git config --global gpg.program gpg2` 来配置 Git 使用 `git gpg2`。

  {% endnote %}
