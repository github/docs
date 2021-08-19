---
title: Configurar o Git para uso com delimitadores de linha
intro: 'Para evitar problemas com diffs, é possível configurar o Git para operar adequadamente com delimitadores de linhas.'
redirect_from:
  - /dealing-with-lineendings/
  - /line-endings/
  - /articles/dealing-with-line-endings/
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Toda vez que você pressionar <kbd>retornar</kbd> no seu teclado, você insere um caractere invisível denominado delimitador. Os diferentes sistemas operacionais gerenciam os delimitadores de formas diferentes.

Ao colaborar em projetos com Git e {% data variables.product.product_name %}, o Git pode produzir resultados inesperados se, por exemplo, você estiver trabalhando em uma máquina que use o Windows e o seu colaborador dizer uma mudança no OS X.

Você pode configurar o Git para gerenciar os delimitadores automaticamente para que você possa colaborar efetivamente com pessoas que usam diferentes sistemas operacionais.

### Configurações globais para delimitadores de linhas

O comando `git config core.autocrlf` é utilizado para alterar a forma como o Git trabalha com delimitadores de linhas. É um argumento único.

{% mac %}

No OS X, você simplesmente introduz `input` (entrada) na configuração. Por exemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for OS X
```

{% endmac %}

{% windows %}

No Windows, você simplesmente introduz `true` na configuração. Por exemplo:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

No Linux, você simplesmente introduz `input` (entrada) na configuração. Por exemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

### Configurações por repositórios

Opcionalmente, você pode configurar um arquivo de *.gitattributes* para gerenciar como Git lê os delimitadores em um repositório específico. Quando você fizer commit deste arquivo para um repositório, ele irá substituir a configuração `core.autocrlf` para todos os contribuidores de repositório. Isso garante um comportamento consistente para todos os usuários, independentemente das configurações e do ambiente Git.

O arquivo *.gitattributes* deve ser criado na raiz do repositório e, como qualquer outro arquivo, com commit.

Um arquivo *.gitattributes* se parece com uma tabela de duas colunas:

* À esquerda está o nome do arquivo para o Git fazer a correspondência.
* À direita está a configuração do delimitador de linha que o Git deve usar para esses arquivos.

#### Exemplo

Segue aqui um exemplo de arquivo *.gitattributes*. Você pode usá-lo como um modelo para os seus repositórios:

```
# Defina o comportamento padrão, caso as pessoas não tenham configurado o core.autocrlf.
* text=auto

# Declare explicitamente os arquivos de texto que você deseja que sempre sejam normalizados e convertidos 
# em delimitadores de linha nativos ao fazer checkout.
*.c text
*.h text

# Declare os arquivos que sempre terão delimitadores de linha CRLF ao fazer checkout.
*.sln text eol=crlf

# Indique todos os arquivos que são verdadeiramente binários e que não devem ser modificados.
*.png binary
*.jpg binary
```

Você notará que arquivos são correspondentes,`*.c`, `*.sln`, `*.png`—, separados por um espaço uma determinada configuração —`text`, `text eol=crlf`, `binary`. Iremos analisar algumas possíveis configurações abaixo.

- `text=auto` o Git irá gerenciar os arquivos da maneira que considerar melhor. Essa é uma boa opção padrão.

- `text eol=crlf` O Git sempre converterá delimitadores em `CRLF` no checkout. Você deve usar isso para arquivos que devem manter os delimitadores `CRLF`, até mesmo no OSX ou Linux.

- `text eol=lf` O Git sempre converterá os delimitadores em `LF` no checkout. Você deve usar isso para arquivos que devem manter os delimitadores LF, mesmo no Windows.

- `binary` o Git entenderá que os arquivos especificados não são texto e não deve tentar alterá-los. A configuração `binary` (binário) também é um pseudônimo para `-text -diff`.

### Atualizar um repositório após alterar delimitadores de linha

Ao definir a opção `core.autocrlf` ou fazer o commit de um arquivo do tipo*.gitattributes*, você pode descobrir que o Git relata alterações em arquivos que você não modificou. O Git mudou os delimitadores para corresponder à sua nova configuração.

Para garantir que todos os delimitadores no repositório correspondam à sua nova configuração, faça backup de seus arquivos com o Git, exclua todos os arquivos no repositório (exceto os do diretório `.git`) e, em seguida, restaure os arquivos de uma só vez.

1. Salva seus arquivos atuais no Git, assim seu trabalho não será perdido.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Adiciona todos os seus arquivos alterados novamente e normaliza os delimitadores de linha.
  ```shell
  $ git add --renormalize .
  ```
3. Mostra os arquivos regravados e normalizados.
  ```shell
  $ git status
  ```
4. Faz commit das alterações em seu repositório.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

### Leia mais

- [Personalizar o Git - atributos do Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) no livro Pro Git
- [git-config](https://git-scm.com/docs/git-config) nas páginas do manual do Git
- [Primeiros passos - Configuração inicial do Git](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) no livro Pro Git
- [Atenção para o final da sua linha ](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) de [Tim Clem](https://github.com/tclem)
