---
title: Sobre usar o Visual Studio Code com o GitHub Classroom
shortTitle: Sobre o uso do Visual Studio Code
intro: 'Você pode configurar {% data variables.product.prodname_vscode %} como o editor preferido para as atividades em {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Sobre o {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} é um editor de código fonte leve mas poderoso que é executado em seu computador e está disponível para Windows, macOS e Linux. Com a extensão do [GitHub Classroom para {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), os alunos podem facilmente navegar, editar, enviar, colaborar e testar suas atividades no Classroom. Para obter mais informações sobre IDEs e {% data variables.product.prodname_classroom %}, consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### Editor da escolha do seu aluno
A integração do GitHub Classroom com {% data variables.product.prodname_vscode_shortname %} oferece aos alunos um pacote de extensão que contém:

1. [Extensão GitHub Classroom](https://aka.ms/classroom-vscode-ext) com abstrações personalizadas que facilitam o início da navegação dos alunos.
2. A [Extensão do Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) foi integrada a uma visualização do aluno para facilitar o acesso a assistentes de ensino e colegas de classe para ajuda e colaboração.
3. A [Extensão do GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) permite que os alunos vejam comentários de seus instrutores no editor.

### Como iniciar a atividade em {% data variables.product.prodname_vscode_shortname %}
Ao criar uma atividade, {% data variables.product.prodname_vscode_shortname %} pode ser adicionado como editor preferido de uma atividade. Para obter mais informações consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Isto incluirá um selo "Abrir em {% data variables.product.prodname_vscode_shortname %}" em todos os repositórios de alunos. Este selo processa a instalação de {% data variables.product.prodname_vscode_shortname %}, o pacote de extensão de sala de aula e a abertura ao trabalho ativo com um clique.

{% note %}

**Observaçãp:** O aluno deve ter o Git instalado no seu computador para fazer push do código de {% data variables.product.prodname_vscode_shortname %} para o seu repositório. Ele não é instalado automaticamente ao clicar no botão **Abrir em {% data variables.product.prodname_vscode_shortname %}**. O aluno pode fazer o download do Git em [aqui](https://git-scm.com/downloads).

{% endnote %}

### Como usar o pacote de extensão GitHub Classroom
A extensão GitHub Classroom tem dois componentes principais: a visualização "salas de aula" e a visualização "atividade ativa".

Quando o aluno lança a extensão pela primeira vez, ele é automaticamente transferido para a aba Explorador em {% data variables.product.prodname_vscode_shortname %}, onde pode ver a exibição de "Atividade ativa" ao lado da exibição em árvore de arquivos no repositório.

![Visão da atividade ativa do GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

O aluno pode fazer push dos seus commits para a versão mais recente do controle remoto, ao clicar no botão **Sincronizar alterações**, exibido ao passar o mouse sobre a linha "atividade ativa". Isso abstrai o controle de origem com o Git, permitindo que instrutores ensinem o Git no seu próprio ritmo. A sincronização de alterações também aciona a execução de "testes", se um professor tiver configurado a avaliação automática para sua atividade.

O nó "grupo", em "atividade ativa", mostrará os integrantes de um grupo, se a tarefa for um projeto em grupo. Ele também mostrará os integrantes de administrador do repositório que podem ajudar quando um aluno estiver parado. Para colaborar no projeto, um aluno pode iniciar uma sessão de compartilhamento ao vivo com qualquer pessoa no nó do grupo, e ele irá compartilhar imediatamente todo o contexto do repositório com eles. Você pode aprender mais sobre o compartilhamento ao vivo e a colaboração [aqui](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Quando um aluno termina a tarefa, ele também pode navegar para ver outras atividades e salas de aula. Elas podem ser encontradas na aba do GitHub.
