---
title: Usar o Executor de tarefas do GitHub
intro: 'Você pode usar o Executor de tarefas do {% data variables.product.prodname_dotcom %} como sistema CI/CD que integra o Programa de acesso antecipado. Com o Executor de tarefas do {% data variables.product.product_name %}, é possível criar, testar e implantar seu código automaticamente a partir de um {% data variables.product.prodname_github_app %} com base em um arquivo de configuração no seu repositório.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/using-github-task-runner
versions:
  enterprise-server: '*'
---


{% note %}

**Observação:** antes de solicitar acesso ao Executor de tarefas do {% data variables.product.prodname_dotcom %}, você deve ler e aceitar as informações de Isenção e Limitação de Responsabilidade do Programa de acesso antecipado em `LINK DE ACESSO ANTECIPADO` para a {% data variables.product.product_location_enterprise %}. A documentação é abrangida por esses termos.

{% endnote %}

### Neste guia
- [Sobre o Executor de tarefas do {% data variables.product.prodname_dotcom %}](#about-github-task-runner)
- [Baixar o binário do Executor de tarefas do {% data variables.product.prodname_dotcom %}](#downloading-the-github-task-runner-binary)
- [Criar o Executor de tarefas do {% data variables.product.prodname_dotcom %} no appliance {% data variables.product.prodname_github_app %}](#creating-the-github-task-runner-github-app-on-your-appliance)
- [Instalar o aplicativo do Executor de tarefas do {% data variables.product.prodname_dotcom %}](#installing-the-github-task-runner-app)
- [Executar tarefas em um projeto](#running-tasks-for-a-project)

### Sobre o Executor de tarefas do {% data variables.product.prodname_dotcom %}

O Executor de tarefas do {% data variables.product.product_name %} é responsável por executar as tarefas organizadas em fila pelo Dispatcher, um serviço independente que lida com eventos webhooks push e organiza as tarefas em fila.

O Dispatcher já vem integrado à {% data variables.product.product_location_enterprise %}, mas o Executor de tarefas deve ser instalado manualmente no appliance do {% data variables.product.product_name %}. Para configurar o Executor de tarefas do {% data variables.product.product_name %}, você deve baixar o binário Runner, criar um {% data variables.product.prodname_github_app %} no seu appliance e configurar um servidor para interagir com o Dispatcher.

### Baixar o binário do Executor de tarefas do {% data variables.product.prodname_dotcom %}

Você deve ter o arquivo binário do aplicativo do Executor de tarefas do {% data variables.product.product_name %} na {% data variables.product.product_location_enterprise %}. Para baixar o binário para a plataforma de sua escolha, acesse `https://HOSTNAME/_dispatcher/downloads/` e substitua `hostname` pelo nome de host ou endereço IP da {% data variables.product.product_location_enterprise %}:

Use o comando `chmod` a fim de alterar as permissões para usar o Executor de tarefas do {% data variables.product.product_name %} na linha de comando.

{% mac %}

```shell
$ chmod +x task-runner_darwin_amd64
```

{% endmac %}

{% windows %}

```shell
$ move task-runner_windows_amd64 task-runner_windows_amd64.exe
```

{% endwindows %}

{% linux %}

```shell
$ chmod +x task-runner_linux_amd64
```

{% endlinux %}

### Criar o Executor de tarefas do {% data variables.product.prodname_dotcom %} no appliance {% data variables.product.prodname_github_app %}

1. Crie o arquivo de configuração `.task-runner.yaml` no seu diretório atual. Você pode usar o sinalizador `--config` para mover o arquivo para outro diretório.

```shell
configuração do executor de tarefas
```

2. Informe o nome do host da {% data variables.product.product_location_enterprise %}.
3. Digite um token de acesso pessoal, configurado com permissões especializadas. Para obter mais informações, consulte [Criar um token de acesso pessoal para a linha de comando](/articles/creating-a-personal-access-token-for-the-command-line/). Você pode usar as permissões de `user` se estiver criando o {% data variables.product.prodname_github_app %} para a sua conta, ou de `admin:org` se estiver criando o {% data variables.product.prodname_github_app %} para a organização.
4. Informe um nome para o {% data variables.product.prodname_github_app %}, algo como `Executor de tarefas do Octocat`.
5. Se estiver criando um {% data variables.product.prodname_github_app %} para a organização, informe o nome da organização.
6. Inicie o Executor de tarefas.

```shell
iniciar executor de tarefas
```

### Instalar o aplicativo do Executor de tarefas do {% data variables.product.prodname_dotcom %}

1. No canto superior direito de qualquer página, clique na sua foto de perfil e depois em Settings (Configurações).![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/images/userbar-account-settings.png)
2. Na barra lateral esquerda, clique em **Developer settings** (Configurações do desenvolvedor). ![Seção de configurações do desenvolvedor](/assets/images/help/images/developer_settings.png)
3. Na barra lateral esquerda, clique em **{% data variables.product.prodname_dotcom %} Apps** (Aplicativos do {% data variables.product.prodname_dotcom %}). ![Seção de aplicativos do GitHub](/assets/images/help/images/github_apps.png)
4. Clique no aplicativo que você deseja instalar.
5. Na barra lateral esquerda, clique em **Public page** (Página pública). ![Seção Página pública](/assets/images/help/images/public-page-tab.png)
6. Clique em **Install** (Instalar). ![Botão Instalar na página pública do aplicativo GitHub](/assets/images/help/images/install-runner-public-page.png)
7. Selecione **Only select repositories** (Somente repositórios selecionados) e digite os nomes dos repositórios em que você pretende instalar o Executor de tarefas do {% data variables.product.prodname_dotcom %}. ![Selecionar repositórios em que a instalação será feita](/assets/images/help/images/repositories-install-task-runner.png)
8. Clique em **Install** (Instalar). ![Botão Instalar na página de instalação do aplicativo GitHub](/assets/images/help/images/install-runner-installation-page.png)
9. Navegue para um repositório em que você tenha instalado o aplicativo.
10. Crie um arquivo de código `github/tasks.gf`, por exemplo:

  ```
task "minha tarefa" {
command = "comando-para-executar"
runnerType = "Shell"
env =  {
  FOO="bar",
  BAR="baz"
}
}
  ```
12. Abra uma pull request para adicionar o arquivo ao repositório.
13. Faça push das alerações para ver a execução das tarefas de CI.

### Executar tarefas em um projeto

Depois de criar a pull request, o {% data variables.product.prodname_github_app %} fará push do evento para o Dispatcher, onde a tarefa entrará em fila e será enviada para o Executor de tarefas do {% data variables.product.prodname_dotcom %}. Depois que o executor de tarefas do {% data variables.product.prodname_dotcom %} receber, executar as tarefas e fizer os relatórios, o Dispatcher atualizará a pull request com os resultados.

![Resultados de teste de CI da pull request](/assets/images/help/images/task-results.png)
