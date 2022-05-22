---
title: Ignorar arquivos
redirect_from:
  - /git-ignore/
  - /ignore-files/
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
intro: 'Você pode configurar o Git para ignorar arquivos dos quais você não deseja fazer o check-in para {% data variables.product.product_name %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### Configurar arquivos ignorados para um único repositório

Você pode criar um arquivo *.gitignore* arquivo no diretório-raiz do seu repositório para dizer ao Git quais arquivos e diretórios devem ser ignorados ao fazer um commit. Para compartilhar as regras de ignorar com outros usuários que clonarem o repositório, faça o commit do arquivo *.gitignore* no seu repositório.

O GitHub mantém uma lista oficial de arquivos *.gitignore* recomendados para muitos sistemas operacionais populares, ambientes e linguagens no repositório público `github/gitignore`. É possível usar gitignore.io para criar um arquivo *.gitignore* para seu sistema operacional, linguagem de programação ou Ambiente de Desenvolvimento Integrado (IDE, Integrated Development Environment). Para obter mais informações, consulte "[github/gitignore](https://github.com/github/gitignore)" e o site "[gitignore.io](https://www.gitignore.io/)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue para o local do seu repositório do Git.
3. Crie um arquivo de *.gitignore* para o seu repositório.
   ```shell
   $ touch .gitignore
  ```

Por obter um exemplo do arquivo *.gitignore*, consulte "[Algumas configurações comuns do .gitignore](https://gist.github.com/octocat/9257657)" no repositório do Octocat.

Se você deseja ignorar um arquivo que já foi ingressado, você deve cancelar o rastreamento do arquivo antes de adicionar uma regra para ignorá-lo. No seu terminal, deixe de rastrear o arquivo.

```shell
$ git rm --cached <em>FILENAME</em>
```

### Configurar arquivos ignorados para todos os repositórios no seu computador

Você também pode criar um arquivo global *.gitignore* para definir uma lista de regras para ignorar arquivos em cada repositório do Git no seu computador. Por exemplo, você deverá criar o arquivo em *~/.gitignore_global* e adicionar algumas regras a ele.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configure o Git para usar o arquivo de exclusão *~/.gitignore_global* para todos os repositórios do Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

### Excluir arquivos locais sem criar um arquivo *.gitignore*

Se você não quiser criar um arquivo *.gitignore* para compartilhar com outras pessoas, é possível criar regras sem fazer o commit no repositório. Você pode usar essa técnica para arquivos que você gerou localmente e que não espera que outros usuários o façam, como arquivos criados pelo seu editor.

Use seu editor de textos preferido para abrir o arquivo *.git/info/exclude* dentro da raiz do repositório Git. Qualquer regra que você adicionar aqui não será verificada e ignorará arquivos somente em seu repositório local.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue para o local do seu repositório do Git.
3. Abra o arquivo *.git/info/exclude* com seu editor de texto preferido.

### Leia mais

* [Ignorar arquivos](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) no livro do Pro Git
* [.gitignore](https://git-scm.com/docs/gitignore) nas páginas de man para o Git
*
Uma coleção de *modelos úteis de *.gitignore*</a> no repositório github/gitignore</li> 
  
  * Site do [gitignore.io](https://www.gitignore.io/)</ul>
