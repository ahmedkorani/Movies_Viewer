
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {MovieScrollView} from './screens/movies_scroll_view.js';
import React, { useState } from "react";

export default function App() {
  return(
    <MovieScrollView />
  )
  // const [state, setstate] = useState({
  //   s: "Loaded Movies",
  //   results: [],
  //   selected: {},
  // });
}

//   const search = () => {
//     axios(apiUrl).then(({ data }) => {
//       let results = data.Search;
//       console.log(results);
//       setState((prevState) => {
//         return { ...prevState, results: results };
//       });
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Latest Movies</Text>
//       <Text>Trying react native for first time </Text>
//       <TextInput
//         style={styles.searchBox}
//         value={state.s}
//         // onChangeText={(text) =>
//         //   setState((prevState) => {
//         //     return { ...prevState, s: text };
//         //   })
//         // }
//         onSubmitEditing={search}
//         value={state.s}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingTop: 70,
//   },
//   title: {
//     color: "#FFF",
//     fontSize: 32,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   searchBox: {
//     fontSize: 20,
//     fontWeight: "300",
//     padding: 20,
//     width: "100%",
//     backgroundColor: "#FFF",
//     borderRadius: 8,
//     marginBottom: 40,
//   },
// });
