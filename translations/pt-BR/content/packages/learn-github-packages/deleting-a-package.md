---
title: Excluir um pacote
intro: 'Você pode excluir a versão de um {% if currentVersion != "github-ae@latest" %}privado{% endif %} pacote usando GraphQL ou em {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  enterprise-server: '>=2.22 <3.1'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% if currentVersion != "github-ae@latest" %}No momento, {% data variables.product.prodname_registry %} em {% data variables.product.product_location %} não é compatível com a exclusão de pacotes públicos.{% endif %}

Você só pode excluir uma versão específica de um pacote {% if currentVersion != "github-ae@latest" %}privado {% endif %}em {% data variables.product.product_name %} ou com a API do GraphQL. Para impedir que um pacote {% if currentVersion ! "github-ae@latest" %}privado inteiro {% endif %}apareça em {% data variables.product.product_name %}, você precisa primeiro excluir todas as versões do pacote.

### Excluir uma versão de um pacote {% if currentVersion != "github-ae@latest" %}privado {% endif %}em {% data variables.product.product_name %}

Para excluir uma {% if currentVersion != "github-ae@latest" %}versão do pacote privado {% endif %}, é necessário ter permissões de administrador no repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. Clique no nome do pacote que você deseja excluir. ![Nome do pacote](/assets/images/help/package-registry/select-pkg-cloud.png)
4. À direita, use o menu suspenso **Editar pacote** e selecione "Gerenciar versões". ![Nome do pacote](/assets/images/help/package-registry/manage-versions.png)
5. À direita da versão que você deseja excluir, clique em **Excluir**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-package-deletion.png)

### Excluindo uma versão de um {% if currentVersion != "github-ae@latest" %}pacote privado {% endif %}com o GraphQL

Use a mutação `deletePackageVersion` na API do GraphQL. Você deve usar um token com os escopos `read:packages`, `delete:packages` e `repo`. For more information about tokens, see "[About {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#about-tokens)."

Aqui está um exemplo de comando cURL para excluir uma versão de pacote com o ID de versão do pacote `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`, usando um token de acesso pessoal.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos os pacotes {% if currentVersion ! "github-ae@latest" %}privados {% endif %}que você publicou em {% data variables.product.prodname_registry %}, junto com os IDs de versão dos pacotes, você pode usar a conexão dos `pacotes` por meio do objeto do `repositório`. Você vai precisar de um token com os escopos `read:packages` e `repo`. You will need a token with the `read:packages` and `repo` scopes.

Para obter mais informações sobre a mutação `deletePackageVersion`, consulte "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Você não pode excluir um pacote inteiro, mas se excluir todas as versões de um pacote, o pacote não será mais exibido em {% data variables.product.product_name %}.
