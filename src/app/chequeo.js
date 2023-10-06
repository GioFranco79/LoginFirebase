const logoutl = document.querySelectorAll('.logout');
const loginl = document.querySelectorAll('.login');

export const loginChek = (user) => {
    if (user) {
        logoutl.forEach(link => link.style.display = 'none');
        loginl.forEach(link => link.style.display = 'block');
    } else {
        logoutl.forEach(link => link.style.display = 'block');
        loginl.forEach(link => link.style.display = 'none');
    }
}