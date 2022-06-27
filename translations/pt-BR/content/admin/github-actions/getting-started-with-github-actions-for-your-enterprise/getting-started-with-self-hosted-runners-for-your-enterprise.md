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

1. Configure uma política limitada para restringir as ações{% ifversion actions-workflow-policy %} e fluxos de trabalho{% endif %} reutilizáveis que podem ser executados dentro da sua empresa
1. Implantar um executor auto-hospedado para a sua empresa
1. Criar um grupo para gerenciar o acesso aos executores disponíveis para sua empresa
1. Opcionalmente, restringir ainda mais os repositórios que podem usar o executor
{%- ifversion ghec or ghae or ghes > 3.2 %}
1. Opcionalmente, crie ferramentas personalizadas para dimensionar automaticamente seus executores auto-hospedados
{% endif %}

Você também encontrará informações adicionais sobre como monitorar e proteger seus executores auto-hospedados,{% ifversion ghes or ghae %} como acessar ações de {% data variables.product.prodname_dotcom_the_website %},{% endif %} e como personalizar o software nas máquinas dos seus executores.

Depois de terminar o guia, {% ifversion ghec or ghae %}os integrantes da sua empresa{% elsif ghes %}usuários de {% data variables.product.product_location %}{% endif %} poderão executar trabalhos do fluxo de trabalho de {% data variables.product.prodname_actions %} na máquina de um executor auto-hospedado.

## Pré-requisitos

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Sua empresa deve possuir pelo menos uma organização. Para obter mais informações, consulte "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)" e[Criando uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

## 1. Configurar políticas para {% data variables.product.prodname_actions %}

Primeiro, habilite {% data variables.product.prodname_actions %} para todas as organizações e configure uma política para restringir as ações{% ifversion actions-workflow-policy %} e os fluxos de trabalho reutilizáveis{% endif %} que podem executar {% ifversion ghec or ghae%}dentro da sua empresa em {% data variables.product.product_name %}{% elsif ghes %}em {% data variables.product.product_location %}{% endif %}. Opcionalmente, os proprietários da organização podem restringir ainda mais essas políticas para cada organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Em "Políticas", selecione **Habilitar para todas as organizações**.

   ![Captura de tela da política "Habilitar para todas as organizações" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Selecione {% data reusables.actions.policy-label-for-select-actions-workflows %} e **Permitir ações criadas pelo GitHub** para permitir ações locais{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}, e ações criadas por {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %}
   ![Captura de tela de "Permitir selecionar ações" e "Permitir ações criadas por {% data variables.product.company_short %}" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png)
   {%- else %}
   ![Captura de tela de "Permitir selecionar ações" e "Permitir ações criadas por {% data variables.product.company_short %}" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png)
   {%- endif %}
1. Clique em **Salvar**.

Você pode configurar políticas adicionais para restringir as ações disponíveis para os {% ifversion ghec or ghae %}integrantes da empresa{% elsif ghes %}usuários de {% data variables.product.product_location %}{% endif %}. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)".

## 2. Implantar o executor auto-hospedado para a sua empresa

Em seguida, adicione um executor auto-hospedado à sua empresa. O {% data variables.product.product_name %} irá guiar você pela instalação do software necessário na máquina do executor. Após implantar o executor, você poderá verificar a conectividade entre a máquina do executor e {%ifversion ghec or ghae %}a sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

### Adicionando o executor auto-hospedado

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Gerenciar acesso ao executor auto-hospedado usando um grupo

Você pode criar um grupo de executor para gerenciar o acesso ao executor que você adicionou à sua empresa. Você usará o grupo para escolher quais organizações podem executar trabalhos a partir de {% data variables.product.prodname_actions %} no executor.

{% data variables.product.product_name %} adiciona todos os novos executores a um grupo. Os executores podem estar em um grupo por vez. Por padrão, o {% data variables.product.product_name %} adiciona novos executores ao grupo "padrão".

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. Para escolher uma política para o acesso da organização, em "Acesso da organização", selecione a lista suspensa **Organização** e clique **Organizações selecionadas**.
1. À direita da lista suspensa com a política de acesso da organização, clique em {% octicon "gear" aria-label="The Gear icon" %}.
1. Selecione as organizações que você gostaria de conceder acesso ao grupo do executor.
{%- ifversion ghec or ghes %}
1. Opcionalmente, para permitir que repositórios públicos nas organizações selecionadas usem executores no grupo, selecione **Permitir repositórios públicos**.

   {% warning %}

   **Aviso**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{%- endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Clique na aba "Executores".
1. Na lista de executores, clique no executor que você implantou na seção anterior.
1. Clique em **Editar**.
1. Clique em **Grupos de executores de {% octicon "gear" aria-label="The Gear icon" %}**.
1. Na lista de grupos de executores, clique no nome do grupo que você criou anteriormente.
1. Clique em **Salvar** para mover o executor para o grupo.
{%- elsif ghes < 3.4 or ghae %}
1. À direita do "Padrão", clique no número de executores no grupo para mostrar os executores.
1. Selecione o executor que você implantou.
1. À direita de "Grupos de executores", selecione a lista suspensa **Mover para o grupo** e clique no grupo que você criou anteriormente.
{%- endif %}

Você já implantou um executor auto-hospedado que pode executar trabalhos de {% data variables.product.prodname_actions %} dentro das organizações que você especificou.

## 4. Restringir ainda mais o acesso ao executor auto-hospedado

Opcionalmente, os proprietários da organização podem restringir ainda mais a política de acesso do grupo p executor que você criou. Por exemplo, um proprietário da organização pode permitir que apenas certos repositórios na organização usem o grupo de executores.

Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".

{% ifversion ghec or ghae or ghes > 3.2 %}

## 5. Dimensione automaticamente seus executores auto-hospedados

Opcionalmente, você pode criar ferramentas personalizadas para dimensionar automaticamente os executores auto-hospedados para {% ifversion ghec or ghae %}sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Por exemplo, suas ferramentas podem responder a eventos de webhook de {% data variables.product.product_location %} para dimensionar automaticamente um cluster de máquinas de executores. Para obter mais informações, consulte "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Próximas etapas

- Você pode monitorar executores auto-hospedados e resolver problemas comuns. Para obter mais informações, consulte "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."

- {% data variables.product.company_short %} recomenda que você revise considerações de segurança para máquinas de executores auto-hospedados. Para obter mais informações, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

- {% ifversion ghec %}Se você usar {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}, você{% elsif ghes or ghae %}Você{% endif %} poderá sincronizar manualmente os repositórios em {% data variables.product.prodname_dotcom_the_website %} que contém ações para a sua empresa em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}{% endif %}. Como alternativa, você pode permitir que os integrantes da sua empresa acessem automaticamente as ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte o seguinte.

   {%- ifversion ghes or ghae %}
   - "[Sincronizando as ações manualmente a partir de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Habilitando o acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"
   {%- elsif ghec %}
   - "Sincronizando ações manualmente a partir de {% data variables.product.prodname_dotcom_the_website %}" na documentação [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) ou [da documentação de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - "Habilitando o acesso automático a ações de {% data variables.product.prodname_dotcom_the_website %}, usando {% data variables.product.prodname_github_connect %}" na [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) ou [documentação de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)
   {%- endif %}

- Você pode personalizar o software disponível nas suas máquinas de executores auto-hospedados ou configurar seus executores para executar softwares similares a executores hospedados em {% data variables.product.company_short %}{% ifversion ghes or ghae %} disponíveis para os clientes que usam {% data variables.product.prodname_dotcom_the_website %}{% endif %}. O software que alimenta máquinas de executores para {% data variables.product.prodname_actions %} é de código aberto. Para obter mais informações, consulte [`ações/runner`](https://github.com/actions/runner) e reposit[orios de [`ações/ambientes virtuais`](https://github.com/actions/virtual-environments).

## Leia mais

- "[Configurando a aplicação de um executor auto-hospedado como um serviço](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Usando executores auto-hospedados em um fluxo de trabalho](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"
