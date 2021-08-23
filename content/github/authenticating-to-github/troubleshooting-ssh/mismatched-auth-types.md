---
title: Mismatched auth types (https/git)
intro: 'git access can be through https or git protocols, but mismatches may show up when writing to the remote repo'
versions:
  fpt: '*'
topics:
  - SSH
shortTitle: Mismatched auth types (git vs https)
---
## Symptoms
When your preferred method of authentication with Github is SSH keys, write operations which require authentication may instead ask you for a github username and password. This is essentially an error, since Github does not support authentication by username and password. This condition occurs after you add an https (which is to say read-only) remote by running `git clone https://github.com/me/repo.git` or `git remote add remotename https://github.com/me/repo.git`. It is relatively easy to run this command by accident as Github may recommend an https URL as the default option instead of an SSH url.

## Solution
If you must write to a git repository, your remote must be specified as an SSH URL (e.g. `git@...`). To check if this is the case, run `git remote -v`. Any remotes beginning with `https://` will not be writable. Below is an example of an https remote for which writing will fail by asking for a username and password:

```shell
$ git remote -v
origin  https://github.com/me/repo.git (fetch)
origin  https://github.com/me/repo.git (push)
```

In the above example the `https` remote is read-only, and the `origin` remote is read/write. Both remotes point to the same repo.

To fix the problem with the example repo shown above you could run the following commands:

```shell
$ git remote remove origin
$ git remote add origin git@github.com/me/repo.git
$ git remote -v
origin  git@github.com:me/repo.git (fetch)
origin  git@github.com:me/repo.git (push)
```

Now when you attempt to write to the remote repo, the configured SSH key will be used.
