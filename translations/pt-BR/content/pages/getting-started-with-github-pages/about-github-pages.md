---
title: Sobre o GitHub Pages
intro: 'Você pode usar {% data variables.product.prodname_pages %} para hospedar um site sobre você, sua organização, ou seu projeto diretamente a partir de um repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507980'
---
## Sobre o {% data variables.product.prodname_pages %}

O {% data variables.product.prodname_pages %} é um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no {% data variables.product.product_name %} e, como opção, executa os arquivos por meio de um processo e publica um site. Veja exemplos de sites do {% data variables.product.prodname_pages %} na [coleção de exemplos do {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %} É possível hospedar seu site no domínio `github.io` do {% data variables.product.prodname_dotcom %} ou em um domínio personalizado próprio. Para obter mais informações, confira "[Como usar um domínio personalizado com o {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} Para obter mais informações, confira "[Alterando a visibilidade de seu site do {% data variables.product.prodname_pages %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) {% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}. {% else %}". {% endif %} {% endif %}

Para começar, confira "[Como criar um site do {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)".

{% ifversion fpt or ghes or ghec %} Os proprietários da organização podem desabilitar a publicação de sites do {% data variables.product.prodname_pages %} nos repositórios da organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

## Tipos de site do {% data variables.product.prodname_pages %}

Há três tipos de site do {% data variables.product.prodname_pages %}: projeto, usuário e organização. Os sites de projeto são conectados a um projeto específico hospedado no {% data variables.product.product_name %}, como uma biblioteca do JavaScript ou um conjunto de receitas. Os sites de usuário e organização estão conectados a uma conta específica em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para publicar um site de usuário, você precisa criar um repositório de propriedade da sua conta pessoal chamado {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Para publicar um site da organização, você precisa criar um repositório de propriedade de uma organização chamado {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}A menos que você esteja usando um domínio personalizado, os sites de usuário e de organização ficam disponíveis em `http(s)://<username>.github.io` ou `http(s)://<organization>.github.io`.{% elsif ghae %}Os sites de usuário e de organização ficam disponíveis em `http(s)://pages.<hostname>/<username>` ou `http(s)://pages.<hostname>/<organization>`.{% endif %}

Os arquivos de origem de um site de projeto são armazenados no mesmo repositório que o respectivo projeto. {% ifversion fpt or ghec %} A menos que você esteja usando um domínio personalizado, os sites de projeto ficam disponíveis em `http(s)://<username>.github.io/<repository>` ou `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Os sites de projeto ficam disponíveis em `http(s)://pages.<hostname>/<username>/<repository>/` ou `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %} Se você publicar seu site no modo privado, a URL do site será diferente. Para obter mais informações, confira "[Como alterar a visibilidade do seu site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

{% ifversion fpt or ghec %} Para obter mais informações sobre como os domínios personalizados afetam a URL do seu site, confira "[Sobre os domínios personalizados e o {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Você só pode criar um site de usuário ou organização para cada conta em {% data variables.product.product_name %}. Os sites de projeto, sejam eles de uma organização ou de uma conta pessoal, são ilimitados.

{% ifversion ghes %} A URL em que o site estará disponível depende da habilitação do isolamento do subdomínio para a {% data variables.product.product_location %}.

| Tipo de site | Isolamento de subdomínio habilitado | Isolamento de subdomínio desabilitado |
| ------------ | --------------------------- | ---------------------------- |
Usuário | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organização | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Site de projeto de propriedade de uma conta pessoal | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Site de projeto de propriedade da conta da organização | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/enterprise/admin/installation/enabling-subdomain-isolation)" ou entre em contato com o administrador do site.
{% endif %}

## Publicar fontes para sites do {% data variables.product.prodname_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

Para obter mais informações, confira "[Como configurar uma fonte de publicação para o seu site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

{% ifversion ghec %}
## Limitações do {% data variables.product.prodname_emus %}
Se você for um {% data variables.product.prodname_managed_user %}, o uso do {% data variables.product.prodname_pages %} será limitado.

  - Os sites do {% data variables.product.prodname_pages %} só podem ser publicados por meio de repositórios pertencentes a organizações.
  - Os sites do {% data variables.product.prodname_pages %} só são visíveis para outros membros da empresa.

Para obter mais informações sobre o {% data variables.product.prodname_emus %}, confira "[Sobre o {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".
{% endif %}

## Geradores de site estáticos

O {% data variables.product.prodname_pages %} publica qualquer arquivo estático do qual você faz push no repositório. É possível criar seus próprios arquivos estáticos ou usar um gerador de site estático para que ele crie o site para você. Também pode personalizar seu próprio processo de criação localmente ou em outro servidor.

{% ifversion pages-custom-workflow %}

Se você usar um processo de build ou um gerador de site estático diferente do Jekyll, poderá escrever um {% data variables.product.prodname_actions %} para criar e publicar seu site. {% data variables.product.product_name %} oferece fluxos de trabalho iniciais para vários geradores de site estático. Para obter mais informações, confira "[Como configurar uma fonte de publicação para o seu site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

Se você publicar seu site de um branch de origem, {% data variables.product.prodname_pages %} usará o Jekyll para criar seu site por padrão. Se você quiser usar um gerador de site estático diferente do Jekyll, recomendamos que você escreva um {% data variables.product.prodname_actions %} para criar e publicar seu site. Caso contrário, desabilite o processo de build do Jekyll criando um arquivo vazio chamado `.nojekyll` na raiz da fonte de publicação e siga as instruções do gerador de site estático para compilar seu site localmente.

{% else %}

É recomendável usar o Jekyll, um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %} e um processo de compilação simplificado. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll)".

O {% data variables.product.prodname_pages %} usará o Jekyll para criar seu site por padrão. Caso deseje usar um gerador de site estático que não seja o Jekyll, desabilite o processo de build do Jekyll criando um arquivo vazio chamado `.nojekyll` na raiz da fonte de publicação e siga as instruções do gerador de site estático para compilar seu site localmente.

{% endif %}

O {% data variables.product.prodname_pages %} não aceita linguagens de servidor como PHP, Ruby ou Python.

## Limites para o uso de {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %} Os sites do {% data variables.product.prodname_pages %} criados após 15 de junho de 2016 e que usam os domínios `github.io` são disponibilizados via HTTPS. Se você criou seu site ante de 15 de junho de 2016, é possível habilitar o suporte ao HTTPS para tráfego no seu site. Para obter mais informações, confira "[Como proteger o {% data variables.product.prodname_pages %} com HTTPS](/articles/securing-your-github-pages-site-with-https)".

### Usos proibidos
{% endif %} O {% data variables.product.prodname_pages %} não foi projetado nem tem permissão para ser usado como um serviço de hospedagem gratuita na Web para administrar sua empresa online, seu site de comércio eletrônico ou qualquer outro site desenvolvido principalmente para facilitar transações comerciais ou fornecer SaaS (software como serviço) comercial. {% data reusables.pages.no_sensitive_data_pages %}

Além disso, seu uso do {% data variables.product.prodname_pages %} está sujeito aos [Termos de Serviço do GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/), incluindo as restrições relativas a esquemas do tipo "enriqueça rápido", conteúdo sexualmente obsceno e atividade ou conteúdo violento ou ameaçador.

### Limites de uso
Os sites do {% data variables.product.prodname_pages %} estão sujeitos ao seguintes limites de uso:

  - Os repositórios de origem do {% data variables.product.prodname_pages %} têm um limite recomendado de 1 GB.{% ifversion fpt or ghec %} Para obter mais informações, confira "[Qual é a minha cota de disco?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)"{% endif %}
  - Os sites do {% data variables.product.prodname_pages %} publicados não podem ter mais de 1 GB.
{% ifversion fpt or ghec %}
  - Os sites do {% data variables.product.prodname_pages %} têm um limite de largura de banda *flexível* de 100 GB por mês.
  - Os sites do {% data variables.product.prodname_pages %} têm um limite *flexível* de 10 builds por hora.{% ifversion pages-custom-workflow %} Esse limite não se aplica se você cria e publica seu site com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %} {% endif %}
  - Para fornecer qualidade de serviço consistente para todos os sites {% data variables.product.prodname_pages %}, limites de taxa podem ser aplicados. Esses limites de taxa não se destinam a interferir nos usos legítimos de {% data variables.product.prodname_pages %}. Se a sua solicitação disparar a limitação de taxa, você receberá uma resposta apropriada com um código de status HTTP de `429`, juntamente com um corpo HTML informativo.

Se o seu site exceder essas cotas de uso, talvez não possamos atender a ele ou você receba um e-mail formal do {% data variables.contact.contact_support %} sugerindo estratégias para reduzir o impacto do site em nossos servidores, como colocar uma rede de distribuição de conteúdo (CDN, Content Distribution Network) de terceiros na frente do site, usar outros recursos do {% data variables.product.prodname_dotcom %}, como versões, ou migrar para outro serviço de hospedagem que possa atender melhor às suas necessidades.

{% endif %}

## Tipos de MIME no {% data variables.product.prodname_pages %}

Um tipo de MIME é um header que um servidor envia a um navegador, fornecendo informações sobre a natureza e o formato dos arquivos que o navegador solicitou. O {% data variables.product.prodname_pages %} aceita mais de 750 tipos de MIME entre milhares de extensões de arquivo. A lista de tipos MIME compatíveis é gerada com base no [projeto mime-db](https://github.com/jshttp/mime-db).

Embora não seja possível especificar tipos de MIME personalizados por arquivo ou repositório, você pode adicionar ou modificar tipos de MIME para uso no {% data variables.product.prodname_pages %}. Para obter mais informações, confira [as diretrizes de contribuição do mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## Coleta de dados

Quando um site de {% data variables.product.prodname_pages %} é acessado, o endereço IP do visitante é registrado e armazenado para fins de segurança, independentemente se o visitante efetuou o login em {% data variables.product.prodname_dotcom %} ou não. Para obter mais informações sobre as práticas de segurança do {% data variables.product.prodname_dotcom %}, confira <a href="/articles/github-privacy-statement/" class="dotcom-only">Política de Privacidade do {% data variables.product.prodname_dotcom %}</a>.
{% endif %}

## Leitura adicional

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) no {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
