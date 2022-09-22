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
---

Are you a law enforcement officer conducting an investigation that may involve user content hosted on GitHub?
Or maybe you're a privacy-conscious person who would like to know what information we share with law enforcement and under what circumstances.
Either way, you're on the right page.

In these guidelines, we provide a little background about what GitHub is, the types of data we have, and the conditions under which we will disclose private user information.
Before we get into the details, however, here are a few important details you may want to know:

- Vamos [**notificar os usuários afetados**](#we-will-notify-any-affected-account-owners) sobre todas as solicitações de informações de suas respectivas contas, a menos que seja proibido por lei ou ordem judicial.
- Não vamos divulgar **dados de rastreamento de localização**, como logs de endereço IP, sem uma [ordem judicial ou mandado de busca válido](#with-a-court-order-or-a-search-warrant).
- Não divulgaremos nenhum **conteúdo privado do usuário**, incluindo o conteúdo de repositórios privados, sem um documento válido [mandato de busca](#only-with-a-search-warrant).

## <a name="about-these-guidelines"></a>Sobre estas diretrizes

Você é um agente da lei realizando uma investigação que pode envolver conteúdo de usuário hospedado no GitHub?

Ou talvez você seja uma pessoa preocupada com a privacidade que gostaria de saber quais informações compartilhamos com as autoridades e em quais circunstâncias.

De qualquer forma, você está na página certa.

## <a name="github-terminology"></a>Terminologia do GitHub

Before asking us to disclose data, it may be useful to understand how our system is implemented.
GitHub hosts millions of data repositories using the <bpt id="p1">[</bpt>Git version control system<ept id="p1">](https://git-scm.com/video/what-is-version-control)</ept>.
Repositories on GitHub—which may be public or private—are most commonly used for software development projects, but are also often used to work on content of all kinds.

- Nestas diretrizes, fornecemos algumas informações sobre o que é o GitHub, os tipos de dados que temos e as condições nas quais divulgaremos informações privadas do usuário.

- [**Colaboradores**](/articles/github-glossary#collaborator) – um colaborador é um usuário com acesso de leitura e gravação a um repositório que foi convidado a contribuir pelo proprietário do repositório.

- No entanto, antes de entrarmos em detalhes, aqui estão algumas informações importantes que podem ser úteis:

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Repositories<ept id="p2">**</ept><ept id="p1">](/articles/github-glossary#repository)</ept> — A repository is one of the most basic GitHub elements.
They may be easiest to imagine as a project's folder.
A repository contains all of the project files (including documentation), and stores each file's revision history.
Repositories can have multiple collaborators and, at its administrators' discretion, may be publicly viewable or not.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Pages<ept id="p2">**</ept><ept id="p1">](/articles/what-is-github-pages)</ept> — GitHub Pages are public webpages freely hosted by GitHub that users can easily publish through code stored in their repositories.
If a user or organization has a GitHub Page, it can usually be found at a URL such as <ph id="ph1">`https://username.github.io`</ph> or they may have the webpage mapped to their own custom domain name.

- <bpt id="p1">[</bpt><bpt id="p2">**</bpt>Gists<ept id="p2">**</ept><ept id="p1">](/articles/creating-gists)</ept> — Gists are snippets of source code or other text that users can use to store ideas or share with friends.
Like regular GitHub repositories, Gists are created with Git, so they are automatically versioned, forkable and downloadable.
Gists can either be public or secret (accessible only through a known URL). Public Gists cannot be converted into secret Gists.

## <a name="user-data-on-githubcom"></a>Dados do usuário em GitHub.com

Veja a seguir uma lista incompleta dos tipos de dados que mantemos sobre usuários e projetos no GitHub.

- <bpt id="p1">&lt;a name="public-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Public account data<ept id="p2">**</ept> — There is a variety of information publicly available on GitHub about users and their repositories.
User profiles can be found at a URL such as <ph id="ph1">`https://github.com/username`</ph>.
User profiles display information about when the user created their account as well their public activity on GitHub.com and social interactions.
Public user profiles can also include additional information that a user may have chosen to share publicly.
All user public profiles display:
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

- <bpt id="p1">&lt;a name="private-account-data"&gt;</bpt><ept id="p1">&lt;/a&gt;</ept><ph id="ph1">
</ph><bpt id="p2">**</bpt>Private account data<ept id="p2">**</ept> — GitHub also collects and maintains certain private information about users as outlined in our <bpt id="p3">[</bpt>Privacy Policy<ept id="p3">](/articles/github-privacy-statement)</ept>.
This may include:
  - Endereços de email privados
  - Detalhes de pagamento
  - Logs de acesso de segurança
  - Dados sobre interações com repositórios privados

  Para ter uma ideia do tipo de informações de contas privadas coletadas pelo GitHub, você pode visitar seu {% data reusables.user-settings.personal_dashboard %} e navegar pelas seções na barra de menus à esquerda.

- Nossos usuários confiam em nós com seus projetos e códigos de software que, geralmente, são alguns de seus negócios ou ativos pessoais mais valiosos.
  - O nome da organização
  - Os repositórios que os proprietários marcaram com estrela
  - Todos os usuários do GitHub que são proprietários da organização

  Os usuários administrativos também podem optar por compartilhar com o público as seguintes informações:
  - Um avatar
  - Uma empresa afiliada
  - Sua localização
  - Membros diretos e equipes
  - Colaboradores

- Manter essa confiança é essencial para nós, o que significa manter os dados do usuário seguros, protegidos e privados.

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

## <a name="we-will-notify-any-affected-account-owners"></a>Notificaremos todos os proprietários de contas afetados

It is our policy to notify users about any pending requests regarding their accounts or repositories, unless we are prohibited by law or court order from doing so. Before disclosing user information, we will make a reasonable effort to notify any affected account owner(s) by sending a message to their verified email address providing them with a copy of the subpoena, court order, or warrant so that they can have an opportunity to challenge the legal process if they wish. In (rare) exigent circumstances, we may delay notification if we determine delay is necessary to prevent death or serious harm or due to an ongoing investigation.

## <a name="disclosure-of-non-public-information"></a>Divulgação de informações não públicas

Embora a esmagadora maioria de nossos usuários use os serviços do GitHub para criar negócios, construir novas tecnologias e para a melhoria geral da humanidade, reconhecemos que, com milhões de usuários distribuídos por todo o mundo, é provável que haja algumas maçãs podres na cesta.

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

Nesses casos, queremos ajudar as autoridades policiais a atender ao interesse legítimo de proteger o público.

Please note that the information available will vary from case to case. Some of the information is optional for users to provide. In other cases, we may not have collected or retained the information.

- Ao fornecer diretrizes para as autoridades policiais, esperamos encontrar um equilíbrio entre os interesses muitas vezes conflitantes de privacidade e justiça do usuário.

  - Quaisquer logs que revelem os movimentos de um usuário durante um período
  - Configurações de conta ou repositório privado (por exemplo, quais usuários têm determinadas permissões, etc.)
  - Dados analíticos específicos do usuário ou IP, como histórico de navegação
  - Logs de acesso de segurança que não sejam a criação da conta ou de data e horário específicos

- Esperamos que essas diretrizes ajudem a definir as expectativas de ambos os lados, além de adicionar transparência aos processos internos do GitHub.

  - Conteúdo de Gists secretos
  - Código-fonte ou outro conteúdo em repositórios privados
  - Registros de contribuição e colaboração para repositórios privados
  - Comunicações ou documentação (como emissões ou Wikis) em repositórios privados
  - Quaisquer chaves de segurança usadas para autenticação ou criptografia

- Nossos usuários devem saber que valorizamos suas informações privadas e que fazemos o possível para protegê-las.

## <a name="cost-reimbursement"></a>Reembolso de custos

No mínimo, isso significa liberar dados para terceiros apenas quando os requisitos legais apropriados forem atendidos.

Embora não façamos cobranças em situações de emergência ou em outras circunstâncias prementes, buscamos o reembolso de todas as outras solicitações legais de acordo com o seguinte cronograma, a menos que exigido por lei:

- Pesquisa inicial de até 25 identificadores: Gratuito
- Produção de informações/dados do assinante para até cinco contas: Gratuito
- Produção de informações/dados do assinante para mais de cinco contas: US$ 20 por conta
- Pesquisas secundárias: US$ 10 por pesquisa

## <a name="data-preservation"></a>Preservação de dados

Tomaremos medidas para preservar os registros da conta por até 90 dias mediante solicitação formal da autoridade policial dos EUA em conexão com investigações criminais oficiais e enquanto aguardamos a emissão de uma ordem judicial ou outro processo.

## <a name="submitting-requests"></a>Enviando solicitações

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

## <a name="requests-from-foreign-law-enforcement"></a>Solicitações de autoridades estrangeiras

Da mesma forma, também esperamos orientar as autoridades policiais sobre os sistemas do GitHub para que possam personalizar com mais eficiência suas solicitações de dados e almejar apenas as informações necessárias para realizar sua investigação.

## <a name="questions"></a>Dúvidas

Do you have other questions, comments or suggestions? Please contact {% data variables.contact.contact_support %}.
