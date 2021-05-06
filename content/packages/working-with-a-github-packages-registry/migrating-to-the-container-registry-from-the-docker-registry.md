---
title: Migrating to the Container registry from the Docker registry
intro: 'If you''ve used the GitHub Packages Docker registry to store Docker images, you can migrate your images to the new {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### Key differences between the {% data variables.product.prodname_capitalized_container_registry %} and the Docker registry

{% data reusables.package_registry.container-registry-beta %}

The {% data variables.product.prodname_capitalized_container_registry %} supersedes the existing {% data variables.product.prodname_registry %} Docker registry and is optimized to support some of the unique needs of containers.

With the {% data variables.product.prodname_capitalized_container_registry %} you can:
- Store container images within your organization and user account, rather than a repository.
- Set granular permissions and visibility independently of repository permissions and visibility.
- Access public container images anonymously.

|                   | Docker registry| {% data variables.product.prodname_capitalized_container_registry %} |
|-------------------|--------------------|----|
| Hosting locations | You can host multiple Docker images in one repository. | You can host multiple container images in one organization or user account. |
| Permissions       | Each image inherits the permissions of the repository where the image is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | For each container image, you can choose the access level that others have. The permissions for container image access are separate from your organization and repository permissions.
Visibility          | {% data reusables.package_registry.public-or-private-packages %} | You can set the visibility of each of your container images. A private container image is only visible to people and teams who are given access within your organization. A public container image is visible to anyone. |
Anonymous access    | N/A | You can access public container images anonymously.
Foreign layer support | Doesn't support foreign layers, such as Windows images. | Supports foreign layers, such as Windows images.

### Billing changes

During the {% data variables.product.prodname_capitalized_container_registry %} beta, both the new {% data variables.product.prodname_container_registry %} and the existing {% data variables.product.prodname_registry %} Docker registry are free of charge. For more information about the {% data variables.product.prodname_registry %} Docker registry, see "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."

After the beta, the same billing and storage rates that other {% data variables.product.prodname_registry %} registries use will apply to the {% data variables.product.prodname_capitalized_container_registry %}. For more information, see "[About  billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

### Domain changes

The domain for the {% data variables.product.prodname_container_registry %} is `ghcr.io`.

| Registry  | Example URL |
|-----------------|-------------|
| {% data variables.product.prodname_registry %} Docker registry |  `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME`
| {% data variables.product.prodname_capitalized_container_registry %} | `ghcr.io/OWNER/IMAGE_NAME`

### Authenticating to the {% data variables.product.prodname_capitalized_container_registry %}

{% data reusables.package_registry.feature-preview-for-container-registry %}

You will need to authenticate to the {% data variables.product.prodname_container_registry %} with the base URL `ghcr.io`. We recommend creating a new access token for using the {% data variables.product.prodname_container_registry %}.

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Migrating a Docker image using the Docker CLI

To move Docker images that you host on {% data variables.product.prodname_registry %} Docker registry, you must republish the images to {% data variables.product.prodname_container_registry %}. We recommend republishing your existing Docker images using the command line on your local machine.

1. Sign in to the Docker registry using a temporary PAT with at least the `read:packages` scope. This PAT will only be used to sign in to the Docker registry to pull down images and can be deleted afterward.
  {% raw %}
  ```shell
  $ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
  ```
  {% endraw %}
2. Pull down the image you'd like to migrate, replacing OWNER with the name of the user or organization account that owns the repository, REPOSITORY with the name of the repository containing your project, IMAGE_NAME with name of the package or image, VERSION with tag for the image you want to install. For example, `docker pull docker.pkg.github.com/octo-org/octoshift/octoshift:latest` pulls the latest tag of the `octoshift/octoshift` image in the octo-org organization.
  ```shell
  $ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```

3. Re-tag the image with the new domain and a new image name. For more information, see "[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)" in the Docker documentation. Use the same URL that you used in the previous step for the SOURCE URL. Replace the TARGET_OWNER with the user or organization that you are migrating the container image to and replace the TARGET_IMAGE_NAME with the new {% data variables.product.prodname_container_registry %} image name.
  ```shell
  $ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
  ```

4. Sign in to the new {% data variables.product.prodname_container_registry %}. We recommend creating a new PAT limited to the `read:packages` and `write:packages` scopes since you no longer need the `repo` scope and your previous PAT may not have the `write:packages` scope.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  ```
  {% endraw %}
5. Push your re-tagged image to the {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
  ```

### Updating your {% data variables.product.prodname_actions %} workflow

{% data reusables.package_registry.feature-preview-for-container-registry %}

If you have a {% data variables.product.prodname_actions %} workflow that uses a Docker image from the {% data variables.product.prodname_registry %} Docker registry, you may want to update your workflow to the {% data variables.product.prodname_container_registry %} to allow for anonymous access for public container images, finer-grain access permissions, and better storage and bandwidth compatibility for containers.

1. Migrate your Docker images to the new {% data variables.product.prodname_container_registry %} at `ghcr.io`. For an example, see "[Migrating a Docker image using the Docker CLI](#migrating-a-docker-image-using-the-docker-cli)."

2. In your {% data variables.product.prodname_actions %} workflow file, update the package url from `https://docker.pkg.github.com` to `ghcr.io`.

3. Add your new {% data variables.product.prodname_container_registry %} authentication personal access token (PAT) as a GitHub Actions secret. The {% data variables.product.prodname_capitalized_container_registry %} does not support using `GITHUB_TOKEN` for your PAT so you must use a different custom variable, such as `CR_PAT`. For more information, see "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."

4. In your {% data variables.product.prodname_actions %} workflow file, update the authentication PAT by replacing your Docker registry PAT ({% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}) with a new variable for your {% data variables.product.prodname_container_registry %} PAT, such as {% raw %}`${{ secrets.CR_PAT }}`{% endraw %}.

#### Example of updated workflow

If part of your workflow accessed a Docker image hosted by the Docker registry like this:

{% raw %}
```yaml
echo ${{ secrets.GITHUB_TOKEN }} | docker login https://docker.pkg.github.com -u $GITHUB_ACTOR --password-stdin
docker pull docker.pkg.github.com/github/octoshift/octoshift:latest
docker build . --tag docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA --cache-from docker.pkg.github.com/github/octoshift/octoshift:latest
docker push docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA
```
{% endraw %}

Then you'll need to update your workflow with the new {% data variables.product.prodname_container_registry %} URL and PAT like this:  

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.CR_PAT }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
