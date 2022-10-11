---
title: GitHub Terms for Additional Products and Features
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Version Effective Date: May 26, 2021

When you use GitHub, you may be given access to lots of additional products and features ("Additional Products and Features"). Because many of the Additional Products and Features offer different functionality, specific terms for that product or feature may apply in addition to your main agreement with us—the GitHub Terms of Service, GitHub Corporate Terms of Service, GitHub General Terms, or Microsoft volume licensing agreement (each, the "Agreement"). Below, we've listed those products and features, along with the corresponding additional terms that apply to your use of them.

By using the Additional Products and Features, you also agree to the applicable GitHub Terms for Additional Products and Features listed below. A violation of these GitHub terms for Additional Product and Features is a violation of the Agreement. Capitalized terms not defined here have the meaning given in the Agreement.

**For Enterprise users**
- **GitHub Enterprise Cloud** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Codespaces, Dependabot Preview, Learning Lab, Octoshift, Packages and Pages.

- **GitHub Enterprise Server** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, Learning Lab, Octoshift, Packages, Pages and SQL Server Images.

- **GitHub AE** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, {% if currentVersion == "github-ae@next" %}Connect, {% endif %}Dependabot Preview, Octoshift, Packages and Pages.

### Ações
As Ações GitHub permitem criar fluxos de trabalho personalizados do ciclo de vida de desenvolvimento de softwares diretamente no seu repositório GitHub. Actions is billed on a usage basis. A [Documentação de ações](/actions) inclui detalhes, que abrangem quantidades de computação e armazenamento (dependendo do plano da sua conta) e como monitorar seus minutos de ação de uso e definir limites de uso.

As ações e todos elementos do Serviço de Ações não podem ser usados em violação do Contrato, a [Políticas de Uso Aceitável no GitHub](/github/site-policy/github-acceptable-use-policies), ou as limitações de serviço do GitHub Actions estabelecidas na [Documentação de Ações](/actions/reference/usage-limits-billing-and-administration). Além disso, as Ações não devem ser usadas para:
- mineração de criptomoedas;
- usar nossos servidores para interromper ou ganhar ou tentar ganhar acesso não autorizado a qualquer serviço, dispositivo, dados, conta ou rede (a menos que autorizado pelo [programa GitHub Bug Bounty](https://bounty.github.com));
- fornecimento de um aplicativo ou serviço independente ou integrado que ofereça Ações ou quaisquer elementos de Ações para fins comerciais;
- qualquer atividade que coloque um peso em nossos servidores, em que esse peso é desproporcional aos benefícios oferecidos aos usuários (por exemplo, não usar Ações como uma rede de entrega de conteúdo ou como parte de um aplicativo sem servidor, mas uma Ação de baixo benefício pode ser realizada se também tiver um peso baixo); ou
- qualquer outra atividade não relacionada à produção, teste, implantação ou publicação do projeto de software associado ao repositório onde as Ações do GitHub são usadas.

Para evitar violações dessas limitações e abuso de Ações do GitHub, o GitHub pode monitorar seu uso das Ações do GitHub. O mau uso do GitHub Actions pode gerar a rescisão de trabalhos, restrições na sua capacidade de usar o GitHub Actions, ou a desabilitação de repositórios criados para executar ações de forma que viole estes Termos.


### Segurança Avançada
GitHub makes extra security features available to customers under an Advanced Security license. These features include code scanning, secret scanning, and dependency review. The [Advanced Security documentation](/github/getting-started-with-github/about-github-advanced-security) provides more details.

Advanced Security is licensed on a "Unique Committer" basis. Um "Committer único" é um usuário licenciado do GitHub Enterprise, GitHub Enterprise Cloud, GitHub Enterprise Server, ou GitHub AE, que criou um commit de código nos últimos 90 dias para qualquer repositório que tivesse qualquer recurso de Advanced Security do GitHub ativado. Você deve adquirir uma licença de Usuário GitHub Advanced Security para cada um dos seus Commiters únicos. Você só pode usar o GitHub Advanced Security em códigos desenvolvidos por ou para você. For GitHub Enterprise Cloud users, some Advanced Security features also require the use of GitHub Actions.

### Banco de Dados Consultivo
The GitHub Advisory Database allows you to browse or search for vulnerabilities that affect open source projects on GitHub.

_Concessão de licença para nós_

Precisamos do direito de submeter suas contribuições para o Banco de Dados Consultivo do GitHub a conjuntos de dados de domínio público, como a [Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/) e licenciar o Banco de Dados Consultivo do GitHub, sob termos abertos, para uso de pesquisadores de segurança, comunidade de código aberto, setor industrial e o público em geral. Você concorda em lançar suas contribuições no Banco de Dados Consultivo do GitHub sob a [licença Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/).

_Licença para o Banco de Dados Consultivo GitHub _

O Banco de Dados Consultivo GitHub está licenciado sob a [licença 4.0 Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/). O termo de atribuição pode ser cumprido linkando para o Banco de Dados Consultivo do GitHub em <https://github.com/advisories> ou para registros individuais do Banco de Dados Consultivo do GitHub usado e prefixado por <https://github.com/advisories>.

### Connect
With GitHub Connect, you can share certain features and data between your GitHub Enterprise Server {% if currentVersion == "github-ae@next" %}or GitHub AE {% endif %}instance and your GitHub Enterprise Cloud organization or enterprise account on GitHub.com. In order to enable GitHub Connect, you must have at least one (1) account on GitHub Enterprise Cloud or GitHub.com, and one (1) licensed instance of GitHub Enterprise Server{% if currentVersion == "github-ae@next" %} or GitHub AE{% endif %}. Your use of GitHub Enterprise Cloud or GitHub.com through Connect is governed by the terms under which you license GitHub Enterprise Cloud or GitHub.com. Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

### Dependabot Preview
You can use Dependabot to keep the packages you use updated to the latest versions. O uso de seu Dependabot Preview é regido por [Termos de Serviço](https://dependabot.com/terms) e [Política de Privacidade](https://dependabot.com/privacy) separados.

### Learning Lab
GitHub Learning Lab offers free interactive courses that are built into GitHub with instant automated feedback and help.

*Course Materials.* GitHub owns course materials that it provides and grants you a worldwide, non-exclusive, limited-term, non-transferable, royalty-free license to copy, maintain, use and run such course materials for your internal business purposes associated with Learning Lab use.

Open source license terms may apply to portions of source code provided in the course materials.

You own course materials that you create and grant GitHub a worldwide, non-exclusive, perpetual, non-transferable, royalty-free license to copy, maintain, use, host, and run such course materials.

The use of GitHub course materials and creation and storage of your own course materials do not constitute joint ownership to either party's respective intellectual property.

Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

### npm
npm is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. npm is the registry of record for the JavaScript ecosystem. The npm public registry is free to use but customers are billed if they want to publish private packages or manage private packages using teams. The [npm documentation](https://docs.npmjs.com/) includes details about the limitation of account types and how to manage [private packages](https://docs.npmjs.com/about-private-packages) and [organizations](https://docs.npmjs.com/organizations). Acceptable use of the npm registry is outlined in the [open-source terms](https://www.npmjs.com/policies/open-source-terms). There are supplementary terms for both the npm [solo](https://www.npmjs.com/policies/solo-plan) and [org](https://www.npmjs.com/policies/orgs-plan) plans. The npm [Terms of Use](https://www.npmjs.com/policies/terms) apply to your use of npm.

### Octoshift
Octoshift is a framework for exporting data from other sources to be imported to the GitHub platform. Octoshift is provided “AS-IS”.

### Pacotes
GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. O GitHub Packages são cobrados com base no uso. A [Documentação de pacotes](/packages/learn-github-packages/introduction-to-github-packages) inclui detalhes, que abrangem a largura de banda e quantidades de armazenamento (dependendo do plano da sua conta) e como monitorar seu uso de pacotes e definir limites de uso. O uso de largura de banda de pacotes é limitado pela [Política de Uso Aceitável do GitHub](/github/site-policy/github-acceptable-use-policies).

### Pages

Cada Conta vem com acesso a [serviços de hospedagem estática do GitHub Pages](/github/working-with-github-pages/about-github-pages). GitHub Pages is intended to host static web pages, but primarily as a showcase for personal and organizational projects.

O GitHub Pages não foi projetado e nem tem permissão para ser usado como um serviço de hospedagem gratuita na web, capaz de administrar sua empresa online, seu site de comércio eletrônico ou qualquer outro site desenvolvido principalmente para facilitar transações comerciais ou fornecer software comercial como um serviço (SaaS). Alguns esforços de monetização são permitidos no Pages, como botões de doação e links para crowdfunding.

#### a. Banda larga e limites de uso
O GitHub Pages está sujeito a limites específicos de uso e largura de banda e pode não ser apropriado para alguns usos elevados de banda larga. Consulte nossas [diretrizes do GitHub Pages](/github/working-with-github-pages/about-github-pages) para obter mais informações.

#### b. Uso proibido
O uso proibido do GitHub Pages inclui
- Conteúdo ou atividade ilegal ou proibido pelos nossos [Termos de Serviço](/github/site-policy/github-terms-of-service), [Políticas de uso aceitáveis](/github/site-policy/github-acceptable-use-policies) ou [Diretrizes da comunidade](/github/site-policy/github-community-guidelines)
- Atividade ou conteúdo violento ou ameaçador
- Excesso de atividade automatizada em massa (spam, por exemplo)
- Atividade que comprometa serviços ou usuários do GitHub
- Esquemas para enriquecer rapidamente
- Conteúdo sexual obsceno
- Conteúdo que deturpe sua identidade ou a finalidade do site

Em caso de dúvidas sobre se o seu uso ou a intenção se enquadra nestas categorias, entre em contato com o [Suporte do GitHub](https://support.github.com/contact) ou com o [Suporte Premium do GitHub](https://premium.githubsupport.com/). O GitHub se reserva o direito de recuperar qualquer subdomínio GitHub sem responsabilidade.

### Programa Sponsors

GitHub Sponsors allows the developer community to financially support the people and organizations who design, build, and maintain the open source projects they depend on, directly on GitHub. Para se tornar um Desenvolvedor Patrocinado, você deve concordar com os [Termos Adicionais do Programa GitHub Sponsors](/github/site-policy/github-sponsors-additional-terms).

### Imagens do servidor SQL

Você pode fazer o download da imagem de contêiner de edição padrão do Microsoft SQL Server para arquivos Linux ("Imagens do Servidor SQL"). Você deve desinstalar as imagens do Servidor SQL quando seu direito de usar o Software terminar. A Microsoft Corporation pode desativar o SQL Server Images a qualquer momento.
