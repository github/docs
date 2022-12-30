---
title: ユーザアカウントのリポジトリの所有権の継続性を管理する
intro: You can invite someone to manage your user owned repositories if you are not able to.
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
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090094"
---
## <a name="about-successors"></a>後継者について

自分が管理できない場合にユーザ所有のリポジトリを管理してもらえるように、他の {% data variables.product.company_short %} を後継者として招待することをお勧めします。 後継者に指定されたユーザは、次の操作が可能になります。

- パブリックリポジトリをアーカイブする。
- パブリックリポジトリを他のユーザ所有のアカウントに委譲する。
- Organization でリポジトリが作成されるときにパブリックリポジトリを委譲する。

後継者があなたのアカウントにログインすることはできません。

指名された後継者は、死亡証明書の提出から 7 日間経ってから、または死亡記事が掲載されてから 21 日間経ってから、あなたのパブリックリポジトリを管理できるようになります。 詳細については、「[お亡くなりになったユーザーに関する {% data variables.product.company_short %} のポリシー](/free-pro-team@latest/github/site-policy/github-deceased-user-policy)」を参照してください。

後継者としてリポジトリを管理するためのアクセスを要求するには、[GitHub Support](https://support.github.com/contact?tags=docs-accounts) にお問い合わせください。

## <a name="inviting-a-successor"></a>後継者を招待する
後継者として招待する人は、{% data variables.product.company_short %} アカウントを所有している必要があります。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. [Successor settings] で後継者を招待し、ユーザ名、フルネーム、メールアドレスを入力して、名前が必要されたらそれをクリックします。
   ![後継者招待の検索フィールド](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. **[後継者の追加]** をクリックします。
{% data reusables.user-settings.sudo-mode-popup %}
5. 招待したユーザーは、後継者になることに合意するまで "Pending" としてリストされます。
   ![保留中の後継者の招待](/assets/images/help/settings/settings-pending-successor.png)
