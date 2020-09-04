import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right} from 'native-base';
import {View,Alert,StyleSheet} from 'react-native';
import {getArticles } from '../service/news';
export default class ListThumbnailExample extends Component {

constructor(props){
    super(props);

    this.state = {
        isLoading: true,
        data: null
    }
}
   componentDidMount() {
       getArticles().then(data=> {
           this.setState({
               isLoading:false,
               data:data
           });
       }, error => {
        Alert.alert('Error','Something Went Wrong !!');
    }

       );
   }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.state.data}
          renderRow={(item)=>{
              return (<ListItem  thumbnail>
                <Left>
                  <Thumbnail key ={item.title}  source={{ uri:item.urlToImage != null ? item.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
                </Left>
                <Body>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{item.source.name}</Text>
                    <Text note>{item.publishedAt}</Text>
                    </View>
                    <Text style={{fontWeight:'bold'}}> Author -{item.author}</Text>
                </Body>
               </ListItem>
               )
          }}  />
        </Content>
      </Container>
 
    );
  }
}
const styles = StyleSheet.create({
    title:{
       fontWeight:'bold',
       fontSize:15
    }
});