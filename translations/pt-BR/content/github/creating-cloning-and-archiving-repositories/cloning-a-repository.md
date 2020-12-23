---
title: Clonar um repositório
intro: 'Ao criar um repositório no {% data variables.product.product_location %}, ele passa a existir como um repositório remoto. É possível clonar o repositório para criar uma cópia local no seu computador e sincronizar entre os dois locais.'
redirect_from:
  - /articles/cloning-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre clonagem de um repositório

Você pode clonar um repositório do {% data variables.product.product_location %} para o seu computador local para facilitar a correção de conflitos de merge, adicionar ou remover arquivos e fazer push de commits maiores. Ao clonar um repositório, você copia o repositório do {% data variables.product.product_location %} para a sua máquina local.

Clonar um repositório extrai uma cópia completa de todos os dados do repositório que o {% data variables.product.product_location %} tem nesse momento, incluindo todas as versões de cada arquivo e pasta do projeto. Você pode fazer push das alterações no repositório remoto no {% data variables.product.product_location %} ou extrair as alterações de outras pessoas no {% data variables.product.product_location %}. Para obter mais informações, consulte "[Usar comandos comuns do Git](/github/using-git/using-common-git-commands)".

É possível clonar o repositório existente ou clonar o repositório existente de outra pessoa para contribuir para um projeto.

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode clonar um repositório usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`clone de repositório gh`](https://cli.github.com/manual/gh_repo_clone)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Clonar um repositório usando a linha de comando

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### Clonar um repositório no {% data variables.product.prodname_desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. Siga as solicitações no {% data variables.product.prodname_desktop %} para concluir o clone.

Para obter mais informações, consulte "[Clonar um repositório do {% data variables.product.prodname_dotcom %} para o {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

### Clonar um repositório vazio

Um repositório vazio não contém arquivos. Muitas vezes, isso é feito se você não inicializar o repositório com um LEIAME ao criá-lo.

{% data reusables.repositories.navigate-to-repo %}
2. Para clonar seu repositório usando a linha de comando usando HTTPS, em "Configuração rápida", clique no {% octicon "clippy" aria-label="The clipboard icon" %}. Para clonar o repositório usando uma chave SSH, incluindo um certificado emitido pela autoridade de certificação SSH da sua organização, clique em **SSH** e, em seguida, clique em {% octicon "clippy" aria-label="The clipboard icon" %}. ![Botão da URL para clonar o repositório vazio](/assets/images/help/repository/empty-https-url-clone-button.png)

   Como alternativa, para clonar seu repositório para área de trabalho, clique em {% octicon "desktop-download" aria-label="The desktop download button" %} **Configurar na área de trabalho** e seguir as instruções para concluir o clone. ![Botão da área de trabalho para clonar o repositório vazio](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### Solucionar problemas de erros de clonagem

Ao clonar um repositório, é possível que você encontre alguns erros.

Se você não conseguir clonar um repositório, verifique se:

- Você consegue conectar-se usando HTTPS. Para obter mais informações, consulte "[Erros de clonagem por meio de HTTPS](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)".
- Você tem permissão para acessar o repositório que você deseja clonar. Para obter mais informações, consulte "[Erro: Repositório não encontrado](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)".
- O branch-padrão que você deseja clonar ainda existe. Para obter mais informações, consulte a permissão para acessar o repositório que você deseja clonar. Para ibter mais informações, consulte "[Erro: o HEAD remoto refere-se a uma ref inexistente, incapaz de fazer checkout](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)".

{% if currentVersion == "free-pro-team@latest" %}

### Leia mais

- "[Solucionar problemas de conectividade](/articles/troubleshooting-connectivity-problems)"
{% endif %}
