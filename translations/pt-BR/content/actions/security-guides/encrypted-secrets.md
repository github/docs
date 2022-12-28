---
title: Segredos criptografados
intro: 'Segredos criptografados permitem que você armazene informações confidenciais na organização{% ifversion fpt or ghes or ghec %}, repositório ou ambientes de repositórios{% else %} ou repositório{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162796'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os segredos encriptados

Os segredos são variáveis de ambiente criptografadas que você cria em uma organização, repositório ou ambiente de repositório. Os segredos que você cria estão disponíveis para utilização nos fluxos de trabalho em {% data variables.product.prodname_actions %}. O {% data variables.product.prodname_dotcom %} usa uma [caixa lacrada libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para ajudar a garantir que os segredos sejam criptografados antes de chegarem ao {% data variables.product.prodname_dotcom %} e permaneçam criptografados até você os usar em um fluxo de trabalho.

{% data reusables.actions.secrets-org-level-overview %}

Para segredos armazenados no nível do ambiente, você pode habilitar os revisores necessários para controlar o acesso aos segredos. Um trabalho de fluxo de trabalho não pode acessar segredos de ambiente até que a aprovação seja concedida por aprovadores necessários.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### Nomear os seus segredos

{% data reusables.codespaces.secrets-naming %}

  Por exemplo, um segredo criado no nível de ambiente deve ter um nome exclusivo nesse ambiente, um segredo criado no nível do repositório deve ter um nome exclusivo nesse repositório, e um segredo criado no nível da organização deve ter um nome exclusivo nesse nível.

  {% data reusables.codespaces.secret-precedence %} Da mesma forma, se uma organização, repositório e ambiente tiverem um mesmo nome, o segredo do nível de ambiente terá prioridade.

Para ajudar a garantir que {% data variables.product.prodname_dotcom %} remova o seu segredo dos registros, evite usar dados estruturados como valores dos segredos. Por exemplo, evite criar segredos que contêm JSON ou blobs do Git.

### Acessar os seus segredos

Para disponibilizar um segredo para uma ação, você deve configurá-lo como uma entrada ou variável de ambiente no arquivo do fluxo de trabalho. Revise o arquivo README da ação para saber quais entradas e variáveis de ambientes a ação exige. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

Você pode usar e ler segredos encriptados em um arquivo de fluxo de trabalho se tiver permissão para editar o arquivo. Para obter mais informações, confira "[Permissões de acesso do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)".

{% data reusables.actions.secrets-redaction-warning %}

Os segredos da organização e do repositório são lidos quando uma execução de fluxo de trabalho é enfileirada e os segredos de ambiente são lidos quando um trabalho que faz referência ao ambiente é iniciado.

Você também pode gerenciar segredos usando o API REST. Para obter mais informações, confira "[Segredos](/rest/reference/actions#secrets)".

### Permissões limitadas de credenciais

Ao gerar credenciais, recomendamos que você conceda as permissões mínimas possíveis. Por exemplo, em vez de usar credenciais pessoais, use [chaves de implantação](/developers/overview/managing-deploy-keys#deploy-keys) ou uma conta de serviço. Considere conceder permissões somente leitura se isso o necessário e limite o acesso tanto quanto possível. Ao gerar um {% data variables.product.pat_v1 %}, selecione o menor número de escopos necessários.{% ifversion pat-v2 %} Ao gerar um {% data variables.product.pat_v2 %}, selecione o acesso mínimo ao repositório necessário.{% endif %}

{% note %}

**Observação:** você pode usar a API REST para gerenciar segredos. Para obter mais informações, confira "[API de segredos do {% data variables.product.prodname_actions %}](/rest/reference/actions#secrets)".

{% endnote %}

## Criar segredos encriptados para um repositório

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. Clique em **Novo segredo de repositório**.
1. Digite um nome para o segredo na caixa de entrada **Nome**.
1. Insira o valor para o seu segredo.
1. Clique em **Adicionar segredo**.

Se o seu repositório tiver segredos de ambiente ou puder acessar segredos da organização principal, esses segredos também serão listados nesta página.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para adicionar um segredo do repositório, use o subcomando `gh secret set`. Substitua `secret-name` pelo nome do segredo.

```shell
gh secret set SECRET_NAME
```

A CLI solicitará que você digite o valor de um segredo. Como alternativa, você pode ler o valor do segredo a partir de um arquivo.

```shell
gh secret set SECRET_NAME < secret.txt
```

Para listar todos os segredos do repositório, use o subcomando `gh secret list`.

{% endcli %}

## Criar segredos criptografados para um ambiente

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Clique no ambiente ao qual você deseja adicionar um segredo.
2. Em **Segredos do ambiente**, clique em **Adicionar segredo**.
3. Digite um nome para o segredo na caixa de entrada **Nome**.
4. Insira o valor para o seu segredo.
5. Clique em **Adicionar segredo**.

{% endwebui %}

{% cli %}

Para adicionar um segredo a um ambiente, use o subcomando `gh secret set` com o sinalizador `--env` ou `-e` seguido do nome do ambiente.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

Para listar todos os segredos de um ambiente, use o subcomando `gh secret list` com o sinalizador `--env` ou `-e` seguido do nome do ambiente.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Criar segredos encriptados para uma organização

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Clique em **Novo segredo da organização**.
1. Digite um nome para o segredo na caixa de entrada **Nome**.
1. Insira o **Valor** do segredo.
1. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
1. Clique em **Adicionar segredo**.

{% endwebui %}

{% cli %}

{% note %}

**Observação:** por padrão, a {% data variables.product.prodname_cli %} é autenticada com os escopos `repo` e `read:org`. Para gerenciar os segredos da organização, você também precisa autorizar o escopo `admin:org`.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

Para adicionar um segredo a uma organização, use o subcomando `gh secret set` com o sinalizador `--org` ou `-o` seguido do nome da organização.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

Por padrão, o segredo só está disponível para repositórios privados. Para especificar que o segredo deve estar disponível para todos os repositórios na organização, use o sinalizador `--visibility` ou `-v`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

Para especificar que o segredo deve estar disponível para repositórios selecionados na organização, use o sinalizador `--repos` ou `-r`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

Para listar todos os segredos de uma organização, use o subcomando `gh secret list` com o sinalizador `--org` ou `-o` seguido do nome da organização.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Rever o acesso para os segredos do nível da organização

Você pode verificar quais políticas de acesso são aplicadas a um segredo na sua organização.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. A lista de segredos inclui quaisquer permissões e políticas configuradas. Por exemplo: ![lista de segredos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para obter mais detalhes sobre as permissões configuradas para cada segredo, clique em **Atualizar**.

## Usar segredos criptografados em um fluxo de trabalho

{% note %}

**Observações:**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* Os segredos não são passados automaticamente para fluxos de trabalho reutilizáveis. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)".

{% endif %}

{% endnote %}

Para fornecer uma ação com um segredo como uma entrada ou uma variável de ambiente, use o contexto `secrets` para acessar os segredos criados no seu repositório. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts)" e "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

Não é possível referenciar segredos diretamente em condicionais `if:`. Em vez disso, considere definir segredos como variáveis de ambiente no nível de trabalho e, em seguida, fazer referência às variáveis de ambiente para executar etapas condicionalmente no trabalho. Para obter mais informações, confira "[Disponibilidade de contexto](/actions/learn-github-actions/contexts#context-availability)" e [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Se um segredo não for definido, o valor retornado de uma expressão que referencia o segredo (como {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} no exemplo) será uma cadeia de caracteres vazia.

Evite a transmissão de segredos entre processos da linha de comando sempre que possível. Os processos de linha de comando podem estar visíveis para outros usuários (por meio do comando `ps`) ou ser capturados por [eventos de auditoria de segurança](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Para ajudar a proteger os segredos, considere o uso de variáveis de ambiente, `STDIN` ou outros mecanismos compatíveis com o processo de destino.

Se você passar segredos dentro de uma linha de comando, inclua-os dentro das regras de aspas corretas. Muitas vezes, os segredos contêm caracteres especiais que não intencionalmente podem afetar o seu shell. Para escapar desses caracteres especiais, use aspas com suas variáveis de ambiente. Por exemplo:

### Exemplo de uso do Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### Exemplo de uso do PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Exemplo de uso do Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## Limites para segredos

Você pode armazenar até 1.000 segredos da organização, 100 segredos de repositório e 100 segredos de ambiente.

Um fluxo de trabalho criado em um repositório pode acessar o seguinte número de segredos:

* Todos os 100 segredos do repositório.
* Se o repositório tiver acesso a mais de 100 segredos da organização, o fluxo de trabalho só poderá usar os primeiros 100 segredos da organização (ordem alfabética por nome de segredo).
* Todos os 100 segredos de ambiente.

Os segredos são limitados a 64 kB. Para armazenar segredos maiores, confira a solução alternativa "[Como armazenar segredos grandes](#storing-large-secrets)" abaixo.

### Como armazenar segredos grandes

Para usar segredos com mais de 64 KB, você pode usar uma solução alternativa para armazenar segredos criptografados no repositório e salvar a frase secreta de descriptografia como um segredo no {% data variables.product.prodname_dotcom %}. Por exemplo, você pode usar `gpg` para criptografar um arquivo contendo o segredo localmente antes de fazer check-in do arquivo criptografado no repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira a "[Página do manual do GPG](https://www.gnupg.org/gph/de/manual/r1023.html)".

{% warning %}

**Aviso**: tenha cuidado para que os segredos não sejam impressos quando o fluxo de trabalho for executado. Quando usar essa alternativa, o {% data variables.product.prodname_dotcom %} não eliminará segredos que estão impressos nos logs.

{% endwarning %}

1. Execute o comando a seguir no terminal para criptografar o arquivo que contém o segredo usando `gpg` e o algoritmo de criptografia AES256. Neste exemplo, `my_secret.json` é o arquivo que contém o segredo.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. Você receberá a solicitação para inserir a frase secreta. Guarde a frase secreta, pois você precisará criar um novo segredo no {% data variables.product.prodname_dotcom %} que usa a frase secreta como valor.

1. Criar um novo segredo que contém a frase secreta. Por exemplo, crie um segredo com o nome `LARGE_SECRET_PASSPHRASE` e defina o valor do segredo como a frase secreta usada na etapa acima.

1. Copie o arquivo criptografado para um caminho no repositório e faça commit. Neste exemplo, o arquivo criptografado é `my_secret.json.gpg`.

   {% warning %}

   **Aviso**: copie o arquivo criptografado `my_secret.json.gpg` que termina com a extensão de arquivo `.gpg` e **não** o arquivo não criptografado `my_secret.json`.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. Crie um script do shell no repositório para descriptografar o arquivo de segredo. Neste exemplo, o script se chama `decrypt_secret.sh`.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Confirme que o shell script é executável antes de colocá-lo no repositório.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. No fluxo de trabalho do {% data variables.product.prodname_actions %}, use um `step` para chamar o script do shell e descriptografar o segredo. Para ter uma cópia do repositório no ambiente em que o fluxo de trabalho é executado, você precisará usar a ação [`actions/checkout`](https://github.com/actions/checkout). Referencie o script do shell usando o comando `run` relativo à raiz do repositório.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Armazenar Blobs binários de Base64 como segredos

Você pode usar a codificação de Base64 para armazenar pequenos blobs binários como segredos. Em seguida, você pode fazer referência ao segredo no seu fluxo de trabalho e decodificá-lo para usar no executor. Para obter os limites de tamanho, confira ["Limites para segredos"](/actions/security-guides/encrypted-secrets#limits-for-secrets).

{% note %}

**Observação**: observe que o Base64 converte apenas binário em texto e não substitui a criptografia real.

{% endnote %}

1. Use `base64` para codificar seu arquivo em uma cadeia de caracteres Base64. Por exemplo:

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Crie um segredo que contenha a string de Base64. Por exemplo:

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. Para acessar a cadeia de caracteres Base64 por meio do executor, encaminhe o segredo para `base64 --decode`.  Por exemplo: 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
