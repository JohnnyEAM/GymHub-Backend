// Firebase is already initialized in the HTML via script module, no need to reinitialize here.

// Function to submit feedback
window.submitFeedback = async function() {
    let feedback = document.getElementById("feedback").value.trim();

    if (!feedback) {
        alert("Please enter your feedback before submitting.");
        return;
    }

    try {
        // Add the feedback document to Firestore
        await addDoc(collection(db, "feedback"), {
            feedback: feedback,
            timestamp: serverTimestamp()
        });

        alert("✅ Your feedback has been saved securely in our system!");

        // Hide feedback section & show thank-you message
        document.getElementById("feedback-section").style.display = "none";
        document.getElementById("thank-you").style.display = "block";

        // Show confirmation message in chat
        let chatbox = document.getElementById("chatbox");
        chatbox.innerHTML += `<p><strong>GymHub Chatbot:</strong> 📝 Thanks for your feedback! Have a great day! 😊</p>`;

        // Clear the input field
        document.getElementById("feedback").value = "";
    } catch (error) {
        console.error("Error submitting feedback:", error);
        alert("❌ There was an error saving your feedback. Please try again.");
    }
};

