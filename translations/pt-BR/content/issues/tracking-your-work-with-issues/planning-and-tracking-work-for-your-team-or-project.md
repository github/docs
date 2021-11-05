---
title: Planejamento e rastreamento de trabalho para a sua equipe ou projeto
intro: 'O básico para usar as ferramentas de planejamento e rastreamento de {% data variables.product.prodname_dotcom %} para gerenciar o trabalho em uma equipe ou projeto.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
---

## Introdução
Você pode usar {% data variables.product.prodname_dotcom %} repositórios, problemas, quadros de projeto e outras ferramentas para planejar e acompanhar seu trabalho, caso esteja trabalhando em um projeto individual ou em uma equipe multifuncional.

Neste guia, você aprenderá a criar e configurar um repositório para colaborar com um grupo de pessoas, criar modelos de problema{% ifversion fpt or ghec %} e formulários{% endif %}, problemas abertos e usar listas de tarefas para dividir o trabalho e estabelecer um quadro de projetos para organizar e rastrear problemas.

## Criar um repositório
Ao iniciar um novo projeto, iniciativa, ou recurso, o primeiro passo é criar um repositório. Os repositórios contêm todos os arquivos do seu projeto e fornece a você um lugar para colaborar com outros e gerenciar seu trabalho. Para obter mais informações, consulte "[Criar um novo repositório](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)."

Você pode definir repositórios para diferentes finalidades com base nas suas necessidades. A seguir, estão alguns casos de uso:

- **Repositórios de produtos**: As organizações maiores que rastreiam seus trabalhos e metas em torno de produtos específicos podem ter um ou mais repositórios que contêm o código e outros arquivos. Esses repositórios também podem ser usados para documentação, relatórios sobre saúde do produto ou planos futuros para o produto.
- **Repositórios de projetos**: Você pode criar um repositório para um projeto em que está trabalhando ou para um projeto em que você está colaborando com os outros. Para uma organização que monitora o trabalho para iniciativas ou projetos de curta duração, como uma empresa de consultoria, é necessário apresentar um relatório sobre a saúde de um projeto e transferir as pessoas para diferentes projetos com base nas competências e nas necessidades. O código para o projeto está frequentemente contido em um único repositório.
- **Repositórios de equipes**: Para uma organização que agrupa pessoas em equipe e traz projetos para eles, como uma equipe de ferramentas de desenvolvimento, o código pode estar espalhado por muitos repositórios para o trabalho diferente que eles precisam rastrear. Neste caso, pode ser útil ter um repositório específico para a equipe, como um só lugar para acompanhar todo o trabalho em que a equipe está envolvida.
- **Repositórios pessoais**: Você pode criar um repositório pessoal para acompanhar todo o seu trabalho em um só lugar, planejar tarefas futuras, ou até adicionar observações ou informações que deseja salvar. Você também pode adicionar colaboradores se quiser compartilhar essas informações com outras pessoas.

Você pode criar repositórios múltiplos e separados se quiser diferentes permissões de acesso para o código-fonte e para problemas de rastreamento e discussões. Para obter mais informações, consulte "[Criar um repositório exclusivo de problemas](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)".

Para os seguintes exemplos neste guia, usaremos um repositório de exemplo denominado Project Octocat.
## Comunicando informações do repositório
Você pode criar um arquivo README.md para o repositório apresentar a sua equipe ou projeto e comunicar informações importantes sobre ele. Muitas vezes, um README é o primeiro item que um visitante ao repositório irá ver. Portanto, você também pode fornecer informações sobre como usuários ou contribuidores podem começar com o projeto e como entrar em contato com a equipe. Para obter mais informações, consulte "[Sobre README](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)".

Você também pode criar um arquivo CONTRIBUTING.md específico para conter diretrizes sobre como usuários ou contribuidores podem contribuir e interagir com a equipe ou projeto, como abrir um problema de correção de erros ou solicitar melhoria. Para obter mais informações, consulte "[Configurar diretrizes para contribuidores de repositório](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".
### Exemplo README
Podemos criar um README.md para introduzir nosso novo projeto, projeto do Octocat.

![Criando um exemplo README](/assets/images/help/issues/quickstart-creating-readme.png)
## Criando modelos de problemas

Você pode usar problemas para acompanhar os diferentes tipos de trabalho que sua equipe multifuncional ou seu projeto abrange, além de coletar informações daqueles que estão fora do seu projeto. A seguir, estão alguns casos comuns de utilização para os problemas.

- Monitoramento da versão: Você pode usar um problema para acompanhar o progresso de uma versão ou as etapas para concluir o dia de um lançamento.
- Grandes iniciativas: Você pode usar um problema para acompanhar o progresso em uma grande iniciativa ou projeto, que está vinculado a problemas menores.
- Solicitações de recursos: Sua equipe ou usuários podem criar problemas para solicitar uma melhoria para o seu produto ou projeto.
- Erros: Sua equipe ou usuários podem criar problemas para relatar um erro.

Dependendo do tipo de repositório e projeto em que você está trabalhando, você pode priorizar certos tipos de problemas em detrimento de outros. Após identificar os tipos de problemas mais comuns da sua equipe, você poderá criar modelos de problema {% ifversion fpt or ghec %}e formulários{% endif %} para o seu repositório. Os modelos {% ifversion fpt or ghec %}e formulários{% endif %} permitem que você crie uma lista padronizada de modelos que um contribuidor pode escolher ao abrirem um problema no seu repositório. Para obter mais informações, consulte "[Configurando modelos de problema para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)."

### Exemplo de modelo de problema
Abaixo, estamos criando um modelo de problema para relatar um erro no projeto Octocat.

![Criar exemplo de modelo de problema](/assets/images/help/issues/quickstart-creating-issue-template.png)

Agora que criamos o modelo de problemas de relatório de erro, você pode selecioná-lo ao criar um novo problema no projeto Octocat.

![Escolhendo o exemplo de modelo de problema](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Abrir problemas e usar listas de tarefas para monitorar o trabalho
Você pode organizar e acompanhar seu trabalho criando problemas. Para obter mais informações, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".
### Exemplo de problema
Aqui está um exemplo de uma questão criada para uma grande iniciativa, um trabalho front-end no projeto Octocat.

![Criando um exemplo problema de grande iniciativa](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### Exemplo da lista de tarefas

Você pode usar a lista de tarefas para dividir problemas maiores em tarefas menores e acompanhar problemas como parte de um objetivo maior. {% ifversion fpt or ghec %} A lista de tarefas tem funcionalidade adicional quando adicionada ao texto de um problema. Você pode ver o número de tarefas concluídas na parte superior do problema e se alguém fechar um problema vinculado na lista de tarefas, a caixa de seleção será automaticamente marcada como concluída.{% endif %} Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

Abaixo nós adicionamos uma lista de tarefas ao problema do projeto Octocat do nosso projeto, dividindo-a em problemas menores.

![Adicionar uma lista de tarefas ao exemplo do problema](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## Tomando decisões em equipe
Você pode usar problemas e discussões para comunicar-se e tomar decisões como equipe sobre melhorias planejadas ou prioridades para o seu projeto. Os problemas são úteis quando você os cria para discussão de detalhes específicos, como bug ou relatórios de desempenho, planejamento para o próximo trimestre ou design para uma nova iniciativa. As discussões são úteis para levantamento de hipóteses ou feedbacks abertos, fora da base de código e em todos os repositórios. Para obter mais informações, consulte "[Qual ferramenta de discussão devo usar?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)".

Como uma equipe, você também pode comunicar atualizações sobre tarefas do dia-a-dia dentro dos problemas, para que todos saibam o status do trabalho. Por exemplo, você pode criar um problema para um grande recurso em que várias pessoas estão trabalhando, e cada integrante da equipe pode adicionar atualizações com seu status ou perguntas em aberto nesse problema.
### Exemplo de problema com colaboradores de projetos
Aqui está um exemplo de colaboradores de projeto que fornecem uma atualização sobre o seu trabalho sobre o problema do projeto Octocat.

![Colaborando no exemplo do problema](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## Usando etiquetas para destacar objetivos e status do projeto
Você pode criar etiquetas para um repositório para categorizar problemas, pull requests e discussões. {% data variables.product.prodname_dotcom %} também fornece etiquetas padrão para cada novo repositório que você pode editar ou excluir. As etiquetas são úteis para manter o controle de objetivos, errps, tipos de trabalho e o status de um problema.

Para obter mais informações, consulte "[Criar uma etiqueta](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)".

Depois de criar uma etiqueta em um repositório, é possível aplicá-lo em qualquer problema, pull request ou discussão no repositório. Em seguida, você pode filtrar problemas e pull requests por etiqueta para encontrar todo o trabalho associado. Por exemplo, encontre todos os erros front-end em seu projeto, filtrando por problemas com as etiquetas de `front-end` e `erro`. Para obter mais informações, consulte "[Filtrando e pesquisando problemas e pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)".
### Exemplo de etiqueta
Abaixo está um exemplo de uma etiqueta `front-end` que criamos e adicionamos ao problema.

![Adicionando uma etiqueta a um exemplo do problema](/assets/images/help/issues/quickstart-add-label-to-issue.png)
## Adicionando problemas a um quadro de projeto
{% ifversion fpt or ghec %}Você pode usar projetos em {% data variables.product.prodname_dotcom %}, atualmente em beta público limitado, para planejar e acompanhar o trabalho da sua equipe. Um projeto é uma planilha personalizável integradas aos seus problemas e pull requests em {% data variables.product.prodname_dotcom %}, mantendo-se atualizada automaticamente com as informações em {% data variables.product.prodname_dotcom %}. Você pode personalizar o layout filtrando, organizando e agrupando seus problemas e PRs. Para começar com projetos, consulte "[Inicialização rápida para projetos (beta)](/issues/trying-out-the-new-projects-experience/quickstart). ".
### Exemplo de projeto (beta)
Here is the table layout of an example project, populated with the Project Octocat issues we have created.

![Projects (beta) table layout example](/assets/images/help/issues/quickstart-projects-table-view.png)

Podemos também visualizar o mesmo projeto como um quadro.

![Projects (beta) board layout example](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %}

Você também pode {% ifversion fpt or ghec %} usar os quadros de projeto existentes{% else %} usar{% endif %} no {% data variables.product.prodname_dotcom %} para planejar e acompanhar o trabalho da sua equipe. Os quadros de projeto são compostos por problemas, pull requests e observações que são categorizados como cartões em colunas de sua escolha. Você pode criar quadros de projetos para trabalho de funcionalidades, itinerários de alto nível ou até mesmo aprovar checklists. Para obter mais informações, consulte "[Sobre quadros de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".
### Exemplo de quadro de projeto
Abaixo, está um painel de projeto para o nosso exemplo de projeto Octocat com o problema que criamos, e os problemas menores nos quais separamos, foram adicionados.

![Exemplo de quadro de projeto](/assets/images/help/issues/quickstart-project-board.png)
## Próximas etapas

Agora você aprendeu sobre as ferramentas que {% data variables.product.prodname_dotcom %} oferece para planejamento e acompanhamento do seu trabalho e deu o seu primeiro passo para definir a sua equipe multifuncional ou repositório de projetos! Aqui estão alguns recursos úteis para personalizar ainda mais seu repositório e organizar seu trabalho.

- "[Sobre repositórios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)" para aprender mais sobre a criação de repositórios
- "[Monitorar o seu trabalho com problemas](/issues/tracking-your-work-with-issues)para aprender mais sobre diferentes formas de criar e gerenciar problemas
- "[Sobre problemas e modelos de pull request](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)para aprender mais sobre modelos de problemas
- "[Gerenciando etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" para aprender a criar, editar e excluir etiquetas
- "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)" para aprender mais sobre listas de tarefas
{% ifversion fpt or ghec %} - "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" para aprender mais sobre a experiência dos novos projetos, atualmente em beta público limitado
- "[Personalizando as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)" para aprender como personalizar visualizações para projetos, atualmente em beta público limitado{% endif %}
- "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)" para aprender como gerenciar os quadros de projetos
