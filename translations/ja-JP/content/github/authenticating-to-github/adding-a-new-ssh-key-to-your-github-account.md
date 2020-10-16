---
title: GitHub アカウントへの新しい SSH キーの追加
intro: '{% data variables.product.product_name %} アカウントが新しい (あるいは既存の) SSH キーを使うように設定するには、そのキーを {% data variables.product.product_name %} アカウントに追加する必要もあります。'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

新しい SSH キーを {% data variables.product.product_name %} アカウントに追加する前に、以下のことを済ませておかなければなりません:
* [既存の SSH キーの確認](/articles/checking-for-existing-ssh-keys)
* [新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

新しい SSH キーを {% data variables.product.product_name %}アカウントに追加したら、任意のローカルリポジトリで SSH を使うように再設定できます。 詳しい情報については[リモート URL の HTTPS から SSH への切り替え](/articles/changing-a-remote-s-url/#switching-remote-urls-from-https-to-ssh)を参照してください。

{% data reusables.ssh.dsa-support %}

{% mac %}

1. SSH キーをクリップボードにコピーしてください。

  使用する SSH キーの名前がサンプルのコードとは違っている場合は、現在の設定に合わせてファイル名を修正してください。 キーをコピーする際には、改行や空白を追加しないでください。

  ```shell
  $ pbcopy &lt; ~/.ssh/id_rsa.pub
  # id_rsa.pub ファイルの内容をクリップボードにコピーする
  ```

  {% tip %}

  **ヒント:** `pbcopy` がうまく動作しない場合は、隠れフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. [**New SSH key**] または [**Add SSH key**] をクリックします。 ![SSH キーボタン](/assets/images/help/settings/ssh-add-ssh-key.png)
5. [Title] フィールドで、新しいキーを説明するラベルを追加します。 たとえば個人の Mac を使っている場合、このキーを "Personal MacBook Air" などと呼ぶことが考えられます。
6. キーを [Key] フィールドに貼り付けます。 ![キーフィールド](/assets/images/help/settings/ssh-key-paste.png)
7. **[Add SSH key]** をクリックしてください。 ![キーの追加ボタン](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endmac %}

{% windows %}

1. SSH キーをクリップボードにコピーしてください。

  使用する SSH キーの名前がサンプルのコードとは違っている場合は、現在の設定に合わせてファイル名を修正してください。 キーをコピーする際には、改行や空白を追加しないでください。

  ```shell
  $ clip &lt; ~/.ssh/id_rsa.pub
  # id_rsa.pub ファルの内容をクリップボードにコピーする
  ```

  {% tip %}

  **ヒント:** `clip` がうまく動作しない場合は、隠しフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. [**New SSH key**] または [**Add SSH key**] をクリックします。 ![SSH キーボタン](/assets/images/help/settings/ssh-add-ssh-key.png)
5. [Title] フィールドで、新しいキーを説明するラベルを追加します。 たとえば個人の Mac を使っている場合、このキーを "Personal MacBook Air" などと呼ぶことが考えられます。
6. キーを [Key] フィールドに貼り付けます。 ![キーフィールド](/assets/images/help/settings/ssh-key-paste.png)
7. **[Add SSH key]** をクリックしてください。 ![キーの追加ボタン](/assets/images/help/settings/ssh-add-key.png)
8. {% data variables.product.product_name %} パスワードの確認を促された場合は、確認します。 ![sudo モードダイアログ](/assets/images/help/settings/sudo_mode_popup.png)

{% endwindows %}

{% linux %}

1. SSH キーをクリップボードにコピーしてください。

  使用する SSH キーの名前がサンプルのコードとは違っている場合は、現在の設定に合わせてファイル名を修正してください。 キーをコピーする際には、改行や空白を追加しないでください。

  ```shell
  $ sudo apt-get install xclip
  # xclip をダウンロードしてインストールします。 If you don't have `apt-get`, you might need to use another installer (like `yum`)

  $ xclip -selection clipboard &lt; ~/.ssh/id_rsa.pub
  # Copies the contents of the id_rsa.pub file to your clipboard
  ```
  {% tip %}

  **ヒント:** `xclip` がうまく動作しない場合は、隠しフォルダ `.ssh` にアクセスし、使い慣れたテキストエディタでこのファイルを開き、クリップボードにコピーしてください。

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. [**New SSH key**] または [**Add SSH key**] をクリックします。 ![SSH キーボタン](/assets/images/help/settings/ssh-add-ssh-key.png)
5. [Title] フィールドで、新しいキーを説明するラベルを追加します。 たとえば個人の Mac を使っている場合、このキーを "Personal MacBook Air" などと呼ぶことが考えられます。
6. キーを [Key] フィールドに貼り付けます。 ![キーフィールド](/assets/images/help/settings/ssh-key-paste.png)
7. **[Add SSH key]** をクリックしてください。 ![キーの追加ボタン](/assets/images/help/settings/ssh-add-key.png)
8. {% data variables.product.product_name %} パスワードの確認を促された場合は、確認します。 ![sudo モードダイアログ](/assets/images/help/settings/sudo_mode_popup.png)

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- [SAML シングルサインオンで使うためにSSHキーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)
{% endif %}
