import PropTypes from 'prop-types';

export function DeleteButton(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-testid="delete-button"
      onClick={ onClick }
      className="deleteButton"
    >
      Excluir
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
