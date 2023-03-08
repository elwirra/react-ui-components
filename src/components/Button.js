import propTypes from "prop-types";
import className from 'classnames';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-centered px-3 py-1.5 border text-white', {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-900 bg-gray-500': secondary,
        'border-green-500 bg-green-500': success,
        'border-yellow-500 bg-yellow-500': warning,
        'border-red-500 bg-red-500': danger,
        'rounded-full': rounded,
    });

    return <button { ...rest } className={classes}>{ children }</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, warning, success or danger can be true');
        }
    },
};

export default Button;