import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading,Left, Body, Right } from 'native-base';
import { Title } from 'react-native-paper';
import {Text,StyleSheet} from 'react-native';
import Tab1 from './tabs1';
import Tab2 from './tabs2';
import Tab3 from './tabs3';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container >
      <Header>
            <Title style={styles.header}>Flash News</Title>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>General</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Business</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Sports</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    alignSelf:'center',
    justifyContent:'center',
    color:'#fff'
  }
})