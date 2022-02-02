---
title: Learn GitHub Actions
shortTitle: Learn GitHub Actions
intro: 'Whether you are new to {% data variables.product.prodname_actions %} or interested in learning all they have to offer, this guide will help you use {% data variables.product.prodname_actions %} to accelerate your application development workflows.'
redirect_from:
  - /articles/about-github-actions
  - /actions/getting-started-with-github-actions
  - /actions/getting-started-with-github-actions/about-github-actions
  - /actions/getting-started-with-github-actions/overview
  - /actions/getting-started-with-github-actions/getting-started-with-github-actions
  - /articles/getting-started-with-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
  - /github/automating-your-workflow-with-github-actions/getting-started-with-github-actions
  - /actions/automating-your-workflow-with-github-actions/getting-started-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
children:
  - /understanding-github-actions
  - /finding-and-customizing-actions
  - /essential-features-of-github-actions
  - /expressions
  - /contexts
  - /environment-variables
  - /usage-limits-billing-and-administration
---   
// Swift
//
// AppDelegate.swift
import UIKit
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
          
        ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }
          
    func application(
        _ app: UIApplication,
        open url: URL,
        options: [UIApplication.OpenURLOptionsKey : Any] = [:]
    ) -> Bool {

        ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )
    }  
}
    

