---
title: 既存の SSH キーの確認
intro: SSH キーを生成する前に、SSH キーがすでに存在するかどうかを確認できます。
redirect_from:
  - /articles/checking-for-existing-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 既存の SSH キーが存在するかを確認するため、以下のように `ls -al ~/.ssh` と入力します:

  ```shell
  $ ls -al ~/.ssh
  # .ssh ディレクトリ内のファイルを一覧表示する（存在する場合）
  ```
3. ディレクトリの一覧から、公開 SSH キーをすでに持っているか確認します。 デフォルトでは、公開鍵のファイル名は以下のいずれかです:
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
    - *id_dsa.pub*{% endif %}

公開鍵と秘密鍵のペアが存在しないか、既存の鍵を {% data variables.product.product_name %}への接続に利用したくない場合、[新しい SSH キーを作成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)します。

一覧に既存の公開鍵と秘密鍵のペア (*id_rsa.pub* と *id_rsa* など) があり、それを {% data variables.product.product_name %} への接続に利用したい場合、[SSH キーを ssh-agent に追加](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent)します。

{% tip %}

**ヒント:** *~/.ssh* が存在しないというエラーが返ってきた場合も、ご心配なく。 [新しい SSH キーを作成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)する際に、それも作成されます。

{% endtip %}
