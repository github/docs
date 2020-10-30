---
title: Sobre pull requests
intro: 'As pull requests permitem que você informe outras pessoas sobre as alterações das quais você fez push para um branch em um repositório no {% data variables.product.product_name %}. Depois que uma pull request é aberta, você pode discutir e revisar as possíveis alterações com colaboradores e adicionar commits de acompanhamento antes que as alterações sofram merge no branch base.'
redirect_from:
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre pull requests

{% note %}

**Observação:** ao trabalhar com pull requests, lembre-se do seguinte:
* Se estiver trabalhando no [modo de repositório compartilhado](/articles/about-collaborative-development-models), é recomendável usar um branch de tópico para sua pull request. Embora você possa enviar pull requests de qualquer branch ou commit, com um branch de tópico, é possível fazer push de commits de acompanhamento caso seja preciso atualizar as alterações propostas.
* Ao fazer push de commits para uma pull request, não force o push. O push forçado pode corromper a pull request.

{% endnote %}

Após inicialização de uma pull request, você verá uma página de revisão que mostra uma visão geral de alto nível das alterações entre seu branch (o branch de comparação) e o branch base do repositório. É possível adicionar um resumo das alterações propostas, revisar as alterações feitas pelos commits, adicionar etiquetas, marcos e responsáveis, bem como fazer @menção a contribuidores individuais ou equipes. Para obter mais informações, consulte "[Criar uma pull request](/articles/creating-a-pull-request)".

Depois que tiver criado uma pull request, você poderá fazer push dos commits do branch de tópico para adicioná-los à sua pull request existente. Esses commits aparecerão em ordem cronológica na pull request e as alterações estarão visíveis na guia "Files chenged" (Arquivos alterados).

Outros contribuidores podem revisar as alterações propostas, adicionar comentários de revisão, contribuir com a discussão da pull request e, até mesmo, adicionar commits à pull request.

{% if currentVersion == "free-pro-team@latest" %}
Você pode ver as informações sobre o status da implantação atual do branch e atividades passadas de implantação na guia "Conversa". Para obter mais informações, consulte "[Exibir atividade de implantação para um repositório](/articles/viewing-deployment-activity-for-your-repository)".
{% endif %}

Quando estiver satisfeito com as alterações propostas, você poderá fazer merge da pull request. Se você está trabalhando em um modelo de repositório compartilhado, você cria uma pull request e, você ou outra pessoa, fará a mesclagem de suas alterações do seu branch de recurso no branch base que você especificar na sua pull request. Para obter mais informações, consulte "[Fazer merge de uma pull request](/articles/merging-a-pull-request)".

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Dicas:**
- Para alternar entre as opções de recolhimento e expansão de todos os comentários de revisão desatualizados em uma pull request, mantenha pressionados <span class="platform-mac"><kbd>opção</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> e clique em **Mostrar desatualizados** ou **Ocultar desatualizados**. Para ver mais atalhos, consulte "[Atalhos de teclado](/articles/keyboard-shortcuts)".
- Você pode combinar commits por squash ao fazer merge de uma pull request para obter uma exibição mais simplificada das alterações. Para obter mais informações, consulte "[Sobre merges da pull request](/articles/about-pull-request-merges)".

{% endtip %}

É possível acessar seu painel a fim de encontrar rapidamente links para pull requests recentemente atualizadas nas quais você está trabalhando ou nas quais está inscrito. Para obter mais informações, consulte "[Sobre seu painel pessoal](/articles/about-your-personal-dashboard)".

### Pull requests de rascunho

{% data reusables.gated-features.draft-prs %}

Ao criar uma pull request, você pode optar por criar uma que já está pronta para revisão ou uma pull request de rascunho. Não é possível fazer merge das pull requests, e os proprietários do código não são solicitados automaticamente a revisar pull requests de rascunho. Para obter mais informações sobre como criar uma pull request de rascunho, consulte "[Criar uma pull request](/articles/creating-a-pull-request)" e "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)".

{% data reusables.pull_requests.mark-ready-review %} Você pode converter uma pull request em rascunho a qualquer momento. Para obter mais informações, consulte "[Alterar o stage de uma pull request](/articles/changing-the-stage-of-a-pull-request)".

### Diferenças entre commits em páginas de comparação e pull request

As páginas de comparação e pull request usam métodos diferentes para calcular o diff para os arquivos alterados:

- As páginas de comparação mostram a diferença entre a ponta do ref principal e o ancestral comum atual (ou seja, a base de merge) do ref principal e de base.
- As páginas de pull request mostram a diferença entre a ponta do ref principal e o ancestral comum do ref principal e de base no momento em que o pull request foi criado. Consequentemente, a base de merge utilizada para a comparação pode ser diferente.

### Leia mais

- "[pull request](/articles/github-glossary/#pull-request)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Sobre branches](/articles/about-branches)"
- "[Comentar em uma pull request](/articles/commenting-on-a-pull-request)"
- "[Fazer merge de uma pull request](/articles/merging-a-pull-request)"
- "[Fechar uma pull request](/articles/closing-a-pull-request)"
- "[Excluir branches não utilizados](/articles/deleting-unused-branches)"
- "[Sobre merges de pull request](/articles/about-pull-request-merges)"
