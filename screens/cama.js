import React, {useState} from "react";
import { TouchableWithoutFeedback, Keyboard, Text, Button, View} from 'react-native';
import { HomeContainer, InnerContainer, PageTitle, SubTitle, StyledPopUp, PopUpText, StyledFormArea } from "../components/style";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";

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

    const [isModalVisible, setIsModalVisible] = useState(false);

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
                            <StyledPopUp>
                                <PopUpText>Frequência Cardíaca</PopUpText>
                                <Modal isVisible={isModalVisible}>
                                    <View style={{ flex: 1 }}>
                                        <Text>Hello!</Text>
                                        <Button title="Hide Modal" onPress={handleModal}/>
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

export default Cama;