//
//  JavaScriptExports.h
//  TVML-demo-app
//
//  Created by Josh Wang on 5/12/16.
//  Copyright © 2016 wangjoshuah. All rights reserved.
//

#import <JavaScriptCore/JavaScriptCore.h>
@class JavaScriptCounter;

@protocol JavaScriptExports <JSExport>

@property int counter;

- (instancetype)init;
//- (instancetype)initWithCounter:(int)counter;

+ (JavaScriptCounter *)makeCounter;
//+ (JavaScriptCounter *)makeCounterWith:(int)counter;


- (void)countOutLoud;

@end