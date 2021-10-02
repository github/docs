---
title: Gerenciar versões em repositórios
intro: Você pode criar versões para empacotar e entregar iterações de um projeto para os usuários.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
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
topics:
  - Repositories
shortTitle: Gerenciar versões
---

{% ifversion fpt or ghes > 3.0 or ghae %}

## Sobre o gerenciamento da versão

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt %}
Você também pode publicar uma ação a partir de uma versão específica em {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publicar uma ação no {% data variables.product.prodname_marketplace %}</a>"

Você pode escolher se objetos {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, consulte "

[Gerenciando {% data variables.large_files.product_name_short %} objetos nos arquivos de seu repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)". </p> 

{% endif %}



{% endif %}



## Criando uma versão

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. Clique em **Draft a new release** (Rascunhar uma nova versão). ![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft_release_button.png)

4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. 
   
   {% ifversion fpt %}
   
   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)

1. Click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png) 
   
   {% else %}
   
   ![Versão com tag das versões](/assets/images/enterprise/releases/releases-tag-version.png) 
   
   {% endif %}

5. Use o menu suspenso para selecionar o branch que contém o projeto que você deseja lançar. 
   
   {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png) 
   
   {% else %}![Branch com tag das versões](/assets/images/enterprise/releases/releases-tag-branch.png) 
   
   {% endif %}

6. Digite um título e uma descrição para a sua versão. 
   
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}

   
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users. 
   
   {%- endif %}
   
   ![Descrição das versões](/assets/images/help/releases/releases_description.png)

7. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários. ![Fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)

8. Para notificar os usuários que a versão não está pronta para produção e pode ser instável, selecione **This is a pre-release** (Esta é uma versão prévia). ![Caixa de seleção para marcar uma versão como pré-versão](/assets/images/help/releases/prerelease_checkbox.png) 
   
   {%- ifversion fpt %}

1. Opcionalmente, selecione **Criar uma discussão para esta versão** e, em seguida, selecione a **Categoria** no menu suspenso e clique em uma categoria para a discussão da versão. ![Caixa de seleção para criar uma discussão de versão e menu suspenso para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png) 
   
   {%- endif %}

9. Se estiver pronto para tornar pública a sua versão, clique em **Publish release** (Publicar versão). Para trabalhar na versão posteriormente, clique em **Save draft** (Salvar rascunho). ![Botões Publish release (Publicar versão) e Draft release (Rascunhar versão)](/assets/images/help/releases/release_buttons.png)
   
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}

   
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."
   
   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png) 
   
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release. 
   
   

   ```shell
   gh release create <em>tag</em>
   ```


2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes. 
   
   

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```


{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}


If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users. 

{% endif %}

{% endcli %}



## Editar uma versão

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. No lado direito da página, ao lado da versão que você deseja editar, clique em **Editar versão**. ![Editar uma versão](/assets/images/help/releases/edit-release.png)

4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![Atualizar uma versão](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}



## Excluir uma versão

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. Clique no nome da versão que você deseja excluir.![Link para visualizar versão](/assets/images/help/releases/release-name-link.png)

4. No canto superior direito da página, clique em **Delete** (Excluir). ![Botão de exclusão de versão](/assets/images/help/releases/delete-release.png)

5. Clique em **Excluir esta versão**. ![Confirmar exclusão da versão](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation. 
   

   ```shell
   gh release delete <em>tag</em> -y
   ```


{% endcli %}
