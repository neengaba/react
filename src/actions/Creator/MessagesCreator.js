export const clearMessage = () => ({
    type: 0,
    notificationType: null,
    showMessage: false,
    title: null,
    description: null
});

export const sendMessage = (notificationType, title, description) => ({
    type: 1,
    notificationType: notificationType,
    showMessage: true,
    title: title,
    description: description
});