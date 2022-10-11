---
title: Clonagem e bifurcar repositórios do GitHub Desktop
intro: 'É possível usar o {% data variables.product.prodname_desktop %} para clonar e bifurcar os repositórios do {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### Sobre repositórios locais
Repositórios em {% data variables.product.prodname_dotcom %} são repositórios remotos. É possível clonar ou bifurcar um repositório com {% data variables.product.prodname_desktop %} para criar um repositório local no seu computador.

É possível criar uma cópia local de qualquer repositório em {% data variables.product.product_name %} que que tem acesso ao clonar o repositório. Se você tem um repositório ou tem permissões de gravação, você pode fazer a sincronização entre os locais e os locais remotos. Para obter mais informações, consulte "[Sincronizando seu branch](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)".

Ao clonar um repositório, todas as alterações que você fizer push em {% data variables.product.product_name %} afetarão o repositório original. Para fazer alterações sem afetar o projeto original, é possível criar uma cópia separada fazendo uma bifurcação do repositório. É possível criar uma pull request para propor que os mantenedores incorporem as alterações na sua bifurcação no repositório original ascendente. Para obter mais informações, consulte "[Sobre bifurcações](/github/collaborating-with-issues-and-pull-requests/about-forks)".

Ao tentar usar {% data variables.product.prodname_desktop %} para clonar um repositório no qual você não tem acesso de gravação, {% data variables.product.prodname_desktop %} irá solicitar que você crie uma bifurcação automaticamente. Você pode optar por usar a sua bifurcação para contribuir para o repositório original a ascendente ou trabalhar de forma independente no seu próprio projeto. Todas as bifurcações existentes contribuem, por padrão, com alterações nos seus repositórios ascendentes. Você pode modificar esta escolha a qualquer momento. Para obter mais informações, consulte "[Gerenciar comportamento da bifurcação](#managing-fork-behavior)".

Também é possível clonar um repositório diretamente no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte "[Clonar um repositório do {% data variables.product.prodname_dotcom %} para o {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

### Clonar um repositório

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

### Bifurcar um repositório
Caso você clone um repositório que não tenha acesso de gravação, {% data variables.product.prodname_desktop %} criará uma bifurcação. Depois de criar ou clonar uma bifurcação, {% data variables.product.prodname_desktop %} perguntará como você planeja usar a bifurcação.

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}
{% data reusables.desktop.fork-type-prompt %}

### Gerenciar o comportamento da bifurcação
Você pode alterar como uma bifurcação se comporta com o repositório ascendente em {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

### Criando um alias para um repositório local
Você pode criar um alias para um repositório local para ajudar a diferenciar entre repositórios do mesmo nome em {% data variables.product.prodname_desktop %}. Criar um alias não afeta o nome do repositório no {% data variables.product.prodname_dotcom %}. Na lista de repositórios, os aliases aparecem em itálico.

1. No canto superior esquerdo de {% data variables.product.prodname_desktop %}, à direita do nome atual do repositório, clique em {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
2. Clique com o botão direito no repositório para o qual deseja criar um alias e, em seguida, clique em **Criar alias**.
3. Digite um alias para o repositório.
4. Clique em **Criar alias**.

### Leia mais
- [Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)
