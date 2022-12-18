---
title: ユーザを Organization に変換する
redirect_from:
- /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
- /articles/explaining-the-account-transformation-warning
- /articles/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: User into an organization
ms.openlocfilehash: 0c167e3e389230e6ac2dccb9f1f2f3dc67791bd0
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068794"
---
{% warning %}

**警告**: ユーザーを Organization に変換する前に、以下の点にご注意ください:

 - 変換した個人アカウントには、サインイン **できなくなります**。
 - 変換した個人アカウントが所有していた gist を作成や変更することが **できなくなります**。
 - Organization からユーザーに変換 **することはできません**。
 - SSH キー、OAuth トークン、ジョブ プロフィール、リアクション、および関連するユーザー情報は、Organization に移譲 **されません**。 これは、変換された個人アカウントのみに該当し、個人アカウントのコラボレーターには該当しません。
 - 変換した個人アカウントによるコミットは、アカウントに **リンクされなくなります**。 コミット自体はそのまま **残ります**。
 - 変換された個人アカウントで作成されたプライベート リポジトリのフォークはすべて削除されます。

{% endwarning %}

## <a name="keep-your-personal-account-and-create-a-new-organization-manually"></a>個人アカウントを保ち、新しい組織を手動で作成する

組織の名前を、個人アカウントが使用しているものと同じにしたい場合や、個人のアカウント情報をそのまま残しておきたい場合は、個人アカウントを組織に変換するのではなく、新しい組織を作成して、そこへリポジトリを移譲する必要があります。

1. 現在の個人アカウント名を個人的に使いたい場合は、[個人アカウント名を変更し](/articles/changing-your-github-username)、新しくて素敵な名前を付けましょう。
2. 個人アカウントの元の名前で[新しい組織を作成](/articles/creating-a-new-organization-from-scratch)します。
3. 新しい組織アカウントに[リポジトリを転送します](/articles/transferring-a-repository)。

## <a name="convert-your-personal-account-into-an-organization-automatically"></a>個人アカウントを Organization に自動で変換する

個人アカウントを組織に直接変換することも可能です。 アカウントを変換すると、以下のことが起こります:
 - リポジトリはそのまま保持されます。他のアカウントに手動で移譲する必要はありません。
 - コラボレーターを、Team に自動的に招待します。コラボレーターの権限は、以前のものがそのまま引き継がれます。{% ifversion fpt or ghec %}- {% data variables.product.prodname_pro %} の個人アカウントでは、いつでも支払い情報の再入力、支払いサイクルの調整、二重支払いをすることなく、自動的に[有料 {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) に移行できます。{% endif %}

1. GitHub にサインインし、変換後に Organization やリポジトリにアクセスするために使う、新しい個人アカウントを作成します。
2.  変換する個人アカウントが参加している[組織は、そのままにしておきます](/articles/removing-yourself-from-an-organization)。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. [アカウントの変換] で、 **[<username> を組織に変換]** をクリックします。
    ![Organization 変換ボタン](/assets/images/help/settings/convert-to-organization.png)
6. [Account Transformation Warning] ダイアログボックスで、変換に関する情報を読み、変換を確定します。 このボックスに記載されている情報は、この記事で上述したものと同じです。
    ![変換に関する警告](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. [Transform your user into an organization] ページの、[Choose an organization owner] で、前のセクションで作成したセカンダリの個人アカウントか、Organization の管理を信頼して任せられる他のユーザを選択します。
    ![Organization オーナーの追加ページ](/assets/images/help/organizations/organization-add-owner.png)
8. 入力を求められた場合、Organization の新しいプランを選択し、支払い情報を入力します。
9. **[Organization の作成]** をクリックします。
10. ステップ 1 で作成した、新しい個人アカウントにサインインし、コンテキスト スイッチャーを使って新しい組織にアクセスします。

{% tip %}

**ヒント**: ユーザー アカウントを組織に変換した場合、アカウントに属していたリポジトリのコラボレーターは、新しい組織に *外部コラボレーター* として追加されます。 希望する場合は、*外部コラボレーター* を招待して新しい Organization のメンバーにすることができます。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)」を参照してください。

{% endtip %}

## <a name="further-reading"></a>参考資料
- 「[Team の設定](/articles/setting-up-teams)」 {% ifversion fpt or ghec %}- [Organization にユーザーを招待する](/articles/inviting-users-to-join-your-organization){% endif %}
- [Organization へのアクセス](/articles/accessing-an-organization)
