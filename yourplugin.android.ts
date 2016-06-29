import * as app from 'application';
import {Common} from './yourplugin.common';

declare namespace com {
  namespace my {
    namespace demo {
      namespace mylibrary {
        interface DemoInterface {
          onTest(testValue: string): void;
        }
        export class DemoInterface {
          constructor(impl: any);
        }
        class DemoRunner {
          static RunDemo(demo: DemoInterface): void;
        }
      }
    }
  }
}

export class YourPlugin extends Common {
    constructor() {
      super();
      console.log('===== Testing Android =====');
      const demoImpl: com.my.demo.mylibrary.DemoInterface = new com.my.demo.mylibrary.DemoInterface({
        onTest(testValue: string): void {
          console.log('Test value: '+ testValue);
        }
      });
      com.my.demo.mylibrary.DemoRunner.RunDemo(demoImpl);

      console.log('Test done!');
    }
}