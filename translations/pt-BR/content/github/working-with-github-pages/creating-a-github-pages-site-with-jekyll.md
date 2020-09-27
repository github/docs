---
title: Criar um site do GitHub Pages com o Jekyll
intro: 'É possível usar o Jekyll para criar um site do {{ site.data.variables.product.prodname_pages }} em um repositório novo ou existente.'
product: '{{ site.data.reusables.gated-features.pages }}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
permissions: 'Pessoas com permissões de administrador para um repositório podem criar um site do {{ site.data.variables.product.prodname_pages }} com o Jekyll.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Pré-requisitos

Antes de poder usar o Jekyll para criar um site do {{ site.data.variables.product.prodname_pages }}, você precisa instalar o Jekyll e o Git. Para obter mais informações, consulte [Instalação](https://jekyllrb.com/docs/installation/) na documentação do Jekyll e "[Configurar o Git](/articles/set-up-git)".

{{ site.data.reusables.pages.recommend-bundler }}

{{ site.data.reusables.pages.jekyll-install-troubleshooting }}

### Criar um repositório para seu site

{{ site.data.reusables.pages.new-or-existing-repo }}

{{ site.data.reusables.pages.private_pages_are_public_warning }}

{{ site.data.reusables.repositories.create_new }}
{{ site.data.reusables.repositories.owner-drop-down }}
{{ site.data.reusables.pages.create-repo-name }}
{{ site.data.reusables.repositories.choose-repo-visibility }}

### Criar seu site

{{ site.data.reusables.pages.must-have-repo-first }}

{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
2. Se você ainda não tem uma cópia do seu repositório, navegue até o local onde deseja armazenar os arquivos de origem do seu site, substituindo _PARENT-FOLDER_ pela pasta que deverá conter a pasta do repositório.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. Caso você ainda não o tenha feito, inicialize um repositório Git local, substituindo _REPOSITORY-NAME_ pelo nome do seu repositório.
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
{{ site.data.reusables.pages.decide-publishing-source }}
{{ site.data.reusables.pages.navigate-publishing-source }}
  Por exemplo, se você escolheu publicar o seu site a partir da pasta `documentação` no branch-padrão, crie e altere os diretórios na pasta `documentação`.
 ```shell
 $ mkdir docs
 # Cria uma nova pasta chamada docs
 $ cd docs
 ```
 Se você optou por publicar seu site a partir do branch `gh-pages`, crie e faça checkout do branch `gh-pages`.
 ```shell
 $ git checkout --orphan gh-pages
 # Cria um novo branch, sem histórico ou conteúdo, chamado gh-pages e alterna para o branch gh-pages
 ```
 7. Para criar um novo site do Jekyll, use o comando `jekyll new`, substituindo _VERSION_ pela versão atual de dependências do Jekyll. Para obter mais informações, consulte "[Versões de dependências](https://pages.github.com/versions/)" no site do {{ site.data.variables.product.prodname_pages }}.
    - Se você instalou o bundler:
      ```shell
      $ bundle exec jekyll <em>VERSION</em> new .
      # Cria um site do Jekyll no diretório atual
      ```
    - Se você não tem o bundler instalado:
     ```shell
     $ jekyll <em>VERSION</em> new .
     # Cria um site do Jekyll no diretório atual
     ```
8. Abra o Gemfile que foi criado e siga as instruções nos comentários do Gemfile para usar o {{ site.data.variables.product.prodname_pages }}. ![Instruções para atualizar o Gemfile](/assets/images/help/pages/gemfile-instructions.png)
9. Para que a linha `gem "github-pages"` fique com a aparência mostrada a seguir, atualize-a substituindo _VERSION_ pela versão atual de dependências para `github-pages`. Para obter mais informações, consulte "[Versões de dependências](https://pages.github.com/versions/)" no site do {{ site.data.variables.product.prodname_pages }}.
```shell
gem "github-pages", "~> <em>VERSION</em>", group: :jekyll_plugins
```
10. Salve e feche o Gemfile.
11. Como alternativa, teste seu site localmente. Para obter mais informações, consulte "[Testar seu site do {{ site.data.variables.product.prodname_pages }} localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".
12. Adicione seu repositório do {{ site.data.variables.product.product_name }} como um remote, substituindo {% if currentVersion != "free-pro-team@latest" %}_HOSTNAME_ pelo nome de host do appliance{% endif %} _USER_ pela conta a que pertence o repositório{% if currentVersion != "free-pro-team@latest" %}{% endif %} e _REPOSITORY_ pelo nome do repositório.
```shell
{% if currentVersion == "free-pro-team@latest" %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. Faça push no repositório para o {{ site.data.variables.product.product_name }}, substituindo _BRANCH_ pelo nome do branch em que você está trabalhando.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{{ site.data.reusables.pages.configure-publishing-source }}
{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.visit-site }}

{{ site.data.reusables.pages.admin-must-push }}

### Próximas etapas

Para adicionar uma nova página ou postagem ao seu site, consulte "[Adicionar conteúdo ao site do {{ site.data.variables.product.prodname_pages }} usando o Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)".

{{ site.data.reusables.pages.add-jekyll-theme }} Para obter mais informações, consulte "[Adicionar um tema ao site do {{ site.data.variables.product.prodname_pages }} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
