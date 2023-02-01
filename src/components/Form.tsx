import PropTypes from 'prop-types';
import {TrunfoDecider} from './TrunfoDecider.js';
import {ICard} from "../ICard";
import React from "react";

export default function Form(
    props: {
        card: ICard, onSaveButtonClick: () => void,
        isSaveButtonDisabled: boolean,
        onInputChange:  (event: HTMLInputElement) => void,
        hasTrunfo: boolean,
    }) {
    const {
        card, hasTrunfo, isSaveButtonDisabled,
        onInputChange, onSaveButtonClick
    } = props;

    const {
        cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo
    } = card;

    return (
        <form className="formulario">
            <label htmlFor="name" className="linhaFormulario">
                <p className="primeiraColuna">Nome do carro:</p>
                <input
                    type="text"
                    data-testid="name-input"
                    id="name"
                    name="cardName"
                    placeholder="Nome"
                    onChange={onInputChange}
                    value={cardName}
                    className="col-start-5 col-end-10"
                />
            </label>

            <label htmlFor="description" className="linhaFormulario">
                <p className="primeiraColuna">Descrição:</p>
                <textarea
                    data-testid="description-input"
                    id="description"
                    name="cardDescription"
                    onChange={onInputChange}
                    value={cardDescription}
                    className="segundaColuna"
                />
            </label>

            <label htmlFor="cardAttr1" className="linhaFormulario">
                <p className="primeiraColuna">Escapamento:</p>
                <input
                    type="number"
                    data-testid="attr1-input"
                    id="cardAttr1"
                    name="cardAttr1"
                    onChange={onInputChange}
                    value={cardAttr1}
                    className="segundaColuna"
                />
            </label>

            <label htmlFor="cardAttr2" className="linhaFormulario">
                <p className="primeiraColuna">Aceleração:</p>
                <input
                    type="number"
                    data-testid="attr2-input"
                    id="cardAttr2"
                    name="cardAttr2"
                    onChange={onInputChange}
                    value={cardAttr2}
                    className="segundaColuna"
                />
            </label>

            <label htmlFor="cardAttr3" className="linhaFormulario">
                <p className="primeiraColuna">Velocidade máxima:</p>
                <input
                    type="number"
                    data-testid="attr3-input"
                    id="cardAttr3"
                    name="cardAttr3"
                    onChange={onInputChange}
                    value={cardAttr3}
                    className="segundaColuna"
                />
            </label>

            <label htmlFor="cardImage" className="linhaFormulario">
                <p className="primeiraColuna">URL da imagem:</p>
                <input
                    type="text"
                    data-testid="image-input"
                    id="cardImage"
                    name="cardImage"
                    onChange={onInputChange}
                    value={cardImage}
                    className="segundaColuna"
                />
            </label>

            <label htmlFor="cardRare" className="linhaFormulario">
                <p className="primeiraColuna">Raridade</p>
                <select
                    value={cardRare}
                    data-testid="rare-input"
                    name="cardRare"
                    id="cardRare"
                    onChange={onInputChange}
                    className="segundaColuna"
                >
                    <option value="normal">Normal</option>
                    <option value="raro">Raro</option>
                    <option value="muito raro">Muito raro</option>
                </select>
            </label>

            <TrunfoDecider
                hasTrunfo={hasTrunfo}
                checked={cardTrunfo}
                onChange={onInputChange}
            />

            <div className="flex justify-center items-center">
                <button
                    type="button"
                    data-testid="save-button"
                    disabled={isSaveButtonDisabled}
                    onClick={onSaveButtonClick}
                    className={`saveButton ${isSaveButtonDisabled ? 'saveButtonDisabled' : ''}`}
                >
                    Salvar
                </button>
            </div>
        </form>
    );
}

Form.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired,
};
