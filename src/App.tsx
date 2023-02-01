import './App.css';

import {ICard} from "./ICard";
import React from "react";
import Form from "./components/Form";
import TrunfoCard from "./components/TrunfoCard";

export function isNumeric(value: any): boolean {
    return !Number.isNaN(value - parseFloat(value));
}

function isCardInvalid(card: ICard) {
    const SUM_MAX = 210;
    const INDIVIDUAL_MAX = 90;
    const {cardDescription, cardImage, cardName, cardRare} = card;

    if (!isNumeric(card.cardAttr1)
        || !isNumeric(card.cardAttr2)
        || !isNumeric(card.cardAttr3)) {
        return true;
    }

    let cardAttr1;
    let cardAttr2;
    let
        cardAttr3;
    try {
        cardAttr1 = +card.cardAttr1;
        cardAttr2 = +card.cardAttr2;
        cardAttr3 = +card.cardAttr3;
    } catch (e) {
        return true;
    }

    return cardName.length === 0
        || cardDescription.length === 0
        || cardImage.length === 0
        || cardRare.length === 0
        || cardAttr1 < 0 || cardAttr1 > INDIVIDUAL_MAX
        || cardAttr2 < 0 || cardAttr2 > INDIVIDUAL_MAX
        || cardAttr3 < 0 || cardAttr3 > INDIVIDUAL_MAX
        || (cardAttr1 + cardAttr2 + cardAttr3) > SUM_MAX;
}

const emptyCard: ICard = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
};

function App() {
    const [cardList, setCardList] = React.useState<ICard[]>([]);

    const [currentCard, setCurrentCard] = React.useState(emptyCard);

    const [isSaveButtonDisabled, setSaveButtonDisabled] = React.useState(true);

    React.useEffect(
        () => {
            setSaveButtonDisabled(isCardInvalid(currentCard));
        },
        [currentCard],
    );

    const onDeleteButtonClick = (card: ICard) => {
        console.log(cardList);
        console.log('Deletando:', card);
        const newList = cardList.filter(
            (c: ICard) => c.cardName !== card.cardName && c.cardDescription !== card.cardDescription,
        );
        console.log(newList);
        setCardList(newList);
    };

    const hasTrunfo = !!cardList.find((c: ICard) => c.cardTrunfo === true);
    const onSaveButtonClick = () => {
        setCardList([...cardList, currentCard]);
        setCurrentCard(emptyCard);
    };

    const onInputChange =
        (target: HTMLInputElement) => {
            const {name} = target;

            const value = target.type === 'checkbox' ? target.checked : target.value;

            setCurrentCard((old) => ({...old, [name]: value}));
        }
    ;

    return (
        <div>
            <h1 className="text-5xl text-center">Super Trunfo</h1>
            <div className="editor">
                <Form
                    onInputChange={onInputChange}
                    isSaveButtonDisabled={isSaveButtonDisabled}
                    hasTrunfo={hasTrunfo}
                    onSaveButtonClick={onSaveButtonClick}
                    card={currentCard}
                />
                <TrunfoCard
                    showDeleteButton={false}
                    card={currentCard}
                />
            </div>
            <div className="mx-auto my-5 p-5 flex flex-wrap gap-x-5">
                {cardList.map((carta: ICard) => (
                    <TrunfoCard
                        key={carta.cardName}
                        showDeleteButton
                        onDeleteButtonClick={onDeleteButtonClick}
                        card={carta}
                    />))}
            </div>
        </div>
    );
}

export default App
