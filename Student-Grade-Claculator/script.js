const calculate = () => {
  const physics = document.querySelector("#physics").value;
  const chemistry = document.querySelector("#chemistry").value;
  const maths = document.querySelector("#maths").value;
  const biology = document.querySelector("#biology").value;

  const totalmarks = parseFloat(physics )+ parseFloat(chemistry) + parseFloat(maths) + parseFloat(biology);

  const percentage = (totalmarks / 400) * 100;

  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  if (chemistry == "" || physics == "" || maths == "" || biology == "") {
    document.querySelector("#result").innerHTML = "Please Enter All The Fields";
  } else {
    if (percentage <= 39) {
      document.querySelector(
        "#result"
      ).innerHTML = ` Your percentage is ${percentage} and your grade is ${grades}, You are fail`;
    } else {
      document.querySelector(
        "#result"
      ).innerHTML = `Your percentage is ${percentage} and your grade is ${grades} , You are Pass`;
    }
  }
};
