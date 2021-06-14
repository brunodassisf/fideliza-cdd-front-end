import React from 'react';
import {
    Container,
    Content,
    IconCalendar,
    Title,
    WaveMid,
    WaveRotate,
} from './Dashboard.styles';
import Menu from '../../../components/Menu';

const Dashboard = () => {
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

export default Dashboard;
