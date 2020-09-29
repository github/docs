---
title: Creating a pre-receive hook environment
intro: 'To execute pre-receive hooks, use either the default pre-receive environment, or create a custom environment.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
---

A pre-receive environment for {% data variables.product.prodname_ghe_server %} is a Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot) environment. Because pre-receive hooks execute on every push event, they should be fast and lightweight. The environment needed for such checks will typically be minimal.

{% data variables.product.prodname_ghe_server %} provides a default environment which includes these packages: `awk`,  `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

If you have a specific requirement that isn't met by this environment, such as support for a particular language, you can create and upload your own 64-bit Linux `chroot` environment.

### Creating a pre-receive hook environment using Docker

You can use a Linux container management tool to build a pre-receive hook environment. This example uses [Alpine Linux](http://www.alpinelinux.org/) and [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Create the file `Dockerfile.alpine-3.3` that contains this information:

    ```
    FROM gliderlabs/alpine:3.3
    RUN apk add --no-cache git bash
    ```
3. From the working directory that contains `Dockerfile.alpine-3.3`, build an image:

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
  ```
4. Create a container:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
  ```
5. Export the Docker container to a `gzip` compressed `tar` file:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
  ```

  This file `alpine-3.3.tar.gz` is ready to be uploaded to the {% data variables.product.prodname_ghe_server %} appliance.

### Creating a pre-receive hook environment using chroot

1. Create a Linux `chroot` environment.
2. Create a `gzip` compressed `tar` file of the `chroot` directory.
  ```shell
  $ cd /path/to/chroot
  $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

  {% note %}

    **Замечания:**
    - Do not include leading directory paths of files within the tar archive, such as `/path/to/chroot`.
    - `/bin/sh` must exist and be executable, as the entry point into the chroot environment.
    - Unlike traditional chroots, the `dev` directory is not required by the chroot environment for pre-receive hooks.

  {% endnote %}

For more information about creating a chroot environment see "[Chroot](https://wiki.debian.org/chroot)" from the *Debian Wiki*, "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" from the *Ubuntu Community Help Wiki*, or "[Installing Alpine Linux in a chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)" from the *Alpine Linux Wiki*.

### Uploading a pre-receive hook environment on {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Click **Manage environments**. ![Manage Environments](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Click **Add environment**. ![Add Environment](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Enter the desired name in the **Environment name** field. ![Environment name](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Enter the URL of the `*.tar.gz` file that contains your environment. ![Upload environment from a URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Click **Add environment**. ![Add environment button](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

### Uploading a pre-receive hook environment via the administrative shell
1. Upload a readable `*.tar.gz` file that contains your environment to a web host and copy the URL or transfer the file to the {% data variables.product.prodname_ghe_server %} appliance via `scp`. When using `scp`, you may need to adjust the `*.tar.gz` file permissions so that the file is world readable.
1.  Connect to the administrative shell.
2.  Use the `ghe-hook-env-create` command and type the name you want for the environment as the first argument and the full local path or URL of a `*.tar.gz` file that contains your environment as the second argument.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
  ```
