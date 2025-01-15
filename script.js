const questions = [
    {
      Emote: "Amel-1.jpeg",
      question: "Apa makanan favorit kamu?",
      options: ["Nasi Goreng🍛", "Mie Goreng🍝", "Ayam Bakar🍖", "Ayam Goreng🍗", "Mie Ayam🥗", "Sate Ayam🍢"]
    },
    {
      Emote: "Amel-5.jpeg",
      question: "Apa minuman favorit kamu?",
      options: ["Teh🥤", "Kopi☕", "Jus Buah🍹", "Air Mineral🥛", "Matcha🍾", "Soda🍷"]
    },
    {
      Emote: "Amel-3.jpeg",
      question: "kalo kamu gabut biasanya ngapain?",
      options: ["Membaca", "Bengong", "Main Game", "Scroll Media Sosial", "Nonton Youtube", "Chat Random"]
    },
    {
      Emote: "Amel-4.jpeg",
      question: "Siapa orang favorit kamu sekarang?",
      options: ["Rayhan", "Udah pasti Rayhan", "siapa lagi kalo bukan Rayhan", "Kalo bukan Rayhan parah si", "fiks Rayhan", "Rayhan Wahyu Nugroho"]
    }
  ];
  
  let currentQuestionIndex = 0;
  const answers = {};
  const questionContainer = document.getElementById("question-container");
  const modal = document.getElementById("modal");
  const closeModalButton = document.getElementById("close-modal");
  const modalContent = document.getElementById("result-list");
  
  // start button//
  const AppContent = document.getElementById("App-Content");
  const AppStart = document.getElementById("App-Start");
  const StartButton = document.getElementById("Start");

  StartButton.addEventListener("click", () =>{
    AppContent.style.display = "flex";
    AppStart.style.display = "none";
    loadQuestion(currentQuestionIndex);
  })
  // start button//
  
  function loadQuestion(index) {
    const questionData = questions[index];
    questionContainer.innerHTML = `
     <img src="${questionData.Emote}" alt="Question Emote" class="w-24 md:w-32 lg:w-40">
  
     <h2 class="text-blue-400 text-center font-bold mt-4 quest">${questionData.question}</h2>

     <!-- Bagian Opsi Jawaban -->
    <div class="w-full mt-4 space-y-2">
    ${questionData.options.map(option => `
      <button class="bg-blue-400 text-white w-full h-12 rounded-md option" data-answer="${option}"> ${option}</button>
    `).join("")}
    </div>`;
  
    document.querySelectorAll(".option").forEach(button => {
      button.addEventListener("click", () => {
        const answer = button.getAttribute("data-answer");
        answers[questionData.question] = answer;
  
        if (index + 1 < questions.length) {
          loadQuestion(index + 1);
        } else {
          showModal(); // Show the modal after the last question is answered
        }
      });
    });
  }
  
  // Show modal with results
  function showModal() {
    modalContent.innerHTML = Object.keys(answers)
        .map(question => `<li><strong>${question}:</strong> ${answers[question]}</li>`)
        .join("");
    modal.classList.remove("hidden");
  }
  function resetQuiz() {
    currentQuestionIndex = 0;
    Object.keys(answers).forEach(key => delete answers[key]); // Kosongkan jawaban
    AppContent.style.display = "none"; // Sembunyikan konten pertanyaan
    AppStart.style.display = "flex";   // Tampilkan halaman awal
  }
  
  
  // Close the modal
  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    resetQuiz();
    
  });
  
  
  