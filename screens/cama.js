import React, {useState} from "react";
import { TouchableWithoutFeedback, Keyboard, TextInput, Button, View, StyleSheet} from 'react-native';
import { HomeContainer, InnerContainer, PageTitle, SubTitle, StyledPopUp, PopUpText, StyledFormArea } from "../components/style";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import styled from "styled-components";

const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444", 
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

const Cama = () => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible); // Pressing the button will call handleModal and return the opposite state.

    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Keyboard Dismissed!')
        }}>
            <>
                <StatusBar style='dark'/>
                <InnerContainer>
                    <HomeContainer>
                        <PageTitle>Cama 1</PageTitle>
                        <SubTitle>Francisco de Almeida</SubTitle>
                        <StyledFormArea>
                            <StyledPopUp onPress={handleModal}>
                                <PopUpText>Frequência Cardíaca</PopUpText>
                                <Modal isVisible={isModalVisible}>
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <TextInput style={styles.TextBox} placeholder="BPM" textAlign="center"></TextInput>
                                        <Button title="Guardar" onPress={handleModal}/>
                                        <Button title="Cancelar" onPress={handleModal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp>
                                <PopUpText>Frequência Respiratória</PopUpText>
                            </StyledPopUp>
                            <StyledPopUp>
                                <PopUpText>Tensão</PopUpText>
                            </StyledPopUp>
                            <StyledPopUp>
                                <PopUpText>Temperatura</PopUpText>
                            </StyledPopUp>
                            <StyledPopUp>
                                <PopUpText>Saturação de Oxigénio</PopUpText>
                            </StyledPopUp>
                            <StyledPopUp>
                                <PopUpText>Bem-Estar</PopUpText>
                            </StyledPopUp>
                        </StyledFormArea>
                    </HomeContainer>
                </InnerContainer>
            </>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    TextBox: {
        padding: 15,
        backgroundColor: Colors.primary,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.brand,
        marginVertical: 10,
        height: 60,
        width: 100,
    },
})

export default Cama;