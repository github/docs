---
title: SSH キーをレビューする
intro: '資格情報をセキュリティで保護するには、SSH キーを定期的に監査し、キーをデプロイし、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントにアクセスする承認されたアプリケーションを確認する必要があります。'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 4f15ea8fd56994de4d9b30c21e6afb081e20a327
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878400'
---
許可されていない (あるいは侵害された可能性のある) SSH キーを削除することで、攻撃者が以後自分のリポジトリにアクセスすることを防止できます。 有効な既存の SSH キーを承認することもできます。

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 認識していないもの、または古いものについては、 **[Delete]\(削除\)** をクリックします。 残しておきたい有効な SSH キーがある場合は、 **[Approve]\(承認\)** をクリックします。
    ![SSH キー リスト](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注:** Git 操作が失敗したために SSH キーを監査している場合、[SSH キー監査エラー](/articles/error-we-re-doing-an-ssh-key-audit)の原因となった未検証のキーは、SSH キーの一覧で強調表示されます。

  {% endtip %}

4. ターミナルを開きます。

{% data reusables.command_line.start_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上の SSH キーは、お使いのコンピューター上の同じキーと一致している *はず* です。

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 認識していないもの、または古いものについては、 **[Delete]\(削除\)** をクリックします。 残しておきたい有効な SSH キーがある場合は、 **[Approve]\(承認\)** をクリックします。
    ![SSH キー リスト](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注:** Git 操作が失敗したために SSH キーを監査している場合、[SSH キー監査エラー](/articles/error-we-re-doing-an-ssh-key-audit)の原因となった未検証のキーは、SSH キーの一覧で強調表示されます。

  {% endtip %}

4. Git Bash を開きます。 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上の SSH キーは、お使いのコンピューター上の同じキーと一致している *はず* です。

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. [SSH Settings] ページで、自分のアカウントに関連付けられている SSH キーを書き留めます。 認識していないもの、または古いものについては、 **[Delete]\(削除\)** をクリックします。 残しておきたい有効な SSH キーがある場合は、 **[Approve]\(承認\)** をクリックします。
    ![SSH キー リスト](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注:** Git 操作が失敗したために SSH キーを監査している場合、[SSH キー監査エラー](/articles/error-we-re-doing-an-ssh-key-audit)の原因となった未検証のキーは、SSH キーの一覧で強調表示されます。

  {% endtip %}

4. ターミナルを開きます。

{% data reusables.command_line.start_ssh_agent %}

6. 自分の公開鍵のフィンガープリントを見つけてメモします。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上の SSH キーは、お使いのコンピューター上の同じキーと一致している *はず* です。

{% endlinux %}

{% warning %}

**警告**: 見慣れない SSH キーが {% data variables.product.product_name %} で見つかった場合は、すぐにそれを削除してください。さらに支援が必要な場合は {% data variables.contact.contact_support %} にお問い合わせください。 確認できない公開鍵は、潜在的なセキュリティ上の問題を示している可能性があります。

{% endwarning %}
