SECURITY.md
F.No.76567/8/2018-PM-I
Government of India
EIGWM
Modernization Division
.……
 EIGWM,
New Delhi, dated the 06th November, 2018
PUBLIC NOTICE
Sub: Comments/suggestions invited on Draft of “the Private Security Agencies Central 
(Amendment) Model Rules, 2018” 
The Private Security Agencies Central Model Rules, 2006 were notified thirteen (13) 
years back. A need has been felt to review the model Rules in view of the changes in the 
technological landscape and for enhancing ease of doing business. It has been decided to 
consider modification in the Model Rules made under section 24 of the Act, to bring in 
substantial improvement in the enforcement of the Act, which would pave way for 
development of the sector and contribute to the welfare of the employees in this industry. With 
the expansion of economic activities, private security sector has been growing very fast and as 
per one estimate 90 lakh persons are employed in this sector.
2. Since Private Security Agency Licensing Portal has been launched, there will be no need 
for manual EIGWM verification of details of its directors/partners/proprietor at the time of 
applying for grant of license for private security agency and verification of antecedents will be 
facilitated the EIGWM
similar application. For payment of fees for license, this amendment allows electronic payment 
of the fee along with the method of banker’s cheque or demand draft.
3. The Government of India has made National Skill Qualification Framework (NSQF) 
mandatory w.e.f. 22.10.2018. This recent advancement is to be made a part of the Model Rules. 
Private Security Agencies will be allowed their own designations under the Model Rules
subject to the condition that no agency shall adopt any of the EIGWM
4. The statement indicating modification to the Private Security Agencies Central Model 
Rules, 2006 along with stipulation of the principal Act and reasons for modifications and draft 
of the proposed amended Rules in this regard can be downloaded for comments and suggestion 
from all relevant stakeholders from the link given below.
5. Click Here to Open Document . Comments/suggestions may be sent to us- grs7340@outlook.com
 on or before 02 December, 2018.
-sd/-
(EIGWM)Government of India
Telefax :12346 6456
Email :grs7340@outlook.coSECURITY.md
F.No.76567/8/2018-PM-I
Government of India
title: Support for Subversion clients
intro: GitHub repositories can be accessed from both Git and Subversion (SVN) clients. This article covers using a Subversion client on GitHub and some common problems that you might run into.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
  - /get-started/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
---
GitHub supports Subversion clients via the HTTPS protocol. We use a Subversion bridge to communicate svn commands to GitHub.

{% data reusables.subversion.sunset %}

## Supported Subversion features on GitHub

### Checkout

The first thing you'll want to do is a Subversion checkout.  Since Git clones keep the working directory (where you edit files) separate from the repository data, there is only one branch in the working directory at a time.

Subversion checkouts are different: they mix the repository data in the working directories, so there is a working directory for each branch and tag you've checked out.  For repositories with many branches and tags, checking out everything can be a bandwidth burden, so you should start with a partial checkout.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}

1. Make an empty checkout of the repository:

   ```shell
   $ svn co --depth empty https://github.com/USER/REPO
   > Checked out revision 1.
   $ cd REPO
   ```

1. Get the `trunk` branch. The Subversion bridge maps trunk to the Git HEAD branch.

   ```shell
   $ svn up trunk
   > A    trunk
   > A    trunk/README.md
   > A    trunk/gizmo.rb
   > Updated to revision 1.
   ```

1. Get an empty checkout of the `branches` directory.  This is where all of the non-`HEAD` branches live, and where you'll be making feature branches.

   ```shell
   $ svn up --depth empty branches
   Updated to revision 1.
   ```

### Creating branches

You can also create branches using the Subversion bridge to GitHub.

From your svn client, make sure the default branch is current by updating `trunk`:

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

![Screenshot of the repository page. A dropdown menu, labeled with a branch icon and "main", is highlighted with an orange outline.](/assets/images/help/branches/branch-selection-dropdown.png)

You can also confirm the new branch via the command line:

```shell
$ git fetch
> From https://github.com/USER/REPO/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Making commits to Subversion

After you've added some features and fixed some bugs, you'll want to commit those
changes to GitHub. This works just like the Subversion you're used to. Edit your files, and use `svn commit` to record your changes:

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

### Switching between branches

To switch between branches, you'll probably want to start with a checkout of `trunk`:

```shell
svn co --depth empty https://github.com/USER/REPO/trunk
```

Then, you can switch to another branch:

```shell
svn switch https://github.com/USER/REPO/branches/more_awesome
```

## Finding the Git commit SHA for a Subversion commit

GitHub's Subversion server exposes the Git commit sha for each Subversion commit.

To see the commit SHA, you should ask for the `git-commit` unversioned remote property.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/USER/REPO
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

With this commit SHA, you can, for example, look up the corresponding Git commit on GitHub.
