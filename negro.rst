Black 26.3.0 documentation
The uncompromising code formatter¶
“Any color you like.”

By using Black, you agree to cede control over minutiae of hand-formatting. In return, Black gives you speed, determinism, and freedom from pycodestyle nagging about formatting. You will save time and mental energy for more important matters.

Black makes code review faster by producing the smallest diffs possible. Blackened code looks the same regardless of the project you’re reading. Formatting becomes transparent after a while and you can focus on the content instead.

Try it out now using the Black Playground.

Note - Black is now stable!

Black is successfully used by many projects, small and big. Black has a comprehensive test suite, with efficient parallel tests, our own auto formatting and parallel Continuous Integration runner. Now that we have become stable, you should not expect large changes to formatting in the future. Stylistic changes will mostly be responses to bug reports and support for new Python syntax.

Also, as a safety measure which slows down processing, Black will check that the reformatted code still produces a valid AST that is effectively equivalent to the original (see the Pragmatism section for details). If you’re feeling confident, use --fast.

Testimonials¶
Mike Bayer, author of SQLAlchemy:

I can’t think of any single tool in my entire programming career that has given me a bigger productivity increase by its introduction. I can now do refactorings in about 1% of the keystrokes that it would have taken me previously when we had no way for code to format itself.

Dusty Phillips, writer:

Black is opinionated so you don’t have to be.

Hynek Schlawack, creator of attrs, core developer of Twisted and CPython:

An auto-formatter that doesn’t suck is all I want for Xmas!

Carl Meyer, Django core developer:

At least the name is good.

Kenneth Reitz, creator of requests and pipenv:

This vastly improves the formatting of our code. Thanks a ton!

Show your style¶
Use the badge in your project’s README.md:

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
Using the badge in README.rst:

.. image:: https://img.shields.io/badge/code%20style-black-000000.svg
   :target: https://github.com/psf/black
Looks like this:

https://img.shields.io/badge/code%20style-black-000000.svg
Contents¶
The Black Code Style
Current style
Code style
Pragmatism
Future style
Preview style
Unstable style
Stability Policy
User Guide

Getting Started
Do you like the Black code style?
Try it out online
Installation
Basic usage
Next steps
Usage and Configuration
The basics
Usage
Configuration via a file
Next steps
File collection and discovery
Ignoring unmodified files
.gitignore
Black as a server (blackd)
Usage
Protocol
Black Docker image
Usage
Integrations
Editor integration
Emacs
PyCharm/IntelliJ IDEA
Wing IDE
Vim
Gedit
Visual Studio Code
SublimeText
Python LSP Server
Gradle (the build tool)
Kakoune
Thonny
GitHub Actions integration
Compatibility
Usage
Version control integration
Jupyter Notebooks
Excluding files with pre-commit
Guides
Introducing Black to your project
Avoiding ruining git blame
Using Black with other tools
Black compatible configurations
Using Black with Jupyter Notebooks
Installation
Basic usage
What is (and isn’t) formatted
Integrations
Frequently Asked Questions
Why spaces? I prefer tabs
Does Black have an API?
Is Black safe to use?
How stable is Black’s style?
Why is my file not formatted?
Why is my Jupyter Notebook cell not formatted?
Why does Flake8 report warnings?
Which Python versions does Black support?
Why does my linter or typechecker complain after I format my code?
Can I run Black with PyPy?
Why does Black not detect syntax errors in my code?
What is compiled: yes/no all about in the version output?
Why are emoji not displaying correctly on Windows?
Development

Contributing
The basics
Gauging changes
Issue triage
Release process
Change Log
26.3.0
26.1.0
25.12.0
25.11.0
25.9.0
25.1.0
24.10.0
24.8.0
24.4.2
24.4.1
24.4.0
24.3.0
24.2.0
24.1.1
24.1.0
23.12.1
23.12.0
23.11.0
23.10.1
23.10.0
23.9.1
23.9.0
23.7.0
23.3.0
23.1.0
22.12.0
22.10.0
22.8.0
22.6.0
22.3.0
22.1.0
21.12b0
21.11b1
21.11b0
21.10b0
21.9b0
21.8b0
21.7b0
21.6b0
21.5b2
21.5b1
21.5b0
21.4b2
21.4b1
21.4b0
20.8b1
20.8b0
19.10b0
19.3b0
18.9b0
18.6b4
18.6b3
18.6b2
18.6b1
18.6b0
18.5b1
18.5b0
18.4a4
18.4a3
18.4a2
18.4a1
18.4a0
18.3a4
18.3a3
18.3a2
18.3a1
18.3a0
Authors
Indices and tables¶
Index

Search Page by: Edgarruiz856 