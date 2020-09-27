# Sample Unix commands

Here are some native commands available when you work in a Unix terminal (or a Bash emulator). These commands are useful when you have a task in front of you that's suited to a fast, oneoff solution.

## Table of contents

* [Redirecting output](#redirecting-output)
* [`grep`](#grep)
* [`find`](#find)
* [`for` loops](#for-loops)
* [`sed`](#sed)

## Redirecting output

When you type commands in the terminal, that’s **standard input**. When you run the command, the results typically go to **standard output**. This input/output model allows you to chain commands together to build custom one-liners.

Send (or "pipe") output of one command to another with `|`:
```
$ ls | wc -l
```

Send output to a file with `>`:
```
$ ls > files.txt
```

Run multiple commands with `&&`:
```
$ ls > files.txt && head files.txt
```

## grep

**Use case**: Find text.

`grep` stands for "global regular expression print," although you don’t have to use regex. See [Rubular.com](https://rubular.com/) for a handy regex editor and cheat sheet.

Basic format:
```
$ grep [options] pattern [file or directory]
```

Sample `grep`s:
```
# Recursive search
$ grep -r 'title' content

# Match beginning of line with ^
$ grep -r '^title: ' content

# Use -l to only show filenames in output
$ grep -lr '^title: ' content

# Use -h to only show matched lines in output
$ grep -hr '^title: ' content

# Pipe results to another grep
$ grep -r '^title: ' content | grep '{'

$ grep -r '^intro: ' content

# Use -L to show non-matching filenames
$ grep -Lr '^intro' content

# Use -v to exclude lines that match the pattern
$ grep -Lr '^intro' content | grep -v index.md | grep -v README

# Use egrep for more regex support
$ grep -Lr '^intro' content | egrep -v '(index|README).md'
```

## find

**Use case**: Find files.

`find` is helpful for finding files, whereas `grep` is more useful for matching patterns. `find` is recursive by default. You can pass `find` a `-depth` flag to limit recursion.

Basic format:
```
$ find [directory] [option] pattern
```

Sample `find`s:
```
$ find content -name 'about-actions.md'

$ find . -name 'about-actions.md'

$ find data -name '*.yml'

$ find content -type f

$ find translations -type f | wc -l

$ find content -type d

$ find content/actions -type d | grep getting-started
```

## for loops

**Use case**: Do something to each item in a collection.

Every programming language has a way to iterate through a list. The following examples show the Unix shell syntax. The semicolons can be hard to read, but they make it possible to run these commands on a single line.

Basic format:
```
$ for var in list; do [commands]; done
```

Sample `for` loops:
```
$ for i in $(ls content); do echo $i; done

$ for i in $(ls translations | grep -v README); do git mv translations/$i/content/foo.md translations/$i/content/bar.md; done

$ for i in {1..50}; do mkdir problem-${i}; done

$ for i in {1..5}; do expr $i + 5; done

$ for v in 2.19 2.18 2.17 2.16; do script/enterprise-backport $v; done

$ for i in $(cat prs.txt); do curl -su <username>:$token -X "GET" "https://api.github.com/repos/github/docs-internal/pulls/${i}" | jq '. | {number: .number, state: .state}'; done
```

## sed

**Use case**: Find and replace.

`sed` is one way to do find/replace on the command line.

Basic format:
```
$ sed 's/pattern/replacement/[flags]'
```
The `/` is the most common delimiter, but other characters work too:
```
$ sed 's_pattern_replacement_[flags]'
```

Sample `sed`s:
```
# Do a substitution on standard output
$ grep -hr 'title: ' content | sed 's/title: //g' | sort

# Send results to file
$ grep -hr 'title: ' content | sed 's/title: //g' | sort > titles.txt

# Find duplicate titles
$ grep --exclude='README.md' -rh '^title: ' content | sed 's/title: //g' | sort | uniq -d

# Do an in-place substitution on a file
$ sed -i '' s'/Help Docs/docs.github.com/g' README.md
```
