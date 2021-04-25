---
title: Gerenciar chaves de implantação
intro: Aprenda maneiras diferentes de gerenciar chaves SSH em seus servidores ao automatizar scripts de implantação e da melhor maneira para você.
redirect_from:
  - /guides/managing-deploy-keys/
  - /v3/guides/managing-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---


Você pode gerenciar chaves SSH em seus servidores ao automatizar scripts de implantação usando o encaminhamento do agente SSH, HTTPS com tokens do OAuth, chaves de implantação ou usuários de máquina.

### Encaminhamento de agente SSH

Em muitos casos, especialmente no início de um projeto, o encaminhamento de agentes SSH é o método mais rápido e simples de utilizar. O encaminhamento de agentes usa as mesmas chaves SSH que o seu computador de desenvolvimento local.

##### Prós

* Você não tem que gerar ou monitorar nenhuma chave nova.
* Não há gerenciamento de chaves; os usuários têm as mesmas permissões no servidor e localmente.
* Não há chaves armazenadas no servidor. Portanto, caso o servidor esteja comprometido, você não precisa buscar e remover as chaves comprometidas.

##### Contras

* Os usuários **devem** ingressar com SSH para implantar; os processos de implantação automatizados não podem ser usados.
* Pode ser problemático executar o encaminhamento de agente SSH para usuários do Windows.

##### Configuração

1. Ativar o encaminhamento do agente localmente. Consulte o [nosso guia sobre o encaminhamento de agentes SSH][ssh-agent-forwarding] para obter mais informações.
2. Defina seus scripts de implantação para usar o encaminhamento de agentes. Por exemplo, em um script bash, permitir o encaminhamento de agentes seria algo como isto: `ssh -A serverA 'bash -s' < deploy.sh`

### Clonagem de HTTPS com tokens do OAuth

Se você não quiser usar chaves SSH, você poderá usar [HTTPS com tokens do OAuth][git-automation].

##### Prós

* Qualquer pessoa com acesso ao servidor pode implantar o repositório.
* Os usuários não precisam alterar suas configurações SSH locais.
* Não são necessários vários tokens (um para cada usuário); um token por servidor é suficiente.
* Um token pode ser revogado a qualquer momento, transformando-o, basicamente, em uma senha de uso único.
{% if enterpriseServerVersions contains currentVersion %}
* Gerar novos tokens pode ser facilmente programado usando [a API do OAuth](/rest/reference/oauth-authorizations#create-a-new-authorization).
{% endif %}

##### Contras

* Você deve certificar-se de configurar seu token com os escopos de acesso corretos.
* Os Tokens são, basicamente, senhas e devem ser protegidos da mesma maneira.

##### Configuração

Consulte o [nosso guia sobre automação Git com tokens][git-automation].

### Chaves de implantação

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### Prós

* Qualquer pessoa com acesso ao repositório e servidor é capaz de implantar o projeto.
* Os usuários não precisam alterar suas configurações SSH locais.
* As chaves de implantação são somente leitura por padrão, mas você pode lhes conferir acesso de gravação ao adicioná-las a um repositório.

##### Contras

* As chaves de implementação só concedem acesso a um único repositório. Projetos mais complexos podem ter muitos repositórios para extrair para o mesmo servidor.
* De modo geral, as chaves de implantação não são protegidas por uma frase secreta, o que a chave facilmente acessível se o servidor estiver comprometido.

##### Configuração

1.
Execute o procedimento `ssh-keygen` no seu servidor e lembre-se do local onde você salva o par de chaves RSA público/privadas gerado.</li> 
   
   2 No canto superior direito de qualquer página do {% data variables.product.product_name %}, clique na sua foto do perfil e, em seguida, clique em **Seu perfil**. ![Navegação para o perfil](/assets/images/profile-page.png)
3 Na sua página de perfil, clique em **Repositórios** e, em seguida, clique no nome do seu repositório. ![Link dos repositórios](/assets/images/repos.png)
4 No seu repositório, clique em **Configurações**. ![Configurações do repositório](/assets/images/repo-settings.png)
5 Na barra lateral, clique em **Implantar Chaves** e, em seguida, clique em **Adicionar chave de implantação**. ![Link para adicionar chaves de implantação](/assets/images/add-deploy-key.png)
6 Forneça um título e cole na sua chave pública.  ![Página da chave implantação](/assets/images/deploy-key.png)
7 Selecione **Permitir acesso de gravação**, se você quiser que esta chave tenha acesso de gravação no repositório. Uma chave de implantação com acesso de gravação permite que uma implantação faça push no repositório.
8 Clique em **Adicionar chave**.</ol> 



##### Usar vários repositórios em um servidor

Se você usar vários repositórios em um servidor, você deverá gerar um par de chaves dedicado para cada um. Você não pode reutilizar uma chave de implantação para vários repositórios.

No arquivo de configuração do SSH do servidor (geralmente `~/.ssh/config`), adicione uma entrada de pseudônimo para cada repositório. Por exemplo:



```bash
Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```


* `Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}meu-GHE-hostname.com{% endif %}-repo-0` - Pseudônimo do repositório.
* `Nome de host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}meu-GHE-hostname.com{% endif %}` - Configura o nome de host a ser usado com o pseudônimo.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Atribui uma chave privada ao pseudônimo.

Em seguida, você pode usar o apelido do host para interagir com o repositório usando SSH, que usará a chave de deploy exclusiva atribuída a esse pseudônimo. Por exemplo:



```bash
$ git clone git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```




### Server-to-server tokens

If your server needs to access repositories across one or more organizations, you can use a GitHub App to define the access you need, and then generate _tightly-scoped_, _server-to-server_ tokens from that GitHub App. The server-to-server tokens can be scoped to single or multiple repositories, and can have fine-grained permissions. For example, you can generate a token with read-only access to a repository's contents. 

Since GitHub Apps are a first class actor on  {% data variables.product.product_name %}, the server-to-server tokens are decoupled from any GitHub user, which makes them comparable to "service tokens". Additionally, server-to-server tokens have dedicated rate limits that scale with the size of the organizations that they act upon. For more information, see [Rate limits for Github Apps](/developers/apps/rate-limits-for-github-apps).



##### Prós

- Tightly-scoped tokens with well-defined permission sets and expiration times (1 hour, or less if revoked manually using the API).
- Dedicated rate limits that grow with your organization.
- Decoupled from GitHub user identities, so they do not consume any licensed seats.
- Never granted a password, so cannot be directly signed in to.



##### Contras

- Additional setup is needed to create the GitHub App.
- Server-to-server tokens expire after 1 hour, and so need to be re-generated, typically on-demand using code.



##### Configuração

1. Determine if your GitHub App should be public or private. If your GitHub App will only act on repositories within your organization, you likely want it private.
1. Determine the permissions your GitHub App requires, such as read-only access to repository contents.
1. Create your GitHub App via your organization's settings page. For more information, see [Creating a GitHub App](/developers/apps/creating-a-github-app).
1. Note your GitHub App `id`.
1. Generate and download your GitHub App's private key, and store this safely. For more information, see [Generating a private key](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Install your GitHub App on the repositories it needs to act upon, optionally you may install the GitHub App on all repositories in your organization.
1. Identify the `installation_id` that represents the connection between your GitHub App and the organization repositories it can access.  Each GitHub App and organization pair have at most a single `installation_id`. You can identify this `installation_id` via [Get an organization installation for the authenticated app](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Generate a server-to-server token using the corresponding REST API endpoint, [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app), and [Authenticating as an installation](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Use this server-to-server token to interact with your repositories, either via the REST or GraphQL APIs, or via a Git client.



### Usuários máquina

Se o seu servidor precisar acessar vários repositórios, você poderá criar uma conta nova no {% data variables.product.product_name %} e anexar uma chave SSH que será usada exclusivamente para automação. Como esta conta do {% data variables.product.product_name %} não será usada por uma pessoa, ela será denominada _usuário máquina_. É possível adicionar o usuário máquina como [colaborador][collaborator] em um repositório pessoal (concedendo acesso de leitura e gravação), como [colaborador externo][outside-collaborator] em um repositório da organização (concedendo leitura, acesso gravação, ou administrador) ou como uma [equipe][team], com acesso aos repositórios que precisa automatizar (concedendo as permissões da equipe).

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Dica:** Nossos [termos de serviço][tos] afirmam que:



> *Contas registradas por "bots" ou outros métodos automatizados não são permitidas.*

Isto significa que você não pode automatizar a criação de contas. Mas se você desejar criar um único usuário máquina para automatizar tarefas como scripts de implantação em seu projeto ou organização, isso é muito legal.

{% endtip %}

{% endif %}



##### Prós

* Qualquer pessoa com acesso ao repositório e servidor é capaz de implantar o projeto.
* Nenhum usuário (humano) precisa alterar suas configurações de SSH locais.
* Não são necessárias várias chaves; o adequado é uma por servidor.



##### Contras

* Apenas organizações podem restringir os usuários máquina para acesso somente leitura. Os repositórios pessoais sempre concedem aos colaboradores acesso de leitura/gravação.
* Chaves dos usuário máquina, como chaves de implantação, geralmente não são protegidas por senha.



##### Configuração

1. [Execute o procedimento `ssh-keygen`][generating-ssh-keys] no seu servidor e anexe a chave pública à conta do usuário máquina.
2. Dê acesso à conta de usuário máquina aos repositórios que deseja automatizar. Você pode fazer isso adicionando a conta como [colaborador][collaborator], como [colaborador externo][outside-collaborator] ou como uma [equipe][team] em uma organização.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /articles/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
