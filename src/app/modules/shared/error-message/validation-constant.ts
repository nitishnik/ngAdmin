export const NUMERIC_CONSTANTS = {
    emailMaxLength : 100,
    passwordMinLength : 8,
    passwordMaxLength : 20,
    nameMinLength : 3, 
    nameMaxLength : 40,
    subTitleMinLength : 2, 
    subTitleMaxLength : 150,
    titleMinLength : 2, 
    titleMaxLength : 60,
    phoneMinLength : 8,
    phoneMaxLength : 14,
    locationMinLength:2,
    locationMaxLength:280,
    headingMaxLength:50,
    userNameMaxLength:50,
    priceMinLength:1,
    priceMaxLength:10
};

export const PATTERN = {
    email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // password:  /^[^\s]+$/,
    // password:  /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,15}$/,
    PASSWORD: /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$/,
    nameSpace: /^[^-\s][a-zA-Z0-9\s-]+$/,
    name: /^[^-`@~\s][a-zA-Z0-9\s-]+$/,
    url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    phone: "^[0-9]+$",
    price:/(^[0][1-9]+)|([1-9]\d*)+$/
};

export const PATTERN_ERRORS =  {
    blankSpace: `Can not contain blank spaces & special character`,
    onlyNumber: `Only digits are allowed`,
    PASSWORD_PATTERN: `Password must contain at least  1 number, 1 special, 1 lowercase, 1 uppercase character and no space.`,
    MATCH_PASSWORD: "New Password and Confirm Password do not match.",
    EMAIL_PATTERN: "Please enter a valid email.",
};
