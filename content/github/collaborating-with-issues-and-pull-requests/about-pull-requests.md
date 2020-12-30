---
title: About pull requests
intro: 'Pull requests let you tell others about changes you''ve pushed to a branch in a repository on {% data variables.product.product_name %}. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
redirect_from:
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About pull requests

{% note %}

**Note:** When working with pull requests, keep the following in mind:
* If you're working in the [shared repository model](/articles/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.Skip to the content
Errietta's blog ☕
My thoughts on software engineering
Menu
Why I love contributing to open source software
erriettaOctober 5, 20147 Commentson Why I love contributing to open source software
I’m a generally quiet person, but if you ask me about open source projects, I’ll go on about them forever (I even had someone interview me about it). So, I thought I should finally get all of my honest thoughts down on my own blog as well!

freenode (or the biggest reason why I got into open source)
freenode is an IRC network dedicated to open source and peer-directed project development. It enables open source project developers to get together and discuss their work, and also provide support to their users.

I started supporting users in #freenode because I was bored in summer 2011 (literally because I was bored), then I realised I quite enjoyed it, so I just kept doing it (to the expense of my high school studies… it will be a cold day down below before I mention high school on this blog again.) Anyway, I was eventually offered to become staff, which I accepted, and I’ve been staff ever since. I’m not sure why anyone would enjoy to spend countless hours just supporting freenode users with any questions they have without expecting anything in return, but I loved it then and I love it now! I think freenode is awesome, because it helps bring many open source projects, companies and non-profits together with their users and assist in collaboration.

My role as a staff member involves helping representatives of on-topic projects manage their community on freenode, and helping other users with finding their way around and using the network.

I’m also involved with working on developing their group management system, which when deployed will help make project affiliation with freenode a lot easier. Groups will just be able to give us some information and perform verification on a website which will track requests, rather than having to manually do this with a staff member. They will also be able to take over channels for their users and perform other currently manual tasks through the portal.

Working on it helped me a lot, because I earned many of the skills I later used for my studies in University and my actual job. That’s another thing about me, I think working on open source projects ultimately helps me as much as it helps the project, at least most of the time!

Mozilla, webmaker, etc.
I also contribute to Mozilla’s projects. I fixed a few bugs for Firefox and Firefox for Mobile at first, but then I discovered webmaker, mostly thanks to social coding for good which pointed me to that project. Webmaker was easier and nicer for me to contribute to, because it used technologies I like and use, so it “stuck”. I also love Webmaker because of its goal – to provide web literacy all over the world! I think it’s extremely important because there are so many Internet users, and many of them would have their lives greatly improve if they could use the web to make ideas from their imagination come true and to express themselves. As with past open source projects, it helped me learn more about angularjs shortly before I started an angular project at work, so it was also helpful to me!

As a code contributor for webmaker, I look for bugs or feature requests filed by Mozilla employees and other contributors and resolve some of them.

I also have the unique opportunity to attend weekly demos, seeing what everyone else in the project has been up to, and even presenting my own work! This is really awesome for me because I get the opportunity to see amazing technologies in use and learn about how they were used.

Eventually I even started reviewing bugs for other contributors and Mozilla employees and mentoring bugs for new contributors, helping people get started on the project, which is also extremely rewarding and I’m really glad I get to do!

In general, I really love open source software. I think they always help people one way or another – after all, just by publishing your code so that everyone can see it you enable them to get ideas and learn (and in return you may get contributors from people who want to see their enhancements in your project!). I like contributing to certain open source projects, because they’re projects I use and/or care about, because it improves my skills, because I want a feature implemented or bug fixed so I fix it myself, because the community is awesome, and because I like being a small part of something big and awesome! I think it’s a good use of my time and knowledge, both for my own development and the community. Because of this, I plan to keep contributing for years to come!

 Posted In Open source
7 Comments
gopi
December 8, 2015 at 19:40
Thanks for sharing !! 🙂 Hope to get your guidance in case of doubts.

Reply
Melissa
May 20, 2020 at 03:20
Yes

Reply
Ivan
May 5, 2017 at 07:27
Thank you for being real! 😉

Reply
Dread Knight
October 3, 2017 at 11:23
Nice article, great to see another open source lover and to find out about Code Alliance, I’ll give it a try as I’m building a NPO that’s all about making free open source games (web based essentially) and promoting open source software, so I could use some volunteers to help out with code and such. I hope it will work out and that my NPO will become a partner later down the road. Thanks and keep up the good work, open source FTW! <3

Reply
mfct
August 13, 2018 at 05:47
Sir, please help me develop the project together.

Reply
Mahdi
June 24, 2019 at 01:49
Win&win

Reply
Tomtam
May 31, 2020 at 20:34
I am currently working on the same but I will be able to make it to the end of the course as soon as possible.

Reply
Leave a Reply
Your email address will not be published. Required fields are marked *

Comment

Name *
Email *
Website

 Save my name, email, and website in this browser for the next time I comment.

This site uses Akismet to reduce spam. Learn how your comment data is processed.

Search for:
Search …
Recent Posts
Python argparse cheat sheet
Documenting a Django API with OpenAPI and Dataclasses
13 ways the Internet is broken
New WP install for this site
Making Jenkins Behave 2: Electric Boogaloo
Meta
Log in
Entries feed
Comments feed
WordPress.org
Categories
android
angularjs
AWS
Browsers
chrome
CI
Cordova
CSS
debugging
es6
General software engineering
HTML
IRC
java
JavaScript
jenkins
Linux
localisation
nodejs
Open source
perl
PHP
Python
Raspberry pi
Scratch
STEMnet
Typescript
web development
Copyright © 2020. Errietta's blog ☕
Powered By WordPress and Individuality
* When pushing commits to a pull request, don't force push. Force pushing can corrupt your pull request.

{% endnote %}

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](/articles/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request.

{% if currentVersion == "free-pro-team@latest" %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](/articles/viewing-deployment-activity-for-your-repository)."
{% endif %}

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](/articles/merging-a-pull-request)."

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About pull request merges](/articles/about-pull-request-merges)."

{% endtip %}

You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

### Draft pull requests

{% data reusables.gated-features.draft-prs %}

When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a pull request](/articles/creating-a-pull-request)" and "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)."

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. For more information, see "[Changing the stage of a pull request](/articles/changing-the-stage-of-a-pull-request)."

### Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref. 
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

### Further reading

- "[Pull request](/articles/github-glossary/#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/articles/about-branches)"
- "[Commenting on a pull request](/articles/commenting-on-a-pull-request)"
- "[Merging a pull request](/articles/merging-a-pull-request)"
- "[Closing a pull request](/articles/closing-a-pull-request)"
- "[Deleting unused branches](/articles/deleting-unused-branches)"
- "[About pull request merges](/articles/about-pull-request-merges)"
