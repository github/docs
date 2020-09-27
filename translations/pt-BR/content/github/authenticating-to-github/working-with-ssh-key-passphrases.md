---
title: Trabalhar com frase secreta da chave SSH
intro: Você pode proteger suas chaves SSH e configurar um agente de autenticação para que não precise redigitar a senha toda vez que usar as chaves SSH.
redirect_from:
  - /ssh-key-passphrases/
  - /working-with-key-passphrases/
  - /articles/working-with-ssh-key-passphrases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Com as chaves SSH, se alguém conseguir acessar seu computador, terá acesso a todos os sistemas que usam essas chaves. Para incluir uma camada extra de segurança, adicione uma frase secreta à sua chave SSH. Você pode usar `ssh-agent` para salvar sua frase secreta de forma segura e não precisar digitá-la novamente.

### Adicionar ou alterar frase secreta

É possível alterar a frase secreta de uma chave privada sem gerar novamente o par de chaves. Basta digitar o seguinte comando:

```shell
$ ssh-keygen -p
# Start the SSH key creation process
> Enter file in which the key is (/Users/<em>you</em>/.ssh/id_rsa): <em>[Hit enter]</em>
> Key has comment '/Users/<em>you</em>/.ssh/id_rsa'
> Enter new passphrase (empty for no passphrase): <em>[Digite a nova frase secreta]</em>
> Enter same passphrase again: <em>[Digite mais uma vez para garantir]</em>
> Your identification has been saved with the new passphrase.
```

Caso a sua chave já tenha uma frase secreta, você precisará digitá-la antes de poder alterar para uma nova frase secreta.

{% windows %}

### Abrir automaticamente o `ssh-agent` no Git para Windows

Você pode executar `ssh-agent` automaticamente ao abrir o bash ou o Git shell. Copie as linhas a seguir e cole-as no arquivo `~/.profile` ou `~/.bashrc` no Git Shell:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ !

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Se sua chave privada não for armazenada em um dos locais-padrão (como `~/.ssh/id_rsa`{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %} ou `~/. sh/id_dsa`{% endif %}), você deverá informar ao seu agente de autenticação SSH onde encontrá-la. Para adicionar a chave ao ssh-agent, digite `ssh-add ~/path/to/my_key`. Para obter mais informações, consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)".

{% tip %}

**Dica:** se você quiser que o `ssh-agent` esqueça sua chave depois de algum tempo, configure-o para isso executando `ssh-add -t <seconds>`.

{% endtip %}

Agora, quando você executar o Git Bash pela primeira vez, sua frase secreta será solicitada:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

O processo do `ssh-agent` continuará sendo executado até você fazer logoff, desligar o computador ou interromper o processo.

{% endwindows %}

{% mac %}

### Salvar a frase secreta na keychain

No OS X Leopard até o OS X El Capitan, estes arquivos padrão de chave privada são processados de forma automática:

- *.ssh/id_rsa*{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
- *.ssh/id_dsa*{% endif %}
- *.ssh/identity*

Na primeira vez que você usar a chave, precisará digitar sua frase secreta. Se você optar por salvar a frase secreta com a keychain, não precisará digitá-la novamente.

Caso contrário, armazene a frase secreta na keychain quando adicionar a chave ao ssh-agent. Para obter mais informações, consulte "[Adicionar sua chave SSH ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)".

{% endmac %}

### Leia mais

- "[Sobre SSH](/articles/about-ssh)"
