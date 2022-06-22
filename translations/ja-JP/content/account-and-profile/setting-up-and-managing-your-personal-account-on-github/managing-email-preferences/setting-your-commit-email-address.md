---
title: コミットメールアドレスを設定する
intro: '{% data variables.product.product_location %} とコンピュータ上でコミットを作成するために使用するメールアドレスを設定できます。'
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
---

## コミットメールアドレスについて

{% data variables.product.prodname_dotcom %} uses your commit email address to associate commits with your account on {% data variables.product.product_location %}. コマンドラインからプッシュするコミットや、WebベースのGit操作に関連づけられるメールアドレスは選択できます。

For web-based Git operations, you can set your commit email address on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. コマンドラインからプッシュするコミットについては、Git のコミットメールアドレスを設定できます。

{% ifversion fpt or ghec %}コミットメールアドレスの変更前に行ったコミットは、変更前のメールアドレスに関連づけられたままとなります。{% else %}{% data variables.product.product_name %} 上のコミットメールアドレスを変更した後、新規メールアドレスは、今後のウェブベースの Git オペレーションのすべてで表示されます。 コミットメールアドレスを変更する前のコミットは、変更前のメールアドレスに関連付けられたままとなります。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**参考**:{% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}If you'd like to keep your personal email address private, you can use a `noreply` email address from {% data variables.product.product_name %} as your commit email address. コマンドラインからプッシュするコミットに対して`noreply`メールアドレスを使いたい場合には、そのメールアドレスを Git のコミットメールアドレスの設定で使用してください。 Web ベースの Git 操作に `noreply` アドレスを使いたい場合には、GitHub でコミットメールアドレスの設定を行い、[**Keep my email address private**] を選択してください。

また、個人のメールアドレスを公開するコマンドラインからプッシュされたコミットをブロックするよう選択することもできます。 詳細は「[個人のメールを公開するコマンドラインプッシュのブロック](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)」を参照してください。{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% ifversion not ghae %}詳しい情報については、「[{% data variables.product.prodname_dotcom %} アカウントにメールアドレスを追加する](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)」を参照してください。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Note:** If you created your account on {% data variables.product.product_location %} _after_ July 18, 2017, your `noreply` email address for {% data variables.product.product_name %} is a seven-digit ID number and your username in the form of <code><em>ID+username</em>@users.noreply.github.com</code>. If you created your account on {% data variables.product.product_location %} _prior to_ July 18, 2017, your `noreply` email address from {% data variables.product.product_name %} is <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based `noreply` email address for {% data variables.product.product_name %} by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

If you use your `noreply` email address for {% data variables.product.product_name %} to make commits and then [change your username](/articles/changing-your-github-username), those commits will not be associated with your account on {% data variables.product.product_location %}. This does not apply if you're using the ID-based `noreply` address from {% data variables.product.product_name %}. 詳細は「[{% data variables.product.prodname_dotcom %} ユーザ名を変更する](/articles/changing-your-github-username)」を参照してください。{% endif %}

## {% data variables.product.prodname_dotcom %} のコミットメールアドレスを設定する

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Git のコミットメールアドレスを設定する

`git config`コマンドを使用して、Git コミットに関連付けられているメールアドレスを変更できます。 設定した新しいメールアドレスは、コマンドラインから {% data variables.product.product_location %} にプッシュするこれからのコミットに表示されます。 コミットメールアドレスを変更する前のコミットは、まだ過去のメールアドレスに関連付けられます。

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

{% data variables.product.product_name %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on {% data variables.product.product_location %}.

単一のリポジトリで作成するコミットに関連するメールアドレスを変更できます。 This will override your global Git configuration settings in this one repository, but will not affect any other repositories.

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
