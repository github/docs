---
title: Examples of tables in Markdown
descriptions: Examples of tables in Markdown
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Good

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| {% ifversion volvo %}  |
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
| {% endif %}  |

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| {%- ifversion volvo %}  |
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
| {%- endif %}  |

{% ifversion volvo %}

1. This is a list with a table
   | Package manager | Languages | Recommended formats | All supported formats |
   | --- | --- | --- | ---|
   | {%- ifversion volvo %}  |
   | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
   | {%- endif %}  |
{% endif %}

## Bad

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
{%- ifversion volvo %}
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
{%- endif %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|{% ifversion volvo %}
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |{% endif %}

{% ifversion volvo %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
{% endif %}

Package manager | Languages | Recommended formats | All supported formats {% ifversion fpt %}
:- | :- | :- | :-{% endif %}{% ifversion volvo %}
Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` {% endif %}

| Package manager | Languages | Recommended formats | All supported formats | {% ifversion fpt %}
| :- | :- | :- | :-|{% endif %}{% ifversion volvo %}
|Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock`| {% endif %}
