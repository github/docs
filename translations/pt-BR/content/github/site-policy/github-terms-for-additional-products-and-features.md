---
title: Termos do GitHub para Produtos e Funcionalidades Adicionais
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Data de vigência da versão: 10 de agosto de 2021

Ao usar o GitHub, você pode ter acesso a muitos produtos e funcionalidades adicionais ("Produtos e Funcionalidades Adicionais"). Porque muitos dos produtos e funcionalidades adicionais oferecem diferentes funcionalidades, termos específicos para esse produto ou recurso, podem-se aplicar, além do seu acordo principal — os Termos de Serviço do GitHub, Termos de Serviço Corporativo, Termos Gerais do GitHub ou contrato de licenciamento de volume da Microsoft (denominados o "Contrato"). Abaixo, listamos os produtos e funcionalidades, junto com os termos adicionais correspondentes que se aplicam ao seu uso.

Ao usar as Funcionalidades e Produtos Adicionais, você também concorda com os Termos do GitHub aplicáveis para Produtos Adicionais e Funcionalidades listados abaixo. A violação destes termos do GitHub para Produtos e Funcionalidades Adicionais constitui uma violação do Contrato. Os termos em maiúsculas não definidos aqui têm o significado consignado no Contrato.

**Para usuários corporativos**
- Os usuários do **GitHub Enterprise Cloud** podem ter acesso aos seguintes Produtos e Funcionalidades: Ações, Segurança avançada, base de dados de consultores, códigos, pré-visualizações de dependência, laboratório de aprendizado, Octoshift, pacotes e páginas.

- Os usuários do **GitHub Enterprise Server** podem ter acesso aos seguintes Produtos e Funcionalidades: Ações, Segurança Avançada, Dados de Consultoria, Conexões, Visualização de Dependabot, Laboratório, Octoshift, Pacotes, Páginas e Imagens de Servidor SQL.

- **GitHub AE** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database,{% ifversion ghae-next %}Connect, {% endif %}Dependabot Preview, Octoshift, Packages and Pages.

## Ações
As Ações GitHub permitem criar fluxos de trabalho personalizados do ciclo de vida de desenvolvimento de softwares diretamente no seu repositório GitHub. Ações são cobradas conforme o uso. A [Documentação de ações](/actions) inclui detalhes, que abrangem quantidades de computação e armazenamento (dependendo do plano da sua conta) e como monitorar seus minutos de ação de uso e definir limites de uso.

Actions and any elements of the Actions product or service may not be used in violation of the Agreement, the [GitHub Acceptable Use Polices](/github/site-policy/github-acceptable-use-policies), or the GitHub Actions service limitations set forth in the [Actions documentation](/actions/reference/usage-limits-billing-and-administration). Additionally, regardless of whether an Action is using self-hosted runners, Actions should not be used for:
- mineração de criptomoedas;
- disrupting, gaining, or attempting to gain unauthorized access to, any service, device, data, account, or network (other than those authorized by the [GitHub Bug Bounty program](https://bounty.github.com));
- the provision of a stand-alone or integrated application or service offering the Actions product or service, or any elements of the Actions product or service, for commercial purposes;
- qualquer atividade que coloque um peso em nossos servidores, em que esse peso é desproporcional aos benefícios oferecidos aos usuários (por exemplo, não usar Ações como uma rede de entrega de conteúdo ou como parte de um aplicativo sem servidor, mas uma Ação de baixo benefício pode ser realizada se também tiver um peso baixo); ou
- if using GitHub-hosted runners, any other activity unrelated to the production, testing, deployment, or publication of the software project associated with the repository where GitHub Actions are used.

Para evitar violações dessas limitações e abuso de Ações do GitHub, o GitHub pode monitorar seu uso das Ações do GitHub. O mau uso do GitHub Actions pode gerar a rescisão de trabalhos, restrições na sua capacidade de usar o GitHub Actions, ou a desabilitação de repositórios criados para executar ações de forma que viole estes Termos.


## Segurança Avançada
O GitHub disponibiliza funcionalidades adicionais de segurança aos clientes sob uma licença avançada de segurança. Essas funcionalidades incluem a verificação de código, varredura de segredo e revisão de dependências. A [documentação avançada de segurança](/github/getting-started-with-github/about-github-advanced-security) fornece mais informações.

A segurança avançada é licenciada conforme o "commiter único". A "Unique Committer" is a licensed user of GitHub Enterprise, GitHub Enterprise Cloud, GitHub Enterprise Server, or GitHub AE, who has made a commit in the last 90 days to any repository with any GitHub Advanced Security functionality activated. Você deve adquirir uma licença de Usuário GitHub Advanced Security para cada um dos seus Commiters únicos. Você só pode usar o GitHub Advanced Security em códigos desenvolvidos por ou para você. Para usuários do GitHub Enterprise Cloud, algumas funcionalidades de segurança avançada também exigem o uso de ações no GitHub.

## Banco de Dados Consultivo
A base de dados do GitHub Advisory permite que você pesquise ou procure vulnerabilidades que afetem projetos de código aberto no GitHub.

_Concessão de licença para nós_

Precisamos do direito de submeter suas contribuições para o Banco de Dados Consultivo do GitHub a conjuntos de dados de domínio público, como a [Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/) e licenciar o Banco de Dados Consultivo do GitHub, sob termos abertos, para uso de pesquisadores de segurança, comunidade de código aberto, setor industrial e o público em geral. Você concorda em lançar suas contribuições no Banco de Dados Consultivo do GitHub sob a [licença Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/).

_Licença para o Banco de Dados Consultivo GitHub _

O Banco de Dados Consultivo GitHub está licenciado sob a [licença 4.0 Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/). O termo de atribuição pode ser cumprido linkando para o Banco de Dados Consultivo do GitHub em <https://github.com/advisories> ou para registros individuais do Banco de Dados Consultivo do GitHub usado e prefixado por <https://github.com/advisories>.

## Codespaces
_Note: The github.dev service, available by pressing `.` on a repo or navigating directly to github.dev, is governed by [GitHub's Beta Terms of service](/github/site-policy/github-terms-of-service#j-beta-previews)._

GitHub Codespaces enables you to develop code directly from your browser using the code within your GitHub repository. Codespaces and any elements of the Codespaces service may not be used in violation of the Agreement or the Acceptable Use Policies. Additionally, Codespaces should not be used for:
- mineração de criptomoedas;
- using our servers to disrupt, or to gain or to attempt to gain unauthorized access to any service, device, data, account or network (other than those authorized by the GitHub Bug Bounty program);
- the provision of a stand-alone or integrated application or service offering Codespaces or any elements of Codespaces for commercial purposes;
- any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Codespaces as a content delivery network, as part of a serverless application, or to host any kind of production-facing application); or
- any other activity unrelated to the development or testing of the software project associated with the repository where GitHub Codespaces is initiated.

In order to prevent violations of these limitations and abuse of GitHub Codespaces, GitHub may monitor your use of GitHub Codespaces. Misuse of GitHub Codespaces may result in termination of your access to Codespaces, restrictions in your ability to use GitHub Codespaces, or the disabling of repositories created to run Codespaces in a way that violates these Terms.

Codespaces allows you to load extensions from the Microsoft Visual Studio Marketplace (“Marketplace Extensions”) for use in your development environment, for example, to process the programming languages that your code is written in. Marketplace Extensions are licensed under their own separate terms of use as noted in the Visual Studio Marketplace, and the terms of use located at https://aka.ms/vsmarketplace-ToU. GitHub makes no warranties of any kind in relation to Marketplace Extensions and is not liable for actions of third-party authors of Marketplace Extensions that are granted access to Your Content. Seu uso de qualquer aplicativo de terceiros é de inteira responsabilidade sua.

The generally available version of Codespaces is not currently available for U.S. government customers. EUA government customers may continue to use the Codespaces Beta Preview under separate terms. See [Beta Preview terms](/github/site-policy/github-terms-of-service#j-beta-previews).

## Connect
Com GitHub Connect, você pode compartilhar certas funcionalidades e dados entre seu GitHub Enterprise Server {% ifversion ghae-next %}ou sua instância do GitHub AE {% endif %}e sua organização do GitHub Enterprise Cloud ou conta corporativa no GitHub.com. Para habilitar o GitHub Connect, você precisa ter ao menos uma (1) conta no GitHub Enterprise Cloud ou GitHub.com e uma (1) instância licenciada do GitHub Enterprise Server{% ifversion ghae-next %} ou GitHub AE{% endif %}. O seu uso do GitHub Enterprise Cloud ou GitHub.com por meio do Connect é regido pelos termos sob os quais você licencia o GitHub Enterprise Cloud ou GitHub.com. O uso de dados pessoais é regido pela [Declaração de Privacidade do GitHub](/github/site-policy/github-privacy-statement).

## Learning Lab
O GitHub Learning Lab oferece cursos interativos grátis que são construídos no GitHub com feedback e ajuda automatizados instantaneamente.

*Materiais do Curso.* O GitHub tem materiais de curso que fornece e concede a você um mundo inteiro, não exclusivo, limitado e não transferível, licença gratuita para copiar, manter, usar e executar tais materiais do curso para seus propósitos de negócio internos associados ao uso do Learning Lab.

Os termos da licença de código aberto podem ser aplicados a partes do código-fonte fornecidas nos materiais do curso.

Você tem materiais do curso que você cria e concede ao GitHub uma licença global, não exclusiva, perpétua, não transferível, livre de royalties para copiar, manter, usar, hospedar e executar tais materiais do curso.

O uso de materiais e criação e armazenamento do seu próprio curso no GitHub não constituem uma propriedade conjunta para a propriedade intelectual de nenhuma das partes.

O uso de dados pessoais é regido pela [Declaração de Privacidade do GitHub](/github/site-policy/github-privacy-statement).

## npm
npm é um serviço de hospedagem de pacotes de software que permite a você hospedar seus pacotes de software de forma privada ou pública e usar pacotes como dependências nos seus projetos. npm é o registro do ecossistema do JavaScript. O registro público do npm é gratuito para usar, mas os clientes são cobrados se quiserem publicar pacotes privados ou gerenciar pacotes privados usando equipes. A [documentação do npm](https://docs.npmjs.com/) inclui detalhes sobre a limitação dos tipos de conta e como gerenciar [pacotes privados](https://docs.npmjs.com/about-private-packages) e [organizações](https://docs.npmjs.com/organizations). O uso aceitável do registro npm está definido nos [termos do open-source](https://www.npmjs.com/policies/open-source-terms). Existem termos suplementares para os dois planos do npm [solo](https://www.npmjs.com/policies/solo-plan) e [org](https://www.npmjs.com/policies/orgs-plan). Os [Termos de Uso](https://www.npmjs.com/policies/terms) do npm aplicam-se ao seu uso do npm.

## Octoshift
O Octoshift é uma estrutura para exportar dados de outras fontes a serem importados para a plataforma GitHub. O Octoshift é fornecido como se apresenta.

## Pacotes
O GitHub Packages é um serviço de hospedagem de pacotes de software que permite que você hospede os seus pacotes de software de forma privada ou pública e usar pacotes como dependências nos seus projetos. O GitHub Packages são cobrados com base no uso. A [Documentação de pacotes](/packages/learn-github-packages/introduction-to-github-packages) inclui detalhes, que abrangem a largura de banda e quantidades de armazenamento (dependendo do plano da sua conta) e como monitorar seu uso de pacotes e definir limites de uso. O uso de largura de banda de pacotes é limitado pela [Política de Uso Aceitável do GitHub](/github/site-policy/github-acceptable-use-policies).

## Pages

Cada Conta vem com acesso a [serviços de hospedagem estática do GitHub Pages](/github/working-with-github-pages/about-github-pages). O GitHub Pages destina-se a hospedar páginas estáticas da web, mas principalmente como uma vitrine para projetos pessoais e organizacionais.

O GitHub Pages não foi projetado e nem tem permissão para ser usado como um serviço de hospedagem gratuita na web, capaz de administrar sua empresa online, seu site de comércio eletrônico ou qualquer outro site desenvolvido principalmente para facilitar transações comerciais ou fornecer software comercial como um serviço (SaaS). Alguns esforços de monetização são permitidos no Pages, como botões de doação e links para crowdfunding.

### a. Banda larga e limites de uso
O GitHub Pages está sujeito a limites específicos de uso e largura de banda e pode não ser apropriado para alguns usos elevados de banda larga. Consulte nossas [diretrizes do GitHub Pages](/github/working-with-github-pages/about-github-pages) para obter mais informações.

### b. Uso proibido
O uso proibido do GitHub Pages inclui
- Conteúdo ou atividade ilegal ou proibido pelos nossos [Termos de Serviço](/github/site-policy/github-terms-of-service), [Políticas de uso aceitáveis](/github/site-policy/github-acceptable-use-policies) ou [Diretrizes da comunidade](/github/site-policy/github-community-guidelines)
- Atividade ou conteúdo violento ou ameaçador
- Excesso de atividade automatizada em massa (spam, por exemplo)
- Atividade que comprometa serviços ou usuários do GitHub
- Esquemas para enriquecer rapidamente
- Conteúdo sexual obsceno
- Conteúdo que deturpe sua identidade ou a finalidade do site

If you have questions about whether your use or intended use falls into these categories, please contact [GitHub Support](https://support.github.com/contact?tags=docs-policy). O GitHub se reserva o direito de recuperar qualquer subdomínio GitHub sem responsabilidade.

## Programa Sponsors

O GitHub Sponsors permite que a comunidade de desenvolvedores apoie financeiramente as pessoas e organizações que projetam, constroem e mantêm os projetos de código aberto dos quais eles dependem, diretamente no GitHub. Para se tornar um Desenvolvedor Patrocinado, você deve concordar com os [Termos Adicionais do Programa GitHub Sponsors](/github/site-policy/github-sponsors-additional-terms).

## Imagens do servidor SQL

Você pode fazer o download da imagem de contêiner de edição padrão do Microsoft SQL Server para arquivos Linux ("Imagens do Servidor SQL"). Você deve desinstalar as imagens do Servidor SQL quando seu direito de usar o Software terminar. A Microsoft Corporation pode desativar o SQL Server Images a qualquer momento.
