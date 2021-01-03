//1846-06-12-20 # Del button added
//2053-08-12-20# double '.' dott issue resolved

import React from 'react';
import { Text, View,TextInput,Keyboard,TouchableOpacity,Dimensions,StyleSheet,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,Card,List,Button } from 'react-native-paper';

export default class HomeScreen extends React.Component{
state={
series:'',
value:0
}

arr=''
total=0

handler(e){

console.log((this.arr[this.arr.length-1]=='+'||this.arr[this.arr.length-1]=='-'||
this.arr[this.arr.length-1]=='*'||this.arr[this.arr.length-1]=='/')&&(e=='+'||e=='-'||e=='*'||e=='/'))



   if(e=='DEL')
   {
      this.arr=this.arr.substring(0,this.arr.length-1)
      this.setState({value:this.total})
      this.setState({series:this.arr})
   }
   else if((this.arr[this.arr.length-1]=='+'||this.arr[this.arr.length-1]=='-'||
   this.arr[this.arr.length-1]=='*'||this.arr[this.arr.length-1]=='/'||this.arr[this.arr.length-1]=='.')&&
   (e=='+'||e=='-'||e=='*'||e=='/'||e=='.')){
      this.arr=this.arr.substring(0,this.arr.length-1)
      this.arr=this.arr.concat(e)
      this.setState({value:this.total})
      this.setState({series:this.arr})
   }
   else if(e=='CE')
   {
      this.arr=''
      this.setState({value:0})
   }
   else if(e!='C'||e=='=')
   {
      if(e!='=')   
      this.arr=this.arr.concat(e)
         
         if(this.arr.substring(this.arr.length-1,this.arr.length)!='+'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='-'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='*'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='/')
         {
         this.total=eval(this.arr)
         }


         this.setState({value:this.total})
         this.setState({series:this.arr})

   }
   else
   {
      this.setState({value:0})
      this.setState({series:''})
      this.arr=''
      this.total=0
   }
}


    render()
      { 
        return (  
     <View style={{flex:1}}>
       
       <View>
         <Appbar.Header style={{backgroundColor:'grey'}}>
          <Appbar.Content title="General Calculator" color="white" />
         </Appbar.Header>
         
       </View>
      <View style={{backgroundColor:'grey',marginTop:5}}>
          <Card style={{height:200,elevation:8}}>
       
          <Text style={{textAlign:'right',fontSize:37,marginTop:20}}>
                  {this.state.series}</Text>
               <Text style={{textAlign:'right',fontSize:37,marginTop:20}}>
                  {this.state.value}</Text>
            
          </Card>

      </View>
     
  <View style={{flex:1,flexDirection:'column'}}>
         
      <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      
          <View style={{height:80,width:80}}>
            <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('C')}>
            <Text style={styles.buttonTextStyle}>C</Text>
            </Button>
         </View>
         <View style={{height:80,width:80}}>
            <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('CE')}>
            <Text style={styles.buttonTextStyle}>CE</Text>
            </Button>
         </View>
         <View style={{height:80,width:80}}>
            <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('DEL')}>
            <Text style={{fontSize:21,color:'#4A51B8'}}>DEL</Text>
            </Button>
         </View>
         <View style={{height:80,width:80}}>
            <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('/')}>
            <Text style={styles.buttonTextStyle}>  / </Text>
            </Button>
         </View>
      </View>

    <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('7')}>
        <Text style={{fontSize:28}}>7</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('8')}>
        <Text style={{fontSize:28}}>8</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('9')}>
        <Text style={{fontSize:28}}>9</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('*')}>
        <Text style={styles.buttonTextStyle}>x</Text>
        </Button>
     </View>
  </View>
  
  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('4')}>
        <Text style={{fontSize:28}}>4</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('5')}>
        <Text style={{fontSize:28}}>5</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('6')}>
        <Text style={{fontSize:28}}>6</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('-')}>
        <Text style={styles.buttonTextStyle}>-</Text>
        </Button>
     </View>
  </View>

  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('1')}>
        <Text style={{fontSize:28}}>1</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('2')}>
        <Text style={{fontSize:28}}>2</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('3')}>
        <Text style={{fontSize:28}}>3</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} mode="contained" color='white' onPress={() => this.handler('+')}>
        <Text style={styles.buttonTextStyle}>+</Text>
        </Button>
     </View>
  </View>

  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} 
        mode="contained" color='white' onPress={() => this.handler('0')
      }>
        <Text style={{fontSize:28}}>0</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} 
        mode="contained" color='white' onPress={() => this.handler('00')}>
        <Text style={{fontSize:28}}>00</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} 
        mode="contained" color='white' onPress={() => this.handler('.')}>
        <Text style={{fontSize:28}}>.</Text>
        </Button>
     </View>
     <View style={{height:80,width:80}}>
        <Button  style={{height:80,width:80,justifyContent:'center',alignItems:'center'}} 
        mode="contained" color='white' onPress={() => this.handler('=')}>
        <Text style={styles.buttonTextStyle}>=</Text>
        </Button>
     </View>
  </View>

  </View>

       
      
      </View>
      );}
    }

   const styles = StyleSheet.create({
      buttonTextStyle:{
         fontSize:28,
         color:'#4A51B8'
      }     

   });