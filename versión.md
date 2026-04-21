
# Welcome to Rails

## What's Rails?

Rails is a web application framework that includes everything needed to
create database-backed web applications according to the
[Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model-view-controller)
pattern.

Understanding the MVC pattern is key to understanding Rails. MVC divides your
application into three layers: Model, View, and Controller, each with a specific responsibility.

## Model layer

The _**Model layer**_ represents the domain model (such as Account, Product,
Person, Post, etc.) and encapsulates the business logic specific to
your application. In Rails, database-backed model classes are derived from
`ActiveRecord::Base`. [Active Record](activerecord/README.rdoc) allows you to present the data from
database rows as objects and embellish these data objects with business logic
methods.
Although most Rails models are backed by a database, models can also be ordinary
Ruby classes, or Ruby classes that implement a set of interfaces as provided by
the [Active Model](activemodel/README.rdoc) module.

## View layer

The _**View layer**_ is composed of "templates" that are responsible for providing
appropriate representations of your application's resources. Templates can
come in a variety of formats, but most view templates are HTML with embedded
Ruby code (ERB files). Views are typically rendered to generate a controller response
or to generate the body of an email. In Rails, View generation is handled by [Action View](actionview/README.rdoc).

## Controller layer

The _**Controller layer**_ is responsible for handling incoming HTTP requests and
providing a suitable response. Usually, this means returning HTML, but Rails controllers
can also generate XML, JSON, PDFs, mobile-specific views, and more. Controllers load and
manipulate models, and render view templates in order to generate the appropriate HTTP response.
In Rails, incoming requests are routed by Action Dispatch to an appropriate controller, and
controller classes are derived from `ActionController::Base`. Action Dispatch and Action Controller
are bundled together in [Action Pack](actionpack/README.rdoc).

## Frameworks and libraries

[Active Record](activerecord/README.rdoc), [Active Model](activemodel/README.rdoc), [Action Pack](actionpack/README.rdoc), and [Action View](actionview/README.rdoc) can each be used independently outside Rails.

In addition to that, Rails also comes with:

- [Action Mailer](actionmailer/README.rdoc), a library to generate and send emails
- [Action Mailbox](actionmailbox/README.md), a library to receive emails within a Rails application
- [Active Job](activejob/README.md), a framework for declaring jobs and making them run on a variety of queuing backends
- [Action Cable](actioncable/README.md), a framework to integrate WebSockets with a Rails application
- [Active Storage](activestorage/README.md), a library to attach cloud and local files to Rails applications
- [Action Text](actiontext/README.md), a library to handle rich text content
- [Active Support](activesupport/README.rdoc), a collection of utility classes and standard library extensions that are useful for Rails, and may also be used independently outside Rails

## Getting Started

1. Install Rails at the command prompt if you haven't yet:

        ```bash
        $ gem install rails
        ```

2. At the command prompt, create a new Rails application:

        ```bash
        $ rails new myapp
        ```

   where "myapp" is the application name.

3. Change directory to `myapp` and start the web server:

        ```bash
        $ cd myapp
        $ bin/rails server
        ```
   Run with `--help` or `-h` for options.

4. Go to `http://localhost:3000` and you'll see the Rails bootscreen with your Rails and Ruby versions.

5. Follow the guidelines to start developing your application. You may find
   the following resources handy:
    * [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html)
    * [Ruby on Rails Guides](https://guides.rubyonrails.org)
    * [The API Documentation](https://api.rubyonrails.org)

## Contributing

We encourage you to contribute to Ruby on Rails! Please check out the
[Contributing to Ruby on Rails guide](https://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html) for guidelines about how to proceed. [Join us!](https://contributors.rubyonrails.org)

Trying to report a possible security vulnerability in Rails? Please
check out our [security policy](https://rubyonrails.org/security) for
guidelines about how to proceed.

Everyone interacting in Rails and its sub-projects' codebases, issue trackers, chat rooms, and mailing lists is expected to follow the Rails [code of conduct](https://rubyonrails.org/conduct).

## License

Ruby on Rails is released under the [MIT License](https://opensource.org/licenses/MIT).
# Releasing Rails

In this document, we'll cover the steps necessary to release Rails. Each
section contains steps to take during that time before the release. The times
suggested in each header are just that: suggestions. However, they should
really be considered as minimums.

## 10 Days before release

Today is mostly coordination tasks. Here are the things you must do today:

### Is the CI green? If not, make it green. (See "Fixing the CI")

Do not release with a Red CI. You can find the CI status here:

```
https://buildkite.com/rails/rails
```

### Do we have any Git dependencies? If so, contact those authors.

Having Git dependencies indicates that we depend on unreleased code.
Obviously Rails cannot be released when it depends on unreleased code.
Contact the authors of those particular gems and work out a release date that
suits them.

### Announce your plans to the rest of the team on Basecamp

Let them know of your plans to release.

### Update each CHANGELOG.

Many times commits are made without the CHANGELOG being updated. You should
review the commits since the last release, and fill in any missing information
for each CHANGELOG.

You can review the commits for the 3.0.10 release like this:

```
[aaron@higgins rails (3-0-10)]$ git log v3.0.9..
```

If you're doing a stable branch release, you should also ensure that all of
the CHANGELOG entries in the stable branch are also synced to the main
branch.

## Day of release

If making multiple releases. Publish them in order from oldest to newest, to
ensure that the "greatest" version also shows up in npm and GitHub Releases as
"latest".

### Put the new version in the RAILS_VERSION file.

Include an RC number if appropriate, e.g. `6.0.0.rc1`.

### Build and test the gem.

Run `rake install` to generate the gems and install them locally. You can now
use the version installed locally to generate a new app and check if everything
is working as expected.

This will stop you from looking silly when you push an RC to rubygems.org and
then realize it is broken.

### Check credentials for GitHub

For GitHub run `gh auth status` to check that you are logged in (run `gh login` if not).

The release task will sign the release tag. If you haven't got commit signing
set up, use https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work as a
guide. You can generate keys with the GPG suite from here: https://gpgtools.org.

Run `rake prep_release` to prepare the release. This will populate the gemspecs and
npm package.json with the current RAILS_VERSION, add the header to the CHANGELOGs,
build the gems, and check if bundler can resolve the dependencies.

You can now inspect the results in the diff and see if you are happy with the
changes.

To release, Run `rake release`. This will commit the changes, tag it, and create a GitHub
release with the proper release notes in draft mode.

Open the corresponding GitHub release draft and check that the release notes
are correct. If everything is fine, publish the release.

### Publish the gems

To publish the gems approve the [Release workflow in GitHub Actions](https://github.com/rails/rails/actions/workflows/release.yml),
that was created after the release was published.

### Send Rails release announcements

Write a release announcement that includes the version, changes, and links to
GitHub where people can find the specific commit list. Here are the mailing
lists where you should announce:

* [rubyonrails-core](https://discuss.rubyonrails.org/c/rubyonrails-core)
* [rubyonrails-talk](https://discuss.rubyonrails.org/c/rubyonrails-talk)

Use Markdown format for your announcement. Remember to ask people to report
issues with the release candidate to the rubyonrails-core forum.

NOTE: For patch releases, there's a `rake announce` task to generate the release
post. It supports multiple patch releases too:

```
VERSIONS="5.0.5.rc1,5.1.3.rc1" rake announce
```

IMPORTANT: If any users experience regressions when using the release
candidate, you *must* postpone the release. Bugfix releases *should not*
break existing applications.

### Post the announcement to the Rails blog.

The blog at https://rubyonrails.org/blog is built from
https://github.com/rails/website.

Create a file named like
`_posts/$(date +'%F')-Rails-<versions>-have-been-released.markdown`

Add YAML frontmatter
```
---
layout: post
title: 'Rails <VERSIONS> have been released!'
categories: releases
author: <your handle>
published: true
date: <YYYY-MM-DD or `date +%F`>
---
```

Use the markdown generated by `rake announce` earlier as a base for the post.
Add some context for users as to the purpose of this release (bugfix/security).

If this is a part of the latest release series, update `_data/version.yml` so
that the homepage points to the latest version.

### Post the announcement to the Rails X account.

## Security releases

### Emailing the Rails security announce list

Email the security announce list once for each vulnerability fixed.

You can do this, or ask the security team to do it.

Email the security reports to:

* rubyonrails-security@googlegroups.com
* oss-security@lists.openwall.com

Be sure to note the security fixes in your announcement along with CVE numbers
and links to each patch. Some people may not be able to upgrade right away,
so we need to give them the security fixes in patch form.

* Blog announcements
* X announcements
* Merge the release branch to the stable branch
* Drink beer (or other cocktail)

## Misc

### Fixing the CI

There are two simple steps for fixing the CI:

1. Identify the problem
2. Fix it

Repeat these steps until the CI is green.
version 6.0
* Default configurations is set for now by Edgarruiz856 extension.json
* Hook "userCan" (deprecated MW 1.35+) was replaced by "getUserPermissionsErrors"
* Global variable $wgUser (deprecated in MW 1.35+) changed by call RequestContext::getMain()->getUser()
  and direct access to the parameters  (deprecated in MW 1.37+) was changed to use of the methods.
* It's same for the class Title, where was changed call for create page from 'makeTitle' to 'makeTitleSafe'
* Class 'MWNamespace' (deprecated in MW 1.34+) replaced by class 'NamespaceInfo'.
* Fix condition for state, if is disallowed access to any special page for the anonymous users.
* Fix in regular expression for the Namespace detect.

version 5.x
* This version was skipped because there were unsupported forks based a branch version 2.6, versioned as 5.x

version 4.1 (form-support)
* Fix for task T281848

version 4.0 (form-support)
* Used hook "EditPage::attemptSave" to protect before save changes if is the self changes page included.

version 3.0.2 (form-support)
* New message 'accescontrol-readonly' in i18 directory
* README file, with info about basic configuration before activation
* AccessControl.cs.xml – wiki manual page for extension (in czech language)

version 3.0.1 (form-support)
* Patch for deny edit access over visualeditor, proposed by user HtheChemist and tested by
  Nicolas Nallet with MediaWiki 1.34.0

version 3.0 (form-support)
* Completly rewrited for templates support by Aleš Kapica
* New syntax for accesslists
* Old syntax is still supported
* Used hook "ParserBeforeStrip" to secure content of pages included by DPL
* Used hook "ModifyExportQuery" to protection page before export
* Used hook "ShowSearchHit" to hide results of pages with hits
* Removed hook:
    UnknownAction (obsolete)
* New variables:
    $wgAccessControlNamespaces Array of numeric values of the namespaces with the accesslists
    $wgAccessToHistory Can allow read history or wiki content of unprotected pages for anonymous users

version 2.6
* Added support for PHP codesniffer checks, internal restructuring of code by Siebrand Mazeland
* Fixes to the above change by Thomas Mulhall

version 2.5
* Actualization of description header
* Fix for uninitialize an variable $rights in function wfFromTemplates() and repair of indents in code
* New the variable $wgAccessControlRedirect to allow set display of search results (default is false)
* New language string accesscontrol-info-box in i18n localization file

version 2.4.1
* minor fix in german translationfile
* cosmetic fixes to avoid code style errors

version 2.4.0
* Migrate to JSON i18n

verison 2.3
* Fixed function wfDoRedirect() and wfFromTemplates()
* Removed unused messages from localization file
* New function wfOnUnknownAction()

version 2.2
* Fix for MediaWiki >= 1.21 by unknown AccessControl user

version 2.1
* Fixed security problem with insert protected page, or template

version 2.0
* Completly rewrited for MediaWiki >= 1.18 by Aleš Kapica
* Removed not used variables:
    $wgAccessControlDebug
    $wgAccessControlDebugFile
    $wgAllowInfo
    $wgAllowUserList
    $wgAccessControlMessages

version 1.3
* Gabor Simon fixed problem in function wfGetUsersFromPages()
* Applying patch from Stephan Herrmann

version 1.2
* Fixed errors in parameter function wfDoControlUserAccess()
* Repairing while lopp in function getContentTag()

version 1.1
* Fixed security bug with accessibility on protected page over #REDIRECT

version 1.0
* Refactored all code
* Added localization file
* Changed separator on one comma (from double)
* Readonly access is can not only group, but user too

version 0.8
*Fixes for hook errors in MediaWiki 1.11.0 included
*Support for the Group of anonymous users added
*UNIQ/QUINU-Bug kind of fixed (own Link-Parser)

version 0.7
*now it's possible to have read-only groups.
*set the english language as default
*refactored some functions for better readability
*it's now possible to use the internal groups from MediaWiki
*Added a TODO-Document

version 0.6
*Bugfix release, touching the article didn't work, so I use a header redirect (bad hack, but works).
*works now also for anonymous users

version 0.5
*Articles with the accesscontrol tag are now touched in advance to displaying it, so the page will not read from the cache
*removed some development junk ;-)
*better documentation of the accesscontrolSettings.php
*added some debugging code

version 0.4
*tested in Version 1.8.2
*added some Tips
*if more then one group is in the <accesscontrol> tag, all groups are now displayed
*there is now an option, where you can turn off the behaviour, that users in the sysop group can see restricted pages
*the "access is allowed only for group..." text is now in the accesscontrolSettings.php for easier localisation

version 0.3
*access is now also controlled for editing the pages (if you access it manually per action=edit in the URL)
*only sysops can now view and edit the "Usergroup:.." pages
*added a changelog ;-)

version 0.2
*some fixes, to make it work under Version 1.7.1
*Sysops can now always access pages, so if you make an error, you have always the opportunity to correct it ;-)

version 0.1
first Version