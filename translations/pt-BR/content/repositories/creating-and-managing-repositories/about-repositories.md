---
title: Sobre repositórios
intro: Um repositório contém todos os arquivos do seu projeto e o histórico de revisão de cada arquivo. Você pode discutir e gerenciar o trabalho do projeto dentro do repositório.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: af0b8eb9f8bd7a98c246a0806a8bc60f59ba147f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107282'
---
## Sobre repositórios

Você pode possuir repositórios individualmente ou compartilhar a propriedade de repositórios com outras pessoas em uma organização.

É possível restringir quem tem acesso a um repositório escolhendo a visibilidade do repositório. Para obter mais informações, confira "[Sobre a visibilidade do repositório](#about-repository-visibility)".

Para repositórios possuídos pelo usuário, você pode fornecer a outras pessoas acesso de colaborador para que elas possam colaborar no seu projeto. Se um repositório pertencer a uma organização, você poderá fornecer aos integrantes da organização permissões de acesso para colaboração no seu repositório. Para obter mais informações, confira "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository/)" e "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion fpt or ghec %} Com o {% data variables.product.prodname_free_team %} para contas pessoais e de organizações, você pode trabalhar com colaboradores ilimitados em repositórios públicos ilimitados, com um conjunto completo de recursos, ou em repositórios privados ilimitados, com um conjunto limitado de recursos. Para obter ferramentas avançadas para repositórios privados, você pode fazer o upgrade para {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %} {% else %} Cada pessoa e organização pode ser o proprietário de repositórios ilimitados e convidar um número ilimitado de colaboradores em todos os repositórios.
{% endif %}

Você pode usar repositórios para gerenciar seu trabalho e colaborar com outras pessoas.
- Você pode usar problemas para coletar feedback do usuário, relatar erros de software e organizar tarefas que você gostaria de realizar. Para obter mais informações, confira "[Sobre os problemas](/github/managing-your-work-on-github/about-issues)".{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- É possível usar pull requests para propor alterações em um repositório. Para obter mais informações, confira "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".
- Você pode usar quadros de projeto para organizar e priorizar seus problemas e pull requests. Para obter mais informações, confira "[Sobre os quadros de projetos](/github/managing-your-work-on-github/about-project-boards)".

{% data reusables.repositories.repo-size-limit %}

## Sobre a visibilidade do repositório

É possível restringir quem tem acesso a um repositório escolhendo a visibilidade de um repositório: {% ifversion ghes or ghec %}público, interno ou privado{% elsif ghae %}privado ou interno{% else %} público ou privado{% endif %}.

{% ifversion fpt or ghec or ghes %}

Ao criar um repositório, você pode optar por tornar o repositório público ou privado.{% ifversion ghec or ghes %} Se você estiver criando o repositório em uma organização{% ifversion ghec %} que pertence a uma conta corporativa{% endif %}, você também pode optar por tornar o repositório interno.{% endif %}{% endif %}{% ifversion fpt %} Os repositórios em organizações que usam {% data variables.product.prodname_ghe_cloud %} e são propriedade de uma conta corporativa também podem ser criados com visibilidade interna. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Ao criar um repositório pertencente à sua conta pessoal, o repositório é sempre privado. Ao criar um repositório pertencente a uma organização, você pode optar por tornar o repositório privado ou interno.

{% endif %}

{%- ifversion fpt or ghec %}
- Os repositórios públicos podem ser acessados por todos na Internet.
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- elsif ghes %}
- Se a {% data variables.location.product_location %} não estiver em modo privado ou protegida por um firewall, os repositórios públicos poderão ser acessados por todos na Internet. Caso contrário, os repositórios públicos estarão disponíveis a todos os usuários de {% data variables.location.product_location %}, incluindo colaboradores externos.
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- elsif ghae %}
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- Repositórios internos podem ser acessados por todos os integrantes da empresa. Para obter mais informações, confira "[Sobre os repositórios internos](#about-internal-repositories)".
{%- endif %}

Os proprietários da organização sempre têm acesso a todos os repositórios criados em uma organização. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

As pessoas com permissões de administrador para um repositório podem alterar a visibilidade de um repositório existente. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% ifversion ghes or ghec or ghae %}
## Sobre repositórios internos

{% data reusables.repositories.about-internal-repos %} Para obter mais informações sobre o InnerSource, confira o white paper "[Uma introdução ao InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/)" do {% data variables.product.prodname_dotcom %}.

{% ifversion ghec %} {% note %}

**Observação:** você só poderá criar repositórios internos se usar o {% data variables.product.prodname_ghe_cloud %} com uma conta corporativa. Uma conta corporativa é um tipo separado de conta que permite um ponto central de gerenciamento para várias organizações. Para obter mais informações, confira "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

{% endnote %} {% endif %}

Todos os integrantes da empresa têm permissões de leitura no repositório interno, mas os repositórios internos não são visíveis para pessoas {% ifversion fpt or ghec %}que estão fora da empresa{% else %}que não são integrantes de qualquer organização{% endif %}, incluindo colaboradores externos em repositórios da organização. Para obter mais informações, confira "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" e "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion ghes %} {% note %}

**Observação:** um usuário precisa fazer parte de uma organização para ser membro da empresa e ter acesso aos repositórios internos. Se um usuário em {% data variables.location.product_location %} não for membro de nenhuma organização, ele não terá acesso a repositórios internos.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}A menos que sua empresa use {% data variables.product.prodname_emus %}, os membros{% else %}Membros{% endif %} dela podem criar fork de qualquer repositório de propriedade de uma organização na empresa. O repositório bifurcado pertencerá à conta pessoal do integrante e a visibilidade da bifurcação será privada. Se um usuário for removido de todas as organizações pertencentes à empresa, essas bifurcações do usuário dos repositórios internos do usuário serão removidas automaticamente.

{% ifversion ghec %} {% note %}

**Observação:** o {% data variables.enterprise.prodname_managed_users_caps %} não pode criar fork de repositórios internos. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)".

{% endnote %} {% endif %} {% endif %}

## Limites para exibição de conteúdo e diffs no repositório

Determinados tipos de recursos podem ser muito grandes, exigindo processamento elevado no{% data variables.product.product_name %}. Por isso, limites são estabelecidos para assegurar que as solicitações sejam completadas em um período razoável.

A maioria dos limites abaixo afetam o {% data variables.product.product_name %} e a API.

### Limites de texto

Os arquivos de texto com mais de **512 KB** são sempre exibidos como texto sem formatação. O código não realça a sintaxe, e os arquivos em prosa não são convertidos em HTML (como Markdown, AsciiDoc *etc.* ).

Os arquivos de texto com mais de **5 MB** só ficam disponíveis por meio das respectivas URLs brutas, que são fornecidas por meio de `{% data variables.product.raw_github_com %}`, por exemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Clique no botão **Bruto** para obter a URL bruta de um arquivo.

### Limites de diff

Os diffs podem ficar muito grandes, por isso impusemos estas restrições em diffs para commits, pull requests e visualizações comparadas:

- Em uma solicitação de pull, nenhuma comparação total pode exceder *20 mil linhas que podem ser carregadas* ou *1 MB* de dados de comparação brutos.
- Nenhuma comparação de arquivo único pode exceder *20 mil linhas que podem ser carregadas* ou *500 KB* de dados de comparação brutos. *Quatrocentas linhas* e *20 KB* são carregados automaticamente para um só arquivo.
- O número máximo de arquivos em uma só comparação é limitado a *300*.
- O número máximo de arquivos renderizáveis (como imagens, PDFs e arquivos GeoJSON) em uma só comparação é limitado a *25*.

Algumas partes de um diff limitado podem ser exibidas, mas qualquer excedente de limite não é mostrado.

### Limites de listas de commits

As páginas de solicitações de pull e de exibição de comparação mostram uma lista de commits entre as revisões `base` e `head`. Essas listas são limitadas a **250** commits. Caso o limite seja excedido, uma observação indicará que commits adicionais estão presentes (mas não são mostrados).

## Leitura adicional

- "[Como criar um repositório](/articles/creating-a-new-repository)"
- "[Sobre os forks](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Colaboração com problemas e solicitações de pull](/categories/collaborating-with-issues-and-pull-requests)"
- "[Como gerenciar seu trabalho no {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Como administrar um repositório](/categories/administering-a-repository)"
- "[Como visualizar dados de repositório com grafos](/categories/visualizing-repository-data-with-graphs/)"
- "[Sobre os wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[Glossário do {% data variables.product.prodname_dotcom %}](/articles/github-glossary)"
