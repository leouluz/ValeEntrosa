package com.valeentrosa;

import com.facebook.react.ReactActivity;
<<<<<<< HEAD
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
// import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
=======
 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
>>>>>>> f38047a2a6f633bf9dc602efcec4e32384b12247

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ValeEntrosa";
    }

<<<<<<< HEAD
  //    @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegate(this, getMainComponentName()) {
  //     @Override
  //     protected ReactRootView createRootView() {
  //      return new RNGestureHandlerEnabledRootView(MainActivity.this);
  //     }
  //   };
  // }
=======
            @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
            return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
                }
            };
        }
    }
>>>>>>> f38047a2a6f633bf9dc602efcec4e32384b12247
}
