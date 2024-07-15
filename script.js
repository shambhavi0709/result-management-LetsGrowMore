function submitResult() {
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const subject = document.getElementById('subject').value;
    const marks = document.getElementById('marks').value;

    if (studentName && studentId && subject && marks) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.status === 200) {
                document.getElementById('result').innerHTML = `<p>${this.responseText}</p>`;
            }
        }
        xhr.send(`studentName=${studentName}&studentId=${studentId}&subject=${subject}&marks=${marks}`);
    } else {
        alert('Please fill in all fields');
    }
}
