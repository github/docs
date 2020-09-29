---
title: Conceitos principais para o GitHub Actions
shortTitle: Conceitos principais
intro: 'Abaixo há uma lista de termos comuns de {% data variables.product.prodname_actions %} que usamos em nossos sites e na documentação de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Ação

Tarefas individuais que você combina como etapas para criar um trabalho. As ações são o menor bloco de criação portátil de um fluxo de trabalho. Você pode criar as suas próprias ações, usar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %} e personalizar ações públicas. Para usar uma ação em um fluxo de trabalho, você deverá incluí-la como uma etapa.

### Artefato

Artefatos são os arquivos que surgem quando você compila e testa seu código. Por exemplo, os artefatos podem incluir arquivos binários ou de pacotes, resultados de testes, capturas de tela ou arquivos de log. Os artefatos são associados à execução do fluxo de trabalho em que foram criados e podem ser usados ou implementados por outro trabalho.

### Integração contínua (CI)

A prática de desenvolvimento de software de fazer frequentemente pequenas alterações de código em um repositório compartilhado. Com {% data variables.product.prodname_actions %}, você pode criar fluxos de trabalho personalizados de CI que automatizam a construção e o teste do seu código. Do seu repositório, é possível visualizar o status das alterações do código e os registros detalhados para cada ação no seu fluxo de trabalho. A CI economiza tempo dos desenvolvedores, fornecendo feedback imediato sobre as alterações nos códigos para detectar e resolver erros mais rapidamente.

### Implementação contínua (CD)

A implementação contínua tem por base a integração contínua. Quando um novo código é confirmado e é aprovado em seus testes de CI, o código é implementado automaticamente na produção. Com {% data variables.product.prodname_actions %}, você pode criar fluxos de trabalho de CD personalizados para implementar automaticamente seu código em qualquer nuvem, serviço auto-hospedado ou plataforma do seu repositório. A CD economiza tempo dos desenvolvedores automatizando o processo de implementação, além de implementar alterações de código estáveis e testadas mais rapidamente para seus clientes.

### Evento

Uma atividade específica que aciona a execução de um fluxo de trabalho. Por exemplo, uma atividade pode originar de {% data variables.product.prodname_dotcom %} quando alguém faz o push de um commit em um repositório ou quando são criados um problema ou um pull request. Também é possível configurar um fluxo de trabalho para ser executado quando um evento externo ocorre usando o webhook de envio do repositório.

### Executor hospedado em {% data variables.product.prodname_dotcom %}
{% data variables.product.prodname_dotcom %} hospeda executores do Linux, Windows e macOS. Os trabalhos são executados em uma nova instância de uma máquina virtual que inclui software pré-instalado usado comumente. {% data variables.product.prodname_dotcom %} realiza todas as atualizações e manutenção dos executores hospedados em {% data variables.product.prodname_dotcom %}. Você não pode personalizar a configuração de hardware dos executores hospedados no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

### Trabalho

Um conjunto de etapas que são executadas no mesmo executor. É possível definir as regras de dependência para o modo como as tarefas são executadas em um arquivo do fluxo de trabalho. Os trabalhos podem ser executados ao mesmo tempo e em paralelo ou executados em sequência, dependendo do status de um trabalho anterior. Por exemplo, um fluxo de trabalho pode ter dois trabalhos sequenciais que criam e testam códigos. em que o trabalho de teste depende do status do trabalho de criação. Se ocorrer uma falha no trabalho de criação, o trabalho de teste não será executado. Para os executores hospedados em {% data variables.product.prodname_dotcom %}, cada trabalho em um fluxo de trabalho é executado em uma nova instância de um ambiente virtual.

### Executor

Qualquer máquina com o aplicativo executor {% data variables.product.prodname_actions %} instalado. Você pode usar um executor hospedado por {% data variables.product.prodname_dotcom %} ou hospedar seu próprio executor. Um executor aguarda trabalhos disponíveis. Quando um executor escolhe um trabalho, ele executa as ações do trabalho e relata o progresso, os registros e os resultados finais para {% data variables.product.prodname_dotcom %}. Os executores executam um trabalho de cada vez. Para obter mais informações, consulte "[executor hospedado em {% data variables.product.prodname_dotcom %}](#github-hosted-runner)" e "[executor auto-hospedado](#self-hosted-runner)".

{% note %}

**Observação:** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### Executor auto-hospedado

Uma máquina que você gerencia e mantém com o aplicativo do executor auto-hospedado instalado. {% data reusables.github-actions.self-hosted-runner-description %} Para obter mais informações, consulte "[Hospedando seus próprios executores](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)".

### etapa

Uma etapa é uma tarefa individual que pode executar comandos ou ações. Um trabalho configura uma ou mais etapas. Cada etapa em um trabalho é executada no mesmo executor, o que permite que as ações no trabalho compartilhem informações usando o arquivo do sistema.

### Ambiente virtual

O ambiente virtual de um executor hospedado no {% data variables.product.prodname_dotcom %} inclui a configuração de hardware da máquina virtual, sistema operacional e software instalado. Para obter mais informações, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)".

### Fluxo de trabalho

Um processo automatizado configurável que você pode definir no seu repositório para criar, testar, empacotar, aprovar ou implementar qualquer projeto em {% data variables.product.prodname_dotcom %}. Os fluxos de trabalho são constituídos de um ou mais empregos e podem ser programados ou ativados por um evento.

### Arquivo do fluxo de trabalho

O arquivo YAML que define a configuração do fluxo de trabalho com, pelo menos, uma tarefa. Este arquivo vive na raiz do repositório {% data variables.product.prodname_dotcom %} no diretório `.github/workflows`.

### Execução do fluxo de trabalho

Uma instância do seu fluxo de trabalho executada quando ocorrem os eventos pré-configurados. Você pode ver os trabalhos, ações, registros e status para cada execução do fluxo de trabalho.
