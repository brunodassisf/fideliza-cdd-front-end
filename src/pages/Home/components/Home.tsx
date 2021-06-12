import React from 'react';
import {
    Container,
    Content,
    IconCalendar,
    Title,
    WaveMid,
    WaveRotate,
} from './Home.styles';
import Menu from '../../../components/Menu';

const Home = () => {
    return (
        <Container>
            <Menu />
            <Content>
                <Title>Calendário de fidelização</Title>
                <IconCalendar />
            </Content>
            <WaveMid />
            <WaveRotate />
        </Container>
    );
};

export default Home;
