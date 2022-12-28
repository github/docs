---
title: Usando o GitHub Codespaces com o GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'Você pode usar os {% data variables.product.prodname_github_codespaces %} como o editor preferencial nas atribuições para dar aos alunos acesso a um ambiente do Visual Studio Code baseado em navegador com uma configuração de um clique.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189910'
---
## Sobre os {% data variables.product.prodname_github_codespaces %}

O {% data variables.product.prodname_github_codespaces %} é um ambiente de desenvolvimento instantâneo e baseado na nuvem que usa um contêiner para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns. O {% data variables.product.prodname_github_codespaces %} também é configurável, o que permite que você crie um ambiente de desenvolvimento personalizado que seja semelhante para todos os usuários do seu projeto. Para obter mais informações, confira "[Visão geral do {% data variables.product.prodname_github_codespaces %}](/codespaces/overview)".

Depois que {% data variables.product.prodname_github_codespaces %} estiver habilitado em uma organização ou empresa, os usuários poderão criar um codespace em qualquer branch ou commit em um repositório de uma organização ou empresa e começar a desenvolver usando recursos de computação baseados em nuvem. Você pode se conectar a um codespace por meio do navegador ou localmente usando o Visual Studio Code. 

{% data reusables.codespaces.links-to-get-started %}

Definir o {% data variables.product.prodname_github_codespaces %} como o editor preferencial para uma tarefa do GitHub Classroom é benéfico para alunos e professores. O {% data variables.product.prodname_github_codespaces %} é uma boa opção para estudantes que usam dispositivos emprestados ou sem acesso a uma configuração de IDE local, já que cada codespace é baseado em nuvem e não requer nenhuma configuração local. Os alunos podem iniciar um codespace para um repositório de tarefas no Visual Studio Code diretamente no navegador e começar a desenvolver imediatamente sem precisar de mais configurações.  

Para atribuições com ambientes de instalação complexos, os professores podem personalizar a configuração do contêiner de desenvolvimento nos codespaces de um repositório. Isso garante que, quando um aluno cria um codespace, ele é aberto automaticamente com o ambiente de desenvolvimento configurado pelo professor. Para obter mais informações sobre contêineres de desenvolvimento, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% note %}

**Observação**: os codespaces individuais serão excluídos automaticamente se forem parados e deixados sem uso por um período prolongado. Para obter mais informações, confira "[Como configurar a exclusão automática de codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Observação:** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## Sobre o Benefício educacional do {% data variables.product.prodname_codespaces %} para professores verificados

O benefício educacional do {% data variables.product.prodname_codespaces %} oferece aos professores verificados um subsídio mensal gratuito de {% data variables.product.prodname_github_codespaces %} horas a serem usadas no {% data variables.product.prodname_classroom %}. Estima-se que o subsídio gratuito seja suficiente para uma classe de 50 pessoas com 5 atribuições por mês, em um computador de 2 núcleos com 1 codespace armazenado por aluno.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Para se tornar um professor verificado, você precisa ser aprovado para um benefício de professor ou educador. Para obter mais informações, confira "[Candidatar-se para o {% data variables.product.prodname_global_campus %} como professor](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)." 

Depois de confirmar que você é um professor verificado, visite o [{% data variables.product.prodname_global_campus %} for Teachers](https://education.github.com/globalcampus/teacher) para atualizar a organização para o GitHub Team. Para obter mais informações, confira [Produtos do GitHub](/get-started/learning-about-github/githubs-products#github-team). 

Se você estiver qualificado para o benefício educacional do {% data variables.product.prodname_codespaces %}, ao habilitar o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_classroom %} para sua organização, o GitHub adicionará automaticamente uma política de Codespace para restringir os tipos de computadores de todos os codespaces da organização para computadores de dois núcleos. Isso ajudará você a aproveitar ao máximo do uso gratuito do {% data variables.product.prodname_github_codespaces %}. No entanto, você poderá alterar ou remover essas políticas nas configurações da sua organização. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

Quando o Benefício educacional do {% data variables.product.prodname_codespaces %} sair da versão beta, se sua organização exceder o subsídio gratuito para uso do {% data variables.product.prodname_github_codespaces %}, ela será cobrada pelo uso adicional. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

## Habilitando {% data variables.product.prodname_codespaces %} para a sua organização

O {% data variables.product.prodname_github_codespaces %} está disponível para uso com {% data variables.product.prodname_classroom %} em organizações que usam o {% data variables.product.prodname_team %}. Se você estiver qualificado para o benefício educacional do {% data variables.product.prodname_codespaces %}, deverá habilitar o {% data variables.product.prodname_github_codespaces %} por meio do {% data variables.product.prodname_classroom %}, em vez de habilitá-lo diretamente nas configurações da sua organização. Caso contrário, sua organização será cobrada diretamente por todo o uso do {% data variables.product.prodname_github_codespaces %}.

### Habilitar o Codespaces em uma organização ao criar uma sala de aula
{% data reusables.classroom.sign-into-github-classroom %}
1. Clique em **Nova sala de aula**.
   
  ![Botão "Nova sala de aula"](/assets/images/help/classroom/click-new-classroom-button.png)

1. Na lista de organizações, clique na organização que você gostaria de usar para a sua sala de aula. As organizações qualificadas para o {% data variables.product.prodname_github_codespaces %} terão uma observação mostrando que estão qualificadas. Opcionalmente, você pode criar uma nova organização. Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

  ![Escolher a organização para a sala de aula com qualificação para o codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. Na página "Nomear sua sala de aula", em "{% data variables.product.prodname_codespaces %} em sua sala de aula", clique em **Habilitar**. Observe que isso habilitará o {% data variables.product.prodname_github_codespaces %} para todos os repositórios e usuários da organização.

  ![Habilitar Codespaces para a organização na página "Configurar noções básicas da sala de aula"](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Quando estiver pronto para criar a sala de aula, clique em **Criar sala de aula**.

### Habilitar o Codespaces para uma organização por meio de uma sala de aula existente

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Em "{% data variables.product.prodname_github_codespaces %}", clique em **Habilitar**. Isso habilitará o {% data variables.product.prodname_github_codespaces %} para todos os repositórios e usuários da organização. Uma nova política do Codespace também será adicionada para restringir os tipos de computador para todos os codespaces da organização a computadores com dois núcleos. 
  
  ![Habilitar Codespaces para a organização em configurações de sala de aula existentes](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

Você também pode usar os mesmos métodos acima para desabilitar o {% data variables.product.prodname_github_codespaces %} em sua organização. Observe que isso desabilitará o {% data variables.product.prodname_github_codespaces %} de todos os usuários e repositórios da organização. 

## Configurando uma tarefa para usar o {% data variables.product.prodname_codespaces %}
Para disponibilizar o {% data variables.product.prodname_github_codespaces %} aos alunos para uma tarefa, você pode escolher o {% data variables.product.prodname_github_codespaces %} como o editor com suporte para a tarefa. Ao criar uma tarefa, na página "Adicionar seu código inicial e escolher seu IDE online opcional", em "Adicionar um editor com suporte", selecione o **{% data variables.product.prodname_github_codespaces %}** no menu suspenso. 

![Selecione Codespaces como editor com suporte para a tarefa](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Se você usar um repositório de modelos para uma tarefa, poderá definir um contêiner de desenvolvimento no repositório para personalizar as ferramentas e os runtimes disponíveis para os alunos quando eles iniciarem um codespace para trabalhar na tarefa. Se você não definir um contêiner de desenvolvimento, o {% data variables.product.prodname_github_codespaces %} usará uma configuração padrão, que contém muitas das ferramentas comuns que seus alunos podem precisar para desenvolvimento. Para obter mais informações sobre como definir um contêiner de desenvolvimento, veja "[Adicionar uma configuração de contêiner de desenvolvimento ao seu repositório](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

## Iniciando uma tarefa usando o {% data variables.product.prodname_github_codespaces %}

Quando um aluno abre uma tarefa, o arquivo README do repositório inclui a recomendação do professor sobre o IDE que deve ser usado para o trabalho.

![Captura de tela da observação do Codespaces no README para um repositório de tarefa para aluno](/assets/images/help/classroom/student-codespaces-readme-link.png)

Os alunos podem iniciar um codespace novo ou existente clicando no botão **Abrir no Codespace do GitHub** no README ou clicando no botão **{% octicon "code" aria-label="The code icon" %} Código** na página principal do repositório de tarefas e selecionando a guia **Codespaces**. Na guia **Codespaces**, você pode selecionar um codespace existente ou criar um. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

![Iniciar codespace novo no repositório de tarefa](/assets/images/help/classroom/student-launch-new-codespace.png)

Os professores podem exibir o codespace de uma tarefa de cada aluno na página de visão geral da tarefa. Você pode clicar no ícone Codespaces no lado direito de cada linha de aluno para iniciar o codespace. 

![Visão geral da tarefa para o professor com os codespaces do aluno](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

Quando você se conecta a um codespace por meio de um navegador, o salvamento automático é habilitado automaticamente. Se você quiser salvar as alterações no repositório, precisará fazer commit das alterações e efetuar push delas em um branch remoto. Se você deixar o codespace em execução sem interação por 30 minutos por padrão, o codespace atingirá o tempo limite e interromperá a execução. Seus dados serão preservados da última vez que você fez uma alteração. Para obter mais informações sobre o ciclo de vida de um codespace, confira "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle)".
