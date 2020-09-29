---
title: Clonagem e bifurcar repositórios do GitHub Desktop
intro: 'É possível usar o {% data variables.product.prodname_desktop %} para clonar e bifurcar os repositórios do {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### Clonar repositórios
Os repositórios no {% data variables.product.prodname_dotcom %} existem como repositórios remotos.  É possível clonar repositórios públicos pertencentes a outras pessoas. É possível clonar o seu próprio repositório para criar uma cópia loca* no seu computador e fazer a sincronia entre os dois locais.

Também é possível clonar um repositório diretamente no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte "[Clonar um repositório do {% data variables.product.prodname_dotcom %} para o {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% mac %}

{% data reusables.desktop.choose-clone-repository %}
  ![Opção de menu Clone (Clonar) no app Mac](/assets/images/help/desktop/clone-file-menu-mac.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Guias Location (Local) no menu Clone a repository (Clonar um repositório)](/assets/images/help/desktop/choose-repository-location-mac.png)
{% data reusables.desktop.cloning-repository-list %}  
![Clonar uma lista de repositórios](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. Clique em **Choose...** (Escolher...). Em seguida, navegue pela janela Finder (Localizador) até o local em que você pretende clonar o repositório. ![Botão Choose (Escolher)](/assets/images/help/desktop/clone-choose-button-mac.png)
5. Clique em **Clone** (Clonar). ![Botão Clone (Clonar)](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.choose-clone-repository %}
  ![Opção de menu Clone (Clonar) no app Windows](/assets/images/help/desktop/clone-file-menu-windows.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Guias Location (Local) no menu Clone a repository (Clonar um repositório)](/assets/images/help/desktop/choose-repository-location-win.png)
{% data reusables.desktop.cloning-repository-list %}     
![Clonar uma lista de repositórios](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. Clique em **Choose...** (Escolher...). Em seguida, navegue pelo Windows Explorer (Explorador do Windows) até o local em que você pretende clonar o repositório. ![Botão Choose (Escolher)](/assets/images/help/desktop/clone-choose-button-win.png)
5. Clique em **Clone** (Clonar). ![Botão Clone (Clonar)](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### Bifurcar os repositórios
Para contribuir para um projeto em que você não tem acesso de gravação, você pode usar o {% data variables.product.prodname_desktop %} para criar uma bifurcação do repositório. As alterações na sua bifurcação não afetam o repositório original. Você pode fazer commit das alterações na sua bifurcação e, em seguida, abrir um pull request no repositório original com as alterações propostas. Para obter mais informações, consulte "[Sobre bifurcações](/github/collaborating-with-issues-and-pull-requests/about-forks)".

1. Se você clonar um repositório em que você não tem acesso de gravação e tentar fazer commit das alterações, {% data variables.product.prodname_desktop %} informará que "você não tem acesso de gravação para o **REPOSITÓRIO**. Clique em **criar uma bifurcação**. ![Criar um link debifurcação](/assets/images/help/desktop/create-a-fork.png)
3. Clique em **Bifurcar este repositório**. ![Botão bifurcar este repositório](/assets/images/help/desktop/fork-this-repo-button.png)
4. Para visualizar a sua bifurcação no {% data variables.product.prodname_dotcom %}, no canto superior direito do {% data variables.product.prodname_dotcom %}, clique na imagem do seu perfil e, em seguida, clique em **Seus repositórios**. ![Seu link para repositórios](/assets/images/help/profile/your-repositories.png)
