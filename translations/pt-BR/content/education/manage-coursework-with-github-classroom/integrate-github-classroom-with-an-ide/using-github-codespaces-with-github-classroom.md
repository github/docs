---
title: Usando GitHub Codespaces com GitHub Classroom
shortTitle: Usando os codespaces com GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'Você pode usar {% data variables.product.prodname_github_codespaces %} como editor preferido nas suas atividades para dar aos alunos acesso a um ambiente do Visual Studio Code baseado no navegador com configuração em um clique.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
---

## Sobre {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} é um ambiente de desenvolvimento instantâneo e baseado na nuvem que usa um recipiente para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns. {% data variables.product.prodname_codespaces %} também pode ser configurado, o que permite que você crie um ambiente de desenvolvimento personalizado que é o mesmo para todos os usuários do seu projeto. Para obter mais informações, consulte "[Visão geral de {% data variables.product.prodname_github_codespaces %}](/codespaces/overview)".

Uma vez que {% data variables.product.prodname_codespaces %} é habilitado em uma organização ou empresa, os usuários podem criar um codespace a partir de qualquer branch ou commit em uma organização ou repositório corporativo e começar a desenvolver recursos de computação baseados na nuvem. Você pode se conectar a um codespace do navegador ou localmente usando o Visual Studio Code. {% data reusables.codespaces.links-to-get-started %}

Definir {% data variables.product.prodname_codespaces %} como editor preferido para uma atividade nas atividades do GitHub Classroom é vantajoso para alunos e professores. {% data variables.product.prodname_codespaces %} é uma boa opção para alunos que usam dispositivos emprestados ou sem acesso a uma configuração local do IDE, já que cada codespace é baseado na nuvem e não exige nenhuma configuração local. Os alunos podem lançar um codespace para um repositório de atividade no Visual Studio Code diretamente em seu navegador e começar a desenvolver imediatamente, sem precisar de qualquer configuração adicional.

Para atividades com ambientes de configuração complexos, os professores podem personalizar a configuração do contêiner de desenvolvimento para os codespaces de um repositório. Isto garante que, quando um aluno cria um codespace, ele será aberto automaticamente com o ambiente de desenvolvimento configurado pelo professor. Para obter mais informações sobre contêineres de desenvolvimento, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% note %}

**Observação**: Os codespaces individuais são excluídos automaticamente se forem interrompidos e deixados sem serem utilizados por um período prolongado. Para obter mais informações, consulte[Configurando a exclusão automática dos seus codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

{% endnote %}

## Sobre o benefício de educação de {% data variables.product.prodname_codespaces %} para professores verificados

O benefício da educação de {% data variables.product.prodname_codespaces %} dá aos professores verificados um subsídio mensal gratuito de horas de {% data variables.product.prodname_codespaces %} para ser usado em {% data variables.product.prodname_classroom %}. Estima-se que o subsídio gratuito seja suficiente para uma classe de 50 com 5 atribuições por mês. em uma máquina central com 1 codespace armazenado por aluno.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Para tornar-se um professor verificado, você precisa ser aprovado para obter um benefício de educador para o professor. Para obter mais informações, consulte "[Candidatando-se a um benefício de professor ou educador](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount#applying-for-an-educator-or-researcher-discount)."

Depois de ter a confirmação de que é um professor verificado, acesse [{% data variables.product.prodname_global_campus %} para professores](https://education.github.com/globalcampus/teacher) para atualizar a organização para o GitHub Team. Para obter mais informações, consulte [Produtos do GitHub](/get-started/learning-about-github/githubs-products#github-team).

Se você for elegível ao benefício de Educação de {% data variables.product.prodname_codespaces %}, ao habilitar {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_classroom %} para sua organização, o GitHub adiciona automaticamente uma política de codespace para restringir os tipos de máquina para todos os codespaces da organização a duas máquinas principais. Isso ajuda você a aproveitar ao máximo o uso gratuito de {% data variables.product.prodname_codespaces %}. No entanto, você pode alterar ou remover essas políticas nas configurações da sua organização. Para obter mais informações, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

Quando o benefício da educação de {% data variables.product.prodname_codespaces %} sai do beta, se sua organização exceder o limite de uso gratuito de {% data variables.product.prodname_codespaces %}, a sua organização será cobrada por uso adicional. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces)".

## Habilitando {% data variables.product.prodname_codespaces %} para a sua organização

{% data variables.product.prodname_codespaces %} está disponível para uso com {% data variables.product.prodname_classroom %} para as organizações que usam {% data variables.product.prodname_team %}. Se você for elegível para o benefício de educação de {% data variables.product.prodname_codespaces %}, você deverá habilitar {% data variables.product.prodname_codespaces %} por meio de {% data variables.product.prodname_classroom %} ao invés de habilitá-lo diretamente nas configurações da sua organização. Caso contrário, sua organização será cobrada diretamente por todo o uso de {% data variables.product.prodname_codespaces %}.

### Habilitando codespaces para uma organização ao criar uma nova sala de aula
{% data reusables.classroom.sign-into-github-classroom %}
1. Clique em **Nova sala de aula**.

  ![Botão "Nova sala de aula"](/assets/images/help/classroom/click-new-classroom-button.png)

1. Na lista de organizações, clique na organização que você gostaria de usar para a sua sala de aula. As organizações elegíveis para {% data variables.product.prodname_codespaces %} terão uma observação que mostrará que são elegíveis. Opcionalmente, você pode criar uma nova organização. Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

  ![Escolha uma organização para a sala de aula com elegibilidade de codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. Na página "Nomeie sua sala de aula", embaixo de "{% data variables.product.prodname_codespaces %} na sua sala de aula, clique em **Habilitar**. Observe que isto irá habilitar {% data variables.product.prodname_codespaces %} para todos os repositórios e usuários da organização.

  ![Habilite codespaces para organizações na página "Configuração básica de sala de aula"](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Quando você estiver pronto para criar a nova sala de aula, clique em **Criar sala de aula**.

### Habilitando codespaces para uma organização por meio de uma sala de aula existente

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Em "{% data variables.product.prodname_github_codespaces %}", clique em **Habilitar**. Isto habilitará {% data variables.product.prodname_codespaces %} para todos os repositórios e usuários da organização. Uma nova política de codespace também é adicionada para restringir tipos de máquinas para todos os codespaces da organização a duas máquinas principais.

  ![Havilite codespaces para organizações nas configurações existentes da sala de aula](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

Você pode usar os mesmos métodos do método acima para desabilitar {% data variables.product.prodname_codespaces %} também para sua organização. Observe que isso irá desabilitar {% data variables.product.prodname_codespaces %} para todos os usuários e repositórios da organização.

## Configurando uma atividade para usar {% data variables.product.prodname_codespaces %}
Para disponibilizar {% data variables.product.prodname_codespaces %} aos alunos para uma atividade, você pode escolher {% data variables.product.prodname_codespaces %} como o editor compatível para a atividade. Ao criar uma nova atividade, na página "Adicionar seu código inicial e escolher seu ID on-line opcional" em "Adicionar um editor compatível", selecione **{% data variables.product.prodname_github_codespaces %}** no menu suspenso.

![Selecione os codespaces como editor compatível para a atividade](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Se você usar o repositório de um modelo para uma atividade, você pode definir um contêiner de desenvolvimento no repositório para personalizar as ferramentas e tempos de execução disponíveis para os alunos quando executarem um codespace para trabalhar na atividade. Se você não definir um contêiner de desenvolvimento, {% data variables.product.prodname_github_codespaces %} usará uma configuração padrão, que contém muitas das ferramentas comuns que seus alunos podem precisar para o desenvolvimento. Para obter mais informações sobre a definição de um contêiner de desenvolvimento, consulte "[Adicionar uma configuração de contêiner de desenvolvimento ao seu repositório](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."

## Iniciando uma atividade usando {% data variables.product.prodname_codespaces %}

Quando um aluno abre uma atividade, o arquivo LEIAME do repositório inclui a recomendação de seu professor sobre o IDE, que ele deve usar para o trabalho.

![Captura de tela da observação dos codespaces no README para um repositório de atividade do aluno](/assets/images/help/classroom/student-codespaces-readme-link.png)

Os alunos podem iniciar um codespace novo ou existente, clicando no botão **Código de {% octicon "code" aria-label="The code icon" %}** na página principal do repositório de atividades e, em seguida, selecionando a aba **Codespaces**. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![Iniciar novo codespace no repositório das atividades](/assets/images/help/classroom/student-launch-new-codespace.png)

Os professores podem ver o codespace de cada aluno para uma atividade na página de visão geral da atividade. Você pode clicar no ícone de codespace no lado direito de cada linha do aluno para iniciar o codespace.

![Visão geral da atividade do professor com os codespaces do aluno](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

Ao conectar-se a um codespace por meio de um navegador, o salvamento automático é habilitado automaticamente. Se você quiser salvar as alterações no repositório, você deverá fazer um commit das alterações e enviá-las por push para um branch remoto. Se você deixar seu codespace em execução sem interação durante 30 minutos por padrão, o seu tempo de execução irá esgostar-se e parar de executar. Os dados da última vez que você fez uma alteração serão preservados. Para obter mais informações sobre o ciclo de vida de um codespace, consulte "[Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)".
