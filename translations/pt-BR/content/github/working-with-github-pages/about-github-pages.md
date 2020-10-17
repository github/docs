---
title: Sobre o GitHub Pages
intro: 'Você pode usar o {% data variables.product.prodname_pages %} para hospedar um site sobre si mesmo, sua organização ou seu projeto diretamente de um repositório do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/what-are-github-pages/
  - /articles/what-is-github-pages/
  - /articles/user-organization-and-project-pages/
  - /articles/using-a-static-site-generator-other-than-jekyll/
  - /articles/mime-types-on-github-pages/
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio/
  - /articles/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre o {% data variables.product.prodname_pages %}

O {% data variables.product.prodname_pages %} é um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no {% data variables.product.product_name %} e, como opção, executa os arquivos por meio de um processo e publica um site. Você pode ver exemplos de sites do {% data variables.product.prodname_pages %} na [coleção de exemplos do {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% if currentVersion == "free-pro-team@latest" %}
Você pode hospedar seu site em
no domínio `github.io` de {% data variables.product.prodname_dotcom %}de `github.io` ou no seu próprio domínio personalizado. Para obter mais informações, consulte "[Usar um domínio personalizado com o {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

Para começar, consulte "[Criar um site do {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Os proprietários da organização podem desabilitar a publicação de
sites de {% data variables.product.prodname_pages %} nos repositórios da organização. Para obter mais informações, consulte "[Desabilitar a publicação de sites de {% data variables.product.prodname_pages %} para sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

### Tipos de site do {% data variables.product.prodname_pages %}

Há três tipos de site do {% data variables.product.prodname_pages %}: projeto, usuário e organização. Os sites de projeto são conectados a um projeto específico hospedado no {% data variables.product.product_name %}, como uma biblioteca do JavaScript ou um conjunto de receitas. Os sites de usuário e organização são conectados a uma conta específica do {% data variables.product.product_name %}.

Para publicar um site de usuário, você deve criar um repositório pertencente à sua conta de usuário denominada {% if currentVersion == "free-pro-team@latest" %}`<user>. ithub.io`{% else %}`<user>.<hostname>`{% endif %}. Para publicar um site da organização, você deve criar um repositório pertencente a uma organização denominada {% if currentVersion == "free-pro-team@latest" %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% if currentVersion == "free-pro-team@latest" %}A menos que você esteja usando um domínio personalizado, os sites de usuário e organização estarão disponíveis em `http(s)://<username>.github.io` ou `http(s)://<organization>.github.io`.{% endif %}

Os arquivos de origem de um site de projeto são armazenados no mesmo repositório que o respectivo projeto. {% if currentVersion == "free-pro-team@latest" %}A menos que você esteja usando um domínio personalizado, os sites de projeto estão disponíveis em `http(s)://<user>. .github.io<repository>` ou `http(s)://<organization>.github.io/<repository>`.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Para obter mais informações sobre como os domínios personalizados afetam o URL do seu site, consulte "[Sobre domínios personalizados e {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Você pode criar apenas um site de usuário ou organização para cada conta do {% data variables.product.product_name %}. Os sites de projeto, sejam eles de uma conta de organização ou de usuário, são ilimitados.

{% if currentVersion != "free-pro-team@latest" %}
A URL em que o site está disponível depende da habilitação do isolamento de subdomínio para
{% data variables.product.product_location %}.

| Tipo de site | Isolamento de subdomínio habilitado | Isolamento de subdomínio desabilitado |
| ------------ | ----------------------------------- | ------------------------------------- |
|              |                                     |                                       |
 Usuário | 

`http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` | Organização | `http(s)://pages.<hostname>/<organization>/<repository>/` | `http(s)://<hostname>/pages/<organization>/<repository>/` | Site de projeto pertencente a uma conta de usuário | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Site de projeto pertencente a uma conta de organização | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" ou contate o administrador do site.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Observação:** os repositórios que usam o esquema de nomenclatura `<user>.github.com` herdado ainda são publicados, mas os visitantes serão redirecionados de `http(s)://<username>.github.com` para `http(s)://<username>.github.io`. Se ambos os repositórios, `<user>.github.com` e `<user>.github.io`, existirem, somente o repositório `<user>.github.io` será publicado.

{% endnote %}
{% endif %}

### Publicar fontes para sites do {% data variables.product.prodname_pages %}

A fonte de publicação do seu site de {% data variables.product.prodname_pages %} é o branch e a pasta onde os arquivos de origem do seu site são armazenados.

{% data reusables.pages.private_pages_are_public_warning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

Se existir uma fonte de publicação padrão no repositório, o {% data variables.product.prodname_pages %} publicará automaticamente um site a partir dessa fonte. A fonte de publicação padrão para sites de usuário e organização é a raiz do branch-padrão do repositório. A fonte de publicação padrão para sites de projeto é a raiz do branch `gh-pages`.

Se você desejar manter os arquivos de origem do seu site em outro local, você poderá alterar a fonte de publicação do seu site. É possível publicar o site a partir de qualquer branch no repositório, a partir da raiz do repositório nesse branch, `/` ou a partir da pasta `/docs` nesse branch. Para obter mais informações, consulte "[Configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Se você escolher a pasta `/docs` de qualquer branch como fonte de publicação, {% data variables.product.prodname_pages %} lerá tudo para publicar o seu site{% if currentVersion == "free-pro-team@latest" %}, incluindo o arquivo _CNAME_ ,{% endif %} da pasta `/docs` .{% if currentVersion == "free-pro-team@latest" %} Por exemplo, quando você editar o seu domínio personalizado através das configurações {% data variables.product.prodname_pages %}, o domínio personalizado escreverá em `/docs/CNAME`. Para obter mais informações sobre arquivos _CNAME_, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% else %}

A fonte de publicação padrão para sites de usuário e organização é o branch `master`. Se o repositório para o site de usuário ou organização tiver um branch `master`, seu site será publicado automaticamente a partir desse branch. Não é possível escolher uma fonte de publicação diferente para sites de usuário ou organização.

A fonte de publicação padrão para um site de projeto é o branch `gh-pages`. Se o repositório para seu site de projeto tiver um branch `gh-pages`, seu site será publicado automaticamente a partir desse branch.

Os sites de projeto também podem ser publicados do branch `master` ou de uma pasta `/docs` no branch `master`. Para publicar o site de uma dessas fontes, é preciso configurar uma fonte de publicação diferente. Para obter mais informações, consulte "[Configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

 Se você escolher a pasta `/docs` do branch `master` como fonte de publicação, {% data variables.product.prodname_pages %} lerá tudo para publicar o seu site{% if currentVersion == "free-pro-team@latest" %}, incluindo o arquivo _CNAME_ {% endif %} da pasta `/docs`.{% if currentVersion == "free-pro-team@latest" %} Por exemplo, ao editar o seu domínio personalizado através das configurações de {% data variables.product.prodname_pages %}, o domínio personalizado escreverá a `/docs/CNAME`. Para obter mais informações sobre arquivos _CNAME_, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

 Você não pode publicar seu site de projeto de qualquer outro branch, mesmo que o branch padrão não seja `master` ou `gh-pages`.

{% endif %}

### Geradores de site estáticos

O {% data variables.product.prodname_pages %} publica qualquer arquivo estático do qual você faz push no repositório. É possível criar seus próprios arquivos estáticos ou usar um gerador de site estático para que ele crie o site para você. Também pode personalizar seu próprio processo de criação localmente ou em outro servidor. É recomendável usar o Jekyll, um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %} e um processo de compilação simplificado. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_pages %} e o JJekyll](/articles/about-github-pages-and-jekyll)".

O {% data variables.product.prodname_pages %} usará o Jekyll para criar seu site por padrão. Se quiser usar um gerador de site estático diferente do Jekyll, desabilite o processo de compilação do Jekyll criando um arquivo vazio chamado `.nojekyll` na raiz da fonte de publicação e siga as instruções do gerador de site estático para criar seu site localmente.

O {% data variables.product.prodname_pages %} não aceita linguagens de servidor como PHP, Ruby ou Python.

### Diretrizes para usar o {% data variables.product.prodname_pages %}

{% if currentVersion == "free-pro-team@latest" %}
- Os sites do {% data variables.product.prodname_pages %} criados após 15 de junho e que usam domínios do `github.io` são disponibilizados por HTTPS. Se você criou seu site ante de 15 de junho de 2016, é possível habilitar o suporte ao HTTPS para tráfego no seu site. Para obter mais informações, consulte "[Proteger seu {% data variables.product.prodname_pages %} com HTTPS](/articles/securing-your-github-pages-site-with-https)".
- {% data reusables.pages.no_sensitive_data_pages %}
- O uso que você faz do {% data variables.product.prodname_pages %} está sujeito aos [Termos de serviço do GitHub](/articles/github-terms-of-service/), inclusive a proibição de revenda.

#### Limites de uso
{% endif %}
Os sites do {% data variables.product.prodname_pages %} estão sujeitos ao seguintes limites de uso:

  - Repositórios de origem de {% data variables.product.prodname_pages %} têm um limite recomendado de 1 GB.{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Qual é a minha cota de disco?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - Os sites do {% data variables.product.prodname_pages %} publicados não podem ter mais de 1 GB.
{% if currentVersion == "free-pro-team@latest" %}
  - Sites de {% data variables.product.prodname_pages %} têm um limite de banda larga *flexível* de 100 GB por mês.
  - Os sites do {% data variables.product.prodname_pages %} têm um limite *flexível* de 10 compilações por hora.

Se o seu site exceder essas cotas de uso, talvez não possamos atender a ele ou você receba um e-mail formal do {% data variables.contact.contact_support %} sugerindo estratégias para reduzir o impacto do site em nossos servidores, como colocar uma rede de distribuição de conteúdo (CDN, Content Distribution Network) de terceiros na frente do site, usar outros recursos do {% data variables.product.prodname_dotcom %}, como versões, ou migrar para outro serviço de hospedagem que possa atender melhor às suas necessidades.

#### Usos proibidos

O {% data variables.product.prodname_pages %} não foi projetado e nem tem permissão para ser usado como um serviço de hospedagem gratuita na web, capaz de administrar sua empresa online, seu site de comércio eletrônico ou qualquer outro site desenvolvido principalmente para facilitar transações comerciais ou fornecer software comercial como um serviço (SaaS).

Além disso, os sites do {% data variables.product.prodname_pages %} não devem apresentar:

  - Conteúdo ou atividade ilegal ou proibido por nossos [Termos de Serviço](/articles/github-terms-of-service/) ou pelas [Diretrizes da Comunidade](/articles/github-community-guidelines/);
  - Atividade ou conteúdo violento ou ameaçador
  - Excesso de atividade automatizada em massa (spam, por exemplo)
  - Atividade que comprometa serviços ou usuários do GitHub
  - Esquemas para enriquecer rapidamente
  - Conteúdo sexual obsceno
  - Conteúdo que deturpe sua identidade ou a finalidade do site
Caso não tenha certeza se o seu uso ou o uso previsto se enquadra nessas categorias, entre em contato com o

{% data variables.contact.contact_support %}.
{% endif %}

### Tipos de MIME no {% data variables.product.prodname_pages %}

Um tipo de MIME é um header que um servidor envia a um navegador, fornecendo informações sobre a natureza e o formato dos arquivos que o navegador solicitou. O {% data variables.product.prodname_pages %} aceita mais de 750 tipos de MIME entre milhares de extensões de arquivo. A lista de tipos de MIME compatíveis é gerada do [projeto mime-db](https://github.com/jshttp/mime-db).

Embora não seja possível especificar tipos de MIME personalizados por arquivo ou repositório, você pode adicionar ou modificar tipos de MIME para uso no {% data variables.product.prodname_pages %}. Para obter mais informações, consulte [as diretrizes de contribuição do mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

### Leia mais

- [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages) em {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/v3/repos/pages)"
