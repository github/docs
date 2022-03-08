---
title: ユーザアカウントのリポジトリの所有権の継続性を管理する
intro: 自分が管理できない場合にユーザ所有のリポジトリを管理してもらえるように、他のユーザを招待することができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
---

## 後継者について

自分が管理できない場合にユーザ所有のリポジトリを管理してもらえるように、他の {% data variables.product.company_short %} を後継者として招待することをお勧めします。 後継者に指定されたユーザは、次の操作が可能になります。

- パブリックリポジトリをアーカイブする。
- パブリックリポジトリを他のユーザ所有のアカウントに委譲する。
- Organization でリポジトリが作成されるときにパブリックリポジトリを委譲する。

後継者があなたのアカウントにログインすることはできません。

指名された後継者は、死亡証明書の提出から 7 日間経ってから、または死亡記事が掲載されてから 21 日間経ってから、あなたのパブリックリポジトリを管理できるようになります。 For more information, see "[{% data variables.product.company_short %} Deceased User Policy](/free-pro-team@latest/github/site-policy/github-deceased-user-policy)."

後継者としてリポジトリ管理のアクセス権をリクエストするには、[GitHub サポート](https://support.github.com/contact?tags=docs-accounts)にお問い合わせください。

## 後継者を招待する
後継者として招待する人は、{% data variables.product.company_short %} アカウントを所有している必要があります。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. [Successor settings] で後継者を招待し、ユーザ名、フルネーム、メールアドレスを入力して、名前が必要されたらそれをクリックします。 ![後継者招待の検索フィールド](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. [**Add successor**] をクリックします。
{% data reusables.user-settings.sudo-mode-popup %}
5. 招待したユーザーは、後継者になることに合意するまで "Pending" としてリストされます。 ![後継者招待が Pending](/assets/images/help/settings/settings-pending-successor.png)
