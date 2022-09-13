---
title: Práticas de segurança recomendadas para aplicativos
intro: 'Diretrizes para a preparação de um aplicativo seguro para compartilhar em {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: aaff313f73b74ba28f765050a8f993a9dddea1be
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083962'
---
Se você seguir estas práticas recomendadas, elas ajudarão você a oferecer uma experiência de usuário segura.

## Autorização, autenticação e controle de acesso

Recomendamos criar um aplicativo GitHub em vez de um aplicativo OAuth. {% data reusables.marketplace.github_apps_preferred %}. Confira "[Diferenças entre Aplicativos do GitHub e Aplicativos OAuth](/apps/differences-between-apps/)" para obter mais detalhes.
- Os aplicativos devem usar o princípio do menor privilégio e devem solicitar apenas os escopos do OAuth e as permissões do aplicativo GitHub de que o aplicativo precisa para realizar suas funcionalidades pretendidas. Para obter mais informações, confira [Princípio de privilégios mínimos](https://en.wikipedia.org/wiki/Principle_of_least_privilege) na Wikipédia.
- Os aplicativos devem fornecer aos clientes uma forma de excluir sua conta, sem ter de enviar um e-mail ou ligar para uma pessoa de suporte.
- Os aplicativos não devem compartilhar tokens entre diferentes implementações do aplicativo. Por exemplo, um aplicativo para computador deve ter um token separado de um aplicativo baseado na web. Os tokens individuais permitem que cada aplicativo solicite o acesso necessário aos recursos do GitHub separadamente.
- Crie seu aplicativo com diferentes funções de usuário, dependendo da funcionalidade necessária para cada tipo de usuário. Por exemplo, um usuário-padrão não deve ter acesso à funcionalidade de administração, e os gerentes de cobrança podem não precisar de acesso push ao código de repositório.
- Os aplicativos não devem compartilhar contas de serviço como, por exemplo, e-mail ou serviços de banco de dados para gerenciar seu serviço de SaaS.
- Todos os serviços usados no seu aplicativo devem ter credenciais de login e senha exclusivas.
- O acesso privilegiado de administrador à infraestrutura de hospedagem de produção deve ser concedido apenas a engenheiros e funcionários com funções administrativas.
- Os aplicativos não devem usar tokens de acesso pessoal para autenticação e devem ser autenticados como um [Aplicativo OAuth](/apps/about-apps/#about-oauth-apps) ou um [Aplicativo do GitHub](/apps/about-apps/#about-github-apps):
  - Os Aplicativos OAuth devem ser autenticados com um [token OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - Os Aplicativos do GitHub devem ser autenticados com um [JWT (Token Web JSON)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), um [token OAuth](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ou um [token de acesso de instalação](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

## Proteção de dados

- Os aplicativos devem criptografar dados transferidos para internet pública usando HTTPS, com um certificado TLS válido ou SSH para o Git.
- Os aplicativos devem armazenar com segurança o ID do cliente e as chaves secretas do cliente. Recomendamos armazená-las como [variáveis de ambiente](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Os aplicativos devem excluir todos os dados do usuário no prazo de 30 dias após receber uma solicitação do usuário ou dentro de 30 dias após o fim da relação jurídica do usuário com o GitHub.
- Aplicativos não devem exigir que o usuário forneça sua senha do GitHub.
- Os aplicativos devem criptografar tokens, IDs de clientes e segredos de clientes.

## Log e monitoramento

Os aplicativos devem ter capacidade de registro e monitoramento. Os registros dos aplicativos devem ser mantidos pelo menos 30 dias e arquivados pelo menos um ano.
Um log de segurança deve incluir:

- Eventos de autenticação e autorização
- Alterações na configuração do serviço
- Leitura e gravação de objetos
- Todas as alterações de permissão do usuário e de grupo
- Elevação do papel para administrador
- Marca de tempo consistente para cada evento
- Usuários de origem, endereços IP e/ou nomes de host para todas as ações registradas

## Fluxo de trabalho de resposta a incidentes

Para oferecer uma experiência segura aos usuários, você deve ter um plano de resposta de incidente claro em vigor antes de anunciar o seu aplicativo. Recomendamos ter uma equipe de resposta a incidentes de segurança e operações na sua empresa, em vez de usar um fornecedor terceiro. Você deve ter a capacidade de notificar {% data variables.product.product_name %} no prazo de 24 horas após a confirmação de um incidente.

Para ver um exemplo de um fluxo de trabalho de resposta a incidentes, confira a "Política de Resposta a Violação de Dados" no [site do SANS Institute](https://www.sans.org/information-security-policy/). Um documento breve com medidas claras a serem tomadas em caso de incidente é mais valioso do que um modelo político moroso.

## Gerenciamento de vulnerabilidades e fluxo de trabalho de patch

Você deveria realizar varreduras regulares de vulnerabilidades de infraestrutura de produção. Você deve classificar os resultados de verificações de vulnerabilidades e definir um período de tempo no qual você concorda em remediar a vulnerabilidade.

Se você não estiver pronto para criar um programa completo de gerenciamento de vulnerabilidades, é importante começar criando um processo de patching. Para obter diretrizes sobre como criar uma política de gerenciamento de patch, confira o artigo "[Estabelecer uma política de gerenciamento de patch](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/)" do TechRepublic.
