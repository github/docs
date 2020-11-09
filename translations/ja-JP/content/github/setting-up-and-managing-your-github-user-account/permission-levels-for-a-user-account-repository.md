---
title: ユーザーアカウントのリポジトリ権限レベル
intro: 'ユーザーアカウントが所有するリポジトリは、*リポジトリオーナー*と*コラボレーター*という 2 つの権限レベルを持ちます。'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**ヒント:** ユーザーアカウントが所有しているリポジトリに対して、より精細な読み取り/書き込みアクセス権が必要な場合には、リポジトリを Organization に移譲することを検討してください。 詳細は「[リポジトリを移譲する](/articles/transferring-a-repository)」を参照してください。

{% endtip %}

#### ユーザーアカウントが所有しているリポジトリに対するオーナーアクセス権

リポジトリオーナーは、リポジトリを完全に制御することができます。 リポジトリコラボレータによって許可されるすべての権限に加えて、リポジトリオーナーは次の操作が可能です:

- {% if currentVersion == "free-pro-team@latest" %}[Invite collaborators](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Add collaborators](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Change the visibility of the repository (from [public to private](/articles/making-a-public-repository-private), or from [private to public](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [リポジトリでのインタラクションを制限する](/articles/limiting-interactions-with-your-repository){% endif %}
- 保護されたブランチで、レビューの承認がなくてもプルリクエストをマージする
- [リポジトリを削除する](/articles/deleting-a-repository)
- [Manage a repository's topics](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- Manage security and analysis settings. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Enable the dependency graph](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) for a private repository{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- パッケージを削除する。 詳細は「[>パッケージを削除する](/github/managing-packages-with-github-packages/deleting-a-package)」を参照してください。{% endif %}
- リポジトリソーシャルカードを作成および編集する。 詳細は「[リポジトリのソーシャルメディア向けプレビューをカスタマイズする](/articles/customizing-your-repositorys-social-media-preview)」を参照してください。
- リポジトリをテンプレートにする。 For more information, see "[Creating a template repository](/articles/creating-a-template-repository)."{% if currentVersion != "github-ae@latest" %}
- Receive [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a repository.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- リポジトリで {% data variables.product.prodname_dependabot_alerts %} を閉じます。 詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。
- [プライベートリポジトリのデータ使用を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [リポジトリのコードオーナーを定義する](/articles/about-code-owners)
- [Archive repositories](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- セキュリティアドバイザリを作成する。 詳しい情報については「[{% data variables.product.prodname_security_advisories %}について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
- スポンサーボタンを表示する。 詳細は「[リポジトリにスポンサーボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください。{% endif %}

ユーザアカウントが所有するリポジトリの**オーナーは 1 人**だけです。この権限を他のユーザアカウントと共有することはできません。 リポジトリの所有権を他のユーザに委譲するには、「[リポジトリを委譲する方法](/articles/how-to-transfer-a-repository)」を参照してください。

#### ユーザーアカウントが所有しているリポジトリに対するコラボレーターアクセス権

{% note %}

**メモ:** プライベートリポジトリでは、リポジトリオーナーはコラボレーターに書き込みアクセスしか付与できません。 コラボレーターが、ユーザアカウントによって所有されているリポジトリに対して「読み取りのみ」アクセス権を持つことはできません。

{% endnote %}

個人リポジトリでのコラボレーターは、次の操作が可能です:

- リポジトリに対してプッシュする (書き込む)、プル (読み取る)、フォーク (コピーする)
- ラベルとマイルストーンを作成、適用、削除する
- Issue をオープン、再オープン、割り当てする
- コミット、プルリクエスト、Issue に対するコメントを編集および削除する
- Issue またはプルリクエストを重複としてマークする。 詳細は「[重複した Issue やプルリクエストについて](/articles/about-duplicate-issues-and-pull-requests)」を参照してください。
- Open, merge and close pull requests
- 提案された変更をプルリクエストに適用する。 詳細は「[プルリクエストでのフィードバックを取り込む](/articles/incorporating-feedback-in-your-pull-request)」を参照してください。
- Send pull requests from forks of the repository{% if currentVersion == "free-pro-team@latest" %}
- パッケージを公開、表示、インストールする。 詳細は、「[パッケージの公開と管理](/github/managing-packages-with-github-packages/publishing-and-managing-packages)」を参照してください。{% endif %}
- ウィキを作成および編集する
- リリースの作成と編集。 詳細は「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository)」を参照してください。
- リポジトリでコラボレーターである自身を削除する
- マージ可能性に影響するプルリクエストレビューをサブミットする
- リポジトリに指定されたコードオーナーとして行動する。 詳細は「[コードオーナーについて](/articles/about-code-owners)」を参照してください。
- 会話をロックする。 For more information, see "[Locking conversations](/articles/locking-conversations)."{% if currentVersion == "free-pro-team@latest" %}
- 乱用コンテンツを {% data variables.contact.contact_support %} にレポートする 詳細は「[乱用やスパムをレポートする](/articles/reporting-abuse-or-spam)」を参照してください。{% endif %}
- 他のリポジトリへ Issue を移譲する。 詳細は「[他のリポジトリへ Issue を移譲する](/articles/transferring-an-issue-to-another-repository)」を参照してください。

### 参考リンク

- [個人リポジトリへのコラボレータの招待](/articles/inviting-collaborators-to-a-personal-repository)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
