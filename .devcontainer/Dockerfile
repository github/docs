# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
Home
Pages Classes Methods
Search
Pages
CONTRIBUTING
History
MIT-LICENSE
README
command_line_usage
glossary
proto_rake
rakefile
rational
Class and Module Index
FileUtils
Module
Object
Rake::Application
Rake::DSL
Rake::DefaultLoader
Rake::EarlyTime
Rake::FileCreationTask
Rake::FileList
Rake::FileTask
Rake::FileUtilsExt
Rake::InvocationChain
Rake::InvocationChain::EmptyInvocationChain
Rake::InvocationExceptionMixin
Rake::LateTime
Rake::LinkedList
Rake::LinkedList::EmptyLinkedList
Rake::MakefileLoader
Rake::MultiTask
Rake::NameSpace
Rake::PackageTask
Rake::PrivateReader
Rake::RakeFileUtils
Rake::RuleRecursionOverflowError
Rake::Scope
Rake::Task
Rake::TaskArgumentError
Rake::TaskArguments
Rake::TaskLib
Rake::TaskManager
Rake::TestTask
Rake::Win32
String
RAKE – Ruby Make
home
github.com/ruby/rake

bugs
github.com/ruby/rake/issues

docs
ruby.github.io/rake

Description
Rake is a Make-like program implemented in Ruby. Tasks and dependencies are specified in standard Ruby syntax.

Rake has the following features:

Rakefiles (rake's version of Makefiles) are completely defined in standard Ruby syntax. No XML files to edit. No quirky Makefile syntax to worry about (is that a tab or a space?)

Users can specify tasks with prerequisites.

Rake supports rule patterns to synthesize implicit tasks.

Flexible FileLists that act like arrays but know about manipulating file names and paths.

A library of prepackaged tasks to make building rakefiles easier. For example, tasks for building tarballs. (Formerly tasks for building RDoc, Gems, and publishing to FTP were included in rake but they're now available in RDoc, RubyGems, and rake-contrib respectively.)

Supports parallel execution of tasks.

Installation
Gem Installation
Download and install rake with the following.

gem install rake
Usage
Simple Example
First, you must write a “Rakefile” file which contains the build rules. Here's a simple example:

task default: %w[test]

task :test do
  ruby "test/unittest.rb"
end
This Rakefile has two tasks:

A task named “test”, which – upon invocation – will run a unit test file in Ruby.

A task named “default”. This task does nothing by itself, but it has exactly one dependency, namely the “test” task. Invoking the “default” task will cause Rake to invoke the “test” task as well.

Running the “rake” command without any options will cause it to run the “default” task in the Rakefile:

% ls
Rakefile     test/
% rake
(in /home/some_user/Projects/rake)
ruby test/unittest.rb
....unit test output here...
Type “rake –help” for all available options.

Resources
Rake Information
Rake command-line

Writing Rakefiles

The original Rake announcement

Rake glossary

Presentations and Articles about Rake
Avdi Grimm's rake series:

Rake Basics

Rake File Lists

Rake Rules

Rake Pathmap

File Operations

Clean and Clobber

MultiTask

Jim Weirich’s 2003 RubyConf presentation

Martin Fowler's article on Rake: martinfowler.com/articles/rake.html

Other Make Re-envisionings …
Rake is a late entry in the make replacement field. Here are links to other projects with similar (and not so similar) goals.

directory.fsf.org/wiki/Bras – Bras, one of earliest implementations of “make in a scripting language”.

www.a-a-p.org – Make in Python

ant.apache.org – The Ant project

search.cpan.org/search?query=PerlBuildSystem – The Perl Build System

www.rubydoc.info/gems/rant/0.5.7/frames – Rant, another Ruby make tool.

Credits
Jim Weirich
Who originally created Rake.

Ryan Dlugosz
For the initial conversation that sparked Rake.

Nobuyoshi Nakada <nobu@ruby-lang.org>
For the initial patch for rule support.

Tilman Sauerbeck <tilman@code-monkey.de>
For the recursive rule patch.

Eric Hodel
For aid in maintaining rake.

Hiroshi SHIBATA
Maintainer of Rake 10.X and Rake 11.X

License
Rake is available under an MIT-style license.

Copyright © Jim Weirich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Other stuff
Author
Jim Weirich <jim.weirich@gmail.com>

Requires
Ruby 2.0.0 or later

License
Copyright Jim Weirich. Released under an MIT-style license. See the MIT-LICENSE file included in the distribution.

Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the implied warranties of merchantability and fitness for a particular purpose.

Historical
Rake was originally created by Jim Weirich, who unfortunately passed away in February 2014. This repository was originally hosted at github.com/jimweirich/rake, however with his passing, has been moved to ruby/rake.

You can view Jim's last commit here: github.com/jimweirich/rake/tree/336559f28f55bce418e2ebcc0a57548dcbac4025

You can read more about Jim at Wikipedia.

Thank you for this great tool, Jim. We'll remember you.

Validate

Generated by RDoc 6.3.1.

Based on Darkfish by Michael Granger.
