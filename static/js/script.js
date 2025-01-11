document.addEventListener('DOMContentLoaded', () => {
    // Example call logs data (This would be dynamically fetched from the backend in a real implementation)
    const callLogs = [
        {
            phoneNumber: "+1234567890",
            callType: "Incoming",
            startTime: "2025-01-11 14:30:00",
            endTime: "2025-01-11 14:35:00",
            duration: "5 minutes"
        },
        {
            phoneNumber: "+0987654321",
            callType: "Outgoing",
            startTime: "2025-01-11 15:00:00",
            endTime: "2025-01-11 15:10:00",
            duration: "10 minutes"
        }
    ];

    // Function to render call logs in the table
    const renderCallLogs = () => {
        const tableBody = document.querySelector('#callLogTable tbody');
        tableBody.innerHTML = ''; // Clear previous entries

        callLogs.forEach(log => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${log.phoneNumber}</td>
                <td>${log.callType}</td>
                <td>${log.startTime}</td>
                <td>${log.endTime}</td>
                <td>${log.duration}</td>
                <td><button onclick="showMessageForm('${log.phoneNumber}')">Send Message</button></td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Function to show the message form for a specific phone number
    const showMessageForm = (phoneNumber) => {
        const messageSection = document.getElementById('sendMessageSection');
        messageSection.style.display = 'block';

        // Pre-fill message template (optional)
        const messageField = document.getElementById('message');
        messageField.value = `Message for ${phoneNumber}: `;
    };

    // Form submission handling for sending a message
    const messageForm = document.getElementById('messageForm');
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from actually submitting

        const message = document.getElementById('message').value;
        alert(`Message sent: ${message}`); // Placeholder for actual send operation

        // Hide message form after sending
        document.getElementById('sendMessageSection').style.display = 'none';
        messageForm.reset(); // Clear form
    });

    // Initial render of call logs
    renderCallLogs();
});