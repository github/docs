---
title: ユーザを Organization に変換する
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
intro: ユーザアカウントは、Organization に変換できます。 これにより、Organization に属するリポジトリに対して、より細かく権限を設定できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - アカウント
---

{% warning %}

**警告**: ユーザを Organization に変換する前に、以下の点についてご注意ください:

 - 変換したユーザアカウントには、サインイン**できなくなります**。
 - 変換したユーザアカウントが所有していた Gist を作成や変更することは**できなくなります**。
 - Organization をユーザに変換して元に戻すことは**できません**。
 - SSH キー、OAuth トークン、ジョブプロフィール、リアクション、および関連するユーザ情報は、Organization に移譲**されません**。 これは、変換されたユーザアカウントのみに該当し、ユーザアカウントのコラボレーターには該当しません。
 - 変換したユーザアカウントによるコミットは、アカウントに**リンクされなくなります**。 コミットそのものは、**そのまま残ります**。

{% endwarning %}

### 個人ユーザアカウントを保ち、新しい Organization を手動で作成する

Organization の名前を、あなたの個人アカウントが使用しているものと同じにしたい場合や、個人のユーザアカウント情報をそのまま残しておきたい場合は、ユーザアカウントを Organization に変換するのではなく、新しい Organization を作成して、そこへリポジトリを移譲する必要があります。

1. 現在のユーザアカウント名を個人的に使いたい場合は、[個人ユーザアカウント名を変更](/articles/changing-your-github-username)し、何か新しくて素敵な名前を付けましょう。
2. 元の個人アカウント名で、[新しい Organization を作成](/articles/creating-a-new-organization-from-scratch)します。
3. 新しい Organization アカウントに[リポジトリを移譲](/articles/transferring-a-repository)します。

### 個人アカウントを Organization に自動で変換する

あなたの個人ユーザアカウントを Organization に直接変換することも可能です。 アカウントを変換すると、以下のことが起こります:
 - リポジトリはそのまま保持されます。他のアカウントに手動で移譲する必要はありません。
 - コラボレーターを、Team に自動的に招待します。コラボレーターの権限は、以前のものがそのまま引き継がれます。
 {% if currentVersion == "free-pro-team@latest" %}- {% data variables.product.prodname_pro %} のユーザアカウントでは、支払い情報の入力や支払いサイクルの調整も必要なく、また二重の支払いもすることなく、自動的に[有料 {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) に移行できます。{% endif %}

1. GitHub にサインインし、変換後に Organization やリポジトリにアクセスするために使う、新しい個人アカウントを作成します。
2.  変換するアカウントで参加している、[すべての Organization から自分を削除](/articles/removing-yourself-from-an-organization)してください。
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. [Transform account] で、[**Turn <username> into an organization**] をクリックします。 ![Organization 変換ボタン](/assets/images/help/settings/convert-to-organization.png)
6. [Account Transformation Warning] ダイアログボックスで、変換に関する情報を読み、変換を確定します。 このボックスに記載されている情報は、この記事で上述したものと同じです。 ![変換に関する警告](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. [Transform your user into an organization] ページの、[Choose an organization owner] で、前のセクションで作成したセカンダリの個人アカウントか、Organization の管理を信頼して任せられる他のユーザを選択します。 ![Organization オーナーの追加ページ](/assets/images/help/organizations/organization-add-owner.png)
8. 入力を求められた場合、Organization の新しいプランを選択し、支払い情報を入力します。
9. [**Create Organization**] をクリックします。
10. ステップ 1 で作成した、新しいユーザアカウントにサインインし、コンテキストスイッチャーを使って新しい Organization にアクセスします。

{% tip %}

**ヒント**: ユーザアカウントを Organization に変換した場合、アカウントに属していたリポジトリのコラボレーターは、新しい Organization に*外部コラボレーター*として追加されます。 希望する場合は、*外部コラボレーター*を新しい Organization のメンバーに招待できます。 詳しい情報については「[Organization の権限レベル](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

{% endtip %}

### 参考リンク
- [Team の設定](/articles/setting-up-teams)
{% if currentVersion == "free-pro-team@latest" %}- 「[ユーザを Organization に招待する](/articles/inviting-users-to-join-your-organization)」{% endif %}
- [Organization にアクセスする](/articles/accessing-an-organization)
