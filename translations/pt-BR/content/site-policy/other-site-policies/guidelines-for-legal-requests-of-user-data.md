---
title: Diretrizes para Solicitações Legais de Dados do Usuário
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 991c060af22a9161e026aa396037a1d52e66fcea
ms.sourcegitcommit: d298d354a4585e6c154f2a8428aebb214d49e2a1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/07/2022
ms.locfileid: '147858609'
---
Você é um agente da lei realizando uma investigação que pode envolver conteúdo de usuário hospedado no GitHub?
Ou talvez você seja uma pessoa preocupada com a privacidade que gostaria de saber quais informações compartilhamos com as autoridades e em quais circunstâncias.
De qualquer forma, você está na página certa.

Nestas diretrizes, fornecemos algumas informações sobre o que é o GitHub, os tipos de dados que temos e as condições nas quais divulgaremos informações privadas do usuário.
No entanto, antes de entrarmos em detalhes, aqui estão algumas informações importantes que podem ser úteis:

- Vamos [**notificar os usuários afetados**](#we-will-notify-any-affected-account-owners) sobre todas as solicitações de informações de suas respectivas contas, a menos que seja proibido por lei ou ordem judicial.
- Não vamos divulgar **dados de rastreamento de localização**, como logs de endereço IP, sem uma [ordem judicial ou mandado de busca válido](#with-a-court-order-or-a-search-warrant).
- Não divulgaremos nenhum **conteúdo privado do usuário**, incluindo o conteúdo de repositórios privados, sem um documento válido [mandato de busca](#only-with-a-search-warrant).

## Sobre estas diretrizes

Nossos usuários confiam em nós com seus projetos e códigos de software que, geralmente, são alguns de seus negócios ou ativos pessoais mais valiosos.
Manter essa confiança é essencial para nós, o que significa manter os dados do usuário seguros, protegidos e privados.

Embora a esmagadora maioria de nossos usuários use os serviços do GitHub para criar negócios, construir novas tecnologias e para a melhoria geral da humanidade, reconhecemos que, com milhões de usuários distribuídos por todo o mundo, é provável que haja algumas maçãs podres na cesta.
Nesses casos, queremos ajudar as autoridades policiais a atender ao interesse legítimo de proteger o público.

Ao fornecer diretrizes para as autoridades policiais, esperamos encontrar um equilíbrio entre os interesses muitas vezes conflitantes de privacidade e justiça do usuário.
Esperamos que essas diretrizes ajudem a definir as expectativas de ambos os lados, além de adicionar transparência aos processos internos do GitHub.
Nossos usuários devem saber que valorizamos suas informações privadas e que fazemos o possível para protegê-las.
No mínimo, isso significa liberar dados para terceiros apenas quando os requisitos legais apropriados forem atendidos.
Da mesma forma, também esperamos orientar as autoridades policiais sobre os sistemas do GitHub para que possam personalizar com mais eficiência suas solicitações de dados e almejar apenas as informações necessárias para realizar sua investigação.

## Terminologia do GitHub

Antes de nos solicitar a divulgação de dados, pode ser útil entender como nosso sistema é implementado.
O GitHub hospeda milhões de repositórios de dados usando o [Sistema de controle de versão Git](https://git-scm.com/video/what-is-version-control).
Os repositórios no GitHub, que podem ser públicos ou privados, são mais comumente usados para projetos de desenvolvimento de software, mas também costumam ser usados para trabalhar com conteúdo de todos os tipos.

- [**Usuários**](/articles/github-glossary#user): os usuários são representados em nosso sistema como contas pessoais do GitHub.
Cada usuário tem um perfil pessoal e pode ter vários repositórios.
Os usuários podem criar ou ser convidados a ingressar em organizações ou colaborar no repositório de outro usuário.

- [**Colaboradores**](/articles/github-glossary#collaborator) – um colaborador é um usuário com acesso de leitura e gravação a um repositório que foi convidado a contribuir pelo proprietário do repositório.

- [**Organizações**](/articles/github-glossary#organization): organizações são um grupo de dois ou mais usuários que normalmente espelham organizações do mundo real, como negócios ou projetos.
Elas são administradas por usuários e podem conter repositórios e equipes de usuários.

- [**Repositórios**](/articles/github-glossary#repository): um repositório é um dos elementos mais básicos do GitHub.
Talvez seja mais fácil imaginá-lo como uma pasta de um projeto.
Um repositório contém todos os arquivos do projeto (incluindo documentação) e armazena o histórico de revisão de cada arquivo.
Os repositórios podem ter vários colaboradores e, a critério de seus administradores, podem ser visualizados pelo público ou não.

- [**Páginas**](/articles/what-is-github-pages): GitHub Pages são páginas da Web públicas hospedadas gratuitamente pelo GitHub que os usuários podem publicar facilmente por meio de código armazenado em seus repositórios.
Se um usuário ou uma organização tiver uma GitHub Page, ela geralmente poderá ser encontrada em um URL, como `https://username.github.io` ou eles podem ter a página da Web mapeada para seu próprio nome de domínio personalizado.

- [**Gists**](/articles/creating-gists): Gists são trechos de código-fonte ou outro texto que os usuários podem usar para armazenar ideias ou compartilhar com amigos.
Como os repositórios regulares do GitHub, os Gists são criados com o Git, portanto, é possível criar fork, baixar e criar versões deles de forma automática.
Os Gists podem ser públicos ou secretos (acessíveis apenas por meio de um URL conhecido). Gists públicos não podem ser convertidos em Gists secretos.

## Dados do usuário em GitHub.com

Veja a seguir uma lista incompleta dos tipos de dados que mantemos sobre usuários e projetos no GitHub.

- <a name="public-account-data"></a>
**Dados de contas públicas**: há uma variedade de informações disponíveis ao público no GitHub sobre usuários e seus repositórios.
Os perfis de usuário podem ser encontrados em um URL como `https://github.com/username`.
Os perfis de usuário exibem informações sobre quando o usuário criou sua conta, bem como sua atividade pública em GitHub.com e interações sociais.
Os perfis de usuários públicos também podem incluir informações adicionais que um usuário pode ter escolhido compartilhar com o público.
Todos os perfis públicos de usuário exibem:
  - Nome do usuário
  - Os repositórios que o usuário marcou com estrela
  - Os outros usuários do GitHub que o usuário segue
  - Os usuários que os seguem

  Um usuário também pode optar por compartilhar com o público as seguintes informações:
  - Seu nome verdadeiro
  - Um avatar
  - Uma empresa afiliada
  - Sua localização
  - Um endereço de email público
  - Sua página pessoal
  - Organizações das quais o usuário é membro (*dependendo das preferências das organizações ou dos usuários*)

- <a name="private-account-data"></a>
**Dados de contas privadas**: o GitHub também coleta e mantém determinadas informações privadas sobre usuários, conforme descrito em nossa [Política de Privacidade](/articles/github-privacy-statement).
São elas:
  - Endereços de email privados
  - Detalhes de pagamento
  - Logs de acesso de segurança
  - Dados sobre interações com repositórios privados

  Para ter uma ideia do tipo de informações de contas privadas coletadas pelo GitHub, você pode visitar seu {% data reusables.user-settings.personal_dashboard %} e navegar pelas seções na barra de menus à esquerda.

- <a name="organization-account-data"></a>
**Dados de contas de organizações**: informações sobre organizações, seus usuários administrativos e repositórios estão disponíveis ao público no GitHub.
Os perfis de organizações podem ser encontrados em um URL como `https://github.com/organization`.
Os perfis de organizações públicos também podem incluir informações adicionais que os proprietários podem ter escolhido compartilhar com o público.
Todos os perfis públicos de organizações exibem:
  - O nome da organização
  - Os repositórios que os proprietários marcaram com estrela
  - Todos os usuários do GitHub que são proprietários da organização

  Os usuários administrativos também podem optar por compartilhar com o público as seguintes informações:
  - Um avatar
  - Uma empresa afiliada
  - Sua localização
  - Membros diretos e equipes
  - Colaboradores

- <a name="public-repository-data"></a>
**Dados de repositórios públicos**: o GitHub é o lar de milhões de projetos públicos de software de código aberto.
Você pode navegar em quase qualquer repositório público (por exemplo, o [Projeto Átomo](https://github.com/atom/atom)) para ter uma noção das informações que o GitHub coleta e mantém sobre os repositórios.
São elas:

  - O próprio código
  - Versões anteriores do código
  - Versões de lançamento estáveis do projeto
  - Informações sobre colaboradores, contribuidores e membros do repositório
  - Logs de operações do Git, como confirmações, ramificações, push, pull, forks e clonagem
  - Conversas relacionadas a operações do Git, como comentários em solicitações de pull ou confirmações
  - Documentação do projeto, como problemas e páginas Wiki
  - Estatísticas e gráficos mostrando as contribuições para o projeto e a rede de colaboradores

- <a name="private-repository-data"></a>
**Dados de repositórios privados**: o GitHub coleta e mantém o mesmo tipo de dados de repositórios privados que podem ser vistos de repositórios públicos, exceto que apenas usuários especificamente convidados podem acessar dados de repositórios privados.

- <a name="other-data"></a>
**Outros dados**: além disso, o GitHub coleta dados analíticos, como visitas a páginas e informações ocasionalmente oferecidas por nossos usuários (como comunicações com nossa equipe de suporte, informações de pesquisas e/ou registros de sites).

## Notificaremos todos os proprietários de contas afetados

É nossa política notificar os usuários sobre quaisquer solicitações pendentes relacionadas a suas contas ou repositórios, a menos que sejamos proibidos por lei ou ordem judicial de fazê-lo. Antes de divulgar as informações do usuário, faremos um esforço razoável para notificar qualquer proprietário de conta afetado enviando uma mensagem para o endereço de email verificado, fornecendo uma cópia da intimação, da ordem judicial ou do mandado para que ele tenha a oportunidade de contestar o processo legal, se assim o desejar. Em circunstâncias prementes (raras), poderemos atrasar a notificação se determinarmos que o atraso é necessário para evitar morte ou danos graves ou em virtude de uma investigação em andamento.

## Divulgação de informações não públicas

É nossa política divulgar informações não públicas do usuário em conexão com uma investigação civil ou criminal apenas com a autorização do usuário ou mediante o recebimento de uma intimação válida, demanda investigativa civil, ordem judicial, mandado de busca ou outro processo legal válido semelhante. Em certas circunstâncias prementes (veja abaixo), também poderemos compartilhar informações limitadas, mas apenas correspondentes à natureza das circunstâncias, e exigiremos um processo legal para qualquer medida além dessa.
O GitHub reserva-se o direito de se opor a quaisquer solicitações de informações não públicas.
Quando o GitHub concordar em produzir informações não públicas em resposta a uma solicitação legal, realizaremos uma busca razoável pelas informações solicitadas.
Veja a seguir os tipos de informações que concordamos em produzir, dependendo do tipo de processo legal apresentado:

- <a name="with-user-consent"></a>
**Com consentimento do usuário**: o GitHub fornecerá informações de contas privadas, se solicitadas, diretamente ao usuário (ou a um proprietário, no caso de uma conta de organização) ou a um terceiro designado com a autorização por escrito do usuário assim que o GitHub estiver convencido de que o usuário verificou sua identidade.

- <a name="with-a-subpoena"></a>
**Com uma intimação**: se recebermos uma intimação válida, uma demanda investigativa civil ou um processo legal semelhante emitido em conexão com uma investigação criminal ou civil oficial, poderemos fornecer certas informações de contas não públicas, que poderão incluir:

  - Nomes associados à conta
  - Endereços de email associados à conta
  - Informações de cobrança
  - Data de registro e data de rescisão
  - Endereço IP, data e hora do momento do registro da conta
  - Endereços IP usados para acessar a conta em um horário específico ou evento relevante para a investigação

No caso de contas de organização, podemos fornecer os nomes e endereços de email dos proprietários da conta, bem como a data e o endereço IP no momento da criação da conta da organização. Não forneceremos informações sobre outros membros nem colaboradores, se houver, para a conta da organização nem qualquer informação adicional sobre os proprietários de contas identificados sem uma solicitação de acompanhamento para esses usuários específicos.

Observe que as informações disponíveis variam de caso para caso. O fornecimento de algumas informações é opcional para os usuários. Em outros casos, podemos não ter coletado ou retido as informações.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**Com uma ordem judicial *ou* um mandado de busca**: não divulgaremos logs de acesso à conta, a menos que sejamos obrigados a fazê-lo por (i) uma ordem judicial emitida de acordo com 18 U.S.C. Seção 2703(d), mediante a apresentação de fatos específicos e articuláveis que demonstrem que há motivos razoáveis para acreditar que a informação solicitada é relevante e importante para uma investigação criminal em andamento; ou (ii) um mandado de busca expedido de acordo com os procedimentos descritos nas Regras Federais de Processo Penal ou procedimentos de mandado estadual equivalente, mediante demonstração de causa provável.
Além das informações de contas não públicas listadas acima, podemos fornecer logs de acesso à conta em resposta a uma ordem judicial ou um mandado de busca, que podem incluir:

  - Quaisquer logs que revelem os movimentos de um usuário durante um período
  - Configurações de conta ou repositório privado (por exemplo, quais usuários têm determinadas permissões, etc.)
  - Dados analíticos específicos do usuário ou IP, como histórico de navegação
  - Logs de acesso de segurança que não sejam a criação da conta ou de data e horário específicos

- <a name="only-with-a-search-warrant"></a>
**Só com mandado de busca**: não divulgaremos o conteúdo privado de nenhuma conta, a menos que sejamos obrigados a fazê-lo sob um mandado de busca emitido de acordo com os procedimentos descritos nas Regras Federais de Processo Penal ou procedimentos de mandado estadual equivalente mediante demonstração de causa provável.
Além das informações de contas não públicas e logs de acesso a contas mencionados acima, também forneceremos conteúdo de contas privadas em resposta a uma ordem judicial ou um mandado de busca, que pode incluir:

  - Conteúdo de Gists secretos
  - Código-fonte ou outro conteúdo em repositórios privados
  - Registros de contribuição e colaboração para repositórios privados
  - Comunicações ou documentação (como emissões ou Wikis) em repositórios privados
  - Quaisquer chaves de segurança usadas para autenticação ou criptografia

- <a name="in-exigent-circumstances"></a>
**Em circunstâncias prementes**: se recebermos uma solicitação de informações em determinadas circunstâncias prementes (onde acreditamos que a divulgação é necessária para evitar uma emergência envolvendo perigo de morte ou lesão física grave a uma pessoa), poderemos divulgar informações limitadas que consideramos necessárias para permitir a aplicação da lei a fim de atender à emergência. Para quaisquer informações além dessas, exigimos uma intimação, um mandado de busca ou uma ordem judicial, conforme descrito acima. Por exemplo, não divulgaremos conteúdos de repositórios privados sem um mandado de busca. Antes de divulgar as informações, confirmamos que a solicitação partiu de uma agência de aplicação da lei, uma autoridade enviou um aviso oficial resumindo a emergência e como as informações solicitadas ajudarão a lidar com a emergência.

## Reembolso de custos

De acordo com as leis estaduais e federais, o GitHub pode solicitar o reembolso de custos associados ao cumprimento de uma demanda legal válida, como uma intimação, uma ordem judicial ou um mandado de busca. Cobramos apenas para recuperar alguns custos, e esses reembolsos cobrem apenas uma parte dos custos que realmente incorremos para cumprir ordens legais.

Embora não façamos cobranças em situações de emergência ou em outras circunstâncias prementes, buscamos o reembolso de todas as outras solicitações legais de acordo com o seguinte cronograma, a menos que exigido por lei:

- Pesquisa inicial de até 25 identificadores: Gratuito
- Produção de informações/dados do assinante para até cinco contas: Gratuito
- Produção de informações/dados do assinante para mais de cinco contas: US$ 20 por conta
- Pesquisas secundárias: US$ 10 por pesquisa

## Preservação de dados

Tomaremos medidas para preservar os registros da conta por até 90 dias mediante solicitação formal da autoridade policial dos EUA em conexão com investigações criminais oficiais e enquanto aguardamos a emissão de uma ordem judicial ou outro processo.

## Enviando solicitações

Envie solicitações para:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Cópias de cortesia podem ser enviadas para legal-support@github.com

Torne suas solicitações o mais específicas e restritas possível, incluindo as seguintes informações:

- Informações completas sobre a autoridade que emitiu a solicitação de informações
- O nome e crachá/ID do agente responsável
- Um endereço de email oficial e número de telefone de contato
- O usuário, a organização, os nomes dos repositórios de interesse
- Os URLs de todas as páginas, gists ou arquivos de interesse
- A descrição dos tipos de registros de que você precisa

Aguarde pelo menos duas semanas para que possamos investigar sua solicitação.

## Solicitações de autoridades estrangeiras

Como empresa dos Estados Unidos com sede na Califórnia, o GitHub não é obrigado a fornecer dados a governos estrangeiros em resposta a processos legais emitidos por autoridades estrangeiras.
Autoridades policiais estrangeiras que desejam solicitar informações do GitHub devem entrar em contato com o Escritório de Assuntos Internacionais da Divisão Criminal do Departamento de Justiça dos Estados Unidos.
O GitHub responderá imediatamente às solicitações emitidas por meio de um tribunal dos EUA por meio de um tratado de assistência jurídica mútua (“MLAT”) ou carta rogatória.

## Dúvidas

Você tem outras dúvidas, comentários ou sugestões? Entre em contato pelo {% data variables.contact.contact_support %}.
