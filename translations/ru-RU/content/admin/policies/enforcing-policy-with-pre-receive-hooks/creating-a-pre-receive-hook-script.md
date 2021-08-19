---
title: Creating a pre-receive hook script
intro: Use pre-receive hook scripts to create requirements for accepting or rejecting a push based on the contents.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---

You can see examples of pre-receive hooks for {% data variables.product.prodname_ghe_server %} in the [`github/platform-samples` repository](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Writing a pre-receive hook script
A pre-receive hook script executes in a pre-receive hook environment on {% data variables.product.product_location %}. When you create a pre-receive hook script, consider the available input, output, exit status, and environment variables.

#### Input (`stdin`)
After a push occurs and before any refs are updated for the remote repository, the `git-receive-pack` process on {% data variables.product.product_location %} invokes the pre-receive hook script. Standard input for the script, `stdin`, is a string containing a line for each ref to update. Each line contains the old object name for the ref, the new object name for the ref, and the full name of the ref.

```
<old-value> SP <new-value> SP <ref-name> LF
```

This string represents the following arguments.

| Argument            | Description                                                                                       |
|:------------------- |:------------------------------------------------------------------------------------------------- |
| `<old-value>` | Old object name stored in the ref.<br> When you create a new ref, the value is 40 zeroes.   |
| `<new-value>` | New object name to be stored in the ref.<br> When you delete a ref, the value is 40 zeroes. |
| `<ref-name>`  | The full name of the ref.                                                                         |

For more information about `git-receive-pack`, see "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" in the Git documentation. For more information about refs, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in *Pro Git*.

#### Output (`stdout`)

The standard output for the script, `stdout`, is passed back to the client. Any `echo` statements will be visible to the user on the command line or in the user interface.

#### Exit status

The exit status of a pre-receive script determines if the push will be accepted.

| Exit-status value | Действие                   |
|:----------------- |:-------------------------- |
| 0                 | The push will be accepted. |
| non-zero          | The push will be rejected. |

#### Переменные окружения

In addition to the standard input for your pre-receive hook script, `stdin`, {% data variables.product.prodname_ghe_server %} makes the following variables available in the Bash environment for your script's execution. For more information about `stdin` for your pre-receive hook script, see "[Input (`stdin`)](#input-stdin)."

Different environment variables are available to your pre-receive hook script depending on what triggers the script to run.

- [Always available](#always-available)
- [Available for pushes from the web interface or API](#available-for-pushes-from-the-web-interface-or-api)
- [Available for pull request merges](#available-for-pull-request-merges)
- [Available for pushes using SSH authentication](#available-for-pushes-using-ssh-authentication)

##### Always available

The following variables are always available in the pre-receive hook environment.

| Variable                  | Description                                                                                                                                                                                                                                                                                                                                                                                                             | Example value                                                      |
|:------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------ |
| <pre>$GIT_DIR</pre> | Path to the remote repository on the instance                                                                                                                                                                                                                                                                                                                                                                           | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
| <pre>$GIT_PUSH_OPTION_COUNT</pre> | The number of push options that were sent by the client with `--push-option`. For more information, see "[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)" in the Git documentation.                                                                                                                                                                                    | 1                                                                  |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | Where _N_ is an integer starting at 0, this variable contains the push option string that was sent by the client. The first option that was sent is stored in `GIT_PUSH_OPTION_0`, the second option that was sent is stored in `GIT_PUSH_OPTION_1`, and so on. For more information about push options, see "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" in the Git documentation. | abcd |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| <pre>$GIT_USER_AGENT</pre> | User-agent string sent by the Git client that pushed the changes                                                                                                                                                                                                                                                                                                                                                        | git/2.0.0{% endif %}
| <pre>$GITHUB_REPO_NAME</pre> | Name of the repository being updated in _NAME_/_OWNER_ format                                                                                                                                                                                                                                                                                                                                                           | octo-org/hello-enterprise                                          |
| <pre>$GITHUB_REPO_PUBLIC</pre> | Boolean representing whether the repository being updated is public                                                                                                                                                                                                                                                                                                                                                     | <ul><li>true: Repository's visibility is public</li><li>false: Repository's visibility is private or internal</li></ul>                                          |
| <pre>$GITHUB_USER_IP</pre> | IP address of client that initiated the push                                                                                                                                                                                                                                                                                                                                                                            | 192.0.2.1                                                          |
| <pre>$GITHUB_USER_LOGIN</pre> | Username for account that initiated the push                                                                                                                                                                                                                                                                                                                                                                            | octocat                                                            |

##### Available for pushes from the web interface or API

The `$GITHUB_VIA` variable is available in the pre-receive hook environment when the ref update that triggers the hook occurs via either the web interface or the API for {% data variables.product.prodname_ghe_server %}. The value describes the action that updated the ref.

| Value                      | Действие                                                                                                                                                  | More information                                                                                                                                                                       |
|:-------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>auto-merge deployment api</pre>  | Automatic merge of the base branch via a deployment created with the API                                                                                  | "[Repositories](/rest/reference/repos#create-a-deployment)" in the REST API documentation                                                                                              |
| <pre>blob edit</pre> | Change to a file's contents in the web interface                                                                                                          | "[Editing files in your repository](/github/managing-files-in-a-repository/editing-files-in-your-repository)"                                                                          |
| <pre>branch merge api</pre> | Merge of a branch via the API                                                                                                                             | "[Repositories](/rest/reference/repos#merge-a-branch)" in the REST API documentation                                                                                                   |
| <pre>branches page delete button</pre> | Deletion of a branch in the web interface                                                                                                                 | "[Creating and deleting branches within your repository](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" |
| <pre>git refs create api</pre> | Creation of a ref via the API                                                                                                                             | "[Git database](/rest/reference/git#create-a-reference)" in the REST API documentation                                                                                                 |
| <pre>git refs delete api</pre> | Deletion of a ref via the API                                                                                                                             | "[Git database](/rest/reference/git#delete-a-reference)" in the REST API documentation                                                                                                 |
| <pre>git refs update api</pre> | Update of a ref via the API                                                                                                                               | "[Git database](/rest/reference/git#update-a-reference)" in the REST API documentation                                                                                                 |
| <pre>git repo contents api</pre> | Change to a file's contents via the API                                                                                                                   | "[Repositories](/rest/reference/repos#create-or-update-file-contents)" in the REST API documentation                                                                                   |
| <pre>merge base into head</pre> | Update of the topic branch from the base branch when the base branch requires strict status checks (via **Update branch** in a pull request, for example) | "[About protected branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)"                                                         |
| <pre>pull request branch delete button</pre> | Deletion of a topic branch from a pull request in the web interface                                                                                       | "[Deleting and restoring branches in a pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)"  |
| <pre>pull request branch undo button</pre> | Restoration of a topic branch from a pull request in the web interface                                                                                    | "[Deleting and restoring branches in a pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)"                 |
| <pre>pull request merge api</pre> | Merge of a pull request via the API                                                                                                                       | "[Pulls](/rest/reference/pulls#merge-a-pull-request)" in the REST API documentation                                                                                                    |
| <pre>pull request merge button</pre> | Merge of a pull request in the web interface                                                                                                              | "[Merging a pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)"                                                |
| <pre>pull request revert button</pre> | Revert of a pull request                                                                                                                                  | "[Reverting a pull request](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)"                                                                             |
| <pre>releases delete button</pre> | Deletion of a release                                                                                                                                     | "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)"                                                         |
| <pre>stafftools branch restore</pre> | Restoration of a branch from the site admin dashboard                                                                                                     | "[Site admin dashboard](/admin/configuration/site-admin-dashboard#repositories)"                                                                                                       |
| <pre>tag create api</pre> | Creation of a tag via the API                                                                                                                             | "[Git database](/rest/reference/git#create-a-tag-object)" in the REST API documentation                                                                                                |
| <pre>slumlord (#<em>SHA</em>)</pre> | Commit via Subversion                                                                                                                                     | "[Support for Subversion clients](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)"                                              |
| <pre>web branch create</pre> | Creation of a branch via the web interface                                                                                                                | "[Creating and deleting branches within your repository](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)" |

##### Available for pull request merges

The following variables are available in the pre-receive hook environment when the push that triggers the hook is a push due to the merge of a pull request.

| Variable                   | Description                                                                  | Example value                |
|:-------------------------- |:---------------------------------------------------------------------------- |:---------------------------- |
| <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Username of account that authored the pull request                           | octocat                      |
| <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | The name of the pull request's topic branch, in the format `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
| <pre>$GITHUB_PULL_REQUEST_BASE</pre> | The name of the pull request's base branch, in the format `USERNAME:BRANCH`  | octocat:main                 |

##### Available for pushes using SSH authentication

| Variable                   | Description                                                    | Example value                                   |
|:-------------------------- |:-------------------------------------------------------------- |:----------------------------------------------- |
| <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | The public key fingerprint for the user who pushed the changes | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

### Setting permissions and pushing a pre-receive hook to {% data variables.product.prodname_ghe_server %}

A pre-receive hook script is contained in a repository on {% data variables.product.product_location %}. A site administrator must take into consideration the repository permissions and ensure that only the appropriate users have access.

We recommend consolidating hooks to a single repository. If the consolidated hook repository is public, the `README.md` can be used to explain policy enforcements. Also, contributions can be accepted via pull requests. However, pre-receive hooks can only be added from the default branch. For a testing workflow, forks of the repository with configuration should be used.

1. For Mac users, ensure the scripts have execute permissions:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   For Windows users, ensure the scripts have execute permissions:

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. Commit and push to the designated repository for pre-receive hooks on {% data variables.product.product_location %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. [Create the pre-receive hook](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) on the {% data variables.product.prodname_ghe_server %} instance.

### Testing pre-receive scripts locally
You can test a pre-receive hook script locally before you create or update it on {% data variables.product.product_location %}. One method is to create a local Docker environment to act as a remote repository that can execute the pre-receive hook.

{% data reusables.linux.ensure-docker %}

2. Create a file called `Dockerfile.dev` containing:

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
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
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
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
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Modify the remote of a test repository and push to the `test.git` repo within the Docker container. This example uses `git@github.com:octocat/Hello-World.git` but you can use any repository you want. This example assumes your local machine (127.0.0.1) is binding port 52311, but you can use a different IP address if docker is running on a remote machine.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Notice that the push was rejected after executing the pre-receive hook and echoing the output from the script.

### Дополнительная литература
 - "[Customizing Git - An Example Git-Enforced Policy](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)" from the *Pro Git website*
