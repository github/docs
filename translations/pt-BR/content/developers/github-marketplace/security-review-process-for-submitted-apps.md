---
title: Processo de revisão de segurança para os aplicativos enviados
intro: 'A equipe de segurança do GitHub revisa todos os aplicativos enviados para {% data variables.product.prodname_marketplace %} a fim de garantir que cumpram os requisitos de segurança. Siga estas práticas recomendadas para se preparar para o processo de revisão.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
versions:
  free-pro-team: '*'
---



Após enviar o seu aplicativo para aprovação, a equipe de segurança do GitHub solicitará que você responda a um questionário de segurança sobre o seu aplicativo e sobre o programa de segurança em geral. Como parte da revisão, você terá a opção de fornecer documentos para respaldar suas respostas. Você deve enviar dois documentos obrigatórios antes de seu aplicativo ser aprovado para {% data variables.product.prodname_marketplace %}: um [plano de resposta a incidente](#incident-response-plan) e [o fluxo de trabalho de gerenciamento de vulnerabilidades](#vulnerability-management-workflow).


### Práticas recomendadas de segurança

Siga estas práticas recomendadas para ter uma revisão de segurança bem sucedida e fornecer uma experiência segura para o usuário.

#### Autorização, autenticação e controle de acesso

Recomendamos enviar um aplicativo GitHub em vez de um aplicativo OAuth. {% data reusables.marketplace.github_apps_preferred %}. Consulte "[Diferenças entre os aplicativos GitHub e os aplicativos OAuth](/apps/differences-between-apps/)" para obter mais informações.
- Os aplicativos devem usar o "[princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege) e devem solicitar apenas os escopos do OAuth e as permissões do aplicativo GitHub de que o aplicativo precisa para realizar suas funcionalidades pretendidas.
- Os aplicativos devem fornecer aos clientes uma forma de excluir sua conta, sem ter que enviar um e-mail ou ligar para uma pessoa de suporte.
- Os aplicativos não devem compartilhar tokens entre diferentes implementações do aplicativo. Por exemplo, um aplicativo para computador deve ter um token separado de um aplicativo baseado na web. Os tokens individuais permitem que cada aplicativo solicite o acesso necessário aos recursos do GitHub separadamente.
- Crie seu aplicativo com diferentes funções de usuário, dependendo da funcionalidade necessária para cada tipo de usuário. Por exemplo, um usuário-padrão não deve ter acesso à funcionalidade de administração, e os gerentes de cobrança podem não precisar de acesso push ao código de repositório.
- Seu aplicativo não deve compartilhar contas de serviço como, por exemplo, e-mail ou serviços de banco de dados para gerenciar seu serviço de SaaS.
- Todos os serviços usados no seu aplicativo devem ter credenciais de login e senha exclusivas.
- O acesso privilegiado de administrador à infraestrutura de hospedagem de produção deve ser concedido apenas a engenheiros e funcionários com funções administrativas.
- Os aplicativos não podem usar tokens de acesso pessoal para efetuar a autenticação e devem fazê-lo como um [aplicativo OAuth](/apps/about-apps/#about-oauth-apps) ou [aplicativo GitHub](/apps/about-apps/#about-github-apps):
  - Os aplicativos OAuth devem efetuar a autenticação usando um [token do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - Os aplicativos GitHub devem efetuar a autenticação usando um [Token web do JSON (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app),, [Token do OAuth](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ou um [token de acesso à instalação](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

#### Proteção de dados

- Os aplicativos devem criptografar dados transferidos para internet pública usando HTTPS, com um certificado TLS válido ou SSH para o Git.
- Os aplicativos devem armazenar com segurança o ID do cliente e as chaves secretas do cliente. Recomendamos armazená-las como [variáveis de ambiente](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Os aplicativos devem excluir todos os dados do usuário no prazo de 30 dias após receber uma solicitação do usuário ou dentro de 30 dias após o fim da relação jurídica do usuário com o GitHub.
- Aplicativos não podem exigir que o usuário forneça sua senha do GitHub.
- Os aplicativos devem criptografar tokens, IDs de clientes e segredos de clientes.

#### Registro e monitoramento

- Os aplicativos devem ter capacidade de registro e monitoramento. Os registros dos aplicativos devem ser mantidos pelo menos 30 dias e arquivados pelo menos um ano. Um log de segurança deve incluir:
  - Eventos de autenticação e autorização
  - Alterações na configuração do serviço
  - Leitura e gravação de objetos
  - Todas as alterações de permissão do usuário e de grupo
  - Elevação do papel para administrador
  - Marca de tempo consistente para cada evento
  - Usuários de origem, endereços IP e/ou nomes de host para todas as ações registradas

#### Fluxo de trabalho de resposta a incidente

- Para ser parceiro com o GitHub, é necessário ter um [plano de resposta a incidente](#incident-response-plan) em vigor antes de enviar sua listagem de aplicativos do {% data variables.product.prodname_marketplace %}.
- Recomendamos ter uma equipe de resposta a incidentes de segurança e operações na sua empresa, em vez de usar um fornecedor terceiro.
- Você deve ser capaz de notificar o GitHub em 24 horas após um incidente confirmado.
- Você deve se familiarizar com as seções 3.7.5 e 3.7.5.6. do [ Contrato do Desenvolvedor de {% data variables.product.prodname_marketplace %}](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), que inclui informações adicionais sobre os requisitos de fluxo de trabalho de resposta a incidentes.

#### Gerenciamento de vulnerabilidades e fluxo de trabalho de patch

- Você deveria realizar varreduras regulares de vulnerabilidades de infraestrutura de produção.
- Você deve classificar os resultados de verificações de vulnerabilidades e definir um período de tempo no qual você concorda em remediar a vulnerabilidade.
- Você deveria se familiarizar com a seção 3.7.3 do [Acordo de Desenvolvedor de {% data variables.product.prodname_marketplace %} ](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), que inclui informações adicionais sobre o gerenciamento de vulnerabilidades sobre os requisitos do fluxo de trabalho de patch.

### Documentação do programa de segurança

Durante a revisão de segurança do Marketplace, será solicitado que você envie seu plano de resposta a incidente e o fluxo de trabalho de gerenciamento de vulnerabilidades. Cada documento deve incluir uma declaração com a marca de empresa assinada pela direção com um carimbo e data.

#### Plano de resposta a incidentes
Sua documentação do plano de resposta a incidente deve incluir o processo atual seguido pela sua empresa, quem é responsável, e a pessoa que deve entrar em contato ou ser contatada em caso de acidente. O[Guia de Segurança para Gerenciamento de Incidentes NIST](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)" é um ótimo exemplo de um documento que cobre a resposta ao incidente, em geral. A seção 2.3 "Criação de políticas, planos e procedimentos para a resposta a incidentes" abrange especificamente a política. Outro bom exemplo é a "[Política de resposta de violação de dados do SANS](https://www.sans.org/security-resources/policies/general/pdf/data-breach-response)".

#### Fluxo de trabalho de gerenciamento de vulnerabilidades
As sua documentação de fluxo de trabalho de gerenciamento de vulnerabilidades deve incluir o processo atual seguido pela sua empresa para gerenciamento de vulnerabilidades, bem como o processo de patch usado. Se você não tiver um programa completo de gerenciamento de vulnerabilidades, pode ser útil começar criando um processo de patch. Para obter orientações sobre a criação de uma política de gerenciamento de patch, leia o artigo "[Estabelecer uma política de gerenciamento de patch](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)".

{% note %}

**Observação:** Não se espera que a documentação de resposta a incidente e do fluxo de trabalho do gerenciamento de vulnerabilidade constituam uma política formal ou documentos do programa enormes. Uma ou duas páginas sobre o que você faz são mais valiosas do que um longo modelo de política.

{% endnote %}

#### Questionário do programa de segurança do GitHub Marketplace

No processo de envio do aplicativo, nossa equipe de integração de {% data variables.product.prodname_marketplace %} também irá enviar-lhe um questionário solicitando informações sobre suas práticas de segurança. Este documento servirá como um certificado de registro escrito que atesta:

- O método de autenticação e os escopos exigidos pelo seu aplicativo.
- Que você não está solicitando escopos ou acesso de {% data variables.product.product_name %} além do necessário para o aplicativo realizar suas funcionalidades pretendidas, considerando as limitações do OAuth e o uso dos {% data variables.product.prodname_github_app %}s.
- O uso de quaisquer serviços ou infraestrutura de terceiros, como o SaaS, PaaS ou IaaS.
- Existe um procedimento de resposta ao incidente.
- Método de gerenciamento de chave/token do aplicativo.
- Que existe uma política responsável de divulgação e um processo em vigor ou de planos para a implementação no prazo de um a seis meses.
- Seu fluxo de trabalho ou programa de gerenciamento de vulnerabilidade.
- Que você tem capacidades de registro e monitoramento. Você também deve fornecer provas de que todos os registros do aplicativo relevantes são mantidos pelo menos 30 dias e arquivados pelo menos um ano.
