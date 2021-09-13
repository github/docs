---
title: コンテナイメージのアクセス制御と可視性を設定する
intro: 'コンテナイメージに読み取り、書き込み、管理アクセス権限があるユーザと、{% data variables.product.prodname_dotcom %} 上のコンテナイメージの可視性を選択します。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### 個人アカウントにコンテナイメージへのアクセス権限を設定する

ユーザアカウントが所有するコンテナイメージに対する管理者権限がある場合には、他のユーザに読み取り、書き込み、管理者ロールを割り当てることができます。 これらの権限ロールに関する詳しい情報については、[コンテナイメージの可視性とアクセス権限](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %}
1. パッケージ設定ページで [**Invite teams or people**] をクリックして、アクセス権を付与するユーザの名前、ユーザ名、またはメールアドレスを入力します。 Team には、ユーザアカウントが所持するコンテナイメージのアクセス権限を与えることができません。 ![コンテナアクセス権の招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。 ![コンテナアクセス権のオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザには自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

### Organization にコンテナイメージへのアクセス権限を設定する

Organization が所有するコンテナイメージに対する管理者権限がある場合には、他のユーザや Team に読み取り、書き込み、管理者ロールを割り当てることができます。 これらの権限ロールに関する詳しい情報については、[コンテナイメージの可視性とアクセス権限](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)」を参照してください。

パッケージが Organization の所有でかつプライベートである場合、他の Organization のメンバーまたは Team にのみアクセス権を付与できます。

Organization イメージコンテナに対しては、Organization の管理者がパッケージを有効にしないと、可視性をパブリックに設定できません。 For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% data reusables.package_registry.package-settings-from-org-level %}
1. パッケージ設定ページで [**Invite teams or people**] をクリックして、アクセス権を付与するユーザの名前、ユーザ名、またはメールアドレスを入力します。 また、Organization から Team 名を入力して、全 Team メンバーにアクセスを付与することもできます。 ![コンテナアクセス権の招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。 ![コンテナアクセス権のオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザや Team には自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

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

### Organization にコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を使用して、コンテナイメージに対するさまざまなアクセスロールをユーザや Team に付与できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

Organization イメージコンテナに対しては、Organization の管理者がパブリックパッケージを有効にしないと、可視性をパブリックに設定できません。 For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - あらゆる人がコンテナイメージを表示できるようにするには、[**Make public**] をクリックします。
    {% warning %}

    **警告:** いったんパッケージをパブリックにすると、プライベートに戻すことはできません。

    {% endwarning %}
    - 指定したユーザだけがコンテナイメージを表示できるようにするには、[**Make private**] をクリックします。 ![コンテナ可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)
