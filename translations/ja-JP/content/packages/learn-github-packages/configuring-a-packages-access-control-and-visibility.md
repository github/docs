---
title: パッケージのアクセス制御と可視性の設定
intro: 'コンテナイメージに読み取り、書き込み、管理アクセス権限があるユーザと、{% data variables.product.prodname_dotcom %} 上のコンテナイメージの可視性を選択します。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

詳細な権限を持つパッケージは、個人ユーザもしくはOrganizationアカウントをスコープとします。 パッケージのアクセス制御と可視性は、パッケージに接続された（あるいはリンクされた）リポジトリは別個に変更できます。

現在のところ、{% data variables.product.prodname_container_registry %}だけがコンテナイメージパッケージに関する詳細な権限を提供しています。

リポジトリをスコープとするパッケージの権限や、PATに関するパッケージ関連のスコープ、Actionsのワークフローの権限の管理についての詳しい情報は、「[GitHub Packagesの権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」を参照してください。

### コンテナイメージの可視性とアクセス権限

{% data reusables.package_registry.visibility-and-access-permissions %}

### 個人アカウントにコンテナイメージへのアクセス権限を設定する

ユーザアカウントが所有するコンテナイメージに対する管理者権限がある場合には、他のユーザに読み取り、書き込み、管理者ロールを割り当てることができます。 これらの権限ロールに関する詳しい情報については、[コンテナイメージの可視性とアクセス権限](#visibility-and-access-permissions-for-container-images)」を参照してください。

パッケージがプライベートもしくはインターナルで、Organizationによって所有されているなら、あなたにできることは他のOrganizationメンバーやTeamにアクセス権を与えることだけです。

{% data reusables.package_registry.package-settings-from-user-level %}
1. パッケージ設定ページで [**Invite teams or people**] をクリックして、アクセス権を付与するユーザの名前、ユーザ名、またはメールアドレスを入力します。 Team には、ユーザアカウントが所持するコンテナイメージのアクセス権限を与えることができません。 ![コンテナアクセス権の招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。 ![コンテナアクセス権のオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザには自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

### Organization にコンテナイメージへのアクセス権限を設定する

Organization が所有するコンテナイメージに対する管理者権限がある場合には、他のユーザや Team に読み取り、書き込み、管理者ロールを割り当てることができます。 これらの権限ロールに関する詳しい情報については、[コンテナイメージの可視性とアクセス権限](#visibility-and-access-permissions-for-container-images)」を参照してください。

パッケージがプライベートもしくはインターナルで、Organizationによって所有されているなら、あなたにできることは他のOrganizationメンバーやTeamにアクセス権を与えることだけです。

Organization イメージコンテナに対しては、Organization の管理者がパッケージを有効にしないと、可視性をパブリックに設定できません。 詳しい情報については「[コンテナレジストリでの改善されたコンテナサポートの有効化](/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
1. パッケージ設定ページで [**Invite teams or people**] をクリックして、アクセス権を付与するユーザの名前、ユーザ名、またはメールアドレスを入力します。 また、Organization から Team 名を入力して、全 Team メンバーにアクセスを付与することもできます。 ![コンテナアクセス権の招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。 ![コンテナアクセス権のオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザや Team には自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

### リポジトリからコンテナイメージへのアクセスの継承

{% data variables.product.prodname_actions %}ワークフローを通じたパッケージ管理を単純化するには、デフォルトでリポジトリのアクセス権をコンテナイメージが継承できるようにすることができます。

パッケージのワークフローが保存されているリポジトリのアクセス権限を継承する場合、リポジトリの権限を通じてパッケージへのアクセスを調整できます。

リポジトリが同期されると、パッケージの詳細なアクセス設定にはアクセスできなくなります。 詳細なパッケージのアクセス設定を通じてパッケージの権限をカスタマイズするには、まず同期されたリポジトリを取り除かなければなりません。

{% data reusables.package_registry.package-settings-from-org-level %}
2. "Repository source（リポジトリソース）"の下で、**Inherit access from repository (recommended)（アクセスをリポジトリから継承（推奨））**を選択してください。 ![リポジトリアクセスの継承チェックボックス](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### パッケージへのワークフローのアクセスの確保

{% data variables.product.prodname_actions %}ワークフローがパッケージに確実にアクセスできるようにするためには、ワークフローが保存されているリポジトリに対する明示的なアクセスを与えなければなりません。

指定するリポジトリは、パッケージのソースコードが保存されているリポジトリである必要はありません。 パッケージに対して複数のリポジトリワークフローにアクセスを与えることができます。

{% note %}

**ノート:** **Actionsのアクセス**メニューオプションを通じてコンテナイメージをリポジトリと同期することは、コンテナをリポジトリに接続することとは異なります。 リポジトリのコンテナへのリンクに関する詳しい情報については、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。

{% endnote %}

#### ユーザアカウントが所有するコンテナイメージへの{% data variables.product.prodname_actions %}のアクセス

{% data reusables.package_registry.package-settings-from-user-level %}
1. ひだりのサイドバーで**Actions access（Actionsのアクセス）**をクリックしてください。 ![左メニューの"Actionsアクセス"オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. ワークフローがコンテナパッケージに確実にアクセスできるようにするには、ワークフローが保存されるリポジトリを追加しなければなりません。 **Add repository（リポジトリの追加）**をクリックし、追加したいリポジトリを検索してください。 !["リポジトリの追加"ボタン](/assets/images/help/package-registry/add-repository-button.png)
3. "role（ロール）"ドロップダウンメニューを使い、コンテナイメージに対してリポジトリに持たせたいデフォルトのアクセスレベルを選択してください。 ![リポジトリに付与する権限アクセスレベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

コンテナイメージへのアクセスをさらにカスタマイズするには、「[個人アカウントのためのコンテナイメージへのアクセスの設定](#configuring-access-to-container-images-for-your-personal-account)」を参照してください。

#### Organizationが所有するコンテナイメージへの{% data variables.product.prodname_actions %}のアクセス

{% data reusables.package_registry.package-settings-from-org-level %}
1. ひだりのサイドバーで**Actions access（Actionsのアクセス）**をクリックしてください。 ![左メニューの"Actionsアクセス"オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. **Add repository（リポジトリの追加）**をクリックし、追加したいリポジトリを検索してください。 !["リポジトリの追加"ボタン](/assets/images/help/package-registry/add-repository-button.png)
3. "role（ロール）"ドロップダウンメニューを使い、リポジトリのメンバーからコンテナイメージに対して持たせたいデフォルトのアクセスレベルを選択してください。 外部のコラボレータは含まれません。 ![リポジトリに付与する権限アクセスレベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

コンテナイメージへのアクセスをさらにカスタマイズするには、「[Organizationのためのコンテナイメージへのアクセスの設定](#configuring-access-to-container-images-for-an-organization)」を参照してください。

### 個人アカウントにコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を変更することで、プライベートやパブリックなコンテナイメージのアクセス権限を変更できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

{% data reusables.package_registry.package-settings-from-user-level %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - あらゆる人がコンテナイメージを表示できるようにするには、[**Make public**] をクリックします。
    {% warning %}

    **警告:** いったんパッケージをパブリックにすると、プライベートに戻すことはできません。

    {% endwarning %}
    - 指定したユーザだけがコンテナイメージを表示できるようにするには、[**Make private**] をクリックします。 ![コンテナ可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)

### Organizationメンバーのためのコンテナ作成の可視性

デフォルトでは、Organizationのメンバーが公開できるコンテナの可視性を選択できます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. 左側にある [**Packages**] をクリックします。
6. "Container creation（コンテナ作成）"の下で、パブリック、プライベート、インターナルのコンテナイメージの作成を有効化するかを選択してください。
    - Organization のメンバーがパブリックのコンテナイメージを作成できるようにするには、[**Public**] をクリックします。
    - Organization のメンバーに、Organization のメンバーのみが表示できるプライベートコンテナイメージの作成ができるようにするには、[**Private**] をクリックします。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。
    - **{% data variables.product.prodname_ghe_cloud %}のみ:** Organizationのメンバーが他のOrganizationのメンバーにだけ見えるインターナルコンテナイメージを作成できるようにするには、**Internal（インターナル）**をクリックしてください。 ![Organizationのメンバーが公開するコンテナイメージの可視性オプション](/assets/images/help/package-registry/container-creation-org-settings.png)

### Organization にコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を使用して、コンテナイメージに対するさまざまなアクセスロールをユーザや Team に付与できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

Organization イメージコンテナに対しては、Organization の管理者がパブリックパッケージを有効にしないと、可視性をパブリックに設定できません。 詳しい情報については「[コンテナレジストリでの改善されたコンテナサポートの有効化](/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - あらゆる人がコンテナイメージを表示できるようにするには、[**Make public**] をクリックします。
    {% warning %}

    **警告:** いったんパッケージをパブリックにすると、プライベートに戻すことはできません。

    {% endwarning %}
    - 指定したユーザだけがコンテナイメージを表示できるようにするには、[**Make private**] をクリックします。 ![コンテナ可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)
