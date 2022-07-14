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
shortTitle: Gerenciar versões
---

## Sobre o gerenciamento da versão

Você pode criar novas versões com observações de versões, @menções de contribuidores e links para arquivos binários, bem como editar ou excluir versões existentes.

{% ifversion fpt or ghec %}
Você também pode publicar uma ação de uma versão específica em {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "[Publicar uma ação no {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)"

Você pode escolher se objetos {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, consulte "

[Gerenciando {% data variables.large_files.product_name_short %} objetos nos arquivos de seu repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)". </p> 

{% endif %}



## Criando uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. Clique em **Draft a new release** (Rascunhar uma nova versão).
   
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}

4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}Click **Escolha uma tag**, digite{% else %}Digite{% endif %} o número de uma versão para a sua versão{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %} e pressione **Enter**{% endif %}. Como alternativa, selecione um tag existente.
   
   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Insira uma tag](/assets/images/help/releases/releases-tag-create.png)

5. Se você estiver criando uma nova tag, clique em **Criar nova tag**.
   
   ![Confirme que você deseja criar uma nova tag](/assets/images/help/releases/releases-tag-create-confirm.png) 
   
   {% else %}
   
   ![Versão com tag das versões](/assets/images/enterprise/releases/releases-tag-version.png) 
   
   {% endif %}

5. Se você criou uma nova tag, use o menu suspenso para selecionar o branch que contém o projeto que você deseja liberar.
   
   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Escolha um branch](/assets/images/help/releases/releases-choose-branch.png) 
   
   {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png){% endif %}
   
   
   
   {%- data reusables.releases.previous-release-tag %}

6. Digite um título e uma descrição para a sua versão. 
   
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}

   
   Se você @mencionar qualquer usuário de {% data variables.product.product_name %} na descrição, a versão publicada incluirá uma seção de **Colaboradores** com uma lista de avatar de todos os usuários mencionados. 
   
   {%- endif %}
   
   
   
   {% ifversion fpt or ghec or ghes > 3.3 %} Como alternativa, você pode gerar as suas observações de versão automaticamente, clicando em {% ifversion previous-release-tag %}**Gerar observações de versão**{% else %}**Gerar observações de versão automaticamente**{% endif %}.{% endif %}{% ifversion previous-release-tag %} 
   
   ![Descrição das versões](/assets/images/help/releases/releases_description_auto.png){% else %}
![Releases description](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários. ![Fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)

2. Para notificar os usuários que a versão não está pronta para produção e pode ser instável, selecione **This is a pre-release** (Esta é uma versão prévia). ![Caixa de seleção para marcar uma versão como pré-versão](/assets/images/help/releases/prerelease_checkbox.png) 
   
   {%- ifversion fpt or ghec %}

1. Opcionalmente, se {% data variables.product.prodname_discussions %} estiver habilitado no repositório, selecione **Criar uma discussão para esta versão** e, em seguida, selecione o menu suspenso **Categoria** e clique em uma categoria para a discussão de da versão. ![Caixa de seleção para criar uma discussão de versão e menu suspenso para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png) 
   
   {%- endif %}

9. Se estiver pronto para tornar pública a sua versão, clique em **Publish release** (Publicar versão). Para trabalhar na versão posteriormente, clique em **Save draft** (Salvar rascunho). ![Botões Publish release (Publicar versão) e Draft release (Rascunhar versão)](/assets/images/help/releases/release_buttons.png)
   
   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}

   
   Você pode visualizar as suas versões publicadas ou rascunhos no feed de versões do seu repositório. Para obter mais informações, consulte "[Visualizando versões e tags do seu repositório](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags).
   
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}

   
   ![Versão publicada com contribuidores @mencionados](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) 
   
   {% else %}
   
   ![Versão publicada com contribuidores @mencionados](/assets/images/help/releases/releases-overview-with-contributors.png) 
   
   {% endif %}
   
   
   
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Para criar uma versão, use o subcomando `gh release create`. Substitua `tag` pela tag desejada para a versão. 
   
   

   ```shell
   gh release create <em>tag</em>
   ```


2. Siga as instruções interativas. Como alternativa, você pode especificar argumentos para pular essas instruções. Para obter mais informações sobre possíveis argumentos, consulte [o manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Por exemplo, este comando cria uma pré-versão com o título e observações especificadas. 
   
   

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```


{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %}


Se você @mencionar qualquer usuário de {% data variables.product.product_name %} nas observações, a versão publicada em {% data variables.product.prodname_dotcom_the_website %} incluirá uma seção **Colaboradores** com uma lista de avatar de todos os usuários mencionados. 

{% endif %}

{% endcli %}



## Editar uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}



{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}

3. No lado direito da página, ao lado da versão que deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}. ![Editar uma versão](/assets/images/help/releases/edit-release-pencil.png) 
   
   {% else %}

3. No lado direito da página, ao lado da versão que você deseja editar, clique em **Editar versão**. ![Editar uma versão](/assets/images/help/releases/edit-release.png) 
   
   {% endif %}

4. Edite as informações da versão no formulário e, em seguida, clique em **Atualizar versão**.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} Se você adicionar ou remover quaisquer @menções de usuários do GitHub na descrição, esses usuários serão adicionados ou removidos da lista de avatares na seção **Colaboradores** da versão.{% endif %} ![Atualizar uma versão](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

As versões não podem ser editadas com {% data variables.product.prodname_cli %}.

{% endcli %}



## Excluir uma versão

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}



{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}

3. No lado direito da página, ao lado da versão que você deseja excluir, clique em {% octicon "trash" aria-label="The trash icon" %}. ![Excluir uma versão](/assets/images/help/releases/delete-release-trash.png) 
   
   {% else %}

3. Clique no nome da versão que você deseja excluir.![Link para visualizar versão](/assets/images/help/releases/release-name-link.png)

4. No canto superior direito da página, clique em **Delete** (Excluir). ![Botão de exclusão de versão](/assets/images/help/releases/delete-release.png) 
   
   {% endif %}

5. Clique em **Excluir esta versão**. ![Confirmar exclusão da versão](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Para excluir uma versão, use o subcomando `gh release delete`. Substitua `tag` pela tag da versão a ser excluída. Use o sinalizador `-y` para ignorar a confirmação. 
   

   ```shell
   gh release delete <em>tag</em> -y
   ```


{% endcli %}
