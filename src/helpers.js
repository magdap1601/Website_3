export const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (singleError) => singleError.length > 0 && (valid === false)
    );
    return valid;
};

