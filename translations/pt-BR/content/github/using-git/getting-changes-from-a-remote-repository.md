---
title: Obter alterações de um repositório remote
intro: É possível usar comandos Git comuns para acessar repositórios remotes.
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Esses comandos são muito úteis ao interagir com [um repositório remote](/articles/about-remote-repositories). `clone` e `fetch` baixam códigos remote de uma URL remota do repositório para seu computador, `merge` é usado para mesclar o trabalho de diferentes pessoas com o seu e `pull` é uma combinação de `fetch` e `merge`.

### Clonar um repositório

Para capturar uma cópia integral do repositório de outro usuário, use `git clone` desta forma:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clona um repositório em seu computador
```

Você pode escolher entre [várias URLs diferentes](/articles/which-remote-url-should-i-use) ao clonar um repositório. Quando estiver conectado em {% data variables.product.prodname_dotcom %}, esses URLs estarão disponíveis abaixo dos detalhes do repositório:

![Lista de URLs remotas](/assets/images/help/repository/remotes-url.png)

Ao executar `git clone`, as seguintes ações ocorrem:
- Um novo folder denominado `repo` é criado
- Ele é inicializado como um repositório Git
- Um remote nomeado `origin` (origem) é criado, apontando para o URL que você clonou
- Todos os arquivos e commits do repositório são baixados ali
- O branch-padrão foi desmarcado

Para cada branch `foo` no repositório remote, um branch de acompanhamento remoto correspondente `refs/remotes/origin/foo` é criado em seu repositório local. Normalmente, você pode abreviar os nomes dos branches de acompanhamento remoto para `origin/foo`.

### Fazer fetch de um repositório remote

Use `git fetch` para recuperar trabalhos novos feitos por outra pessoas. Fazer fetch de um repositório captura todos os branches de acompanhamento remoto e tags novos *sem* fazer merge dessas alterações em seus próprios branches.

Se você já tem um repositório local [com uma URL remota](/articles/adding-a-remote) configurado para o projeto desejado, é possível capturar todas as informações novas usando `git fetch *remotename*` no terminal:

```shell
$ git fetch <em>remotename</em>
# Faz fetch de atualizações feitas em um repositório remote
```

Por outro lado, também sempre é possível [adicionar um remote novo](/articles/adding-a-remote) e então fazer fetch.

### Fazer merge de alterações em seu branch local

O merge combina suas alterações locais com as alterações feitas por outras pessoas.

Geralmente, você faria um merge de um branch de acompanhamento remoto (por exemplo, um branch com fetch de um repositório remote) com seu branch local:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Faz merge de atualizações feitas online com seu trabalho local
```

### Fazer pull de alterações de um repositório remote

`git pull` é um atalho conveniente para executar `git fetch` e `git merge` no mesmo comando:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Captura atualizações online e faz merge delas em seu trabalho local
```

Você deve garantir que fez commit de seu trabalho local antes de executar o comando `pull`, pois `pull` faz um merge nas alterações recuperadas. Caso se depare com [um conflito de merge](/articles/resolving-a-merge-conflict-using-the-command-line) que não consegue resolver, ou se decidir interromper o merge, é possível usar `git merge --abort` para o branch voltar onde estava antes de você fazer o pull.

### Leia mais

- ["Trabalhar com remotos" do livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% if currentVersion == "free-pro-team@latest" %}
- "[Solucionar problemas de conectividade](/articles/troubleshooting-connectivity-problems)"{% endif %}
