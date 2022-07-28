---
title: Sobre o GitHub para empresas
intro: 'As empresas podem usar os produtos corporativos dw {% data variables.product.prodname_dotcom %} para melhorar todo seu ciclo de vida do desenvolvimento de software.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## Sobre {% data variables.product.prodname_dotcom %} para empresas

{% data variables.product.prodname_dotcom %} é uma plataforma completa de desenvolvedor para criar, escalar e fornecer software seguro. As empresas usam nosso pacote de produtos para dar suporte a todo o ciclo de vida do desenvolvimento de software, aumentando a velocidade de desenvolvimento e melhorando a qualidade do código.

Os desenvolvedores podem armazenar e fazer o controle de versões do seu código-fonte em repositórios, usando problema e projetos para planejar e acompanhar o seu trabalho. Eles podem codificar em um ambiente de desenvolvimento hospedado na nuvem, {% data variables.product.prodname_github_codespaces %} e, em seguida, revisar as alterações de código um do outro com pull requests, usando recursos de segurança de código para manter segredos e vulnerabilidades fora da sua base de código. Por fim, você pode automatizar a sua compilação, testar e implantar o pipeline com {% data variables.product.prodname_actions %} e pacotes de software de host com {% data variables.product.prodname_registry %}.

Quando as empresas adotam {% data variables.product.prodname_enterprise %}, o seu retorno sobre o investimento (ROI) é alto. Por exemplo, os seus desenvolvedores economizam 45 minutos por dia e a integração e o tempo de treinamento são reduzidos em 40%. Para obter mais informações, consulte [O impacto econômico total de {% data variables.product.prodname_enterprise %}](https://resources.github.com/downloads/TEI-of-GitHub-Enterprise.pdf).

Para simplificar a administração em todas as fases do ciclo de vida do desenvolvimento de software, fornecemos um único ponto de visibilidade e gestão denominado conta corporativa. As contas corporativas permitem que você gerencie a cobrança e configurações, aplique a política e auditoria às pessoas com acesso aos recursos da sua empresa. Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".

Opcionalmente, você pode adicionar funcionalidades extras de segurança com {% data variables.product.prodname_GH_advanced_security %} e opções de suporte aprimorado com {% data variables.contact.premium_support %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" e "[Cerca de {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Sobre as opções de implantação

Ao comprar {% data variables.product.prodname_enterprise %}, você terá acesso a {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_ghe_cloud %} é um conjunto de funcionalidades avançadas em {% data variables.product.prodname_dotcom_the_website %}, enquanto {% data variables.product.prodname_ghe_server %} é uma plataforma auto-hospedada. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" na documentação de {% data variables.product.prodname_ghe_server %}.{% else %}{% endif %}

Para {% data variables.product.prodname_ghe_cloud %}, você pode permitir que os desenvolvedores criem e gerenciem suas próprias contas pessoais, ou você pode usar {% data variables.product.prodname_emus %}, o que lhe permite criar e gerenciar as contas de usuário para seus desenvolvedores. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

{% data variables.product.prodname_ghe_managed %} tem disponibilidade limitada para clientes selecionados com rigorosos requisitos de segurança e conformidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}" na documentação de {% data variables.product.prodname_ghe_managed %}.{% else %}{% endif %}

Você pode se beneficiar do poder de {% data variables.product.prodname_dotcom_the_website %} mesmo usando {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} habilitando {% data variables.product.prodname_github_connect %}, que permite a você configurar funcionalidades e fluxos de trabalho adicionais, como {% data variables.product.prodname_dependabot_alerts %} para dependências inseguras.{% ifversion ghec %}

- "[Sobre {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" na documentação de {% data variables.product.prodname_ghe_server %}
- "[Sobre {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" na documentação {% data variables.product.prodname_ghe_managed %}{% else %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".{% endif %}

## Leia mais

- [Comparar {% data variables.product.prodname_dotcom %} a outras soluções de DevOps](https://resources.github.com/devops/tools/compare/) em {% data variables.product.company_short %} recursos
