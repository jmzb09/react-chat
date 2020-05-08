export const loadSavedMessages = () => JSON.parse(localStorage.messages || '[]');
export const saveMessages = messages => localStorage.messages = JSON.stringify(messages);
