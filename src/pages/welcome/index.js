import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        position: 'aguardando...',
    };

    componentDidMount() {
        this.setState({ position: 'iniciando busca...' });
        this.gpsInit();
    }

    gpsInit = async () => {
        console.tron.log('Permissions', Permissions);
        Permissions.request('location').then((response) => {
            if (response === 'authorized') {
                Geolocation.watchPosition((position) => {
                    this.setState({ position: position });
                    console.tron.log(position);
                }, (error) => {
                    // See error code charts below.
                    console.tron.log(error.code, error.message);
                }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 0 });
            } else {
                console.tron.log("GPS permission denied");
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem vindo!
                </Text>
                <Text style={styles.text}>
                    Entre com o apelido que desejar!
                </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Apelido"
                        underlineColorAndroid="rgba(0, 0, 0, 0)"
                    />

                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>
                    {this.state.position.coords ? `${this.state.position.coords.latitude}, ${this.state.position.coords.longitude}` : 'buscando gps...'}
                </Text>
            </View>
        );
    }
}
