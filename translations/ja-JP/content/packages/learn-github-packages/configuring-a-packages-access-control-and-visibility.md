---
title: パッケージのアクセス制御と可視性の設定
intro: 'コンテナイメージに読み取り、書き込み、管理アクセス権限があるユーザと、{% data variables.product.prodname_dotcom %} 上のコンテナイメージの可視性を選択します。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
ms.openlocfilehash: 8ef541f45fd6568db7c8510bc860d81d504494c5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193058'
---
{% data reusables.package_registry.container-registry-ghes-beta %}{% ifversion packages-registries-v2 %}

詳細な権限を持つパッケージは、個人ユーザもしくはOrganizationアカウントをスコープとします。 パッケージのアクセス制御と可視性は、パッケージに接続された（あるいはリンクされた）リポジトリは別個に変更できます。

一部のレジストリは、リポジトリがスコープ指定されたアクセス許可のみをサポートします。 そのようなレジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)」をご覧ください。

{% else %}パッケージは、パッケージを所有するリポジトリのアクセス許可と可視性を継承します。{% endif %}パッケージのアクセス許可、PAT のパッケージ関連のスコープ、またはアクション ワークフローのアクセス許可の管理について詳しくは、「[GitHub Packages のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages)」をご覧ください。

{% ifversion packages-registries-v2 %}

## コンテナイメージの可視性とアクセス権限

{% data reusables.package_registry.visibility-and-access-permissions %}

{% endif %}

## 個人アカウントにコンテナイメージへのアクセス権限を設定する

個人アカウントが所有するコンテナー イメージに対する管理者権限がある場合には、他のユーザーに読み取り、書き込み、管理者ロールを割り当てることができます。 これらのアクセス許可ロールの詳細については、「[コンテナー イメージの可視性とアクセス許可](#visibility-and-access-permissions-for-container-images)」を参照してください。

パッケージがプライベートもしくはインターナルで、Organizationによって所有されているなら、あなたにできることは他のOrganizationメンバーやTeamにアクセス権を与えることだけです。

{% data reusables.package_registry.package-settings-option %}
1. パッケージの設定ページで、 **[チームまたはユーザーの招待]** をクリックして、アクセス権を付与するユーザーの名前、ユーザー名、またはメール アドレスを入力します。 Team には、個人アカウントが所持するコンテナー イメージのアクセス許可を与えることができません。
  ![コンテナーへのアクセスの招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。
  ![コンテナーへのアクセスのオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザには自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

## Organization にコンテナイメージへのアクセス権限を設定する

Organization が所有するコンテナイメージに対する管理者権限がある場合には、他のユーザや Team に読み取り、書き込み、管理者ロールを割り当てることができます。 これらのアクセス許可ロールの詳細については、「[コンテナー イメージの可視性とアクセス許可](#visibility-and-access-permissions-for-container-images)」を参照してください。

パッケージがプライベートもしくはインターナルで、Organizationによって所有されているなら、あなたにできることは他のOrganizationメンバーやTeamにアクセス権を与えることだけです。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. パッケージの設定ページで、 **[チームまたはユーザーの招待]** をクリックして、アクセス権を付与するユーザーの名前、ユーザー名、またはメール アドレスを入力します。 また、Organization から Team 名を入力して、全 Team メンバーにアクセスを付与することもできます。
  ![コンテナーへのアクセスの招待ボタン](/assets/images/help/package-registry/container-access-invite.png)
1. ユーザ名または Team 名の隣にある [Role] のドロップダウンメニューで、付与する権限レベルを選択します。
  ![コンテナーへのアクセスのオプション](/assets/images/help/package-registry/container-access-control-options.png)

選択したユーザや Team には自動的にアクセス権限が与えられ、招待を承諾する必要はありません。

## リポジトリからコンテナイメージへのアクセスの継承

{% data variables.product.prodname_actions %}ワークフローを通じたパッケージ管理を単純化するには、デフォルトでリポジトリのアクセス権をコンテナイメージが継承できるようにすることができます。

パッケージのワークフローが保存されているリポジトリのアクセス権限を継承する場合、リポジトリの権限を通じてパッケージへのアクセスを調整できます。

リポジトリが同期されると、パッケージの詳細なアクセス設定にはアクセスできなくなります。 詳細なパッケージのアクセス設定を通じてパッケージの権限をカスタマイズするには、まず同期されたリポジトリを取り除かなければなりません。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
2. [リポジトリ ソース] で、 **[リポジトリからアクセスを継承する (推奨)]** を選択します。
  ![リポジトリ アクセスの継承のチェック ボックス](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## パッケージへのワークフローのアクセスの確保

{% data variables.product.prodname_actions %}ワークフローがパッケージに確実にアクセスできるようにするためには、ワークフローが保存されているリポジトリに対する明示的なアクセスを与えなければなりません。

指定するリポジトリは、パッケージのソースコードが保存されているリポジトリである必要はありません。 パッケージに対して複数のリポジトリワークフローにアクセスを与えることができます。

{% note %}

**注:** **[アクションのアクセス]** メニュー オプションを使用したコンテナー イメージとリポジトリとの同期は、コンテナーをリポジトリに接続する処理とは異なります。 リポジトリをコンテナーにリンクする方法の詳細については、「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。

{% endnote %}

### ユーザアカウントが所有するコンテナイメージへの{% data variables.product.prodname_actions %}のアクセス 

{% data reusables.package_registry.package-settings-option %}
1. 左側のサイドバーで、 **[アクションのアクセス]** をクリックします。
  ![左側のメニューの [アクションのアクセス] オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. ワークフローがコンテナパッケージに確実にアクセスできるようにするには、ワークフローが保存されるリポジトリを追加しなければなりません。 **[リポジトリの追加]** をクリックして、追加するリポジトリを検索します。
   ![[リポジトリの追加] ボタン](/assets/images/help/package-registry/add-repository-button.png)
3. "role（ロール）"ドロップダウンメニューを使い、コンテナイメージに対してリポジトリに持たせたいデフォルトのアクセスレベルを選択してください。
  ![リポジトリに付与するアクセス レベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

コンテナー イメージへのアクセスをさらにカスタマイズするには、「[個人用アカウントにコンテナー イメージへのアクセス権を設定する](#configuring-access-to-container-images-for-your-personal-account)」を参照してください。

### Organizationが所有するコンテナイメージへの{% data variables.product.prodname_actions %}のアクセス 

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. 左側のサイドバーで、 **[アクションのアクセス]** をクリックします。
  ![左側のメニューの [アクションのアクセス] オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. **[リポジトリの追加]** をクリックして、追加するリポジトリを検索します。
   ![[リポジトリの追加] ボタン](/assets/images/help/package-registry/add-repository-button.png)
3. "role（ロール）"ドロップダウンメニューを使い、リポジトリのメンバーからコンテナイメージに対して持たせたいデフォルトのアクセスレベルを選択してください。 外部のコラボレータは含まれません。
  ![リポジトリに付与するアクセス レベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

コンテナー イメージへのアクセスをさらにカスタマイズするには、「[組織のコンテナー イメージへのアクセス権を設定する](#configuring-access-to-container-images-for-an-organization)」を参照してください。

{% ifversion fpt or ghec %}
## パッケージへの {% data variables.product.prodname_github_codespaces %} アクセスの確保

既定では、 **[アクセスの継承]** オプションが選択された同じリポジトリ内で公開されたパッケージなど、詳細なアクセス許可をサポートするレジストリ内の特定のパッケージに codespace からシームレスにアクセスできます。 詳細なアクセス許可とシームレスな {% data variables.product.prodname_github_codespaces %} アクセスをサポートする {% data variables.product.prodname_registry %} レジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)」をご覧ください。

あるいは、codespaceがパッケージに確実にアクセスできるようにするには、codespaceが起動されたリポジトリへのアクセスを許可しなければなりません。

指定するリポジトリは、パッケージのソースコードが保存されているリポジトリである必要はありません。 codespeceには、複数のリポジトリでパッケージへのアクセスを付与できます。

リポジトリ内でcodespaceと共有したいパッケージを選択したら、そのリポジトリへのアクセスを付与できます。

1. 右側のサイドバーで、 **[パッケージの設定]** をクリックします。

   ![右側のメニューの [パッケージの設定] オプション](/assets/images/help/package-registry/package-settings.png)
   
2. [Codespaces アクセスの管理] で、 **[リポジトリの追加]** をクリックします。

   ![[リポジトリの追加] ボタン](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. 追加したいリポジトリを検索してください。

   ![[リポジトリの追加] ボタン](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. アクセスを許可したい追加のリポジトリについて、繰り返してください。

5. リポジトリのcodespaceがイメージへのアクセスを必要としなくなった場合は、アクセスを削除できます。

   ![[リポジトリの削除] ボタン](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## 個人アカウントにコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を変更することで、プライベートやパブリックなコンテナイメージのアクセス権限を変更できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

{% data reusables.package_registry.package-settings-option %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - コンテナー イメージをすべてのユーザーに表示するには、 **[公開する]** をクリックします。
    {% warning %}

    **警告:** 公開したパッケージを非公開に戻すことはできません。

    {% endwarning %}
    - コンテナー イメージをカスタム選択したユーザーに表示するには、 **[非公開にする]** をクリックします。
  ![コンテナーの可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)

## Organizationメンバーのためのコンテナ作成の可視性

デフォルトでは、Organizationのメンバーが公開できるコンテナの可視性を選択できます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 左側の **[パッケージ]** をクリックします。
6. "Container creation（コンテナ作成）"の下で、パブリック、プライベート、インターナルのコンテナイメージの作成を有効化するかを選択してください。
    - 組織のメンバーがパブリック コンテナー イメージを作成できるようにするには、 **[パブリック]** をクリックします。
    - 組織のメンバーが他の組織のメンバーにのみ表示されるプライベート コンテナー イメージを作成できるようにするには、 **[プライベート]** をクリックします。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。
    - 組織のメンバーがすべての組織のメンバーに表示される内部コンテナー イメージを作成できるようにするには、 **[内部]** をクリックします。 EnterpriseにそのOrganizationが所属している場合、コンテナイメージはEnterpriseのすべてのメンバーに見えるようになります。
    ![組織のメンバーが公開するコンテナー イメージの可視性のオプション](/assets/images/help/package-registry/container-creation-org-settings.png)

## Organization にコンテナイメージの可視性を設定する

パッケージを最初に公開する際のデフォルトの可視性はプライベートで、パッケージを表示できるのは公開したユーザだけです。 アクセス設定を使用して、コンテナイメージに対するさまざまなアクセスロールをユーザや Team に付与できます。

パブリックパッケージは認証なしに匿名でアクセスできます。 いったんパッケージをパブリックに設定すると、そのパッケージをプライベートに戻すことはできません。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. [Danger Zone] の下で、可視性の設定を選択します。
    - コンテナー イメージをすべてのユーザーに表示するには、 **[公開する]** をクリックします。
    {% warning %}

    **警告:** 公開したパッケージを非公開に戻すことはできません。

    {% endwarning %}
    - コンテナー イメージをカスタム選択したユーザーに表示するには、 **[非公開にする]** をクリックします。
  ![コンテナーの可視性のオプション](/assets/images/help/package-registry/container-visibility-option.png)
