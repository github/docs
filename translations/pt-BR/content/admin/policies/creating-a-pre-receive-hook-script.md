---
title: Criar um script de hook pre-receive
intro: Use os scripts de hooks pre-receive a fim de criar requisitos para aceitar ou rejeitar um push com base no conteúdo.
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
---

Veja exemplos de hooks pre-receive para o {% data variables.product.prodname_ghe_server %} no repositório  [`github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Gravar um script de hook pre-receive
Um script de hook pre-receive é executado em um ambiente de hook pre-receive no appliance do {% data variables.product.prodname_ghe_server %}. Ao criar um script de hook pre-receive, pense nas variáveis disponíveis de entrada, saída, status de saída e ambiente.

#### Entrada (stdin)
Após a ocorrência de um push e antes que qualquer ref seja atualizada no repositório remoto, o processo `git-receive-pack` invoca o script de hook pre-receive com a entrada padrão de uma linha por ref a ser atualizada:

`<old-value> SP <new-value> SP <ref-name> LF`

Essa string representa os seguintes argumentos:

| Argumento           | Descrição                                                                                                               |
|:------------------- |:----------------------------------------------------------------------------------------------------------------------- |
| `<old-value>` | Nome antigo do objeto armazenado na `ref`.<br> Quando você *cria* uma `ref`, o valor fica igual a 40 zeros.       |
| `<new-value>` | Nome novo do objeto a ser armazenado na `ref`.<br> Quando você *exclui* uma `ref`, o valor fica igual a 40 zeros. |
| `<ref-name>`  | Nome completo da `ref`.                                                                                                 |

Para obter mais informações sobre o `git-receive-pack`, consulte "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" na documentação do Git. Para obter mais informações sobre as `refs` consulte "[Referências do Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" em *Pro Git*.

#### Saída (stdout)

A saída do script (` stdout `) é passada de volta para o cliente. Portanto, qualquer instrução ` echo ` fica visível para o usuário na linha de comando ou na interface do usuário.

#### Status de saída (exit-status)

O `exit-status` de um script pre-receive determina se o push será aceito.

| Valor exit-status |          Ação          |
|:-----------------:|:----------------------:|
|         0         |  O push será aceito.   |
| Diferente de zero | O push será rejeitado. |

#### Variáveis de ambiente
Fora dos valores fornecidos para `stdin`, há variáveis adicionais disponíveis para o script de hook pre-receive em execução no {% data variables.product.prodname_ghe_server %}.

| Variável                              | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $GITHUB_USER_LOGIN                  | ID do usuário que criou a `ref`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| $GIT_DIR                              | Caminho do repositório remoto no appliance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| $GITHUB_USER_IP                     | Endereço IP do usuário que fez o push.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| $GITHUB_REPO_NAME                   | Nome do repositório que está sendo atualizado, no formato `proprietário`/`repositório`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| $GITHUB_PULL_REQUEST_AUTHOR_LOGIN | ID de usuário do autor de uma pull request aberta na sua instância.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| $GITHUB_REPO_PUBLIC                 | Valor booleano que representa um repositório público quando é `true` e representa um repositório privado quando é `false`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| $GITHUB_PUBLIC_KEY_FINGERPRINT      | Impressão digital da chave pública do usuário.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| $GITHUB_PULL_REQUEST_HEAD           | String no formato: `user:branch` para o HEAD do PR.<br> Exemplo: `octocat:fix-bug`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| $GITHUB_PULL_REQUEST_BASE           | Uma string no formato: `user:branch` para a BASE do PR.<br> Exemplo: `octocat:main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| $GITHUB_VIA                           | Método de criação da ref.<br> **Valores possíveis:**<br> - `api de desenvolvimento automerge` <br> - `edição blob` <br> - `api de merge branch` <br> - `botão de exclusão de página de branches` <br> - `api de criação de refs git` <br> - `api de exclusão de refs git` <br> - `api de atualização de refs git` <br> - `api de merge` <br> - `botão de exclusão de branch de pull request` <br> - `botão de desfazer branch de pull request` <br> - `api de merge de pull request` <br> - `botão de merge de pull request` <br> - `api de reverter pull request` <br> - `botão de exclusão de versões` <br> - `restauração de branch de ferramentas de equipe` <br> - `slumlord (#{sha})` |
| $GIT_PUSH_OPTION_COUNT              | Número de opções de push enviadas pelo cliente. Para obter mais informações sobre as opções de push, consulte "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" na documentação do Git.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| $GIT_PUSH_OPTION_N                  | Quando <em>N</em> for um número inteiro a partir de 0, esta variável vai conter a string de opção de push enviada pelo cliente. A primeira opção enviada é armazenada em GIT_PUSH_OPTION_0, a segunda é armazenada em GIT_PUSH_OPTION_1 e assim por diante. Para obter mais informações sobre as opções de push, consulte "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" na documentação do Git. |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| $GIT_USER_AGENT                     | A string do user-agent enviada pelo cliente que fez push das alterações. |{% endif %}

### Configurar permissões e fazer push de um hook pre-receive para o {% data variables.product.prodname_ghe_server %}

Um script de hook pre-receive está contido em um repositório no appliance do {% data variables.product.prodname_ghe_server %}. O administrador do site deve considerar as permissões do repositório e garantir que somente os usuários adequados tenham acesso.

Recomendamos consolidar os hooks em um único repositório. Se o repositório consolidado do hook for público, será possível usar `LEIAME.md` para explicar a execução das políticas. Além disso, é possível aceitar contribuições via pull request. No entanto, os hooks pre-receive só podem ser adicionados pelo branch padrão. Em fluxos de trabalho de teste, devem ser usados forks do repositório com a devida configuração.

1. Para usuários de Mac, certifique-se de que os scripts tenham estas permissões de execução:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  Para usuários de Windows, certifique-se de que os scripts tenham estas permissões de execução:

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. Faça commit e push para o seu repositório designado de hooks pre-receive na instância do {% data variables.product.prodname_ghe_server %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. [Crie o hook pre-receive](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) na instância do {% data variables.product.prodname_ghe_server %}.

### Testar scripts pre-receive no local
Antes de criar ou atualizar um script de hook pre-receive no appliance do {% data variables.product.prodname_ghe_server %}, você pode testá-lo no local. Uma forma de fazer isso é criar um ambiente Docker local para funcionar como repositório remoto que pode executar o hook pre-receive.

{% data reusables.linux.ensure-docker %}

2. Crie um arquivo de nome `Dockerfile.dev` contendo:

    ```
    FROM gliderlabs/alpine:3.3
    RUN \
      apk add --no-cache git openssh bash && \
      ssh-keygen -A && \
      sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
      adduser git -D -G root -h /home/git -s /bin/bash && \
      passwd -d git && \
      su git -c "mkdir /home/git/.ssh && \
      ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P '' && \
      mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && \
      mkdir /home/git/test.git && \
      git --bare init /home/git/test.git"

    VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
    WORKDIR /home/git

    CMD ["/usr/sbin/sshd", "-D"]
    ```

3. Crie um script pre-receive de teste chamado `always_reject.sh`. Este exemplo de script rejeitará todos os pushes, o que é importante para bloquear um repositório:

    ```
    #!/usr/bin/env bash

    echo "error: rejeitar todos os pushes"
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
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P ' && mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private rsa key pair.
   > Sua identificação foi salva em /home/git/.ssh/id_rsa.
   > Sua chave pública foi salva em /home/git/.ssh/id_rsa.pub.
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
   $ docker cp data:/home/git/.ssh/id_rsa .
  ```

10. Modifique o remote de um repositório de teste e faça push para o repo `test.git` no contêiner Docker. Este exemplo usa o `git@github.com:octocat/Hello-World.git`, mas você pode usar o repositório de sua preferência. Este exemplo pressupõe que a sua máquina local (127.0.0.1) está vinculando a porta 52311, mas você pode usar outro endereço IP se o docker estiver sendo executado em uma máquina remota.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_rsa" git push -u test master
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
