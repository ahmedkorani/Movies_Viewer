import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Button,
  Icon,
} from "react-native";
import { fetchMovieData } from "../api/movies_api_provider.js";
import { Card, ListItem, SearchBar } from "react-native-elements";

export class MovieScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      onEndReachedCalledDuringMomentum: true,
    };
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" loading={this.state.loading} />
        </View>
      );
    } else {
      return (
        <View style={{ padding: 50, width: "100%", height: "40%" }}>
          <Button
          onPress={this.handleLoadMore}
          title="Load More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
        
      );
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { page, seed } = this.state;
    this.setState({ loading: true });
    // try {
    let response = await fetchMovieData(page);
    response = response.results;
    this.setState({
      data: page === 1 ? response : this.state.data.concat(response),
      // error: results.error || null,
      loading: false,
      refreshing: false,
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.fetchMovies();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.fetchMovies();
      }
    );
    // if (!this.onEndReachedCalledDuringMomentum) {

    //   this.onEndReachedCalledDuringMomentum = true;
    // }
  };

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 20,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%",
  //       }}
  //     />
  //   );
  // };

  // renderFooter = () => {
  //   if (!this.state.loading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE",
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  render() {
    return (
      <FlatList
        data={this.state.data}
        // keyExtractor={(item) => item.email}
        // ListFooterComponent={this.renderFooter}
        // onRefresh={this.handleRefresh}
        // refreshing={this.state.refreshing}
        // onEndReached={this.handleLoadMore}
        // onEndReached={this.onEndReached.bind(this)}
        // onEndReachedThreshold={0.1}
        // onMomentumScrollBegin={() => { this.state.onEndReachedCalledDuringMomentum = false; }}
        // onEndReached={({ distanceFromEnd }) => { console.log('on end reached ', distanceFromEnd); }}
        // onEndReachedThreshold={2}
        ListFooterComponent={this.renderButton()}
        renderItem={({ item }) => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 10,
                // overflow: 'fit',
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
                  }}
                  style={{
                    height: 600,
                    width: 500,
                    resizeMode: "stretch",
                  }}
                />
              </View>
              <View style={{ padding: 10, width: "100%", height: "40%" }}>
                <Text>{item.title}</Text>
                <Text>Release Date: {item.release_date}</Text>
                <Text style={{ color: "#000", paddingTop: 5 }}>
                  {item.overview}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    height: 30,
    width: "100%",
    backgroundColor: "pink",
  },
  row: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "grey",
  },
});