---
title: Transferir um repositório
intro: É possível transferir repositórios para outros usuários ou contas da organização.
redirect_from:
  - /articles/about-repository-transfers/
  - /move-a-repo/
  - /moving-a-repo/
  - /articles/what-is-transferred-with-a-repository/
  - /articles/what-is-transferred-with-a-repo/
  - /articles/how-to-transfer-a-repo/
  - /articles/how-to-transfer-a-repository/
  - /articles/transferring-a-repository-owned-by-your-personal-account/
  - /articles/transferring-a-repository-owned-by-your-organization/
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Sobre transferências de repositório

Quando você transfere um repositório para um novo proprietário, ele pode administrar imediatamente o conteúdo do repositório, além de problemas, pull requests, versões, quadros de projeto e configurações.

Prerequisites for repository transfers:
- When you transfer a repository that you own to another user account, the new owner will receive a confirmation email.{% ifversion fpt or ghec %} The confirmation email includes instructions for accepting the transfer. Se o novo proprietário não aceitar a transferência em um dia, o convite vai expirar.{% endif %}
- Para transferir um repositório que você possui para uma organização, é preciso ter permissão para criar um repositório na organização de destino.
- A conta de destino não deve ter um repositório com o mesmo nome ou uma bifurcação na mesma rede.
- O proprietário original do repositório é adicionado como colaborador no repositório transferido. Os outros colaboradores do repositório transferido permanecem intactos.
- Bifurcações privadas não podem ser transferidas.

{% ifversion fpt or ghec %}Se você transferir um repositório privado para uma conta de usuário ou organização {% data variables.product.prodname_free_user %}, o repositório perderá o acesso a recursos como branches protegidos e {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### O que é transferido com um repositório?

Quando você transfere um repositório, também são transferidos problemas, pull requests, wiki, estrelas e inspetores dele. Se o repositório transferido contiver webhooks, serviços, segredos ou chaves de implantação, eles continuarão associados mesmo depois que a transferência for concluída. Informações do Git sobre commits, inclusive contribuições, são preservadas. Além disso:

- Se o repositório transferido for uma bifurcação, continuará associado ao repositório upstream.
- Se o repositório transferido tiver alguma bifurcação, ela permanecerá associada ao repositório depois que a transferência for concluída.
- Se o repositório transferido usar {% data variables.large_files.product_name_long %}, todos os objetos {% data variables.large_files.product_name_short %} serão automaticamente movidos. This transfer occurs in the background, so if you have a large number of {% data variables.large_files.product_name_short %} objects or if the {% data variables.large_files.product_name_short %} objects themselves are large, it may take some time for the transfer to occur.{% ifversion fpt or ghec %} Before you transfer a repository that uses {% data variables.large_files.product_name_short %}, make sure the receiving account has enough data packs to store the {% data variables.large_files.product_name_short %} objects you'll be moving over. Para obter mais informações sobre como adicionar armazenamento para contas de usuário, consulte "[Atualizar {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage)".{% endif %}
- Quando um repositório é transferido entre duas contas de usuário, as atribuições de problemas são mantidas intactas. Quando você transfere um repositório de uma conta de usuário para uma organização, os problemas atribuídos a integrantes da organização permanecem intactos, e todos os outros responsáveis por problemas são destituídos. Somente proprietários da organização têm permissão para criar novas atribuições de problemas. Quando você transfere um repositório de uma organização para uma conta de usuário, são mantidos somente os problemas atribuídos ao proprietário do repositório. Todos os outros responsáveis por problemas são removidos.
- Se o repositório transferido contiver um site do {% data variables.product.prodname_pages %}, os links para o repositório do Git na web e por meio de atividade do Git serão redirecionados. No entanto, não redirecionamos o {% data variables.product.prodname_pages %} associado ao repositório.
- Todos os links para o local do repositório anterior são automaticamente redirecionados para o novo local. Quando você usar `git clone`, `git fetch` ou `git push` em um repositório transferido, esses comandos serão redirecionados para a nova URL ou local do repositório. No entanto, para evitar confusão, recomendamos que qualquer clone local seja atualizado para apontar para a nova URL do repositório. Use `git remote` na linha de comando para fazer isso:

  ```shell
  $ git remote set-url origin <em>new_url</em>
  ```

- Quando você transfere um repositório de uma organização para uma conta de usuário, os colaboradores somente leitura do repositório não serão transferidos. Isso acontece porque os colaboradores não podem ter acesso somente leitura a repositórios pertencentes a uma conta de usuário. For more information about repository permission levels, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

Para obter mais informações, consulte "[Gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Transferências de repositório e organizações

Para transferir repositórios para uma organização, é preciso ter permissões de criação de repositórios na organização recebedora. Se os proprietários da organização tiverem desabilitado a criação de repositórios por integrantes da organização, somente proprietários da organização poderão transferir repositórios dentro ou fora da organização.

Depois que um repositório for transferido para uma organização, os privilégios de associação padrão e as configurações padrão de permissão de repositório da organização se aplicarão ao repositório transferido.

## Transferir um repositório pertencente à sua conta de usuário

É possível transferir seu repositório para qualquer conta de usuário que aceite transferência de repositório. Quando um repositório é transferido entre duas contas de usuário, o proprietário e os colaboradores do repositório original são automaticamente adicionados como colaboradores ao novo repositório.

{% ifversion fpt or ghec %}If you published a {% data variables.product.prodname_pages %} site in a private repository and added a custom domain, before transferring the repository, you may want to remove or update your DNS records to avoid the risk of a domain takeover. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

## Transferir um repositório pertencente à organização

Se você tiver permissões de proprietário em uma organização ou permissões de administrador para um dos repositórios dela, será possível transferir um repositório pertencente à organização para sua conta de usuário ou para outra organização.

1. Entre na sua conta de usuário que tem permissões de proprietário ou de administrador na organização proprietária do repositório.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}
