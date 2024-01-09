import react from 'react';
import {View, Text, Image, Button, ScrollView, Linking} from 'react-native';

const contactme = () => {
  const url = 'https://www.instagram.com/dzakfp_/'
  Linking.openURL(url);
}

const aboutme = () => {
  const url = 'https://dribbble.com/Dzakyfffp7'
  Linking.openURL(url);
}

const portfolio1 = () => {
  const url = 'https://www.figma.com/file/10VPXXde0lsUa50auodlYj/Medical-Management-Dashboard?type=design&node-id=0%3A1&mode=design&t=iEvrRIIH4CRTFj7h-1'
  Linking.openURL(url);
}

const portfolio2 = () => {
  const url = 'https://www.figma.com/file/PFhcZd90svwxsxZsAZHk1d/Job-Portal-Admin-UI-Dashboard?type=design&node-id=0%3A1&mode=design&t=fbDmI4Wz7cdl4MgT-1'
  Linking.openURL(url);
}

const portfolio3 = () => {
  const url = 'https://www.figma.com/file/TvLmcIT5v2AT5mKRT4uezt/Food-Restaurant-Admin-Dashboard-UI?type=design&node-id=0%3A1&mode=design&t=86wYZlXpCCLeVxKI-17'
  Linking.openURL(url);
}

const portfolio4 = () => {
  const url = 'https://www.figma.com/file/Li8BLPnBKSd1hmcJjfrY9W/Saas-Admin-Dashboard-UI?type=design&node-id=0%3A1&mode=design&t=7iXR3YUhOT9iKoep-1'
  Linking.openURL(url);
}

const Portfolio = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white', flex:1}}>
      <View style={{alignItems:'center'}}>
        <Image style={{width:200, height:200, marginTop:24, borderColor:'#5D12D2', borderWidth:10, borderRadius:100, marginBottom:32}} source={require('../assets/profile2.jpg')} />
      </View>
      <View>
      <Text style={{marginBottom:12, textAlign:'center', color:'hitam', fontSize:30,fontFamily:'Manrope', fontWeight:'bold', marginHorizontal:40}}> Dzaky Fadhil Prayoga </Text>
      </View>
      <View>
      <Text style={{marginBottom:20, textAlign:'center', color:'#adadad', fontSize:16,fontFamily:'Manrope', fontWeight:'semibold', marginHorizontal:40}}> Saya adalah siswa SMK Telkom Purwokerto dengan jurusan RPL, Saya berminat dalam bidang UI UX Designer. </Text>
      </View>
      <View style={{marginBottom: 20, paddingHorizontal: 50, borderRadius: 32}}>
      <Button title='Contact me' color='#5D12D2' onPress={contactme} />
      </View>
      <View style={{marginBottom: 20, paddingHorizontal: 50, borderRadius: 32}}>
      <Button title='About me' color='#5D12D2' onPress={aboutme} />
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{marginBottom:12, textAlign:'center', color:'#5D12D2', fontSize:24, fontFamily:'Manrope', fontWeight:'Bold', marginHorizontal:40}}>My Recent Project</Text>
      <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} source={require('../assets/Healhive.png')} />
      <Text style={{marginBottom:4, textAlign:'center', color:'black', fontSize:20, fontFamily:'Manrope', fontWeight:'semibold', marginHorizontal:'40'}}>UI Templates Figma</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
      <Button title='see detail' color='#5d12d2' onPress={portfolio1} />
      </View>
      <View style={{alignItems:'center'}}>
      <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} source={require('../assets/Debutix.png')} />
      <Text style={{marginBottom:4, textAlign:'center', color:'black', fontSize:20, fontFamily:'Manrope', fontWeight:'semibold', marginHorizontal:'40'}}>UI Templates Figma</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
      <Button title='see detail' color='#5d12d2'onPress={portfolio2} />
      </View>
      <View style={{alignItems:'center'}}>
      <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} source={require('../assets/Ufood.png')} />
      <Text style={{marginBottom:4, textAlign:'center', color:'black', fontSize:20, fontFamily:'Manrope', fontWeight:'semibold', marginHorizontal:'40'}}>UI Templates Figma</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
      <Button title='see detail' color='#5d12d2'onPress={portfolio3} />
      </View>
      <View style={{alignItems:'center'}}>
      <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} source={require('../assets/Zentric.png')} />
      <Text style={{marginBottom:4, textAlign:'center', color:'black', fontSize:20, fontFamily:'Manrope', fontWeight:'semibold', marginHorizontal:'40'}}>UI Templates Figma</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
      <Button title='see detail' color='#5d12d2'onPress={portfolio4} />
      </View>
    </View>
    </ScrollView>
  );
}


export default Portfolio;