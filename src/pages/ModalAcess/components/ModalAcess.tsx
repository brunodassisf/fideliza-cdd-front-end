import React from 'react';
import {
    BackBottom,
    Container,
    Content,
    Title,
    Wave,
} from './ModalAcess.styles';
import SignUp from '../../SignUp/components';
import SignIn from '../../SignIn/components';

const ModalAcess = () => {
    return (
        <Container>
            <Content>
                <div>
                    <SignIn />
                </div>
                <div>
                    <SignUp />
                </div>
            </Content>
            <Wave />
            <BackBottom />
        </Container>
    );
};

export default ModalAcess;
