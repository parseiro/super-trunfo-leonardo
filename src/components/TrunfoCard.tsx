import PropTypes from 'prop-types';
import {DeleteButton} from './DeleteButton';
import {ICard} from "../ICard";

export default function TrunfoCard(
    props: {
        card: ICard,
        showDeleteButton: boolean,
        onDeleteButtonClick: (card: ICard) => void
    }
) {
    const {card, onDeleteButtonClick, showDeleteButton} = props;

    const {
        cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo
    } = card;

    return (
        <div className="flex flex-col flex-nowrap items-center">
            <div className="card">
                <img
                    data-testid="image-card"
                    src={cardImage}
                    alt={cardName}
                    className="round-md object-contain"
                />
                <p data-testid="name-card" className="cardName">{cardName}</p>
                <p data-testid="description-card" className="cardDescription">
                    {cardDescription}
                </p>
                <p data-testid="attr1-card" className="whitespace-nowrap">
                    Escapamento:
                    {cardAttr1}
                </p>
                <p data-testid="attr2-card" className="whitespace-nowrap">
                    Aceleração:
                    {cardAttr2}
                </p>
                <p data-testid="attr3-card" className="whitespace-nowrap">
                    Vel máx:
                    {cardAttr3}
                </p>
                <p data-testid="rare-card" className="whitespace-nowrap">
                    Raridade:
                    {cardRare}
                </p>

                {cardTrunfo && <p id="trunfo" data-testid="trunfo-card">Super Trunfo</p>}
            </div>

            {showDeleteButton ? <DeleteButton
                onClick={() => onDeleteButtonClick(card)}
            /> : ''}
        </div>
    );
}

TrunfoCard.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    onDeleteButtonClick: PropTypes.func,
    showDeleteButton: PropTypes.bool,
};

TrunfoCard.defaultProps = {
    onDeleteButtonClick: undefined,
    showDeleteButton: true,
};
