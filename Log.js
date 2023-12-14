const users = [
    { username: 'andy', password: '1234'},
    { username: 'bobby', password: '2345'},
    { username: 'candy', password: '3456'}
];

let attemptCount = 0;
const maxAttempts = 3;

while (attemptCount < maxAttempts) {
    let inp1 = prompt('Username');
    let inp2 = prompt('Password');

    // ตรวจสอบ username
    const user = users.find(u => u.username === inp1);

    if (!user) {
        alert('No access');
        attemptCount++;
        continue;
    }

    // ตรวจสอบ password
    if (user.password === inp2) {
        alert('Welcome');
        break;
    } else {
        alert('No access');
        attemptCount++;
    }
}

if (attemptCount === maxAttempts) {
    alert('Maximum login attempts reached. Please try again later.');
}
