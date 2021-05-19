---
title: Criar um script de hook pre-receive
intro: Use os scripts de hooks pre-receive a fim de criar requisitos para aceitar ou rejeitar um push com base no conteúdo.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---

Veja exemplos de hooks pre-receive para o {% data variables.product.prodname_ghe_server %} no repositório  [`github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Gravar um script de hook pre-receive
Um script de hook pre-receive é executado em um ambiente de hook pre-receive em {% data variables.product.product_location %}. Ao criar um script de hook pre-receive, considere a entrada, saída, estado de saída e variáveis de ambiente disponíveis.

#### Entrada (`stdin`)
Depois que um push ocorrer e antes que qualquer ref seja atualizado para o repositório remoto, o processo `git-receive-pack` em {% data variables.product.product_location %} irá invocar o script de do hook pre-receive. A entrada padrão para o script, `stdin`, é uma string que contém uma linha atualizar cada ref. Cada linha contém o nome antigo do objeto para ref, o novo nome do objeto para o ref e o nome completo do ref.

```
<old-value> SP <new-value> SP <ref-name> LF
```

Essa frase representa os argumentos a seguir.

| Argumento           | Descrição                                                                                         |
|:------------------- |:------------------------------------------------------------------------------------------------- |
| `<old-value>` | Nome de objeto antigo armazenado na ref.<br> Ao criar uma nova ref, o valor será 40 zeros.  |
| `<new-value>` | Novo nome de objeto a ser armazenado na ref.<br> Ao excluir uma ref, o valor será 40 zeros. |
| `<ref-name>`  | O nome completo da ref.                                                                           |

Para obter mais informações sobre `git-receive-pack`, consulte "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" na documentação do Git. Para obter mais informações sobre refs, consulte "[Referências do Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" no *Pro Git*.

#### Saída (`stdout`)

A saída padrão do script, `stdout`, é remetida de volta para o cliente. Qualquer `echo` será visível para o usuário na linha de comando ou na interface do usuário.

#### Status de saída

O status de saída de um script pre-receive determina se o push será aceito.

| Valor de status de saída | Ação                   |
|:------------------------ |:---------------------- |
| 0                        | O push será aceito.    |
| Diferente de zero        | O push será rejeitado. |

#### Variáveis de ambiente

Além da entrada padrão para o seu script do hook pre-receive, `stdin`, {% data variables.product.prodname_ghe_server %} disponibiliza as variáveis a seguir no ambiente Bash para a execução do seu script. Para obter mais informações sobre `stdin` para o seu script de hook de pre-receive, consulte "[Entrada (`stdin`)](#input-stdin)".

Diferentes variáveis de ambiente estão disponíveis para o seu script de hook pre-receive dependendo do que acionar o script.

- [Sempre disponível](#always-available)
- [Disponível para pushes a partir da interface web ou API](#available-for-pushes-from-the-web-interface-or-api)
- [Disponível para merge de pull request](#available-for-pull-request-merges)
- [Disponível para pushes que usam autenticação SSH](#available-for-pushes-using-ssh-authentication)

##### Sempre disponível

As seguintes variáveis estão sempre disponíveis no ambiente de do hook pre-receive.

| Variável                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                      | Valor de exemplo                                                   |
|:------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------ |
| <pre>$GIT_DIR</pre> | Caminho para o repositório remoto na instância                                                                                                                                                                                                                                                                                                                                                                                                 | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
| <pre>$GIT_PUSH_OPTION_COUNT</pre> | O número de opções de push enviadas pelo cliente com `--push-option`. Para obter mais informações, consulte "[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)" na documentação do Git.                                                                                                                                                                                                         | 1                                                                  |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | Quando _N_ for um número inteiro a partir de 0, esta variável vai conter a string de opção de push enviada pelo cliente. A primeira opção enviada é armazenada em `GIT_PUSH_OPTION_0`, a segunda opção enviada é armazenada em `GIT_PUSH_OPTION_1`, e assim por diante. Para obter mais informações sobre as opções de push, consulte "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" na documentação do Git. | abcd |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| <pre>$GIT_USER_AGENT</pre> | String de usuário-agente enviada pelo cliente Git que realizou push das alterações                                                                                                                                                                                                                                                                                                                                                             | git/2.0.0{% endif %}
| <pre>$GITHUB_REPO_NAME</pre> | Nome do repositório que está sendo atualizado no formato _NAME_/_OWNER_                                                                                                                                                                                                                                                                                                                                                                        | octo-org/hello-enterprise                                          |
| <pre>$GITHUB_REPO_PUBLIC</pre> | Booleano público, que representa se o repositório está sendo atualizado                                                                                                                                                                                                                                                                                                                                                                        | <ul><li>true: A visibilidade do repositório é pública</li><li>false: A visibilidade do repositório é privada ou interna</li></ul>                                          |
| <pre>$GITHUB_USER_IP</pre> | Endereço IP do cliente que iniciou o push                                                                                                                                                                                                                                                                                                                                                                                                      | 192.0.2.1                                                          |
| <pre>$GITHUB_USER_LOGIN</pre> | Nome de usuário para a conta que iniciou o push                                                                                                                                                                                                                                                                                                                                                                                                | octocat                                                            |

##### Disponível para pushes a partir da interface web ou API

A variável `$GITHUB_VIA` está disponível no ambiente de pre-receive quando a atualização de ref que aciona o hook por meio da interface da web ou da API para {% data variables.product.prodname_ghe_server %}. O valor descreve a ação que atualizou o ref.

| Valor                      | Ação                                                                                                                                                                      | Mais informações                                                                                                                                                                         |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>auto-merge deployment api</pre>  | Merge automático do branch base através de uma implantação criada com a API                                                                                               | "[Repositórios](/rest/reference/repos#create-a-deployment)" na documentação da API REST                                                                                                  |
| <pre>blob edit</pre> | Mudar para o conteúdo de um arquivo na interface web                                                                                                                      | "[Editar arquivos no repositório](/github/managing-files-in-a-repository/editing-files-in-your-repository)"                                                                              |
| <pre>branch merge api</pre> | Merge de um branch através da API                                                                                                                                         | "[Repositórios](/rest/reference/repos#merge-a-branch)" na documentação da API REST                                                                                                       |
| <pre>branches page delete button</pre> | Exclusão de um branch na interface web                                                                                                                                    | "[Criar e excluir branches dentro do seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)"      |
| <pre>git refs create api</pre> | Criação de um ref através da API                                                                                                                                          | "[Banco de dados Git](/rest/reference/git#create-a-reference)" na documentação da API REST                                                                                               |
| <pre>git refs delete api</pre> | Exclusão de uma ref através da API                                                                                                                                        | "[Banco de dados Git](/rest/reference/git#delete-a-reference)" na documentação da API REST                                                                                               |
| <pre>git refs update api</pre> | Atualização de um ref através da API                                                                                                                                      | "[Banco de dados Git](/rest/reference/git#update-a-reference)" na documentação da API REST                                                                                               |
| <pre>git repo contents api</pre> | Mudança no conteúdo de um arquivo através da API                                                                                                                          | "[Repositórios](/rest/reference/repos#create-or-update-file-contents)" na documentação da API REST                                                                                       |
| <pre>merge base into head</pre> | Atualizar o branch de tópico do branch de base quando o branch de base exigir verificações de status rigorosas (via **Atualizar branch** em um pull request, por exemplo) | "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)"                                                          |
| <pre>pull request branch delete button</pre> | Exclusão de um branch de tópico de um pull request na interface web                                                                                                       | "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)" |
| <pre>pull request branch undo button</pre> | Restauração de um branch de tópico de um pull request na interface web                                                                                                    | "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)"                |
| <pre>pull request merge api</pre> | Merge de um pull request através da API                                                                                                                                   | "[Pulls](/rest/reference/pulls#merge-a-pull-request)" na documentação da API REST                                                                                                        |
| <pre>pull request merge button</pre> | Merge de um pull request na interface web                                                                                                                                 | "[Fazer merge de uma pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)"                                         |
| <pre>pull request revert button</pre> | Reverter um pull request                                                                                                                                                  | "[Reverter uma pull request](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)"                                                                              |
| <pre>releases delete button</pre> | Exclusão de uma versão                                                                                                                                                    | "[Gerenciar versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)"                                                         |
| <pre>stafftools branch restore</pre> | Restauração de um branch do painel de administração do site                                                                                                               | "[Painel de administração do site](/admin/configuration/site-admin-dashboard#repositories)"                                                                                              |
| <pre>tag create api</pre> | Criação de uma tag através da API                                                                                                                                         | "[Banco de dados Git](/rest/reference/git#create-a-tag-object)" na documentação da API REST                                                                                              |
| <pre>slumlord (#<em>SHA</em>)</pre> | Commit por meio do Subversion                                                                                                                                             | "[Compatibilidade para clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)"                                   |
| <pre>web branch create</pre> | Criação de um branch através da interface web                                                                                                                             | "[Criar e excluir branches dentro do seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)"      |

##### Disponível para merge de pull request

As variáveis a seguir estão disponíveis no ambiente de hook pre-receive quando o push que aciona o hook é um push devido ao merge de um pull request.

| Variável                   | Descrição                                                                | Valor de exemplo             |
|:-------------------------- |:------------------------------------------------------------------------ |:---------------------------- |
| <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Nome de usuário da conta que criou o pull request                        | octocat                      |
| <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | O nome do branch de tópico do pull request, no formato `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
| <pre>$GITHUB_PULL_REQUEST_BASE</pre> | O nome do branch de base do pull request no formato `USERNAME:BRANCH`    | octocat:main                 |

##### Disponível para pushes que usam autenticação SSH

| Variável                   | Descrição                                                                       | Valor de exemplo                                |
|:-------------------------- |:------------------------------------------------------------------------------- |:----------------------------------------------- |
| <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | A impressão digital da chave pública para o usuário que fez push das alterações | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

### Configurar permissões e fazer push de um hook pre-receive para o {% data variables.product.prodname_ghe_server %}

Um script de hook pre-receive está contido em um repositório em {% data variables.product.product_location %}. O administrador do site deve considerar as permissões do repositório e garantir que somente os usuários adequados tenham acesso.

Recomendamos consolidar os hooks em um único repositório. Se o repositório consolidado do hook for público, será possível usar `README.md` para explicar a execução das políticas. Além disso, é possível aceitar contribuições via pull request. No entanto, os hooks pre-receive só podem ser adicionados pelo branch padrão. Em fluxos de trabalho de teste, devem ser usados forks do repositório com a devida configuração.

1. Para usuários de Mac, certifique-se de que os scripts tenham estas permissões de execução:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   Para usuários de Windows, certifique-se de que os scripts tenham estas permissões de execução:

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. Faça o commit e push para o repositório designado para os hooks pre-receive em {% data variables.product.product_location %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. [Crie o hook pre-receive](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) na instância do {% data variables.product.prodname_ghe_server %}.

### Testar scripts pre-receive no local
Você pode testar um script do hook pre-receive localmente antes de criá-lo ou atualizá-lo em {% data variables.product.product_location %}. Uma forma de fazer isso é criar um ambiente Docker local para funcionar como repositório remoto que pode executar o hook pre-receive.

{% data reusables.linux.ensure-docker %}

2. Crie um arquivo de nome `Dockerfile.dev` contendo:

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. Crie um script pre-receive de teste chamado `always_reject.sh`. Este exemplo de script rejeitará todos os pushes, o que é importante para bloquear um repositório:

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. Certifique-se de que os scripts `always_reject.sh` têm permissões de execução:

   ```shell
   $ chmod +x always_reject.sh
   ```

5. No diretório contendo `Dockerfile.dev`, crie uma imagem:

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....saída truncada....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. Execute um contêiner de dados que contenha uma chave SSH gerada:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. Copie o hook pre-receive de teste `always_reject.sh` no contêiner de dados:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. Execute um contêiner de aplicativo que execute `sshd` e o hook. Anote o ID do contêiner:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. Copie a chave SSH gerada do contêiner de dados para a máquina local:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Modifique o remote de um repositório de teste e faça push para o repo `test.git` no contêiner Docker. Este exemplo usa o `git@github.com:octocat/Hello-World.git`, mas você pode usar o repositório da sua preferência. Este exemplo pressupõe que a sua máquina local (127.0.0.1) está vinculando a porta 52311, mas você pode usar outro endereço IP se o docker estiver sendo executado em uma máquina remota.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Contando objetos: 7, concluído.
   > Delta compression using up to 4 threads.
   > Comprimindo objetos: 100% (3/3), concluído.
   > Gravando objetos: 100% (7/7), 700 bytes | 0 bytes/s, concluído.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] master -> master (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Observe que o push foi rejeitado após a execução do hook pre-receive e o eco da saída do script.

### Leia mais
 - "[Personalizar o Git - Um exemplo da aplicação da política do Git](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)" no *site do Pro Git*
