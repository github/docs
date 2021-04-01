---
title: Observações da versão do do GitHub AE
intro: 1 de março de 2021
versions:
  github-ae: '*'
---

### Funcionalidades

#### beta de {% data variables.product.prodname_actions %}

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) é uma solução poderosa e flexível para CI/CD e automação de fluxo de trabalho. Para obter mais informações, consulte "[Introdução a {% data variables.product.prodname_actions %}](/actions/learn-github-actions/introduction-to-github-actions)".

{% data variables.product.prodname_actions %} em {% data variables.product.product_name %} usa um novo [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners), disponível apenas para {% data variables.product.product_name %}, que permite que você personalize as configurações de tamanho, imagem e rede dos executores. Estes executores são um ambiente de computação de serviço de CI acabado com dimensionamento e gestão automáticos, totalmente gerenciado por {% data variables.product.company_short %}. Durante o beta, o uso de {% data variables.actions.hosted_runner %}s é grátis. Para obter mais informações, consulte "[Adicionar {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/adding-ae-hosted-runners)".

Observe que quando {% data variables.product.prodname_actions %} estiver habilitado durante esta atualização, duas organizações denominadas "GitHub Actions" (@**actions** e @**github**) aparecerão em {% data variables.product.product_location %}. Essas organizações são exigidas por {% data variables.product.prodname_actions %}. Os usuários nomeados @**ghost** e @**actions** aparecem como atores para a criação dessas organizações no log de auditoria.

#### Beta de {% data variables.product.prodname_registry %}

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) é um serviço de hospedagem de pacotes, nativamente integrado a {% data variables.product.prodname_actions %}, APIs e webhooks. Crie um [fluxo de trabalho de DevOps de ponta a ponta](/github-ae@latest/packages/quickstart) que inclui seu código, integração contínua e soluções de implantação. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-github-packages)."

Durante este beta, {% data variables.product.prodname_registry %} é grátis para clientes de {% data variables.product.product_name %}.

#### Beta de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_GH_advanced_security %} está disponível no beta e inclui {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_secret_scanning %}. Administradores e proprietários da organização do repositório podem optar por funcionalidades de {% data variables.product.prodname_advanced_security %}, nas configurações de um repositório ou organização, na aba **Segurança e análise**. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

Durante este beta, as funcionalidades de {% data variables.product.prodname_advanced_security %} são grátis para clientes de {% data variables.product.product_name %}.

#### Gerenciar equipes do seu provedor de identidade (IdP)

Os clientes que usam o SCIM (System para Gerenciamento de Identidade entre Domínios) agora podem sincronizar grupos de segurança no Azure Active Directory com equipes de {% data variables.product.company_short %}. Após uma equipe ser vinculada a um grupo de segurança a associação será atualizada automaticamente em {% data variables.product.product_name %} quando um usuário for adicionado ou removido do seu grupo de segurança atribuído. Para obter mais informações, consulte "[Sincronizando uma equipe com um grupo de provedores de identidade ](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)."

#### Beta de listas de permissões de IP

Os proprietários de empresas e organizações agora podem usar o IP permitir listas para restringir o tráfego para a empresa ou organizações específicas. Após configurar uma lista de permissões de IP, apenas os visitantes do IP na lista serão autorizados a acessar os recursos protegidos pela lista.

Essa funcionalidade é fornecida, além da capacidade de solicitar alterações no grupo de segurança de rede que filtram o tráfego na totalidade do inquilino de {% data variables.product.product_name %}.

Para mais informações, consulte "[Restringir tráfego de rede a sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)" e "[Gerenciar endereços IP permitidos para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)".

#### Merge automático de pull request

Com o merge automático, os pull requests podem ser configurados como merge automaticamente quando todos os requisitos de merge forem satisfeitos. Isto evita que os usuários precisem verificar constantemente o estado dos seus pull requests apenas para fazer o merge. O merge automático pode ser habilitado por um usuário com permissão para fazer merge e em pull requests que possuem requisitos de merge não atendidos (como aprovações ausentes ou verificações de status pendentes ou falhas). Para obter mais informações, consulte "[Fazer merge automático de um pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)".

### Alterações

#### Mudanças do desenvolvedor

- [Os proprietários da organização agora podem desabilitar a publicação](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization) de sites de {% data variables.product.prodname_pages %} de repositórios na organização. Esta ação não irá cancelar a publicação de sites existentes.
- Os repositórios que usam {% data variables.product.prodname_pages %} agora podem [fazer a criação e implantação a partir de qualquer branch](/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites).
- Ao escrever um problema ou pull request, a sintaxe da lista para itens, números, e tarefas agora será concluída automaticamente após você pressionar `return` ou `enter`.
- Agora, você pode excluir um diretório em um repositório da página do repositório. Ao acessar diretório, um novo botão kebab ao lado do botão "Adicionar arquivo" dá a opção de excluir o diretório.
- Agora é mais fácil e rápido [fazer referência a problemas ou pull requests](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests), com pesquisa entre várias palavras após "#".

##### Mudanças na administração

- Os proprietários de empresas agora podem [publicar uma mensagem obrigatória](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message). A mensagem é exibida para todos os usuários e eles devem reconhecê-la. Isto pode ser utilizado para exibir informações importantes, termos de serviço ou políticas.
- A permissão de caminho único de {% data variables.product.prodname_github_app%} agora pode [suportar até dez arquivos](/developers/apps/creating-a-github-app-using-url-parameters).
- Ao configurar um {% data variables.product.prodname_github_app%}, a URL de retorno de chamada de autorização é um campo obrigatório. Agora vamos permitir que o integrador especifique várias URLs de chamada de retorno. {% data variables.product.product_name %} nega autorização se a URL de retorno da solicitação não estiver listada.
- Um [novo ponto de extremidade da API](/rest/reference/apps#create-a-scoped-access-token) permite o intercâmbio de um usuário para um token de servidor para um token de servidor com escopo definido para repositórios específicos.
- Agora os eventos são conectados no log de auditoria em [promovendo um integrante da equipe para ser um mantenedor de equipe e em rebaixando um mantenedor de equipe para ser um integrante da equipe](/admin/user-management/audited-actions#teams).
- O [fluxo de autorização de dispositivo OAuth](/developers/apps/authorizing-oauth-apps#device-flow) agora é compatível. Isso permite que qualquer cliente de CLI ou ferramenta de desenvolvedor efetue a autenticação usando um sistema secundário.
- Um usuário não pode mais excluir sua conta se o provisionamento de SCIM estiver habilitado.

##### Renomeação do branch padrão

Os proprietários de empresas e organizações agora podem definir o nome do branch padrão para novos repositórios. Os proprietários de empresas também podem aplicar a sua escolha do nome padrão do branch em todas as organizações ou permitir que as organizações individuais escolham suas próprias. Para mais informações consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)" e "[Gerenciar o nome do branch padrão para os repositórios na sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)".

Os repositórios existentes não são afetados por essas configurações, e seu nome de branch padrão não será alterado.

Esta alteração é uma das muitas alterações que {% data variables.product.company_short %} está fazendo para apoiar projetos e mantenedores que desejam renomear o seu branch padrão. Para saber mais, consulte [github/renaming](https://github.com/github/renaming).


### Correções de erros
- Os usuários não podem mais definir um endereço de e-mail backup nos seus perfis. O endereço de e-mail deles é definido apenas pelo IdP.
- Você não pode mais habilitar a autenticação de dois fatores após a configuração de autenticação através do seu IdP.
- {% data variables.product.product_name %} agora pode conectar-se ao Azure Boards.
- Os cabeçalhos de versão estavam ausentes nas APIs e agora foram definidos como "GitHub AE".
- Foram corrigidos links na documentação.
- Ocorreu uma falha na configuração de encaminhamento de log de auditoria nas configurações da empresa.
- Acesar os gists pode gerar um "500 error".
- O e-mail de suporte ou URL não foi salvo. Agora, ele é salvo após o período de alguns minutos.
- Os modelos de pull request no nível de organização não estavam sendo aplicados em todos os pull requests na organização.

### Problemas conhecidos

- Os dados da localização geográfica não são mostrados no log de auditoria. As informações de localização podem ser detectadas no endereço IP associado a cada evento.
- O link para {% data variables.product.prodname_registry %} de uma página do repositório mostra uma página de pesquisa incorreta quando esse repositório não tem pacotes.
