function leapYear(yearInput){
  if (yearInput % 4 === 0 && yearInput % 100 !== 0 || yearInput % 400 === 0) {
    return true
  } else if (yearInput){
    return false
  };
};
$(document).ready(function(){
  $(".form-group").submit(function(event){
    var year = parseInt($("input#years").val());
    console.log(year);
    if (!year || year === 0){
      alert("Please enter a number")
    } else
    {
      if (leapYear(year))
      {
        $(".output").text("This is a leap year")
      } else
      {
        $(".output").text("This is NOT a leap year")
      };
    };
    event.preventDefault();
  });
});
