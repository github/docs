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
---

## Sobre repositórios

Você pode possuir repositórios individualmente ou compartilhar a propriedade de repositórios com outras pessoas em uma organização.

É possível restringir quem tem acesso a um repositório escolhendo a visibilidade do repositório. Para obter mais informações, consulte "[Sobre a visibilidade do repositório](#about-repository-visibility)."

Para repositórios possuídos pelo usuário, você pode fornecer a outras pessoas acesso de colaborador para que elas possam colaborar no seu projeto. Se um repositório pertencer a uma organização, você poderá fornecer aos integrantes da organização permissões de acesso para colaboração no seu repositório. Para obter mais informações, consulte "[Níveis de permissão para uma repositório de conta pessoal](/articles/permission-levels-for-a-user-account-repository/)" e "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion fpt or ghec %}
Com o {% data variables.product.prodname_free_team %} em contas pessoais e de organizações, você pode trabalhar com colaboradores ilimitados em repositórios públicos ilimitados, com um conjunto completo de recursos, ou em repositórios privados ilimitados com um conjunto de recursos limitados. Para obter ferramentas avançadas para repositórios privados, você pode fazer o upgrade para {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% else %}
Cada pessoa e organização podem ter repositórios ilimitados e convidar um número ilimitado de colaboradores para todos os repositórios.
{% endif %}

Você pode usar repositórios para gerenciar seu trabalho e colaborar com outras pessoas.
- Você pode usar problemas para coletar feedback do usuário, relatar erros de software e organizar tarefas que você gostaria de realizar. Para obter mais informações, consulte "[Sobre problemas](/github/managing-your-work-on-github/about-issues)."{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- É possível usar pull requests para propor alterações em um repositório. Para obter mais informações, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".
- Você pode usar quadros de projeto para organizar e priorizar seus problemas e pull requests. Para obter mais informações, consulte "[Sobre quadros de projeto](/github/managing-your-work-on-github/about-project-boards)".

{% data reusables.repositories.repo-size-limit %}

## Sobre a visibilidade do repositório

É possível restringir quem tem acesso a um repositório, escolhendo a visibilidade de um repositório: {% ifversion ghes or ghec %}público, interno, ou privado{% elsif ghae %}privado ou interno{% else %} público ou privado{% endif %}.

{% ifversion fpt or ghec or ghes %}

Ao criar um repositório, você pode optar por tornar o repositório público ou privado.{% ifversion ghec or ghes %} Se você estiver criando o repositório em uma organização{% ifversion ghec %} que pertence a uma conta corporativa{% endif %}, você também pode optar por tornar o repositório interno.{% endif %}{% endif %}{% ifversion fpt %} Os repositórios em organizações que usam {% data variables.product.prodname_ghe_cloud %} e são propriedade de uma conta corporativa também podem ser criados com visibilidade interna. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Ao criar um repositório pertencente à sua conta pessoal, o repositório é sempre privado. Ao criar um repositório pertencente a uma organização, você pode optar por tornar o repositório privado ou interno.

{% endif %}

{%- ifversion fpt or ghec %}
- Os repositórios públicos podem ser acessados por todos na internet.
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- elsif ghes %}
- Se {% data variables.product.product_location %} não estiver em modo privado ou por trás de um firewall, repositórios públicos poderão ser acessados por todos na internet. Caso contrário, os repositórios públicos estarão disponíveis para todos usando {% data variables.product.product_location %}, incluindo colaboradores externos.
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- elsif ghae %}
- Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
- Repositórios internos podem ser acessados por todos os integrantes da empresa. Para obter mais informações, consulte "[Sobre repositórios internos](#about-internal-repositories)."
{%- endif %}

Os proprietários da organização sempre têm acesso a todos os repositórios criados em uma organização. Para obter mais informações, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

As pessoas com permissões de administrador para um repositório podem alterar a visibilidade de um repositório existente. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% ifversion ghes or ghec or ghae %}
## Sobre repositórios internos

{% data reusables.repositories.about-internal-repos %} Para obter mais informações sobre o innersource, consulte a documentação técnica do {% data variables.product.prodname_dotcom %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

Todos os integrantes da empresa têm permissões de leitura no repositório interno, mas os repositórios internos não são visíveis para pessoas {% ifversion fpt or ghec %}que estão fora da empresa{% else %}que não são integrantes de qualquer organização{% endif %}, incluindo colaboradores externos em repositórios da organização. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" e "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion ghes %}
{% note %}

**Observação:** Um usuário deve fazer parte de uma organização para ser integrante da empresa e ter acesso a repositórios internos. Se um usuário em {% data variables.product.product_location %} não for um integrante de qualquer organização, esse usuário não terá acesso a repositórios internos.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

Qualquer integrante da empresa pode bifurcar qualquer repositório interno pertencente a uma organização da empresa. O repositório bifurcado pertencerá à conta pessoal do integrante e a visibilidade da bifurcação será privada. Se um usuário for removido de todas as organizações pertencentes à empresa, essas bifurcações do usuário dos repositórios internos do usuário serão removidas automaticamente.
{% endif %}

## Limites para visualização de conteúdo e diffs no repositório

Determinados tipos de recursos podem ser muito grandes, exigindo processamento elevado no{% data variables.product.product_name %}. Por isso, limites são estabelecidos para assegurar que as solicitações sejam completadas em um período razoável.

A maioria dos limites abaixo afetam o {% data variables.product.product_name %} e a API.

### Limites de texto

Os arquivos de texto acima de **512 KB** são sempre exibidos como texto sem formatação. O código não destaca a sintaxe e arquivos em prosa não são convertidos em HTML (como markdown, AsciiDoc *etc.*).

Arquivos de texto acima de **5 MB** somente estão disponíveis por meio de suas URLs brutas, que são servidas em `{% data variables.product.raw_github_com %}`; por exemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Clique no botão **Raw** (Bruto) para obter o URL bruto de um arquivo.

### Limites de diff

Os diffs podem ficar muito grandes, por isso impusemos estas restrições em diffs para commits, pull requests e visualizações comparadas:

- Em um pull request, nenhum diff total pode exceder *20.000 linhas que você pode carregar* ou *1 MB* de dados de diff não processados.
- Nenhum diff de arquivo pode exceder *20.000 linhas que você pode carregar* ou *500 KB* de dados do diff não processado. *Quatro mil linhas* e *20 kB* são automaticamente carregados em um único arquivo.
- O número máximo de arquivos em um único diff é limitado a *300*.
- O número máximo de arquivos renderizáveis (como imagens, PDFs e arquivos GeoJSON) em um único diff é limitado a *25*.

Algumas partes de um diff limitado podem ser exibidas, mas qualquer excedente de limite não é mostrado.

### Limites de listas de commits

As páginas de visualização comparada e pull requests exibem uma lista de commits entre as revisões `base` e `head`. Essas listas são limitadas a **250** commits. Caso o limite seja excedido, uma observação indicará que commits adicionais estão presentes (mas não são mostrados).

## Leia mais

- "[Criar um repositório](/articles/creating-a-new-repository)"
- "[Sobre bifurcações](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Colaborar com problemas e pull requests](/categories/collaborating-with-issues-and-pull-requests)"
- "[Gerenciar seu trabalho no {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Administrar um repositório](/categories/administering-a-repository)"
- "[Visualizar dados de repositório com gráficos](/categories/visualizing-repository-data-with-graphs/)"
- "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[Glossário do {% data variables.product.prodname_dotcom %}](/articles/github-glossary)"
