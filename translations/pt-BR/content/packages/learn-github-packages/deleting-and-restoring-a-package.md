---
title: Excluir e restaurar um pacote
intro: Saiba como excluir ou restaurar um pacote.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '>=3.1'
shortTitle: Excluir & restaurar um pacote
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
- Você não pode excluir um pacote público se uma versão do pacote tiver mais de 25 downloads. Neste caso, entre em contato com o [suporte do GitHub](https://support.github.com/contact?tags=docs-packages) para obter mais assistência.
- Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.

{% endnote %}

Em {% data variables.product.prodname_dotcom %}, você também pode restaurar um pacote inteiro ou uma versão do pacote, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace do pacote ainda estiver disponível e não for usado para um novo pacote.

## Suporte de API de pacotes

{% ifversion fpt %}

Você pode usar a API REST para gerenciar seus pacotes. Para obter mais informações, consulte o "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

Para pacotes que herdam suas permissões e acesso dos repositórios, você pode usar o GraphQL para excluir uma versão específica de pacotes.{% ifversion fpt %} A {% data variables.product.prodname_registry %} API do GraphQL API não é compatível com contêineres ou imagens Docker que usam o namespace do pacote `https://ghcr.io/OWNER/PACKAGE-NAME`. Para obter mais informações sobre o suporte do GraphQL, consulte "[Excluir uma versão de um pacote com escopo de repositório com GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql)".

{% endif %}

## Permissões necessárias para excluir ou restaurar um pacote

Para pacotes que herdam as permissões de acesso dos repositórios, é possível excluir um pacote se você tiver permissões de administrador para o repositório.

Os pacotes com escopo de repositório em {% data variables.product.prodname_registry %} incluem estes pacotes:
- npm
- RubyGems
- maven
- Gradle
- NuGet
{% ifversion not fpt %}- Imagens do Docker em `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`{% endif %}

{% ifversion fpt %}

Para excluir um pacote que tem permissões granulares separadas de um repositório, como imagens de contêiner armazenadas em `https://ghcr.io/OWNER/PACKAGE-NAME`, você deverá ter acesso de administrador ao pacote.
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% endif %}

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

{% ifversion fpt %}
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

{% ifversion fpt %}
### Excluindo uma versão de pacote com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para excluir uma versão específica de um pacote com escopo de usuário em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr. o`, siga estas etapas. Para excluir um pacote inteiro, consulte "[Excluir todo um pacote com escopo do usuário em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluir uma versão de um pacote com escopo da organização no GitHub

Para excluir uma versão específica de um pacote com escopo de organização em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr.io`, siga estas etapas. Para excluir um pacote inteiro, consulte "[Excluir todo um pacote com escopo da organização em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## Excluindo um pacote inteiro

### Excluindo um pacote com escopo de repositório completo em {% data variables.product.prodname_dotcom %}

Para excluir todo um pacote com escopo do repositório, você deve ter permissões de administrador no repositório que possui o pacote. Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. Em "zona de perigo", clique em **Excluir este pacote**.
5. Para confirmar, revise a mensagem de confirmação, digite o nome do seu pacote e clique em **Eu compreendo, exclua este pacote.** ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt %}
### Excluir um pacote inteiro com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Excluir um pacote inteiro com escopo da organização em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## Restaurando pacotes

Você pode restaurar um pacote ou versão excluído, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace e versão do pacote ainda estiverem disponíveis e não forem reutilizados para um novo pacote.

Por exemplo, se você tem um pacote de rubygem excluído denominado `octo-package` que teve o escopo definido como repositório `octo-repo-owner/octo-repo`, você só poderá restaurar o pacote se o namespace do pacote `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` ainda estiver disponível, e 30 dias ainda não passaram.

Você também deve atender a um destes requisitos de permissão:
  - For repository-scoped packages: You have admin permissions to the repository that owns the deleted package.{% ifversion fpt %}
  - Para pacotes com escopo de conta de usuário: Sua conta de usuário é proprietária do pacote excluído.
  - For organization-scoped packages: You have admin permissions to the deleted package in the organization that owns the package.{% endif %}

Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

Uma vez restaurado o pacote, este usará o mesmo namespace de antes. Se o mesmo namespace não estiver disponível, você não poderá restaurar seu pacote. Neste cenário, para restaurar o pacote excluído, você deverá excluir o novo pacote que usa o namespace do pacote excluído primeiro.

### Restaurando um pacote de uma organização

You can restore a deleted package through your organization account settings, as long as the package was in one of your repositories{% ifversion fpt %} or had granular permissions and was scoped to your organization account{% endif %}.

Para revisar quem pode restaurar um pacote em uma organização, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**. ![Botão de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**. ![Restaurar botão de confirmação do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt %}

### Restaurar um pacote com escopo de conta de usuário

Você pode restaurar um pacote excluído por meio das configurações da sua conta de usuário, se o pacote estiver em um de seus repositórios ou escopo para sua conta de usuário. Para obter mais informações, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user_settings.access_settings %}
2. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**. ![Botão de restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**. ![Restaurar botão de confirmação do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Restaurando uma versão do pacote

Você pode restaurar uma versão do pacote a partir da página inicial do seu pacote. Para revisar quem pode restaurar um pacote, consulte "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

1. Acesse a página inicial do seu pacote.
2. À direita, clique em **Configurações do pacote**.
2. À esquerda, clique em **Gerenciar versões**.
3. No canto superior direito, use o menu suspenso "Versões" e selecione **Excluído**. ![Menu suspenso de versões que mostra a opção excluída](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Ao lado da versão excluída do pacote que você deseja restaurar, clique em **Restaurar**. ![Restaurar opção ao lado de uma versão excluída do pacote](/assets/images/help/package-registry/restore-package-version.png)
5. Para confirmar, clique em **Eu entendo as consequências, restaure esta versão.** ![Confirmar restauração da versão do pacote](/assets/images/help/package-registry/confirm-package-version-restoration.png)
