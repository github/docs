1. SSH 公開鍵をクリップボードにコピーします。

  SSH 公開鍵のファイル名がサンプルコードと異なる場合は、現在の設定に一致するようにファイル名を変更してください。 キーをコピーする際には、改行や空白を追加しないでください。
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **ヒント:** `pbcopy` がうまく動作しない場合は、隠れフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}
{% endmac %}
{% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **ヒント:** `clip` がうまく動作しない場合は、隠しフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}
{% endwindows %}
{% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tip:** Alternatively, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}
{% endlinux %}
