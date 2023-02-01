import PropTypes from 'prop-types';

export function TrunfoDecider(
    props: {
        hasTrunfo: boolean,
        checked: boolean,
        onChange: ({target}: { target: any }) => void
    }
) {

    const {hasTrunfo, checked, onChange} = props;

    if (hasTrunfo) {
        return (
            <div className="linhaFormulario">
                <p className="colunaUnica">
                    Você já tem um Super Trunfo em seu baralho
                </p>
            </div>
        );
    }
    return (
        <label htmlFor="cardTrunfo" className="linhaFormulario">
            <input
                type="checkbox"
                id="cardTrunfo"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={checked}
                onChange={onChange}
                className="col-start-3 col-end-5"
            />
            <p className="segundaColuna">Super Trunfo</p>
        </label>
    );
}

TrunfoDecider.propTypes = {
    hasTrunfo: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};
