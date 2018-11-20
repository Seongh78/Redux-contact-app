/**
 * 깊은복사 - Deep copy
 */
export const clone = input => {
    return JSON.parse(JSON.stringify(input))
}