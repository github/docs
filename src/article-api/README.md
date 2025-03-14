# Article API

This subject folder contains the code for the Article API endpoints:
- `/api/pagelist`
- `/api/article/body`
- `/api/article/meta`

## What it does

Article API endpoints allow consumers to query GitHub Docs for listings of current articles, and for specific article information.

The `/api/article/meta` endpoint powers hovercards, which provide a preview for internal links on <docs.github.com>.

## How it works

The `/api/article` endpoints return information about a page by `pathname`. 

`api/article/meta` is highly cached, in JSON format.

## How to get help

For internal folks ask in the Docs Engineering slack channel. 

For open source folks, please open a discussion in the public repository.
