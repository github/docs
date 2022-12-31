---
title: Transferir um repositório
intro: É possível transferir repositórios para outros usuários ou contas da organização.
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
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
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160677'
---
## Sobre transferências de repositório

Quando você transfere um repositório para um novo proprietário, ele pode administrar imediatamente o conteúdo do repositório, além de problemas, pull requests, versões, {% data variables.product.prodname_projects_v1 %} e configurações.

Pré-requisitos para transferências no repositório:
- Ao transferir um repositório que seja seu para outra conta pessoal, o novo proprietário receberá um email de confirmação.{% ifversion fpt or ghec %} O email de confirmação inclui instruções para aceitar a transferência. Se o novo proprietário não aceitar a transferência em um dia, o convite vai expirar.{% endif %}
- Para transferir um repositório que você possui para uma organização, é preciso ter permissão para criar um repositório na organização de destino.
- A conta de destino não deve ter um repositório com o mesmo nome ou uma bifurcação na mesma rede.
- O proprietário original do repositório é adicionado como colaborador no repositório transferido. Outros colaboradores do repositório transferido ficam intactos.{% ifversion ghes < 3.7 or ghae %}
- Os repositórios internos não podem ser transferidos.{% endif %}
- Bifurcações privadas não podem ser transferidas.
{%- ifversion ghec %}
- Não é possível transferir um repositório interno de uma organização pertencente a uma conta corporativa para uma organização pertencente a uma conta corporativa diferente.
{%- endif %}

{% ifversion fpt or ghec %}Se você transferir um repositório privado para uma conta de usuário ou de organização do {% data variables.product.prodname_free_user %}, o repositório perderá o acesso aos recursos como branches protegidos e o {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### O que é transferido com um repositório?

Quando você transfere um repositório, também são transferidos problemas, pull requests, wiki, estrelas e inspetores dele. Se o repositório transferido contiver webhooks, serviços, segredos ou chaves de implantação, eles continuarão associados mesmo depois que a transferência for concluída. Informações do Git sobre commits, inclusive contribuições, são preservadas. Além disso:

- Se o repositório transferido for uma bifurcação, continuará associado ao repositório upstream.
- Se o repositório transferido tiver alguma bifurcação, ela permanecerá associada ao repositório depois que a transferência for concluída.
- Se o repositório transferido usar {% data variables.large_files.product_name_long %}, todos os objetos {% data variables.large_files.product_name_short %} serão automaticamente movidos. Esta transferência ocorre em segundo plano. Portanto, se você tiver um número grande de objetos de {% data variables.large_files.product_name_short %} ou se os próprios objetos de {% data variables.large_files.product_name_short %} forem grandes, poderá levar um tempo para realizar a transferência.{% ifversion fpt or ghec %} Antes de transferir um repositório que usa {% data variables.large_files.product_name_short %}, certifique-se de que a conta de recebimento tenha pacotes de dados suficientes para armazenar os objetos de {% data variables.large_files.product_name_short %} que você vai se transferir. Para obter mais informações sobre como adicionar armazenamento para contas pessoais, confira "[Como fazer upgrade do {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage)".{% endif %}
- Quando um repositório é transferido entre duas contas pessoais, as atribuições de problemas são mantidas intactas. Quando você transfere um repositório de uma conta pessoal para uma organização, os problemas atribuídos a integrantes da organização permanecem intactos e todos os outros responsáveis por problemas são destituídos. Somente proprietários da organização têm permissão para criar novas atribuições de problemas. Quando você transfere um repositório de uma organização para uma conta pessoal, são mantidos somente os problemas atribuídos ao proprietário do repositório. Todos os outros responsáveis por problemas são removidos.
- Se o repositório transferido contiver um site do {% data variables.product.prodname_pages %}, os links para o repositório do Git na web e por meio de atividade do Git serão redirecionados. No entanto, não redirecionamos o {% data variables.product.prodname_pages %} associado ao repositório.
- Todos os links para o local do repositório anterior são automaticamente redirecionados para o novo local. Quando você usa `git clone`, `git fetch` ou `git push` em um repositório transferido, esses comandos redirecionarão você para o novo local ou a URL do repositório. No entanto, para evitar confusão, recomendamos que qualquer clone local seja atualizado para apontar para a nova URL do repositório. Faça isso usando `git remote` na linha de comando:

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **Aviso**: se você criar um repositório na sua conta no futuro, não reutilize o nome original do repositório transferido. Se você reutilizar, redirecionamentos para o repositório transferido não funcionarão mais.

  {% endwarning %}

- Quando você transfere um repositório de uma organização para uma conta pessoal, os colaboradores somente leitura do repositório não serão transferidos. Isso acontece porque os colaboradores não podem ter acesso somente leitura a repositórios pertencentes a uma conta pessoal. Para obter mais informações sobre os níveis de permissão do repositório, confira "[Níveis de permissão para um repositório da conta pessoal](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" e "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".{% ifversion fpt or ghec %}
- Os patrocinadores que têm acesso ao repositório por meio de um nível de patrocínio podem ser afetados. Para obter mais informações, confira "[Como adicionar um repositório a uma camada de patrocínio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)".{% endif %}

Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Transferências de repositório e organizações

Para transferir repositórios para uma organização, é preciso ter permissões de criação de repositórios na organização recebedora. Se os proprietários da organização tiverem desabilitado a criação de repositórios por integrantes da organização, somente proprietários da organização poderão transferir repositórios dentro ou fora da organização.

Depois que um repositório for transferido para uma organização, os privilégios de associação padrão e as configurações padrão de permissão de repositório da organização se aplicarão ao repositório transferido.

## Transferir um repositório pertencente à sua conta pessoal

É possível transferir seu repositório para qualquer conta pessoal que aceite transferência de repositório. Quando um repositório é transferido entre duas contas pessoais, o proprietário e os colaboradores do repositório original são automaticamente adicionados como colaboradores ao novo repositório.

{% ifversion fpt or ghec %}Se você publicou um site {% data variables.product.prodname_pages %} em um repositório privado e adicionou um domínio personalizado, antes de transferir o repositório, você deverá remover ou atualizar seus registros DNS para evitar o risco de tomada de um domínio. Para obter mais informações, confira "[Como configurar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## Transferir um repositório pertencente à organização

Se você tiver permissões de proprietário em uma organização ou permissões de administrador para um dos repositórios dela, poderá transferir um repositório pertencente à organização para sua conta pessoal ou para outra organização.

1. Entre na sua conta pessoal que tenha permissões de proprietário ou de administrador na organização proprietária do repositório.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
