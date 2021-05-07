import React from 'react';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Card,
  Input,
  Datepicker,
  Button,
} from '@ui-kitten/components';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const HomeScreen = () => {
  const [mrormrsvalue, setMrorMrs] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [ssn, setSSN] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phonenumber, setPhoneNumber] = React.useState('');
  const [prefix, setPrefix] = React.useState('');
  const [evcnumber, setEVCNumber] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  const handleSubmit = () => {
    const ScoreDetail = {
      mrormrsvalue: mrormrsvalue,
      gender: gender,
      firstname: firstname,
      lastname: lastname,
      ssn: ssn,
    };
    return console.log(ScoreDetail);
  };
  const isEnabled =
    (!date || ssn.length > 0) &&
    gender.length > 0 &&
    firstname.length > 0 &&
    lastname.length > 0;

  return (
    <ScrollView>
      <Card style={styles.cardstyle}>
        <Text category="h6">Principal</Text>

        <Layout style={styles.container} level="1">
          <Input
            style={styles.input}
            value={mrormrsvalue}
            placeholder="Prefix i.e Mr"
            onBlur={Keyboard.dismiss}
            onChangeText={nextValue => setMrorMrs(nextValue)}
          />

          <Input
            style={styles.input}
            status="danger"
            placeholder="[ Gender]"
            value={gender}
            onChangeText={nextValue => setGender(nextValue)}
          />
        </Layout>

        <Input
          style={styles.input}
          status="danger"
          placeholder="First Name"
          value={firstname}
          onChangeText={nextValue => setFirstName(nextValue)}
          caption={() => (
            <View>
              <Text> Enter the first name</Text>
            </View>
          )}
        />

        <Input style={styles.input} placeholder="Middle Name" />
        <Input
          style={styles.input}
          status="danger"
          placeholder="Last Name"
          value={lastname}
          onChangeText={nextValue => setLastName(nextValue)}
          caption={() => (
            <View>
              <Text> Enter the last name</Text>
            </View>
          )}
        />

        <Layout style={{marginTop: 5}}>
          <Input
            style={styles.input}
            placeholder="Prefix i.e Dr,Jr"
            value={prefix}
            onChangeText={nextValue => setPrefix(nextValue)}
          />
        </Layout>
        <Layout level="1">
          <Datepicker
            date={date}
            onSelect={nextDate => setDate(nextDate)}
            placeholder="mm/dd/yy"
            status="warning"
            style={{backgroundColor: 'white'}}
            caption={() => (
              <View>
                <Text> Enter Date of Birth or SSN</Text>
              </View>
            )}
          />
        </Layout>

        <Input
          style={styles.input}
          status="warning"
          placeholder="SSN:(000-00-0000)"
          value={ssn}
          onChangeText={nextValue => setSSN(nextValue)}
          caption={() => (
            <View>
              <Text> Enter the SSN or DOB</Text>
            </View>
          )}
        />

        <Input
          style={styles.input}
          placeholder="noemail@noemail"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={nextValue => setEmail(nextValue)}
        />

        <Input
          style={styles.input}
          placeholder="949-39--3035"
          keyboardType="numeric"
          value={phonenumber}
          onChangeText={nextValue => setPhoneNumber(nextValue)}
        />
        <Input
          style={styles.input}
          placeholder="Alternate Phone(000)000-0000(EVC)"
          value={evcnumber}
          onChangeText={nextValue => setEVCNumber(nextValue)}
          caption={() => (
            <View>
              <Text>
                Enter secondary EVC phone number not required (not required)
              </Text>
            </View>
          )}
        />
        <TouchableOpacity>
          <Button
            style={styles.button}
            disabled={!isEnabled}
            status="info"
            onPress={() => handleSubmit()}>
            Pull Credit Score
          </Button>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  );
}
const styles = StyleSheet.create({
  cardstyle: {
    margin: 10,
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
  },
  input: {
    flex: 1,
    marginVertical: 10,

    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
  },
  datecontainer: {
    minHeight: 360,
  },
  button: {
    margin: 2,
  },
});
