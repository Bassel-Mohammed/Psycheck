function showNumber() {

  let answer1 = document.querySelector('input[name="question1"]:checked');
  let answer2 = document.querySelector('input[name="question2"]:checked');
  let answer3 = document.querySelector('input[name="question3"]:checked');
  let answer4 = document.querySelector('input[name="question4"]:checked');
  let answer5 = document.querySelector('input[name ="question5"]:checked');
  let answer6 = document.querySelector('input[name="question6"]:checked');
  let answer7 = document.querySelector('input[name="question7"]:checked');
  let answer8 = document.querySelector('input[name="question8"]:checked');
  let answer9 = document.querySelector('input[name="question9"]:checked');
  let answer10= document.querySelector('input[name="question10"]:checked');


  if (answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8 && answer9 && answer10) {
    alert(Number(answer1.value) + Number(answer2.value) + Number(answer3.value) + Number(answer4.value) + Number(answer5.value) + Number(answer6.value) + Number(answer7.value) + Number(answer8.value) + Number(answer9.value) + Number(answer10.value) );

  } else {
    console.log("No option selected");
  }
}


//  show result start


function test(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    let counter = 0;
    let answer;

    const buttonValueSelector = document.getElementById('button');
    const buttonValue = buttonValueSelector.value;
    const formLength = document.querySelectorAll('.question');

    for (let i = 1; i <= formLength.length; i++) {
        answer = document.querySelector(`input[name="question${i}"]:checked`);

        if (answer) {
            counter += Number(answer.value);
        }
    }

    // Store the result in localStorage
    localStorage.setItem('score', counter);
    localStorage.setItem('buttonValue', buttonValue);

    // Redirect to the result page
    window.location.href = 'result.html';
}

// If on result.html, display the result
document.addEventListener('DOMContentLoaded', function() {

  const submitButtonValue = localStorage.getItem('buttonValue');


    if (window.location.pathname.endsWith('result.html') ) {


// jobBurnOutTest CONDITION Start
      if (submitButtonValue == 'jobBurnOutTest') {
        showBurnOutAdvices();


        const score = localStorage.getItem('score');

        if (score >= 0 && score<20) {
          document.getElementById('result').textContent = score;
          document.getElementById('message').textContent = "نتيجتك تظهر انك سليم ولا تعاني من الاحتراق الوظيفي , لكن قد يكون لديك بعض اعراض الارهاق و كل ما تحتاجه القليل من الراحة"

        }

        if (score >= 20 && score<30) {
          document.getElementById('result').textContent = score;
          document.getElementById('message').textContent = "نتيجتك تظهر انك تعاني من الاحتراق الوظيفي بدرجة متوسطة , حاول ان تتواصل مع مختص ليساعدك على التحسن قبل ان تزداد الامور سوء"

        }
        if (score >= 30 && score<=40){
          document.getElementById('result').textContent = score;
          document.getElementById('message').textContent = "نتيجتك تظهر انك قد تعاني من الاحتراق الوظيفي بدرجة حادة , حاول ان تتواصل مع شخص مختص فلكل مشكلة حل"
        }

        }

        // jobBurnOutTest CONDITION END





    }
});


// show result end










// test start             test start            test start               test start



function showBurnOutAdvices() {

    // Select the first element with the class name 'advice1'
    let adviceImage = document.querySelector('.advice1');

    // Check if the element exists before changing the src
    if (adviceImage) {
        adviceImage.src = "../images/Holiday.png"; // Set the src of the element
    }

    // Repeat for other images if necessary
    let adviceImage2 = document.querySelector('.advice2');
    if (adviceImage2) {
        adviceImage2.src = "../images/TasksOrganization.png"; // Set the src for advice2
    }

    let adviceImage3 = document.querySelector('.advice3');
    if (adviceImage3) {
        adviceImage3.src = "../images/Talking.png"; // Set the src for advice3
    }


}





// test end              test end            test end             test end
