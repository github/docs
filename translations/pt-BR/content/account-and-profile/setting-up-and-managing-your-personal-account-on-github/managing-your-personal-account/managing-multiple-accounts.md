---
title: Gerenciando várias contas
intro: 'Se você usa uma estação de trabalho para contribuir com projetos para mais de uma conta em {% data variables.product.product_location %}, você pode modificar sua configuração do Git para simplificar o processo de contribuição.'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Gerenciar várias contas
---

## Sobre a gestão de múltiplas contas

Em alguns casos, é possível que você precise usar várias contas em {% data variables.product.product_location %}. Por exemplo, você pode ter uma conta pessoal para contribuições de código aberto, e seu empregador também pode criar e gerenciar uma conta de usuário para você dentro de uma empresa.

Você não pode usar seu {% data variables.product.prodname_managed_user %} para contribuir para projetos públicos em {% data variables.product.product_location %}, portanto, você deve contribuir para esses recursos usando a sua conta pessoal. Para obter mais informações, consulte "[Sobre  {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}{% endif %}

Se você quiser usar uma estação de trabalho para contribuir a partir de ambas as contas, você poderá simplificar a contribuição com o Git usando uma mistura de protocolos para acessar os dados do repositório ou usando credenciais em cada repositório.

{% warning %}

**Aviso**: Tenha cuidado quando você usar uma estação de trabalho para contribuir com duas contas separadas. A gestão de duas ou mais contas pode aumentar a possibilidade de fuga de código interno para o público.

{% endwarning %}

Se você não tiver de usar um {% data variables.product.prodname_managed_user %}, {% data variables.product.company_short %} recomenda que você use uma conta pessoal para todo seu trabalho em {% data variables.product.product_location %}. Com uma única conta pessoal, você pode contribuir para uma combinação de projetos pessoais, de código aberto ou projetos profissionais usando uma identidade. Outras pessoas podem convidar a conta para contribuir tanto em repositórios individuais quanto em repositórios pertencentes a uma organização, e a conta pode ser integrante de múltiplas organizações ou empresas.

## Contribuindo para duas contas usando HTTPS e SSH

Se você contribuir com duas contas de uma estação de trabalho, você poderá acessar repositórios usando um protocolo e credenciais diferentes para cada conta.

O Git pode usar o protocolo HTTPS ou SSH para acessar e atualizar os dados nos repositórios em {% data variables.product.product_location %}. O protocolo que você usa para clonar um repositório determina quais credenciais sua estação de trabalho usará para efetuar a autenticação quando você acessar o repositório. Com esta abordagem ao gerenciamento de contas, você armazena as credenciais para uma conta usar para conexões HTTPS e faz upload de uma chave SSH na outra conta para conexões SSH.

Você pode encontrar ambos URLs HTTPS ou SSH para clonar um repositório em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Clonar um repositório](/repositories/creating-and-managing-repositories/cloning-a-repository)".

Para obter mais informações sobre o uso de SSH para acessar repositórios no {% data variables.product.product_name %}, consulte "[Conectando ao {% data variables.product.prodname_dotcom %} com SSH](/authentication/connecting-to-github-with-ssh)".

## Contribuindo para várias contas usando HTTPS e PATs

Como alternativa, se você quiser usar o protocolo HTTPS para ambas as contas, você pode usar diferentes tokens de acesso pessoal (PAT) para cada conta, configurando o Git para armazenar credenciais diferentes para cada repositório.

{% mac %}

{% data reusables.git.open-terminal %}
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   - Se a saída for `osxkeychain`, você irá usar o keychain do macOS. Para limpar as credenciais, informe o seguinte comando.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %}
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Abra o Git Bash.
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   {% data reusables.git.clear-stored-gcm-credentials %}
   - Se a saída for `wincred`, você irá usar o Gerenciador de Credenciais do Windows. Para limpar as credenciais, informe o seguinte comando.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %}
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   {% data reusables.git.clear-stored-gcm-credentials %}
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endlinux %}

## Contribuindo para várias contas usando SSH e `GIT_SSH_COMMAND`

Se você quiser usar o protocolo SSH para ambas as contas, você poderá usar chaves SSH diferentes para cada conta. Para obter mais informações sobre como usar SSH, consulte "[Conectando a {% data variables.product.prodname_dotcom %} com SSH](/authentication/connecting-to-github-with-ssh)".

Para usar uma chave SSH diferente para diferentes repositórios que você clonar na sua estação de trabalho, você deve escrever uma função de wrapper do shell para operações do Git. A função deve executar as seguintes etapas.
1. Determine o nome completo do repositório com proprietário, usando um comando como `git config --get remote.origin.url`.
2. Escolha a chave SSH correta para autenticação.
3. Modifique `GIT_SSH_COMMAND` apropriadamente. Para obter mais informações sobre `GIT_SSH_COMMAND`, consulte [Variáveis de Ambiente](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) na documentação do Git.

Por exemplo, o comando a seguir define a variável de ambiente `GIT_SSH_COMMAND` para especificar um comando SSH que usa o arquivo de chave privada em **_PATH/TO/KEY/FILE_** para autenticação para clonar o repositório denominado **_OWNER_**/**_REPOSITORY_** em {% data variables.product.product_location %}.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
