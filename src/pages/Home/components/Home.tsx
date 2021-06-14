import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import {
    Container,
    Content,
    IconCalendar,
    Image01,
    SubTitle,
    Title,
    Wave,
} from './Home.styles';

const Home = () => {
    const history = useHistory();

    const redirectAcess = () => {
        history.push('/acesso');
    };

    return (
        <Container>
            <Content>
                <div>
                    <Title>Comprando, você ja participa!</Title>
                    <SubTitle>
                        Ao comprar você já fideliza e participa!
                    </SubTitle>
                    <Button color="secondary" onClick={redirectAcess}>
                        Começar
                    </Button>
                </div>
                <Image01 />
            </Content>
            <Wave />
        </Container>
    );
};

export default Home;
