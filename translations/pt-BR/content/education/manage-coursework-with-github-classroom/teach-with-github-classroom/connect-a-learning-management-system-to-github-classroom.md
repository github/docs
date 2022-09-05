---
title: Conecte o sistema de gerenciamento de aprendizagem ao GitHub Classroom
intro: 'Você pode configurar um sistema de gerenciamento de aprendizado compatível com LTI (LMS) para conectar a {% data variables.product.prodname_classroom %} a fim de importar uma lista de participantes para sua sala de aula.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Conectar um LMS
---

## Sobre a configuração do seu LMS

Você pode conectar um sistema de gerenciamento de aprendizagem (LMS) a {% data variables.product.prodname_classroom %}, e {% data variables.product.prodname_classroom %} pode importar uma lista de identificadores de aluno do LMS. Para conectar seu LMS a {% data variables.product.prodname_classroom %}, você deve inserir as credenciais de configuração para {% data variables.product.prodname_classroom %} no seu LMS.

## Pré-requisitos

Para configurar um LMS para conectar-se a {% data variables.product.prodname_classroom %}, primeiro você deve criar uma sala de aula. Para obter mais informações, consulte "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)".

## LMSes compatíveis

{% note %}

**Note:** {% data variables.product.prodname_classroom %} previously supported import of roster data from LMSes that implement Learning Tools Interoperability (LTI) versions 1.0 and 1.1. On June 30, 2022, the Instructional Management System (IMS) Global Learning Consortium [ended support for LTI versions 1.0 and 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). A fim de manter as informações confidenciais dos alunos seguras e protegidas, {% data variables.product.company_short %} desabilitou temporariamente a importação de dados da lista de participantes de LMSes em conformidade com LTI.<br><br>

Suporte para a versão mais recente da interoperabilidade de ferramentas de aprendizagem, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), está atualmente sendo trabalhado e será disponibilizado em {% data variables.product.prodname_classroom %} muito em breve.

{% endnote %}

O LTI é um protocolo padrão do setor e o uso do LTI pelo GitHub Classroom é certificado pelo Sistema de Gerenciamento de Instruções (IMS) Global de Aprendizagem. Para obter mais informações, consulte o site [Interoperabilidade das Ferramentas de Aprendizagem](https://www.imsglobal.org/activity/learning-tools-interoperability) e [Sobre Consórcio de Aprendizagem Global do IMS](http://www.imsglobal.org/aboutims.html).

{% data variables.product.company_short %} testou a importação dos dados da lista dos LMSes a seguir em {% data variables.product.prodname_classroom %}.

- Google Classroom


## Conectando-se ao Google Classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Se sua sala de aula já tiver uma lista, você poderá atualizar a lista ou excluir a lista e criar uma nova lista.
    - Para mais informações sobre a exclusão e criação de uma lista, consulte "[Excluir uma lista para uma sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" e "[Criar uma lista de participantes para sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".
    - Para obter mais informações sobre como atualizar uma lista, consulte "[Adicionar alunos à lista para sua sala de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)".
1. Na lista de LMSes, clique no Google Classroom. ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Efetue o login no Google e selecione a sala de aula à qual vincular.


## Conectando ao Canvas, Moodle, Sakai, e outros LMSes

A conexão a outros LMSes está temporariamente indisponível já que as atualizações de {% data variables.product.company_short %} a Interoperabilidade das Ferramentas de Aprendizagem (LTI) estão na versão 1.3. Para obter mais informações, consulte "[LMSes compatíveis](#supported-lmses)."

Enquanto isso, você pode inserir manualmente sua lista de participantes para a sua aula. Para obter mais informações sobre a importação manual da lista de participantes do seu LMS para {% data variables.product.prodname_classroom %}, consulte "[Gerenciar salas de aula](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)".

## Desconectar seu LMS

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Em "Conectar a um sistema de gerenciamento de aprendizagem (LMS)", clique em **Configurações de conexão**. ![Link "Configurações de conexão" nas configurações da sala de aula](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Em "Excluir conexão com o sistema de gerenciamento de aprendizagem", clique em **Desconectar do seu sistema de gerenciamento de aprendizagem**. ![Botão "Desconectar do seu sistema de gerenciamento de aprendizagem" nas configurações de conexão da sala de aula](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
