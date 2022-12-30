---
title: コミットメールアドレスを設定する
intro: '{% data variables.product.product_location %} とコンピューター上でコミットを作成するために使用するメール アドレスを設定できます。'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
ms.openlocfilehash: 76b0af2a1afa776281434c36cf33fa0e082c2c56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146338950'
---
## コミットメールアドレスについて

{% data variables.product.prodname_dotcom %} では、コミット メール アドレスを使用して、{% data variables.product.product_location %} のアカウントにコミットを関連付けます。 コマンドラインからプッシュするコミットや、WebベースのGit操作に関連づけられるメールアドレスは選択できます。

Web ベースの Git 操作の場合、コミット メール アドレスを {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} に設定できます。 コマンドラインからプッシュするコミットについては、Git のコミットメールアドレスを設定できます。

{% ifversion fpt or ghec %}コミット メール アドレスを変更する前に行ったコミットは、以前のメール アドレスに関連付けられたままとなります。{% else %}{% data variables.product.product_name %} のコミット メール アドレスを変更すると、新しいメール アドレスは、今後の Web ベースの Git 操作のすべてで既定で表示されます。 コミットメールアドレスを変更する前のコミットは、変更前のメールアドレスに関連付けられたままとなります。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}個人のメール アドレスを非公開にする場合は、コミット メール アドレスとして {% data variables.product.product_name %} の `noreply` メール アドレスを使用できます。 コマンド ラインからプッシュするコミットに `noreply` メール アドレスを使用するには、Git でコミット メール アドレスを設定するときにそのメール アドレスを使用します。 Web ベースの Git 操作に `noreply` アドレスを使用するには、GitHub にコミット メール アドレスを設定し、 **[Keep my email address private]\(メール アドレスを非公開にする\)** を選択します。

また、個人のメールアドレスを公開するコマンドラインからプッシュされたコミットをブロックするよう選択することもできます。 詳細については、「[個人のメールを公開するコマンド ラインのプッシュのブロック](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)」を参照してください。{% endif %}

コミットがユーザーに帰属し、コントリビューション グラフに表示されるようにするには、{% data variables.product.product_location %} のアカウントに接続されているメール アドレス{% ifversion fpt or ghec %}、またはメール設定で指定された `noreply` メール アドレス{% endif %}を使用します。 {% ifversion not ghae %}詳細については、「[{% data variables.product.prodname_dotcom %} アカウントへのメール アドレスの追加](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)」を参照してください。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注:** 2017 年 7 月 18 日 _以降に_ {% data variables.product.product_location %} にアカウントを作成した場合、{% data variables.product.product_name %} の `noreply` メール アドレスは 7 桁の ID 番号、ユーザー名は <code><em>ID+username</em>@users.noreply.github.com</code> の形式になります。 2017 年 7 月 18 日 _以前に_ {% data variables.product.product_location %} でアカウントを作成した場合、{% data variables.product.product_name %} の `noreply` メール アドレスは <code><em>username</em>@users.noreply.github.com</code> になります。 {% data variables.product.product_name %} の ID ベースの `noreply` メール アドレスを取得するには、メール設定で **[Keep my email address private]\(メール アドレスを非公開にする\)** を選択 (または選択解除して再選択) します。

{% endnote %}

{% data variables.product.product_name %} の `noreply` メール アドレスを使用してコミットを行い、[ユーザー名を変更](/articles/changing-your-github-username)した場合、それらのコミットは {% data variables.product.product_location %} のアカウントに関連付けられません。 {% data variables.product.product_name %} の ID ベースの `noreply` アドレスを使用している場合、これは適用されません。 詳細については、「[{% data variables.product.prodname_dotcom %} ユーザー名の変更](/articles/changing-your-github-username)」を参照してください。{% endif %}

## {% data variables.product.prodname_dotcom %} のコミットメールアドレスを設定する

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Git のコミットメールアドレスを設定する

`git config` コマンドを使用して、Git コミットに関連付けるメール アドレスを変更できます。 設定した新しいメール アドレスは、コマンド ラインから {% data variables.product.product_location %} にプッシュする今後すべてのコミットで表示されます。 コミットメールアドレスを変更する前のコミットは、まだ過去のメールアドレスに関連付けられます。

### コンピュータにあるすべてのリポジトリ用にメールアドレスを設定する

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### 単一リポジトリ用にメールアドレスを設定する

{% data variables.product.product_name %} は、ローカル Git 構成で設定されたメール アドレスを使用して、コマンド ラインからプッシュされたコミットを {% data variables.product.product_location %} のアカウントに関連付けます。

単一のリポジトリで作成するコミットに関連するメールアドレスを変更できます。 これにより、この 1 つのリポジトリのグローバル Git 構成設定がオーバーライドされますが、他のリポジトリには影響しません。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 現在のワーキングディレクトリを Git コミットと関連付けたメールアドレスを設定したいローカルリポジトリに変更します。
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
