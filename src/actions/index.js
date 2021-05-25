export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementbyAppInput = (number) => {
    return {
        type: 'INCREMENTBYAPPINPUT',
        payload: number
    }
}