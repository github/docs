---
title: Criar um aplicativo GitHub
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}Para aprender como usar Manifestos do aplicativo GitHub, que permite às pessoas criar aplicativos GitHub pré-configurados, consulte "[Criar aplicativos GitHub a partir de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/).{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Observação:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Clique em **Novo aplicativo GitHub**. ![Botão para criar um novo aplicativo GitHub](/assets/images/github-apps/github_apps_new.png)
5. Em "Nome do aplicativo GitHub App", digite o nome do seu aplicativo. ![Campo para o nome do seu aplicativo GitHub](/assets/images/github-apps/github_apps_app_name.png)

  Dê um nome claro e sucinto ao seu aplicativo. Seu aplicativo não pode ter o mesmo nome de um usuário existente no GitHub, a menos que seja o seu próprio nome de usuário ou da sua organização. Uma versão movida do nome do seu aplicativo será exibida na interface do usuário quando sua integração realizar uma ação.

6. Opcionalmente, em "Descrição", digite uma descrição do aplicativo que os usuários irão ver. ![Campo para uma descrição do seu aplicativo GitHub](/assets/images/github-apps/github_apps_description.png)
7. Em "URL da página inicial", digite a URL completa do site do seu aplicativo. ![Campo para a URL da página inicial do seu aplicativo GitHub](/assets/images/github-apps/github_apps_homepage_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
8. In "Callback URL", type the full URL to redirect to after a user authorizes the installation. Esta URL é usada se o aplicativo precisar identificar e autorizar solicitações de usuário para servidor.

  You can use **Add callback URL** to provide additional callback URLs, up to a maximum of 10.

  ![Button for 'Add callback URL' and field for callback URL](/assets/images/github-apps/github_apps_callback_url_multiple.png)
{% else %}
8. Em "URL de chamada de retorno de autorização do usuário", digite a URL completa para redirecionamento após um usuário autorizar uma instalação. Esta URL é usada se o aplicativo precisar identificar e autorizar solicitações de usuário para servidor. ![Campo para a URL de chamada de retorno de autorização do usuário do seu aplicativo GitHub](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
9. Por padrão, para melhorar a segurança de seus aplicativos, seus aplicativos usarão os tokens de autorização do usuário. Para optar por não usar tokens do usuário expirados, você deverá desmarcar "Expirar tokens de autorização do usuário". Para saber mais sobre como configurar o fluxo de atualização do token e os benefícios de expirar os tokens do usuário, consulte "[Atualizando tokens de acesso do usuário para o servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)." ![Opção para expirar os tokens dos usuários durante a configuração dos aplicativos GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
9. Se seu aplicativo autoriza usuários a usar o fluxo OAuth, você pode selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** para permitir que pessoas autorizem o aplicativo ao instalá-lo, economizando uma etapa. Se você selecionar esta opção, a "URL de configuração" irá tornar-se indisponível e os usuários serão redirecionados para a "URL de retorno de chamada de autorização do usuário" após a instalação do aplicativo. Consulte "[Autorizando usuários durante a instalação](/apps/installing-github-apps/#authorizing-users-during-installation)" para obter mais informações. ![Solicitar autorização de usuário durante a instalação](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
10. Se for necessária uma configuração adicional após a instalação, adicione um "Configurar URL" para redirecionar os usuários após a instalação do seu aplicativo. ![Campo para a URL de configuração do seu aplicativo GitHub ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Observação:** Ao selecionar **Solicitar autorização do usuário (OAuth) durante a instalação** na etapa anterior, este campo irá tornar-se indisponível e as pessoas serão redirecionadas para a "URL de chamada de retorno de autorização do usuário" após a instalação do aplicativo.

  {% endnote %}

11. Na "URL Webhook", digite a URL para a qual os eventos serão POST. Cada aplicativo recebe o seu próprio webhook, que irá notificá-lo sempre que o aplicativo for instalado ou modificado, bem como quaisquer outros eventos que o aplicativo assinar. ![Campo para a URL do webhook do seu aplicativo GitHub](/assets/images/github-apps/github_apps_webhook_url.png)

12. Opcionalmente, no "Segredo do webhook", digite um token secreto opcional usado para proteger seus webhooks. ![Campo para adicionar um token secreto para seu webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Observação:** É altamente recomendável que você defina um token secreto. Para obter mais informações, consulte "[Protegendo seus webhooks](/webhooks/securing/)".

  {% endnote %}

13. Em "Permissões", escolha as permissões que o seu aplicativo irá solicitar. Para cada tipo de permissão, use o menu suspenso e clique em **somente leitura**, **leitura & gravação** ou **Sem acesso**. ![Várias permissões para o seu aplicativo GitHub](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
14. Em "Assinar eventos", escolha se deseja assinar seu aplicativo para eventos de **etiqueta**, **públicos**, **repositório** or **inspeção**. ![Inscreva-se nas opções de eventos para seu aplicativo GitHub](/assets/images/github-apps/github_apps_subscribe_to_events.png)
15. Para escolher o local onde o aplicativo pode ser instalado, selecione **somente nesta conta** ou **qualquer conta**. Para obter mais informações sobre as opções de instalação, consulte "[Tornando um aplicativo GitHub público ou privado](/apps/managing-github-apps/making-a-github-app-public-or-private/)". ![Opções de instalação para o seu aplicativo GitHub](/assets/images/github-apps/github_apps_installation_options.png)
16. Click **Criar aplicativo GitHub**. ![Botão para criar o seu aplicativo GitHub](/assets/images/github-apps/github_apps_create_github_app.png)
