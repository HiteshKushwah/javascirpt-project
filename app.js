// Queue to hold complaints
let complaintsQueue = [];

// Function to add a complaint
function addComplaint() {
  const input = document.getElementById("complaintInput");
  const complaint = input.value.trim();

  if (complaint === "") {
    alert("Please enter a valid complaint.");
    return;
  }

  complaintsQueue.push(complaint);
  input.value = ""; // Clear input field
  updateComplaintList();
  alert(`Complaint added: "${complaint}"`);
}

// Function to resolve a complaint
function resolveComplaint() {
  if (complaintsQueue.length === 0) {
    alert("No complaints to resolve!");
    return;
  }

  const resolvedComplaint = complaintsQueue.shift();
  updateComplaintList();
  alert(`Resolved Complaint: "${resolvedComplaint}"`);
}

// Function to update the pending complaints list in the UI
function updateComplaintList() {
  const complaintsDiv = document.getElementById("complaints");
  complaintsDiv.innerHTML = ""; // Clear existing list

  if (complaintsQueue.length === 0) {
    complaintsDiv.innerHTML = "<p>No pending complaints.</p>";
    return;
  }

  complaintsQueue.forEach((complaint, index) => {
    const complaintItem = document.createElement("div");
    complaintItem.className = "complaint-item";
    complaintItem.textContent = `${index + 1}. ${complaint}`;
    complaintsDiv.appendChild(complaintItem);
  });
}


