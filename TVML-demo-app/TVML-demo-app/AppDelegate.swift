//
//  AppDelegate.swift
//  TVML-demo-app
//
//  Created by Josh Wang on 5/10/16.
//  Copyright © 2016 wangjoshuah. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {

    var window: UIWindow?
    var appController: TVApplicationController?
    static let TVBaseURL = "http://localhost:9001/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"
    var counts: Int = 0;

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        let counter : JavaScriptCounter = JavaScriptCounter.makeCounter()
        counter.countOutLoud();
        counter.countOutLoud();
        window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        // initialize TVApplication Controller Context
        // This will contain information on how to start the app and where to look for the Base URL
        let appControllerContext = TVApplicationControllerContext()
        
        // add information to TVApplication controller context about server
        guard let javaScriptURL = NSURL(string: AppDelegate.TVBootURL) else {
            fatalError("unable to create NSURL")
        }
        appControllerContext.javaScriptApplicationURL = javaScriptURL
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL
        
        // start the TVApplication Controller with context
        // this manages the JavaScript code
        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        return true
    }
    
    func appController(appController: TVApplicationController, evaluateAppJavaScriptInContext jsContext: JSContext) {
        jsContext.setObject(JavaScriptCounter.classForCoder(), forKeyedSubscript: "JavaScriptCounter")
    }
    
    func countOutLoud() {
        self.counts++
        print(self.counts)
    }

}

