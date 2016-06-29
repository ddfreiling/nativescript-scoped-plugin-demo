package com.my.demo.mylibrary;

/**
 * Created by dfg on 29-06-2016.
 */
public class DemoRunner {
    public static void RunDemo(DemoInterface demo) {
        demo.onTest("this is a test");
    }
}
