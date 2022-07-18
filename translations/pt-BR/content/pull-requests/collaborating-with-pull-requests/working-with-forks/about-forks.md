---
title: Sobre bifurcações
intro: Uma bifurcação é uma cópia de um repositório que você gerencia. As bifurcações permitem fazer alterações em um projeto sem afetar o repositório original. Você pode fazer fetch de atualizações no repositório ou enviar alterações ao repositório original com pull requests.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

Bifurcar um repositório é semelhante a copiar um repositório, com duas grandes diferenças:

* Você pode usar um pull request para sugerir alterações na sua bifurcação pertencente ao usuário no repositório original na sua instância do GitHub, também conhecido como repositório *upstream*.
* Você pode transmitir alterações do repositório upstream para a sua bifurcação local sincronizando a bifurcação com o repositório upstream.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

Se você for um integrante de um {% data variables.product.prodname_emu_enterprise %}, existem outras restrições nos repositórios que você pode bifurcar. {% data reusables.enterprise-accounts.emu-forks %}Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

Excluir uma bifurcação não exclui o repositório upstream original. Você pode fazer quaisquer alterações que quiser em sua bifurcação — adicionar colaboradores, renomear arquivos, gerar {% data variables.product.prodname_pages %}— sem efeito no original.{% ifversion fpt or ghec %} Você não pode restaurar um repositório bifurcado excluído. Para obter mais informações, consulte "[Restaurar um repositório excluído](/articles/restoring-a-deleted-repository)".{% endif %}

Em projetos de código aberto, as bifurcações são usadas com frequência para iterar ideias ou alterações antes que elas sejam oferecidas de volta ao repositório upstream. Ao fazer alterações na bifurcação do usuário e abrir um pull request que compara seu trabalho com o repositório upstream, você pode dar a qualquer pessoa com acesso push à permissão do repositório upstream para fazer push das alterações para seu branch de pull request (incluindo a exclusão do branch). Isso agiliza a colaboração ao permitir que os mantenedores de repositório façam commits ou executem testes localmente em seu branch de pull requests a partir de uma bifurcação de propriedade do usuário antes de fazer merge. Você não pode dar permissões de push a uma bifurcação de propriedade de uma organização.

{% data reusables.repositories.private_forks_inherit_permissions %}

Se você deseja criar um novo repositório a partir do conteúdo de um repositório existente, mas não quer fazer merge das suas alterações no upstream posteriormente, você poderá duplicar o repositório ou, se o repositório for um modelo, você poderá usar o repositório como um modelo. Para obter mais informações, consulte "[Duplicando um repositório](/articles/duplicating-a-repository)" e "[Criando um repositório a partir de um modelo](/articles/creating-a-repository-from-a-template)".

## Leia mais

- "[Sobre modelos de desenvolvimento colaborativo](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)"
- "[Criar uma pull request de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [Guias de código aberto](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
