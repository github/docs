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

{% data variables.product.company_short %} supports the following services for cloud deployment.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

## About releases and upgrades

{% data reusables.enterprise.constantly-improving %} You are responsible for upgrades to your instance. For more information, see "[{% data variables.product.product_name %} releases](/admin/all-releases)."

## About administration

You can configure and monitor {% data variables.product.product_name %} via browser, administrative SSH access, and REST or GraphQL APIs. {% data variables.product.company_short %} has found that people with Linux administration experience are more successful with the deployment and maintainance of {% data variables.product.product_name %}.

You can give certain employees administrative access to {% data variables.product.product_name %}, so they can set up external authentication, configure the instance to meet developer needs, and monitor the instance's activity and performance. To ensure compliance with business rules or regulatory restrictions, administrators can configure policies that control how people use {% data variables.product.product_location %}. Para obter mais informações, consulte os seguintes artigos.

- "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)"
- "[Configuring your enterprise](/admin/configuration/configuring-your-enterprise)"
- "[About the {% data variables.product.prodname_enterprise %} API](/admin/overview/about-the-github-enterprise-api)"
- "[Monitoring your appliance](/admin/enterprise-management/monitoring-your-appliance)"
- "[Monitoring activity in your enterprise](/admin/monitoring-activity-in-your-enterprise)"
- "[About enterprise policies](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)"

## About optional features

You can configure optional features for {% data variables.product.product_name %} that improve the software development lifecycle for your enterprise.

| Funcionalidade                                               | Descrição                                                                                            | Mais informações                                                                                                                                                                             |
|:------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_actions %}                | Automate CI/CD and development workflows                                                             | "[Sobre {% data variables.product.prodname_actions %} para as empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" |
| {% data variables.product.prodname_github_connect %}       | Benefit from the power of {% data variables.product.prodname_dotcom_the_website %} in limited ways | "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)"                                                     |
| {% data variables.product.prodname_GH_advanced_security %} | Improve code security and quality                                                                    | "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)"                                                    |
| {% data variables.product.prodname_registry %}               | Host software packages for your enterprise                                                           | "[Introduction to {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)"                                                          |

## About deployment topologies

By default, {% data variables.product.product_name %} runs as a standalone instance. You can increase the reliability and performance of {% data variables.product.product_name %} by using a different topology for your deployment.

- To mitigate the impact of system or network failures, you can deploy a passive replica instance. During an outage that affects your primary instance, you can manually fail over to the replica instance. Para obter mais informações, consulte "[Sobre a configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".
- You can configure multiple active replicas to improve performance for developers who are geographically distant from your primary instance. Para obter mais informações, consulte "[Sobre a replicação geográfica](/admin/enterprise-management/configuring-high-availability/about-geo-replication)".
- Some enterprises with tens of thousands of developers may benefit from a cluster configuration that scales horizontally instead of vertically. Para obter mais informações, consulte "[Sobre clustering](/admin/enterprise-management/configuring-clustering/about-clustering)."

## About backups and disaster recovery

To safeguard against data loss or service disruptions for your developers, {% data variables.product.company_short %} strongly recommends that you establish a plan for disaster recovery. You can back up your instance's configuration and user data by deploying and configuring a Linux or Unix host system with {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte "[Configurar backups no appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

Additionally, you can configure a passive replica instance to fail over to in the event of a system or network failure. For more information, see "[About deployment](#about-deployment-topologies)."

## About documentation

Documentation for both administrators and users of {% data variables.product.product_name %} is available on this site, {% data variables.product.prodname_docs %}.

- [Documentação do administrador da empresa](/admin)
- [User documentation](/)

Different versions of {% data variables.product.product_name %} are reflected separately in the documentation on {% data variables.product.prodname_docs %}. Para obter mais informações, consulte "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

## Trying {% data variables.product.product_name %}

You can sign up for a free, 45-day trial of {% data variables.product.product_name %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)".

## Leia mais

- "[Primeiros passos com {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)"
- "[Sobre o {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)"
- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) no repositório  `github/roadmap`
