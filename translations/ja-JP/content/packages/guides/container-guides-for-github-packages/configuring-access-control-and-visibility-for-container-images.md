---
title: コンテナイメージのアクセス制御と可視性を設定する
intro: 'コンテナイメージに読み取り、書き込み、管理アクセス権限があるユーザと、{% data variables.product.prodname_dotcom %} 上のコンテナイメージの可視性を選択します。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
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

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

Organization イメージコンテナに対しては、Organization の管理者がパッケージを有効にしないと、可視性をパブリックに設定できません。 詳しい情報については、「[改善されたコンテナサポートを有効化する](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
1. パッケージ設定ページで [**Invite teams or people**] をクリックして、アクセス権を付与するユーザの名前、ユーザ名、またはメールアドレスを入力します。 また、Organization から Team 名を入力して、全 Team メンバーにアクセスを付与することもできます。 ![コンテナアクセス権の招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。 ![コンテナアクセス権のオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザや Team には自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

### Inheriting access for a container image from a repository

To simplify package management through {% data variables.product.prodname_actions %} workflows, you can enable a container image to inherit the access permissions of a repository by default.

If you inherit the access permissions of the repository where your package's workflows are stored, then you can adjust access to your package through the repository's permissions.

Once a repository is synced, you can't access the package's granular access settings. To customize the package's permissions through the granular package access settings, you must remove the synced repository first.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Under "Repository source", select **Inherit access from repository (recommended)**. ![Inherit repo access checkbox](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### Ensuring workflow access to your package

To ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% note %}

**Note:** Syncing your container image with a repository through the **Actions access** menu option is different than connecting your container to a repository. For more information about linking a repository to your container, see "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

{% endnote %}

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like repository members to have to your container image. Outside collaborators will not be included. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization)."

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

### Container creation visibility for organization members

You can choose the visibility of containers that organization members can publish by default.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 左側にある [**Packages**] をクリックします。
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - Organization のメンバーがパブリックのコンテナイメージを作成できるようにするには、[**Public**] をクリックします。
    - Organization のメンバーに、Organization のメンバーのみが表示できるプライベートコンテナイメージの作成ができるようにするには、[**Private**] をクリックします。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

### Organization にコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を使用して、コンテナイメージに対するさまざまなアクセスロールをユーザや Team に付与できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

Organization イメージコンテナに対しては、Organization の管理者がパブリックパッケージを有効にしないと、可視性をパブリックに設定できません。 詳しい情報については、「[改善されたコンテナサポートを有効化する](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - あらゆる人がコンテナイメージを表示できるようにするには、[**Make public**] をクリックします。
    {% warning %}

    **警告:** いったんパッケージをパブリックにすると、プライベートに戻すことはできません。

    {% endwarning %}
    - 指定したユーザだけがコンテナイメージを表示できるようにするには、[**Make private**] をクリックします。 ![コンテナ可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)
