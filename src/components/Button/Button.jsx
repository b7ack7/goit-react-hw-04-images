import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styled';

export const Button = ({addPage}) => {
    return (
        <ButtonWrapper type="button" onClick={addPage}>Load more</ButtonWrapper>
    )
}

Button.propTypes = {
    addPage: PropTypes.func.isRequired
}