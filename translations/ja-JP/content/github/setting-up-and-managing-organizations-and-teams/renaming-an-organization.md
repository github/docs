---
title: Organization の名前を変更する
intro: 'プロジェクトや企業の名前が変更になった場合、Organization の名前を更新して一致させることができます。'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name/
  - /articles/renaming-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% tip %}

**ヒント:** Organization の名前を変更できるのは Organization オーナーだけです。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

### Organization の名前を変更するとどうなりますか？

Organization の名前を変更したら、古い Organization 名は他の個人が使用できるようになります。 Organization の名前を変更すると、古い Organization 名の下にあるリポジトリへの参照のほとんどが、自動で新しい名前に変わります。 ただし、プロフィールへのリンクによっては、自動的にリダイレクトされません。

#### 自動で行われる変更

- {% data variables.product.prodname_dotcom %} ではリポジトリへの参照を自動でリダイレクトします。  Organization に既存の**リポジトリ**への Web リンクは引き続き機能します。 変更を開始してから完了するまでに数分かかることがあります。
- ローカルリポジトリのプッシュは、古いリモートトラッキング URL へは更新なしでそのまま行えます。 ただし、Organization の名前を変更したら、既存のすべてのリモートリポジトリ URL を更新するよう推奨します。 変更後の古い Organization 名は他のいずれの個人も使用できるようになるため、新しい Organization オーナーがリポジトリへのリダイレクトエントリをオーバーライドすることがありえます。 For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."
- 以前の Git コミットも、Organization 内のユーザへ正しく関連付けられます。

#### 自動ではない変更

Organization の名前を変更したら、次のようになります:
- 以前の Organization プロフィールページ (`https://{% data variables.command_line.backticks %}/previousorgname` など) にリンクすると、404 エラーが返されます。 他のサイト{% if currentVersion == "free-pro-team@latest" %} (LinkedIn や Twitter のプロフィールなど) {% endif %}からの Organization へのリンクを更新するよう推奨します。
- 古い Organization 名を使用する API リクエストでは、404 エラーが返されます。 API リクエストにある古い Organization 名を更新するようおすすめします。
- 古い Organization 名を使用する Team へは、自動での [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) リダイレクトはありません。

### Organization の名前を変更する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 設定ページの末尾近くにある [Rename organization] の下の [**Rename Organization**] をクリックします。 ![[Rename organization] ボタン](/assets/images/help/settings/settings-rename-organization.png)

### 参考リンク

* 「[コミットが間違ったユーザにリンクされているのはなぜですか？](/articles/why-are-my-commits-linked-to-the-wrong-user)」
