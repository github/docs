# GitHub Docs <!-- omit in toc --> 

This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).

GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## Contributing

See [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project. 

We accept different [types of contributions](https://github.com/github/docs/blob/main/contributing/types-of-contributions.md), including some that don't require you to write a single line of code.

On the GitHub Docs site, you can click the make a contribution button to open a PR(Pull Request) for quick fixes like typos, updates, or link fixes.

<img src="./assets/images/contribution_cta.png" width="400">

For more complex contributions, you can open an issue using the most appropriate [issue template](https://github.com/github/docs/issues/new/choose) to describe the changes you'd like to see. By this way you can also be a part of Open source contributor's community without even writing a single line of code.

If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/github/docs/issues) for something to work on. When ready, check out [Getting Started with Contributing](/CONTRIBUTING.md) for detailed instructions.

### Join us in discussions

We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the [discussions](https://github.com/github/docs/discussions).

### And that's it!

If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).

That's how you can easily become a member of the GitHub Documentation community. :sparkles:

## READMEs

In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
You can go through among them for specified details regarding the topics listed below.

- [content/README.md](content/README.md)
- [content/graphql/README.md](content/graphql/README.md)
- [content/rest/README.md](content/rest/README.md)
- [contributing/README.md](contributing/README.md)
- [data/README.md](data/README.md)
- [data/reusables/README.md](data/reusables/README.md)
- [data/variables/README.md](data/variables/README.md)
- [includes/liquid-tags/README.md](includes/liquid-tags/README.md)
- [includes/README.md](includes/README.md)
- [components/README.md](components/README.md)
- [lib/liquid-tags/README.md](lib/liquid-tags/README.md)
- [middleware/README.md](middleware/README.md)
- [script/README.md](script/README.md)
- [stylesheets/README.md](stylesheets/README.md)
- [tests/README.md](tests/README.md)

## License

The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under the [MIT license](LICENSE-CODE).

When you are using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

## Thanks :purple_heart:

Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you being part of our :sparkles: community :sparkles: !
Hello and welcome back to the command line. This is a doozy of a release, so strap in.

Precompiled extensions
We've made a significant change to gh's extension system. Now, extension authors can work in a precompiled language like Go and ship pre-compiled binaries of their extensions via release assets.

For a full tour of this new support, check out our demo video.

We've added scaffolding and helpers to make it a first class experience when working in Go, though of course any compiled binaries will work just fine as long as they are uploaded to a release with the expected naming scheme.

To assist with releasing precompiled extensions (Go or otherwise), we've created an action that helps automates the building and release process.

To get started, run gh extension create.

fix binary extensions on windows by @vilmibm in #4717
binary extension migration by @vilmibm in #4588
make extension create binary aware by @vilmibm in #4718
Extensions create 💅 by @mislav in #4802
go-gh
We've open sourced a small Go library called go-gh. Its goal is to make it easer for extension authors to take advantage of some gh features directly in Go code. Check out the repository to learn more or watch the precompiled extension demo.

New repo create interface
The gh repo create command now has distinct usages for creating a repository from scratch and creating one from a local git repository.

Create a new repository on GitHub from scratch and clone it locally with

$ gh repo create myrepo --public --clone
Upload an existing local repository with

$ gh repo create myrepo --source=path/to/repo --public
Breaking Changes:

gh repo create will not behave differently inside a local git repository.
gh repo create will only prompt interactively when run with no arguments. Otherwise, all arguments should be passed explicitly.
For more information, see gh help repo create

rewrite gh repo create by @meiji163 in #4578
Codespaces updates
Fix codespace code command under WSL by @mislav in #4747
Inherit API endpoint configuration from the Codespaces environment by @marwan-at-work in #4723
Remove the default value from idle-timeout by @reybard in #4756
Support listing and removing user Codespaces secrets by @joshmgross in #4714
Support setting user Codespaces secrets by @joshmgross in #4699
Add idle_timeout_minutes as possible cs create param by @reybard in #4741
Adds a timeout context to the ssh waiter to prevent indefinite hanging by @reybard in #4635
Rename errors from Live Share to generic codespace by @josebalius in #4705
Add prebuild availability status to create codespaces by @adnamalin in #4737
Other new features
Add command gh auth setup-git for setting up gh-cli as git cred helper by @despreston in #4246
Add gh config list by @meiji163 in #4729
Add new flag gh secret set --no-store to print the encoded secret by @sguzmanm in #4423
Adding release download for.zip and .tar.gz archives by @lpessoa in #4489
gh repo rename by @pxrth9 in #4450
Bugfixes
Ignore scope suggestions for http 422 by @despreston in #4809
pr diff color output fixes by @mislav in #4833
PR merge should, after switching branches, pull by @pxrth9 in #4748
Don't swallow duplicate SSH key error by @despreston in #4807
gh pr merge fails to delete remote branch if $PWD is not a git repository by @pxrth9 in #4769
Fix up bug in RemoveEntry and add tests for config_map by @samcoe in #4784
Escape workflow information when generating URLs by @samcoe in #4760
Confirm name change before creating a repo with special characters by @bchadwic in #4562
encode gh browse output URL by @bchadwic in #4663
add base repo resolution to gh repo archive by @meiji163 in #4654
add base repo resolution to gh repo delete by @meiji163 in #4655
Fix stack overflow in AddJSONFlags by @rsteube in #4614
Fix rendering issue in "formatting" help topic by @pbnj in #4661
fix branch flag on browse within dir by @bstncartwright in #4676
Docs, developer, and performance improvements
Generate Go 1.17-style go:build directives by @mislav in #4838
Bump github.com/itchyny/gojq from 0.12.5 to 0.12.6 by @dependabot in #4832
some automation by @vilmibm in #4810
Improve issue view re: overfetching, PR support by @mislav in #4803
Improve queries in issue commands: no overfetching, support PR arguments by @mislav in #4794
Bump github.com/mattn/go-colorable from 0.1.11 to 0.1.12 by @dependabot in #4804
Replace shurcool/graphql with cli/shurcool-graphql by @samcoe in #4750
update help for magic type conversion #4365 by @signalwerk in #4434
fix angle brackets in man pages by @meiji163 in #4752
Overhaul manual pages for the web by @mislav in #4675
Fix CODEOWNERS for codespaces by @mislav in #4728
Don't use gpg in Debian instruction by @TobiX in #4610
Bump bluemonday to silence the security alert by @mislav in #4607
New Contributors
@pbnj made their first contribution in #4661
@reybard made their first contribution in #4635
@bstncartwright made their first contribution in #4676
@TobiX made their first contribution in #4610
@adnamalin made their first contribution in #4737
@signalwerk made their first contribution in #4434
@lpessoa made their first contribution in #4489
@sguzmanm made their first contribution in #4423
Full Changelog: v2.2.0...v2.3.0
