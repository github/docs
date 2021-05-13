---
title: パッケージを削除および復元する
intro: パッケージの削除と復元の方法を学びます。
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}におけるパッケージの削除および復元のサポート

{% data variables.product.prodname_dotcom %}では、必要なアクセス権がある場合、以下を削除できます。
- プライベートパッケージ全体
- パッケージの全バージョンでダウンロード数が25以下の場合、パブリックパッケージ全体
- プライベートパッケージの特定のバージョン
- パッケージバージョンのダウンロード数が25以下の場合、パブリックパッケージの特定のバージョン

{% note %}

**注釈:**
- パッケージのいずれかのパージョンでダウンロード数が25を超えている場合は、パブリックパッケージを削除できません。 この場合は、[GitHubサポート](https://support.github.com/contact)までお問い合わせください。
- パブリックパッケージを削除する場合、そのパッケージに依存するプロジェクトを破壊する可能性があることに注意してください。

{% endnote %}

{% data variables.product.prodname_dotcom %}では、以下の場合にパッケージ全体またはパッケージバージョンを復元できます。
- 削除後30日以内にパッケージを復元する。
- 同一のパッケージ名前空間が使用可能であり、新しいパッケージで使用されていない。

## パッケージAPIのサポート

{% if currentVersion == "free-pro-team@latest" %}

REST APIを使用してパッケージを管理できます。 詳しい情報については、「[{% data variables.product.prodname_registry %} API](/rest/reference/packages)」を参照してください。

{% endif %}

リポジトリから権限とアクセス権を継承するパッケージの場合、GraphQLを使用して特定のパッケージバージョンを削除できます。{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_registry %} GraphQL APIは、パッケージ名前空間に`https://ghcr.io/OWNER/PACKAGE-NAME`を使用するコンテナやDockerイメージをサポートしていません。 GraphQLのサポートに関する詳しい情報については、「[GraphQLでリポジトリのスコープが付いたパッケージのバージョンを削除する](#deleting-a-version-of-a-repository-scoped-package-with-graphql)」を参照してください。

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

## パッケージの削除や復元に必要な権限

リポジトリからアクセス権限を継承しているパッケージの場合、そのリポジトリに対する管理者権限がある場合はパッケージを削除できます。

{% data variables.product.prodname_registry %}上でリポジトリのスコープが付いたパッケージには、以下が挙げられます。
- npm
- RubyGems
- maven
- Gradle
- NuGet
- `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`のDockerイメージ

{% if currentVersion == "free-pro-team@latest" %}

`https://ghcr.io/OWNER/PACKAGE-NAME`に保存されたコンテナやDockerイメージなど、リポジトリとは別に個別の権限を持つパッケージを削除する場合は、そのパッケージに対するアクセス権限が必要です。
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% data reusables.package_registry.container-registry-beta %}

{% endif %}


## {% data variables.product.prodname_actions %}でパッケージのバージョン削除を自動化する

{% data variables.product.company_short %}が作成した公式のアクションを使用して、パッケージのバージョン削除を自動化できます。 このアクションはactionsリポジトリまたは{% data variables.product.prodname_marketplace %}上で使用でき、リポジトリのスコープが付いたパッケージでのみ動作します。 詳しい情報については、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/delete-package-versions)または[actionsリポジトリ](https://github.com/actions/delete-package-versions)の「Delete Package Versions」アクションを参照してください。

## パッケージのバージョンを削除する

### {% data variables.product.prodname_dotcom %}上でリポジトリのスコープが付いたバージョンを削除する

リポジトリのスコープが付いたパッケージのバージョンを削除するには、パッケージを所有するリポジトリの管理者権限が必要です。 詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、[**Delete version**] を選択します。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

### GraphQLでリポジトリのスコープが付いたパッケージのバージョンを削除する

リポジトリから権限とアクセスを継承しているパッケージの場合、GraphQLを使用して特定のパッケージバージョンを削除できます。

{% if currentVersion == "free-pro-team@latest" %}
GraphQLは、`ghcr.io`にあるコンテナやDockerイメージではサポートされていません。
{% endif %}<!--PLACEHOLDER for when API link is live:  For full support, use the REST API. For more information, see the "\[{% data variables.product.prodname_registry %} API\](/rest/reference/packages)." -->GraphQL APIの`deletePackageVersion`ミューテーションを使ってください。 `read:packages`、`delete:packages`、`repo`スコープを持つトークンを使わなければなりません。 トークンに関する詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」を参照してください。

以下の例では、`MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`の`packageVersionId`を使用して、パッケージバージョンを削除する方法を示します。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

パッケージのバージョンIDと併せて{% data variables.product.prodname_registry %}に公開したすべてプライベートパッケージを見つけるには、`registryPackagesForQuery`コネクションが利用できます。 `read:packages`及び`repo`のスコープを持つトークンが必要です。 For more information, see "[`registryPackagesForQuery`](/v4/object/registrypackageconnection/)."

`deletePackageVersion`ミューテーションの詳しい情報については、「[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)」を参照してください。

GraphQLを使用してパッケージ全体を直接削除することはできませんが、パッケージのすべてのバージョンを削除すれば、パッケージは{% data variables.product.product_name %}上に表示されなくなります。

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージのバージョンを削除する

`ghcr.io`にあるDockerイメージなどで、 {% data variables.product.prodname_dotcom %}上のユーザのスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。 パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージ全体を削除する](#deleting-an-entire-user-scoped-package-on-github)」を参照してください。

{% data reusables.package_registry.container-registry-beta %}

パッケージのバージョンを削除できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、[**Delete version**] を選択します。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### GitHub上でOrganizationのスコープが付いたパッケージのバージョンを削除する

`ghcr.io`にあるDockerイメージなどで、{% data variables.product.prodname_dotcom %}上のOrganizationのスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。 パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %}上でOrganizationのスコープが付いたパッケージ全体を削除する](#deleting-an-entire-organization-scoped-package-on-github)」を参照してください。

{% data reusables.package_registry.container-registry-beta %}

パッケージのバージョンを削除できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、[**Delete version**] を選択します。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージバージョン削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## パッケージ全体を削除する

### {% data variables.product.prodname_dotcom %}上でリポジトリのスコープが付いたパッケージ全体を削除する

リポジトリのスコープが付いたパッケージ全体を削除するには、パッケージを所有するリポジトリの管理者権限が必要です。 詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. [Danger Zone] の下にある [**Delete this package**] をクリックします。
5. 確認メッセージを読み、パッケージ名を入力してから、[**I understand, delete this package.**] をクリックします。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージ全体を削除する

パッケージを削除できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. 左側にある [**Options**] をクリックします。 ![[Options] メニューオプション](/assets/images/help/package-registry/options-for-container-settings.png)
6. [Danger zone] の下にある [**Delete this package**] をクリックします。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-button.png)
6. 削除を確認するために、パッケージ名を入力して [**I understand the consequences, delete this package**] をクリックします。 ![パッケージバージョン削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### {% data variables.product.prodname_dotcom %}上でOrganizationのスコープが付いたパッケージ全体を削除する

パッケージを削除できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. 左側にある [**Options**] をクリックします。 ![[Options] メニューオプション](/assets/images/help/package-registry/options-for-container-settings.png)
6. [Danger zone] の下にある [**Delete this package**] をクリックします。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-container-package-button.png)
6. 削除を確認するために、パッケージ名を入力して [**I understand the consequences, delete this package**] をクリックします。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## パッケージを復元する

以下の場合、削除したパッケージまたはバージョンを復元できます。
- 削除後30日以内にパッケージを復元する。
- 同一のパッケージ名前空間がまだ使用可能であり、新しいパッケージで再使用されていない。

たとえば、リポジトリ`octo-repo-owner/octo-repo`のスコープが付いていた、`octo-package`という名前のrubygemパッケージを削除した場合、パッケージ名前空間`rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` がまだ使用可能で、かつ30日間が経過していない場合にのみ、そのパッケージを復元できます。

また、次の権限要件のいずれかを満たす必要もあります。
  - リポジトリのスコープが付いたパッケージ: 削除したパッケージを所有するリポジトリの管理者権限。
  - ユーザアカウントのスコープが付いたパッケージ: ユーザアカウントが削除したパッケージを所有している。
  - Organizationのスコープが付いたパッケージ: 削除したパッケージ内の、パッケージを所有するOrganizationの管理者権限。

詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

パッケージが復元されると、そのパッケージは以前使用していたものと同じ名前空間を使用します。 同一のパッケージ名前空間が使用可能でない場合、パッケージを復元できません。 この場合、削除したパッケージを復元するには、まず削除したパッケージの名前空間を使用する新しいパッケージを削除する必要があります。

### Organization内のパッケージを復元する

パッケージが所有するリポジトリにあったか、詳細なアクセス権限が設定されていて、所属するOrganizationアカウントのスコープが付いていた場合、削除されたパッケージをOrganizationアカウント設定から復元できます。

Organizationでパッケージを復元できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. 左側にある [**Packages**] をクリックします。
4. [Deleted Packages] の、復元するパッケージの隣にある [**Restore**] をクリックします。 ![リストアボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力して [**I understand the consequences, restore this package**] をクリックします。 ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### ユーザアカウントのスコープが付いたパッケージを復元する

パッケージが所有するリポジトリにあったか、ユーザアカウントのスコープが付いていた場合、削除されたパッケージをユーザアカウント設定から復元できます。 詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.user_settings.access_settings %}
2. 左側にある [**Packages**] をクリックします。
4. [Deleted Packages] の、復元するパッケージの隣にある [**Restore**] をクリックします。 ![リストアボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力して [**I understand the consequences, restore this package**] をクリックします。 ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### パッケージのバージョンを復元する

パッケージのランディングページから、パッケージのバージョンを復元できます。 パッケージを復元できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

1. パッケージのランディングページに移動します。
2. 右側にある [**Package settings**] をクリックします。
2. 左にある [**Manage versions**] をクリックします。
3. 左上の [Versions] ドロップダウンメニューで、[**Deleted**] を選択します。 ![削除されたバージョンを表示するドロップダウンメニュー](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 復元する削除されたパッケージの隣の、[**Restore**] をクリックします。 ![削除されたパッケージのバージョンの隣にある復元オプション](/assets/images/help/package-registry/restore-package-version.png)
5. 確認のため、[**I understand the consequences, restore this version.**] をクリックします。 ![パッケージバージョン復元の確認](/assets/images/help/package-registry/confirm-package-version-restoration.png)
