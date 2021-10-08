---
title: Sobre usar o Visual Studio Code com o GitHub Classroom
shortTitle: Sobre o uso do Visual Studio Code
intro: 'Você pode configurar o Visual Studio Code como editor preferido para atividades em {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Sobre o Visual Studio Code

O Visual Studio Code é um editor de código leve, mas poderoso que é executado no seu computador e está disponível para Windows, macOS e Linux. Com a extensão [do GitHub Classroom para o Visual Studio Code](https://aka.ms/classroom-vscode-ext), os alunos podem facilmente navegar, editar, enviar, colaborar e testar suas atividades do Classroom. Para obter mais informações sobre IDEs e {% data variables.product.prodname_classroom %}, consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### Editor da escolha do seu aluno
A integração ao Visual Studio Code no GitHub oferece aos alunos um pacote de extensões que contém:

1. [Extensão GitHub Classroom](https://aka.ms/classroom-vscode-ext) com abstrações personalizadas que facilitam o início da navegação dos alunos.
2. A [Extensão do Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) foi integrada a uma visualização do aluno para facilitar o acesso a assistentes de ensino e colegas de classe para ajuda e colaboração.
3. A [Extensão do GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) permite que os alunos vejam comentários de seus instrutores no editor.

### Como iniciar a atividade no Visual Studio Code
Ao criar uma atividade, o Visual Studio Code pode ser adicionado como editor preferido de uma atividade. Para obter mais informações consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Isto incluirá um selo "Abrir no Visual Studio Code" em todos os repositórios de alunos. Este selo gerencia a instalação do Visual Studio Code, o pacote de extensões para o Classroom e a abertura da tarefa ativa com um clique.

{% note %}

**Observação:** O aluno deve ter o Git instalado no seu computador para enviar o código do Visual Studio Code para o seu repositório. Isso não é instalado automaticamente ao clicar no botão **Abrir no Visual Studio Code**. O aluno pode fazer o download do Git em [aqui](https://git-scm.com/downloads).

{% endnote %}

### Como usar o pacote de extensão GitHub Classroom
A extensão GitHub Classroom tem dois componentes principais: a visualização "salas de aula" e a visualização "atividade ativa".

Quando o aluno lança a extensão pela primeira vez, ele é direcionado automaticamente para a aba Explorador no Visual Studio Code, onde ele pode ver a visualização de "atividade ativa" ao lado da exibição em árvore de arquivos no repositório.

![Visão da atividade ativa do GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

O aluno pode fazer push dos seus commits para a versão mais recente do controle remoto, ao clicar no botão **Sincronizar alterações**, exibido ao passar o mouse sobre a linha "atividade ativa". Isso abstrai o controle de origem com o Git, permitindo que instrutores ensinem o Git no seu próprio ritmo. A sincronização de alterações também aciona a execução de "testes", se um professor tiver configurado a avaliação automática para sua atividade.

O nó "grupo", em "atividade ativa", mostrará os integrantes de um grupo, se a tarefa for um projeto em grupo. Ele também mostrará os integrantes de administrador do repositório que podem ajudar quando um aluno estiver parado. Para colaborar no projeto, um aluno pode iniciar uma sessão de compartilhamento ao vivo com qualquer pessoa no nó do grupo, e ele irá compartilhar imediatamente todo o contexto do repositório com eles. Você pode aprender mais sobre o compartilhamento ao vivo e a colaboração [aqui](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Quando um aluno termina a tarefa, ele também pode navegar para ver outras atividades e salas de aula. Elas podem ser encontradas na aba do GitHub.
