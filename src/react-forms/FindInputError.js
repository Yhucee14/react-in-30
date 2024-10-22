//Given an errors object and an input name, this function filters the errors object and returns th error of the given input

export function FindInputError(errors, name) {
    const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
        return Object.assign(cur, {error: errors[key]})
    },{})
    return filtered
}