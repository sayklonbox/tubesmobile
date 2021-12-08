//touchable higlight
// import React, { useState } from "react";
// import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };
// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// );
// const TouchableHighlightExample = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount(count + 2);

//   return (
//     <View style={styles.container}>
//       <TouchableHighlight onPress={onPress}>
//         <View style={styles.button}>
//           <Text>Menampilkan angka genap</Text>
//         </View>
//       </TouchableHighlight>
//       <View style={styles.countContainer}>
//         <Text style={styles.countText}>
//           {count || null}
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   countContainer: {
//     alignItems: "center",
//     padding: 10
//   },
//   countText: {
//     color: "#FF00FF"
//   }
// });

// export default TouchableHighlightExample;

//conditional rendering
// import React, {useState} from "react";
// import {SafeAreaView, View, Text, TouchableHighlight} from "react-native";

// export default function App() {

//   const[nilai, rubahNilai]=useState(0)

//   return (
//     <SafeAreaView>
//       <View style={{width: 400, height: 344, backgroundColor: '#2e86de'}} />
//       <TouchableHighlight onPress={()=>rubahNilai(nilai+1)}>
//       <View>
//         <Text style={{fontSize: 20, color: 'blue', alignSelf: 'center'}}>
//           Tambah
//         </Text>
//       </View>
//       </TouchableHighlight>
//       <View>
//         <Text style={{fontSize: 60, color: 'blue', alignSelf: 'center'}}>
//           {nilai}
//         </Text>
//       </View>
//       <TouchableHighlight onPress={()=>rubahNilai(nilai-1)}>
//       <View>
//         <Text style={{fontSize: 20, color: 'blue', alignSelf: 'center'}}>
//           Kurang
//         </Text>
//       </View>
//       </TouchableHighlight>
//       <View style={{width: 400, height: 344, backgroundColor: '#2e86de'}} />
//     </SafeAreaView>
//   )
// }
// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const JustifyContentBasics = () => {
//   const [justifyContent, setJustifyContent] = useState("flex-start");
//   const [alignItems, setAlignItems] = useState("stretch");
//   const styles = StyleSheet.create({
//     container: {
//       paddingTop: 50,
//     },
//     tinyLogo: {
//       width: 50,
//       height: 50,
//     },
//     logo: {
//       width: 66,
//       height: 58,
//     },
//   });
//   return (
//     <PreviewLayout
//       label="justifyContent"
//       selectedValue={justifyContent}
//       values={[
//         "flex-start",
//         "stretch",
//         "flex-end",
//         "center",
//         "space-between",
//         "space-around",
//         "space-evenly",
//         "baseline",
//       ]}
//       setSelectedValue={setJustifyContent}
//     >
//       <View
//         style={[styles.tinyLogo, { backgroundColor: "red" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "pink" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default JustifyContentBasics;

// import React, { useState } from "react";
// import { View, Switch, StyleSheet, SafeAreaView, TextInput, Image} from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Photo/>
//       <Switch
//         trackColor={{ false: "#ff0000", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#adff2f"}
//         ios_backgroundColor="#00ffff"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       <UselessTextInput />
//     </View>
//   );
// };

// const Photo = () => {
//   return ( 
//     <Image 
//       source={{uri: 'https://cdn.discordapp.com/attachments/704971699296403496/902832789701922816/FB_IMG_1634176883437.jpg'}} 
//       style={{width: 150, height: 150, borderRadius: 100, borderWidth: 2, marginTop: 20, marginBottom: 20, alignSelf:'center'}}
//     />
//   );
// };

// const UselessTextInput = () => {
//   const [text, onChangeText] = React.useState("Coba Input Text");
//   const [number, onChangeNumber] = React.useState(null);
//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.Input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <TextInput
//         style={styles.Input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   Input: {
//     alignItems: "center",
//     height: 40,
//     margin: 25,
//     borderWidth: 2,
//     padding: 10,
//   }
// });

// export default App;

// import * as React from 'react';
// import {
//   SafeAreaView, 
//   StyleSheet, 
//   Text,
//   TextInput, 
//   Image,
//   ScrollView,
// } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style = {styles.conten}>
//     <ScrollView style={styles.ScrollView}>
//       <Image
//         resizeMode="stretch"
//         style={styles.image}
//           source= {
//             require 
//             ('C:/Users/ANISSA/AwesomeProject/asset/100414.jpg')
                
//                   }
//         />
//         <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = " Nama Lengkap "
//                placeholderTextColor = "#FF7171"
//                />
            
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = " NIM "
//                placeholderTextColor = "#FF7171"
//                />
//         <Text style={styles.text}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
//         sed do eiusmod tempor incididunt ut labore et dolore magna
//          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
//          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
//          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
//          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
//          qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   conten: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     backgroundColor: '#5178db'
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 20,
//     borderWidth: 4,
//     margin: 30,
//     marginLeft: 125,
//     borderColor: '#B91646',
//   },
//   input: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginTop: 5,
//     marginBottom: 20,
//     margin: 50,
//     height: 40,
//     borderColor: '#ffd700',
//     borderWidth: 3,
//   },
//   ScrollView: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//   },
//   text:{
//     color: '#00ff00',
//     fontSize: 60,
//   },
// });

// export default App;

// import React from 'react';
// import { Image, StyleSheet, Text,ScrollView, View } from 'react-native';

// const LotsOfStyles = () => {
//   return (
//     <View style={{backgroundColor: '#e85d68'}}>
//       <View 
//         style={{
//           flexDirection: 'row',
//           backgroundColor: '#c8d6e5',
//           alignItems: 'center',
//           justifyContent: 'space-between'
//         }}>
        
//       </View>
//       <Image
//          source= {
//                     require 
//                      ('C:/Users/ANISSA/AwesomeProject/asset/100414.jpg')
//                                             }
//         style={{width: 200, height: 200, borderRadius: 100, borderWidth: 2, marginTop: 20, marginBottom: 20, alignSelf:'center'}}
//       />
//       <View style={{justifyContent: 'center', alignSelf:'center'}}>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17, fontWeight: 'bold'}}>Damas Adiyanto</Text>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17}}>1103184062</Text>
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#51db51'}}>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17, fontWeight: 'bold'}}>Mobil</Text>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17, fontWeight: 'bold'}}>Motor</Text>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17, fontWeight: 'bold'}}>Lokasi</Text>
//         <Text style={{color: 'black', alignSelf:'center', fontSize: 17, fontWeight: 'bold'}}>About Us</Text>
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/EBdSefkXsAAfeJD.png')         }
//         style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/FB_IMG_1619231866016.jpg')
//         }
//         style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/IAGBiDXzscTFXjW9KrHllpd0_vdwN_zFwYZht2mHkhE.png')
//         }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//       <Image
//        source={
//         require 
//         ('C:/Users/ANISSA/AwesomeProject/asset/jmw2Yez4hTtb2Hg_woZk-Pjm7oMo8T4BcP8-tKTYWvZqKiInW3VKFjyJaFllAlN3KkYX_y99Yz7ntJu3ycKxtZV-56uJarz8afDY.png')
//       }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/akrapovic-logo-44D8B35291-seeklogo.com.png')
//         }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/0l0m0dv49iz51.jpg')
//         }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//       <Image
//        source={
//         require 
//         ('C:/Users/ANISSA/AwesomeProject/asset/100414.jpg')
//       }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/100414.jpg')
//         }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       <Image
//         source={
//           require 
//           ('C:/Users/ANISSA/AwesomeProject/asset/100414.jpg')
//         }style={{width: 115, height: 115, borderWidth: 2, marginVertical: 15, marginHorizontal: 2}}
//       />
//       </View>

//     </View>
//   );
// };

// export default LotsOfStyles;


// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default ExampleApp;
