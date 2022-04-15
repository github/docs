---
title: Criar um site do GitHub Pages com o Jekyll
intro: 'É possível usar o Jekyll para criar um site do {% data variables.product.prodname_pages %} em um repositório novo ou existente.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Criar site com o Jekyll
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Pré-requisitos

Antes de poder usar o Jekyll para criar um site do {% data variables.product.prodname_pages %}, você precisa instalar o Jekyll e o Git. Para obter mais informações, consulte [Instalação](https://jekyllrb.com/docs/installation/) na documentação do Jekyll e "[Configurar o Git](/articles/set-up-git)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Criar um repositório para seu site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

## Criar seu site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Se você ainda não tem uma cópia do seu repositório, navegue até o local onde deseja armazenar os arquivos de origem do seu site, substituindo _PARENT-FOLDER_ pela pasta que deverá conter a pasta do repositório.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. Caso você ainda não o tenha feito, inicialize um repositório Git local, substituindo _REPOSITORY-NAME_ pelo nome do seu repositório.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Cria uma nova pasta no seu computador, inicializada como um repositório Git
  ```
  4. Altere os diretórios no repositório.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Altera o diretório de trabalho
  ```
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  Por exemplo, se você escolheu publicar o seu site a partir da pasta `documentação` no branch-padrão, crie e altere os diretórios na pasta `documentação`.
 ```shell
 $ mkdir docs
 # Cria uma nova pasta chamada docs
 $ cd docs
 ```
 Se você optou por publicar seu site a partir do branch `gh-pages`, crie e faça checkout do branch `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. Para criar um novo site do Jekyll, use o comando `jekyll new`:
   ```shell
   $ jekyll new --skip-bundle .
   # Cria um site do Jekyll no diretório atual
   ```
1. Abra o Gemfile que o Jekyll criou.
1. Adicione "#" ao início da linha que começa com `gem "jekyll"` para comentar nesta linha.
1. Adicione o gem `github-pages` editando a linha que começa com `# gem "github-pages"`. Mudar esta linha para:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Substitua _GITHUB-PAGES-VERSÃO_ pela última versão compatível do gem de `github-pages`. Você pode encontrar esta versão aqui: "[Versões de dependência](https://pages.github.com/versions/)".

   A versão correta do Jekyll será instalada como uma dependência do gem de `github-pages`.
1. Salve e feche o Gemfile.
1. Da linha de comando, execute `bundle install`.
1. Opcionalmente, faça todas as edições necessárias no arquivo `_config.yml`. Isto é necessário para caminhos relativos quando o repositório é hospedado em um subdiretório.  Para obter mais informações, consulte "[Dividindo uma subpasta em um novo repositório](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)."
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. Como alternativa, teste seu site localmente. Para obter mais informações, consulte "[Testar seu site do {% data variables.product.prodname_pages %} localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
1. Adicione e faça commit do seu trabalho.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Adicione o seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} como remoto, substituindo {% ifversion ghes or ghae %}_HOSTNAME_ pelo nome de host da sua empresa,{% endif %} _USUÁRIO_ pela conta à qual o repositório pertence{% ifversion ghes or ghae %},{% endif %} e _REPOSITÓRIO_ pelo nome do repositório.
```shell
{% ifversion fpt or ghec %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
1. Faça push no repositório para o {% data variables.product.product_name %}, substituindo _BRANCH_ pelo nome do branch em que você está trabalhando.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Próximas etapas

Para adicionar uma nova página ou postagem ao seu site, consulte "[Adicionar conteúdo ao site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{% data reusables.pages.add-jekyll-theme %} Para obter mais informações, consulte "[Adicionar um tema ao site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
