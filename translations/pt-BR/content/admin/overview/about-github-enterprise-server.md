---
title: Sobre o GitHub Enterprise Server
intro: '{% data variables.product.product_name %} é uma plataforma de desenvolvimento de software que você pode hospedar em um ambiente privado.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## Sobre {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Sua equipe pode usar o {% data variables.product.product_name %} para criar e enviar softwares usando o controle de versão do Git, poderosas APIs, ferramentas de produtividade e colaboração e integrações. Desenvolvedores familiarizados com {% data variables.product.prodname_dotcom_the_website %} podem a integrar-se e contribuir sem problemas usando funcionalidades e fluxos de trabalho conhecidos.

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Para obter mais informações, consulte "[Visão geral do sistema](/admin/overview/system-overview)".

Você pode optar por implantar {% data variables.product.product_name %} no local ou em um ambiente de nuvem suportado.

## Ambientes compatíveis para implantação

Você pode fazer a implantação de {% data variables.product.product_name %} em um hipervisor de virtualização dentro do seu centro de dados ou em nuvem pública.

{% data variables.product.company_short %} é compatível com os seguintes hipervisores de virtualização para a implantação local.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} é compatível com os seguintes serviços para implantação em nuvem.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

## Sobre bersões e atualizações

{% data reusables.enterprise.constantly-improving %} Você é responsável pelas atualizações da sua instância. Para obter mais informações, consulte "[versões de {% data variables.product.product_name %}](/admin/all-releases)".

## Sobre a administração

Você pode configurar e monitorar {% data variables.product.product_name %} via navegador, acesso administrativo SSH e APIs REST ou GraphQL. {% data variables.product.company_short %} descobriu que as pessoas com experiência administrativa no Linux são mais bem-sucedidas com a implantação e a manutenção de {% data variables.product.product_name %}.

Você pode dar acesso administrativo a {% data variables.product.product_name %} a certos funcionários para que eles possam criar autenticação externa, configurar a instância para atender às necessidades de desenvolvedores e monitorar a atividade e o desempenho da instância. Para garantir a conformidade com as regras de negócio ou restrições regulatórias, os administradores podem configurar políticas que controlam como as pessoas usam {% data variables.product.product_location %}. Para obter mais informações, consulte os seguintes artigos.

- "[Sobre autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)"
- "[Configurando sua empresa](/admin/configuration/configuring-your-enterprise)"
- "[Sobre a API de {% data variables.product.prodname_enterprise %}](/admin/overview/about-the-github-enterprise-api)
- "[Monitorando seu dispositivo](/admin/enterprise-management/monitoring-your-appliance)"
- "[Monitorando a atividade na sua empresa](/admin/monitoring-activity-in-your-enterprise)"
- "[Sobre as políticas corporativas](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)"

## Sobre as funcionalidades opcionais

Você pode configurar recursos opcionais para {% data variables.product.product_name %} que melhoram o ciclo de vida de desenvolvimento de software para sua empresa.

| Funcionalidade                                               | Descrição                                                                                             | Mais informações                                                                                                                                                                             |
|:------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_actions %}                | Automatize CI/CD e fluxos de trabalho de desenvolvimento                                              | "[Sobre {% data variables.product.prodname_actions %} para as empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" |
| {% data variables.product.prodname_github_connect %}       | Beneficie-se do poder de {% data variables.product.prodname_dotcom_the_website %} de forma limitada | "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)"                                                     |
| {% data variables.product.prodname_GH_advanced_security %} | Melhore a segurança e qualidade do código                                                             | "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)"                                                    |
| {% data variables.product.prodname_registry %}               | Hospede pacotes de software para sua empresa                                                          | "[Introdução a {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)"                                                             |

## Sobre topologies de implantação

Por padrão, {% data variables.product.product_name %} é executado como uma instância independente. Você pode aumentar a confiabilidade e o desempenho de {% data variables.product.product_name %} usando uma topologia diferente para a sua implantação.

- Para mitigar o impacto de falhas de sistema ou de rede, você pode implantar uma instância de réplica passiva. Durante uma interrupção que afeta sua instância principal, você pode gerar a falha manualmente na instância da réplica. Para obter mais informações, consulte "[Sobre a configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".
- É possível configurar várias réplicas ativas para melhorar o desempenho para desenvolvedores que estão geograficamente distantes da sua instância principal. Para obter mais informações, consulte "[Sobre a replicação geográfica](/admin/enterprise-management/configuring-high-availability/about-geo-replication)".
- Algumas empresas com dezenas de milhares de desenvolvedores podem se beneficiar de uma configuração de cluster que é dimensionada horizontalmente ao invés de verticalmente. Para obter mais informações, consulte "[Sobre clustering](/admin/enterprise-management/configuring-clustering/about-clustering)."

## Sobre backups e recuperação de desastres

Para se proteger contra perda de dados ou interrupções de serviço para os seus desenvolvedores, {% data variables.product.company_short %} recomenda que você estabeleça um plano de recuperação de desastres. Você pode fazer backup das configurações e dados de usuário da instância implantando e configurando um sistema de host Linux ou Unix com {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte "[Configurar backups no appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

Além disso, você pode configurar uma instância de réplica passiva para gerar uma falha no caso de uma falha no sistema ou na rede. Para obter mais informações, consulte "[Sobre a implantação](#about-deployment-topologies)."

## Sobre a documentação

A documentação para administradores e usuários de {% data variables.product.product_name %} está disponível no site a seguir {% data variables.product.prodname_docs %}.

- [Documentação do administrador da empresa](/admin)
- [Documentação do usuário](/)

Diferentes versões de {% data variables.product.product_name %} são refletidas separadamente na documentação em {% data variables.product.prodname_docs %}. Para obter mais informações, consulte "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

## Testando {% data variables.product.product_name %}

Você pode se inscrever em um teste Grátis de 45 dias de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)".

## Leia mais

- "[Primeiros passos com {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)"
- "[Sobre o {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)"
- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) no repositório  `github/roadmap`
