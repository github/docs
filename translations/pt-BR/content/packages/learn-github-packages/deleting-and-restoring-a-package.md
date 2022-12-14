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
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: d1e8164744d3481099824ebe173435aef6b91662
ms.sourcegitcommit: d243bbae4ce3c849695b5bc9221e705ee5a4a64f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/12/2022
ms.locfileid: '147080813'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## <a name="package-deletion-and-restoration-support-on--data-variablesproductprodname_dotcom-"></a>Exclusão de pacote e suporte de restauração em {% data variables.product.prodname_dotcom %}

Em {% data variables.product.prodname_dotcom %} se você tiver o acesso necessário, você poderá excluir:
- um pacote privado inteiro
- um pacote público inteiro, se não houver mais de 5.000 downloads de qualquer versão do pacote
- uma versão específica de um pacote privado
- uma versão específica de um pacote público, se a versão do pacote não tiver mais de 5.000 downloads

{% note %}

**Observação**:
- Você não pode excluir um pacote público se uma versão do pacote tiver mais de 5.000 downloads. Nesse cenário, entre em contato com o [suporte do GitHub](https://support.github.com/contact?tags=docs-packages) para obter mais assistência.
- Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.

{% endnote %}

Em {% data variables.product.prodname_dotcom %}, você também pode restaurar um pacote inteiro ou uma versão do pacote, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace do pacote ainda estiver disponível e não for usado para um novo pacote.

{% ifversion fpt or ghec or ghes %}
## <a name="packages-api-support"></a>Suporte de API de pacotes

{% ifversion fpt or ghec %}

Você pode usar a API REST para gerenciar seus pacotes. Para obter mais informações, confira a "[API {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

Para pacotes que herdam suas permissões e acesso dos repositórios, você pode usar o GraphQL para excluir uma versão específica de pacotes.{% ifversion fpt or ghec %} A API do GraphQL de {% data variables.product.prodname_registry %} não é compatível com contêineres ou imagens Docker que usam o namespace `https://ghcr.io/OWNER/PACKAGE-NAME`.{% endif %} Para obter mais informações sobre o suporte do GraphQL, confira "[Como excluir uma versão de um pacote com escopo de repositório com o GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql)".

{% endif %}

## <a name="required-permissions-to-delete-or-restore-a-package"></a>Permissões necessárias para excluir ou restaurar um pacote

Para pacotes que herdam as permissões de acesso dos repositórios, é possível excluir um pacote se você tiver permissões de administrador para o repositório.

Os pacotes com escopo de repositório em {% data variables.product.prodname_registry %} incluem estes pacotes:
- npm
- RubyGems
- Maven
- Gradle
- NuGet {% ifversion not fpt or ghec %}- imagens do Docker em `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`{% endif %}

{% ifversion fpt or ghec %}

Para excluir um pacote que tem permissões granulares separadas de um repositório, como imagens de contêiner armazenadas em `https://ghcr.io/OWNER/PACKAGE-NAME`, você deverá ter acesso de administrador ao pacote.
Para obter mais informações, confira "[Sobre as permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% endif %}

## <a name="deleting-a-package-version"></a>Excluir a versão de um pacote

### <a name="deleting-a-version-of-a-repository-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluir uma versão de um pacote com escopo de repositório em {% data variables.product.prodname_dotcom %}

Para excluir uma versão de um pacote com escopo do repositório, você deve ter permissões de administrador para o repositório ao qual o pacote pertence. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### <a name="deleting-a-version-of-a-repository-scoped-package-with-graphql"></a>Excluir uma versão de um pacote com escopo do repositório com o GraphQL

Para pacotes que herdam suas permissões e acesso dos repositórios, você pode usar o GraphQL para excluir uma versão específica de pacotes.

{% ifversion fpt or ghec %} Para contêineres ou imagens do Docker em `ghcr.io`, o GraphQL não tem suporte, mas você pode usar a API REST. Para obter mais informações, confira a "[API {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

Use a mutação `deletePackageVersion` na API do GraphQL. Você precisa usar um token com os escopos `read:packages`, `delete:packages` e `repo`. Para obter mais informações sobre tokens, confira "[Sobre o {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".

O exemplo a seguir demonstra como excluir uma versão do pacote usando um `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos os pacotes privados que você publicou em {% data variables.product.prodname_registry %}, junto com os IDs de versão dos pacotes, você pode usar a conexão dos `packages` através do objeto `repository`. Você precisará de um token com os escopos `read:packages` e `repo`. Para obter mais informações, confira a conexão dos [`packages`](/graphql/reference/objects#repository) ou da interface do [`PackageOwner`](/graphql/reference/interfaces#packageowner).

Para obter mais informações sobre a mutação `deletePackageVersion`, confira "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Você não pode excluir diretamente um pacote inteiro usando o GraphQL, mas se você excluir todas as versões de um pacote, o pacote não será mostrado em {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}
### <a name="deleting-a-version-of-a-user-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluindo uma versão de pacote com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para excluir uma versão específica de um pacote com escopo de usuário em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr.io`, siga estas etapas. Para excluir um pacote inteiro, confira "[Como excluir um pacote com escopo do usuário inteiro em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### <a name="deleting-a-version-of-an-organization-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluindo a versão de um pacote com escopo da organização em {% data variables.product.prodname_dotcom %}

Para excluir uma versão específica de um pacote com escopo de organização em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr.io`, siga estas etapas.
Para excluir um pacote inteiro, confira "[Como excluir um pacote com escopo da organização inteiro em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, confira "[Permissões necessárias para excluir ou restaurar um pacote](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## <a name="deleting-an-entire-package"></a>Excluindo um pacote inteiro

### <a name="deleting-an-entire-repository-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluindo um pacote com escopo de repositório completo em {% data variables.product.prodname_dotcom %}

Para excluir todo um pacote com escopo do repositório, você deve ter permissões de administrador no repositório que possui o pacote. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. Em "Zona de Perigo", clique em **Excluir este pacote**.
5. Para confirmar, revise a mensagem de confirmação, digite o nome do seu pacote e clique em **Eu compreendo, exclua este pacote.** 
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### <a name="deleting-an-entire-user-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluir um pacote inteiro com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**.
  ![Opção de menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo", clique em **Excluir este pacote**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua este pacote**.
  ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### <a name="deleting-an-entire-organization-scoped-package-on--data-variablesproductprodname_dotcom-"></a>Excluir um pacote inteiro com escopo da organização em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**.
  ![Opção de menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo", clique em **Excluir este pacote**.
  ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua este pacote**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## <a name="restoring-packages"></a>Restaurando pacotes

Você pode restaurar um pacote ou versão excluído, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace e versão do pacote ainda estiverem disponíveis e não forem reutilizados para um novo pacote.

Por exemplo, se você tiver um pacote RubyGems excluído chamado `octo-package` com escopo no repositório `octo-repo-owner/octo-repo`, você só poderá restaurar o pacote se o namespace `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` do pacote ainda estiver disponível e 30 dias ainda não tiverem se passado.

{% ifversion fpt or ghec %} Para restaurar um pacote excluído, você também deve atender a um destes requisitos de permissão:
  - Para pacotes com escopo de repositório: você tem permissões de administrador no repositório ao qual o pacote excluído pertence.{% ifversion fpt or ghec %}
  - Para pacotes com escopo de conta de usuário: sua conta pessoal é proprietária do pacote excluído.
  - Para pacotes com escopo da organização: você tem permissões de administrador para o pacote excluído na organização que é proprietária do pacote.{% endif %} {% endif %}

{% ifversion ghae or ghes %} Para excluir um pacote, você também deve ter permissões de administrador no repositório que possui o pacote excluído.
{% endif %}

Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

Uma vez restaurado o pacote, este usará o mesmo namespace de antes. Se o mesmo namespace não estiver disponível, você não poderá restaurar seu pacote. Neste cenário, para restaurar o pacote excluído, você deverá excluir o novo pacote que usa o namespace do pacote excluído primeiro.

### <a name="restoring-a-package-in-an-organization"></a>Restaurando um pacote de uma organização

 Você pode restaurar um pacote excluído por meio das configurações da conta da sua organização, desde que o pacote esteja em um repositório pertencente à organização{% ifversion fpt or ghec %} ou tenha permissões granulares e escopo na conta da sua organização{% endif %}.

Para revisar quem pode restaurar um pacote em uma organização, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**.
  ![Botão Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**.
  ![Botão de confirmação de restauração do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### <a name="restoring-a-user-account-scoped-package"></a>Restaurar um pacote com escopo de conta de usuário

Você pode restaurar um pacote excluído por meio das configurações da sua conta pessoal, se o pacote estiver em um de seus repositórios ou escopo para sua conta pessoal. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user-settings.access_settings %}
2. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**.
  ![Botão Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**.
  ![Botão de confirmação de restauração do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### <a name="restoring-a-package-version"></a>Restaurando uma versão do pacote

Você pode restaurar uma versão do pacote a partir da página inicial do seu pacote. Para revisar quem pode restaurar um pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

1. Acesse a página inicial do seu pacote.
2. À direita, clique em **Configurações do pacote**.
2. À esquerda, clique em **Gerenciar versões**.
3. No canto superior direito, use o menu suspenso "Versões" e selecione **Excluído**.
  ![Menu suspenso de versões que mostra a opção excluída](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Ao lado da versão do pacote excluído que deseja restaurar, clique em **Restaurar**.
  ![Opção Restaurar ao lado de uma versão excluída do pacote](/assets/images/help/package-registry/restore-package-version.png)
5. Para confirmar, clique em **Eu entendo as consequências, restaure esta versão.** 
  ![ Confirmar a restauração da versão do pacote](/assets/images/help/package-registry/confirm-package-version-restoration.png)
