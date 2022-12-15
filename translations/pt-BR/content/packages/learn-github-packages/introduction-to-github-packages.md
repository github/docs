---
title: Introdução ao GitHub Packages
intro: 'O {% data variables.product.prodname_registry %} é um serviço de hospedagem de pacotes de software que permite que você hospede pacotes de software de modo privado{% ifversion ghae %} para usuários especificados ou internamente para a empresa{% else %}ou publicamente{% endif %} e use os pacotes como dependências dos projetos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: 1ad319ead16f10186b330f876ccaa83bc44bdbcd
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193022'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre o {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} é uma plataforma para hospedar e gerenciar pacotes, incluindo contêineres e outras dependências. {% data variables.product.prodname_registry %} combina seu código-fonte e pacotes em um só lugar para fornecer gerenciamento integrado de permissões{% ifversion fpt or ghec %} e faturamento{% endif %}, para que você possa centralizar o desenvolvimento do seu software em {% data variables.product.product_name %}.

Você pode integrar {% data variables.product.prodname_registry %} às APIs de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} e webhooks para criar um fluxo de trabalho de ponta a ponta que inclui seu código, CI e soluções de implantação.

{% data variables.product.prodname_registry %} oferece registros de pacotes diferentes para gerentes de pacotes comumente usados, como npm, RubyGems, Apache Maven, Gradle, Docker e NuGet. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}'s {% data variables.product.prodname_container_registry %} é otimizado para contêineres e é compatível com imagens do Docker e OCI.{% endif %} Para obter mais informações sobre os diferentes registros de pacotes com os quais {% data variables.product.prodname_registry %} tem suporte, confira "[Trabalhar com um registro {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %}

![Diagrama que mostra pacotes de compatibilidade para registro de contêiner, RubyGems, npm, Apache Maven, NuGet e Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagrama que mostra compatibilidade para pacotes do registro Docker, RubyGems, npm, Apache Maven, Gradle, NuGet e Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Você pode visualizar o LEIAME de um pacote, bem como os metadados como licenciamento, estatísticas de download, histórico de versão e muito mais em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como ver pacotes](/packages/manage-packages/viewing-packages)".

{% ifversion ghes %}

Para obter mais informações sobre a configuração do {% data variables.product.prodname_registry %} no {% data variables.product.product_name %}, confira "[Introdução ao {% data variables.product.prodname_registry %} para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

{% endif %}

### Visão geral das permissões e visibilidade do pacote

|                    |        |
|--------------------|--------------------|
| Permissões        | {% ifversion packages-registries-v2 %}As permissões para um pacote são herdadas do repositório onde o pacote está hospedado ou podem ser definidas para contas de usuário ou organização específicas. Alguns registros só dão suporte a permissões herdadas de um repositório. Para obter uma lista desses registros, confira "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)". Para obter mais informações sobre acesso a pacotes, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)". {% else %}Cada pacote herda as permissões do repositório em que o pacote está hospedado. <br> <br> Por exemplo, qualquer pessoa com permissões de leitura para um repositório pode instalar um pacote como uma dependência em um projeto, e qualquer pessoa com permissões de gravação pode publicar uma nova versão de pacote.{% endif %} |
| Visibilidade         | {% data reusables.package_registry.public-or-private-packages %} |

{% ifversion fpt or ghec %}
## Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, confira "[Sobre cobrança para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

## Clientes e formatos compatíveis
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

O {% data variables.product.prodname_registry %} usa os comandos nativos de ferramentas de pacotes com os quais você já está familiarizado para publicar e instalar versões de pacote.
### Suporte para registros de pacotes

| Linguagem | Descrição | Formato do pacote | Cliente do pacote |
| --- | --- | --- | --- |
| JavaScript | Gerenciador de pacotes de nó | `package.json`  | `npm` |
| Ruby |  Gerenciador de pacotes de RubyGems | `Gemfile` |  `gem` |
| Java | Ferramenta de gerenciamento de projetos e compreensão do Apache Maven | `pom.xml` |  `mvn` |
| Java | Ferramenta de automação do build Gradle para Java | `build.gradle` ou `build.gradle.kts`  | `gradle`  |
| .NET | Gerenciamento de pacotes NuGet para .NET | `nupkg`  |  `dotnet` CLI |
| N/D | Gerenciamento do contêiner do Docker | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**Observação:** ao habilitar o registro do Docker, é altamente recomendável também habilitar o isolamento de subdomínio. Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)".

{% endnote %}

{% endif %}

Para obter mais informações sobre como configurar seu cliente de pacote para uso com {% data variables.product.prodname_registry %}, confira "[ Trabalhar com um registro {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %} Para obter mais informações sobre o Docker e o {% data variables.product.prodname_container_registry %}, confira "[Como trabalhar com o registro de contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".
{% endif %}
## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Como gerenciar pacotes

Você pode excluir um pacote na interface do usuário {% data variables.product.product_name %} {% ifversion fpt or ghec %} ou usando a API REST. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)" e a API "[{% data variables.product.prodname_registry %}](/rest/reference/packages)."{% else %}.{% endif %} {% data reusables.package_registry.about-graphql-support %}

Ao usar a API do GraphQL para consultar e excluir pacotes privados, você deverá usar o mesmo {% data variables.product.pat_v1 %} usado para autenticar o {% data variables.product.prodname_registry %}.

Para obter mais informações, confira {% ifversion ghes or ghae %}[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)" e {% endif %}"[Como criar chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

Você pode configurar webhooks para assinar eventos relacionados aos pacotes, como quando um pacote é publicado ou atualizado. Para obter mais informações, confira o "[ evento de webhook `package`](/webhooks/event-payloads/#package)".

## Entrar em contato com o suporte

{% ifversion fpt or ghec %} ISe você tiver comentários ou solicitações de recursos para o {% data variables.product.prodname_registry %}, use um discussão da [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Entre em contato com {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando [nosso formulário de contato](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) se:

* Você encontrar qualquer coisa que contradiga a documentação
* Você encontra erros vagos ou pouco claros
* Seu pacote publicado contém dados confidenciais, como violações do RGPD, chaves API ou informações de identificação pessoal

{% else %} Se você precisar de suporte para {% data variables.product.prodname_registry %}, entre em contato com os administradores do seu site.

{% endif %}
