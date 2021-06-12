import React from 'react';
import { Container, Content, Divider, Title, Wave } from './ModalAcess.styles';
import SignUp from '../../SignUp/components';
import SignIn from '../../SignIn/components';

const ModalAcess = () => {
    return (
        <Container>
            <Title>Junte, comece a fidelizar</Title>
            <Content>
                <div>
                    <SignIn />
                </div>
                <Divider>ou</Divider>
                <div>
                    <SignUp />
                </div>
            </Content>
            <Wave />
        </Container>
    );
};

export default ModalAcess;
