---
type Account = 
    { Username: string
      Email: string
      PasswordHash: string
      Tags: Map<string, string> }

type CreateAccountResult =
    | Account of Account
    | UsernameAlreadyExists

type PasswordResult = 
    | Account of Account
    | PasswordInvalid

type UpdateResult = 
    | Account of Account
    | AccountNotFound

type IAccountDAL = 
    abstract member CreateAccount: 
        account: Account ->
        Async<CreateAccountResult>
    abstract member VerifyPassword:
        username: string -> 
        passwordHash: string -> 
        Async<PasswordResult>
    abstract member ChangePassword:
        username: string ->
        passwordHash: string ->
        newPasswordHash: string ->
        Async<PasswordResult>
    abstract member ResetPassword:
        username: string ->
        newPasswordHash: string ->
        Async<UpdateResult>
    abstract member UpdateTags:
        username: string ->
        tags: Map<string, string> ->
        Async<UpdateResult>
title: Developers
intro: 'Go deeper with {% data variables.product.prodname_dotcom %} by integrating with our APIs, customizing your {% data variables.product.prodname_dotcom %} workflow, and building and sharing apps with the community.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
children:
  - /overview
  - /webhooks-and-events
  - /apps
  - /github-marketplace
---
