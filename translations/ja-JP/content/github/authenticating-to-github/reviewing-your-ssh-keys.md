---
title: SSH キーをレビューする
intro: '認証情報を安全に保つには、SSH キーを定期的に監査し、キーをデプロイし、自分の {% data variables.product.product_name %} アカウントにアクセスする許可されたアプリケーションをレビューしてください。'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

許可されていない (あるいは侵害された可能性のある) SSH キーを削除することで、攻撃者が以後自分のリポジトリにアクセスすることを防止できます。 有効な既存の SSH キーを承認することもできます。

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 覚えていないか古くなっている場合は、[**Delete**] をクリックします。 残しておきたい有効な SSH キーがある場合は、[**Approve**] をクリックします。 ![SSH キーのリスト](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **メモ:** Git 操作が失敗したために SSH キーを監査している場合は、 [SSH キー監査エラー](/articles/error-we-re-doing-an-ssh-key-audit)の原因となった未検証のキーが SSH キーのリストで強調表示されます。

  {% endtip %}

4. ターミナルを開きます。

5. {% data reusables.command_line.start_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7 以前を使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

7. {% data variables.product.product_name %} での SSH キーは、お使いのコンピュータでの同じキーと一致していなければなりません 。

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 覚えていないか古くなっている場合は、[Delete] をクリックします。 残しておきたい有効な SSH キーがある場合は、[Approve] をクリックします。
    ![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注釈:** Git 操作が失敗したために SSH キーを監査している場合は、[SSH キー監査エラー] (/articles/error-we-re-doing-an-ssh-key-audit) の原因となった未検証のキーが SSH キーのリストで強調表示されます。

  {% endtip %}

4. Git Bash を開きます。 {% data variables.product.prodname_desktop %} に収納されている Git Shell を使用している場合は、Git Shell を開き、ステップ 6 に進みます。

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7以前を使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

7. {% data variables.product.product_name %} での SSH キーは、お使いのコンピュータでの同じキーと一致していなければなりません 。

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 覚えていないか古くなっている場合は、[Delete] をクリックします。 残しておきたい有効な SSH キーがある場合は、[Approve] をクリックします。
    ![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注釈:** Git 操作が失敗したために SSH キーを監査している場合は、[SSH キー監査エラー] (/articles/error-we-re-doing-an-ssh-key-audit) の原因となった未検証のキーが SSH キーのリストで強調表示されます。

  {% endtip %}

4. ターミナルを開きます。

5. {% data reusables.command_line.start_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7以前を使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
```shell $ ssh-add -l -E sha256
> 2048 *SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ* /Users/*USERNAME*/.ssh/id_rsa (RSA) ```{% endif %}

7. {% data variables.product.product_name %} での SSH キーは、お使いのコンピュータでの同じキーと一致して*いなければなりません* 。

{% endlinux %}

{% warning %}

**警告**: 見慣れない SSH キーが {% data variables.product.product_name %} で見つかった場合は、すぐにそれを削除し、さらに支援が必要な場合は {% data variables.contact.contact_support %} に問い合わせてください。 確認できない公開鍵は、潜在的なセキュリティ上の問題を示している可能性があります。

{% endwarning %}
