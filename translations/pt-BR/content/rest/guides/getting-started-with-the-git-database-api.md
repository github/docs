---
title: Começar a usar a API do banco de dados do Git
intro: 'A API do banco de dados do Git dá acesso para ler e gravar objetos do Git sem processamento no seu banco de dados do Git no {% data variables.product.product_name %} e para listar e atualizar suas referências (cabeçalhos de branch e etiquetas).'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Visão Geral

Isso basicamente permite que você reimplemente uma série de funcionalidades do Git sobre nossa API, criando objetos sem processamento diretamente no banco de dados e atualizando referências de ramificações que você pode fazer tecnicamente sobre qualquer coisa que o Git possa fazer sem tê-lo instalado.

Funções da API do Banco de Dados do Git retornará um `409 Conflict` se o repositório do Git estiver vazio ou indisponível.  Um repositório indisponível normalmente significa que o {% data variables.product.product_name %} está no processo de criação do repositório. Para um repositório vazio, você pode usar o ponto de extremidade "[Criar ou atualizar o conteúdo do arquivo](/v3/repos/contents/#create-or-update-file-contents)" para criar conteúdo e inicializar o repositório para que você possa usar a API de banco de dados do Git. Entre em contato com {% data variables.contact.contact_support %} se esse status de resposta persistir.

![Visão geral do banco de dados Git](/assets/images/git-database-overview.png)

Para obter mais informações sobre a base de dados de objetos do Git, leia o capítulo [Internos do Git](http://git-scm.com/book/en/v1/Git-Internals) no livro Pro do Git.

Como exemplo, se você quisesse fazer commit de uma alteração em um arquivo no seu repositório, você:

* Obter o objeto do commit atual
* Recuperar a árvore para a qual ele aponta
* Recuperar o conteúdo do objeto do blob que a árvore tem para esse caminho específico do arquivo
* Alterar o conteúdo de alguma forma e postar um novo objeto do blob com esse novo conteúdo, obtendo, em troca, o SHA do blob
* Publicar um novo objeto da árvore com esse ponteiro do caminho de arquivo substituído pelo SHA do seu blob novo e obtendo, em troca, o SHA da árvore
* Criar um novo objeto de confirmação com o SHA do commit atual como o principal e o SHA da novo da árvore, obtendo, em troca, o SHA do commit
* Atualizar a referência do seu branch para apontar para o novo SHA do commit

Pode parecer complexo, mas, na verdade, é bem simples. Ao entender o modelo e ele oferece muitas coisas que você poderia fazer potencialmente com a API.

### Verificar a mesclabilidade de pull requests

{% warning %}

**Aviso!** Não dependa do uso do Git diretamente ou {% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference){% endif %}  para atualizações das referências de `merge` do Git, pois este conteúdo fica desatualizado sem aviso.

{% endwarning %}

Uma API consumível precisa solicitar explicitamente que um pull request crie um commit de merge de _teste_. Um commit de merge de _teste_ é criado quando você visualiza o pull request na interface do usuário e o botão "Merge" é exibido, ou quando [obtém](/v3/pulls/#get-a-pull-request), [cria](/v3/pulls/#create-a-pull-request), ou [edita](/v3/pulls/#update-a-pull-request) um pull request usando a API REST. Sem esta solicitação, as referências de `merge` do Git ficarão desatualizadas até a próxima vez que alguém visualizar o pull request.

Se você estiver usando métodos de sondagem que produzem referências obsoletas de `merge` do Git, o GitHub recomenda seguir as etapas a seguir para obter as últimas alterações do branch-base (geralmente `mestre`):

1. Receber o webhook do pull request.
2. Chame [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request) para iniciar um trabalho em segundo plano para criar o candidato de do commit do merge.
3. Faça a sondam do seu repositório usando [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request) para ver se o atributo `mesclável` é `verdadeiro` ou `falso`. Você pode usar o Git diretamente ou {% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}[`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference){% endif %} para atualizações para as referências de `merge` do Git depois de realizar as etapas anteriores.
