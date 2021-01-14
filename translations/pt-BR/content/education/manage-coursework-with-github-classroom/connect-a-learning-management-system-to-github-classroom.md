---
title: Conecte o sistema de gerenciamento de aprendizagem ao GitHub Classroom
intro: Você pode configurar um sistema de gerenciamento de aprendizado compatível com LTI (LMS) para conectar a {% data variables.product.prodname_classroom %} a fim de importar uma lista de participantes para sua sala de aula.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
---

### Sobre a configuração do seu LMS

Você pode conectar um sistema de gerenciamento de aprendizagem (LMS) a {% data variables.product.prodname_classroom %}, e {% data variables.product.prodname_classroom %} pode importar uma lista de identificadores de aluno do LMS. Para conectar seu LMS a {% data variables.product.prodname_classroom %}, você deve inserir as credenciais de configuração para {% data variables.product.prodname_classroom %} no seu LMS.

### Pré-requisitos

Para configurar um LMS para conectar-se a {% data variables.product.prodname_classroom %}, primeiro você deve criar uma sala de aula. Para obter mais informações, consulte "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)".

### LMSes compatíveis

{% data variables.product.prodname_classroom %} é compatível com a importação de dados da lista de LMSes que implementam os padrões de interoperabilidade de ferramentas de aprendizagem (LTI).

- LTI versão 1.0 e/ou 1.1
- Nomes de LTI e provisionamento de funções 1.X

Usar o LTI ajuda a manter suas informações protegidas e seguras. O LTI é um protocolo padrão do setor e o uso do LTI pelo GitHub Classroom é certificado pelo Sistema de Gerenciamento de Instruções (IMS) Global de Aprendizagem. Para obter mais informações, consulte [Ferramentas de Aprendizagem Interoperabilidade](https://www.imsglobal.org/activity/learning-tools-interoperability) e
Sobre o Consórcio de Aprendizagem Global do IMS.</p> 

{% data variables.product.company_short %} testou a importação dos dados da lista dos LMSes a seguir em {% data variables.product.prodname_classroom %}.

- Canvas
- Google Classroom
- Moodle
- Sakai

Atualmente, {% data variables.product.prodname_classroom %} não é compatível com a importação de dados da lista de participantes do Blackboard ou do Brightspace



### Gerar credenciais de configuração para sua sala de aula

{% data reusables.classroom.sign-into-github-classroom %}



{% data reusables.classroom.click-classroom-in-list %}



{% data reusables.classroom.click-students %}

1. Se sua sala de aula já tiver uma lista, você poderá atualizar a lista ou excluir a lista e criar uma nova lista. 
       - Para mais informações sobre a exclusão e criação de uma lista, consulte "[Excluir uma lista para uma sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" e "[Criar uma lista de participantes para sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".
    - Para obter mais informações sobre como atualizar uma lista, consulte "[Adicionar alunos à lista para sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)".
1. Na lista de LMSes, clique no seu LMS. Se o seu LMS não for compatível, clique em **Outro LMS**. ![Lista de LMSes](/assets/images/help/classroom/classroom-settings-click-lms.png)

1. Leia sobre como conectar seu LMS e, em seguida, clique em **Conectar-se ao _LMS_**.

1. Copie a "Chave do Consumidor", "Segredo Compartilhado" e "Iniciar URL" para a conexão com a sala de aula. ![Copie credenciais](/assets/images/help/classroom/classroom-copy-credentials.png)



### Configurar um LMS genérico

Você deve configurar as configurações de privacidade para o seu LMS para permitir que as ferramentas externas recebam informações da lista.

1. Acesse seu LMS.
1. Configure uma ferramenta externa.
1. Forneça as credenciais de configuração geradas em {% data variables.product.prodname_classroom %}. 
       - Chave do consumidor
    - Segredo partilhado
    - Abra a URL (às vezes denominada de "URL da ferramenta" ou similar)



### Configurar o Canvas

Você pode configurar {% data variables.product.prodname_classroom %} como um aplicativo externo para Canvas para importar dados da lista para sua sala de aula. Para obter mais informações sobre o Canvas, consulte o [site do Canvas](https://www.instructure.com/canvas/).

1. Efetue o login no [Canvas](https://www.instructure.com/canvas/#login).
1. Selecione o curso do Canvas a ser integrado com {% data variables.product.prodname_classroom %}.
1. Na barra lateral esquerda, clique em **Configurações**.
1. Clique na aba **Aplicativos**.
1. Clique **Visualizar configurações de aplicativos**.
1. Click **+App**.
1. Selecione o menu suspenso **Tipo de Configuração** e clique em **Por URL**.
1. Cole as credenciais de configuração de {% data variables.product.prodname_classroom %}. Para obter mais informações, consulte "[Gerar credenciais de configuração para sua sala de aula](#generating-configuration-credentials-for-your-classroom)".
   
   
    | Campo na configuração do aplicativo Canvas                                                      | Valor ou configuração                                                    |
    |:----------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------ |
    | **Chave de cliente**                                                                            | Chave do cliente de {% data variables.product.prodname_classroom %}
    | **Segredo compartilhado**                                                                       | Segredo compartilhado de {% data variables.product.prodname_classroom %}
    | **Permitir que esta ferramenta acesse os Nomes de IMS e Serviço de Provisionamento de Funções** | Habilitado                                                               |
    | **URL de configuração**                                                                         | Acesse a URL a partir de {% data variables.product.prodname_classroom %}

    
    {% note %}
    
    **Observação**: Se você vir ver uma caixa de seleção no Canvas rotulada como "Permitir que esta ferramenta acesse os Nomes do IMS e o Serviço de Provisionamento de Funções", o administrador do Canvas deverá entrar em contato com o suporte do Canvas para habilitar a configuração do serviço de associação para sua conta do Canvas. Sem habilitar este recurso, você não conseguirá sincronizar a lista do Canvas. Para obter mais informações, consulte [Como posso entrar em contato com o suporte Canvas?](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) no site do Canvas.
    
    {% endnote %}

1. Clique em **Enviar**.

1. Na barra lateral esquerda, clique em **Página inicial**.
1. Para solicitar que o Canvas envie um e-mail de confirmação, na barra lateral esquerda, clique em **GitHub Classroom**. Siga as instruções no e-mail para terminar de vincular {% data variables.product.prodname_classroom %}.



### Configurar Moodle

Você pode configurar {% data variables.product.prodname_classroom %} como uma atividade do Moodle para importar dados da lista para sua sala de aula. Para obter mais informações sobre o Moodle, consulte o [site do Moodle](https://moodle.org).

Você deve usar a versão 3.0 ou superior do Moodle.

1. Efetue o login no [Moodle](https://moodle.org/login/index.php).
1. Selecione o curso do Moodle a ser integrado com {% data variables.product.prodname_classroom %}.
1. Clique em **Ativar a edição**.
1. Sempre que você queira que {% data variables.product.prodname_classroom %} esteja disponível no Moodle, clique em **Adicionar uma atividade ou recurso**.
1. Escolha a **Ferramenta externa** e clique em **Adicionar**.
1. No campo "Nome da atividade" digite "Sala de aula do GitHub".
1. No campo **ferramenta pré-configurada**, à direita do menu suspenso, clique em **+**.
1. Em "Configuração da ferramenta externa", cole as credenciais de configuração de {% data variables.product.prodname_classroom %}. Para obter mais informações, consulte "[Gerar credenciais de configuração para sua sala de aula](#generating-configuration-credentials-for-your-classroom)".
   
   
    | Campo na configuração do aplicativo Moodle | Valor ou configuração                                                                                                                                                                     |
    |:------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Nome da ferramenta**                     | {% data variables.product.prodname_classroom %} - _YOUR CLASSROOM NAME_<br/><br/>**Observação**: Você pode usar qualquer nome, mas sugerimos esse valor para maior clareza. |
    | **URL da Ferramenta**                      | Acesse a URL a partir de {% data variables.product.prodname_classroom %}
    | **Versão do LTI**                          | LTI 1.0/1.1                                                                                                                                                                               |
    | **Contêiner de inicialização padrão**      | Nova janela                                                                                                                                                                               |
    | **Chave do consumidor**                    | Chave do cliente de {% data variables.product.prodname_classroom %}
    | **Segredo partilhado**                     | Segredo compartilhado de {% data variables.product.prodname_classroom %}


1. Role para baixo e clique em **Serviços**.

1. À direita do "Provisionamento de nomes e função de IMS LTI", selecione o menu suspenso e clique em **Usar este serviço para recuperar informações dos integrantes como configurações de privacidade**.
1. Role para baixo e clique em **Privacidade**.
1. À direita de **Compartilhar o nome do lançador com a ferramenta** e **Compartilhar o e-mail do lançador com a ferramenta**, selecione os menus suspensos para clicar em **Sempre**.
1. Na parte inferior da página, clique em **Save changes** (Salvar alterações).
1. No menu **Pré-configurar a ferramenta**, clique em **GitHub Classroom - _OUR CLASSROOM NAME_**.
1. Em "Configurações comuns do módulo" à direita de "Disponibilidade", selecione o menu suspenso e clique em **Ocultar dos alunos**.
1. Na parte inferior da página, clique em **Salvar e retornar ao curso.**.
1. Acesse qualquer lugar que você escolheu para exibir {% data variables.product.prodname_classroom %}, e clique na atividade de {% data variables.product.prodname_classroom %}.



### Importar uma lista do seu LMS

Para obter mais informações sobre a importação da lista de participantes do seu LMS para {% data variables.product.prodname_classroom %}, consulte "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".



### Desconectar seu LMS

{% data reusables.classroom.sign-into-github-classroom %}



{% data reusables.classroom.click-classroom-in-list %}



{% data reusables.classroom.click-settings %}

1. Em "Conectar a um sistema de gerenciamento de aprendizagem (LMS)", clique em **Configurações de conexão**. ![Link "Configurações de conexão" nas configurações da sala de aula](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)

1. Em "Excluir conexão com o sistema de gerenciamento de aprendizagem", clique em **Desconectar do seu sistema de gerenciamento de aprendizagem**. ![Botão "Desconectar do seu sistema de gerenciamento de aprendizagem" nas configurações de conexão da sala de aula](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
