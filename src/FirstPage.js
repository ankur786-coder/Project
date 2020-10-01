//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, TouchableOpacity ,FlatList, TouchableWithoutFeedback} from 'react-native';
//import all the components we are going to use.
import { getNews } from './newsapi';
import Article from './article';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true , selectedItem: null,};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }
  _choosen(selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        //renderItem={({ item }) => <Article article={item} />}
        renderItem={({item}) => {
          return(
          
            <TouchableOpacity 
            onPress={()=>{
              this._choosen(item.id);
            this.props.navigation.navigate('SecondPage', {
              data: "Passing data"
            });
          }}

            >
  <Article article={item} />
       </TouchableOpacity >
            )
        }
      }
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
