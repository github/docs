---
title: Sobre usar o Visual Studio Code com o GitHub Classroom
shortTitle: Sobre o uso do Visual Studio Code
intro: 'You can configure {% data variables.product.prodname_vscode %} as the preferred editor for assignments in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## Sobre o {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. With the [GitHub Classroom extension for {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), students can easily browse, edit, submit, collaborate, and test their Classroom Assignments. Para obter mais informações sobre IDEs e {% data variables.product.prodname_classroom %}, consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### Editor da escolha do seu aluno
The GitHub Classroom integration with {% data variables.product.prodname_vscode_shortname %} provides students with an extension pack which contains:

1. [Extensão GitHub Classroom](https://aka.ms/classroom-vscode-ext) com abstrações personalizadas que facilitam o início da navegação dos alunos.
2. A [Extensão do Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) foi integrada a uma visualização do aluno para facilitar o acesso a assistentes de ensino e colegas de classe para ajuda e colaboração.
3. A [Extensão do GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) permite que os alunos vejam comentários de seus instrutores no editor.

### How to launch the assignment in {% data variables.product.prodname_vscode_shortname %}
When creating an assignment, {% data variables.product.prodname_vscode_shortname %} can be added as the preferred editor for an assignment. Para obter mais informações consulte "[Integrar {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

This will include an "Open in {% data variables.product.prodname_vscode_shortname %}" badge in all student repositories. This badge handles installing {% data variables.product.prodname_vscode_shortname %}, the Classroom extension pack, and opening to the active assignment with one click.

{% note %}

**Note:** The student must have Git installed on their computer to push code from {% data variables.product.prodname_vscode_shortname %} to their repository. This is not automatically installed when clicking the **Open in {% data variables.product.prodname_vscode_shortname %}** button. O aluno pode fazer o download do Git em [aqui](https://git-scm.com/downloads).

{% endnote %}

### Como usar o pacote de extensão GitHub Classroom
A extensão GitHub Classroom tem dois componentes principais: a visualização "salas de aula" e a visualização "atividade ativa".

When the student launches the extension for the first time, they are automatically navigated to the Explorer tab in {% data variables.product.prodname_vscode_shortname %}, where they can see the "Active Assignment" view alongside the tree-view of files in the repository.

![Visão da atividade ativa do GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

O aluno pode fazer push dos seus commits para a versão mais recente do controle remoto, ao clicar no botão **Sincronizar alterações**, exibido ao passar o mouse sobre a linha "atividade ativa". Isso abstrai o controle de origem com o Git, permitindo que instrutores ensinem o Git no seu próprio ritmo. A sincronização de alterações também aciona a execução de "testes", se um professor tiver configurado a avaliação automática para sua atividade.

O nó "grupo", em "atividade ativa", mostrará os integrantes de um grupo, se a tarefa for um projeto em grupo. Ele também mostrará os integrantes de administrador do repositório que podem ajudar quando um aluno estiver parado. Para colaborar no projeto, um aluno pode iniciar uma sessão de compartilhamento ao vivo com qualquer pessoa no nó do grupo, e ele irá compartilhar imediatamente todo o contexto do repositório com eles. Você pode aprender mais sobre o compartilhamento ao vivo e a colaboração [aqui](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Quando um aluno termina a tarefa, ele também pode navegar para ver outras atividades e salas de aula. Elas podem ser encontradas na aba do GitHub.
