---
title: Configurando o controle de acesso e visibilidade de um pacote
intro: 'Escolha quem tem acesso de leitura, gravação ou administrador à sua imagem de contêiner e a visibilidade das suas imagens de contêiner em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
ms.openlocfilehash: 8ef541f45fd6568db7c8510bc860d81d504494c5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193054'
---
{% data reusables.package_registry.container-registry-ghes-beta %}{% ifversion packages-registries-v2 %}

Pacotes com permissões granulares são escopos para uma conta de usuário pessoal ou de organização. Você pode alterar o controle de acesso e a visibilidade de um pacote separadamente do repositório ao qual ele está conectado (ou vinculado).

Alguns registros suportam apenas permissões com escopo de repositório. Para obter a lista desses registros, confira "[Sobre permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

{% else %}Um pacote herda as permissões e a visibilidade do repositório que possui o pacote.{% endif %} Para obter mais informações sobre permissões para pacotes, escopos relacionados a pacotes para PATs ou gerenciamento de permissões para seus fluxos de trabalho de ações, confira "[Sobre permissões para pacotes GitHub](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% ifversion packages-registries-v2 %}

## Visibilidade e permissões de acesso para imagens de contêiner

{% data reusables.package_registry.visibility-and-access-permissions %}

{% endif %}

## Configurar acesso a imagens de contêiner para sua conta pessoal

Se você tiver permissões de administrador para uma imagem de contêiner que pertence a uma conta pessoal, você poderá atribuir funções de leitura, gravação ou administração a outros usuários. Para obter mais informações sobre essas funções de permissão, confira "[Visibilidade e permissões de acesso para imagens de contêiner](#visibility-and-access-permissions-for-container-images)".

Se o seu pacote for privado ou interno e pertencer a uma organização, você somente poderá dar acesso a outros integrantes ou equipes da organização.

{% data reusables.package_registry.package-settings-option %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e insira o nome, o nome de usuário ou o email da pessoa à qual deseja permitir acesso. As equipes não podem ter acesso a uma imagem de contêiner de uma conta pessoal.
  ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado.
  ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

## Configurar o acesso a imagens de contêiner para uma organização

Se você tiver permissões de administrador para uma imagem de contêiner pertencente à organização, pode atribuir funções de leitura, gravação ou administrador para outros usuários e equipes. Para obter mais informações sobre essas funções de permissão, confira "[Visibilidade e permissões de acesso para imagens de contêiner](#visibility-and-access-permissions-for-container-images)".

Se o seu pacote for privado ou interno e pertencer a uma organização, você somente poderá dar acesso a outros integrantes ou equipes da organização.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e insira o nome, o nome de usuário ou o email da pessoa à qual deseja permitir acesso. Você também pode inserir um nome de equipe da organização para dar acesso a todos os integrantes da equipe.
  ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado.
  ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

## Herdar acesso a uma imagem de contêiner de um repositório

Para simplificar o gerenciamento de pacotes por meio dos fluxos de trabalho de {% data variables.product.prodname_actions %}, você pode habilitar uma imagem contêiner para herdar as permissões de acesso de um repositório por padrão.

Se você herdar as permissões de acesso do repositório onde os fluxos de trabalho do seu pacote são armazenados, posteriormente, você poderá ajustar o acesso ao seu pacote pelas permissões do repositório.

Uma vez que um repositório é sincronizado, você não poderá acessar as configurações de acesso granular do pacote. Para personalizar as permissões do pacote através das configurações de acesso ao pacote granular, você deverá remover a sincronização do repositório primeiro.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
2. Em "Origem do repositório", selecione **Herdar acesso do repositório (recomendado)** .
  ![Caixa de seleção Herdar acesso do repositório](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## Garantir o acesso ao fluxo de trabalho para o seu pacote

Para garantir que um fluxo de trabalho do {% data variables.product.prodname_actions %} tenha acesso ao seu pacote, você deverá conceder acesso explícito ao repositório onde o fluxo de trabalho é armazenado.

O repositório especificado não precisa ser o repositório onde o código-fonte do pacote é mantido. Você pode conceder acesso ao fluxo de trabalho de vários repositórios para um pacote.

{% note %}

**Observação:** a sincronização da imagem de contêiner com um repositório por meio da opção de menu **Acesso ao Actions** é diferente da conexão do contêiner com um repositório. Para obter mais informações sobre como vincular um repositório ao seu contêiner, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

{% endnote %}

### {% data variables.product.prodname_actions %} acesso para imagens de contêiner pertencentes ao usuário 

{% data reusables.package_registry.package-settings-option %}
1. Na barra lateral esquerda, clique em **Acesso ao Actions**.
  ![Opção "Acesso ao Actions" no menu esquerdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Para garantir que seu fluxo de trabalho tenha acesso ao seu pacote de container, você deve adicionar o repositório em que o fluxo de trabalho é armazenado. Clique em **Adicionar repositório** e pesquise o repositório que deseja adicionar.
   ![Botão "Adicionar repositório"](/assets/images/help/package-registry/add-repository-button.png)
3. Ao usar o menu suspenso "função", selecione o nível de acesso padrão que você gostaria que o repositório tivesse na imagem do seu contêiner.
  ![Níveis de acesso permitidos para concessão aos repositórios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Para personalizar ainda mais o acesso à sua imagem de contêiner, confira "[Como configurar o acesso a imagens de contêiner para sua conta pessoal](#configuring-access-to-container-images-for-your-personal-account)".

### acesso de {% data variables.product.prodname_actions %} para imagens de contêiner pertencentes à organização 

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Na barra lateral esquerda, clique em **Acesso ao Actions**.
  ![Opção "Acesso ao Actions" no menu esquerdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Clique em **Adicionar repositório** e pesquise o repositório que deseja adicionar.
   ![Botão "Adicionar repositório"](/assets/images/help/package-registry/add-repository-button.png)
3. Usando o menu suspenso "função", selecione o nível de acesso padrão que você gostaria que os integrantes do repositório tivessem na sua imagem contêiner. Os colaboradores externos não serão incluídos.
  ![Níveis de acesso permitidos para concessão aos repositórios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Para personalizar ainda mais o acesso à sua imagem de contêiner, confira "[Como configurar o acesso a imagens de contêiner para uma organização](#configuring-access-to-container-images-for-an-organization)".

{% ifversion fpt or ghec %}
## Garantir acesso do {% data variables.product.prodname_github_codespaces %} ao seu pacote

Por padrão, um codespace pode acessar diretamente determinados pacotes em registros que oferecem suporte a permissões granulares, como pacotes publicados no mesmo repositório com a opção **Herdar acesso** selecionada. Para ver a lista de registros do {% data variables.product.prodname_registry %} que dão suporte a permissões granulares e acesso contínuo a {% data variables.product.prodname_github_codespaces %}, confira "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

Caso contrário, para garantir que um código tenha acesso ao seu pacote, você deverá conceder acesso ao repositório onde o codespace está sendo iniciado.

O repositório especificado não precisa ser o repositório onde o código-fonte do pacote é mantido. Você pode dar acesso a codespaces em vários repositórios a um pacote.

Depois de selecionar o pacote que você está interessado em compartilhar com codespaces de um repositório, você poderá conceder esse acesso ao repositório.

1. Na barra lateral direita, clique em **Configurações do pacote**.

   ![Opção "Configurações do pacote" no menu direito](/assets/images/help/package-registry/package-settings.png)
   
2. Em "Gerenciar acesso ao Codespaces", clique em **Adicionar repositório**.

   ![Botão "Adicionar repositório"](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. Pesquise o repositório que você deseja adicionar.

   ![Botão "Adicionar repositório"](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. Repita o procedimento para todos os repositórios adicionais que você gostaria de permitir o acesso.

5. Se os codespaces de um repositório não precisarem mais acessar uma imagem, você poderá remover o acesso.

   ![Botão "Remover repositório"](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## Configurar a visibilidade de imagens de contêiner para sua conta pessoal

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode modificar o acesso de uma imagem do contêiner privada ou pública, alterando as configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

{% data reusables.package_registry.package-settings-option %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem de contêiner visível para qualquer pessoa, clique em **Tornar público**.
    {% warning %}

    **Aviso:** depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem de contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**.
  ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)

## Visibilidade da criação de contêiner para os integrantes da organização

Você pode escolher a visibilidade de contêineres que os integrantes da organização podem publicar por padrão.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. À esquerda, clique em **Pacotes**.
6. Em "Criação de contêiner", escolha se deseja permitir a criação de imagens públicas, privadas ou internas de contêineres.
    - Para permitir que os membros da organização criem imagens de contêiner públicas, clique em **Pública**.
    - Para permitir que os membros da organização criem imagens de contêiner privadas visíveis apenas para outros membros da organização, clique em **Privada**. Você pode personalizar ainda mais a visibilidade de imagens de contêiner privado.
    - Para permitir que os membros da organização criem imagens de contêiner internas que são visíveis para todos os membros da organização, clique em **Interna**. Se a organização pertencer a uma empresa, as imagens de contêiner ficarão visíveis para todos os integrantes da empresa.
    ![Opções de visibilidade para imagens de contêiner publicadas pelos membros da organização](/assets/images/help/package-registry/container-creation-org-settings.png)

## Configurar a visibilidade de imagens de contêiner para uma organização

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode conceder a usuários ou equipes diferentes funções de acesso para sua imagem de contêiner por meio das configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem de contêiner visível para qualquer pessoa, clique em **Tornar público**.
    {% warning %}

    **Aviso:** depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem de contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**.
  ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)
