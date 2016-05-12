//
//  JavaScriptCounter.m
//  TVML-demo-app
//
//  Created by Josh Wang on 5/12/16.
//  Copyright © 2016 wangjoshuah. All rights reserved.
//

#import "JavaScriptCounter.h"

@implementation JavaScriptCounter

@synthesize counter;

+ (JavaScriptCounter *)makeCounter {
    return [[JavaScriptCounter alloc] init];
}

+ (JavaScriptCounter *)makeCounterWith:(int)counter {
    return [[JavaScriptCounter alloc] initWithCounter:counter];
}
            
- (instancetype)init {
    self = [super init];
    self.counter = 0;
    return self;
}

- (instancetype)initWithCounter:(int)startValue {
    self = [[JavaScriptCounter alloc] init];
    self.counter = startValue;
    return self;
}

- (void)countOutLoud {
    self.counter++;
    NSLog(@"%u", self.counter);
}

@end