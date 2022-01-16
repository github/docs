---
title: Usando as extensões de CLI do GitHub
intro: 'Aprenda a usar extensões personalizadas escritas por outros usuários de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## Sobre extensões de {% data variables.product.prodname_cli %}

{% note %}

**Observação:** As extensões fora de {% data variables.product.product_name %} e {% data variables.product.prodname_cli %} não são certificadas por {% data variables.product.product_name %} e são regidas por termos de serviço separados, política de privacidade e documentação de suporte. Para mitigar o risco ao usar extensões de terceiros, faça a auditoria do código-fonte da extensão antes de instalá-la ou atualizá-la.

{% endnote %}

{% data reusables.cli.cli-extensions %} Para obter mais informações sobre como criar extensões de {% data variables.product.prodname_cli %}, consulte "[Criando extensões de {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

As extensões são instaladas localmente e têm seu escopo definido para o usuário. Portanto, se você acessar {% data variables.product.prodname_cli %} de uma máquina diferente ou outro usuário acessar {% data variables.product.prodname_cli %} da mesma máquina, a extensão não estará disponível.

## Localizando extensões

Você pode encontrar extensões acessando [repositórios com o tópico](https://github.com/topics/gh-extension) de `gh-extension`.

## Instalando as extensões

Para instalar uma extensão, use o subcomando `extensions install`. Substitua o parâmetro `repo` pelo repositório da extensão. Você pode usar a URL completa, como `https://github.com/octocat/gh-whoami` ou apenas o proprietário e o repositório, como `octocat/gh-whoami`.

Se o proprietário e repositório forem usados, `gh` irá instalar a extensão usando o nome de host com o qual `gh` está atualmente autenticado. O formato completo da URL é útil ao instalar extensões de um host diferente. Por exemplo, os usuários em {% data variables.product.prodname_ghe_server %} devem usar a URL completa do repositório para instalar extensões de {% data variables.product.prodname_dotcom_the_website %} ou de qualquer outro host.

Para instalar uma extensão em desenvolvimento a partir do diretório atual, use `.` como o valor para o parâmetro `repo`.

```shell
gh extension install <em>repo</em>
```

Se você já tem uma extensão com o mesmo nome instalado, o comando irá falhar. Por exemplo, se você instalou `octocat/gh-whoami`, você deverá desinstalá-lo antes de instalar `hubot/gh-whoami`.

## Visualizando extensões instaladas

Para ver todas as extensões instaladas, use o subcomando `lista de extensões`. A saída também informará quais extensões possuem atualizações disponíveis.

```shell
gh extension list
```

## Atualizando extensões

Para atualizar uma extensão, use o subcomando `extensions upgrade`. Substitua o parâmetro `extensão` pelo nome da extensão.

```shell
gh extension upgrade <em>extension</em>
```

Para atualizar todas as extensões instaladas, use o sinalizador `--all`.

```shell
gh extension upgrade --all
```

## Desinstalando extensões

Para desinstalar uma extensão, use o subcomando `extensions remove`. Substitua o parâmetro `extensão` pelo nome da extensão.

```shell
gh extension remove <em>extension</em>
```
