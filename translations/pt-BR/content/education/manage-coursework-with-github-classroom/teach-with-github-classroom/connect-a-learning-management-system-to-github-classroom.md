---
title: Conecte o sistema de gerenciamento de aprendizagem ao GitHub Classroom
intro: Você pode configurar um sistema de gerenciamento de aprendizado compatível com LTI (LMS) para conectar a {% data variables.product.prodname_classroom %} a fim de importar uma lista de participantes para sua sala de aula.
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: 4138d2e63860815cdba41e6f30209f0bf637104d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145093843"
---
## <a name="about-configuration-of-your-lms"></a>Sobre a configuração do seu LMS

Você pode conectar um sistema de gerenciamento de aprendizagem (LMS) a {% data variables.product.prodname_classroom %}, e {% data variables.product.prodname_classroom %} pode importar uma lista de identificadores de aluno do LMS. Para conectar seu LMS a {% data variables.product.prodname_classroom %}, você deve inserir as credenciais de configuração para {% data variables.product.prodname_classroom %} no seu LMS.

## <a name="prerequisites"></a>Pré-requisitos

Para configurar um LMS para conectar-se a {% data variables.product.prodname_classroom %}, primeiro você deve criar uma sala de aula. Para obter mais informações, confira "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)".

## <a name="supported-lmses"></a>LMSes compatíveis

{% data variables.product.prodname_classroom %} é compatível com a importação de dados da lista de LMSes que implementam os padrões de interoperabilidade de ferramentas de aprendizagem (LTI).

- LTI versão 1.0 e/ou 1.1
- Nomes de LTI e provisionamento de funções 1.X

Usar o LTI ajuda a manter suas informações protegidas e seguras. O LTI é um protocolo padrão do setor e o uso do LTI pelo GitHub Classroom é certificado pelo Sistema de Gerenciamento de Instruções (IMS) Global de Aprendizagem. Para obter mais informações, confira [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) e [Sobre o IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) no site do IMS Global Learning Consortium.

{% data variables.product.company_short %} testou a importação dos dados da lista dos LMSes a seguir em {% data variables.product.prodname_classroom %}.

- Tela
- Google Classroom
- Moodle
- Sakai

Atualmente, o {% data variables.product.prodname_classroom %} não dá suporte à importação de dados da lista de participantes por meio do Blackboard ou do Brightspace.

## <a name="generating-configuration-credentials-for-your-classroom"></a>Gerar credenciais de configuração para sua sala de aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Se sua sala de aula já tiver uma lista, você poderá atualizar a lista ou excluir a lista e criar uma nova lista.
    - Para obter mais informações sobre como excluir e criar uma lista de participantes, confira "[Como excluir uma lista de participantes de uma sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" e "[Como criar uma lista de participantes para sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".
    - Para obter mais informações sobre como atualizar uma lista, confira "[Como adicionar alunos à lista de participantes da sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)".
1. Na lista de LMSes, clique no seu LMS. Se não houver suporte para o LMS, clique em **Outro LMS**.
  ![Lista de LMSs](/assets/images/help/classroom/classroom-settings-click-lms.png)
1. Leia mais sobre como conectar o LMS e clique em **Conectar-se ao _LMS_**.
1. Copie a "Chave do Consumidor", "Segredo Compartilhado" e "Iniciar URL" para a conexão com a sala de aula.
  ![Copiar as credenciais](/assets/images/help/classroom/classroom-copy-credentials.png)

## <a name="configuring-a-generic-lms"></a>Configurar um LMS genérico

Você deve configurar as configurações de privacidade para o seu LMS para permitir que as ferramentas externas recebam informações da lista.

1. Acesse seu LMS.
1. Configure uma ferramenta externa.
1. Forneça as credenciais de configuração geradas em {% data variables.product.prodname_classroom %}.
    - Chave do consumidor
    - Segredo compartilhado
    - Abra a URL (às vezes denominada de "URL da ferramenta" ou similar)

## <a name="configuring-canvas"></a>Configurar o Canvas

Você pode configurar {% data variables.product.prodname_classroom %} como um aplicativo externo para Canvas para importar dados da lista para sua sala de aula. Para obter mais informações sobre o Canvas, acesse o [site do Canvas](https://www.instructure.com/canvas/).

1. Entre no [Canvas](https://www.instructure.com/canvas/#login).
1. Selecione o curso do Canvas a ser integrado com {% data variables.product.prodname_classroom %}.
1. Na barra lateral esquerda, clique em **Configurações**.
1. Clique na guia **Aplicativos**.
1. Clique em **Exibir configurações do aplicativo**.
1. Clique em **+Aplicativo**.
1. Selecione o menu suspenso **Tipo de Configuração** e clique em **Por URL**.
1. Cole as credenciais de configuração de {% data variables.product.prodname_classroom %}. Para obter mais informações, confira "[Como gerar credenciais de configuração para sua sala de aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo na configuração do aplicativo Canvas | Valor ou configuração |
    | :- | :- |
    | **Chave do consumidor** | Chave do cliente de {% data variables.product.prodname_classroom %} |
    | **Segredo compartilhado** | Segredo compartilhado de {% data variables.product.prodname_classroom %} |
    | **Permitir que esta ferramenta acesse os Nomes do IMS e o Serviço de Provisionamento de Funções** | habilitado |
    | **URL de configuração** | Acesse a URL a partir de {% data variables.product.prodname_classroom %} |

    {% note %}

    **Observação**: se você não estiver vendo uma caixa de seleção no Canvas rotulada "Permitir que esta ferramenta acesse os Nomes do IMS e o Serviço de Provisionamento de Funções", o administrador do Canvas precisará entrar em contato com o suporte do Canvas para habilitar a configuração do serviço de associação para sua conta do Canvas. Sem habilitar este recurso, você não conseguirá sincronizar a lista do Canvas. Para obter mais informações, confira [Como fazer para entrar em contato com o Suporte do Canvas?](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) no site do Canvas.

    {% endnote %}

1. Clique em **Enviar**.
1. Na barra lateral esquerda, clique em **Página Inicial**.
1. Para solicitar que o Canvas envie um email de confirmação, na barra lateral esquerda, clique em **GitHub Classroom**. Siga as instruções no e-mail para terminar de vincular {% data variables.product.prodname_classroom %}.

## <a name="configuring-moodle"></a>Configurar Moodle

Você pode configurar {% data variables.product.prodname_classroom %} como uma atividade do Moodle para importar dados da lista para sua sala de aula. Para obter mais informações sobre o Moodle, confira o [site do Moodle](https://moodle.org).

Você deve usar a versão 3.0 ou superior do Moodle.

1. Entre no [Moodle](https://moodle.org/login/).
1. Selecione o curso do Moodle a ser integrado com {% data variables.product.prodname_classroom %}.
1. Clique em **Ativar a edição**.
1. Em qualquer lugar em que você deseje disponibilizar o {% data variables.product.prodname_classroom %} no Moodle, clique em **Adicionar uma atividade ou um recurso**.
1. Escolha **Ferramenta externa** e clique em **Adicionar**.
1. No campo "Nome da atividade" digite "Sala de aula do GitHub".
1. No campo **Ferramenta pré-configurada**, à direita do menu suspenso, clique em **+** .
1. Em "Configuração da ferramenta externa", cole as credenciais de configuração de {% data variables.product.prodname_classroom %}. Para obter mais informações, confira "[Como gerar credenciais de configuração para sua sala de aula](#generating-configuration-credentials-for-your-classroom)".

    | Campo na configuração do aplicativo Moodle | Valor ou configuração |
    | :- | :- |
    | **Nome da ferramenta** | {% data variables.product.prodname_classroom %} – _NOME DA SALA DE AULA_<br/><br/>**Observação**: você pode usar qualquer nome, mas sugerimos esse valor para maior clareza. |
    | **URL da Ferramenta** | Acesse a URL a partir de {% data variables.product.prodname_classroom %} |
    | **Versão do LTI** | LTI 1.0/1.1 |
    | **Contêiner de inicialização padrão** | Nova janela |
    | **Chave do consumidor** | Chave do cliente de {% data variables.product.prodname_classroom %} |
    | **Segredo compartilhado** | Segredo compartilhado de {% data variables.product.prodname_classroom %} |

1. Role a página até **Serviços** e clique nessa opção.
1. À direita de "Nomes de LTI do IMS e Provisionamento de Funções", selecione o menu suspenso e clique em **Usar este serviço para recuperar as informações dos membros de acordo com as configurações de privacidade**.
1. Role a página até **Privacidade** e clique nessa opção.
1. À direita de **Compartilhar nome do inicializador com a ferramenta** e o **Compartilhar email do inicializador com a ferramenta**, selecione os menus suspensos para clicar em **Sempre**.
1. Na parte inferior da página, clique em **Salvar alterações**.
1. No menu **Pré-configurar ferramenta**, clique em **GitHub Classroom – _NOME DA SALA DE AULA_**.
1. Em "Configurações comuns do módulo", à direita de "Disponibilidade", selecione o menu suspenso e clique em **Ocultar dos alunos**.
1. Na parte inferior da página, clique em **Salvar e retornar ao curso**.
1. Acesse qualquer lugar que você escolheu para exibir {% data variables.product.prodname_classroom %}, e clique na atividade de {% data variables.product.prodname_classroom %}.

## <a name="importing-a-roster-from-your-lms"></a>Importar uma lista do seu LMS

Para obter mais informações sobre como importar a lista de participantes do LMS para o {% data variables.product.prodname_classroom %}, confira "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".

## <a name="disconnecting-your-lms"></a>Desconectar seu LMS

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Em "Conectar-se a um LMS (sistema de gerenciamento de aprendizagem)", clique em **Configurações da Conexão**.
  ![Link "Configurações da conexão" em configurações da sala de aula](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Em "Excluir Conexão com o sistema de gerenciamento de aprendizagem", clique em **Desconectar-se do sistema de gerenciamento de aprendizagem**.
  ![Botão "Desconectar-se do sistema de gerenciamento de aprendizagem" em configurações da conexão da sala de aula](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
