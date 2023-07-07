# Heading

Copy directive does not exist because example contains both output and a command.

```shell
$ this 
that
```

Copy directive should exist because example only contains command.

```shell
echo "hello"
echo "there" 
```

Copy directive should not exist when example only starts with $.

```shell
$ echo "hello"
$ echo "there" 
```

Copy directive should not exist because example only contains command.

```shell copy
$ one 
two
```

Copy directive exists because example only contains a command.

```shell copy
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```
