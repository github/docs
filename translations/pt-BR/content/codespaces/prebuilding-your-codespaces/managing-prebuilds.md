---
title: Gerenciando pré-compilações
shortTitle: Gerenciar pré-compilações
intro: 'Você pode revisar, modificar e excluir as configurações de pré-compilação do seu repositório.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

## Verificando, alterando e excluindo suas configurações de pré-compilação

The prebuilds that you configure for a repository are created and updated using a {% data variables.product.prodname_actions %} workflow, managed by the {% data variables.product.prodname_github_codespaces %} service.

Dependendo das configurações em uma configuração de pré-criação, o fluxo de trabalho para atualizar o modelo de pré-criação poderá ser acionado por esses eventos:

* Criando ou atualizando a configuração de pré-compilação
* Enviando por push um commit ou um pull request para um branch configurado para pré-compilações
* Alterando qualquer um dos arquivos de configuração de contêiner de desenvolvimento
* Um agendamento que você definiu na configuração de pré-criação
* Acionando manualmente o fluxo de trabalho

As configurações na configuração de pré-criação determinam quais eventos acionaram automaticamente uma atualização do modelo de pré-criação. Para obter mais informações, consulte "[Configurando pré-criações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

As pessoas com acesso de administrador a um repositório podem verificar o progresso de pré-compilações, editar e excluir configurações de pré-criação.

### Visualizando o progresso das pré-compilações
Você pode visualizar o status atual da última execução do fluxo de trabalho para cada configuração de pré-compilação que você definiu na página de {% data variables.product.prodname_codespaces %} das configurações do repositório. Por exemplo, "Atualmente em execução" ou "Última execução 1 hora atrás".

Para ver a saída de registro para a última execução do fluxo de trabalho de pré-compilação, clique em **Ver saída**.

![O botão 'Ver saída'](/assets/images/help/codespaces/prebuilds-see-output.png)

Ele exibe a saída da execução mais recente do fluxo de trabalho na aba **Ações**.

![A saída de fluxo de trabalho de pré-compilação](/assets/images/help/codespaces/prebuilds-log-output.png)

Como alternativa, para visualizar todas as execuções de fluxo de trabalho pré-compilado associadas a um branch especificada, clique no botão de retiências e selecione **Visualizar execuções** no menu suspenso.

![A opção 'Visualizar execuções' no menu suspenso](/assets/images/help/codespaces/prebuilds-view-runs.png)

Exibe o histórico de execução de fluxo de trabalho para pré-compilações para o branch associado.

![Histórico de execução do fluxo de trabalho](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

### Editando uma configuração de pré-compilação

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja editar.
1. No menu suspenso, clique em **Editar**.

   ![A opção 'Editar' no menu suspenso](/assets/images/help/codespaces/prebuilds-edit.png)

1. Faça as alterações necessárias na configuração de pré-compilação e, em seguida, clique em **Atualizar**.

### Desabilitando configuração de pré-compilação

Para pausar a atualização dos modelos de pré-compilação para uma configuração, você pode desabilitar as execuções de fluxo de trabalho para a configuração. Desabilitar as execuções de fluxo de trabalho para uma configuração de pré-compilação não exclui nenhum modelo de pré-compilação previamente criado para essa configuração e, como resultado, os codespaces continuarão sendo gerados a partir de um modelo de pré-compilação existente.

Desabilitar as execuções de fluxo de trabalho para uma configuração de pré-compilação é útil se você precisar investigar as falhas de criação de modelo.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja desabilitar.
1. No menu suspenso, clique em **Desabilitar execuções**.

   ![A opção "Desabilitar execuções" no menu suspenso](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar que você deseja desabilitar esta configuração, clique em **OK**.

### Excluindo a configuração de uma pré-compilação

A exclusão de uma configuração de pré-compilação também exclui todos os modelos de pré-compilação criados anteriormente para essa configuração. Como resultado, logo após você excluir uma configuração, as pré-compilações geradas por essa configuração não estarão disponíveis ao criar um novo codespace.

Depois que você excluir uma configuração de pré-compilação, as execuções do fluxo de trabalho que foram enfileirados ou iniciados ainda serão executadas. Elas serão listados no histórico de execução de fluxo de trabalho junto com execuções de fluxo de trabalho concluídas anteriormente.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja excluir.
1. No menu suspenso, clique em **Excluir**.

   ![A opção "Excluir" no menu suspenso](/assets/images/help/codespaces/prebuilds-delete.png)

1. Clique em **OK** para confirmar a exclusão.

### Acionar pré-compilações manualmente

Pode ser útil acionar manualmente a execução de um fluxo de trabalho para uma configuração de pré-compilação. Geralmente, isso só é necessário se você estiver depurando um problema com o fluxo de trabalho para uma configuração de pré-compilação.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação cujo fluxo de trabalho você deseja acionar.
1. No menu suspenso, clique em **Acionar manualmente**.

   ![A opção "Acionar manualmente" no menu suspenso](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## Permitir que uma pré-compilação acesse recursos externos

Por padrão, o fluxo de trabalho de {% data variables.product.prodname_actions %} para uma configuração de pré-compilação só pode acessar o próprio conteúdo do repositório. Seu projeto pode usar recursos adicionais para criar o ambiente de desenvolvimento, como arquivos em outros repositórios, pacotes, imagens GHCR e APIs. Para permitir que a sua configuração de pré-compilação acesse esses recursos, você deverá criar uma nova conta pessoal e, em seguida, usar esta conta para criar um token de acesso pessoal (PAT) com os escopos apropriados.

1. Crie uma nova conta pessoal em {% data variables.product.prodname_dotcom %}.

   {% warning %}

   **Aviso**: Embora você possa gerar o PAT usando a sua conta pessoal existente, é altamente recomendável que você crie uma nova conta com acesso apenas aos repositórios de destino necessários para seu cenário. Isso acontece porque a permissão do `repositório` do token de acesso concede acesso a todos os repositórios aos quais a conta tem acesso. Para obter mais informações, consulte "[Inscrevendo-se para uma nova conta no GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" e "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)".

   {% endwarning %}
1. Dê a nova conta acesso de leitura aos repositórios necessários. Para obter mais informações, consulte "[Gerenciar o acesso de um indivíduo ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)".
1. Enquanto estiver conectado à nova conta, crie um PAT com o escopo `repo`. Opcionalmente, se a pré-compilação tiver de fazer o download do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, selecione também o escopo `read:packages`. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

   ![Escopos "repo" e "pacotes" selecionados para um PAT](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   Se a pré-compilação usar um pacote do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, você deverá conceder o novo acesso à nova conta ao pacote ou configurar o pacote para herdar as permissões de acesso do repositório que você está pré-compilando. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".
{% ifversion ghec %}1. Autorizar o token para uso com o logon único SAML (SSO), para que ele possa acessar repositórios que são propriedade de organizações com SSO habilitado. Para obter mais informações, consulte "[Autorizar um token de acesso pessoal para uso com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

   ![O botão para configurar o SSO para um PAT](/assets/images/help/codespaces/configure-SSO-for-PAT.png)

{% endif %}
1. Copie a string do token. Você irá atribuir isto a um segredo de repositório de {% data variables.product.prodname_codespaces %}.
1. Efetue novamente o login na conta com acesso de administrador ao repositório.
1. No repositório para o qual você deseja criar as pré-compilações de {% data variables.product.prodname_codespaces %}, crie um novo segredo de repositório de {% data variables.product.prodname_codespaces %} chamado `CODESPACES_PREBUILD_TOKEN`, dando-lhe o valor do token que você criou e copiou. For more information, see "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)."

O PAT será usado para todos os modelos de pré-compilação subsequentes criados para o seu repositório. Ao contrário de outros segredos do repositório de {% data variables.product.prodname_codespaces %}, o segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-compilação e não estará disponível para uso em codespaces criados a partir do seu repositório.

## Leia mais

- "[Solucionar problemas de pré-compilações](/codespaces/troubleshooting/troubleshooting-prebuilds)"
