1. SSH 公開鍵をクリップボードにコピーします。

  SSH 公開鍵のファイル名がサンプルコードと異なる場合は、現在の設定に一致するようにファイル名を変更してください。 キーをコピーする際には、改行や空白を追加しないでください。
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pubファイルの内容をクリップボードにコピー
  ```

  {% tip %}

  **ヒント:** `pbcopy` がうまく動作しない場合は、隠れフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}
{% endmac %}
{% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pubファイルの内容をクリップボードにコピー
  ```

  {% tip %}

  **ヒント:** `clip` がうまく動作しない場合は、隠しフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}
{% endwindows %}
{% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # 続いてターミナルに表示されたid_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # ファイルの内容を選択してコピー
  ```

  {% tip %}

  **参考:** あるいは隠しフォルダの`.ssh`を見つけて、好きなテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}
{% endlinux %}
