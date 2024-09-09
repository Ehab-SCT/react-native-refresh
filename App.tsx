import React, { useEffect } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import { useAppStore } from "./src/store/zostands/useAppStore";
import { useShallow } from "zustand/react/shallow";
import { Text } from "react-native-ui-lib";
import { Incubator } from "react-native-ui-lib";
import { GestureHandlerRootView } from "react-native-gesture-handler";
function App(): React.JSX.Element {
  const {
    setIsKeyboardOpen,
    isAppLoading,
    hideLoading,
    activeToast,
    hideActiveToast,
    afterToastHidden,
  } = useAppStore(
    useShallow((state) => ({
      setIsKeyboardOpen: state.setIsKeyboardOpen,
      isAppLoading: state.isAppLoading,
      hideLoading: state.hideLoading,
      activeToast: state.activeToast,
      hideActiveToast: state.hideActiveToast,
      afterToastHidden: state.afterToastHidden,
    }))
  );
  const { Toast } = Incubator;

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [setIsKeyboardOpen]);

  // if (isAppLoading) {
  //   return (

  //   );
  // }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <AppNavigator />
            {isAppLoading && (
              <Pressable style={styles.overlay} onPress={() => hideLoading()}>
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#6200ee" />
                  <Text style={styles.loadingText}>Loading...</Text>
                </View>
              </Pressable>
            )}

            <Toast
              visible={activeToast.visible}
              position={"bottom"}
              backgroundColor={"#186aa8"}
              message={activeToast.message}
              messageStyle={{ color: "#fff" }}
              swipeable={true}
              autoDismiss={activeToast.autoDismiss}
              onDismiss={hideActiveToast}
              onAnimationEnd={afterToastHidden}
            ></Toast>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // Semi-transparent background to dim the rest of the screen
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 3,
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    width: 150,
    height: 150,
    borderRadius: 12,
    backgroundColor: "#ffffff", // Card background color
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6, // Android shadow
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#000000", // Text color
    fontWeight: "500",
  },
});

export default App;
