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
  fpt: '*'
  ghes: '>=3.2'
  ghec: '*'
  ghae: '*'
shortTitle: パッケージの削除と復元
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}におけるパッケージの削除および復元のサポート

{% data variables.product.prodname_dotcom %}では、必要なアクセス権がある場合、以下を削除できます。
- プライベートパッケージ全体
- パッケージの全バージョンでダウンロード数が5000以下の場合、パブリックパッケージ全体
- プライベートパッケージの特定のバージョン
- パッケージバージョンのダウンロード数が5000以下の場合、パブリックパッケージの特定のバージョン

{% note %}

**注釈:**
- パッケージのいずれかのパージョンでダウンロード数が5000を超えている場合は、パブリックパッケージを削除できません。 この場合は、[GitHubサポート](https://support.github.com/contact?tags=docs-packages)までお問い合わせください。
- パブリックパッケージを削除する場合、そのパッケージに依存するプロジェクトを破壊する可能性があることに注意してください。

{% endnote %}

{% data variables.product.prodname_dotcom %}では、以下の場合にパッケージ全体またはパッケージバージョンを復元できます。
- 削除後30日以内にパッケージを復元する。
- 同一のパッケージ名前空間が使用可能であり、新しいパッケージで使用されていない。

{% ifversion fpt or ghec or ghes %}
## パッケージAPIのサポート

{% ifversion fpt or ghec %}

REST APIを使用してパッケージを管理できます。 詳しい情報については、「[{% data variables.product.prodname_registry %} API](/rest/reference/packages)」を参照してください。

{% endif %}

権限とアクセスをリポジトリから継承するパッケージでは、GraphQLを使って特定のパッケージバージョンを削除できます。{% ifversion fpt or ghec %}{% data variables.product.prodname_registry %}GraphQL APIは、パッケージの名前空間`https://ghcr.io/OWNER/PACKAGE-NAME`を使うコンテナあるいはDockerイメージをサポートしません。{% endif %}GraphQLサポートに関する詳しい情報については「[GraphQLでリポジトリをスコープとするパッケージのバージョンを削除する](#deleting-a-version-of-a-repository-scoped-package-with-graphql)」を参照してください。

{% endif %}

## パッケージの削除や復元に必要な権限

リポジトリからアクセス権限を継承しているパッケージの場合、そのリポジトリに対する管理者権限がある場合はパッケージを削除できます。

{% data variables.product.prodname_registry %}上でリポジトリのスコープが付いたパッケージには、以下が挙げられます。
- npm
- RubyGems
- maven
- Gradle
- NuGet
{% ifversion not fpt or ghec %}-`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`にあるDockerイメージ{% endif %}

{% ifversion fpt or ghec %}

`https://ghcr.io/OWNER/PACKAGE-NAME`に保存されたコンテナイメージなど、リポジトリとは別に詳細な権限を持つパッケージを削除する場合は、そのパッケージに対するアクセス権限が必要です。 詳しい情報については「[{% data variables.product.prodname_registry %}の権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」を参照してください。

{% endif %}

## パッケージのバージョンを削除する

### {% data variables.product.prodname_dotcom %}上でリポジトリのスコープが付いたバージョンを削除する

リポジトリのスコープが付いたパッケージのバージョンを削除するには、パッケージを所有するリポジトリの管理者権限が必要です。 詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、[**Delete version**] を選択します。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### GraphQLでリポジトリのスコープが付いたパッケージのバージョンを削除する

リポジトリから権限とアクセスを継承しているパッケージの場合、GraphQLを使用して特定のパッケージバージョンを削除できます。

{% ifversion fpt or ghec %}
`ghcr.io`にあるコンテナあるいはDockerイメージについては、GraphQLはサポートされていませんがREST APIが使えます。 詳しい情報については、「[{% data variables.product.prodname_registry %} API](/rest/reference/packages)」を参照してください。
{% endif %}

GraphQL APIの`deletePackageVersion`ミューテーションを使ってください。 `read:packages`、`delete:packages`、`repo`スコープを持つトークンを使わなければなりません。 トークンに関する詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」を参照してください。

以下の例では、`MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`の`packageVersionId`を使用して、パッケージバージョンを削除する方法を示します。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% data variables.product.prodname_registry %}に公開したすべてのプライベートパッケージをバージョンIDと合わせて見つけるには、`repository`オブジェクトを通じて`packages`コネクションを使うことができます。 `read:packages`及び`repo`のスコープを持つトークンが必要です。 詳しい情報については[`packages`]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/objects#repository)コネクションあるいは[`PackageOwner`]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/interfaces#packageowner)インターフェースを参照してください。

`deletePackageVersion`ミューテーションに関する詳しい情報については「[`deletePackageVersion`]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/mutations#deletepackageversion)」を参照してください。

GraphQLを使用してパッケージ全体を直接削除することはできませんが、パッケージのすべてのバージョンを削除すれば、パッケージは{% data variables.product.product_name %}上に表示されなくなります。

{% endif %}

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージのバージョンを削除する

`ghcr.io`にあるDockerイメージなどで、 {% data variables.product.prodname_dotcom %}上のユーザのスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。 パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージ全体を削除する](#deleting-an-entire-user-scoped-package-on-github)」を参照してください。

パッケージのバージョンを削除できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、[**Delete version**] を選択します。 ![パッケージバージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### {% data variables.product.prodname_dotcom %}上のOrganizationスコープのパッケージのバージョンの削除

`ghcr.io`にあるDockerイメージなどで、{% data variables.product.prodname_dotcom %}上のOrganizationのスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。 パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %}上でOrganizationのスコープが付いたパッケージ全体を削除する](#deleting-an-entire-organization-scoped-package-on-github)」を参照してください。

パッケージバージョンを削除できる人をレビューするには、「[パッケージの削除あるいは復元に必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

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

{% ifversion fpt or ghec %}
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

たとえば、リポジトリ`octo-repo-owner/octo-repo`のスコープが付いていた、`octo-package`という名前のRubygemパッケージを削除した場合、パッケージ名前空間`rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` がまだ使用可能で、かつ30日間が経過していない場合にのみ、そのパッケージを復元できます。

{% ifversion fpt or ghec %}
削除されたパッケージを復元するには、以下の権限の要求のいずれかを満たす必要もあります。
  - リポジトリをスコープとするパッケージ: 削除されたパッケージを所有するリポジトリの管理権限を持っている。{% ifversion fpt or ghec %}
  - ユーザアカウントのスコープが付いたパッケージ: 個人アカウントが削除したパッケージを所有している。
  - Organizationをスコープとするパッケージ: パッケージを所有するOrganization中で削除されたパッケージに対する管理権限を持っている。{% endif %}
{% endif %}

{% ifversion ghae or ghes %}
削除されたパッケージについては、その削除されたパッケージを所有するリポジトリに対する管理権限も持っていなければなりません。
{% endif %}

詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

パッケージが復元されると、そのパッケージは以前使用していたものと同じ名前空間を使用します。 同一のパッケージ名前空間が使用可能でない場合、パッケージを復元できません。 この場合、削除したパッケージを復元するには、まず削除したパッケージの名前空間を使用する新しいパッケージを削除する必要があります。

### Organization内のパッケージを復元する

 削除されたパッケージは、そのパッケージがOrganizationの所有するリポジトリ内にあった{% ifversion fpt or ghec %}か、Organizationアカウントをスコープとする詳細な権限を持っていた{% endif %}なら、Organizationアカウントの設定を通じて復元できます。

Organizationでパッケージを復元できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. 左側にある [**Packages**] をクリックします。
4. [Deleted Packages] の、復元するパッケージの隣にある [**Restore**] をクリックします。 ![リストアボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力して [**I understand the consequences, restore this package**] をクリックします。 ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### ユーザアカウントのスコープが付いたパッケージを復元する

パッケージが所有するリポジトリにあったか、個人アカウントのスコープが付いていた場合、削除されたパッケージを個人アカウント設定から復元できます。 詳しい情報については、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.user-settings.access_settings %}
2. 左側にある [**Packages**] をクリックします。
4. [Deleted Packages] の、復元するパッケージの隣にある [**Restore**] をクリックします。 ![リストアボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力して [**I understand the consequences, restore this package**] をクリックします。 ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### パッケージのバージョンを復元する

パッケージのランディングページから、パッケージのバージョンを復元できます。 パッケージを復元できるユーザを確認するには、「[必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

1. パッケージのランディングページに移動します。
2. 右側にある [**Package settings**] をクリックします。
2. 左にある [**Manage versions**] をクリックします。
3. 左上の [Versions] ドロップダウンメニューで、[**Deleted**] を選択します。 ![削除されたバージョンを表示するドロップダウンメニュー](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 復元する削除されたパッケージの隣の、[**Restore**] をクリックします。 ![削除されたパッケージのバージョンの隣にある復元オプション](/assets/images/help/package-registry/restore-package-version.png)
5. 確認のため、[**I understand the consequences, restore this version.**] をクリックします。 ![パッケージバージョン復元の確認](/assets/images/help/package-registry/confirm-package-version-restoration.png)
