import React, { Component } from 'react';
import {
  Text,
  View,
  Slider,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class AttributesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkBoxValue: false
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View testID={'viewId'} width={100} height={100}/>
        <Text testID={'textViewId'} accessibilityLabel={'TextView'}>TextView</Text>
        <CheckBox
          disabled={false}
          testID={'checkboxId'}
          value={this.state.checkBoxValue}
          onValueChange={(value) => this.setState({
            checkBoxValue: value
          })}
        />
        <TextInput
          testID={'focusedTextInputId'} value={'focused'} placeholder={'palace-holder'}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, marginHorizontal: 20, padding: 5 }}
          autoFocus={true}
        />
        <TextInput
          testID={'blurredTextInputId'} value={'blurred'} placeholder={'palace-holder'}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, marginHorizontal: 20, padding: 5 }}
          autoFocus={false}
        />
        <Slider testID={'sliderId'} value={0.5} />
      </View>
    );
  }
}
