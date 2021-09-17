import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Modal, Button, TouchableHighlight } from 'react-native';
const App = () => {
  const [modalHab1, setModalHab1] = useState(false);
  const [modalHab2, setModalHab2] = useState(false);
  const [modalHab3, setModalHab3] = useState(false);
  const [modalHab4, setModalHab4] = useState(false);
  return (

    <>
      <ScrollView>


        <Modal transparent={true} animationType="slide" visible={modalHab1} onRequestClose={() => {
          alert('Modal se ha cerrado.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}> Habitación Deluxe</Text>
              <Text> Linda habitación con buena vista.</Text>
              <Button title="Cerrar" onPress={() => { setModalHab1(!modalHab1) }}></Button>
            </View>
          </View>

        </Modal>


        <Modal transparent={true} animationType="slide" visible={modalHab2} onRequestClose={() => {
          alert('Modal se ha cerrado.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}> Habitación Premium</Text>
              <Text> Linda habitación con linda vista al mar.</Text>
              <Button title="Cerrar" onPress={() => { setModalHab2(!modalHab2) }}></Button>
            </View>
          </View>

        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalHab3} onRequestClose={() => {
          alert('Modal se ha cerrado.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}> Habitación Indivudual</Text>
              <Text> Habitación pequeña para 1 persona pero adaptada a las necesitades de todos los clientes.
              </Text>
              <Button title="Cerrar" onPress={() => { setModalHab3(!modalHab3) }}></Button>
            </View>
          </View>

        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalHab4} onRequestClose={() => {
          alert('Modal se ha cerrado.');
        }}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}> Habitación último piso</Text>
              <Text> Una habitación que se encuentra en lo más alto del hotel que permite apreciar todo el paisaje de la mejor
                manera convirtiéndolo en una experiencia única.
              </Text>
              <Button title="Cerrar" onPress={() => { setModalHab4(!modalHab4) }}></Button>
            </View>
          </View>

        </Modal>

        <View >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.banner}
              source={require('./src/img/principal.jpg')} resizeMode="cover" />
          </View>
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.tituloPrincipal} Image="./src/img/principal.jpg">Hotel & Suite</Text>

          </View>
        </View>

        <View styles={styles.contenedor}>


          <Text style={styles.titulo2}>Habitaciones del hotel</Text>
          <ScrollView horizontal style={styles.horizontal}>

            <View>
              <TouchableHighlight onPress={() => { setModalHab1(!modalHab1) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab1.jpg')} />
              </TouchableHighlight>
            </View> 
            <View>
              <TouchableHighlight onPress={() => { setModalHab2(!modalHab2) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab2.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => { setModalHab3(!modalHab3) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab3.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => { setModalHab4(!modalHab4) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/hab4.jpg')} />
              </TouchableHighlight>
            </View>
          </ScrollView>


          <Text style={styles.titulo2}>Servicios</Text>
          <View>
            <View >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.banner}
                  source={require('./src/img/servicio1.jpg')} resizeMode="cover" />
              </View>
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.titulo}>Desayuno</Text>

              </View>
              
            </View>
           
            <View >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.banner}
                  source={require('./src/img/servicio2.jpg')} resizeMode="cover" />
              </View>
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.titulo}>Aparcamiento</Text>

              </View>
              
            </View>
           
            <View >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.banner}
                  source={require('./src/img/servicio3.jpg')} resizeMode="cover" />
              </View>
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.titulo}>Internet</Text>

              </View>
              
            </View>

          </View>

          <Text style={styles.titulo2}>Lugares de interés cercanos</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta1.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta2.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta3.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta4.jpg')} />
            </View>

          </View>


        </View>



      </ScrollView>

    </>
  );
};


const styles = StyleSheet.create({
  banner: {
    height: 300,
    flex: 1,

  },
  tituloPrincipal:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
    color: '#e81a7a'
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff', margin: 50, padding: 40, borderRadius: 10, flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
  horizontal: {
    marginTop: 15,
  },
  texto1: {
    fontSize: 22,
    textAlign: 'center',
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
    color: '#000'
  }

});
export default App;