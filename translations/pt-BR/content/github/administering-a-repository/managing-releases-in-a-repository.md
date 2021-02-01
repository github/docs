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
permissions: 'Colaboradores do repositório e pessoas com acesso de gravação a um repositório podem criar, editar e excluir uma versão.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion ver_gt "github-ae@latest" %}

### Sobre o gerenciamento da versão

{% if currentVersion == "free-pro-team@latest" %}
Você também pode publicar uma ação a partir de uma versão específica em {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publicar uma ação no {% data variables.product.prodname_marketplace %}</a>"
{% endif %}
Você pode escolher se

{% data variables.large_files.product_name_long %} os objetos de ({% data variables.large_files.product_name_short %}) estão incluídos nos arquivos ZIP e tarballs que {% data variables.product.product_name %} cria para cada versão. Para obter mais informações, consulte "
[Gerenciando {% data variables.large_files.product_name_short %} objetos nos arquivos de seu repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)". </p> 

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}



{% tip %}

**Dica**: Você também pode gerenciar as versões usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`versão gh`](https://cli.github.com/manual/gh_release)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}



{% endif %}



### Criando uma versão

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. Clique em **Draft a new release** (Rascunhar uma nova versão). ![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft_release_button.png)

4. Digite um número para sua versão. As versões se baseiam nas [tags do Git](https://git-scm.com/book/en/Git-Basics-Tagging). É recomendável nomear tags adequadas ao [controle de versão semântico](http://semver.org/). ![Versão com tag das versões](/assets/images/help/releases/releases-tag-version.png)

5. Use o menu suspenso para selecionar o branch que contém o projeto que você deseja lançar. ![Branch com tag das versões](/assets/images/help/releases/releases-tag-branch.png)

6. Digite um título e uma descrição para a sua versão. ![Descrição das versões](/assets/images/help/releases/releases_description.png)

7. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários. ![Fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)

8. Para notificar os usuários que a versão não está pronta para produção e pode ser instável, selecione **This is a pre-release** (Esta é uma versão prévia). ![Caixa de seleção para marcar uma versão como pré-versão](/assets/images/help/releases/prerelease_checkbox.png)

9. Se estiver pronto para tornar pública a sua versão, clique em **Publish release** (Publicar versão). Para trabalhar na versão posteriormente, clique em **Save draft** (Salvar rascunho). ![Botões Publish release (Publicar versão) e Draft release (Rascunhar versão)](/assets/images/help/releases/release_buttons.png)

Você também pode criar automaticamente uma versão a partir da linha de comando ou em um script. Para obter mais informações, consulte "[Versões](/rest/reference/repos/#create-a-release)".



### Editar uma versão

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. No lado direito da página, ao lado da versão que você deseja editar, clique em **Editar versão**. ![Editar uma versão](/assets/images/help/releases/edit-release.png)

4. Edite os detalhes para a versão no formulário e, em seguida, clique em **Update release** (Atualizar versão). ![Atualizar uma versão](/assets/images/help/releases/update-release.png)



### Excluir uma versão

Você deve remover todos os arquivos binários anexados a uma versão antes de poder apagar uma versão.

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.releases %}

3. Clique no nome da versão que você deseja excluir.![Link para visualizar versão](/assets/images/help/releases/release-name-link.png)

4. No canto superior direito da página, clique em **Delete** (Excluir). ![Botão de exclusão de versão](/assets/images/help/releases/delete-release.png)

5. Clique em **Excluir esta versão**. ![Confirmar exclusão da versão](/assets/images/help/releases/confirm-delete-release.png)
