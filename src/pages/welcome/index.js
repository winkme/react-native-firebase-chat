import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
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
    </View>
);

Welcome.navigationOptions = {
    header: null,
};

export default Welcome;
