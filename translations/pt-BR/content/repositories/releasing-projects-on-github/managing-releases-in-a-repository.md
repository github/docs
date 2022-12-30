---
title: Gerenciar versões em repositórios
intro: Você pode criar versões para empacotar e entregar iterações de um projeto para os usuários.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107482'
---
## Sobre o gerenciamento da versão

Você pode criar versões com notas sobre a versão, @mentions de colaboradores e links para arquivos binários, além de editar ou excluir as versões existentes. Você também pode criar, modificar e excluir versões usando a API de Versões. Para obter mais informações, confira "[Versões](/rest/releases/releases)" na documentação da API REST.

{% ifversion fpt or ghec %} Você também pode publicar uma ação de uma versão específica no {% data variables.product.prodname_marketplace %}. Para obter mais informações, confira "[Como publicar uma ação no {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)".

Você pode escolher se objetos {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, confira "[Como gerenciar objetos do {% data variables.large_files.product_name_short %} nos arquivos do repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}

## Criando uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Clique em **Criar rascunho de uma nova versão**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Clique em **Escolher uma tag**, digite um número de versão para o lançamento e pressione **Enter**. Como alternativa, selecione um tag existente.

   ![Insira uma tag](/assets/images/help/releases/releases-tag-create.png)
1. Se estiver criando uma marca, clique em **Criar marca**.

   ![Captura de tela da confirmação de que você deseja criar uma tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. Se você criou uma nova tag, use o menu suspenso para selecionar o branch que contém o projeto que você deseja liberar.

   
   ![Captura de tela da lista suspensa para escolher um branch](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. Digite um título e uma descrição para a sua versão.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Se você mencionar alguém com @mention na descrição, a versão publicada incluirá uma seção **Colaboradores** com uma lista dos avatares de todos os usuários mencionados.
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} Como alternativa, você pode gerar automaticamente as notas sobre a versão clicando em {% ifversion previous-release-tag %}**Gerar notas sobre a versão**{% else %}**Gerar automaticamente as notas sobre a versão**{% endif %}.{% endif %}{% ifversion previous-release-tag %}

   ![Captura de tela da descrição das versões](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Captura de tela da descrição das versões](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários.

   ![GIF animado do fornecimento de um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)

1. Para notificar os usuários de que a versão não está pronta para produção e pode ser instável, selecione **Este é um pré-lançamento**.

   ![Captura de tela da caixa de seleção para marcar uma versão como pré-lançamento](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. Opcionalmente, você pode selecionar **Definir como versão mais recente**. Se você não selecionar essa opção, o rótulo de última versão será atribuído automaticamente com base no controle de versão semântico.

   ![Captura de tela da caixa de seleção para marcar uma versão como último lançamento](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. Opcionalmente, se as {% data variables.product.prodname_discussions %} estiverem habilitadas no repositório, selecione **Criar uma discussão para esta versão** e selecione o menu suspenso **Categoria** e clique em uma categoria para ver a discussão sobre a versão.

   ![Captura de tela da caixa de seleção usada para criar uma discussão sobre a versão e um menu suspenso usado para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. Se estiver pronto para tornar sua versão pública, clique em **Publicar versão**. Para trabalhar na versão posteriormente, clique em **Salvar rascunho**.
   ![Botões Publicar versão e Criar rascunho de versão](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %} Depois, você poderá ver as versões publicadas ou de rascunho no feed de versões do repositório. Para obter mais informações, confira "[Captura de tela de versões e tags do repositório](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)".

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %} ![Versão publicada com colaboradores mencionados com @mentioned](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![Versão publicada com colaboradores mencionados com @mentioned](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Para criar uma versão, use o subcomando `gh release create`. Substitua `tag` pela marca desejada para a versão.

   ```shell
   gh release create TAG
   ```

2. Siga as instruções interativas. Como alternativa, você pode especificar argumentos para pular essas instruções. Para obter mais informações sobre os possíveis argumentos, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Por exemplo, este comando cria uma pré-versão com o título e observações especificadas.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} Se você mencionar com @mention qualquer usuário do {% data variables.product.product_name %} nas notas, a versão publicada no {% data variables.product.prodname_dotcom_the_website %} incluirá uma seção **Colaboradores** com uma lista de avatares de todos os usuários mencionados.
{% endif %}

{% endcli %}

## Editar uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. No lado direito da página, ao lado da versão que deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}.
  ![Editar uma versão](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. No lado direito da página, ao lado da versão que deseja editar, clique em **Editar versão**.
  ![Editar uma versão](/assets/images/help/releases/edit-release.png) {% endif %}
4. Edite os detalhes da versão no formulário e clique em **Atualizar versão**.{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Se você adicionar ou remover as @mentions de usuários do GitHub na descrição, esses usuários serão adicionados à lista de avatares ou removidos dela na seção **Colaboradores** da versão.{% endif %} ![Atualizar uma versão](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

As versões não podem ser editadas com {% data variables.product.prodname_cli %}.

{% endcli %}

## Excluir uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. No lado direito da página, ao lado da versão que você deseja excluir, clique em {% octicon "trash" aria-label="The trash icon" %}.
  ![Excluir uma versão](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. Clique no nome da versão que você deseja excluir.
  ![Link para exibição da versão](/assets/images/help/releases/release-name-link.png)
4. No canto superior direito da página, clique em **Excluir**.
  ![Botão Excluir versão](/assets/images/help/releases/delete-release.png) {% endif %}
5. Clique em **Excluir esta versão**.
  ![Confirmar a exclusão da versão](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Para excluir uma versão, use o subcomando `gh release delete`. Substitua `tag` pela marca da versão a ser excluída. Use o sinalizador `-y` para ignorar a confirmação.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
