---
title: Importar um repositório Git usando a linha de comando
intro: '{% ifversion fpt %}Se [Importador do GitHub](/articles/importing-a-repository-with-github-importer) não for adequado para os seus propósitos como se o seu código existente estivesse hospedado em uma rede privada, recomendamos realizar a importação usando a linha de comando.{% else %}Importar projetos do Git usando a linha de comando é adequado quando seu código existente está hospedado em uma rede privada.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Importar o repositório localmente
---

Antes de iniciar, certifique-se de que sabe:

- Seu nome de usuário {% data variables.product.product_name %}
- A URL clone para o repositório externo, como `https://external-host.com/user/repo.git` ou `git://external-host.com/user/repo.git` (talvez com um `usuário@` na frente do nome do domínio `external-host.com`)

{% tip %}

Como demonstração, usaremos:

- Uma conta externa denominada **extuser**
- Um host Git externo denominado `https://external-host.com`
- Uma conta pessoal de {% data variables.product.product_name %} denominada **ghuser**
- Um repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} chamado **repo.git**

{% endtip %}

1. [Crie um novo repositório em {% data variables.product.product_name %}](/articles/creating-a-new-repository). Você importará o repositório Git externo para este novo repositório.
2. Na linha de comando, faça um clone "vazio" do repositório usando a URL clone externo. Isso criará uma cópia integral dos dados, mas sem um diretório de trabalho para editar arquivos, e garantirá uma exportação limpa e recente de todos os dados antigos.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Faça o push do repositório clonado localmente em {% data variables.product.product_name %} usando a opção "mirror" (espelho), que assegura que todas as referências, como branches e tags, são copiadas para o repositório importado.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. Remova o repositório local temporário.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
