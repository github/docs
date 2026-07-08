refs/heads/master - gitiles - Git at Google
gerrit/gitiles/refs/heads/master

commit
1ffd4a1f72a4ba13f2e3a3c544c1428caaa2e330

[log] [tgz]

author
Jackson Toeniskoetter <jackdt@google.com>

Tue Mar 31 14:40:08 2026 -0700

committer
Jackson Toeniskoetter <jackdt@google.com>

Wed Apr 01 15:37:38 2026 -0700

tree
afae0143659f5371cb3f2e00b3f590d3401dfbc0

parent
d113c2721180bc0fe0da07950a4326e7bc4f5c3a [diff]

In ViewFilter, if a revision cannot be found then throw an exception
instead of returning null.

Change-Id: I9c00409c67688d319f6c440afa4ad73fb5ecb7a9
java/com/google/gitiles/ViewFilter.java[diff]
javatests/com/google/gitiles/ViewFilterTest.java[diff]
2 files changed

tree: afae0143659f5371cb3f2e00b3f590d3401dfbc0

.settings/
Documentation/
java/
javatests/
lib/
modules/
resources/
tools/
fake_pom_install.xml ⇨ fake_pom_deploy.xml
.bazelrc
.bazelversion
.gitignore
.gitmodules
.mailmap
.zuul.yaml
BUILD
COPYING
fake_pom_deploy.xml
navbar.md
README.md
version.bzl
WORKSPACE
README.md

Gitiles - A simple JGit repository browser
Gitiles is a simple repository browser for Git repositories, built on JGit. Its guiding principle is simplicity: it has no formal access controls, no write access, no fancy Javascript, etc.

Gitiles automatically renders *.md Markdown files into HTML for simplified documentation. Refer to the Markdown documentation for details.

Configuration
Gitiles is configurable in a git-style configuration file named gitiles.config. Refer to the configuration documentation for details.

Bugs
Use gerrit's issue tracker to file bugs.

Contributing to Gitiles
Please refer to the Developer Guide.