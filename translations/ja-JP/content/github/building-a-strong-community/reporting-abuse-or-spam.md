---
title: 悪用あるいはスパムをレポートする
intro: コミュニティガイドラインと規約に違反する行動やコンテンツをレポートできます。
redirect_from:
  - /articles/reporting-abuse-or-spam
versions:
  free-pro-team: '*'
topics:
  - コミュニティ
---

オーナー、コラボレータ、以前のコントリビューター、および書き込みアクセスを持つユーザは、Issue やプルリクエスト、および Issue、プルリクエスト、コミットについてのコメントをレポートできます。 {% data variables.product.prodname_marketplace %} のアプリケーションについては誰でもレポートできます。

### 不正利用やスパムのレポートについて

{% data reusables.policies.github-community-guidelines-and-terms %}

{% data variables.contact.report_abuse %} または {% data variables.contact.report_content %} を通じて、{% data variables.product.prodname_dotcom %} のコミュニティガイドラインまたは利用規約に違反したユーザについてレポートすることができます。 Issue やプルリクエスト、または Issue、プルリクエスト、コミットについてのコメントをレポートすることもできます。

レポートされたコンテンツがパブリックリポジトリに対して有効になっている場合、リポジトリメンテナにコンテンツを直接レポートすることもできます。

### ユーザをレポートする

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. **Report abuse** をクリックします。 ![ユーザのブロックあるいは悪用のレポートの選択肢を持つモーダルボックス](/assets/images/help/profile/profile-report-abuse.png)
4. ユーザの行動について {% data variables.contact.contact_support %} に伝える連絡フォームに記入し、[**Send request**] をクリックします。

### Issue やプルリクエストをレポートする

1. レポートする Issue またはプルリクエストに移動します。
2. Issue またはプルリクエストの右上隅にある
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックし、[**Report content**] をクリックします。
  ![コメントをレポートするボタン](/assets/images/help/repository/menu-report-issue-or-pr.png)
{% data reusables.community.report-content %}

### コメントをレポートする

1. レポートするコメントに移動します。
2. コメントの右上隅にある
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} をクリックし、[**Report content**] をクリックします。
![コメントをレポートするオプションを含むケバブメニュー](/assets/images/help/repository/menu-report-comment.png)
{% data reusables.community.report-content %}

### {% data variables.product.prodname_marketplace %} のアプリケーションをレポートする

{% data reusables.marketplace.visit-marketplace %}
2. レポートするアプリケーションに移動します。
3. 左サイドバーで [Developer links] セクションの下の [{% octicon "report" aria-label="The report symbol" %}**Report abuse**] をクリックします。 ![{% data variables.product.prodname_marketplace %}のアプリケーションをレポートするボタン](/assets/images/help/marketplace/marketplace-report-app.png)
4. アプリケーションの動作について {% data variables.contact.contact_support %} に伝える連絡フォームに記入し、[**Send request**] をクリックします。

### テンプレート選択画面での連絡先リンクの不正利用をレポートする

1. レポートする連絡先リンクを含むリポジトリに移動します。
2. リポジトリ名の下で {% octicon "issue-opened" aria-label="The issues icon" %} **Issues** をクリックします。
3. テンプレート選択画面の右下隅で、[**Report abuse**] をクリックします。 ![不正利用をレポートするリンク](/assets/images/help/repository/template-chooser-report-abuse.png)
4. リンクの動作について {% data variables.contact.contact_support %} に伝える連絡フォームに記入し、[**Send request**] をクリックします。

### 参考リンク

- [健全なコントリビューションを促すプロジェクトをセットアップする](/articles/setting-up-your-project-for-healthy-contributions)
- 「[テンプレートを使用して便利な Issue およびプルリクエストを推進する](/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests)」
- 「[混乱を生むコメントを管理する](/articles/managing-disruptive-comments)」{% if currentVersion == "free-pro-team@latest" %}
- 「[ {% data variables.product.prodname_dotcom %} での安全性を維持する](/github/building-a-strong-community/maintaining-your-safety-on-github)」
- 「[リポジトリでのインタラクションを制限する](/github/building-a-strong-community/limiting-interactions-in-your-repository)」{% endif %}
- 「[コメントの変更を追跡する](/articles/tracking-changes-in-a-comment)」
