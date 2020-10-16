---
title: Segredos criptografados
intro: Os segredos encriptados permitem que você armazene informações confidenciais no seu repositório ou organização.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os segredos encriptados

Segredos são variáveis de ambiente encriptadas que você cria em um repositório ou organização. Os segredos que você cria estão disponíveis para utilização nos fluxos de trabalho em {% data variables.product.prodname_actions %}. O {% data variables.product.prodname_dotcom %} usa uma [caixa selada de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para ajudar a garantir que os segredos sejam criptografados antes de chegar ao {% data variables.product.prodname_dotcom %} e permanecer criptografados até que você os use em um fluxo de trabalho.

{% data reusables.github-actions.secrets-org-level-overview %}

#### Nomear os seus segredos

As regras a seguir aplicam-se aos nomes dos segredos:

* Os nomes dos segredos podem conter apenas caracteres alfanuméricos (`[a-z]`, `[A-Z]`, `[0-9]`) or sublinhado (`_`). Não são permitidos espaços.
* Os nomes dos segredos não devem começar com o prefixo `GITHUB_`.
* Os nomes dos segredos não devem começar com um número.
* Os nomes dos segredos devem ser únicos no nível em que são criados. Por exemplo, um segredo criado no nível da organização deve ter um nome único nesse nível, e um segredo criado no nível do repositório deve ter um nome único nesse repositório. Se o segredo do nível de uma organização tiver o mesmo nome do segredo do nível do repositório, o segredo do nível do repositório prevalecerá.

Para ajudar a garantir que {% data variables.product.prodname_dotcom %} remova o seu segredo dos registros, evite usar dados estruturados como valores dos segredos. Por exemplo, evite criar segredos que contêm JSON ou Git blobs.

#### Acessar os seus segredos

Para disponibilizar um segredo para uma ação, você deve configurá-lo como uma entrada ou variável de ambiente no arquivo do fluxo de trabalho. Revise o arquivo LEIAME da ação para saber quais entradas e variáveis de ambientes a ação exige. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

Você pode usar e ler segredos encriptados em um arquivo de fluxo de trabalho se tiver permissão para editar o arquivo. Para obter mais informações, consulte "[Permissões de acesso em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)."

{% warning %}

**Aviso:** {% data variables.product.prodname_dotcom %} elimina automaticamente os segredos impressos no registro, mas você deve evitar a impressão intencional de segredos no log.

{% endwarning %}

Você também pode gerenciar segredos usando o API REST. Para obter mais informações, consulte "[Segredos](/v3/actions/secrets/)".

#### Permissões limitadas de credenciais

Ao gerar credenciais, recomendamos que você conceda as permissões mínimas possíveis. Por exemplo, em vez de usar credenciais pessoais, use [chaves de implantação](/v3/guides/managing-deploy-keys/#deploy-keys) ou uma conta de serviço. Considere conceder permissões somente leitura se isso o necessário e limite o acesso tanto quanto possível. Ao gerar um token de acesso pessoal (PAT), selecione o menor escopo necessário.

### Criar segredos encriptados para um repositório

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Clique em **Adicionar novo segredo**.
1. Digite um nome para o seu segredo na caixa de entrada **Nome**.
1. Insira o valor para o seu segredo.
1. Clique em **Add secret** (Adicionar segredo).

Se o seu repositório puder acessar segredos a partir da organização-mãe, esses segredos também serão listados nesta página.

### Criar segredos encriptados para uma organização

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Clique em **Novo segredo**.
1. Digite um nome para o seu segredo na caixa de entrada **Nome**.
1. Insira o **Valor** para o seu segredo.
1. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
1. Clique em **Add secret** (Adicionar segredo).

### Rever o acesso para os segredos do nível da organização

Você pode verificar quais políticas de acesso são aplicadas a um segredo na sua organização.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. A lista de segredos inclui quaisquer permissões e políticas configuradas. Por exemplo: ![Lista de segredos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para obter mais detalhes sobre as permissões configuradas para cada segredo, clique em **Atualizar**.

### Usando segredos encriptados em um fluxo de trabalho

Com exceção do `GITHUB_TOKEN`, os segredos não são disponibilizados para o executor quando um fluxo de trabalho é acionado a partir de um repositório bifurcado.

Para fornecer uma ação com um segredo como uma entrada ou variável de ambiente, você pode usar o contexto de `segredos` para acessar os segredos que você criou no seu repositório. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)" e "[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Configura o segredo como uma entrada
      super_secret: ${{ secrets.SuperSecret }}
    env: # Ou como uma variável de ambiente
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

Evite a transmissão de segredos entre processos da linha de comando sempre que possível. Os processos da linha de comando podem ser visíveis para outros usuários (usando o comando `ps`) ou capturado por [eventos de auditoria de segurança](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Para ajudar a proteger os segredos, considere o uso de variáveis de ambiente, `STDIN`, ou outros mecanismos compatíveis com o processo de destino.

Se você passar segredos dentro de uma linha de comando, inclua-os dentro das regras de aspas corretas. Muitas vezes, os segredos contêm caracteres especiais que não intencionalmente podem afetar o seu shell. Para escapar desses caracteres especiais, use aspas com suas variáveis de ambiente. Por exemplo:

#### Exemplo de uso do Bash

{% raw %}
```yaml
etapas:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

#### Exemplo de uso do PowerShell

{% raw %}
```yaml
etapas:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

#### Exemplo de uso do Cmd.exe

{% raw %}
```yaml
etapas:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

### Limites para segredos

O seu fluxo de trabalho pode ter até 100 segredos. Os nomes das variáveis do ambiente de segredo devem ser únicas em um repositório.

Os segredos são limitados a 64 kB. Para usar segredos maiores que 64 kB, você pode armazenar segredos criptografados no seu repositório e salvar a frase secreta de descodificação como um segredo no {% data variables.product.prodname_dotcom %}. Por exemplo, você pode usar `gpg` para criptografar suas credenciais localmente antes de colocar o arquivo no repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte a "[página do manual gpg](https://www.gnupg.org/gph/de/manual/r1023.html)".

{% warning %}

**Aviso**: cuide para seus segredos não serem impressos quando a ação é executada. Quando usar essa alternativa, o {% data variables.product.prodname_dotcom %} não eliminará segredos que estão impressos nos logs.

{% endwarning %}

1. Execute o seguinte comando no seu terminal para criptografar o arquivo `my_secret.json` usando `gpg` e o algoritmo de cifragem AES256.

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. Você receberá a solicitação para inserir a frase secreta. Guarde a frase secreta, pois você precisará criar um novo segredo no {% data variables.product.prodname_dotcom %} que usa a frase secreta como valor.

1. Criar um novo segredo que contém a frase secreta. Por exemplo, crie um novo segredo com o nome `LARGE_SECRET_PASSPHRASE` e defina o valor do segredo para a frase secreta que você escolheu na etapa anterior.

1. Copie o arquivo criptografado no repositório e faça commit. Nesse exemplo, o arquivo criptografado é `my_secret.json.gpg`.

1. Crie um script shell para decifrar a senha. Salve o arquivo como `decrypt_secret.sh`.

  ``` shell
  #!/bin/sh

  # Decrypt the file
  mkdir $HOME/secrets
  # --lote para evitar o comando interativo
  # --sim para supor "sim" para as perguntas
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
  --output $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. Confirme que o shell script é executável antes de colocá-lo no repositório.

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. A partir de seu fluxo de trabalho, use `step` para chamar o shell script e decifrar o segredo. Para ter uma cópia do seu repositório no ambiente em que o seu fluxo de trabalho é executado, você deverá executar a ação [`actions/checkout`](https://github.com/actions/checkout). Faça referência ao shell script usando o comando `run` relativo à raiz do repositório.

{% raw %}
  ```yaml
  nome: Fluxos de trabalho com grandes segredos

  : empurrar

  empregos:
    meu trabalho:
      nome: My Job
      runs-on: ubuntu-latest
      steps:
        - usa: actions/checkout@v2
        - nome: Descriptografar grandes segredos
          executar: ./.github/scripts/decrypt_secret.sh
          env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # Este comando é apenas um exemplo para mostrar seu segredo sendo impresso
        # Certifique-se de remover quaisquer declarações impressas de seus segredos. O GitHub
        # não oculta segredos que usam essa alternativa.
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
