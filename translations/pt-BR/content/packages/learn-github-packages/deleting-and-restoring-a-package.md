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
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193070'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Exclusão de pacote e suporte de restauração em {% data variables.product.prodname_dotcom %}

Em {% data variables.product.prodname_dotcom %} se você tiver o acesso necessário, você poderá excluir:
- um pacote privado inteiro
- um pacote público inteiro, se não houver mais de 5.000 downloads de qualquer versão do pacote
- uma versão específica de um pacote privado
- uma versão específica de um pacote
 público, se a versão do pacote não tiver mais de 5.000 downloads

{% note %}

**Observação**:
- Você não pode excluir um pacote público se uma versão do pacote tiver mais de 5,000 downloads. Nesse cenário, entre em contato com o [suporte do GitHub](https://support.github.com/contact?tags=docs-packages) para obter mais assistência.
- Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.

{% endnote %}

Em {% data variables.product.prodname_dotcom %}, você também pode restaurar um pacote inteiro ou uma versão do pacote, se:
- Você restaurar o pacote dentro de 30 dias após a exclusão.
- O mesmo namespace do pacote ainda estiver disponível e não for usado para um novo pacote.

## Suporte de API de pacotes

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

Você pode usar a API REST para gerenciar seus pacotes. Para obter mais informações, confira a "[API {% data variables.product.prodname_registry %}](/rest/reference/packages)".

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## Permissões necessárias para excluir ou restaurar um pacote

{% ifversion packages-registries-v2 %} Com registros que oferecem suporte a permissões granulares, você pode optar por permitir que os pacotes tenham como escopo um usuário ou uma organização ou sejam vinculados a um repositório.

Para excluir um pacote com permissões granulares separadas de um repositório, como imagens de contêiner armazenadas em {% ifversion ghes %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME`{% else %}`https://ghcr.io/OWNER/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} ou pacotes armazenados em `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`{% endif %}, você deve ter acesso de administrador ao pacote. Para obter mais informações, confira "[Sobre as permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

Para pacotes que herdam as permissões de acesso dos repositórios, é possível excluir um pacote se você tiver permissões de administrador para o repositório.

Alguns registros **só** dão suporte a pacotes com escopo de repositório. Para obter uma lista desses registros, confira "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

{% else %}

Você poderá excluir um pacote se tiver permissões de administrador para o repositório no qual o pacote é publicado.

{% endif %}

## Excluir a versão de um pacote

### Como excluir uma versão de um pacote {% endif %} com escopo de repositório {% ifversion packages-registries-v2 %} no {% data variables.product.prodname_dotcom %}

Para excluir uma versão de um pacote {% endif %} com escopo de repositório {% ifversion packages-registries-v2 %}, você deve ter permissões de administrador para o repositório que possui o pacote. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### Como excluir uma versão de um pacote {% endif %} com escopo de repositório {% ifversion packages-registries-v2 %} com GraphQL

{% data reusables.package_registry.about-graphql-support %}{% ifversion fpt or ghec %} Para obter informações sobre como usar a API REST em vez disso, confira a "[API {% data variables.product.prodname_registry %} ](/rest/reference/packages)."{% endif %}

Use a mutação `deletePackageVersion` na API do GraphQL. Você deve usar um {% data variables.product.pat_v1 %} com os escopos `read:packages`, `delete:packages` e `repo`. Para obter mais informações sobre {% data variables.product.pat_v1_plural %}, confira "[Sobre o {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)."

O exemplo a seguir demonstra como excluir uma versão do pacote usando um `packageVersionId` de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos os pacotes privados que você publicou em {% data variables.product.prodname_registry %}, junto com os IDs de versão dos pacotes, você pode usar a conexão dos `packages` através do objeto `repository`. Você precisará de um {% data variables.product.pat_v1 %} com os escopos `read:packages` e `repo`. Para obter mais informações, confira a conexão dos [`packages`](/graphql/reference/objects#repository) ou da interface do [`PackageOwner`](/graphql/reference/interfaces#packageowner).

Para obter mais informações sobre a mutação `deletePackageVersion`, confira "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Você não pode excluir diretamente um pacote inteiro usando o GraphQL, mas se você excluir todas as versões de um pacote, o pacote não será mostrado em {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}
### Excluindo uma versão de pacote com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para excluir uma versão específica de um pacote com escopo de usuário em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr.io`, siga estas etapas. Para excluir um pacote inteiro, confira "[Como excluir um pacote com escopo do usuário inteiro em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluindo a versão de um pacote com escopo da organização em {% data variables.product.prodname_dotcom %}

Para excluir uma versão específica de um pacote com escopo de organização em {% data variables.product.prodname_dotcom %}, como para uma imagem Docker em `ghcr.io`, siga estas etapas.
Para excluir um pacote inteiro, confira "[Como excluir um pacote com escopo da organização inteiro em {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)".

Para revisar quem pode excluir uma versão de pacote, confira "[Permissões necessárias para excluir ou restaurar um pacote](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua esta versão**.
  ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## Excluindo um pacote inteiro

### Excluindo um pacote com escopo de repositório completo em {% data variables.product.prodname_dotcom %}

Para excluir todo um pacote com escopo do repositório, você deve ter permissões de administrador no repositório que possui o pacote. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. Em "Zona de Perigo", clique em **Excluir este pacote**.
5. Para confirmar, revise a mensagem de confirmação, digite o nome do seu pacote e clique em **Eu compreendo, exclua este pacote.** 
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### Excluir um pacote inteiro com escopo do usuário em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**.
  ![Opção de menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo", clique em **Excluir este pacote**.
  ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua este pacote**.
  ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Excluir um pacote inteiro com escopo da organização em {% data variables.product.prodname_dotcom %}

Para revisar quem pode excluir um pacote, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. À esquerda, clique em **Opções**.
  ![Opção de menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo", clique em **Excluir este pacote**.
  ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências, exclua este pacote**.
  ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## Restaurando pacotes

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

### Restaurando um pacote de uma organização

 Você pode restaurar um pacote excluído por meio das configurações da conta da sua organização, desde que o pacote esteja em um repositório pertencente à organização{% ifversion fpt or ghec %} ou tenha permissões granulares e escopo na conta da sua organização{% endif %}.

Para revisar quem pode restaurar um pacote em uma organização, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**.
  ![Botão Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**.
  ![Botão de confirmação de restauração do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### Restaurar um pacote com escopo de conta de usuário

Você pode restaurar um pacote excluído por meio das configurações da sua conta pessoal, se o pacote estiver em um de seus repositórios ou escopo para sua conta pessoal. Para obter mais informações, confira "[Permissões necessárias](#required-permissions-to-delete-or-restore-a-package)".

{% data reusables.user-settings.access_settings %}
2. À esquerda, clique em **Pacotes**.
4. Em "Pacotes excluídos", ao lado do pacote que você deseja restaurar, clique em **Restaurar**.
  ![Botão Restaurar](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Para confirmar, digite o nome do pacote e clique em **Eu entendo as consequências, restaure este pacote**.
  ![Botão de confirmação de restauração do pacote](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Restaurando uma versão do pacote

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
