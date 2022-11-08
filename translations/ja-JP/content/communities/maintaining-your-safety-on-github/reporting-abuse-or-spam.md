---
title: 悪用あるいはスパムをレポートする
intro: コミュニティガイドラインと規約に違反する行動やコンテンツをレポートできます。
redirect_from:
  - /articles/reporting-abuse-or-spam
  - /github/building-a-strong-community/reporting-abuse-or-spam
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 288ba817cfeaeec0d695157fb6310ba6ab6a662f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090274'
---
オーナー、コラボレータ、以前のコントリビューター、および書き込みアクセスを持つユーザは、Issue やプルリクエスト、および Issue、プルリクエスト、コミットについてのコメントをレポートできます。 {% data variables.product.prodname_marketplace %} のアプリケーションについては誰でもレポートできます。

## 不正利用やスパムのレポートについて

{% data reusables.policies.github-community-guidelines-and-terms %}

{% data variables.contact.report_abuse %} または {% data variables.contact.report_content %} を通じて、{% data variables.product.prodname_dotcom %} のコミュニティガイドラインまたは利用規約に違反したユーザについてレポートすることができます。 Issue やプルリクエスト、または Issue、プルリクエスト、コミットについてのコメントをレポートすることもできます。

レポートされたコンテンツがパブリックリポジトリに対して有効になっている場合、リポジトリメンテナにコンテンツを直接レポートすることもできます。

インドのユーザーは、[こちら](https://support.github.com/contact/india-grievance-officer)から GitHub のインド担当 Grievance オフィサーにお問い合わせください。

## ユーザをレポートする

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. **[Report abuse]\(不正使用の報告\)** をクリックします。
  ![ユーザーのブロックあるいは不正使用の報告の選択肢があるモーダル ボックス](/assets/images/help/profile/profile-report-abuse.png)
4. ユーザーの行動について {% data variables.contact.contact_support %} に伝える連絡フォームに入力し、 **[Send request]\(リクエストの送信\)** をクリックします。

## Issue やプルリクエストをレポートする

1. レポートする Issue またはプルリクエストに移動します。
2. issue または pull request の右上にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックし、 **[Report content]\(内容の報告\)** をクリックします。
  ![コメントを報告するボタン](/assets/images/help/repository/menu-report-issue-or-pr.png) {% data reusables.community.report-content %}

## コメントをレポートする

1. レポートするコメントに移動します。
2. コメントの右上にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックし、 **[Report content]\(内容の報告\)** をクリックします。
![コメントを報告すオプションがある Kebab メニュー](/assets/images/help/repository/menu-report-comment.png) {% data reusables.community.report-content %}

## {% data variables.product.prodname_marketplace %} のアプリケーションをレポートする

{% data reusables.marketplace.visit-marketplace %}
2. レポートするアプリケーションに移動します。
3. 左サイドバーにある [Developer links]\(開発者リンク\) セクションの {% octicon "report" aria-label="The report symbol" %} **[Report abuse]\(不正使用の報告\)** をクリックします。
  ![{% data variables.product.prodname_marketplace %} のアプリを報告するボタン](/assets/images/help/marketplace/marketplace-report-app.png)
4. アプリケーションの動作について {% data variables.contact.contact_support %} に伝える連絡フォームに入力し、 **[Send request]\(リクエストの送信\)** をクリックします。

## テンプレート選択画面での連絡先リンクの不正利用をレポートする

1. レポートする連絡先リンクを含むリポジトリに移動します。
2. リポジトリ名の下にある {% octicon "issue-opened" aria-label="The issues icon" %} **[Issues]\(issue\)** をクリックします。
3. テンプレート選択画面の右下にある **[Report abuse]\(不正使用の報告\)** をクリックします。
  ![不正使用を報告するリンク](/assets/images/help/repository/template-chooser-report-abuse.png)
4. 連絡先リンクの動作について {% data variables.contact.contact_support %} に伝える連絡フォームに入力し、 **[Send request]\(リクエストの送信\)** をクリックします。

## 参考資料

- 「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」
- 「[テンプレートを使用して便利な issue や pull request を推進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」
- 「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」
- 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」{% endif %}
- 「[ファイルの変更を追跡する](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)」
