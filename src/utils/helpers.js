export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('vn', {
        style: 'currency',
        currency: 'vnd',
    }).format(number);
    return newNumber;
}