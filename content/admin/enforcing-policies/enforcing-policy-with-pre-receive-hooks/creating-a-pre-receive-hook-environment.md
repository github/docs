---
title: Creating a pre-receive hook environment
intro: 'To execute pre-receive hooks, use either the default pre-receive environment, or create a custom environment.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
---
A pre-receive environment for {% data variables.product.prodname_ghe_server %} is a Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot) environment. Because pre-receive hooks execute on every push event, they should be fast and lightweight. The environment needed for such checks will typically be minimal.

{% data variables.product.prodname_ghe_server %} provides a default environment which includes these packages: `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

If you have a specific requirement that isn't met by this environment, such as support for a particular language, you can create and upload your own 64-bit Linux `chroot` environment.

The Git version used in the pre-receive hook environment must be at least 2.11, or if you are using libgit2 you must use at least version 0.18.
If you are using another Git implementation, it must support relative paths in the `info/alternates` file.

## Creating a pre-receive hook environment using Docker

You can use a Linux container management tool to build a pre-receive hook environment. This example uses [Debian Linux](https://www.debian.org/) and [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
1. Create the file `Dockerfile.debian` that contains this information:

   ```dockerfile
   FROM --platform=linux/amd64 debian:stable
   RUN apt-get update && apt-get install -y git bash curl
   RUN rm -fr /etc/localtime /usr/share/zoneinfo/localtime
   ```

>[!NOTE] The Debian image includes some symlinks by default, which if not removed, may cause errors when executing scripts in the custom environment. Symlinks are removed in the last line of the example above.

1. From the working directory that contains `Dockerfile.debian`, build an image:

   ```shell
   $ docker build -f Dockerfile.debian -t pre-receive.debian .
   > [+] Building 0.6s (6/6) FINISHED                                                                   docker:desktop-linux
   > => [internal] load build definition from Dockerfile.debian                                                              
   > => [1/2] FROM docker.io/library/debian:latest@sha256:80dd3c3b9c6cecb9f1667e9290b3bc61b78c2678c02cbdae5f0fea92cc6  
   > => [2/2] RUN apt-get update && apt-get install -y git bash curl                                            
   > => exporting to image                                                                                             
   > => => exporting layers                                                                                            
   > => => writing image sha256:b57af4e24082f3a30a34c0fe652a336444a3608f76833f5c5fdaf4d81d20c3cc                       
   > => => naming to docker.io/library/pre-receive.debian 
   ```

1. Create a container:

   ```shell
   docker create --name pre-receive.debian pre-receive.debian /bin/true
   ```

1. Export the Docker container to a `gzip` compressed `tar` file:

   ```shell
   docker export pre-receive.debian | gzip > debian.tar.gz
   ```

   This file `debian.tar.gz` is ready to be uploaded to the {% data variables.product.prodname_ghe_server %} appliance.

## Creating a pre-receive hook environment using chroot

1. Create a Linux `chroot` environment.
1. Create a `gzip` compressed `tar` file of the `chroot` directory.

   ```shell
   cd /path/to/chroot
   tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   > [!NOTE]
   > * Do not include leading directory paths of files within the tar archive, such as `/path/to/chroot`.
   > * `/bin/sh` must exist and be executable, as the entry point into the chroot environment.
   > * Unlike traditional chroots, the `dev` directory is not required by the chroot environment for pre-receive hooks.

For more information about creating a chroot environment see [Chroot](https://wiki.debian.org/chroot) from the _Debian Wiki_ or [BasicChroot](https://help.ubuntu.com/community/BasicChroot) from the _Ubuntu Community Help Wiki_.

## Uploading a pre-receive hook environment on {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Click **Manage environments**.
1. Click **Add environment**.
1. In the "Environment name" field, enter the desired name.
1. In the "Upload environment from a URL" field, enter the URL of the `*.tar.gz` file that contains your environment.
1. Click **Add environment**.

## Uploading a pre-receive hook environment via the administrative shell

1. Upload a readable `*.tar.gz` file that contains your environment to a web host and copy the URL or transfer the file to the {% data variables.product.prodname_ghe_server %} appliance via `scp`. When using `scp`, you may need to adjust the `*.tar.gz` file permissions so that the file is world readable.
1. Connect to the administrative shell.
1. Use the `ghe-hook-env-create` command and type the name you want for the environment as the first argument and the full local path or URL of a `*.tar.gz` file that contains your environment as the second argument.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create DebianTestEnv /home/admin/debian.tar.gz
   > Pre-receive hook environment 'DebianTestEnv' (2) has been created.
   ```
