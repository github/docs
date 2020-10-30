---
title: Sobre notificações
intro: 'As notificações fornecem atualizações sobre as atividades e conversas em que você está interessado. Você pode receber notificações no {% data variables.product.product_name %} ou por meio do seu cliente de e-mail.'
versions:
  enterprise-server: <2.21
---

### Tipos de notificação

As notificações que você recebe serão *de participação* ou *de inspeção*. Ambos os tipos de notificação podem ser recebidos como notificações da web ou notificações de e-mail. Para obter mais informações, consulte:

- "[Sobre notificações web](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[Sobre notificações por e-mail](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Escolhendo o método de entrega de suas notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### Notificações de participação

O {% data variables.product.product_name %} envia notificações *de participação* quando você está diretamente envolvido em atividades ou conversas em um repositório ou uma equipe da qual é integrante. Você receberá uma notificação quando:
  - Você, ou uma equipe da qual é integrante, for mencionado. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".
  - A equipe principal de uma equipe secundária da qual você é integrante for mencionada. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".
  - Você for atribuído a um problema ou uma pull request.
  - Um comentário for adicionado em uma conversa que você assinou.
  - Um commit for feito em uma pull request que você assinou.
  - Você abrir, comentar ou fechar um problema ou uma pull request.
  - Uma revisão for enviada que aprove ou solicite alterações em uma pull request que você assinou.
  - Você, ou uma equipe da qual é integrante, é solicitado a revisar uma pull request.
  - Você, ou uma equipe da qual é integrante, é o proprietário designado de um arquivo e alguém abre uma pull request que altera esse arquivo. Para obter mais informações, consulte "[Sobre proprietários do código](/articles/about-code-owners)".
  - Você criar ou responder a uma discussão de equipe.

#### Notificações de inspeção

O {% data variables.product.product_name %} envia notificações *de inspeção* para atualizações em repositórios ou discussões de equipe que você está inspecionando. {% if currentVersion ver_gt "enterprise-server@2.17" %} {% data reusables.notifications.auto-watch %}Para obter mais informações, consulte "[Fazer a inspeção e cancelar a inspeção de repositórios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)".

{% endif %}Você receberá uma notificação quando:
  - Um problema for aberto.
  - Um comentário for adicionado a um problema aberto.
  - Uma pull request for aberta.
  - Um comentário for adicionado a uma pull request aberta.
  - Um comentário for adicionado a um commit.
  - Uma versão for publicada. Para obter mais informações, consulte "[Sobre versões](/articles/about-releases)". Você também pode apenas inspecionar versões publicadas em um repositório, em vez de todas as atualizações de um repositório. Para obter mais informações, consulte "[Fazer a inspeção e cancelar a inspeção de versões para um repositório](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)".
  - Uma revisão for enviada que aprove ou solicite alterações em uma pull request.
  - Uma potagem de discussão de equipe for criada ou respondida para uma equipe que você está inspecionando.
  - Uma postagem de discussão de equipe para uma equipe principal ou equipe da qual você é integrante e estiver inspecionando, for aberta, editada ou respondida. Para obter mais informações, consulte "[Equipes aninhadas](/articles/about-teams/#nested-teams)".

Também é possível procurar em seu painel atividades de pessoas que você segue, repositórios que inspeciona e organizações das quais participa. Para obter mais informações, consulte "[Sobre seu painel pessoal](/articles/about-your-personal-dashboard)".

### Leia mais

- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching">Listar os repositórios que você está inspecionando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories">Fazer a inspeção e cancelar a inspeção de repositórios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "<a href="/enterprise/[Fazer a inspeção e cancelar a inspeção de discussões de equipe](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)"
- "[Fazer a assinatura e cancelar a assinatura de notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
