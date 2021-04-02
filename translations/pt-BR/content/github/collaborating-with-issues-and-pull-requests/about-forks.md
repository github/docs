---
title: Sobre bifurcações
intro: Uma bifurcação é uma cópia de um repositório que você gerencia. As bifurcações permitem fazer alterações em um projeto sem afetar o repositório original. Você pode fazer fetch de atualizações no repositório ou enviar alterações ao repositório original com pull requests.
redirect_from:
  - /articles/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Bifurcar um repositório é semelhante a copiar um repositório, com duas grandes diferenças:

* Você pode usar uma pull request para sugerir alterações da sua bifurcação user-owned para o repositório original, também conhecido como o repositório *upstream*.
* Você pode transmitir alterações do repositório upstream para a sua bifurcação local sincronizando a bifurcação com o repositório upstream.

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

Excluir uma bifurcação não exclui o repositório upstream original. Você pode fazer as alterações que desejar na sua bifurcação — adicionar colaboradores, renomear arquivos, gerar {% data variables.product.prodname_pages %}— sem efeito no original.{% if currentVersion == "free-pro-team@latest" %} Você não pode restaurar um repositório excluído. Para obter mais informações, consulte "[Restaurar um repositório excluído](/articles/restoring-a-deleted-repository)".{% endif %}

Em projetos de código aberto, as bifurcações são usadas com frequência para iterar ideias ou alterações antes que elas sejam oferecidas de volta ao repositório upstream. Ao fazer alterações em sua bifurcação user-owned e abrir uma pull request que compara seu trabalho com o repositório upstream, você pode dar a qualquer pessoa com acesso push ao repositório upstream permissão para fazer push das alterações no seu branch de pull requests. Isso agiliza a colaboração ao permitir que os mantenedores de repositório façam commits ou executem testes localmente em seu branch de pull requests a partir de uma bifurcação de propriedade do usuário antes de fazer merge. Você não pode dar permissões de push a uma bifurcação de propriedade de uma organização.

{% data reusables.repositories.private_forks_inherit_permissions %}

Se você desejar criar um novo repositório a partir do conteúdo de um repositório existente, mas não desejar mesclar suas alterações a montante no futuro, Você pode duplicar o repositório ou, se o repositório for um modelo, você poderá usar o repositório como um modelo. Para obter mais informações, consulte "[Duplicar um repositório](/articles/duplicating-a-repository)" e "[Criar um repositório de um modelo](/articles/creating-a-repository-from-a-template)".

### Leia mais

- "[Sobre modelos de desenvolvimento colaborativo](/articles/about-collaborative-development-models)"
- "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)"
- [Guias de código aberto](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
