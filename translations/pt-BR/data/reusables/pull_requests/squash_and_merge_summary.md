Ao selecionar a opção **Combinação por squash e merge** em um pull request no {% data variables.product.product_location %}, os commits do pull request são combinados em um único commit. Em vez de ver todos os commits individuais de um contribuidor de um branch de tópico, os commits são combinados em um commit e mesclados no branch-padrão. Os pull requests com commits combinados são mesclados usando a [opção fast-forward](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Para realizar a combinação por squash e mesclar pull requests, você deve ter [permissões de gravação](/articles/repository-permission-levels-for-an-organization/) no repositório e o repositório deve [permitir o merge por combinação por squash](/articles/configuring-commit-squashing-for-pull-requests/).

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Você pode usar combinação por squash e merge para criar um histórico de Git mais simplificado no seu repositório. Os commits de trabalho em andamento são úteis ao trabalhar em um branch de recurso, mas não são necessariamente importantes para manter no histórico do Git. Se você fizer a combinação por squash desses commits em um commit enquanto faz merge com o branch-padrão, você certamente poderá manter as alterações originais com um histórico Git.
