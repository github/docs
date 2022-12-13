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
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 4491e7cd25fbec2a19abb06c552ba0e0d3ac7b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147704988'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}におけるパッケージの削除および復元のサポート

{% data variables.product.prodname_dotcom %}では、必要なアクセス権がある場合、以下を削除できます。
- プライベートパッケージ全体
- パッケージの全バージョンでダウンロード数が 5000 以下の場合、パブリック パッケージ全体
- プライベートパッケージの特定のバージョン
- パッケージ バージョンのダウンロード数が 5,000 以下の場合、パブリック パッケージの特定のバージョン

{% note %}

**注:**
- パッケージのいずれかのパージョンでダウンロード数が 5,000 を超えている場合は、パブリック パッケージを削除できません。 この場合は、[GitHub サポート](https://support.github.com/contact?tags=docs-packages)までお問い合わせください。
- パブリックパッケージを削除する場合、そのパッケージに依存するプロジェクトを破壊する可能性があることに注意してください。

{% endnote %}

{% data variables.product.prodname_dotcom %}では、以下の場合にパッケージ全体またはパッケージバージョンを復元できます。
- 削除後30日以内にパッケージを復元する。
- 同一のパッケージ名前空間が使用可能であり、新しいパッケージで使用されていない。

{% ifversion fpt or ghec or ghes %}
## パッケージAPIのサポート

{% ifversion fpt or ghec %}

REST APIを使用してパッケージを管理できます。 詳しくは、[{% data variables.product.prodname_registry %} API](/rest/reference/packages) に関するページをご覧ください。

{% endif %}

リポジトリからアクセス許可とアクセス権を継承するパッケージの場合は、GraphQL を使用して特定のパッケージ バージョンを削除できます。{% data reusables.package_registry.no-graphql-to-delete-packages %} GraphQL のサポートについて詳しくは、「[GraphQL を使用してリポジトリ スコープ パッケージのバージョンを削除する](#deleting-a-version-of-a-repository-scoped-package-with-graphql)」をご覧ください。

{% endif %}

## パッケージの削除や復元に必要な権限

リポジトリからアクセス権限を継承しているパッケージの場合、そのリポジトリに対する管理者権限がある場合はパッケージを削除できます。

以下の {% data variables.product.prodname_registry %} レジストリでは、リポジトリ スコープのアクセス許可 **のみ** を使います。

  {% ifversion not fpt or ghec %}- `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` の Docker イメージ{% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm{% endif %}
  - RubyGemsレジストリ
  - Apache Mavenレジストリ
  - NuGetレジストリ

{% ifversion packages-npm-v2 %}{% data variables.product.prodname_ghcr_and_npm_registry %}の場合、パッケージのスコープをユーザー、組織に設定、またはリポジトリにリンクすることを許可できます。{% endif %}

{% ifversion fpt or ghec %}

`https://ghcr.io/OWNER/PACKAGE-NAME` または `https://npm.pkg.github.com/OWNER/PACKAGE-NAME` に保存されたコンテナー イメージなど、リポジトリとは別に細かいアクセス許可を持つパッケージを削除する場合は、そのパッケージに対する管理者アクセス権が必要です。 詳細については、「[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)」 ({% data variables.product.prodname_registry %} へのアクセス許可) を参照してください。

{% endif %}

## パッケージのバージョンを削除する

### {% data variables.product.prodname_dotcom %}上でリポジトリのスコープが付いたバージョンを削除する

リポジトリのスコープが付いたパッケージのバージョンを削除するには、パッケージを所有するリポジトリの管理者権限が必要です。 詳細については、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. 左側の **[バージョンの管理]** をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、 **[バージョンの削除]** を選択します。
  ![パッケージ バージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力し、 **[I understand the consequences, delete this version]\(影響を理解したうえで、このバージョンを削除します\)** をクリックします。
  ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### GraphQLでリポジトリのスコープが付いたパッケージのバージョンを削除する

リポジトリから権限とアクセスを継承しているパッケージの場合、GraphQLを使用して特定のパッケージバージョンを削除できます。

{% data reusables.package_registry.no-graphql-to-delete-packages %}{% ifversion fpt or ghec %} ただし、REST API は使用できます。 詳しくは、[{% data variables.product.prodname_registry %} API](/rest/reference/packages) に関するページをご覧ください。{% endif %}

GraphQL API の `deletePackageVersion` ミューテーションを使ってください。 `read:packages`、`delete:packages`、`repo` スコープを持つトークンを使わなければなりません。 トークンについて詳しくは、「[{% data variables.product.prodname_registry %} について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」をご覧ください。

以下の例では、`MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg` の `packageVersionId` を使用して、パッケージ バージョンを削除する方法を示します。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% data variables.product.prodname_registry %} に公開したすべてのプライベート パッケージをバージョン ID と併せて見つけるには、`repository` オブジェクトを通じて `packages` コネクションを使うことができます。 `read:packages` および `repo` のスコープを持つトークンが必要です。 詳細については、[`packages`](/graphql/reference/objects#repository) コネクションまたは [`PackageOwner`](/graphql/reference/interfaces#packageowner) インターフェイスを参照してください。

`deletePackageVersion` ミューテーションの詳細については、「[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)」を参照してください。

GraphQLを使用してパッケージ全体を直接削除することはできませんが、パッケージのすべてのバージョンを削除すれば、パッケージは{% data variables.product.product_name %}上に表示されなくなります。

{% endif %}

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージのバージョンを削除する

`ghcr.io` にある Docker イメージなどで、{% data variables.product.prodname_dotcom %} 上のユーザーのスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。 パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %} 上でユーザーのスコープが付いたパッケージ全体を削除する](#deleting-an-entire-user-scoped-package-on-github)」を参照してください。

パッケージのバージョンを削除できるユーザーを確認するには、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 左側の **[バージョンの管理]** をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、 **[バージョンの削除]** を選択します。
  ![パッケージ バージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力し、 **[I understand the consequences, delete this version]\(影響を理解したうえで、このバージョンを削除します\)** をクリックします。
  ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### {% data variables.product.prodname_dotcom %}上のOrganizationスコープのパッケージのバージョンの削除

`ghcr.io` にある Docker イメージなどで、{% data variables.product.prodname_dotcom %} 上の組織のスコープが付いたパッケージの、特定のバージョンを削除するには、以下のステップに従ってください。
パッケージ全体を削除するには、「[{% data variables.product.prodname_dotcom %} 上で組織のスコープが付いたパッケージ全体を削除する](#deleting-an-entire-organization-scoped-package-on-github)」を参照してください。

パッケージのバージョンを削除できるユーザーを確認するには、「[パッケージの削除や復元に必要な権限](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 左側の **[バージョンの管理]** をクリックします。
5. 削除するバージョンの右側で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、 **[バージョンの削除]** を選択します。
  ![パッケージ バージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力し、 **[I understand the consequences, delete this version]\(影響を理解したうえで、このバージョンを削除します\)** をクリックします。
  ![パッケージ バージョン削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## パッケージ全体を削除する

### {% data variables.product.prodname_dotcom %}上でリポジトリのスコープが付いたパッケージ全体を削除する

リポジトリのスコープが付いたパッケージ全体を削除するには、パッケージを所有するリポジトリの管理者権限が必要です。 詳細については、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. [危険なゾーン] の **[Delete this package]\(このパッケージを削除\)** をクリックします。
5. 確認メッセージを読み、パッケージ名を入力してから、 **[I understand, delete this package.]\(理解したうえで、このパッケージを削除します。\)** をクリックします。
  ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_dotcom %}上でユーザのスコープが付いたパッケージ全体を削除する

パッケージを削除できるユーザーを確認するには、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 左側の **[オプション]** をクリックします。
  ![[オプション] メニュー オプション](/assets/images/help/package-registry/options-for-container-settings.png)
6. [危険なゾーン] の **[Delete this package]\(このパッケージを削除\)** をクリックします。
  ![パッケージ バージョンの削除ボタン](/assets/images/help/package-registry/delete-container-package-button.png)
6. 削除を確認するために、パッケージ名を入力し、 **[I understand the consequences, delete this package]\(影響を理解したうえで、このパッケージを削除します\)** をクリックします。
  ![パッケージ バージョン削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### {% data variables.product.prodname_dotcom %}上でOrganizationのスコープが付いたパッケージ全体を削除する

パッケージを削除できるユーザーを確認するには、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 左側の **[オプション]** をクリックします。
  ![[オプション] メニュー オプション](/assets/images/help/package-registry/options-for-container-settings.png)
6. [危険なゾーン] の **[Delete this package]\(このパッケージを削除\)** をクリックします。
  ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-container-package-button.png)
6. 削除を確認するために、パッケージ名を入力し、 **[I understand the consequences, delete this package]\(影響を理解したうえで、このパッケージを削除します\)** をクリックします。
  ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## パッケージを復元する

以下の場合、削除したパッケージまたはバージョンを復元できます。
- 削除後30日以内にパッケージを復元する。
- 同一のパッケージ名前空間がまだ使用可能であり、新しいパッケージで再使用されていない。

たとえば、リポジトリ `octo-repo-owner/octo-repo` のスコープが付いていた、`octo-package` という名前の Rubygem パッケージを削除した場合、パッケージ名前空間 `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` がまだ使用可能で、かつ 30 日が経過していない場合にのみ、そのパッケージを復元できます。

{% ifversion fpt or ghec %} 削除されたパッケージを復元するには、以下のアクセス許可の要求のいずれかを満たす必要もあります。
  - リポジトリをスコープとするパッケージ: 削除されたパッケージを所有するリポジトリの管理権限を持っている。{% ifversion fpt or ghec %}
  - ユーザー アカウントのスコープが付いたパッケージ: 個人アカウントが削除したパッケージを所有している。
  - 組織をスコープとするパッケージ: パッケージを所有する組織内で削除されたパッケージに対する管理権限を持っている。{% endif %} {% endif %}

{% ifversion ghae or ghes %} 削除されたパッケージについては、その削除されたパッケージを所有するリポジトリに対する管理権限も持っていなければなりません。
{% endif %}

詳細については、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

パッケージが復元されると、そのパッケージは以前使用していたものと同じ名前空間を使用します。 同一のパッケージ名前空間が使用可能でない場合、パッケージを復元できません。 この場合、削除したパッケージを復元するには、まず削除したパッケージの名前空間を使用する新しいパッケージを削除する必要があります。

### Organization内のパッケージを復元する

 削除されたパッケージは、そのパッケージがOrganizationの所有するリポジトリ内にあった{% ifversion fpt or ghec %}か、Organizationアカウントをスコープとする詳細な権限を持っていた{% endif %}なら、Organizationアカウントの設定を通じて復元できます。

組織でパッケージを復元できるユーザーを確認するには、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. 左側の **[パッケージ]** をクリックします。
4. [Deleted Packages]\(削除されたパッケージ\) の、復元するパッケージの隣にある **[復元]** をクリックします。
  ![[復元] ボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力し、 **[I understand the consequences, restore this package]\(影響を理解したうえで、このパッケージを復元します\)** をクリックします。
  ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### ユーザアカウントのスコープが付いたパッケージを復元する

パッケージが所有するリポジトリにあったか、個人アカウントのスコープが付いていた場合、削除されたパッケージを個人アカウント設定から復元できます。 詳細については、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

{% data reusables.user-settings.access_settings %}
2. 左側の **[パッケージ]** をクリックします。
4. [Deleted Packages]\(削除されたパッケージ\) の、復元するパッケージの隣にある **[復元]** をクリックします。
  ![[復元] ボタン](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 確認のため、パッケージ名を入力し、 **[I understand the consequences, restore this package]\(影響を理解したうえで、このパッケージを復元します\)** をクリックします。
  ![パッケージ復元の確認ボタン](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### パッケージのバージョンを復元する

パッケージのランディングページから、パッケージのバージョンを復元できます。 パッケージを復元できるユーザーを確認するには、「[必要なアクセス許可](#required-permissions-to-delete-or-restore-a-package)」を参照してください。

1. パッケージのランディングページに移動します。
2. 右側の **[パッケージ設定]** をクリックします。
2. 左側の **[バージョンの管理]** をクリックします。
3. 左上の [バージョン] ドロップダウン メニューで、 **[削除済み]** を選択します。
  ![削除されたバージョンを表示するドロップダウン メニュー](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 復元する削除済みパッケージのバージョンの横にある **[復元]** をクリックします。
  ![削除されたパッケージのバージョンの隣にある復元オプション](/assets/images/help/package-registry/restore-package-version.png)
5. 確認のために、 **[I understand the consequences, restore this version]\(影響を理解したうえで、このバージョンを復元します\)** をクリックします。
  ![パッケージ バージョン復元の確認](/assets/images/help/package-registry/confirm-package-version-restoration.png)
