import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


/**Imports */
import TextCustom from '../../../components/shared/TextCustom';
import Colors from '../../../utils/Colors';

import { sendSignIn } from '../../../services/firebase/auth';

const SignIn = (props: any) => {
  const { setPageName } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <TextCustom customStyle={styles.title}>SignIn Page</TextCustom>
      <View style={styles.inputSpace}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder='Confirm Password'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        let flag = sendSignIn(email, password, confirmPassword, setPageName);
        console.log(flag);
      }}>
        <TextCustom customStyle={{ fontSize: 18 }}>Sign In</TextCustom>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => setPageName('log-in')}>
        <TextCustom customStyle={{ fontSize: 14 }}>I have an account</TextCustom>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },
    title: {
      textAlign: 'center',
      fontSize: 35,
      marginBottom: 15
    },
    inputSpace: {
      margin: 50,
      backgroundColor: Colors.COLOR_4,
      marginBottom: 20
    },
    input: {
      backgroundColor: Colors.COLOR_3,
      padding: 10,
      borderRadius: 25,
      textAlign: 'center',
      marginBottom: 25
    },
    button: {
      backgroundColor: Colors.COLOR_2,
      padding: 20,
      borderRadius: 25,
      width: '50%',
      alignItems: 'center',
      alignSelf: 'center'
    },
    link: {
      backgroundColor: Colors.COLOR_4,
      padding: 20,
      borderRadius: 25,
      width: '50%',
      marginTop: 50,
      alignItems: 'center',
      alignSelf: 'center'
    }
  }
);

export default SignIn