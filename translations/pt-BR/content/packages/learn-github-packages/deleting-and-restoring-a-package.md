---
title: Excluir e restaurar um pacote
intro: 'Saiba como excluir ou restaurar um pacote.'
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

## Exclusão de pacote e suporte de restauração em {% data variables.product.prodname_dotcom %}

Em {% data variables.product.prodname_dotcom %} se você tiver o acesso necessário, você poderá excluir:
- um pacote privado inteiro
- um pacote público inteiro, se não houver mais de 25 downloads de qualquer versão do pacote
- uma versão específica de um pacote privado
- uma versão específica de um pacote público, se a versão do pacote não tiver mais de 25 downloads

{% note %}

**Observação:**
- Você não pode excluir um pacote público se uma versão do pacote tiver mais de 25 downloads. Neste caso, entre em contato com o [suporte do GitHub](https://support.github.com/contact) para obter mais assistência.
- Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.

{% endnote %}

Em {% data variables.product.prodname_dotcom %}, você também pode restaurar um pacote inteiro ou uma versão do pacote, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace do pacote ainda estiver disponível e não for usado para um novo pacote.

## Suporte de API de pacotes

{% if currentVersion == "free-pro-team@latest" %}

Você pode usar a API REST para gerenciar seus pacotes. Para obter mais informações, consulte o "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

For packages that inherit their permissions and access from repositories, you can use GraphQL to delete a specific package version.{% if currentVersion == "free-pro-team@latest" %} The {% data variables.product.prodname_registry %} GraphQL API does not support containers or Docker images that use the package namespace `https://ghcr.io/OWNER/PACKAGE-NAME`. Para obter mais informações sobre o suporte do GraphQL, consulte "[Excluir uma versão de um pacote com escopo de repositório com GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql)".

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

## Permissões necessárias para excluir ou restaurar um pacote

Para pacotes que herdam as permissões de acesso dos repositórios, é possível excluir um pacote se você tiver permissões de administrador para o repositório.

Repository-scoped packages on {% data variables.product.prodname_registry %} include these packages:
- npm
- RubyGems
- maven
- Gradle
- NuGet
- Imagens Docker em `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`

{% if currentVersion == "free-pro-team@latest" %}

Para excluir um pacote que tem permissões granulares separadas de um repositório, como contêineres ou imagens Docker armazenadas em `https://ghcr.io/OWNER/PACKAGE-NAME`, você deve ter acesso de administrador ao pacote.
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% data reusables.package_registry.container-registry-beta %}

{% endif %}


## Automatize a exclusão de versão de pacote com {% data variables.product.prodname_actions %}

Você pode automatizar a exclusão de versão do pacote usando uma ação oficial criada por {% data variables.product.company_short %}. Esta ação está disponível no repositório de ações ou em {% data variables.product.prodname_marketplace %} e funciona somente com pacotes com escopo do repositório. Para obter mais informações, consulte a ação "Excluir versões do pacote" em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/delete-package-versions) ou no [repositório de ações](https://github.com/actions/delete-package-versions).

## Excluir a versão de um pacote

### Excluir uma versão de um pacote com escopo de repositório em {% data variables.product.prodname_dotcom %}

Para excluir uma versão de um pacote com escopo do repositório, você deve ter permissões de administrador para o repositório ao qual o pacote pertence. Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

### Excluir uma versão de um pacote com escopo do repositório com o GraphQL

Para pacotes que herdam suas permissões e acesso dos repositórios, você pode usar o GraphQL para excluir uma versão específica de pacotes.

{% if currentVersion == "free-pro-team@latest" %}
O GraphQL não é compatível com contêineres ou imagens Docker em `ghcr.io`.
{% endif %}<!--PLACEHOLDER for when API link is live:  For full support, use the REST API. For more information, see the "\[{% data variables.product.prodname_registry %} API\](/rest/reference/packages)." -->Use a mutação `deletePackageVersion` na API do GraphQL. Você deve usar um token com os escopos `read:packages`, `delete:packages` e `repo`. For more information about tokens, see "[About {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#about-tokens)."

O exemplo a seguir demonstra como excluir uma versão do pacote, usando um `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

To find all of the private packages you have published to {% data variables.product.prodname_registry %}, along with the version IDs for the packages, you can use the `registryPackagesForQuery` connection. Você vai precisar de um token com os escopos `read:packages` e `repo`. You will need a token with the `read:packages` and `repo` scopes.

Para obter mais informações sobre a mutação `deletePackageVersion`, consulte "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Você não pode excluir diretamente um pacote inteiro usando o GraphQL, mas se você excluir todas as versões de um pacote, o pacote não será mostrado em {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Deleting a version of a user-scoped package on {% data variables.product.prodname_dotcom %}

To delete a specific version of a user-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps. To delete an entire package, see "[Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)."

{% data reusables.package_registry.container-registry-beta %}

Para revisar quem pode excluir uma versão de pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluir uma versão de um pacote com escopo da organização no GitHub

To delete a specific version of an organization-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps. To delete an entire package, see "[Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)."

{% data reusables.package_registry.container-registry-beta %}

Para revisar quem pode excluir uma versão de pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## Deleting an entire package

### Deleting an entire repository-scoped package on {% data variables.product.prodname_dotcom %}

To delete an entire repository-scoped package, you must have admin permissions to the repository that owns the package. Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. Under "Danger Zone", click **Delete this package**.
5. To confirm, review the confirmation message, enter your package name, and click **I understand, delete this package.** ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}
### Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## Restoring packages

You can restore a deleted package or version if:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- The same package namespace and version is still available and not reused for a new package.

For example, if you have a deleted rubygem package named `octo-package` that was scoped to the repo `octo-repo-owner/octo-repo`, then you can only restore the package if the package namespace `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` is still available, and 30 days have not yet passed.

You must also meet one of these permission requirements:
  - For repository-scoped packages: You have admin permissions to the repository that owns the deleted package.
  - For user-account scoped packages: Your user account owns the deleted package.
  - For organization-scoped packages: You have admin permissions to the deleted package in the organization that owns the package.

Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

Once the package is restored, the package will use the same namespace it did before. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

### Restoring a package in an organization

You can restore a deleted package through your organization account settings, as long as the package was in one of your repositories or had granular permissions and was scoped to your organization account.

To review who can restore a package in an organization, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. À esquerda, clique em **Pacotes**.
4. Under "Deleted Packages", next to the package you want to restore, click **Restore**. ![Botão de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. To confirm, type the name of the package and click **I understand the consequences, restore this package**. ![Restore package confirmation button](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restoring a user-account scoped package

You can restore a deleted package through your user account settings, if the package was in one of your repositories or scoped to your user account. Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user_settings.access_settings %}
2. À esquerda, clique em **Pacotes**.
4. Under "Deleted Packages", next to the package you want to restore, click **Restore**. ![Botão de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. To confirm, type the name of the package and click **I understand the consequences, restore this package**. ![Restore package confirmation button](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restoring a package version

You can restore a package version from your package's landing page. To review who can restore a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

1. Navigate to your package's landing page.
2. On the right, click **Package settings**.
2. À esquerda, clique em **Gerenciar versões**.
3. On the top right, use the "Versions" drop-down menu and select **Deleted**. ![Versions drop-down menu showing the deleted option](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Next to the deleted package version you want to restore, click **Restore**. ![Restore option next to a deleted package version](/assets/images/help/package-registry/restore-package-version.png)
5. To confirm, click **I understand the consequences, restore this version.** ![Confirm package version restoration](/assets/images/help/package-registry/confirm-package-version-restoration.png)
