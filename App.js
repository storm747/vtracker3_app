// import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// import { SafeAreaView } from 'react-native-web';

export default function App() {
  console.log("App executed");

  const handlePress = () => console.log("Text pressed");

  const { landscape } = useDeviceOrientation();

  // console.log(useDimensions());
  // console.log(useDeviceOrientation());

  /* 
   View -> UIView
   SafeAreaView -> UIView lower than notch
   StatusBar -> adapt the content to the upper phone's bar
  */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.menuIcons}> VT3 </Text>
        <Image style={styles.logo} source={require("./assets/vt_logo.png")} />
      </View>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: landscape ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "50%",
          }}
        >
          <Text style={styles.title} onPress={handlePress}>
            Vtracker3
          </Text>
          <TouchableOpacity onPress={() => console.log("Image tapped")}>
            {/* <Image source={require("./assets/vt_logo.png")} /> */}
          </TouchableOpacity>

          <Button
            color={"#7a1212"}
            styles={styles.button}
            title="About the App"
            onPress={
              () =>
                Alert.alert("Warning", "You are amazing", [
                  { text: "Yes", onPress: () => alert("Cool") },
                  { text: "No", onPress: () => alert("Ok :(") },
                ])

              /* Works only in Ios, you can type text into alert display */
              // Alert.prompt("Warning", "Type message", (text) => console.log("text"))
            }
          />
        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#17171d",
    color: "#dedede",
    flex: 1,
  },
  header: {
    backgroundColor: "#7a1212",
    color: "#dedede",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  menuIcons: {
    color: "#dedede",
    height: "auto",
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    alignSelf: "center",
    height: 40,
    width: 40,
  },
  content: {
    color: "#dedede",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  title: {
    color: "#dedede",
    alignSelf: "center",
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
