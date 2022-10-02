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
shortTitle: Create site with Jekyll
ms.openlocfilehash: 409b2d1e21f89471e7ad92f790bc7ac67e903a62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127619'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Pré-requisitos

Antes de poder usar o Jekyll para criar um site do {% data variables.product.prodname_pages %}, você precisa instalar o Jekyll e o Git. Para obter mais informações, confira [Instalação](https://jekyllrb.com/docs/installation/) na documentação do Jekyll e "[Configurar o Git](/articles/set-up-git)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Criar um repositório para seu site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %}

## Criar seu site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Se você ainda não tem uma cópia do seu repositório, procure o local em que deseja armazenar os arquivos de origem do seu site, substituindo _PARENT-FOLDER_ pela pasta que deverá conter a pasta do repositório.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
1. Caso você ainda não tenha feito isso, inicialize um repositório Git local, substituindo _REPOSITORY-NAME_ pelo nome do seu repositório.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Altere os diretórios no repositório.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %} {% data reusables.pages.navigate-publishing-source %} Por exemplo, se você optar por publicar seu site por meio da pasta `docs` no branch padrão, crie e altere os diretórios para a pasta `docs`.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 Se você optar por publicar seu site no branch `gh-pages`, crie o branch `gh-pages` e faça check-out dele.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
 $ git rm -rf 
 # Removes the contents from your default branch from the working directory
 ```
1. Para criar um site do Jekyll, use o comando `jekyll new`:
   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```
1. Abra o Gemfile que o Jekyll criou.
1. Adicione "#" ao início da linha que começa com `gem "jekyll"` para remover o comentário dessa linha.
1. Adicione o gem `github-pages` editando a linha que começa com `# gem "github-pages"`. Mudar esta linha para:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Substitua _GITHUB-PAGES-VERSION_ pela última versão compatível do gem `github-pages`. Encontre esta versão aqui: "[Versões de dependência](https://pages.github.com/versions/)".

   A versão correta do Jekyll será instalada como uma dependência do gem `github-pages`.
1. Salve e feche o Gemfile.
1. Da linha de comando, execute `bundle install`.
1. Opcionalmente, faça as edições necessárias no arquivo `_config.yml`. Isto é necessário para caminhos relativos quando o repositório é hospedado em um subdiretório.  Para obter mais informações, confira "[Como dividir uma subpasta em um novo repositório](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)".
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
  ```
1. Como alternativa, teste seu site localmente. Para obter mais informações, confira "[Como testar seu site do {% data variables.product.prodname_pages %} localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
1. Adicione e faça commit do seu trabalho.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
1. Adicione seu repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} como um repositório remoto, substituindo {% ifversion ghes or ghae %}_HOSTNAME_ pelo nome do host da sua empresa,{% endif %} _USER_ pela conta à qual o repositório pertence{% ifversion ghes or ghae %},{% endif %} e _REPOSITORY_ pelo nome do repositório.
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
{% data reusables.pages.configure-publishing-source %} {% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Próximas etapas

Para adicionar uma nova página ou postagem ao seu site, confira "[Como adicionar conteúdo ao seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{% data reusables.pages.add-jekyll-theme %} Para obter mais informações, confira "[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
