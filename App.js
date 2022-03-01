import { StatusBar } from 'expo-status-bar';

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse3StackStack}>
        <View style={styles.ellipse3Stack}>
          <Svg viewBox="0 0 152.5 153.32" style={styles.ellipse3}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(252,236,126,1)"
              cx={76}
              cy={77}
              rx={76}
              ry={77}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 270 256.4" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(171,232,240,1)"
              cx={135}
              cy={128}
              rx={135}
              ry={128}
            ></Ellipse>
          </Svg>
          <Text style={styles.paint}>paint</Text>
          <FontAwesomeIcon
            name="paint-brush"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <Text style={styles.loremIpsum}>0% Completed</Text>
          <EntypoIcon name="modern-mic" style={styles.icon5}></EntypoIcon>
        </View>
        <View style={styles.ellipse2Stack}>
          <Svg viewBox="0 0 152.5 153.32" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(252,236,126,1)"
              cx={76}
              cy={77}
              rx={76}
              ry={77}
            ></Ellipse>
          </Svg>
          <MaterialCommunityIconsIcon
            name="guitar-acoustic"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
          <Text style={styles.amble}>amble</Text>
          <EntypoIcon name="home" style={styles.icon2}></EntypoIcon>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.letsGo}>Let&#39;s go!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse3: {
    top: 83,
    left: 199,
    width: 153,
    height: 153,
    position: "absolute",
    opacity: 0.64
  },
  ellipse: {
    width: 252,
    height: 252,
    position: "absolute",
    left: 0,
    top: 0
  },
  paint: {
    top: 35,
    left: 80,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 38
  },
  icon3: {
    top: 96,
    left: 92,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 70
  },
  loremIpsum: {
    top: 182,
    left: 68,
    position: "absolute",
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 18
  },
  icon5: {
    top: 132,
    left: 248,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 55
  },
  ellipse3Stack: {
    top: 0,
    left: 104,
    width: 352,
    height: 252,
    position: "absolute"
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 153,
    height: 153,
    position: "absolute",
    opacity: 0.64
  },
  icon4: {
    top: 43,
    left: 42,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 58
  },
  ellipse2Stack: {
    top: 83,
    left: 0,
    width: 153,
    height: 153,
    position: "absolute"
  },
  ellipse3StackStack: {
    width: 456,
    height: 252,
    marginTop: 281,
    marginLeft: -43
  },
  rect: {
    width: 375,
    height: 74,
    backgroundColor: "rgba(171,232,240,1)",
    flexDirection: "row",
    marginTop: -500
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    height: 55,
    width: 48
  },
  amble: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 28,
    marginLeft: 9,
    marginTop: 10
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginLeft: 173,
    marginTop: 4
  },
  iconRow: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 9,
    marginTop: 10
  },
  button: {
    width: 117,
    height: 49,
    backgroundColor: "rgba(251,85,111,0.63)",
    marginTop: 445,
    marginLeft: 129
  },
  letsGo: {
    fontFamily: "righteous-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 18
  }
});

export default Untitled;


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
