export const rules = {
    required: (message: string = 'Обезательное поле') => ({
        required: true, 
        message
    })
}