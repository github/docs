---
title: Sobre o GitHub Actions para empresas
shortTitle: Sobre ações do GitHub
intro: '{% data variables.product.prodname_actions %} pode melhorar a produtividade do desenvolvedor automatizando o ciclo de desenvolvimento de software da sua empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
---

{% ifversion ghes < 3.3 %}
{% note %}

**Observação:** {% data reusables.enterprise.upgrade-ghes-for-actions %}

{% endnote %}
{% endif %}

## Sobre {% data variables.product.prodname_actions %} para empresas

{% data reusables.actions.about-actions-for-enterprises %}

| Tarefa                                                                      | Mais informações                                                                                                                                                               |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Testar e compilar automaticamente o seu aplicativo                          | [Sobre integração contínua](/actions/automating-builds-and-tests/about-continuous-integration)                                                                                 |
| Implantar seu aplicativo                                                    | "[Sobre a implantação contínua](/actions/deployment/about-deployments/about-continuous-deployment)"                                                                            |
| Empacotar código automaticamente e com segurança em artefatos e contêineres | "[Sobre empacotamento com {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions)"                                    |
| Automatize suas tarefas de gerenciamento de projetos                        | "[Usando {% data variables.product.prodname_actions %} para gerenciamento de projeto](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)" |

{% data variables.product.prodname_actions %} ajuda a sua equipe a trabalhar mais rápido e em escala. Quando grandes repositórios começam a usar o {% data variables.product.prodname_actions %}, as equipes fazem merge de um número significativamente maior de pull requests por dia, e os pull requests são mesclados muito mais rapidamente. Para obter mais informações, consulte "[Gravação e envio mais rápido de código](https://octoverse.github.com/writing-code-faster/#scale-through-automation)" no estado do Octoverse.

Você pode criar suas próprias automações exclusivas ou você pode usar e adaptar os fluxos de trabalho do nosso ecossistema de mais de 10, 00 ações construídas por líderes do setor e pela comunidade de código aberto. {% ifversion ghec %}Para obter mais informações, consulte "[Encontrando e personalizando ações](/actions/learn-github-actions/finding-and-customizing-actions).{% else %}Você pode restringir seus desenvolvedores a usar ações que existem no {% data variables.product.product_location %} ou você pode permitir que seus desenvolvedores acessem ações em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".{% endif %}

{% data variables.product.prodname_actions %} é intuitivo para o desenvolvedor, pois está integrado diretamente à experiência familiar de {% data variables.product.product_name %}.

{% ifversion ghec %}Você pode desfrutar da conveniência de executores hospedados em {% data variables.product.company_short %}, que são mantidos e atualizados por {% data variables.product.company_short %} ou você{% else %}{% endif %} pode controlar a sua própria infraestrutura privada de CI/CD usando executores auto-hospedados. Os executores auto-hospedados permitem que você determine o ambiente exato e os recursos que completam suas compilações, testes e implantações sem expor o seu ciclo de desenvolvimento de software à internet. Para obter mais informações, consulte {% ifversion ghec %}"[Sobre executores auto-hospedados em {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" e {% endif %} "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% data variables.product.prodname_actions %} fornece maior controle sobre implantações. Por exemplo, você pode usar ambientes para exigir aprovação para um trabalho prosseguir ou restringir quais branches podem acionar um fluxo de trabalho, ou limitar o acesso a segredos.{% ifversion ghec or ghae-issue-4856 %} Se os seus fluxos de trabalho precisarem acessar recursos de um provedor de nuvem compatível com o OpenID Connect (OIDC), você poderá configurar seus fluxos de trabalho para efetuar a autenticação diretamente no provedor de nuvem. OIDC fornece benefícios de segurança, como eliminar a necessidade de armazenar credenciais como segredos de longa duração. Para obter mais informações, consulte[Sobre segurança fortalecida com OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."{% endif %}

{% data variables.product.prodname_actions %} também inclui ferramentas para governar o ciclo de desenvolvimento de software da sua empresa e atender às obrigações de conformidade. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".

## Sobre como dar os primeiros passos com {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %}
{% data reusables.actions.ghes-actions-not-enabled-by-default %} Depois de terminar o planejamento, você pode seguir as instruções para habilitar {% data variables.product.prodname_actions %}. Por exemplo, talvez você precise atualizar os recursos de CPU e memória para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

{% else %}
Após terminar o planejamento, você pode seguir as instruções para dar os primeiros passos com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte {% ifversion ghec %}"[Primeiros passos com {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud).{% elsif ghae %}"[Primeiros passos com {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)."{% endif %}
{% endif %}


## Leia mais

- "[Entendendo {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)"{% ifversion ghec %}
- "[Sobre a cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)"{% endif %}
