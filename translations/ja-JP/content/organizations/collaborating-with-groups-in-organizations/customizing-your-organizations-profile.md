---
title: Organizationのプロフィールのカスタマイズ
intro: Organization のプロフィールをカスタマイズすれば、Organization についての情報を共有できます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447931'
---
## Organization のプロフィール ページについて

{% ifversion org-profile-pin-private %} Organization の [概要] ページをカスタマイズして、パブリック ユーザーまたは Organization メンバー専用の README とピン留めされたリポジトリを表示できます。

![パブリック Organization プロフィール ページの画像](/assets/images/help/organizations/public_profile.png)

{% data variables.product.prodname_dotcom %} にサインインしている Organization のメンバーは、Organization のプロフィール ページにアクセスするときに、README とピン留めされたリポジトリの `member` または `public` のビューを選ぶことができます。 

![パブリック Organization プロファイル ページ ビュー コンテキスト スイッチャーの画像](/assets/images/help/organizations/profile_view_switcher_public.png)

ビューの既定値は、メンバー専用の README またはメンバー専用のピン留めされたリポジトリが存在する場合は `member`、それ以外の場合は `public` になります。

![メンバー専用の Organization プロフィール ページの画像](/assets/images/help/organizations/member_only_profile.png)

Organization のメンバーではないユーザーには、`public` ビューが表示されます。

### Pinned repositories

ユーザーが、重要なリポジトリ、またはよく使うリポジトリに簡単にアクセスできるようにします。パブリック ユーザーには最大 6 つのリポジトリ、Organization のメンバーには 6 つのリポジトリを選ぶことができます。 リポジトリを Organization のプロフィールにピン留めすると、プロフィール ページの [リポジトリ] セクションの上に [ピン留め] セクションが表示されます。

リポジトリをピン留めできるのは、Organization 所有者だけです。 詳しい情報については、「[Organization のプロフィールへのリポジトリのピン留め](#pinning-repositories-to-your-organizations-profile)」を参照してください。

### Organization プロフィールの README

{% endif %}

パブリック ユーザーと Organization のメンバーの両方に対して Organization プロフィールの README を作成すると、Organization との関わり方について、情報を共有できます。 {% data variables.product.prodname_dotcom %}は、OrganizationのプロフィールのREADMEをOrgaizationの”Overview（概要）"タブに表示します。

Organization プロフィールの README に含める情報を選ぶことができます。 以下は、役に立つかもしれない情報の例です。

- Organizationについて説明する"About"セクション
- Organization内で支援を受けるためのガイダンス

{% data variables.product.company_short %}フレーバーのMarkdownを使って、OrganizationのプロフィールのREADME内のテキストをフォーマットし、絵文字や画像、GIFを含めることができます。 詳細については、「[{% data variables.product.prodname_dotcom %} での書き込みと書式設定の概要](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)」を参照してください。

## パブリック Organization プロフィールの README の追加

1. Organization にパブリック `.github` リポジトリがまだない場合は、パブリック `.github` リポジトリを作成します。
2. Organization の `.github` リポジトリで、`profile` フォルダーに `README.md` ファイルを作成します。
3. `README.md` ファイルへの変更をコミットします。 `README.md` の内容は、Organization のパブリック プロフィールに表示されます。

   ![Organization のパブリック README の画像](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## メンバー専用の Organization プロフィールの README の追加

1. Organization にパブリック `.github-private` リポジトリがまだない場合は、`.github-private` という名前のプライベート リポジトリを作成します。 
2. Organization の `.github-private` リポジトリで、`profile` フォルダーに `README.md` ファイルを作成します。
3. `README.md` ファイルへの変更をコミットします。 `README.md` の内容は、Organization のプロフィールのメンバー ビューに表示されます。

   ![Organization のメンバー専用の README の画像](/assets/images/help/organizations/org_member_readme.png)

## Organization のプロフィールにリポジトリをピン留めする

よく使うリポジトリなど、特に使いたいリポジトリを Organization のプロフィール ページにピン留めできます。 Organization のプロフィールにピン留めするリポジトリを選ぶには、Organization 所有者である必要があります。

1. Organization のプロフィール ページに移動します。
2. ページの右側のサイドバーの {% octicon "eye" aria-label="The eye octicon" %} [表示方法] リンクで、ドロップダウン メニューから **[パブリック]** または **[メンバー]** プロフィール ビューを選びます。

   ![Organization の [プロフィール ビュー] ドロップダウンの画像](/assets/images/help/organizations/org_profile_view.png)

3. ピン留めされたリポジトリのセクションで、 **[ピンのカスタマイズ]** を選びます。

   ![[ピンのカスタマイズ] リンクの画像](/assets/images/help/organizations/customize_pins_link.png)

   - Organization のプロフィールにリポジトリをまだピン留めしていない場合は、代わりに、プロフィール ページの右側のサイドバーにある **[リポジトリのピン留め]** をクリックする必要があります。
   ![右側のサイドバーの [リポジトリのピン留め] リンクの画像](/assets/images/help/organizations/pin_repositories_link.png)

4. [ピン留めされたリポジトリの編集] ダイアログ ボックスで、表示するパブリック リポジトリ、{% ifversion not fpt %}プライベートまたは内部{% else %}またはプライベート{% endif %} リポジトリを最大 6 つ組み合わせて選びます。

   ![[ピン留めされたリポジトリ] ダイアログの画像](/assets/images/help/organizations/pinned_repo_dialog.png)

5. **[ピンの保存]** をクリックします。

{% endif %}
