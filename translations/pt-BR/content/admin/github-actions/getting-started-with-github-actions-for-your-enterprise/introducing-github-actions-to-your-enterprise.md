---
title: Apresentando o GitHub Actions à sua empresa
shortTitle: Introduzir ações
intro: 'Você pode planejar como implantar {% data variables.product.prodname_actions %} na sua empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Sobre {% data variables.product.prodname_actions %} para empresas

{% data reusables.actions.about-actions %} com {% data variables.product.prodname_actions %}, sua empresa pode automatizar, personalizar e executar seus fluxos de trabalho de desenvolvimento de software como testes e implantações. Para obter mais informações, consulte a seção "[Sobre o {% data variables.product.prodname_actions %} para empresas ](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

![Diagrama de trabalhos em execução em executores auto-hospedados](/assets/images/help/images/actions-enterprise-overview.png)

{% data reusables.enterprise.upgrade-ghes-for-actions %}

Antes de apresentar {% data variables.product.prodname_actions %} a uma grande empresa, primeiro você precisa planejar sua adoção e tomar decisões sobre como sua empresa usará {% data variables.product.prodname_actions %} para melhor atender às suas necessidades exclusivas.

## Governança e conformidade

Você deve criar um plano para reger o uso de {% data variables.product.prodname_actions %} da empresa e cumprir suas obrigações de conformidade.

Determine quais ações {% if actions-workflow-policy %}e fluxos de trabalho reutilizáveis{% endif %} seus desenvolvedores poderão usar. {% ifversion ghes %}Primeiro, decida se você vai permitir o acesso às ações {% if actions-workflow-policy %}e aos fluxos de trabalho reutilizáveis{% endif %} de fora de sua instância. {% data reusables.actions.access-actions-on-dotcom %} Para obter mais informações, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".

Em seguida,{% else %}Primeiro,{% endif %} decide se você permitirá ações de terceiros {% if actions-workflow-policy %}e fluxos de trabalho reutilizáveis{% endif %} que não foram criados por {% data variables.product.company_short %}. Você pode configurar as ações {% if actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} que podem ser executados no repositório, nos níveis da organização e da empresa e pode optar por permitir apenas ações criadas por {% data variables.product.company_short %}. Se você permitir ações de terceiros{% if actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}, você poderá limitar as ações permitidas para as criadas por criadores verificados ou uma lista de ações específicas{% if actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}. Para obter mais informações, consulte "[Gerenciando as configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)", "[Desabilitando ou limitando {% data variables.product.prodname_actions %} para a sua organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)" e "[Aplicando políticas de {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)."

{% if actions-workflow-policy %}
![Captura de tela das políticas de {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
{%- else %}
![Captura de tela das políticas de {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy.png)
{%- endif %}

{% ifversion ghec or ghae-issue-4757 %}
Considere combinar o OpenID Connect (OIDC) com fluxos de trabalho reutilizáveis para aplicar implantações consistentes no seu repositório, organização ou empresa. Você pode fazer isso definindo condições de confiança nas funções da nuvem com base em fluxos de trabalho reutilizáveis. Para obter mais informações, consulte "["Usando o OpenID Connect com fluxos de trabalho reutilizáveis"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).
{% endif %}

Você pode acessar informações sobre atividades relacionadas ao {% data variables.product.prodname_actions %} nos logs de auditoria da sua empresa. Se a sua empresa tiver de manter os logs de auditoria por mais de seis meses, planeje como você exportará e armazenará esses dados fora de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte {% ifversion ghec %}"[Transmitindo o log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)" e "[Exportando atividade de log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).{% else %}"[Encaminhamento de registro](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."{% endif %}

![Entradas do log de auditoria](/assets/images/help/repository/audit-log-entries.png)

## Segurança

Você deve planejar sua abordagem do fortalecimento da segurança para {% data variables.product.prodname_actions %}.

### Fortalecimento da segurança dos fluxos de trabalho individuais e repositórios

Faça um plano para aplicar as práticas recmendadas de segurança para as pessoas que usam as funcionalidades de {% data variables.product.prodname_actions %} na sua empresa. Para obter mais informações sobre essas práticas, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions)".

Também é possível incentivar a reutilização de fluxos de trabalho que já foram avaliados para a segurança. Para obter mais informações, consulte "[Innersourcing](#innersourcing)".

### Protegendo o acesso a segredos e recursos de implantação

Você deveria planejar onde você armazenará seus segredos. Recomendamos armazenar segredos em {% data variables.product.prodname_dotcom %}, mas você pode optar por armazenar segredos em um provedor de nuvem.

Em {% data variables.product.prodname_dotcom %}, você pode armazenar segredos no nível do repositório ou da organização. Os segredos no nível do repositório podem estar limitados a fluxos de trabalho em certos ambientes, como produção ou teste. Para obter mais informações, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

![Captura de tela de uma lista de segredos](/assets/images/help/settings/actions-org-secrets-list.png) Você deve considerar adicionar proteção manual de aprovação para ambientes sensíveis, para que os fluxos de trabalho devam ser aprovados antes de ter acesso aos segredos do ambiente. Para obter mais informações, consulte "[Usando ambientes para implantações](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

### Considerações de segurança para ações de terceiros

Há um risco significativo em fornecer de ações de repositórios de terceiros no {% data variables.product.prodname_dotcom %}. Se você permitir ações de terceiros, você deverá criar diretrizes internas que incentivama sua equipe a seguir as práticas recomendadas como, por exemplo, fixar ações para o SHA completo do commit. Para obter mais informações, consulte "[Usando ações de terceiros](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)".

## Innersourcing

Pense em como sua empresa pode usar funcionalidades de {% data variables.product.prodname_actions %} para gerar automação de recursos internos. Innersourcing é uma maneira de incorporar os benefícios das metodologias de código aberto no seu ciclo de desenvolvimento de software interno. Para obter mais informações, consulte [Uma introdução ao innersource ](https://resources.github.com/whitepapers/introduction-to-innersource/) nos recursos de{% data variables.product.company_short %}.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-4757 %}
{% data reusables.actions.reusable-workflows-ghes-beta %}
Com fluxos de trabalho reutilizáveis, a sua equipe pode chamar um fluxo de trabalho a partir de outro fluxo de trabalho, evitando duplicação exata. Os fluxos de trabalho reutilizáveis promovem práticas recomendadas, ajudando a sua equipe a usar os fluxos de trabalho bem desenhados e que já foram testados. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

Para fornecer um ponto de partida para os desenvolvedores que desenvolvem novos fluxos de trabalho, você pode usar fluxos de trabalho iniciais. Isso não só poupa tempo para seus desenvolvedores, mas promove a consistência e as práticas práticas recomendadas na sua empresa. Para obter mais informações, consulte "[Criando fluxos de trabalho iniciais para a sua organização](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

{% if not internal-actions %}
Sempre que seus desenvolvedores de fluxo de trabalho quiserem usar uma ação que seja armazenada em um repositório privado, eles deverão configurar o fluxo de trabalho para clonar o repositório primeiro. Para reduzir o número de repositórios que devem ser clonados, considere agrupar ações comumente usadas em um único repositório. Para obter mais informações, consulte "[Sobre ações personalizadas](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)".
{% endif %}

## Gerenciando recursos

Você deve planejar como você gerenciará os recursos necessários para usar o {% data variables.product.prodname_actions %}.

{% ifversion ghes %}
### Requisitos de hardware

É possível que você tenha de atualizar os recursos de CPU e memória para o {% data variables.product.product_location %} administrar a carga de {% data variables.product.prodname_actions %} sem causar perda de desempenho. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)".
{% endif %}

### Executores

Os fluxos de trabalho de {% data variables.product.prodname_actions %}} exigem executores.{% ifversion ghec %} Você pode escolher usar executores hospedados em {% data variables.product.prodname_dotcom %} ou executores auto-hospedados. Os executores hospedados em {% data variables.product.prodname_dotcom %} são convenientes porque são gerenciados por {% data variables.product.company_short %}, que administram a manutenção e atualizações para você. No entanto você deverá considerar os executores auto-hospedados se você precisar executar um fluxo de trabalho que terá acesso aos recursos por trás de seu firewall ou você quiser ter mais controle sobre os recursos, configuração, ou localização geográfica das máquinas dos seus executores. Para obter mais informações, consulte "[Sobre executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" e "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners).{% else %} Você deverá hospedar seus próprios executores instalando o aplicativo de executor auto-hospedado em {% data variables.product.prodname_actions %} nas suas próprias máquinas. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."{% endif %}

{% ifversion ghec %}Se você estiver usando executores auto-hospedados, você deverá decidir se você quer usar máquinas físicas, máquinas virtuais ou contêineres.{% else %}Decida se você deseja usar máquinas físicas, máquinas virtuais ou contêineres para seus executores auto-hospedados.{% endif %} As máquinas físicas reterão vestígios de trabalhos anteriores assim como as máquinas virtuais, a menos que você use uma nova imagem para cada trabalho ou limpe as máquinas após a execução de cada trabalho. Se você escolher contêineres, você deverá estar ciente de que a atualização automática do executor irá desligar o container, o que pode gerar falha nos fluxos de trabalho. Você deve encontrar uma solução para isso, impedindo atualizações automáticas ou ignorando o comando para matar o contêiner.

Você também deverá decidir onde adicionar cada executor. Você pode adicionar um executor auto-hospedado a um repositório individual, ou você pode disponibilizar o executor para toda uma organização ou empresa. Adicionar runners aos níveis da organização ou empresa permite compartilhar executores, o que pode reduzir o tamanho da infraestrutura de executores. Você pode usar políticas para limitar o acesso a executores auto-hospedados a nível da organização e da empresa atribuindo grupos de executores a repositórios ou organizações específicas. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)" e "[Gerenciando acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% ifversion ghec or ghes > 3.2 %}
Você deve considerar usar o dimensionamento automático para aumentar ou diminuir automaticamente o número de executores auto-hospedados disponíveis. Para obter mais informações, consulte "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".
{% endif %}

Finalmente, você deve considerar o fortalecimento da segurança para os executores auto-hospedados. Para obter mais informações, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

### Armazenamento

{% data reusables.actions.about-artifacts %} Para obter mais informações, consulte "[Armazenar dados do fluxo de trabalho como artefatos](/actions/advanced-guides/storing-workflow-data-as-artifacts)".

![Captura de tela do artefato](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion ghes %}
Você deve configurar o armazenamento externo de blob para estes artefatos. Escolha qual provedor de armazenamento compatível a sua empresa irá usar. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)".
{% endif %}

{% ifversion ghec or ghes %}

{% data reusables.actions.artifact-log-retention-statement %}

{% endif %}

Se você quiser manter registros e artefatos maiores que o limite superior que você pode configurar em {% data variables.product.product_name %}, você terá que planejar como exportar e armazenar os dados.

{% ifversion ghec %}
Um certo nível armazenamento está incluído na sua assinatura, mas o armazenamento adicional afetará o seu pagamento. Você deveria preparar-se para este custo. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."
{% endif %}

## Monitorando o uso

Você deve considerar fazer um plano para monitorar o uso de {% data variables.product.prodname_actions %} da sua empresa como, por exemplo, a frequência com que os fluxos de trabalho estão sendo executados, quantas dessas execuções estão passando e falhando, e quais repositórios estão usando quais fluxos de trabalho.

{% ifversion ghec %}
Você pode ver informações básicas sobre o uso de transferência de dados e armazenamento de {% data variables.product.prodname_actions %} para cada organização da sua empresa por meio das suas configurações de cobrança. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)".

Para dados de uso mais detalhados, você{% else %}{% endif %} pode usar webhooks para assinar informações sobre trabalhos de fluxo de trabalho e execução de fluxo de trabalho. Para obter mais informações, consulte "[Sobre webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)".

Faça um plano de como sua empresa pode passar as informações desses webhooks para um sistema de arquivamento de dados. Você pode considerar usar "CEDAR.GitHub.Collector", uma ferramenta de código aberto que coleta e processa dados de webhook a partir de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte o repositório [`Microsoft/CEDAR.GitHub.Collector`](https://github.com/microsoft/CEDAR.GitHub.Collector/).

Você também deve planejar como permitir que suas equipes obtenham os dados de que precisam no seu sistema de arquivamento.
