---
title: Excluir um pacote
intro: 'Você pode excluir uma versão de um pacote privado usando o GraphQL ou no {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a exclusão de imagem de contêiner

Deleting a version of a private package on {% data variables.product.prodname_dotcom %}

{% endif %}

### Sobre a exclusão de pacotes privados

Você só pode excluir uma versão específica de um pacote privado no {% data variables.product.product_name %} ou com a API do GraphQL. Para impedir que um pacote privado inteiro apareça no {% data variables.product.product_name %}, você deve primeiro excluir todas as versões do pacote.

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a exclusão de pacotes públicos

Para evitar quebrar projetos que podem depender dos seus pacotes, você não pode excluir um pacote público inteiro ou versões específicas de um pacote público.

Em circunstâncias especiais, como por razões legais ou para estar de acordo com os padrões do RGPD, você pode pedir que {% data variables.contact.github_support %} exclua um pacote público para você, usando [nosso formulário de contato](https://github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Package%20Registry).

{% else %}

At this time, {% data variables.product.prodname_registry %} on {% data variables.product.product_location %} does not support deleting public packages.

{% endif %}

### Versões e nomes de pacotes reservados

{% data reusables.package_registry.package-immutability %}

### Excluir uma versão de um pacote privado no {% data variables.product.product_name %}

Para excluir uma versão privada, você deve ter permissões de administrador no repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. Clique no nome do pacote que você deseja excluir. ![Nome do pacote](/assets/images/help/package-registry/select-pkg-cloud.png)
4. À direita, use o menu suspenso **Editar pacote** e selecione "Gerenciar versões". ![Nome do pacote](/assets/images/help/package-registry/manage-versions.png)
5. À direita da versão que você deseja excluir, clique em **Excluir**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-package-deletion.png)

### Excluir uma versão de um pacote privado com o GraphQL

Use a mutação `deletePackageVersion` na API do GraphQL. Você deve usar um token com os escopos `read:packages`, `delete:packages` e `repo`. For more information about tokens, see "[About {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#about-tokens)."

Aqui está um exemplo de comando cURL para excluir uma versão de pacote com o ID de versão do pacote `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`, usando um token de acesso pessoal.

{% if currentVersion == "free-pro-team@latest" %}
```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
https://api.github.com/graphql
```

{% else %}

```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% endif %}

To find all of the private packages you have published to {% data variables.product.prodname_registry %}, along with the version IDs for the packages, you can use the `registryPackagesForQuery` connection. Você vai precisar de um token com os escopos `read:packages` e `repo`. You will need a token with the `read:packages` and `repo` scopes.

Para obter mais informações sobre a mutação `deletePackageVersion`, consulte "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

Você não pode excluir um pacote inteiro, mas se excluir todas as versões de um pacote, o pacote não será mais exibido em {% data variables.product.product_name %}
