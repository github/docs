---
title: Primeiros passos vom executores auto-hospedados da sua empresa
shortTitle: Executores auto-hospedados
intro: 'Você pode configurar a máquina de um exeucutor para sua empresa para que seus desenvolvedores possam começar a automatizar fluxos de trabalho com {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
---

## Sobre executores auto-hospedados para {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

Com {% data variables.product.prodname_actions %}, os desenvolvedores podem escrever e combinar tarefas individuais denominadas ações para criar fluxos de trabalho personalizados. {% ifversion ghes or ghae %}Para habilitar {% data variables.product.prodname_actions %} para {% ifversion ghae %}sua empresa{% elsif ghes %} {% data variables.product.product_location %}{% endif %}, você deverá hospedar pelo menos uma máquina para executar trabalhos.{% endif %} {% ifversion ghec %}Você pode hospedar sua própria máquina de executores para executar esses trabalhos e essa{% elsif ghes or ghae %}Esta{% endif %} máquina é denominada um executor auto-hospedado. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}Todos{% elsif ghes or ghae %}Os executores auto-hospedados{% endif %} podem ser executados no Linux, Windows ou macOS. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% ifversion ghec %}

Como alternativa, você pode usar máquinas de executores que {% data variables.product.company_short %} hospeda. Os executores hospedados em {% data variables.product.company_short %} estão fora do escopo deste guia. Para obter mais informações, consulte "[Sobre executores hospedados em {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

Este guia mostra como aplicar uma abordagem de gerenciamento centralizada para os executores auto-hospedados para {% data variables.product.prodname_actions %} na sua empresa. No guia, você realizará as seguintes tarefas.

1. Configurar uma política limitada para restringir as ações que podem ser executadas dentro da sua empresa
1. Implantar um executor auto-hospedado para a sua empresa
1. Criar um grupo para gerenciar o acesso aos executores disponíveis para sua empresa
1. Opcionalmente, restringir ainda mais os repositórios que podem usar o executor
{%- ifversion ghec or ghae-issue-4462 or ghes > 3.2 %}
1. Opcionalmente, crie ferramentas personalizadas para dimensionar automaticamente seus executores auto-hospedados
{% endif %}

Você também encontrará informações adicionais sobre como monitorar e proteger seus executores auto-hospedados,{% ifversion ghes or ghae %} como acessar ações de {% data variables.product.prodname_dotcom_the_website %},{% endif %} e como personalizar o software nas máquinas dos seus executores.

Depois de terminar o guia, {% ifversion ghec or ghae %}os integrantes da sua empresa{% elsif ghes %}usuários de {% data variables.product.product_location %}{% endif %} poderão executar trabalhos do fluxo de trabalho de {% data variables.product.prodname_actions %} na máquina de um executor auto-hospedado.

## Pré-requisitos

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Sua empresa deve possuir pelo menos uma organização. Para obter mais informações, consulte "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)" e[Criando uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

## 1. Configurar políticas para {% data variables.product.prodname_actions %}

Primeiro, habilite {% data variables.product.prodname_actions %} para todas as organizações, e configure uma política para restringir as ações que podem executar {% ifversion ghec or ghae%}dentro da sua empresa em {% data variables.product.product_name %}{% elsif ghes %}em {% data variables.product.product_location %}{% endif %}. Opcionalmente, os proprietários da organização podem restringir ainda mais essas políticas para cada organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em "Políticas", selecione **Habilitar para todas as organizações**.

   ![Captura de tela da política "Habilitar para todas as organizações" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Selecione **Permitir ações** e **Permitir ações criadas pelo GitHub** para permitir ações e ações locais criadas por {% data variables.product.company_short %}.

   ![Screenshot of "Allow select actions" and "Allow actions created by {% data variables.product.company_short %}" for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png)
1. Clique em **Salvar**.

You can configure additional policies to restrict the actions available to {% ifversion ghec or ghae %}enterprise members{% elsif ghes %}users of {% data variables.product.product_location %}{% endif %}. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)".

## 2. Deploy the self-hosted runner for your enterprise

Next, add a self-hosted runner to your enterprise. {% data variables.product.product_name %} will guide you through installation of the necessary software on the runner machine. After you deploy the runner, you can verify connectivity between the runner machine and {%ifversion ghec or ghae %}your enterprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

### Adding the self-hosted runner

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Manage access to the self-hosted runner using a group

You can create a runner group to manage access to the runner that you added to your enterprise. You'll use the group to choose which organizations can execute jobs from {% data variables.product.prodname_actions %} on the runner.

{% data variables.product.product_name %} adds all new runners to a group. Runners can be in one group at a time. By default, {% data variables.product.product_name %} adds new runners to the "Default" group.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, under "Organization access", select the **Organization access** drop-down, and click **Selected organizations**.
1. To the right of the drop-down with the organization access policy, click {% octicon "gear" aria-label="The Gear icon" %}.
1. Select the organizations you'd like to grant access to the runner group.
{%- ifversion ghec or ghes %}
1. Optionally, to allow public repositories in the selected organizations to use runners in the group, select **Allow public repositories**.

   {% warning %}

   **Aviso**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{%- endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Click the "Runners" tab.
1. In the list of runners, click the runner that you deployed in the previous section.
1. Clique em **Editar**.
1. Click **Runner groups {% octicon "gear" aria-label="The Gear icon" %}**.
1. In the list of runner groups, click the name of the group that you previously created.
1. Click **Save** to move the runner to the group.
{%- elsif ghes < 3.4 or ghae %}
1. To the right of "Default", click the number of runners in the group to show the runners.
1. Select the runner that you deployed.
1. To the right of "Runner groups", select the **Move to group** dropdown, and click the group that you previously created.
{%- endif %}

You've now deployed a self-hosted runner that can run jobs from {% data variables.product.prodname_actions %} within the organizations that you specified.

## 4. Further restrict access to the self-hosted runner

Optionally, organization owners can further restrict the access policy of the runner group that you created. For example, an organization owner could allow only certain repositories in the organization to use the runner group.

Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".

{% ifversion ghec or ghae-issue-4462 or ghes > 3.2 %}

## 5. Automatically scale your self-hosted runners

Optionally, you can build custom tooling to automatically scale the self-hosted runners for {% ifversion ghec or ghae %}your enterprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. For example, your tooling can respond to webhook events from {% data variables.product.product_location %} to automatically scale a cluster of runner machines. Para obter mais informações, consulte "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Próximas etapas

- You can monitor self-hosted runners and troubleshoot common issues. Para obter mais informações, consulte "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."

- {% data variables.product.company_short %} recommends that you review security considerations for self-hosted runner machines. Para obter mais informações, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

- {% ifversion ghec %}If you use {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, you{% elsif ghes or ghae %}You{% endif %} can manually sync repositories on {% data variables.product.prodname_dotcom_the_website %} containing actions to your enterprise on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}{% endif %}. Alternatively, you can allow members of your enterprise to automatically access actions from {% data variables.product.prodname_dotcom_the_website %} by using {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte o seguinte.

   {%- ifversion ghes or ghae %}
   - "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Habilitando o acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"
   {%- elsif ghec %}
   - "Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}" in the [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) or [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) documentation
   - "Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}" in the [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) or [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) documentation
   {%- endif %}

- You can customize the software available on your self-hosted runner machines, or configure your runners to run software similar to {% data variables.product.company_short %}-hosted runners{% ifversion ghes or ghae %} available for customers using {% data variables.product.prodname_dotcom_the_website %}{% endif %}. The software that powers runner machines for {% data variables.product.prodname_actions %} is open source. For more information, see the [`actions/runner`](https://github.com/actions/runner) and [`actions/virtual-environments`](https://github.com/actions/virtual-environments) repositories.

## Leia mais

- "[Configuring the self-hosted runner application as a service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"
