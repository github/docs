---
title: Creating a pre-receive hook script
intro: Use pre-receive hook scripts to create requirements for accepting or rejecting a push based on the contents.
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
---

You can see examples of pre-receive hooks for {% data variables.product.prodname_ghe_server %} in the [`github/platform-samples` repository](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Writing a pre-receive hook script
A pre-receive hook script executes in a pre-receive hook environment on the {% data variables.product.prodname_ghe_server %} appliance. When you create a pre-receive hook script, consider the available input, output, exit-status and environment variables.  

#### Input (stdin)
After a push occurs and before any refs are updated on the remote repository, the `git-receive-pack` process invokes the pre-receive hook script with the standard input of one line per ref to be updated:

`<old-value> SP <new-value> SP <ref-name> LF`

This string represents these arguments:

| Argument | Description     |
| :------------- | :------------- |
| `<old-value>` | Old object name stored in the `ref`.<br> When you *create* a new `ref`, this equals 40 zeroes. |
| `<new-value>` | New object name to be stored in the `ref`.<br> When you *delete* a `ref`, this equals 40 zeroes. |
| `<ref-name>`  | The full name of the `ref`. |

For more information on `git-receive-pack` see "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" in the Git documentation.
For more information about `refs` see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in *Pro Git*.

#### Output (stdout)

The script output (`stdout`) is passed back to the client, so any `echo` statements are visible to the user on the command line or in the user interface.

#### Exit-status

The `exit-status` of a pre-receive script determines if the push will be accepted.

| Exit-status Value | Action     |
| :-------------: | :-------------: |
| 0       | The push will be accepted.  |
| non-zero | The push will be rejected. |

#### Environment variables
Outside of the values that are provided to `stdin`, there are additional variables that are available to a pre-receive hook script running on {% data variables.product.prodname_ghe_server %}.

| Variable     | Description     |
| :------------- | :------------- |
|   $GITHUB_USER_LOGIN  | The user id who created the `ref`. |
|   $GIT_DIR  | The path of the remote repository on the appliance. |
|   $GITHUB_USER_IP  | The IP Address of the user performing the push.  |
|   $GITHUB_REPO_NAME  | The name in `owner`/`repo` format of the repository being updated. |
|   $GITHUB_PULL_REQUEST_AUTHOR_LOGIN  | The user ID for the author of a pull request opened on your instance. |
|   $GITHUB_REPO_PUBLIC  | A boolean value that when `true` represents a public repository, and when `false` represents a private repository. |
|   $GITHUB_PUBLIC_KEY_FINGERPRINT  | The user's public key fingerprint. |
|   $GITHUB_PULL_REQUEST_HEAD  | A string in the format: `user:branch` for the HEAD of the PR.<br> Example: `octocat:fix-bug` |
|   $GITHUB_PULL_REQUEST_BASE  | A string in the format: `user:branch` for the BASE of the PR.<br> Example: `octocat:main` |
|   $GITHUB_VIA  | Method used to create the ref.<br> **Possible values:**<br> - `auto-merge deployment api` <br> - `blob edit` <br> - `branch merge api` <br> - `branches page delete button` <br> - `git refs create api` <br> - `git refs delete api` <br> - `git refs update api` <br> - `merge api` <br> - `pull request branch delete button` <br> - `pull request branch undo button` <br> - `pull request merge api` <br> - `pull request merge button` <br> - `pull request revert button` <br> - `releases delete button` <br> - `stafftools branch restore` <br> - `slumlord (#{sha})` |
|   $GIT_PUSH_OPTION_COUNT  | The number of push options that were sent by the client. For more information about push options, see "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" in the Git documentation. |
|   $GIT_PUSH_OPTION_N  | Where <em>N</em> is an integer starting at 0, this variable contains the push option string that was sent by the client. The first option that was sent is stored in GIT_PUSH_OPTION_0, the second option that was sent is stored in GIT_PUSH_OPTION_1, and so on. For more information about push options, see "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" in the Git documentation. |{% if currentVersion ver_gt "enterprise-server@2.21" %}
|   $GIT_USER_AGENT     | The user-agent string sent by the client that pushed the changes. |{% endif %}

### Setting permissions and pushing a pre-receive hook to {% data variables.product.prodname_ghe_server %}

A pre-receive hook script is contained in a repository on the {% data variables.product.prodname_ghe_server %} appliance. A site administrator must take into consideration the repository permissions and ensure that only the appropriate users have access.

We recommend consolidating hooks to a single repository. If the consolidated hook repository is public, the `README.md` can be used to explain policy enforcements. Also, contributions can be accepted via pull requests. However, pre-receive hooks can only be added from the default branch. For a testing workflow, forks of the repository with configuration should be used.

1. For Mac users, ensure the scripts have execute permissions:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  For Windows users, ensure the scripts have execute permissions:

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. Commit and push to your designated pre-receive hooks repository on the {% data variables.product.prodname_ghe_server %} instance.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. [Create the pre-receive hook](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) on the {% data variables.product.prodname_ghe_server %} instance.

### Testing pre-receive scripts locally
You can test a pre-receive hook script locally before you create or update it on your {% data variables.product.prodname_ghe_server %} appliance. One method is to create a local Docker environment to act as a remote repository that can execute the pre-receive hook.

{% data reusables.linux.ensure-docker %}

2. Create a file called `Dockerfile.dev` containing:

    ```
    FROM gliderlabs/alpine:3.3
    RUN \
      apk add --no-cache git openssh bash && \
      ssh-keygen -A && \
      sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
      adduser git -D -G root -h /home/git -s /bin/bash && \
      passwd -d git && \
      su git -c "mkdir /home/git/.ssh && \
      ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P '' && \
      mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && \
      mkdir /home/git/test.git && \
      git --bare init /home/git/test.git"

    VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
    WORKDIR /home/git

    CMD ["/usr/sbin/sshd", "-D"]
    ```

3. Create a test pre-receive script called `always_reject.sh`. This example script will reject all pushes, which is useful for locking a repository:

    ```
    #!/usr/bin/env bash

    echo "error: rejecting all pushes"
    exit 1
    ```

4. Ensure the `always_reject.sh` scripts has execute permissions:

   ```shell
   $ chmod +x always_reject.sh
  ```

5. From the directory containing `Dockerfile.dev`, build an image:

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P ' && mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private rsa key pair.
   > Your identification has been saved in /home/git/.ssh/id_rsa.
   > Your public key has been saved in /home/git/.ssh/id_rsa.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
  ```

6. Run a data container that contains a generated SSH key:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
  ```

7. Copy the test pre-receive hook `always_reject.sh` into the data container:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
  ```

8. Run an application container that runs `sshd` and executes the hook. Take note of the container id that is returned:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
  ```

9. Copy the generated SSH key from the data container to the local machine:

   ```shell
   $ docker cp data:/home/git/.ssh/id_rsa .
  ```

10. Modify the remote of a test repository and push to the `test.git` repo within the Docker container. This example uses `git@github.com:octocat/Hello-World.git` but you can use any repo you want. This example assumes your local machine (127.0.0.1) is binding port 52311, but you can use a different IP address if docker is running on a remote machine.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_rsa" git push -u test master
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] master -> master (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
  ```

  Notice that the push was rejected after executing the pre-receive hook and echoing the output from the script.

### Further reading
 - "[Customizing Git - An Example Git-Enforced Policy](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)" from the *Pro Git website*
