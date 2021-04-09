---
title: GitHub ActionsでのGitHub Packagesの利用
intro: '{% data variables.product.prodname_actions %}でのワークフローを、自動的にパッケージを{% data variables.product.prodname_registry %}に公開もしくは{% data variables.product.prodname_registry %}からインストールするように設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### {% data variables.product.prodname_actions %}との{% data variables.product.prodname_registry %}について

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 詳しい情報については「[{% data variables.product.prodname_actions %}について](/github/automating-your-workflow-with-github-actions/about-github-actions)」を参照してください。

ワークフローの一部としてパッケージの公開やインストールを行うことで、リポジトリのCI及びCDの機能を拡張できます。

{% if currentVersion == "free-pro-team@latest" %}
#### {% data variables.product.prodname_github_container_registry %} への認証を行う

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

認証の例については、「[{% data variables.product.prodname_container_registry %} で認証する](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)」を参照してください。

{% endif %}

#### {% data variables.product.prodname_dotcom %} 上のパッケージレジストリを認証する

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} 上の {% data variables.product.prodname_container_registry %} 以外のパッケージレジストリにアクセスするためワークフローを {% data variables.product.prodname_registry %} に対して認証する場合、{% else %}{% data variables.product.product_name %} 上のパッケージレジストリに対して認証するには、{% endif %}認証のための個人アクセストークンではなく、{% data variables.product.prodname_actions %} を有効化した際に {% data variables.product.product_name %} がリポジトリに対して自動的に作成する `GITHUB_TOKEN` を使用することをお勧めします。 この`GITHUB_TOKEN`は、現在のリポジトリに対する`read:packages`及び`write:packages`スコープを持ちます。 フォークの場合、このトークンは親のリポジトリへの`read:packages`スコープも持ちます。

{% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}コンテキストを使って、ワークフロー中でこの`GITHUB_TOKEN`を参照できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

### About permissions and package access for repository-owned packages

{% note %}

**Note:** Repository-owned packages include RubyGems, npm, Apache Maven, NuGet, Gradle, and Docker packages that use the package namespace `docker.pkg.github.com`.

{% endnote %}

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The `GITHUB_TOKEN` secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. このトークンの権限は、ワークフローを含むリポジトリに限定されます。 For more information, see "[Permissions for the GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)."

{% data variables.product.prodname_registry %} allows you to push and pull packages through the `GITHUB_TOKEN` available to a {% data variables.product.prodname_actions %} workflow.

{% if currentVersion == "free-pro-team@latest" %}
### About permissions and package access for {% data variables.product.prodname_container_registry %}

The {% data variables.product.prodname_container_registry %} (`ghcr.io`) allows users to create and administer containers as free-standing resources at the organization level. Containers can be owned by an organization or personal user account and you can customize access to each of your containers separately from repository permissions.

All workflows accessing the {% data variables.product.prodname_container_registry %} should use the `GITHUB_TOKEN` instead of a personal access token. For more information about security best practices, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)."

### Default permissions and access settings for containers modified through workflows

When you create, install, modify, or delete a container through a workflow, there are some default permission and access settings used to ensure admins have access to the workflow. You can adjust these access settings as well.

For example, by default if a workflow creates a container using the `GITHUB_TOKEN`, then:
- The container inherits the visibility and permissions model of the repository where the workflow is run.
- Repository admins where the workflow is run become the admins of the container once the container is created.

These are more examples of how default permissions work for workflows that manage packages.

| {% data variables.product.prodname_actions %} workflow task | Default permissions and access                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Download an existing container                              | - If the container is public, any workflow running in any repository can download the container. <br> - If the container is internal, then all workflows running in any repository owned by the Enterprise account can download the container. For enterprise-owned organizations, you can read any repository in the enterprise <br> - If the container is private, only workflows running in repositories that are given read permission on that container can download the container. <br> |
| Upload a new version to an existing container               | - If the container is private, internal, or public, only workflows running in repositories that are given write permission on that container can upload new versions to the container.                                                                                                                                                                                                                                                                                                                          |
| Delete a container or versions of a container               | - If the container is private, internal, or public, only workflows running in repositories that are given delete permission can delete existing versions of the container.                                                                                                                                                                                                                                                                                                                                      |

You can also adjust access to containers in a more granular way or adjust some of the default permissions behavior. 詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/guides/configuring-access-control-and-visibility-for-container-images)」を参照してください。

{% endif %}

### アクションを使ったパッケージの公開

継続的インテグレーション (CI) フローの一環として、{% data variables.product.prodname_actions %}を使用してパッケージを自動的に公開できます。 この継続的デプロイメント (CD) に対するアプローチにより、コードが品質基準を満たしている場合に新しいパッケージの作成を自動化できます。 たとえば、開発者が特定のブランチにプッシュするたびに CI テストを実行するワークフローを作成してはいかがでしょう。 テストにパスすると、このワークフローは新しいパッケージバージョンを{% data variables.product.prodname_registry %}に公開できます。

{% data reusables.package_registry.actions-configuration %}

以下の例では、{% data variables.product.prodname_actions %}を使用してアプリケーションのビルドとテストを行い、それから自動的にDockerイメージを作成して{% data variables.product.prodname_registry %}に公開する方法を示しています。

- リポジトリに新しいワークフローファイル (`.github/workflows/deploy-image.yml` など) を作成し、以下のYAMLを追加します。
  {% raw %}
  ```yaml{:copy}
  name: Create and publish a package
  on:
    push:
      branches: ['release']
  jobs:
    run-npm-build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: npm install and build webpack
          run: |
            npm install
            npm run build
        - uses: actions/upload-artifact@main
          with:
            name: webpack artifacts
            path: public/

    run-npm-test:
      runs-on: ubuntu-latest
      needs: run-npm-build
      strategy:
        matrix:
          os: [ubuntu-latest]
          node-version: [12.x, 14.x]
      steps:
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}
        - uses: actions/download-artifact@main
          with:
            name: webpack artifacts
            path: public
        - name: npm install, and test
          run: |
            npm install
            npm test
          env:
            CI: true

    build-and-push-image:
      runs-on: ubuntu-latest
      needs: run-npm-test
      steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Build container image
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
          repository: ${{ github.repository }}/octo-image
          tag_with_sha: true
          tag_with_ref: true
  ```
  {% endraw %}

  上記に関連する設定については、次の表で説明しています。 <table>
  <tr>
  <td>

{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
  </td>
  <td>
    <code>release</code>というブランチに変更をプッシュするたびに、<code>Create and publish a package</code>ワークフローを実行するよう設定します。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/
  ```
  {% endraw %}
  </td>
  <td>
    このジョブではNPMをインストールし、それをアプリケーションのビルドに使用します。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true
  ```
{% endraw %}
  </td>
  <td>
    このジョブでは<code>npm test</code>を使用してコードをテストします。 <code>needs: run-npm-build</code>コマンドにより、このジョブを<code>run-npm-build</code>ジョブに依存するようにします。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    <code>Build container image</code>という新しいステップを作成します。 このステップは、<code>build-and-push-image</code>ジョブの一部として実行されます。 <code>needs: run-npm-test</code>コマンドにより、このジョブを<code>run-npm-test</code>ジョブに依存するようにします。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v1
  ```
{% endraw %}
  </td>
  <td>
    Dockerの<code>build-push-action</code>アクションを使用して、リポジトリの<code>Dockerfile</code>を元にイメージをビルドします。 ビルドが成功すると、イメージを{% data variables.product.prodname_registry %}にプッシュします。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
with:
  ```
{% endraw %}
  </td>
  <td>
    必要なパラメータを<code>build-push-action</code>アクションに送信します。 これは以降の行で定義されます。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
username: ${{ github.actor }}
  ```
{% endraw %}
  </td>
  <td>
    パッケージを公開するユーザアカウントを定めます。 いったん公開されると、パッケージはここで定めたアカウントが所有することになります。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    {% data variables.product.prodname_registry %}にアクセスするために使用するパスワードを定めます。
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
  ```
  </td>
  <td>
    生成されるパッケージをホストするレジストリを定めます。 This example uses {% data variables.product.prodname_registry %}.{% if currentVersion == "github-ae@latest" %} Replace <code>YOUR-HOSTNAME</code> with the name of your enterprise.{% endif %} {% if currentVersion == "free-pro-team@latest" %} If you're using the {% data variables.product.prodname_container_registry %}, then use <code>ghcr.io</code> as the hostname.{% endif %}
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
repository: ${{ github.repository }}/octo-image
  ```
{% endraw %}
  </td>
  <td>
    生成されるパッケージをホストするリポジトリを定め、公開されるパッケージの名前を設定します。 <code>octo-image</code>は、パッケージに付ける名前に置き換えてください。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_sha: true
  ```
{% endraw %}
  </td>
  <td>
    公開されるパッケージに、コミットのSHAの最初の7文字でタグを付けます。 たとえば、<code>sha-2f2d842</code>となります。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_ref: true
  ```
{% endraw %}
  </td>
  <td>
    公開されるパッケージに、Git refでタグを付けます。 これは、パッケージを作成するために使用するブランチの名前などにするとよいでしょう。
  </td>
  </tr>
  </table>

- この新しいワークフローは、リポジトリの`release`という名前のブランチに変更をプッシュするたびに自動的に実行されます。 [**Actions**] タブで、この進捗を表示できます。
- ワークフローが完成すると、その数分後にリポジトリで新しいパッケージが表示されます。 使用可能なパッケージを見つけるには、「[リポジトリのパッケージを表示する](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)」を参照してください。


### アクションを使ったパッケージのインストール

{% data variables.product.prodname_actions %}を使い、CIフローの一部としてパッケージをインストールできます。 たとえば、開発者がコードをプルリクエストにプッシュすると、いつでもワークフローが{% data variables.product.prodname_registry %}によってホストされているパッケージをダウンロードしてインストールすることで、依存関係を解決するようにワークフローを設定できます。 そして、ワークフローはその依存関係を必要とするCIテストを実行できます。

Installing packages hosted by the {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication when you use the `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} Data transfer is also free when an action installs a package. 詳しい情報については、「[{% data variables.product.prodname_registry %}の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### Upgrading a workflow that accesses `ghcr.io`

{% data reusables.package_registry.github-token-security-over-pat %}

Using the `GITHUB_TOKEN` instead of a PAT, which includes the `repo` scope, increases the security of your repository as you don't need to use a long-lived PAT that offers unnecessary access to the repository where your workflow is run. For more information about security best practices, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)."

1. Navigate to your package landing page.
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. To ensure your container package has access to your workflow, you must add the repository where the workflow is stored to your container. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Note:** Adding a repository to your container through the **Actions access** menu option is different than connecting your container to a repository. For more information, see "[Ensuring workflow access to your package](/packages/guides/configuring-access-control-and-visibility-for-container-images#ensuring-workflow-access-to-your-package)" and "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

  {% endnote %}
3. Optionally, using the "role" drop-down menu, select the default access level that you'd like the repository to have to your container image. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. Open your workflow file. On the line where you login to `ghcr.io`, replace your PAT with {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

For example, this workflow publishes a Docker container using {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} to authenticate.

{% raw %}
```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log into registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```
{% endraw %}

{% endif %}
