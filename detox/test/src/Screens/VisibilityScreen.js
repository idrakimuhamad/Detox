import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import ScrollBarGradient from '../Views/ScrollBarGradient';

export default class VisibilityScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SafeAreaView testID='VisibilityScreen' style={styles.screen}>
        <Text style={styles.header}>Tab Bar with Gradient</Text>
        <Text style={styles.text}>Should be scrollable because pointerEvents="none"</Text>
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollView} testID='tabBarWithGradient' horizontal>
            <Text style={styles.horizontalItem}>Tab 1</Text>
            <Text style={styles.horizontalItem}>Tab 2</Text>
            <Text style={styles.horizontalItem}>Tab 3</Text>
            <Text style={styles.horizontalItem}>Tab 4</Text>
            <Text style={styles.horizontalItem}>Tab 5</Text>
            <Text style={styles.horizontalItem}>Tab 6</Text>
            <Text style={styles.horizontalItem}>Tab 7</Text>
            <Text style={styles.horizontalItem}>Tab 8</Text>
          </ScrollView>
          <ScrollBarGradient left={false} />
          <ScrollBarGradient left={true} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  scrollContainer: {
    borderColor: '#c0c0c0',
    borderWidth: 1,
    backgroundColor: '#ddd',
    height: 46,
  },
  scrollView: {
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    paddingLeft: 18,
    marginTop: 18,
    marginBottom: 0,
  },
  text: {
    fontSize: 12,
    paddingLeft: 18,
    marginVertical: 12,
  },
  horizontalItem: {
    width: 0.25 * Dimensions.get('window').width - 20, // to have four items
    backgroundColor: '#e8ffff',
    marginHorizontal: 10,
    textAlign: 'center',
    lineHeight: 30,
    height: 30,
  },
});