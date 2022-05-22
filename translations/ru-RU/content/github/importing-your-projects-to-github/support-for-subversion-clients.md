---
title: Support for Subversion clients
intro: GitHub repositories can be accessed from both Git and Subversion (SVN) clients. This article covers using a Subversion client on GitHub and some common problems that you might run into.
redirect_from:
  - /articles/support-for-subversion-clients
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub supports Subversion clients via the HTTPS protocol. We use a Subversion bridge to communicate svn commands to GitHub.

### Supported Subversion features on GitHub

#### Checkout

The first thing you'll want to do is a Subversion checkout.  Since Git clones keep the working directory (where you edit files) separate from the repository data, there is only one branch in the working directory at a time.

Subversion checkouts are different: they mix the repository data in the working directories, so there is a working directory for each branch and tag you've checked out.  For repositories with many branches and tags, checking out everything can be a bandwidth burden, so you should start with a partial checkout.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

3. Make an empty checkout of the repository:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Get the `trunk` branch. The Subversion bridge maps trunk to the Git HEAD branch.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Get an empty checkout of the `branches` directory.  This is where all of the non-`HEAD` branches live, and where you'll be making feature branches.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

#### Creating branches

You can also create branches using the Subversion bridge to GitHub.

From your svn client, make sure "master" is current by updating `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

Next, you can use `svn copy` to create a new branch:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

You can confirm that the new branch exists in the repository's branch dropdown:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

You can also confirm the new branch via the command line:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

#### Making commits to Subversion

After you've added some features and fixed some bugs, you'll want to commit those changes to GitHub. This works just like the Subversion you're used to. Edit your files, and use `svn commit` to record your changes:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

#### Switching between branches

To switch between branches, you'll probably want to start with a checkout of `trunk`:

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Then, you can switch to another branch:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

### Finding the Git commit SHA for a Subversion commit

GitHub's Subversion server exposes the Git commit sha for each Subversion commit.

To see the commit SHA, you should ask for the `git-commit` unversioned remote property.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

With this commit SHA, you can, for example, look up the corresponding Git commit on GitHub.

### Дополнительная литература

* "[Subversion properties supported by GitHub](/articles/subversion-properties-supported-by-github)"
