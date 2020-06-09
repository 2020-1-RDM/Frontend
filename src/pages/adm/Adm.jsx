import React, { useState, useEffect } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import edition from '../../assets/create-new-pencil-button.png';
import confirm from '../../assets/confirm.png';
import denied from '../../assets/denied.png';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import { pendingMentorings, mentoringEvaluation } from '../../services/adm';
import Title2 from './StyledComponents/Title2';
import RedeIcon from '../../components/RedeIcon/RedeIcon';
import ContainerIcon from './StyledComponents/ContainerIcon';

function Administrador() {
    
    const [cards, setCards] = useState('');
    // let count;
    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        
        getMentorias(headers);
    }, [])

    function evaluateMentoring(mentoria) {
        const token = sessionStorage.getItem('token');
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        const id = mentoria.id;
        
        mentoringEvaluation(headers, id)
        .then((res) => {
            if (res.status === 200) {
                alert('SUCESSO!');
            }
        })
        .catch((err) => {
            alert('A mentoria não pôde ser aprovada!');
        });
    }

    function getMentorias(headers) {
        
        pendingMentorings(headers) 
        .then((res) => {
            if (res.status === 200) {
                    // console.log(res);
                    generateCards(res.data);
                }
            })
            .catch((err) => {
                setCards('Nenhuma mentoria encontrada para ser aprovada.');
                // console.error(err);
            });
    }

    function generateCards(mentorias) {

        const cardsMentorias = mentorias
        .map((mentoria, key) => (  
            <>
            <Card 
                key={mentoria.id}
                title={mentoria.data.title}
                description={mentoria.data.description}
                image={`${urlFiles}/${mentoria.data.image}`}
                mentorias={true}
            />
            <ContainerIcon>
                <RedeIcon imageUrl={confirm} onClick={() => evaluateMentoring(mentoria)}/>
                <RedeIcon imageUrl={denied} />
                <RedeIcon imageUrl={edition} />
            </ContainerIcon>
            
            </>
        ));
        // count = mentorias;
        // console.log(count);
        setCards(cardsMentorias);
    }
    
    return (
        <Container>
            <RedeHeader />
            <Container.Title>APROVAÇÕES PENDENTES</Container.Title>
            <Title2>Você tem X mentorias para aprovar</Title2>
            <br/>
            {cards}
        </Container>
    );  
}

export default Administrador;