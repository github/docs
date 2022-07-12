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
---

## Sobre o {% data variables.product.prodname_pages %}

O {% data variables.product.prodname_pages %} é um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no {% data variables.product.product_name %} e, como opção, executa os arquivos por meio de um processo e publica um site. Você pode ver exemplos de sites do {% data variables.product.prodname_pages %} na [coleção de exemplos do {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %}
É possível hospedar seu site no domínio `github.io` do {% data variables.product.prodname_dotcom %} ou no seu próprio domínio personalizado. Para obter mais informações, consulte "[Usar um domínio personalizado com o {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.pages.about-private-publishing %} Para obter mais informações, consulte "[Alterando a visibilidade do seu site de {% data variables.product.prodname_pages %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}{% endif %}
{% endif %}

Para começar, consulte "[Criar um site do {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)".

{% ifversion fpt or ghes or ghec %}
Os proprietários da organização podem desabilitar a publicação de sites do {% data variables.product.prodname_pages %} nos repositórios da organização. Para obter mais informações, consulte "[Gerenciar a publicação de sites de {% data variables.product.prodname_pages %} para a sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

## Tipos de site do {% data variables.product.prodname_pages %}

Há três tipos de site do {% data variables.product.prodname_pages %}: projeto, usuário e organização. Os sites de projeto são conectados a um projeto específico hospedado no {% data variables.product.product_name %}, como uma biblioteca do JavaScript ou um conjunto de receitas. Os sites de usuário e organização estão conectados a uma conta específica em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para publicar um site de usuário, você deve criar um repositório pertencente à sua conta pessoal denominada {% ifversion fpt or ghec %}`<username>. ithub.io`{% else %}`<username>.<hostname>`{% endif %}. Para publicar um site de organização, você deve criar um repositório pertencente a uma organização que se chama {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}A menos que você esteja usando um domínio personalizado, os sites de usuário e organização estarão disponíveis em `http(s)://<username>.github.io` ou `http(s)://<organization>.github.io`.{% elsif ghae %}Sites de usuário e organização estão disponíveis em `http(s)://pages.<hostname>/<username>` ou `http(s)://pages.<hostname>/<organization>`.{% endif %}

Os arquivos de origem de um site de projeto são armazenados no mesmo repositório que o respectivo projeto. {% ifversion fpt or ghec %}A menos que você esteja usando um domínio personalizado, os sites de projeto estão disponíveis em `http(s)://<username>.github.io/<repository>` ou `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Os sites de projeto estão disponíveis em `http(s)://pages.<hostname>/<username>/<repository>/` ou `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %}
Se você publicar seu site em particularmente, a URL do seu site será diferente. Para obter mais informações, consulte "[Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

{% ifversion fpt or ghec %}
Para obter mais informações sobre como os domínios personalizados afetam o URL do seu site, consulte "[Sobre domínios personalizados e {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Você só pode criar um site de usuário ou organização para cada conta em {% data variables.product.product_name %}. Os sites de projeto, sejam eles de uma conta de organização ou pessoal , são ilimitados.

{% ifversion ghes %}
O URL onde o site estará disponível depende da habilitação do isolamento do subdomínio para o {% data variables.product.product_location %}.

| Tipo de site | Isolamento de subdomínio habilitado | Isolamento de subdomínio desabilitado |
| ------------ | ----------------------------------- | ------------------------------------- |
|              |                                     |                                       |
 Usuário | 

`http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` | Organização | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` | Site do projeto pertencente à conta pessoal | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Site do projeto pertencente à conta da organização | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/admin/installation/enabling-subdomain-isolation)" ou entre em contato com o administrador do site.
{% endif %}

## Publicar fontes para sites do {% data variables.product.prodname_pages %}

A fonte de publicação do seu site de {% data variables.product.prodname_pages %} é o branch e a pasta onde os arquivos de origem do seu site são armazenados.

{% data reusables.pages.private_pages_are_public_warning %}

Se existir uma fonte de publicação padrão no repositório, o {% data variables.product.prodname_pages %} publicará automaticamente um site a partir dessa fonte. A fonte de publicação padrão para sites de usuário e organização é a raiz do branch-padrão do repositório. A fonte de publicação padrão para sites de projeto é a raiz do branch `gh-pages`.

Se você desejar manter os arquivos de origem do seu site em outro local, você poderá alterar a fonte de publicação do seu site. É possível publicar o site a partir de qualquer branch no repositório, a partir da raiz do repositório nesse branch, `/` ou a partir da pasta `/docs` nesse branch. Para obter mais informações, consulte "[Configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Se você escolher a pasta `/docs` de qualquer branch como a fonte de publicação, o {% data variables.product.prodname_pages %} lerá tudo a ser publicado no seu site{% ifversion fpt or ghec %}, inclusive o arquivo _CNAME_,{% endif %} na pasta `/docs`.{% ifversion fpt or ghec %} Por exemplo, quando você edita o domínio personalizado usando as configurações do {% data variables.product.prodname_pages %}, o domínio personalizado grava em `/docs/CNAME`. Para obter mais informações sobre arquivos _CNAME_, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% ifversion ghec %}
## Limitações para {% data variables.product.prodname_emus %}
Se você é um {% data variables.product.prodname_managed_user %}, seu uso de {% data variables.product.prodname_pages %} é limitado.

  - Os sites de {% data variables.product.prodname_pages %} só podem ser publicados de repositórios pertencentes a organizações.
  - Os sites de {% data variables.product.prodname_pages %} só são visíveis para os outros integrantes da empresa.

Para obter mais informações sobre {% data variables.product.prodname_emus %}, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".
{% endif %}

## Geradores de site estáticos

O {% data variables.product.prodname_pages %} publica qualquer arquivo estático do qual você faz push no repositório. É possível criar seus próprios arquivos estáticos ou usar um gerador de site estático para que ele crie o site para você. Também pode personalizar seu próprio processo de criação localmente ou em outro servidor. É recomendável usar o Jekyll, um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %} e um processo de compilação simplificado. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_pages %} e o JJekyll](/articles/about-github-pages-and-jekyll)".

O {% data variables.product.prodname_pages %} usará o Jekyll para criar seu site por padrão. Se quiser usar um gerador de site estático diferente do Jekyll, desabilite o processo de compilação do Jekyll criando um arquivo vazio chamado `.nojekyll` na raiz da fonte de publicação e siga as instruções do gerador de site estático para criar seu site localmente.

O {% data variables.product.prodname_pages %} não aceita linguagens de servidor como PHP, Ruby ou Python.

## Limites para o uso de {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %}
Os sites do {% data variables.product.prodname_pages %} criados após 15 de junho e que usam domínios do `github.io` são disponibilizados por HTTPS. Se você criou seu site ante de 15 de junho de 2016, é possível habilitar o suporte ao HTTPS para tráfego no seu site. Para obter mais informações, consulte "[Proteger seu {% data variables.product.prodname_pages %} com HTTPS](/articles/securing-your-github-pages-site-with-https)".

### Usos proibidos
{% endif %}
O {% data variables.product.prodname_pages %} não foi projetado e nem tem permissão para ser usado como um serviço de hospedagem gratuita na web, capaz de administrar sua empresa online, seu site de comércio eletrônico ou qualquer outro site desenvolvido principalmente para facilitar transações comerciais ou fornecer software comercial como um serviço (SaaS). {% data reusables.pages.no_sensitive_data_pages %}

Além disso, seu uso de {% data variables.product.prodname_pages %} está sujeito aos [Termos de Serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service/) do GitHub, incluindo as restrições relativas a ricos esquemas rápidos, conteúdo sexualmente obsceno e conteúdo ou atividade violento ou ameaçador.

### Limites de uso
Os sites do {% data variables.product.prodname_pages %} estão sujeitos ao seguintes limites de uso:

  - Os repositórios de origem do {% data variables.product.prodname_pages %} têm um limite recomendado de 1 GB.{% ifversion fpt or ghec %} Para obter mais informações, consulte "[Qual é a minha cota de disco?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)"{% endif %}
  - Os sites do {% data variables.product.prodname_pages %} publicados não podem ter mais de 1 GB.
{% ifversion fpt or ghec %}
  - Sites de {% data variables.product.prodname_pages %} têm um limite de banda larga *flexível* de 100 GB por mês.
  - Os sites do {% data variables.product.prodname_pages %} têm um limite *flexível* de 10 compilações por hora.

Se o seu site exceder essas cotas de uso, talvez não possamos atender a ele ou você receba um e-mail formal do {% data variables.contact.contact_support %} sugerindo estratégias para reduzir o impacto do site em nossos servidores, como colocar uma rede de distribuição de conteúdo (CDN, Content Distribution Network) de terceiros na frente do site, usar outros recursos do {% data variables.product.prodname_dotcom %}, como versões, ou migrar para outro serviço de hospedagem que possa atender melhor às suas necessidades.

{% endif %}

## Tipos de MIME no {% data variables.product.prodname_pages %}

Um tipo de MIME é um header que um servidor envia a um navegador, fornecendo informações sobre a natureza e o formato dos arquivos que o navegador solicitou. O {% data variables.product.prodname_pages %} aceita mais de 750 tipos de MIME entre milhares de extensões de arquivo. A lista de tipos de MIME compatíveis é gerada do [projeto mime-db](https://github.com/jshttp/mime-db).

Embora não seja possível especificar tipos de MIME personalizados por arquivo ou repositório, você pode adicionar ou modificar tipos de MIME para uso no {% data variables.product.prodname_pages %}. Para obter mais informações, consulte [as diretrizes de contribuição do mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## Coleta de dados

Quando um site de {% data variables.product.prodname_pages %} é acessado, o endereço IP do visitante é registrado e armazenado para fins de segurança, independentemente se o visitante efetuou o login em {% data variables.product.prodname_dotcom %} ou não. Para obter mais informações sobre as práticas de segurança de {% data variables.product.prodname_dotcom %}, consulte <a href="/articles/github-privacy-statement/" class="dotcom-only">a declaração de privacidade de {% data variables.product.prodname_dotcom %}</a>.
{% endif %}

## Leia mais

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) em {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
