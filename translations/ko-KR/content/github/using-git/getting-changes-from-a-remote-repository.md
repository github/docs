---
title: Getting changes from a remote repository
intro: You can use common Git commands to access remote repositories.
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

These commands are very useful when interacting with [a remote repository](/articles/about-remote-repositories). `clone` and `fetch` download remote code from a repository's remote URL to your local computer, `merge` is used to merge different people's work together with yours, and `pull` is a combination of `fetch` and `merge`.

### Cloning a repository

To grab a complete copy of another user's repository, use `git clone` like this:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

You can choose from [several different URLs](/articles/which-remote-url-should-i-use) when cloning a repository. While logged in to {% data variables.product.prodname_dotcom %}, these URLs are available below the repository details:

![Remote URL list](/assets/images/help/repository/remotes-url.png)

When you run `git clone`, the following actions occur:
- A new folder called `repo` is made
- It is initialized as a Git repository
- A remote named `origin` is created, pointing to the URL you cloned from
- All of the repository's files and commits are downloaded there
- The default branch is checked out

For every branch `foo` in the remote repository, a corresponding remote-tracking branch `refs/remotes/origin/foo` is created in your local repository. You can usually abbreviate such remote-tracking branch names to `origin/foo`.

### Fetching changes from a remote repository

Use `git fetch` to retrieve new work done by other people. Fetching from a repository grabs all the new remote-tracking branches and tags *without* merging those changes into your own branches.

If you already have a local repository [with a remote URL](/articles/adding-a-remote) set up for the desired project, you can grab all the new information by using `git fetch *remotename*` in the terminal:

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

Otherwise, you can always [add a new remote](/articles/adding-a-remote) and then fetch.

### Merging changes into your local branch

Merging combines your local changes with changes made by others.

Typically, you'd merge a remote-tracking branch (i.e., a branch fetched from a remote repository) with your local branch:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

### Pulling changes from a remote repository

`git pull` is a convenient shortcut for completing both `git fetch` and `git merge`in the same command:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

Because `pull` performs a merge on the retrieved changes, you should ensure that your local work is committed before running the `pull` command. If you run into [a merge conflict](/articles/resolving-a-merge-conflict-using-the-command-line) you cannot resolve, or if you decide to quit the merge, you can use `git merge --abort` to take the branch back to where it was in before you pulled.

### 더 읽을거리

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% if currentVersion == "free-pro-team@latest" %}
- "[Troubleshooting connectivity problems](/articles/troubleshooting-connectivity-problems)"{% endif %}
