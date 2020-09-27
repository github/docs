---
title: Usar ações do GitHub Marketplace
intro: 'Você pode pesquisar ações em {{ site.data.variables.product.prodname_marketplace }} para usar nos seus fluxos de trabalho.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Sobre ações em {{ site.data.variables.product.prodname_marketplace }}

{{ site.data.variables.product.prodname_marketplace }} é um local central para você encontrar ações criadas pela comunidade de {{ site.data.variables.product.prodname_dotcom }}.  Ações com um selo que indicam {{ site.data.variables.product.prodname_dotcom }} verificou o criador da ação como uma organização parceira.

{{ site.data.reusables.actions.enterprise-marketplace-actions }}

Você pode descobrir novas ações no editor do fluxo de trabalho em {{ site.data.variables.product.prodname_dotcom }} e na página [{{ site.data.variables.product.prodname_marketplace }}](https://github.com/marketplace/actions/).

Visualizar as ações diretamente no editor do fluxo de trabalho fornece um acesso rápido para todas as ações em {{ site.data.variables.product.prodname_marketplace }}. A página de ações {{ site.data.variables.product.prodname_marketplace }} oferece mais flexibilidade para filtrar ações por categoria.

### Procurar ações no editor do fluxo de trabalho

Você pode pesquisar ações diretamente no seu editor do seu fluxo de trabalho do repositório. Na barra lateral, você pode pesquisar uma ação específica, visualizar ações em destaque e pesquisar categorias em destaque. Você também pode visualizar o número de estrelas que uma ação recebeu da comunidade {{ site.data.variables.product.prodname_dotcom }}.

1. No seu repositório, pesquise o arquivo do fluxo de trabalho que você deseja editar.
1. No canto superior direito da vista do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor do fluxo de trabalho. ![Edite o botão do arquivo do fluxo de trabalho](/assets/images/help/repository/actions-edit-workflow-file.png)
1. No lado direito do editor, use a barra lateral {{ site.data.variables.product.prodname_marketplace }} para procurar ações. ![Barra lateral do fluxo de trabalho do Marketplace](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Procurar ações em {{ site.data.variables.product.prodname_marketplace }}

Você pode encontrar as mesmas ações na página de ações [{{ site.data.variables.product.prodname_marketplace }} ](https://github.com/marketplace/actions/). Na página {{ site.data.variables.product.prodname_marketplace }}, você tem mais flexibilidade para filtrar as ações por categoria e verificação.

### Adicionar uma ação ao seu fluxo de trabalho a partir do editor fluxo de trabalho

Uma página de lista de ações incluem a versão da ação e a sintaxe do fluxo de trabalho necessárias para usar a ação.

1. Navegue para a ação que você deseja usar no seu fluxo de trabalho.
1. Em "Instalação", clique em {% octicon "clippy" aria-label="The edit icon" %} para copiar a sintaxe do fluxo de trabalho. ![Visualizar lista de ação](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Cole a sintaxe como uma nova etapa no seu fluxo de trabalho. Para obter mais informações, consulte a sintaxe "[ para {{ site.data.variables.product.prodname_actions }}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."
1. Se a ação exigir que você forneça variáveis, defina-as no seu fluxo de trabalho. Para obter informações sobre quais variáveis uma ação pode exigir, consulte a lista completa da ação em {{ site.data.variables.product.prodname_marketplace }}.

{% if currentVersion == "free-pro-team@latest" %}

{{ site.data.reusables.dependabot.version-updates-for-actions }}

{% endif %}
