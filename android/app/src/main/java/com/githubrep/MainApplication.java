package com.githubrep;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
//import com.reactnativenavigation.NavigationReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.controllers.ActivityCallbacks;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new VectorIconsPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public void onCreate() {
    super.onCreate();
    setActivityCallbacks(new ActivityCallbacks() {
      @Override
      public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
        super.onActivityCreated(activity, savedInstanceState);
      }

      @Override
      public void onActivityStarted(Activity activity) {
        super.onActivityStarted(activity);
      }

      @Override
      public void onActivityResumed(Activity activity) {
        super.onActivityResumed(activity);
      }

      @Override
      public void onActivityPaused(Activity activity) {
        super.onActivityPaused(activity);
      }

      @Override
      public void onActivityStopped(Activity activity) {
        super.onActivityStopped(activity);
      }

      @Override
      public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
      }

      @Override
      public void onActivityDestroyed(Activity activity) {
        super.onActivityDestroyed(activity);
      }
    });
  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}
